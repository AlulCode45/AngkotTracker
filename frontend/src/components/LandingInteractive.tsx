"use client";

import { useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      className="min-h-[44px] px-3.5 py-2 text-sm font-medium rounded-[6px] border border-[var(--border-strong)] text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-warm)] transition-colors cursor-pointer"
    >
      {dark ? "Mode Terang" : "Mode Gelap"}
    </button>
  );
}
