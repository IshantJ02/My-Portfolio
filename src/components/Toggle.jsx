import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

export default function Toggle() {
  const { funMode, setFunMode } = useContext(ModeContext);

  return (
    <button
      onClick={() => setFunMode(!funMode)}
      className="px-4 py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-black transition"
    >
      {funMode ? "💼 Professional Mode" : "🐱 Fun Mode"}
    </button>
  );
}
