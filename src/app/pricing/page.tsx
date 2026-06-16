import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/CtaSection";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/Reveal";
import { InlineTestimonial } from "@/components/InlineTestimonial";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing — WhiteWhale",
  description:
    "Unlimited users, one flat monthly fee. Unlimited account suggestions, all integrations, included with every plan.",
};

interface Tier {
  name: string;
  price: string;
  period?: string;
  blurb: string;
  cta: { label: string; href: string };
  highlighted?: boolean;
}

const TIERS: Tier[] = [
  {
    name: "Signals Starter",
    price: "$200",
    period: "/month",
    blurb: "For individual sellers and small teams getting started with custom signals.",
    cta: { label: "See your signals", href: "/pricing" },
  },
  {
    name: "Signals Growth",
    price: "$500",
    period: "/month",
    blurb: "For growing teams that need more accounts and founder-level onboarding support.",
    cta: { label: "See your signals", href: "/pricing" },
    highlighted: true,
  },
  {
    name: "Signals Team",
    price: "Chat with the team",
    blurb: "For agencies and complex sales teams with large account lists and custom setup needs.",
    cta: { label: "Schedule Call", href: "/partner" },
  },
];

const FEATURES: { label: string; values: [string, string, string] }[] = [
  {
    label: "Onboarding",
    values: ["Instant Self-Setup", "Self-Setup + Founder Support", "Custom Setup + Founder Support"],
  },
  { label: "Seats", values: ["Unlimited", "Unlimited", "Unlimited"] },
  { label: "Active Accounts", values: ["Up to 300 (tracked weekly)", "Up to 750 (tracked weekly)", "1,000–5,000+"] },
  { label: "Custom Signals", values: ["✓", "✓", "✓"] },
  { label: "Account Suggestions", values: ["✓", "✓", "✓"] },
  { label: "“Why Now” Narrative Generation", values: ["✓", "✓", "✓"] },
  { label: "Closed-Won Signal Analysis", values: ["✓", "✓", "✓"] },
  { label: "Slack Alerts (+ Microsoft Teams Available)", values: ["✓", "✓", "✓"] },
  { label: "CRM Sync (HubSpot / Salesforce)", values: ["✓", "✓", "✓"] },
  { label: "API Access", values: ["✓", "✓", "✓"] },
  { label: "Custom Source Scraping", values: ["✓", "✓", "✓"] },
  { label: "Delivery Frequency", values: ["Weekly", "Daily Available", "Daily Available"] },
  { label: "Support", values: ["Tutorial videos/docs + Call", "Tutorial videos/docs + Call", "Tutorial videos/docs + Call"] },
];

export default function PricingPage() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-5 pt-16 pb-10 text-center sm:px-8 sm:pt-24">
        <h1 className="heading-hero mx-auto max-w-[680px] text-[34px] font-bold text-[#0a0a0a] sm:text-[44px] md:text-[52.8px]">
          Unlimited users, one flat monthly fee
        </h1>
        <p className="mx-auto mt-6 max-w-[640px] text-[18px] leading-[1.5] text-[#5b5b5b]">
          We do the opposite of every sales tool. Unlimited users. Unlimited account
          suggestions. All integrations. Included with every plan.
        </p>
      </section>

      {/* Tiers */}
      <section className="mx-auto max-w-[1100px] px-5 pb-8 sm:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={
                "flex flex-col rounded-2xl border p-8 " +
                (tier.highlighted
                  ? "border-[#1c1c1c] bg-[#0a0a0a] text-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)]"
                  : "border-hairline bg-white")
              }
            >
              <p
                className={
                  "text-[12px] font-semibold uppercase tracking-[0.08em] " +
                  (tier.highlighted ? "text-white/60" : "text-[#9a9a9a]")
                }
              >
                {tier.name}
              </p>
              <div className="mt-4 flex items-end gap-1">
                <span
                  className={
                    "heading-display font-bold " +
                    (tier.price.startsWith("$") ? "text-[44px]" : "text-[26px]") +
                    (tier.highlighted ? " text-white" : " text-[#0a0a0a]")
                  }
                >
                  {tier.price}
                </span>
                {tier.period && (
                  <span className={"pb-2 text-[15px] " + (tier.highlighted ? "text-white/60" : "text-[#9a9a9a]")}>
                    {tier.period}
                  </span>
                )}
              </div>
              <p className={"mt-4 text-[15px] leading-[1.5] " + (tier.highlighted ? "text-white/70" : "text-[#6b6b6b]")}>
                {tier.blurb}
              </p>
              <Link
                href={tier.cta.href}
                className={
                  "mt-8 inline-flex items-center justify-center rounded-md px-5 py-3 text-[14px] font-semibold transition-opacity hover:opacity-90 " +
                  (tier.highlighted ? "bg-white text-[#0a0a0a]" : "bg-[#1c1c1c] text-white")
                }
              >
                {tier.cta.label}
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-[14px] text-[#9a9a9a]">
          Starter and Growth include a free preview — see your signals before you pay.
        </p>
      </section>

      {/* Feature comparison */}
      <section className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="heading-display mb-8 text-center text-[30px] font-medium text-[#0a0a0a] sm:text-[40px]">
          Everything included, every plan
        </h2>
        <div className="overflow-hidden rounded-2xl border border-hairline">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-surface-alt">
                <th className="p-4 text-[13px] font-semibold text-[#6b6b6b] sm:p-5"> </th>
                {["Starter", "Growth", "Team"].map((h) => (
                  <th key={h} className="p-4 text-center text-[14px] font-bold text-[#0a0a0a] sm:p-5">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((row) => (
                <tr key={row.label} className="border-t border-hairline">
                  <td className="p-4 text-[14px] font-medium text-[#1c1c1c] sm:p-5">{row.label}</td>
                  {row.values.map((v, i) => (
                    <td key={i} className="p-4 text-center text-[14px] text-[#5b5b5b] sm:p-5">
                      {v === "✓" ? (
                        <CheckIcon className="mx-auto h-5 w-5 text-ww-green" />
                      ) : (
                        v
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Testimonial */}
      <Reveal as="section" className="mx-auto max-w-[1080px] px-5 py-12 sm:px-8 sm:py-16">
        <InlineTestimonial
          quote={"“It's a no-brainer. You close one deal and it's paid for itself. If you try to track this on your own, you're going to miss stuff. You miss a lot less with WhiteWhale.”"}
          name="Justin Ager"
          role="Strategic Growth Manager, Kaleris"
          poster="/images/testimonial-justin.png"
        />
      </Reveal>

      {/* GTM Agency partner banner */}
      <Reveal as="section" className="mx-auto max-w-[1080px] px-5 pb-12 sm:px-8">
        <div className="flex flex-col items-start gap-6 rounded-2xl bg-surface-alt p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="max-w-[640px]">
            <h2 className="text-[22px] font-bold text-[#0a0a0a] sm:text-[26px]">GTM Agency?</h2>
            <p className="mt-3 text-[16px] leading-[1.55] text-[#5b5b5b]">
              Build your clients&rsquo; automated outbound pipelines on WhiteWhale&rsquo;s
              infrastructure. Multi-tenant management, API routing, and dedicated technical support.
            </p>
          </div>
          <Link
            href="/partner"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-[#1c1c1c] px-6 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Apply for Partner Program
          </Link>
        </div>
      </Reveal>

      <Faq />

      <CtaSection />
    </>
  );
}
