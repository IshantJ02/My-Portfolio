import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

export default function Footer() {
  const { funMode } = useContext(ModeContext);

  return (
    <footer className="border-t border-gray-800 mt-24">
  <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

    {/* Left: copyright */}
    <p className="text-gray-500 text-sm text-center md:text-left">
      © {new Date().getFullYear()} Ishant Joshi. All rights reserved.
    </p>

    {/* Middle: footer navigation links */}
    <div className="flex gap-6 text-sm text-gray-400">
      <a href="#about" className="hover:text-accent">About</a>
      <a href="#projects" className="hover:text-accent">Projects</a>
      <a href="#skills" className="hover:text-accent">Skills</a>
    </div>

    {/* Right: social icons */}
    <div className="flex gap-6 text-xl text-gray-400">
      <a href="https://github.com/yourusername" className="hover:text-accent">
        {/* GitHub icon */}
      </a>
      <a href="https://linkedin.com/in/yourusername" className="hover:text-accent">
        {/* LinkedIn icon */}
      </a>
      <a href="mailto:yourmail@gmail.com" className="hover:text-accent">
        {/* Email icon */}
      </a>
    </div>

  </div>
</footer>

  );
}
