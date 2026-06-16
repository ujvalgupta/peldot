"use client";

import { motion } from "motion/react";
import { CtaButton } from "@/components/CtaButton";

// Staggered load entrance — mirrors the real site's Framer appear animation
// (fade + translateY(20px)→0, decelerating ease-out, sequential delays).
const EASE = [0.16, 1, 0.3, 1] as const;
const item = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE, delay },
});

export function Hero() {
  return (
    <section className="hero-dots relative overflow-hidden">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center px-5 pt-16 pb-10 text-center sm:px-8 sm:pt-24">
        {/* Announcement pill */}
        <motion.a
          {...item(0)}
          href="#"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-hairline bg-white py-1.5 pl-1.5 pr-4 text-[13px] shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
        >
          <span className="rounded-full bg-[#f3f4f6] px-2.5 py-0.5 text-[12px] font-semibold text-[#0a0a0a]">
            New
          </span>
          <span className="font-medium text-[#4b4b4b]">BirdDog is now WhiteWhale</span>
        </motion.a>

        {/* Headline — real site: 52.8px / lh 1.05 / ls -0.05em */}
        <motion.h1
          {...item(0.08)}
          className="heading-hero max-w-[680px] text-[34px] font-bold text-[#0a0a0a] sm:text-[44px] md:text-[52.8px]"
        >
          Know what accounts to target and{" "}
          <span className="italic">why</span> with custom buying signals.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          {...item(0.16)}
          className="mt-6 max-w-[560px] text-[17px] leading-[1.5] text-[#5b5b5b]"
        >
          WhiteWhale monitors your accounts for custom signals so your team works
          the right accounts at the right time.
        </motion.p>

        {/* CTAs */}
        <motion.div {...item(0.24)} className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <CtaButton withArrow>See your signals</CtaButton>
          <CtaButton variant="outline">Book Demo</CtaButton>
        </motion.div>

        <motion.p {...item(0.32)} className="mt-5 text-[14px] text-[#9a9a9a]">
          See what signals WhiteWhale can find for <span className="font-semibold text-[#7a7a7a]">free</span>
        </motion.p>
      </div>
    </section>
  );
}
