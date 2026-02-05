import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";
import { motion } from "framer-motion";

export default function About() {
  const { funMode } = useContext(ModeContext);

  return (
    <motion.section
      id="about"
      className="max-w-6xl mx-auto px-6 py-16"

      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl">
        <h3 className="text-3xl font-semibold mb-6">
          {funMode ? "This Human 🐾" : "About Me"}
        </h3>

        <p className="text-gray-400 leading-relaxed text-lg">
          I’m a Computer Science and Engineering student with hands-on experience
          in full-stack web development, Android apps, and AR applications using
          Unity. I enjoy turning ideas into working products and learning new
          technologies through real projects.
        </p>

        {funMode && (
          <p className="mt-4 text-gray-500 italic">
            I debug patiently, stay curious, and disappear when things get noisy
            — like a cat 🐱
          </p>
        )}
      </div>
    </motion.section>
  );
}
