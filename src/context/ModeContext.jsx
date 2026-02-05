import { createContext, useEffect, useState } from "react";

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [funMode, setFunMode] = useState(() => {
    return localStorage.getItem("funMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("funMode", funMode);
  }, [funMode]);

  return (
    <ModeContext.Provider value={{ funMode, setFunMode }}>
      {children}
    </ModeContext.Provider>
  );
};
