import type { Metadata } from "next";
import { CtaSection } from "@/components/CtaSection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Story — Peldot",
  description:
    "Founded in mid-2024, Peldot is one of the fastest growing GTM software companies in the world. A letter from the founders.",
};

const LETTER = [
  "We founded Peldot in July 2024 after running a high-touch research service for sales teams that delivered compelling results. One client generated over $500,000 in pipeline in under two months. The impact was clear. The problem? It was entirely manual, time-consuming, and couldn’t scale. That pain became our purpose: to bring the same quality of insight to sales teams, but in a way that could scale with technology.",
  "But Peldot didn’t start there.",
  "Our journey began at the Northgate University’s business school, where we met and launched our first venture together: Vesper Capital, an investment club that’s still active today. That early collaboration set the foundation for what would become a long-term partnership built on curiosity, ambition, and an obsession with turning information into action.",
  "After graduation, we worked together in finance, building technology to track companies for hedge funds. We found the problem genuinely exciting. How do you process an overwhelming amount of information and extract what actually matters? At its peak, our software was used by nearly 1,000 investors.",
  "Fast forward to early 2024. We applied that same research mindset to the world of sales. We built a service helping B2B and B2G software teams surface timely, relevant prospect insights like funding rounds, leadership changes, or new contracts that reps could tie directly to their outreach.",
  "It worked incredibly well, but we knew it could work even better with software.",
  "That’s when Peldot was born.",
  "Today, Peldot is the culmination of everything we’ve learned: from hedge funds to high-velocity sales, from spreadsheets to scalable software.",
];

export default function StoryPage() {
  return (
    <>
      <section className="mx-auto max-w-[820px] px-5 pt-16 pb-10 text-center sm:px-8 sm:pt-24">
        <h1 className="heading-hero text-[34px] font-bold text-[#0a0a0a] sm:text-[44px] md:text-[52.8px]">
          Our Story
        </h1>
        <p className="mx-auto mt-6 max-w-[620px] text-[18px] leading-[1.5] text-[#5b5b5b]">
          Founded in mid-2024 and now one of the fastest growing GTM software companies in the world.
        </p>
      </section>

      <Reveal as="section" className="mx-auto max-w-[720px] px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="rounded-2xl border border-hairline bg-white p-8 sm:p-12">
          <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#9a9a9a]">
            Letter from the founders
          </p>
          <div className="mt-6 space-y-5 text-[17px] leading-[1.7] text-[#3b3b3b]">
            {LETTER.map((para, i) => (
              <p key={i} className={i === 1 || i === 6 ? "font-medium text-[#0a0a0a]" : undefined}>
                {para}
              </p>
            ))}
            <p className="font-medium text-[#0a0a0a]">
              Our mission is simple — to bring premium, accurate, and timely research to sales teams
              at scale. Every insight we deliver is held to the same standard we had when we were
              manually grinding 40+ hours a week doing the research ourselves.
            </p>
            <p>We’re proud of what we’ve built, and we’re just getting started.</p>
            <p className="text-[#0a0a0a]">Sincerely,<br />Leo &amp; Max</p>
          </div>
        </div>
      </Reveal>

      <CtaSection />
    </>
  );
}
