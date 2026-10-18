"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Nav() {
  const [light, setLight] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.dataset.theme === "light");
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const next = !light;
    document.documentElement.dataset.theme = next ? "light" : "dark";
    setLight(next);
    try { localStorage.setItem("rico-theme", next ? "light" : "dark"); } catch {}
  }

  return (
    <nav aria-label="Main navigation" className={`site-nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="nav-brand" href="#home" aria-label="Rico.dev home">RICO<span>.DEV</span></a>
        <div className="nav-actions">
          <a href="#home" aria-current="page" className="nav-home"><span aria-hidden="true" />Home</a>
          <button type="button" onClick={toggleTheme} className="theme-toggle"
            aria-label={light ? "Switch to dark theme" : "Switch to light theme"}>
            <Sun aria-hidden="true" className="theme-sun" />
            <Moon aria-hidden="true" className="theme-moon" />
          </button>
        </div>
      </div>
    </nav>
  );
}
