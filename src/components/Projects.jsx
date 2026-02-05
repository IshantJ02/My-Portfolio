import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";
import { motion } from "framer-motion";

export default function Projects() {
  const { funMode } = useContext(ModeContext);

  const projects = [
    {
      title: "Study Buddy Finder",
      desc: "An Android app that helps students find study partners based on subjects and availability.",
      tech: "Java, Android, XML",
      link: "#",
    },
    {
      title: "AR Art Gallery",
      desc: "An augmented reality app that displays artworks in 3D space with interactive elements.",
      tech: "Unity, AR Foundation, C#",
      link: "#",
    },
    {
      title: "Restaurant Ordering System",
      desc: "A full-stack web app for managing restaurant orders and billing.",
      tech: "React, Node.js, MongoDB",
      link: "#",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-semibold mb-12 text-center">
        {funMode ? "Things I’ve Built 🐟" : "Projects"}
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="
              border border-gray-700 rounded-2xl p-6
              hover:border-accent
              transition
            "
          >
            <h4 className="text-xl font-semibold mb-3">
              {p.title}
            </h4>

            <p className="text-gray-400 mb-4">
              {p.desc}
            </p>

            <p className="text-sm text-gray-500 mb-6">
              {p.tech}
            </p>

            <a
              href={p.link}
              className="text-accent text-sm hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
