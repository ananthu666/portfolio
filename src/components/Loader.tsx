"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  "INITIALIZING ENTERPRISE SYSTEM...",
  "LOADING AI ENGINE...",
  "CONNECTING ERP...",
  "LOADING AUTOMATION LAYER...",
  "SYNCING DATA...",
  "SYSTEM READY.",
];

export default function Loader() {
  const [done, setDone] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(isReduced);
    if (isReduced) {
      setDone(true);
      return;
    }
    const seenBefore = sessionStorage.getItem("system-booted");
    if (seenBefore) {
      setDone(true);
      return;
    }
    sessionStorage.setItem("system-booted", "1");
    const t = setTimeout(() => setDone(true), 1700);
    return () => clearTimeout(t);
  }, []);

  if (reduced) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[500] flex flex-col items-start justify-center bg-ink-950 px-8 font-mono text-sm text-signal-ai md:px-24"
        >
          <div className="w-full max-w-md space-y-1.5">
            {LINES.map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.24, duration: 0.25 }}
                className="tracking-wide text-ink-300"
              >
                <span className="text-signal-ai">{">"}</span> {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
