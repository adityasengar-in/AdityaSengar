import { useEffect, useRef, useState } from "react";

const BASE = 44;
const MAX = 68;
const SPREAD = 120;
const dockItemClass = "flex size-[var(--dock-item-size)] items-center justify-center rounded-[10px] text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white";
const tooltipClass = "pointer-events-none absolute bottom-[calc(100%+25px)] left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-zinc-200 bg-white px-2 py-0.5 text-[11px] text-zinc-700 opacity-0 transition-opacity duration-100 group-hover:opacity-100 sm:block dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200";

function getScale(dist) {
  if (dist > SPREAD) return 1;
  const t = 1 - dist / SPREAD;
  return 1 + (MAX / BASE - 1) * t * t;
}

export default function Navbar() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );
  const refs = useRef([]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // The theme still works when storage is unavailable.
    }
  }, [isDark]);

  function handleMouseMove(e) {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const mx = e.clientX;
    refs.current.forEach((el) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const dist = Math.abs(mx - center);
      el.style.transform = `scale(${getScale(dist)})`;
    });
  }

  function handleMouseLeave() {
    refs.current.forEach((el) => {
      if (el) el.style.transform = "scale(1)";
    });
  }

  return (
    <nav className="fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom))] left-1/2 z-50 max-w-[calc(100vw-1rem)] -translate-x-1/2 sm:bottom-6">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ "--dock-item-size": "clamp(2.25rem, 10.5vw, 2.75rem)" }}
        className="flex items-center gap-1 rounded-full border border-white/60 bg-white/70 px-1.5 py-1.5 shadow-lg backdrop-blur-xl transition-colors sm:px-2 dark:border-white/10 dark:bg-zinc-900/75 dark:shadow-black/30"
      >
        {/* Home */}
        <div className="relative group flex flex-col items-center">
          <span className={tooltipClass}>
            Home
          </span>
          <a
            href="/"
            ref={(el) => (refs.current[0] = el)}
            aria-label="Home"
            style={{ transformOrigin: "bottom center" }}
            className={dockItemClass}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </a>
        </div>

        <div className="my-1 w-px self-stretch rounded-full bg-black/15 dark:bg-white/15" />

        {/* Linktree */}
        <div className="relative group flex flex-col items-center">
          <span className={tooltipClass}>
            Linktree
          </span>
          <a
            href="https://linktr.ee/adityasengar.in"
            target="_blank"
            rel="noreferrer"
            ref={(el) => (refs.current[1] = el)}
            aria-label="Linktree"
            style={{ transformOrigin: "bottom center" }}
            className={dockItemClass}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="m13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z" /></svg>
          </a>
        </div>

        {/* GitHub */}
        <div className="relative group flex flex-col items-center">
          <span className={tooltipClass}>
            GitHub
          </span>
          <a
            href="https://github.com/adityasengar-in"
            target="_blank"
            rel="noreferrer"
            ref={(el) => (refs.current[2] = el)}
            aria-label="GitHub"
            style={{ transformOrigin: "bottom center" }}
            className={dockItemClass}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
          </a>
        </div>

        {/* LinkedIn */}
        <div className="relative group flex flex-col items-center">
          <span className={tooltipClass}>
            LinkedIn
          </span>
          <a
            href="https://linkedin.com/in/adityasengar-in"
            target="_blank"
            rel="noreferrer"
            ref={(el) => (refs.current[3] = el)}
            aria-label="LinkedIn"
            style={{ transformOrigin: "bottom center" }}
            className={dockItemClass}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>

        {/* X */}
        <div className="relative group flex flex-col items-center">
          <span className={tooltipClass}>
            X
          </span>
          <a
            href="https://x.com/adityasengar_in"
            target="_blank"
            rel="noreferrer"
            ref={(el) => (refs.current[4] = el)}
            aria-label="X"
            style={{ transformOrigin: "bottom center" }}
            className={dockItemClass}
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.735-8.851-8.164-10.65h6.065l4.26 5.632 5.604-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>

        {/* Email */}
        <div className="relative group flex flex-col items-center">
          <span className={tooltipClass}>
            Email
          </span>
          <a
            href="mailto:pratapaditya071@gmail.com"
            ref={(el) => (refs.current[5] = el)}
            aria-label="Email"
            style={{ transformOrigin: "bottom center" }}
            className={dockItemClass}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
        </div>

        <div className="my-1 w-px self-stretch rounded-full bg-black/15 dark:bg-white/15" />

        {/* Theme toggle */}
        <button
          type="button"
          onClick={() => setIsDark((d) => !d)}
          ref={(el) => (refs.current[6] = el)}
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          aria-pressed={isDark}
          title={isDark ? "Switch to light theme" : "Switch to dark theme"}
          style={{ transformOrigin: "bottom center" }}
          className={dockItemClass}
        >
          {isDark ? (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
