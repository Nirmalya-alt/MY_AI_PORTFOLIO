import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const lerp = (a, b, t) => a + (b - a) * t;

/*
 * Avatar3D
 * Props:
 *   mouseStateRef – React ref { current: { x, y } }  (-1…1 each)
 *                  normalised relative to the Hero section.
 *                  On mouse-leave the parent resets it to {x:0, y:0}.
 */
function Avatar3D({ mouseStateRef }) {
  const containerRef = useRef(null);
  const canvasRef    = useRef(null);
  const [loading,  setLoading]  = useState(true);
  const [progress, setProgress] = useState(0);
  const [error,    setError]    = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas    = canvasRef.current;
    if (!container || !canvas) return;

    /* ── Three.js state (all mutable, never in React state) ─────────── */
    let scene, camera, renderer, mixer;
    let model = null;
    let rafId = null;

    // Base values set by applyLayout() – all offsets are relative to these
    const base = { x: 0, y: 0, scale: 1 };

    // Smooth interpolated values (update every frame in rAF)
    const smooth = { x: 0, y: 0, dragRotation: 0 };

    // Manual timing (avoids THREE.Clock deprecation warning)
    let lastTime  = performance.now();
    const startTime = performance.now();

    /* ── scene ───────────────────────────────────────────────────────── */
    try {
      scene = new THREE.Scene();

      const w = container.clientWidth || 300;
      const h = container.clientHeight || 400;

      camera = new THREE.PerspectiveCamera(32, w / h, 0.1, 100);
      camera.position.set(0, 0.2, 4.5);

      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type    = THREE.PCFShadowMap;
      renderer.outputColorSpace   = THREE.SRGBColorSpace;
    } catch (webglErr) {
      console.warn("[Avatar3D] WebGL not supported or failed to initialize:", webglErr);
      setTimeout(() => {
        setError(true);
        setLoading(false);
      }, 0);
      return;
    }

    const handleContextLost = (e) => {
      e.preventDefault();
      console.warn("[Avatar3D] WebGL context lost");
      setError(true);
      setLoading(false);
    };
    canvas.addEventListener("webglcontextlost", handleContextLost, false);

    /* ── lighting ────────────────────────────────────────────────────── */
    scene.add(new THREE.AmbientLight(0xfff0d0, 1.4));

    const key = new THREE.DirectionalLight(0xffb347, 2.8);
    key.position.set(3, 5, 4);
    key.castShadow = true;
    key.shadow.mapSize.setScalar(1024);
    key.shadow.camera.near   =  0.5;
    key.shadow.camera.far    = 14;
    key.shadow.camera.left   = -2;
    key.shadow.camera.right  =  2;
    key.shadow.camera.top    =  3;
    key.shadow.camera.bottom = -2;
    key.shadow.bias = -0.0015;
    scene.add(key);

    const rim = new THREE.DirectionalLight(0x88ccff, 1.8);
    rim.position.set(-4, 2, -3);
    scene.add(rim);

    const fill = new THREE.DirectionalLight(0xffffff, 0.7);
    fill.position.set(0, 2, 5);
    scene.add(fill);

    /* ── contact-shadow floor ────────────────────────────────────────── */
    const FLOOR_Y = -1.4;
    const floor   = new THREE.Mesh(
      new THREE.PlaneGeometry(12, 12),
      new THREE.ShadowMaterial({ opacity: 0.3, transparent: true })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = FLOOR_Y;
    floor.receiveShadow = true;
    scene.add(floor);

    /* ── responsive layout helper ────────────────────────────────────── */
    let rawHeight = 1; // raw model height at scale=1 (set on first load)

    const applyLayout = () => {
      if (!model) return;

      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

      const mult  = isMobile ? 0.85 : isTablet ? 0.98 : 1.12;
      const camZ  = isMobile ? 4.0  : isTablet ? 4.3  : 4.5;
      const camY  = isMobile ? 0.1  : 0.2;

      const scale = (1.9 / rawHeight) * mult;
      model.scale.setScalar(scale);

      // Re-measure after scale, place feet exactly on floor
      const box = new THREE.Box3().setFromObject(model);
      // box.min.y is in world space (includes model.position.y)
      // We want: box.min.y (world) = FLOOR_Y
      model.position.y += FLOOR_Y - box.min.y;

      // Store base values so the mouse-interaction loop knows the rest position
      base.x     = model.position.x;
      base.y     = model.position.y;
      base.scale = scale;

      camera.position.set(0, camY, camZ);
    };

    /* ── GLB loader ──────────────────────────────────────────────────── */
    const loader = new GLTFLoader();
    const handleGLTFLoad = (gltf) => {
      model = gltf.scene;

      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow    = true;
          child.receiveShadow = true;
          if (child.material) {
            child.material.roughness = Math.max(child.material.roughness ?? 0.7, 0.55);
            child.material.metalness = Math.min(child.material.metalness ?? 0.1, 0.15);
          }
        }
      });

      // Centre at origin (scale = 1) then measure raw height
      const rawBox = new THREE.Box3().setFromObject(model);
      rawHeight    = rawBox.getSize(new THREE.Vector3()).y;
      const centre = rawBox.getCenter(new THREE.Vector3());
      model.position.set(-centre.x, -rawBox.min.y, -centre.z);
      scene.add(model);

      applyLayout(); // sets base.x, base.y, base.scale

      // Play idle animation
      if (gltf.animations?.length) {
        mixer = new THREE.AnimationMixer(model);
        const clip   = gltf.animations.find(a => a.name.toLowerCase().includes("idle"))
                    ?? gltf.animations[0];
        mixer.clipAction(clip).play();
      }

      setLoading(false);
    };

    const handleProgress = (xhr) => {
      if (xhr.total > 0) setProgress(Math.round((xhr.loaded / xhr.total) * 100));
    };

    loader.load(
      "/models/avatar-new.glb",
      handleGLTFLoad,
      handleProgress,
      () => {
        // Fallback to root /avatar-new.glb
        loader.load(
          "/avatar-new.glb",
          handleGLTFLoad,
          handleProgress,
          (err2) => {
            console.error("[Avatar3D] GLB load error:", err2);
            setError(true);
            setLoading(false);
          }
        );
      }
    );

    /* ── animation loop ──────────────────────────────────────────────── */
    const animate = () => {
      rafId = requestAnimationFrame(animate);

      // Delta time (manual, avoids THREE.Clock deprecation)
      const now     = performance.now();
      const delta   = Math.min((now - lastTime) / 1000, 0.05); // cap at 50 ms
      const elapsed = (now - startTime) / 1000;
      lastTime = now;

      if (mixer) mixer.update(delta);

      // ── Read normalised mouse from parent ref ────────────────────────
      // Falls back to 0,0 when mouseStateRef is absent or undefined
      const rawX = mouseStateRef?.current?.x ?? 0;
      const rawY = mouseStateRef?.current?.y ?? 0;
      const dragRotation = mouseStateRef?.current?.dragRotation ?? 0;

      // Lerp smoothing (inertia: 6 % per frame ≈ ~0.4 s settling time)
      smooth.x = lerp(smooth.x, rawX, 0.06);
      smooth.y = lerp(smooth.y, rawY, 0.06);
      smooth.dragRotation = lerp(smooth.dragRotation, dragRotation, 0.08);

      if (model) {
        /* ── Position shift (avatar physically follows cursor) ──── */
        // Max offsets: ±0.28 horizontal, ±0.18 vertical (scene units)
        const offsetX = smooth.x * 0.28;
        const offsetY = smooth.y * 0.18;

        /* ── Zoom: distance from centre → slight scale boost ────── */
        // dist ∈ [0,1.41]; capped at 1.0 for stability
        const dist      = Math.min(Math.sqrt(smooth.x ** 2 + smooth.y ** 2), 1.0);
        const zoomScale = base.scale * (1 + dist * 0.08); // max +8 %

        /* ── Breathing / idle float (absolute, not accumulative) ─── */
        const breathY = Math.sin(elapsed * 1.4) * 0.003;

        /* ── Apply transforms ───────────────────────────────────── */
        model.position.x = base.x + offsetX;
        model.position.y = base.y + offsetY + breathY;
        model.scale.setScalar(zoomScale);

        // 360-degree rotation + drag rotation offset
        model.rotation.y = smooth.x * Math.PI + smooth.dragRotation;
        
        // Subtle vertical tilt (looking up/down)
        model.rotation.x = -smooth.y * 0.15;

        // Very gentle torso sway (always active)
        model.rotation.z = Math.sin(elapsed * 0.75) * 0.007;
      }

      renderer.render(scene, camera);
    };

    animate();

    /* ── window resize ───────────────────────────────────────────────── */
    const onResize = () => {
      if (!container || !renderer || !camera) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
      applyLayout();
    };
    window.addEventListener("resize", onResize);

    /* ── cleanup ─────────────────────────────────────────────────────── */
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("webglcontextlost", handleContextLost);
      if (renderer) {
        try {
          renderer.dispose();
        } catch {
          /* ignore dispose error */
        }
      }
      if (scene) {
        try {
          scene.traverse((obj) => {
            if (obj.geometry) {
              try {
                obj.geometry.dispose();
              } catch {
                /* ignore geometry error */
              }
            }
            const mat = obj.material;
            if (mat) {
              (Array.isArray(mat) ? mat : [mat]).forEach((m) => {
                try {
                  m.dispose();
                } catch {
                  /* ignore material error */
                }
              });
            }
          });
        } catch {
          /* ignore scene traversal error */
        }
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={containerRef} className="avatar-3d-container">
      {loading && (
        <div className="avatar-loader">
          <div className="avatar-spinner" />
          <span className="avatar-loading-text">
            Loading 3D Avatar{progress > 0 ? ` ${progress}%` : "…"}
          </span>
        </div>
      )}

      {error && !loading && (
        <div className="avatar-error-fallback">
          <span style={{ fontSize: "2.4rem" }}>🎭</span>
          <p>3D Avatar unavailable</p>
          <span className="error-log-sub">Check console for details</span>
        </div>
      )}

      <canvas
        ref={canvasRef}
        className={`avatar-canvas ${loading ? "hidden" : "visible"}`}
      />
    </div>
  );
}

export default Avatar3D;
