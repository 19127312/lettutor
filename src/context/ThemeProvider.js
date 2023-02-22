import { useEffect, createContext, useState, useMemo } from "react";

const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState();

  const value = useMemo(() => ({ mode, setMode }), [mode, setMode]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default ThemeContext;
