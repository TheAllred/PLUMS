"use client";
import React, { useState } from "react";

function SettingsForm() {
  // const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("en");
  const [fontSize, setFontSize] = useState("medium");

  // const handleThemeChange = (e: {
  //   target: { value: React.SetStateAction<string> };
  // }) => {
  //   setTheme(e.target.value);
  // };

  const handleNotificationsChange = () => {
    setNotifications(!notifications);
  };

  const handleLanguageChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLanguage(e.target.value);
  };

  const handleFontSizeChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFontSize(e.target.value);
  };

  // console.log("theme:", theme);
  // console.log("notifications:", notifications);
  // console.log("language:", language);
  // console.log("fontSize:", fontSize);

  return (
    <div className="font-body bg-white dark:bg-black">
      <h3 className="text-black dark:text-white">Theme</h3>
      {/* <select value={theme} onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select> */}
      {/* <h3>Notifications</h3>
      <input
        type="checkbox"
        checked={notifications}
        onChange={handleNotificationsChange}
      />
      <h3>Language</h3>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>

      <h3>Font Size</h3>
      <select value={fontSize} onChange={handleFontSizeChange}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select> */}
    </div>
  );
}

export default SettingsForm;
