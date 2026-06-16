import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/CtaSection";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/Reveal";
import { PingrAlertCard } from "@/components/feature-cards";

export const metadata: Metadata = {
  title: "Customer Stories — Peldot",
  description:
    "See how modern GTM teams use Peldot's verifiable signals to eliminate noise, accelerate sales cycles, and close significantly larger deals.",
};

const OPENING_QUOTES = [
  {
    quote:
      "It's a no-brainer. You close one deal and it's paid for itself. If you try to track this on your own, you're going to miss stuff. You miss a lot less with Peldot.",
    name: "Marcus Vale",
    role: "Strategic Growth Manager, Vantora",
  },
  {
    quote:
      "I looked at InfoPeak, Tablr, and other signal companies, but having a system that scrapes regulatory filings, company posts, and job postings gives us a much warmer approach than 'Hey, thanks for looking at our website today.'",
    name: "Theo Ramsey",
    role: "Sales and Marketing Coordinator, Cendyx",
  },
];

const ROI_STATS = [
  { value: "+27.9%", caption: "Larger Deal Sizes" },
  { value: "69%", caption: "Faster Deal Cycles" },
  { value: "+29%", caption: "Better Close Rate" },
];

interface Story {
  company: string;
  person: string;
  role: string;
  quote: string;
  metrics: { value: string; caption: string }[];
  href?: string;
}

const STORIES: Story[] = [
  {
    company: "Arcwell",
    person: "Riley Stone",
    role: "Sales Representative, Arcwell",
    quote:
      "Peldot helped us stop chasing digital noise and start seeing real opportunity. It's like having a radar that tells you when and where to make your move.",
    metrics: [
      { value: "5 DAYS", caption: "TO ROI AFTER SIGNING UP FOR PELDOT." },
      { value: "2,800", caption: "ACCOUNTS PRIORITIZED IN JUST 24 HOURS." },
    ],
    href: "/customer-stories/arcwell-case-study",
  },
  {
    company: "Quantel",
    person: "Devin Hart",
    role: "Account Executive, Quantel",
    quote:
      "It's so easy to use. I truly cannot highlight that point enough. This is the information you need, right where you need it and when you need it. Don't hesitate to try it out.",
    metrics: [
      { value: "300+", caption: "ACCOUNTS RANKED" },
      { value: "13 Signals", caption: "IN THE FIRST TWO WEEKS" },
    ],
  },
  {
    company: "Lumeo",
    person: "Adrian Cole",
    role: "GTM Lead, Lumeo",
    quote:
      "Even just within our ICP, there are so many accounts that I had never heard of before. It's been cool even when I thought I already had a decent grasp of our ICP.",
    metrics: [
      { value: "30 minutes", caption: "TO FIRST SUGGESTIONS" },
      { value: "279 accounts", caption: "SUGGESTIONS FOUND" },
    ],
  },
];

const TIMELINE = [
  {
    step: "01",
    title: "Minute 1: See your signals",
    body: "Click ‘See Your Signals’ to get a curated list of pre-researched buying triggers built specifically for your business for free, then select a plan and create your account.",
  },
  {
    step: "05",
    title: "Minute 5: Scan",
    body: "Turn on account suggestions and add your target accounts. The engine immediately begins scanning the market for your signals and ranking your list.",
  },
  {
    step: "15",
    title: "Minute 15: Dream Accounts",
    body: "The result? A fully ranked, researched list of accounts complete with quotes and context that continuously updates itself every single day.",
  },
];

