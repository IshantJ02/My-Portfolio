import { useEffect, useState, useContext } from "react";
import { ModeContext } from "../context/ModeContext";
import Toggle from "./Toggle";

const sections = ["about", "skills", "projects"];

export default function Navbar({ onHireClick }) {
  const { funMode } = useContext(ModeContext);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          if (window.scrollY >= top) current = id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `hover:text-accent ${
      active === id ? "text-accent" : "text-gray-300"
    }`;

  return (
    <nav
  className={`
    sticky top-0 z-50
    ${funMode
      ? "bg-transparent"
      : "bg-dark/80 backdrop-blur border-b border-gray-800"}
  `}
>

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Ishant Joshi</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm">
          {sections.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={linkClass(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={onHireClick}
            className="hidden sm:inline px-4 py-2 bg-accent text-black rounded-full text-sm font-medium"
          >
            Hire Me
          </button>

          <Toggle />

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-dark border-t border-gray-800">
          <ul className="flex flex-col p-4 gap-4 text-sm">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={linkClass(id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}

            <button
              onClick={() => {
                setOpen(false);
                onHireClick();
              }}
              className="mt-4 px-4 py-2 bg-accent text-black rounded-full text-sm font-medium"
            >
              Hire Me
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
