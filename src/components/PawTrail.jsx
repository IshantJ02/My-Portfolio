import { useEffect, useRef } from "react";

export default function PawTrail() {
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const handleMove = (e) => {
      const now = Date.now();
      if (now - lastTimeRef.current < 80) return; // throttle
      lastTimeRef.current = now;

      const paw = document.createElement("div");
      paw.textContent = "🐾";

      paw.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        pointer-events: none;
        font-size: 13px;
        opacity: 0.7;
        transform: translate(-50%, -50%);
        transition: opacity 0.6s ease-out;
        z-index: 9999;
      `;

      document.body.appendChild(paw);

      requestAnimationFrame(() => {
        paw.style.opacity = "0";
      });

      setTimeout(() => paw.remove(), 650);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return null;
}
