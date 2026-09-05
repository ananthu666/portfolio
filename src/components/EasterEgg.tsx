"use client";

import { useEffect, useState } from "react";

const TRIGGER = "sudo hire ananthu";
const LINES = [
  "> Request received.",
  "> AI ENGINEER STATUS: READY",
  "> ODOO MODULES: LOADING",
  "> AUTOMATION ENGINE: ONLINE",
  "> SYSTEM: READY TO BUILD",
];

export default function EasterEgg() {
  const [buffer, setBuffer] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.length === 1) {
        setBuffer((prev) => (prev + e.key).slice(-TRIGGER.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (buffer === TRIGGER) {
      setVisible(true);
      const t = setTimeout(() => setVisible(false), 6000);
      return () => clearTimeout(t);
    }
  }, [buffer]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[300] w-[min(360px,90vw)] rounded-lg border border-ink-600 bg-ink-950/95 p-4 font-mono text-xs text-signal-ai shadow-2xl">
      {LINES.map((line, i) => (
        <p key={i} style={{ animationDelay: `${i * 150}ms` }} className="opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]">
          {line}
        </p>
      ))}
      <style>{`@keyframes fadeIn { to { opacity: 1; } }`}</style>
    </div>
  );
}
