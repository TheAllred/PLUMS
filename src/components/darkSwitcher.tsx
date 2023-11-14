"use client";

import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "@/hooks/darkMode";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <DarkModeSwitch
        style={{ marginBottom: "2rem" }}
        checked={darkSide}
        onChange={toggleDarkMode}
        size={30}
      />
    </>
  );
}

// import React from "react";
// import { useDarkMode } from "../hooks/darkMode";

// export function DarkSwitcher() {
//   const [theme, toggleTheme] = useDarkMode();

//   return (
//     <div className="text-center mt-4">
//       <label className="block text-gray-700">
//         Dark Mode
//         <input
//           type="checkbox"
//           className="form-checkbox h-6 w-6"
//           checked={theme === "dark"}
//           onChange={toggleTheme}
//         />
//       </label>
//     </div>
//   );
// }
