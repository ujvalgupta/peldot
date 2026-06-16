import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Partner Program — WhiteWhale",
  description:
    "Join the WhiteWhale partner program. Earn up to 35% progressive lifetime commissions, qualified inbound leads, and a dedicated internal outreach license.",
};

const BENEFITS = [
  {
    title: "Internal Outreach License",
    body: "A dedicated WhiteWhale instance for tracking your own target accounts and identifying the best prospects for sales demonstrations.",
  },
  {
    title: "Qualified Inbound Leads",
    body: "Top partners appear in our public directory and receive routed mid-market and enterprise prospects.",
  },
  {
    title: "Lifetime Commissions",
    body: "Earn up to 35% progressive revenue share on every deal you close, with commissions locked in for the customer's lifetime.",
  },
];

export default function PartnerPage() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-5 pt-16 pb-12 text-center sm:px-8 sm:pt-24">
        <span className="mb-6 inline-block rounded-full border border-hairline bg-white px-4 py-1.5 text-[13px] font-medium text-[#4b4b4b]">
          Up to 35% lifetime commissions
        </span>
        <h1 className="heading-display mx-auto max-w-[820px] text-[42px] font-bold text-[#0a0a0a] sm:text-[56px] md:text-[60px]">
          Join our partner program
        </h1>
        <p className="mx-auto mt-6 max-w-[640px] text-[18px] leading-[1.5] text-[#5b5b5b]">
          Exclusive revenue sharing, co-marketing opportunities, and premium platform access for
          agencies and consultants who bring WhiteWhale to their clients.
        </p>
        <div className="mt-9 flex justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md bg-[#1c1c1c] px-6 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Book a partnership demo
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <div key={b.title} className="rounded-2xl border border-hairline bg-white p-8">
              <span className="text-[13px] font-bold text-ww-accent-blue">0{i + 1}</span>
              <h2 className="mt-3 text-[20px] font-bold text-[#0a0a0a]">{b.title}</h2>
              <p className="mt-3 text-[15px] leading-[1.55] text-[#6b6b6b]">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
