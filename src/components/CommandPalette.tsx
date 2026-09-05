"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { socials } from "@/data/socials";

type Command = {
  label: string;
  hint: string;
  action: () => void;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isCombo = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";
      if (isCombo) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const commands: Command[] = useMemo(
    () => [
      { label: "Go to System Architecture", hint: "section", action: () => scrollTo("system") },
      { label: "Go to Odoo Lab", hint: "section", action: () => scrollTo("odoo-lab") },
      { label: "Go to Experience", hint: "section", action: () => scrollTo("experience") },
      { label: "Go to Contact", hint: "section", action: () => scrollTo("contact") },
      { label: "Go to Recruiter Quick Profile", hint: "section", action: () => scrollTo("recruiter") },
      { label: "Open Resume", hint: "open", action: () => window.open(socials.resumeUrl, "_blank") },
      { label: "Open GitHub", hint: "open", action: () => window.open(socials.github, "_blank") },
      { label: "Open LinkedIn", hint: "open", action: () => window.open(socials.linkedin, "_blank") },
      { label: "Email Ananthu", hint: "open", action: () => (window.location.href = `mailto:${socials.email}`) },
    ],
    []
  );

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
    setQuery("");
  }

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        data-cursor="⌘K"
        className="fixed bottom-6 left-6 z-[80] hidden items-center gap-2 rounded-full border border-ink-600 bg-ink-900/80 px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-ink-300 backdrop-blur-sm transition-colors hover:border-signal-ai hover:text-signal-ai md:flex"
      >
        <span>⌘K</span>
        <span className="text-ink-500">quick jump</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[250] flex items-start justify-center bg-ink-950/80 px-4 pt-28 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg overflow-hidden rounded-xl border border-ink-600 bg-ink-900 shadow-2xl"
            >
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command…"
                className="w-full border-b border-ink-700 bg-transparent px-5 py-4 font-mono text-sm text-ink-100 outline-none placeholder:text-ink-500"
              />
              <div className="max-h-72 overflow-y-auto py-2">
                {filtered.length === 0 && (
                  <p className="px-5 py-3 font-mono text-xs text-ink-500">No matches.</p>
                )}
                {filtered.map((c) => (
                  <button
                    key={c.label}
                    onClick={c.action}
                    className="flex w-full items-center justify-between px-5 py-3 text-left text-sm text-ink-200 hover:bg-ink-800 hover:text-signal-ai"
                  >
                    <span>{c.label}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink-500">
                      {c.hint}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