export default function CustomerStoriesPage() {
  return (
    <>
      <section className="mx-auto max-w-[900px] px-5 pt-16 pb-10 text-center sm:px-8 sm:pt-24">
        <h1 className="heading-hero text-[34px] font-bold text-[#0a0a0a] sm:text-[44px] md:text-[52.8px]">
          Customer Stories
        </h1>
        <p className="mx-auto mt-6 max-w-[680px] text-[18px] leading-[1.5] text-[#5b5b5b]">
          See how modern GTM teams use Peldot&rsquo;s verifiable signals to eliminate noise,
          accelerate sales cycles, and close significantly larger deals.
        </p>
      </section>

      {/* Opening quotes */}
      <section className="mx-auto max-w-[1080px] px-5 pb-12 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {OPENING_QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.08} className="rounded-2xl border border-hairline bg-white p-8">
              <p className="text-[18px] leading-[1.5] text-[#1c1c1c]">“{q.quote}”</p>
              <p className="mt-5 text-[15px] font-bold text-[#0a0a0a]">{q.name}</p>
              <p className="text-[14px] text-[#7a7a7a]">{q.role}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ROI band */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-[1080px] px-5 py-16 sm:px-8 sm:py-20">
          <Reveal className="text-center">
            <h2 className="heading-display mx-auto max-w-[640px] text-[36px] font-medium text-[#0a0a0a] sm:text-[51.2px]">
              Built to deliver <span className="font-bold">undeniable ROI.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[620px] text-[17px] leading-[1.55] text-[#6b6b6b]">
              Don&rsquo;t just take our word for it. Here is the aggregate pipeline impact across our
              users over the last 18 months.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {ROI_STATS.map((s, i) => (
              <Reveal key={s.caption} delay={i * 0.08} className="text-center">
                <p className="heading-display text-[44px] font-bold text-ww-accent-blue sm:text-[56px]">
                  {s.value}
                </p>
                <p className="mt-2 text-[15px] font-medium text-[#4b4b4b]">{s.caption}</p>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-[760px] text-center text-[16px] leading-[1.6] text-[#6b6b6b]">
            Why are the results so good? When you reach out to the right account at the right time,
            everything accelerates. Instead of relying on vague intent scores, Peldot scans
            multiple signals to find the underlying narrative, giving your reps the exact reason an
            account is ready to buy today.
          </p>
        </div>
      </section>

      {/* Industry */}
      <Reveal as="section" className="mx-auto max-w-[820px] px-5 py-16 text-center sm:px-8 sm:py-20">
        <h2 className="heading-display text-[32px] font-medium text-[#0a0a0a] sm:text-[44px]">
          Built for any industry. <span className="font-bold">Proven across 700+ use cases.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[620px] text-[17px] leading-[1.55] text-[#6b6b6b]">
          Whether you&rsquo;re selling heavy industrial equipment or enterprise SaaS, there are
          custom signals you could and should be tracking.
        </p>
      </Reveal>

      {/* Story cards */}
      <section className="mx-auto max-w-[1080px] px-5 pb-8 sm:px-8">
        <div className="grid gap-6">
          {STORIES.map((s, i) => (
            <Reveal key={s.company} delay={i * 0.06}>
              <div className="grid gap-8 rounded-2xl border border-hairline bg-white p-8 sm:p-10 md:grid-cols-[1.4fr_1fr] md:items-center">
                <div>
                  <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-ww-accent-blue">
                    {s.company}
                  </p>
                  <p className="mt-4 text-[20px] leading-[1.45] text-[#1c1c1c]">“{s.quote}”</p>
                  <p className="mt-5 text-[15px] font-bold text-[#0a0a0a]">{s.person}</p>
                  <p className="text-[14px] text-[#7a7a7a]">{s.role}</p>
                  {s.href && (
                    <Link href={s.href} className="mt-4 inline-block text-[14px] font-semibold text-ww-accent-blue hover:underline">
                      Read the full case study →
                    </Link>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                  {s.metrics.map((m) => (
                    <div key={m.caption} className="rounded-xl bg-surface-alt p-5">
                      <p className="text-[26px] font-bold text-ww-accent-blue">{m.value}</p>
                      <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.04em] leading-snug text-[#9a9a9a]">
                        {m.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ROI timeline */}
      <section className="mx-auto max-w-[1080px] px-5 py-16 sm:px-8 sm:py-20">
        <Reveal className="mb-12 text-center">
          <h2 className="heading-display mx-auto max-w-[560px] text-[32px] font-medium text-[#0a0a0a] sm:text-[44px]">
            ROI measured <span className="font-bold">in minutes, not quarters.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[17px] leading-[1.55] text-[#6b6b6b]">
            Don&rsquo;t wait months for signals. Peldot is designed to generate actionable
            pipeline in your first 15 minutes.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.step} delay={i * 0.08} className="rounded-2xl border border-hairline bg-white p-8">
              <p className="heading-display text-[40px] font-bold text-ww-accent-blue">{t.step}</p>
              <h3 className="mt-3 text-[17px] font-bold text-[#0a0a0a]">{t.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.55] text-[#6b6b6b]">{t.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Zero-risk + alert mock */}
      <section className="bg-surface-alt">
        <div className="mx-auto grid max-w-[1080px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
          <Reveal>
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-ww-accent-blue">
              Zero-risk agreements
            </p>
            <h2 className="heading-display mt-3 text-[32px] font-medium text-[#0a0a0a] sm:text-[44px]">
              We bet on our data. <span className="font-bold">Not multi-year lock-ins.</span>
            </h2>
            <p className="mt-5 max-w-[480px] text-[17px] leading-[1.55] text-[#6b6b6b]">
              Old-school intent providers force you into rigid 2-year contracts before you ever see a
              drop of pipeline. We do the exact opposite.
            </p>
            <Link
              href="/pricing"
              className="mt-7 inline-flex items-center justify-center rounded-md bg-[#1c1c1c] px-6 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              View Pricing
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <PingrAlertCard />
          </Reveal>
        </div>
      </section>

      <Faq />

      <CtaSection />
    </>
  );
}
