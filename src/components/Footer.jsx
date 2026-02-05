import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

export default function Footer() {
  const { funMode } = useContext(ModeContext);

  return (
    <footer
      className={`
        border-t border-white/10
        backdrop-blur-md
        ${funMode ? "bg-black/20" : "bg-dark"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left */}
        <p className="text-gray-500 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Ishant Joshi. All rights reserved.
        </p>

        {/* Middle */}
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#projects" className="hover:text-accent">Projects</a>
          <a href="#skills" className="hover:text-accent">Skills</a>
        </div>

        {/* Right */}
        <div className="flex gap-6 text-xl text-gray-400">
          <a href="https://github.com/yourusername" target="_blank" className="hover:text-accent transition">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-accent transition">
            <FaLinkedin />
          </a>

          <a href="mailto:yourmail@gmail.com" className="hover:text-accent transition">
            <FaEnvelope />
          </a>
        </div>

      </div>
    </footer>
  );
}
