"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ElementType } from "react";

/**
 * Scroll-reveal entrance matching getwhitewhale.com's Framer appear animation:
 * opacity 0→1 + translateY(20px)→0, decelerating ease-out, ~0.7s, fire once on
 * viewport enter. `delay` enables per-item stagger.
 *
 * Single, SSR-stable markup — no reduced-motion DOM branch, which caused a
 * hydration mismatch that left content stuck invisible.
 */
type RevealProps = HTMLMotionProps<"div"> & {
  as?: ElementType;
  delay?: number;
  y?: number;
};

// Decelerating curve approximating the real site's sampled ease-out.
const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({ as = "div", delay = 0, y = 20, children, ...rest }: RevealProps) {
  const MotionTag = motion[as as "div"];
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
