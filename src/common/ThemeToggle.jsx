import React from "react";
import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";
import useDarkMode from "../hooks/useDarkMode";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useDarkMode();

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <img 
        src={isDark ? sun : moon} 
        alt="Theme Toggle" 
        className="theme-icon"
      />
    </div>
  );
}
