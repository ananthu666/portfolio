"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isDesktop || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-none-desktop");

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      const interactive = target.closest("[data-cursor]");
      if (interactive) {
        setHovering(true);
        setLabel(interactive.getAttribute("data-cursor"));
      } else if (target.closest("a, button")) {
        setHovering(true);
        setLabel(null);
      } else {
        setHovering(false);
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("cursor-none-desktop");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[200] transition-transform duration-150 ease-out"
      style={{
        left: 0,
        top: 0,
        transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full border transition-all duration-200 ease-out ${
          hovering
            ? "h-16 w-16 border-signal-ai/60 bg-signal-ai/10"
            : "h-3 w-3 border-ink-100/80 bg-ink-100/80"
        }`}
      >
        {label && (
          <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-wider text-signal-ai">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
