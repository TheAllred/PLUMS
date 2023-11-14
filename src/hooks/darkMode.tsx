"use client";
import { useState, useEffect } from "react";

// export default function useDarkSide() {
//   const [theme, setTheme] = useState(localStorage.theme);
//   const colorTheme = theme === "dark" ? "light" : "dark";

//   useEffect(() => {
//     const root = window.document.documentElement;
//     root.classList.remove(colorTheme);
//     root.classList.add(theme);
//     localStorage.setItem("theme", theme);
//   }, [theme, colorTheme]);

//   return [colorTheme, setTheme];
// }


export function useDarkMode() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDarkMode ? "dark" : "light");
    }
  }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   return [theme, toggleTheme];
// }
