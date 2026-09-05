"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function WhoIAm() {
  return (
    <section id="who-i-am" className="border-t border-ink-800 py-28">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-6 md:grid-cols-[0.9fr_1.1fr]">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-balance font-display text-4xl font-medium leading-tight text-ink-50 md:text-5xl"
        >
          {profile.whoIAmHeadline}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5 text-lg text-ink-200"
        >
          <p>{profile.whoIAmBody}</p>
          <p>{profile.odooDirection}</p>
          <div className="rounded-xl border border-ink-700 bg-ink-850/50 p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-signal-erp">
              Honest status
            </p>
            <p className="mt-2 text-ink-100">{profile.odooHonesty}</p>
            <p className="mt-3 text-sm text-ink-300">{profile.goalStatement}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
