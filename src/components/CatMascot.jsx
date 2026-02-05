import { motion } from "framer-motion";
import { useRef } from "react";

export default function CatMascot() {
  const purrRef = useRef(null);

  const playPurr = () => {
    if (!purrRef.current) {
      purrRef.current = new Audio("/sounds/purr.mp3");
      purrRef.current.volume = 0.25;
    }

    purrRef.current.currentTime = 0;
    purrRef.current.play();
  };

  return (
    <motion.div
      className="
        relative
        w-24 h-24
        sm:w-28 sm:h-28
        cursor-pointer
        select-none
      "

      /* Idle float */
      animate={{
        y: [0, -10, 0],
        rotate: [0, 3, -3, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
      }}

      /* Hover */
      whileHover={{ scale: 1.1 }}

      onMouseEnter={playPurr}
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

      {/* Cat image */}
      <img
        src="/mascot/cat.png"
        alt="Cat Mascot"
        className="
          relative z-10
          w-full h-full
          object-contain
          drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)]
        "
      />

    </motion.div>
  );
}
