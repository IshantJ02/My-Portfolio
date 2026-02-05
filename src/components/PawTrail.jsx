import { useEffect, useRef } from "react";

export default function PawTrail() {
  const lastTimeRef = useRef(0);

  useEffect(() => {

    const handleMove = (e) => {
      const now = Date.now();

      // Throttle trail spawn
      const delay =
  window.innerWidth < 640 ? 140 : 70;

if (now - lastTimeRef.current < delay) return;

      lastTimeRef.current = now;

      const paw = document.createElement("div");

      // Random emoji
      paw.textContent = Math.random() > 0.5 ? "🐾" : "🐱";

      // Random styling
      const size = 12 + Math.random() * 10;
      const rotation = Math.random() * 360;
      const blur = Math.random() * 1.5;

      paw.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        pointer-events: none;
        font-size: ${size}px;
        opacity: 0.75;
        transform: translate(-50%, -50%) rotate(${rotation}deg) scale(1);
        filter: blur(${blur}px);
        transition: 
          opacity 0.7s ease-out,
          transform 0.7s ease-out;
        z-index: 9999;
        color: hsl(${Math.random()*360}, 80%, 70%);
        text-shadow: 0 0 10px rgba(255,255,255,0.6);

      `;

      document.body.appendChild(paw);

      // Animate fade + shrink
      requestAnimationFrame(() => {
        paw.style.opacity = "0";
        paw.style.transform += " scale(0.6)";
      });

      // Cleanup
      setTimeout(() => paw.remove(), 700);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };

  }, []);

  return null;
}
