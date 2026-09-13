import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((v) => !v)}
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-(--border) text-(--text) transition-colors hover:bg-(--surface)"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
