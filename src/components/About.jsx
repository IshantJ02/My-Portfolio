import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";
import { motion } from "framer-motion";

export default function About() {
  const { funMode } = useContext(ModeContext);

  return (
    <motion.section
      id="about"
      className="max-w-6xl mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >

      {/* Glass container */}
      <div
        className="
          relative
          rounded-2xl
          bg-white/5
          backdrop-blur-md
          border border-white/10
          p-10
          overflow-hidden
        "
      >

        {/* Gradient energy layer */}
        <div
          className="
            absolute inset-0
            opacity-0
            hover:opacity-100
            transition
            duration-500
            bg-gradient-to-br
            from-accent/20
            via-transparent
            to-purple-500/10
          "
        />

        <div className="max-w-3xl relative z-10">

          {/* Title */}
          <h3 className="text-3xl font-semibold mb-6">
            {funMode ? "This Human 🐾" : "About Me"}
          </h3>

          {/* Main text */}
          <p className="text-gray-400 leading-relaxed text-lg">
            I’m a Computer Science and Engineering student with hands-on
            experience in full-stack web development, Android apps, and AR
            applications using Unity. I enjoy turning ideas into working
            products and learning new technologies through real projects.
          </p>

          {/* Fun mode extra line */}
          {funMode && (
            <motion.p
              className="mt-4 text-gray-500 italic"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              I debug patiently, stay curious, and disappear when things get
              noisy — like a cat 🐱
            </motion.p>
          )}

        </div>

        {/* Floating accent emoji */}
        {funMode && (
          <motion.span
            className="
              absolute
              bottom-4 right-6
              text-2xl
              opacity-70
            "
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            🐾
          </motion.span>
        )}

      </div>
    </motion.section>
  );
}
