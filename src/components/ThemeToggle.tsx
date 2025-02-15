import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import lightLogo from "../assets/logo-light.png";
import darkLogo from "../assets/logo-dark.png";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-4 right-4 flex items-center gap-4">
      {/* Logo */}
      <img
        src={theme === "dark" ? darkLogo : lightLogo}
        alt="Logo"
        className="w-12 h-12 transition-all duration-300"
      />

      {/* Theme Toggle Button */}
      <button
  onClick={toggleTheme}
  className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
  aria-label="Toggle theme"
>
  {theme === "dark" ? (
    <Sun className="w-6 h-6 text-yellow-400" />
  ) : (
    <Moon className="w-6 h-6 text-gray-800 dark:text-white" />
  )}
</button>

    </div>
  );
}
