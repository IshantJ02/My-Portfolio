import { useEffect } from "react";

export default function useFunSounds(enabled) {
  useEffect(() => {
    if (!enabled) return;

    const clickSound = new Audio("/sounds/pop.mp3");
    clickSound.volume = 0.4;

    const handleClick = () => {
      clickSound.currentTime = 0;
      clickSound.play();
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [enabled]);
}
