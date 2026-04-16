import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { flushSync } from "react-dom";

const ThemeContext = createContext(undefined);

const STORAGE_KEY = "portfolio-theme";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
    return "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme =
      theme === "light" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const apply = () => {
      flushSync(() => {
        setTheme((t) => (t === "dark" ? "light" : "dark"));
      });
    };

    if (typeof document.startViewTransition === "function") {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
