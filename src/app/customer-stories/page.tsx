import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Customer Stories — WhiteWhale",
  description:
    "See how modern GTM teams use WhiteWhale's verifiable signals to eliminate noise, accelerate sales cycles, and close significantly larger deals.",
};

interface Story {
  company: string;
  person: string;
  role: string;
  quote: string;
  metrics?: string[];
  href?: string;
}

const STORIES: Story[] = [
  {
    company: "Meridian",
    person: "JT Bell",
    role: "Sales Representative",
    quote:
      "WhiteWhale helped us stop chasing digital noise and start seeing real opportunity. It's like having a radar.",
    metrics: ["5 days to ROI", "2,800 accounts prioritized in 24 hours"],
    href: "/customer-stories/meridian-business-case-study",
  },
  {
    company: "Kaleris",
    person: "Justin Ager",
    role: "Strategic Growth Manager",
    quote:
      "It's a no-brainer. You close one deal and it's paid for itself. If you try to track this on your own, you're going to miss stuff.",
  },
  {
    company: "Gravitate",
    person: "Beau Blanchard",
    role: "Sales and Marketing Coordinator",
    quote:
      "I looked at ZoomInfo, Clay, and other signal companies, but having a system that scrapes SEC filings gives us a warmer approach.",
  },
  {
    company: "Bitdrift",
    person: "Conner Slater",
    role: "Account Executive",
    quote:
      "It's so easy to use. This is the information you need, right where you need it and when you need it.",
    metrics: ["300+ accounts ranked", "13 signals in first two weeks"],
  },
  {
    company: "Simpli",
    person: "Nicholas de la Guardia",
    role: "GTM Lead",
    quote:
      "Even just within our ICP, there are so many accounts I had never heard of before.",
    metrics: ["30 minutes to first suggestions", "279 accounts found"],
  },
];

function StoryCard({ story }: { story: Story }) {
  const inner = (
    <div className="flex h-full flex-col rounded-2xl border border-hairline bg-white p-8 transition-shadow hover:shadow-[0_14px_44px_-22px_rgba(0,0,0,0.25)]">
      <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-ww-accent-blue">
        {story.company}
      </p>
      <p className="mt-4 flex-1 text-[18px] leading-[1.5] text-[#1c1c1c]">“{story.quote}”</p>
      {story.metrics && (
        <div className="mt-6 flex flex-wrap gap-2">
          {story.metrics.map((m) => (
            <span key={m} className="rounded-full bg-surface-alt px-3 py-1 text-[12px] font-semibold text-[#4b4b4b]">
              {m}
            </span>
          ))}
        </div>
      )}
      <div className="mt-6 border-t border-hairline pt-4">
        <p className="text-[15px] font-bold text-[#0a0a0a]">{story.person}</p>
        <p className="text-[14px] text-[#7a7a7a]">{story.role}</p>
      </div>
      {story.href && (
        <p className="mt-4 text-[14px] font-semibold text-ww-accent-blue">Read the case study →</p>
      )}
    </div>
  );
  return story.href ? (
    <Link href={story.href} className="block h-full">
      {inner}
    </Link>
  ) : (
    inner
  );
}

export default function CustomerStoriesPage() {
  return (
    <>
      <section className="mx-auto max-w-[900px] px-5 pt-16 pb-12 text-center sm:px-8 sm:pt-24">
        <h1 className="heading-display text-[36px] font-bold leading-[1.1] text-[#0a0a0a] sm:text-[48px]">
          See how modern GTM teams use WhiteWhale&apos;s verifiable signals to eliminate noise,
          accelerate sales cycles, and close significantly larger deals.
        </h1>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 pb-12 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((s) => (
            <StoryCard key={s.company} story={s} />
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
