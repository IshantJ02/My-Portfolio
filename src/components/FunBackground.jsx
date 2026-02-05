import { motion, useScroll, useTransform } from "framer-motion";

export default function FunBackground() {
  const { scrollY } = useScroll();

  // Parallax depth layers
  const ySlow = useTransform(scrollY, [0, 1000], [0, -150]);
  const yFast = useTransform(scrollY, [0, 1000], [0, -350]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* 🌈 Gradient layer (slow parallax) */}
      <motion.div
        style={{ y: ySlow }}
        className="
          absolute inset-0
          bg-gradient-to-br
          from-pink-500
          via-purple-500
          to-yellow-400
        "
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* 🐾 Floating paws (fast parallax) */}
      {Array.from({ length: 18 }).map((_, i) => {
  const size = Math.random() * 20 + 20;
  const left = Math.random() * 100;
  const duration = 12 + Math.random() * 10;

  return (
    <motion.div
      key={i}
      className="absolute select-none"
      style={{
        left: `${left}%`,
        fontSize: `${size}px`,
        y: yFast,
        filter: `blur(${Math.random() * 2}px)`,
        textShadow: "0 0 20px rgba(255,255,255,0.4)"
      }}
      initial={{ y: "110vh", opacity: 0.8 }}
      animate={{
        y: "-10vh",
        rotate: Math.random() * 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay: Math.random() * 5,
        ease: "linear",
      }}
    >
      {Math.random() > 0.5 ? "🐾" : "🐱"}
    </motion.div>
  );
})}

    </div>
  );
}
