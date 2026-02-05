import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaAndroid,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiUnity,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Android", icon: <FaAndroid /> },
    { name: "Unity (AR)", icon: <SiUnity /> },
    { name: "HTML & CSS", icon: <SiHtml5 /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Git & GitHub", icon: <FaGitAlt /> },
  ];

  return (
    <motion.section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <h3 className="text-3xl font-semibold mb-14 text-center">
        Skills
      </h3>

      {/* Grid */}
      <div className="
        grid
        grid-cols-3
        sm:grid-cols-4
        md:grid-cols-5
        gap-6
        max-w-4xl
        mx-auto
      ">
        {skills.map((skill, i) => (
          
          <motion.div
            key={skill.name}
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
              hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]
            "

            /* Floating animation */
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            {/* Hover glow */}
            <div
              className="
                absolute inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-300
                bg-gradient-to-br
                from-accent/20
                to-transparent
              "
            />

            {/* Tech Icon */}
            <span
              className="
                text-3xl
                text-gray-300
                transition
                group-hover:text-accent
                group-hover:scale-125
                group-hover:animate-bounce
              "
            >
              {skill.icon}
            </span>

            {/* Label */}
            <span
              className="
                absolute
                bottom-3
                px-3 py-1
                text-xs font-medium
                text-accent
                bg-black/40
                backdrop-blur
                rounded-full
                opacity-0
                translate-y-2
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all
                duration-300
              "
            >
              {skill.name}
            </span>

          </motion.div>

        ))}
      </div>
    </motion.section>
  );
}
