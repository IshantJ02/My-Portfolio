import { useEffect } from "react";

export default function useFunSounds(enabled) {
  useEffect(() => {
    if (!enabled) return;

    const clickSound = new Audio("/sounds/pop.mp3");
    const toggleSound = new Audio("/sounds/meow.mp3");

    clickSound.volume = 0.4;
    toggleSound.volume = 0.5;

    const handleClick = () => {
      clickSound.currentTime = 0;
      clickSound.play();
    };

    const handleKey = () => {
      toggleSound.currentTime = 0;
      toggleSound.play();
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [enabled]);
}
