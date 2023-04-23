import { useEffect, createContext, useState, useMemo } from "react";
import theme from "../theme/theme";
const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("light");
  const [themeData, setThemeData] = useState(theme.light);
  useEffect(() => {
    setThemeData(theme[mode]);
  }, [mode]);
  const value = useMemo(
    () => ({ mode, setMode, themeData }),
    [mode, themeData, setMode]
  );
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContext;
