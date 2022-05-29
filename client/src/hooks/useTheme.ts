import { useState, useEffect } from "react";

const useTheme = () => {
  // State hook to manage theme
  const [theme, setTheme] = useState("lightTheme");
  // Set the mode to current theme
  const setMode = (mode:string) => {
    localStorage.setItem("theme", mode);
    setTheme(mode);
  };
  // Check and load the current theme from local storage
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("lightTheme");
  }, []);

  // Toggle between themes
  const ThemeToggler = () => {
    theme === "lightTheme" ? setMode("darkTheme") : setMode("lightTheme");
  };
  return [theme, ThemeToggler];
};

export default useTheme;
