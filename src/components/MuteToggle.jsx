export default function MuteToggle({ muted, toggleMute }) {
  return (
    <button
      onClick={toggleMute}
      className="
        fixed bottom-6 right-6
        z-50
        px-3 py-2
        rounded-full
        bg-black/40
        backdrop-blur
        border border-white/20
        text-xl
        hover:scale-110
        transition
      "
    >
      {muted ? "🔇" : "🎵"}
    </button>
  );
}
