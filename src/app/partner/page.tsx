import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/CtaSection";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Partner Program — Peldot",
  description:
    "Join the Peldot partner program. Earn up to 35% progressive lifetime commissions, qualified inbound leads, and a dedicated internal outreach license.",
};

const BENEFITS = [
  {
    label: "Platform Access",
    title: "Internal Outreach License",
    body: "Secure a dedicated Peldot instance to scale your own outbound efforts. Use it internally to track target accounts, identify high-intent prospects, and demonstrate live “Proof of Value” during your sales calls.",
  },
  {
    label: "Drive Deals",
    title: "Qualified Inbound Leads",
    body: "Top-tier partners are showcased in our public directory and receive direct, qualified inbound leads. We actively route mid-market and enterprise prospects to agencies with proven implementation expertise.",
  },
  {
    label: "Reoccurring Revenue",
    title: "Lifetime Commissions*",
    body: "Earn up to 35% progressive revenue share on every deal you close. Your commissions are locked in for the lifetime of the customer, surviving all future renewals, account expansions, and seat upgrades.",
  },
];

export default function PartnerPage() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-5 pt-16 pb-12 text-center sm:px-8 sm:pt-24">
        <span className="mb-6 inline-block rounded-full border border-hairline bg-white px-4 py-1.5 text-[13px] font-medium text-[#4b4b4b]">
          Up to 35% lifetime commissions
        </span>
        <h1 className="heading-hero mx-auto max-w-[680px] text-[34px] font-bold text-[#0a0a0a] sm:text-[44px] md:text-[52.8px]">
          Join our partner program
        </h1>
        <p className="mx-auto mt-6 max-w-[620px] text-[18px] leading-[1.5] text-[#5b5b5b]">
          Peldot offers a unique partner program, with up to 30% lifetime commissions. Get paid
          to promote the best signals.
        </p>
        <div className="mt-9 flex justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md bg-[#1c1c1c] px-6 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Join the partner program
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8 sm:py-16">
        <Reveal className="mx-auto mb-12 max-w-[680px] text-center">
          <h2 className="heading-display text-[36px] font-medium text-[#0a0a0a] sm:text-[51.2px]">
            Ecosystem Perks
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-[1.55] text-[#6b6b6b]">
            Accelerate your agency&rsquo;s growth with exclusive revenue sharing, co-marketing
            opportunities, and premium platform access.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08} className="rounded-2xl border border-hairline bg-white p-8">
              <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-ww-accent-blue">
                {b.label}
              </span>
              <h3 className="mt-3 text-[20px] font-bold text-[#0a0a0a]">{b.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.55] text-[#6b6b6b]">{b.body}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-[13px] text-[#9a9a9a]">*Full-resell partners</p>
      </section>

      <Reveal as="section" className="mx-auto max-w-[820px] px-5 py-12 text-center sm:px-8 sm:py-16">
        <h2 className="heading-display text-[30px] font-medium text-[#0a0a0a] sm:text-[40px]">
          Ready to Start?
        </h2>
        <p className="mx-auto mt-5 max-w-[520px] text-[17px] leading-[1.55] text-[#6b6b6b]">
          Our most successful partners have added a significant revenue stream to their agency.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md bg-[#1c1c1c] px-6 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Start Earning Now
          </Link>
        </div>
      </Reveal>

      <Faq />

      <CtaSection />
    </>
  );
}
