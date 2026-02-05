import { useEffect } from "react";

export default function PawCursor() {
  useEffect(() => {

    const cursorStyle = `
      url('/cursor/paw.png') 16 16,
      url('/cursor/paw.svg') 16 16,
      auto
    `;

    document.documentElement.style.cursor = cursorStyle;

    return () => {
      document.documentElement.style.cursor = "auto";
    };

  }, []);

  return null;
}
