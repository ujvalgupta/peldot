import type { Metadata } from "next";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Our Story — WhiteWhale",
  description:
    "From $3K to 715+ sellers in 18 months, bootstrapped. Founded mid-2024, WhiteWhale is one of the fastest growing GTM software companies in the world.",
};

export default function StoryPage() {
  return (
    <>
      <section className="mx-auto max-w-[820px] px-5 pt-16 pb-10 text-center sm:px-8 sm:pt-24">
        <h1 className="heading-display text-[40px] font-bold text-[#0a0a0a] sm:text-[54px]">
          $3K to 715+ Sellers in 18 Months, Bootstrapped
        </h1>
        <p className="mx-auto mt-6 max-w-[620px] text-[18px] leading-[1.5] text-[#5b5b5b]">
          Founded in mid-2024 and now one of the fastest growing GTM software companies in the world.
        </p>
      </section>

      <section className="mx-auto max-w-[720px] px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="rounded-2xl border border-hairline bg-white p-8 sm:p-12">
          <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#9a9a9a]">
            A letter from the founders
          </p>
          <div className="mt-6 space-y-5 text-[17px] leading-[1.7] text-[#3b3b3b]">
            <p>
              We started WhiteWhale in July 2024. What began as a manual research service quickly
              proved its worth — one early client generated over $500,000 in pipeline within two
              months. That was the signal: this had to become software that could scale.
            </p>
            <p>
              We met at the University of Michigan&apos;s Ross School of Business, where we founded
              the Theta Capital investment club. After graduating, we worked in finance, building
              tracking technology for hedge fund investors that reached nearly 1,000 users at its
              peak.
            </p>
            <p>
              In early 2024 we shifted to B2B and B2G sales, developing a service that surfaced the
              insights reps actually needed — funding rounds, leadership changes, new contracts — and
              delivered them at the right moment.
            </p>
            <p className="font-medium text-[#0a0a0a]">
              Our mission is simple: to bring premium, accurate, and timely research to sales teams
              at scale.
            </p>
            <p className="text-[#0a0a0a]">— Noah &amp; Jack</p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
