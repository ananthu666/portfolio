"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const LINKS = [
  { id: "system", label: "Systems" },
  { id: "odoo-lab", label: "Odoo Lab" },
  { id: "experience", label: "Experience" },
  { id: "who-i-am", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[90] transition-all duration-300",
          scrolled ? "py-3" : "py-6"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-content items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-300",
            scrolled
              ? "border-ink-600 bg-ink-900/80 backdrop-blur-md"
              : "border-transparent bg-transparent"
          )}
        >
          <a
            href="#top"
            data-cursor="HOME"
            className="font-display text-sm font-medium tracking-tight text-ink-50"
          >
            Ananthu<span className="text-signal-ai">.</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                data-cursor="VIEW"
                className={cn(
                  "rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors",
                  active === l.id
                    ? "bg-ink-700 text-signal-ai"
                    : "text-ink-300 hover:text-ink-50"
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#recruiter"
              data-cursor="OPEN"
              className="hidden rounded-full border border-ink-600 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-100 transition-colors hover:border-signal-ai hover:text-signal-ai md:inline-block"
            >
              Resume
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-600 md:hidden"
              aria-label="Open menu"
            >
              <span className="font-mono text-xs">≡</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] flex flex-col bg-ink-950 p-8 md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-sm text-ink-50">Ananthu.</span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-600"
              >
                <span className="font-mono text-xs">✕</span>
              </button>
            </div>
            <nav className="mt-16 flex flex-1 flex-col gap-6">
              {LINKS.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-3xl text-ink-100 hover:text-signal-ai"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#recruiter"
                onClick={() => setMenuOpen(false)}
                className="mt-4 font-mono text-sm uppercase tracking-wider text-signal-erp"
              >
                Resume →
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
