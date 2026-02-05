import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";
import { motion } from "framer-motion";

export default function Contact() {
  const { funMode } = useContext(ModeContext);

  return (
    <motion.section
      id="contact"
      className="
        max-w-6xl mx-auto px-6 py-20
      "
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

        {/* Hover glow layer */}
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

        {/* Title */}
        <h3 className="text-3xl font-semibold mb-6 relative z-10">
          {funMode ? "Let’s Build Something 🐾" : "Contact Me"}
        </h3>

        {/* Subtitle */}
        <p className="text-gray-400 mb-8 max-w-xl relative z-10">
          I’m open to internships, freelance work, and collaborations.
          If you’ve got an idea — let’s make it real.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 relative z-10">

          {/* Email */}
          <motion.a
            href="mailto:yourmail@gmail.com"
            className="
              px-6 py-3
              bg-accent
              text-black
              rounded-lg
              text-center
              font-medium
              hover:scale-105
              transition
            "
            whileHover={{ y: -2 }}
          >
            Email Me
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            className="
              px-6 py-3
              border border-white/20
              rounded-lg
              text-center
              hover:border-accent
              hover:text-accent
              transition
            "
            whileHover={{ y: -2 }}
          >
            GitHub
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="
              px-6 py-3
              border border-white/20
              rounded-lg
              text-center
              hover:border-accent
              hover:text-accent
              transition
            "
            whileHover={{ y: -2 }}
          >
            LinkedIn
          </motion.a>

        </div>

        {/* Fun Mode floating emoji */}
        {funMode && (
          <span
            className="
              absolute
              top-4 right-4
              text-xl
              opacity-70
              animate-bounce
            "
          >
            {Math.random() > 0.5 ? "🐱" : "🐾"}
          </span>
        )}

      </div>
    </motion.section>
  );
}
