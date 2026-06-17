"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ElementType } from "react";

/**
 * Entrance animation matching peldot.com's Framer appear animation:
 * opacity 0→1 + translateY(20px)→0, decelerating ease-out. `trigger="viewport"`
 * (default) fires once on scroll into view, for in-page sections. `trigger="mount"`
 * fires immediately, for above-the-fold content like the Hero.
 *
 * `index` + `stagger` compute the per-item delay so list call sites don't repeat
 * `delay={i * 0.08}` arithmetic by hand — pass an explicit `delay` to add a flat
 * offset on top (e.g. a second column that should lag the first by a fixed amount).
 *
 * Single, SSR-stable markup — no reduced-motion DOM branch, which caused a
 * hydration mismatch that left content stuck invisible.
 */
type RevealProps = Omit<HTMLMotionProps<"div">, "href"> & {
  as?: ElementType;
  href?: string;
  trigger?: "viewport" | "mount";
  delay?: number;
  index?: number;
  stagger?: number;
  duration?: number;
  y?: number;
};

// Decelerating curve approximating the real site's sampled ease-out.
const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  as = "div",
  trigger = "viewport",
  delay = 0,
  index = 0,
  stagger = 0.08,
  duration,
  y = 20,
  children,
  ...rest
}: RevealProps) {
  const MotionTag = motion[as as "div"];
  const computedDelay = delay + index * stagger;
  const trip =
    trigger === "mount"
      ? { animate: { opacity: 1, y: 0 } }
      : {
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "0px 0px -12% 0px" },
        };
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      {...trip}
      transition={{ duration: duration ?? (trigger === "mount" ? 0.8 : 0.7), ease: EASE, delay: computedDelay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
