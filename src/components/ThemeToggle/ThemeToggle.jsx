import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      className={`${styles.toggle} ${className}`}
      onClick={toggleTheme}
      whileTap={{ scale: 0.93 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 520, damping: 28 }}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <motion.span
        className={styles.glow}
        aria-hidden
        animate={{
          opacity: isDark ? 0.85 : 0.65,
          scale: isDark ? 1 : 1.08,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
      />
      <span className={styles.track}>
        <span className={styles.icons}>
          <motion.span
            className={styles.iconWrap}
            animate={{
              scale: isDark ? 0.82 : 1.14,
              opacity: isDark ? 0.4 : 1,
              rotate: isDark ? -12 : 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 24 }}
          >
            <Sun size={14} strokeWidth={2.35} className={styles.sun} />
          </motion.span>
          <motion.span
            className={styles.iconWrap}
            animate={{
              scale: isDark ? 1.14 : 0.82,
              opacity: isDark ? 1 : 0.4,
              rotate: isDark ? 0 : 14,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 24 }}
          >
            <Moon size={14} strokeWidth={2.35} className={styles.moon} />
          </motion.span>
        </span>
        <motion.span
          className={styles.thumb}
          initial={false}
          animate={{ x: isDark ? 3 : 29 }}
          transition={{
            type: "spring",
            stiffness: 420,
            damping: 27,
            mass: 0.72,
          }}
        />
      </span>
      <span className={styles.sheen} aria-hidden />
    </motion.button>
  );
}
