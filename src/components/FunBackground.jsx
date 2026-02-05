import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

export default function FunBackground() {
  const { scrollY } = useScroll();

  // Parallax layers
  const ySlow = useTransform(
  scrollY,
  [0, 1000],
  window.innerWidth < 640 ? [0, -60] : [0, -150]
);

const yFast = useTransform(
  scrollY,
  [0, 1000],
  window.innerWidth < 640 ? [0, -120] : [0, -350]
);


  // Lock random paw data once
  const count =
  window.innerWidth < 640
    ? 8     // mobile
    : window.innerWidth < 1024
    ? 12    // tablet
    : 18;   // desktop
  const paws = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      size:
  window.innerWidth < 640
    ? Math.random() * 12 + 12
    : Math.random() * 20 + 20,

      left: Math.random() * 100,
      duration: 12 + Math.random() * 10,
      delay: Math.random() * 5,
      rotation: Math.random() * 360,
      blur: Math.random() * 2,
      emoji: Math.random() > 0.5 ? "🐾" : "🐱",
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* 🌈 Animated gradient */}
      <motion.div
        style={{
          y: ySlow,
          backgroundSize: "400% 400%",
        }}
        className="
          absolute inset-0
          bg-gradient-to-br
          from-pink-500
          via-purple-500
          to-yellow-400
        "
        animate={{
          backgroundPosition: [
            "0% 50%",
            "100% 50%",
            "0% 50%",
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* 🐾 Floating elements */}
      {paws.map((paw, i) => (
        <motion.div
          key={i}
          className="absolute select-none"
          style={{
            left: `${paw.left}%`,
            fontSize: `${paw.size}px`,
            y: yFast,
            filter: `blur(${paw.blur}px)`,
            textShadow: "0 0 20px rgba(255,255,255,0.4)",
          }}
          initial={{
            y: "110vh",
            opacity: 0.8,
          }}
          animate={{
            y: "-10vh",
            rotate: paw.rotation,
          }}
          transition={{
            duration: paw.duration,
            repeat: Infinity,
            delay: paw.delay,
            ease: "linear",
          }}
        >
          {paw.emoji}
        </motion.div>
      ))}

    </div>
  );
}
