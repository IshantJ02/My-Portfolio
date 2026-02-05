import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";
import { motion } from "framer-motion";
import CatMascot from "./CatMascot";

export default function Hero({ onContactClick }) {
  const { funMode } = useContext(ModeContext);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">

      {/* Content wrapper */}
      <div className="max-w-4xl mx-auto px-6 pb-24 flex flex-col gap-8">

        {/* Heading */}
        {funMode ? (
          <motion.h2
            className="text-4xl font-bold leading-tight"
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Hi, I’m Ishant 😼
          </motion.h2>
        ) : (
          <h2 className="text-4xl font-bold leading-tight">
            Hi, I’m Ishant 👋
          </h2>
        )}

        {/* Subtitle */}
        <p className="text-xl text-gray-400">
          {funMode
            ? "A curious developer who codes late and debugs like a cat 🐾"
            : "A Computer Science student focused on building scalable software."}
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="/Ishant_Joshi_Resume.pdf"
            download
            className="px-5 py-2 bg-accent text-black rounded-lg font-medium hover:scale-105 transition"
          >
            Download Resume
          </a>

          <motion.button
            onClick={onContactClick}
            className="px-5 py-2 border border-gray-600 rounded-lg hover:border-accent"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact Me
          </motion.button>
        </div>
      </div>

      {/* Floating mascot (Fun Mode only) */}
      {funMode && (
        <div className="absolute bottom-10 right-10 animate-bounce">
          <CatMascot />
        </div>
      )}
    </section>
  );
}
