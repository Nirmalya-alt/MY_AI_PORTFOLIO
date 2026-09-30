import { useEffect, useRef } from "react";

const INTENSITIES = {
  subtle: { maxDist: 2.0, radius: 75, freq: 0.05 },
  small:  { maxDist: 4.0, radius: 95, freq: 0.045 },
  medium: { maxDist: 7.0, radius: 115, freq: 0.04 },
  large:  { maxDist: 10.0, radius: 140, freq: 0.035 }
};

export default function LiquidText({ children, intensity = "medium", className = "", ...props }) {
  const containerRef = useRef(null);
  
  const text = typeof children === "string" ? children : "";
  const words = text ? text.split(" ") : [];
  const { maxDist, radius, freq } = INTENSITIES[intensity] || INTENSITIES.medium;

  useEffect(() => {
    if (!text) return;
    const container = containerRef.current;
    if (!container) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const chars = container.querySelectorAll(".liquid-char");
    if (chars.length === 0) return;

    let rafId = null;
    let isHovered = false;
    let mouseX = 0;
    let mouseY = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let energy = 0;
    
    // Store positions
    const charOffsets = Array.from(chars).map(() => ({ x: 0, y: 0, currentX: 0, currentY: 0 }));

    // Spawns particles
    const spawnParticle = (cx, cy) => {
      if (Math.random() > 0.25) return; // Sparse particles
      if (container.querySelectorAll(".water-drop").length > 25) return; 

      const drop = document.createElement("span");
      drop.className = "water-drop";
      const size = Math.random() * 2 + 1.5;
      drop.style.width = `${size}px`;
      drop.style.height = `${size}px`;
      
      const containerRect = container.getBoundingClientRect();
      const lx = cx - containerRect.left;
      const ly = cy - containerRect.top;
      drop.style.left = `${lx}px`;
      drop.style.top = `${ly}px`;

      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.5 + 0.5;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      drop.style.setProperty("--vx", `${vx}px`);
      drop.style.setProperty("--vy", `${vy}px`);

      container.appendChild(drop);
      setTimeout(() => drop.remove(), 600);
    };

    const update = () => {
      energy *= 0.93;
      if (energy < 0.005) energy = 0;

      const time = performance.now() * 0.0055;
      let allAtRest = true;

      chars.forEach((char, idx) => {
        const offset = charOffsets[idx];
        let targetX = 0;
        let targetY = 0;

        if (isHovered && energy > 0) {
          const rect = char.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;

          const dx = mouseX - cx;
          const dy = mouseY - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < radius) {
            const t = dist / radius;
            const angle = dist * freq - time;
            const waveForce = Math.sin(angle) * (1 - t) * maxDist * energy;
            const pushAngle = Math.atan2(cy - mouseY, cx - mouseX);
            targetX = Math.cos(pushAngle) * waveForce;
            targetY = Math.sin(pushAngle) * waveForce;

            if (energy > 2) {
              spawnParticle(cx, cy);
            }
          }
        }

        offset.currentX += (targetX - offset.currentX) * 0.12;
        offset.currentY += (targetY - offset.currentY) * 0.12;

        if (Math.abs(offset.currentX) > 0.05 || Math.abs(offset.currentY) > 0.05) {
          allAtRest = false;
        }

        char.style.transform = `translate3d(${offset.currentX.toFixed(2)}px, ${offset.currentY.toFixed(2)}px, 0)`;
      });

      if (!isHovered && allAtRest && energy === 0) {
        chars.forEach((char) => {
          char.style.transform = "";
        });
        rafId = null;
      } else {
        rafId = requestAnimationFrame(update);
      }
    };

    const handleMouseEnter = (e) => {
      isHovered = true;
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      energy = 1.0;

      if (!rafId) {
        rafId = requestAnimationFrame(update);
      }
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const dx = mouseX - lastMouseX;
      const dy = mouseY - lastMouseY;
      const vel = Math.sqrt(dx * dx + dy * dy);
      
      energy = Math.min(5, energy + vel * 0.12);

      lastMouseX = mouseX;
      lastMouseY = mouseY;

      if (!rafId) {
        rafId = requestAnimationFrame(update);
      }
    };

    const handleMouseLeave = () => {
      isHovered = false;
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [maxDist, radius, freq, text]);

  if (!text) {
    return <span className={className} {...props}>{children}</span>;
  }

  return (
    <span
      ref={containerRef}
      className={`liquid-text-container ${className}`}
      style={{ display: "inline-block", position: "relative" }}
      {...props}
    >
      {words.map((word, wIdx) => (
        <span
          key={wIdx}
          className="liquid-word"
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {word.split("").map((char, cIdx) => (
            <span
              key={cIdx}
              className="liquid-char"
              style={{ display: "inline-block", willChange: "transform" }}
            >
              {char}
            </span>
          ))}
          {wIdx < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}
