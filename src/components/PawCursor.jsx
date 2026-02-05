import { useEffect } from "react";

export default function PawCursor() {
  useEffect(() => {
    document.documentElement.style.cursor =
      "url('/cursor/paw.svg') 16 16, auto";

    return () => {
      document.documentElement.style.cursor = "auto";
    };
  }, []);

  return null;
}
