import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";
import { motion } from "framer-motion";

export default function Projects() {
  const { funMode } = useContext(ModeContext);

  const projects = [
    {
      title: "Study Buddy Finder",
      desc: "An Android app that helps students find study partners based on subjects and availability.",
      tech: ["Java", "Android", "XML"],
      link: "#",
      github: "#",
    },
    {
      title: "AR Art Gallery",
      desc: "An augmented reality app that displays artworks in 3D space with interactive elements.",
      tech: ["Unity", "AR Foundation", "C#"],
      link: "#",
      github: "#",
    },
    {
      title: "Restaurant Ordering System",
      desc: "A full-stack web app for managing restaurant orders and billing.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <h3 className="text-3xl font-semibold mb-14 text-center">
        {funMode ? "Things I’ve Built 🐟" : "Projects"}
      </h3>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((p, i) => (
          
          <motion.div
            key={p.title}
            className="
              group
              relative
              rounded-2xl
              p-6
              bg-white/5
              backdrop-blur-md
              border border-white/10
              overflow-hidden
              transition
              hover:border-accent
              hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]
            "

            /* Lift animation */
            whileHover={{ y: -8, scale: 1.02 }}

            /* Reveal stagger */
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >

            {/* Background glow layer */}
            <div
              className="
                absolute inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                bg-gradient-to-br
                from-accent/20
                via-transparent
                to-purple-500/10
              "
            />

            {/* Title */}
            <h4 className="text-xl font-semibold mb-3 relative z-10">
              {p.title}
            </h4>

            {/* Description */}
            <p className="text-gray-400 mb-5 relative z-10">
              {p.desc}
            </p>

            {/* Tech stack chips */}
            <div className="flex flex-wrap gap-2 mb-6 relative z-10">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="
                    text-xs
                    px-3 py-1
                    rounded-full
                    bg-black/40
                    border border-white/10
                    text-gray-300
                  "
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 relative z-10">

              <a
                href={p.link}
                target="_blank"
                className="
                  text-sm
                  px-4 py-2
                  bg-accent
                  text-black
                  rounded-lg
                  hover:scale-105
                  transition
                "
              >
                Live Demo
              </a>

              <a
                href={p.github}
                target="_blank"
                className="
                  text-sm
                  px-4 py-2
                  border border-white/20
                  rounded-lg
                  hover:border-accent
                  hover:text-accent
                  transition
                "
              >
                GitHub
              </a>

            </div>

            {/* Fun mode floating emoji */}
            {funMode && (
              <span className="
                absolute
                top-4 right-4
                text-xl
                opacity-70
                group-hover:animate-bounce
              ">
                {Math.random() > 0.5 ? "🐾" : "🐱"}
              </span>
            )}

          </motion.div>

        ))}

      </div>
    </motion.section>
  );
}
