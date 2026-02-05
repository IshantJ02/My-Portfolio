import { useEffect, useRef, useState } from "react";

export default function useBackgroundMusic(enabled) {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/sounds/lofi.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.25;
    }

    if (enabled && !muted) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [enabled, muted]);

  const toggleMute = () => {
    setMuted((m) => !m);
  };

  return { muted, toggleMute }; // 🔥 REQUIRED
}
