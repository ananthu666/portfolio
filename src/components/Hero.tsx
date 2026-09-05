"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import ArchitectureDiagram from "./ArchitectureDiagram";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-blueprint pt-40 pb-24 md:pt-48">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-900" />

      <div className="mx-auto grid max-w-content grid-cols-1 gap-16 px-6 md:grid-cols-2 md:items-center md:gap-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-signal-ai"
          >
            {profile.tagline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-6xl font-medium leading-[0.95] tracking-tight text-ink-50 sm:text-7xl md:text-8xl"
          >
            {profile.firstName}
            <br />
            {profile.lastName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 font-display text-xl text-ink-200 md:text-2xl"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 max-w-md text-balance text-ink-300"
          >
            {profile.heroStatement}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#odoo-lab"
              data-cursor="EXPLORE"
              className="rounded-full bg-signal-ai px-6 py-3 font-mono text-xs uppercase tracking-wider text-ink-950 transition-transform hover:scale-[1.03]"
            >
              Explore the System
            </a>
            <a
              href="#contact"
              data-cursor="TALK"
              className="rounded-full border border-ink-600 px-6 py-3 font-mono text-xs uppercase tracking-wider text-ink-100 transition-colors hover:border-signal-ai hover:text-signal-ai"
            >
              Let&apos;s talk
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl border border-ink-700 bg-ink-850/60 p-4 backdrop-blur-sm"
        >
          <ArchitectureDiagram />
          <p className="mt-3 px-1 text-xs text-ink-400">
            Scroll to watch the system grow — hover a node to see what it connects to.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
