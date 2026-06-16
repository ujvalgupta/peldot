import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Arcwell Group — ROI in 5 Days | Peldot",
  description:
    "How Arcwell Group reversed six months of zero results in seven days with custom buying signals — ROI in 5 days, 2,800 accounts ranked in 24 hours.",
};

const METRICS = [
  { value: "5 days", caption: "To ROI after signing up" },
  { value: "2,800", caption: "Accounts ranked in 24 hours" },
  { value: "1 week", caption: "To a booked C-level meeting" },
  { value: "6 → 0 mo", caption: "Six months of zero results, reversed in 7 days" },
];

export default function ArcwellCaseStudy() {
  return (
    <>
      <article className="mx-auto max-w-[820px] px-5 pt-12 pb-12 sm:px-8 sm:pt-20">
        <Link href="/customer-stories" className="text-[14px] font-medium text-ww-accent-blue hover:underline">
          ← All customer stories
        </Link>
        <p className="mt-6 text-[13px] font-bold uppercase tracking-[0.08em] text-ww-accent-blue">
          Arcwell Group
        </p>
        <h1 className="heading-hero mt-4 text-[36px] font-bold leading-[1.1] text-[#0a0a0a] sm:text-[48px]">
          ROI in 5 days with custom buying signals
        </h1>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.caption} className="rounded-xl border border-hairline bg-white p-5">
              <p className="text-[24px] font-bold text-ww-accent-blue">{m.value}</p>
              <p className="mt-1 text-[12px] leading-snug text-[#7a7a7a]">{m.caption}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-5 text-[17px] leading-[1.7] text-[#3b3b3b]">
          <h2 className="heading-display pt-2 text-[28px] font-bold text-[#0a0a0a] sm:text-[32px]">The challenge</h2>
          <p>
            Arcwell knew their market opportunity was substantial — thousands of Midwest businesses
            could benefit from ERP modernization. The obstacle was identifying which companies to
            prioritize.
          </p>
          <p>
            For half a year, the team relied on traditional intent data, tracking IP-based searches
            for keywords like “ERP,” “integrating accounting and procurement,” and “saving costs.”
            This approach yielded disappointing results.
          </p>
          <blockquote className="border-l-4 border-ww-accent-blue pl-5 text-[19px] font-medium italic text-[#1c1c1c]">
            “We&rsquo;d get alerts, but nothing ever connected. It felt like it was no better than
            doing it random.”
          </blockquote>
          <p>
            Individual web searches rarely indicated genuine corporate interest, searcher identities
            remained anonymous, and signals lacked context or timing. After six months of effort,
            Arcwell had generated zero meetings.
          </p>

          <h2 className="heading-display pt-4 text-[28px] font-bold text-[#0a0a0a] sm:text-[32px]">The solution</h2>
          <p>
            Arcwell partnered with Peldot to identify real-world business signals — tangible
            events and company changes creating actual buying opportunities. They defined custom
            signal filters including executive changes, cost-cutting initiatives, and new product
            launches. Peldot analyzed all 2,800 target accounts, ranking them by readiness.
          </p>
          <p>
            The top-ranked account was one Riley had pursued for months. Peldot revealed a recent
            C-level leadership change — an ideal outreach window. Riley acted on this insight
            immediately.
          </p>

          <h2 className="heading-display pt-4 text-[28px] font-bold text-[#0a0a0a] sm:text-[32px]">The outcome</h2>
          <p>
            Within one week, Riley booked a meeting with that executive. Arcwell now focuses on the
            right accounts with continuously ranked lists, acts on real-world signals reps can use
            immediately, and embeds Peldot insights directly into their CRM and weekly workflows.
          </p>
          <blockquote className="border-l-4 border-ww-accent-blue pl-5 text-[19px] font-medium italic text-[#1c1c1c]">
            “Peldot helped us stop chasing digital noise and start seeing real opportunity.
            It&rsquo;s like having a radar that tells you when and where to make your move.”
          </blockquote>
          <p className="text-[15px] font-bold text-[#0a0a0a]">Riley Stone</p>
          <p className="-mt-4 text-[14px] text-[#7a7a7a]">Business Development Representative, Arcwell Group</p>

          <h2 className="heading-display pt-4 text-[28px] font-bold text-[#0a0a0a] sm:text-[32px]">About Arcwell Group</h2>
          <p>
            Arcwell Group is a premier LedgerOne Solution Provider Partner serving small and
            mid-sized businesses across the Midwest. From offices in Kansas City, Omaha, and Denver,
            Arcwell helps companies modernize finance, operations, and growth through tailored
            LedgerOne implementations and ongoing support.
          </p>
        </div>
      </article>

      <CtaSection />
    </>
  );
}
