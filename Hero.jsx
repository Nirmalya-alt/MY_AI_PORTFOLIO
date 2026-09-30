import { useState, useEffect, useRef } from "react";
import Avatar3D from "./Avatar3D";
import LiquidText from "./LiquidText";

function Hero({ onOpenResume }) {
  const heroRef        = useRef(null);
  const avatarSideRef  = useRef(null);
  
  // Shared mutable mouse state — read directly by Avatar3D each frame.
  // Using a ref (not useState) so updates never trigger React re-renders.
  const heroMouseState = useRef({ x: 0, y: 0, dragRotation: 0 });

  const isDragging = useRef(false);
  const startX     = useRef(0);

  // Rotating Subtitle Roles
  const roles = [
    "AI & Creative Developer",
    "Prompt Engineering",
    "Generative AI",
    "Web & UI Development",
    "Content Writing",
    "Building AI-Driven Applications"
  ];
  const [roleIdx, setRoleIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setRoleIdx((prev) => (prev + 1) % roles.length);
        setAnimating(false);
      }, 500);
    }, 3500);
    return () => clearInterval(timer);
  }, [roles.length]);

  /* ── Background subtle parallax (background-position only) ─────────
     Only the background shifts — text and content are STATIC.
     Avatar does all the strong interaction via heroMouseState.          */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let rafId;
    const smooth = { x: 0, y: 0 };

    const tick = () => {
      smooth.x += (heroMouseState.current.x - smooth.x) * 0.04;
      smooth.y += (heroMouseState.current.y - smooth.y) * 0.04;

      // Very subtle background shift: max ±4 % from 50 % / 30 %
      hero.style.backgroundPosition = `${50 + smooth.x * 4}% ${30 + smooth.y * -4}%`;

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  /* ── Drag & Touch event bindings on window (for smooth dragging) ─── */
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (!isDragging.current) return;
      const rect = avatarSideRef.current?.getBoundingClientRect();
      if (!rect) return;

      const dx = e.clientX - startX.current;
      startX.current = e.clientX;

      // Accumulate drag rotation
      heroMouseState.current.dragRotation += (dx / rect.width) * Math.PI * 2.5;
    };

    const handleGlobalMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        if (avatarSideRef.current) {
          avatarSideRef.current.classList.remove("grabbing");
        }
      }
    };

    const handleGlobalTouchMove = (e) => {
      if (!isDragging.current || e.touches.length === 0) return;
      const rect = avatarSideRef.current?.getBoundingClientRect();
      if (!rect) return;

      const touch = e.touches[0];
      const dx = touch.clientX - startX.current;
      startX.current = touch.clientX;

      // Accumulate drag rotation
      heroMouseState.current.dragRotation += (dx / rect.width) * Math.PI * 2.5;

      // For touch, we also update normalized x,y position (center is 0)
      const touchX = ((touch.clientX - rect.left) / rect.width - 0.5) * 2;
      const touchY = -((touch.clientY - rect.top) / rect.height - 0.5) * 2;

      heroMouseState.current.x = Math.max(-1, Math.min(1, touchX));
      heroMouseState.current.y = Math.max(-1, Math.min(1, touchY));
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("touchmove", handleGlobalTouchMove, { passive: true });
    window.addEventListener("touchend", handleGlobalMouseUp);
    window.addEventListener("touchcancel", handleGlobalMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchmove", handleGlobalTouchMove);
      window.removeEventListener("touchend", handleGlobalMouseUp);
      window.removeEventListener("touchcancel", handleGlobalMouseUp);
    };
  }, []);

  /* ── Hover tracking on the hero section ─────────────────────────── */
  const handleMouseMove = (e) => {
    // If we're dragging, the global mousemove handles rotation updates,
    // but we still want to update standard x/y position.
    const rect = avatarSideRef.current?.getBoundingClientRect();
    if (!rect) return;

    // Normalise to -1…+1 relative to container bounds (not full window)
    const x =  ((e.clientX - rect.left)  / rect.width  - 0.5) * 2;
    const y = -((e.clientY - rect.top)   / rect.height - 0.5) * 2; // invert Y

    heroMouseState.current.x = Math.max(-1, Math.min(1, x));
    heroMouseState.current.y = Math.max(-1, Math.min(1, y));
  };

  /* ── Drag initialization ────────────────────────────────────────── */
  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Left click only
    isDragging.current = true;
    startX.current = e.clientX;
    if (avatarSideRef.current) {
      avatarSideRef.current.classList.add("grabbing");
    }
    e.preventDefault(); // Prevent text highlights
  };

  const handleTouchStart = (e) => {
    if (e.touches.length > 0) {
      isDragging.current = true;
      startX.current = e.touches[0].clientX;
      if (avatarSideRef.current) {
        avatarSideRef.current.classList.add("grabbing");
      }
    }
  };

  /* ── Mouse leave → smooth reset to center ────────────────────────── */
  const handleMouseLeave = () => {
    isDragging.current = false;
    if (avatarSideRef.current) {
      avatarSideRef.current.classList.remove("grabbing");
    }
    heroMouseState.current = { x: 0, y: 0, dragRotation: 0 };
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const techTags = [
    { icon: "⚛️", label: "React" },
    { icon: "🐍", label: "Python" },
    { icon: "🤖", label: "AI/ML" },
    { icon: "🎨", label: "UI/UX" },
    { icon: "☁️", label: "DevOps" },
    { icon: "🐳", label: "Docker" },
  ];

  return (
    <section
      ref={heroRef}
      className="hero"
    >
      {/* Ambient glow orbs */}
      <div className="hero-bg-orb hero-bg-orb-1" />
      <div className="hero-bg-orb hero-bg-orb-2" />

      <div className="hero-container">

        {/* ── LEFT: Text content (completely static — no parallax) ─── */}
         <div className="hero-text-side">
          <div className="hero-status-badge">
            <span className="hero-status-dot" />
            <LiquidText intensity="subtle">Available for Opportunities</LiquidText>
          </div>

          <p className="hero-small"><LiquidText intensity="subtle">I am</LiquidText></p>

          <h1><LiquidText intensity="large">Nirmalya Chatterjee</LiquidText></h1>

          <h2>
            <span className="hero-role-wrapper">
              <span className={`hero-role-text ${animating ? "exit" : "enter"}`}>
                <LiquidText intensity="small">{roles[roleIdx]}</LiquidText>
              </span>
            </span>
          </h2>

          <p className="hero-description">
            <LiquidText intensity="subtle">
              I build AI-powered applications, modern websites, and creative digital
              experiences that leave a lasting impression.
            </LiquidText>
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollTo("projects")}>
              🚀 <LiquidText intensity="subtle">View Projects</LiquidText>
            </button>
            <button className="btn-outline" onClick={() => scrollTo("contact")}>
              ✉️ <LiquidText intensity="subtle">Contact Me</LiquidText>
            </button>
            <button className="btn-outline" onClick={onOpenResume}>
              📄 <LiquidText intensity="subtle">View Resume</LiquidText>
            </button>
          </div>

          <div className="hero-tech-tags">
            {techTags.map((tag) => (
              <span className="hero-tech-tag" key={tag.label}>
                {tag.icon} <LiquidText intensity="small">{tag.label}</LiquidText>
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: 3D avatar — mouse interaction done inside Avatar3D ── */}
        <div
          ref={avatarSideRef}
          className="hero-avatar-side"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          style={{ cursor: "grab" }}
        >
          {/* Pass the shared mouse-state ref; Avatar3D reads it each rAF frame */}
          <Avatar3D mouseStateRef={heroMouseState} />
        </div>

      </div>

      {/* Scroll down cue */}
      <div
        className="hero-scroll-indicator"
        onClick={() => scrollTo("about")}
        role="button"
        aria-label="Scroll to about section"
      >
        <span>SCROLL</span>
        <div className="hero-scroll-arrow" />
      </div>
    </section>
  );
}

export default Hero;