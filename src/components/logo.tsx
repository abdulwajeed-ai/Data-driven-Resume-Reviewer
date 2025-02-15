import React from "react";
import { useTheme } from "../hooks/useTheme";
import lightLogo from "../assets/logo-light.png";
import darkLogo from "../assets/logo-dark.png";

const Logo: React.FC = () => {
  const { theme } = useTheme();

  return (
    <img
      src={theme === "dark" ? darkLogo : lightLogo}
      alt="Logo"
      className="w-20 h-20 transition-all duration-300"
    />
  );
};

export default Logo;
