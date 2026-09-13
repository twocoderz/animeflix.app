import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Chaînes", href: "#chaines" },
  { label: "Tarifs", href: "#tarifs" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-(--bg)/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between py-12 px-6">
        <Logo size={128} />

        <div className="flex items-center gap-12">
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg text-(--text-muted) transition-colors hover:text-(--text)"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href="#telecharger"
              className="rounded-full bg-(--text) px-6 py-4 text-lg font-medium text-(--bg) transition-opacity hover:opacity-90"
            >
              Télécharger l'apk
            </a>
          </div>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-(--border) px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-(--text-muted)"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between">
            <ThemeToggle />
            <a
              href="#telecharger"
              className="rounded-full bg-(--text) px-4 py-2 text-sm font-medium text-(--bg)"
            >
              Télécharger l'apk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
