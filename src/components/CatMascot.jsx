import { motion } from "framer-motion";

export default function CatMascot() {
  return (
    <motion.div
      className="
        relative
        text-6xl
        select-none
        cursor-pointer
      "

      /* Idle float + sway */
      animate={{
        y: [0, -12, 0],
        rotate: [0, 4, -4, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
      }}

      /* Hover reaction */
      whileHover={{
        scale: 1.2,
        rotate: 8,
      }}

      whileTap={{
        scale: 0.9,
      }}
    >

      {/* Glow aura */}
      <div
        className="
          absolute inset-0
          blur-2xl
          opacity-40
          bg-accent
          rounded-full
        "
      />

      {/* Cat emoji */}
      <span className="relative z-10">🐱</span>

      {/* Floating paw sparkles */}
      <motion.span
        className="absolute -top-4 -right-4 text-xl"
        animate={{ opacity: [0, 1, 0], y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        🐾
      </motion.span>

      <motion.span
        className="absolute -bottom-3 -left-3 text-lg"
        animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: 1 }}
      >
        ✨
      </motion.span>

    </motion.div>
  );
}
