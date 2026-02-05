import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Java",
    "Android",
    "Unity (AR)",
    "HTML & CSS",
    "Tailwind CSS",
    "Git & GitHub",
  ];

  return (
    <motion.section
      id="skills"
className="max-w-6xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-semibold mb-12 text-center">
        Skills
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div
  key={skill}
  className="
    group
    relative
    aspect-square
    rounded-xl
    bg-white/5
    border border-white/10
    flex items-center justify-center
    overflow-hidden
    transition
    hover:border-accent
    hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]
  "
>

            {/* Default state (dot / minimal symbol) */}
            <span className="text-2xl group-hover:animate-bounce">🐱</span>


            {/* Hover text */}
            <span
              className="
                absolute
                text-sm font-medium
                text-accent
                opacity-0
                translate-y-2
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all
                duration-300
              "
            >
              {skill}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
