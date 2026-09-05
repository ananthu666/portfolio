"use client";

import { Children, isValidElement, ReactNode } from "react";
import { motion } from "framer-motion";

// Scattered entry vectors that each child snaps in from — deterministic
// (not Math.random()) so server and client render the same thing and
// hydration never mismatches.
const VECTORS = [
  { x: -90, y: 50, rotate: -10 },
  { x: 90, y: -40, rotate: 9 },
  { x: -50, y: -70, rotate: 8 },
  { x: 70, y: 70, rotate: -7 },
  { x: 0, y: 90, rotate: -12 },
  { x: -100, y: -20, rotate: 6 },
  { x: 100, y: 20, rotate: -6 },
  { x: 30, y: -90, rotate: 11 },
];

/**
 * Wraps a list of children (e.g. a grid of cards) and animates each one in
 * from a different direction/rotation/scale, converging on its resting
 * position as the group scrolls into view — a "system assembling itself"
 * effect. Drop-in replacement for the wrapping element around a `.map()` of
 * cards: pass the same className you'd give that wrapper.
 */
export default function Assemble({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const items = Children.toArray(children).filter(isValidElement);

  return (
    <div className={className}>
      {items.map((child, i) => {
        const v = VECTORS[i % VECTORS.length];
        return (
          <motion.div
            key={child.key ?? i}
            initial={{ opacity: 0, x: v.x, y: v.y, rotate: v.rotate, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 16,
              delay: i * stagger,
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}
