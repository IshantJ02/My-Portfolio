import { motion } from "framer-motion";

export default function FunBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "400% 400%" }}
      />

      {/* Floating emojis */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
            opacity: 0.8,
          }}
          animate={{
            y: -100,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          🐾
        </motion.div>
      ))}
    </div>
  );
}
