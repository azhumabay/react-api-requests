import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as BootstrapThemeProvider } from "react-bootstrap";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BootstrapThemeProvider theme={theme}>{children}</BootstrapThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
