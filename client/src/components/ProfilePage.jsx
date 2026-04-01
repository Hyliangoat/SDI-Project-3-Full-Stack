import React from 'react'
import { useState, useEffect } from 'react'
export default function ProfilePage() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
        <h1>Profile Page</h1>
        <p>Welcome to your profile!</p>
        <p>Here you will be able to change password, account name, and add an avatar.</p>
        <p>But I don't have this finished yet, so just change your theme, for now.</p>
        <p>Current theme: {theme}</p>
        <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    </div>
  )
}
