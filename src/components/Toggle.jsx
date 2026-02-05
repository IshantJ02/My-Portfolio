import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

export default function Toggle() {
  const { funMode, setFunMode } = useContext(ModeContext);

  const toggleMode = () => {
  const meow = new Audio("/sounds/meow.mp3");
  meow.volume = 0.1;
  meow.play();

  setFunMode(!funMode);
};


  return (
    <button
      onClick={toggleMode}
      className={`
        flex items-center gap-2
        px-3 py-1.5
        sm:px-4 sm:py-2
        rounded-full
        border border-accent
        text-accent
        text-xs sm:text-sm
        whitespace-nowrap
        hover:bg-accent hover:text-black
        transition
        ${funMode ? "shadow-[0_0_20px_rgba(255,200,0,0.4)]" : ""}
      `}
    >
      {funMode ? "🐱" : "💼"}

      {/* Mobile label */}
      <span className="sm:hidden">
        {funMode ? "Fun" : "Pro"}
      </span>

      {/* Desktop label */}
      <span className="hidden sm:inline">
        {funMode ? "Fun Mode" : "Professional Mode"}
      </span>
    </button>
  );
}
