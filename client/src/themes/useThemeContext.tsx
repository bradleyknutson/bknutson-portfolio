import React, { useContext } from "react";
import { ColorModeContext } from "./Theme";

export const useThemeContext = () => {
  const themeContext = useContext(ColorModeContext);
  if (themeContext === undefined) {
    throw new Error("useThemeContext was used outside of the Provider");
  }
  return themeContext;
};
