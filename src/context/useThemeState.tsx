import React, { FC, useContext, useState } from "react";
import { THEMES, ThemesNames, ThemeType } from "../config/theme";

const themeStateContext = React.createContext<{
  theme: ThemeType;
  setTheme: (themeName: ThemesNames | undefined | null) => void;
}>({
  theme: THEMES["peach"],
  setTheme: () => undefined,
});

const useThemeState = () => useContext(themeStateContext);

const initialTheme = THEMES["purple"];

const { Provider } = themeStateContext;
const ThemeStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeType>(initialTheme);

  const setTheme = (themeName: ThemesNames | undefined | null) => {
    if (themeName && THEMES[themeName]) {
      setThemeState(THEMES[themeName]);
    }
  };
  return <Provider value={{ theme, setTheme }}>{children}</Provider>;
};

export { ThemeStateProvider, useThemeState };
