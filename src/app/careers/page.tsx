import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/CtaSection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Careers — Peldot",
  description:
    "Peldot is built for exceptional people, and we want to build with exceptional people. See our values and get in touch.",
};

const VALUES = [
  {
    title: "Delight, Always",
    body: "Whether it's product design, a customer email, or an internal Pingr message — we believe in creating moments that feel thoughtful, clear, and genuinely enjoyable. The little things matter.",
  },
  {
    title: "Time Is Not a Ritual",
    body: "We don't meet for the sake of meeting. Every interaction has a purpose, and every minute matters. Less calendar clutter, more focused execution.",
  },
  {
    title: "Quality In, Quality Out",
    body: "Whether it's data, communication, or code — we obsess over clarity and accuracy. If it's not valuable, it doesn't ship.",
  },
  {
    title: "Have Fun",
    body: "We take the work seriously, not ourselves. There's no point in working somewhere if you don't have a good time.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-5 pt-16 pb-10 text-center sm:px-8 sm:pt-24">
        <h1 className="heading-hero text-[34px] font-bold text-[#0a0a0a] sm:text-[44px] md:text-[52.8px]">
          Join Peldot
        </h1>
        <p className="mx-auto mt-6 max-w-[620px] text-[18px] leading-[1.5] text-[#5b5b5b]">
          Peldot is built for exceptional people and we want to build with exceptional people.
        </p>
      </section>

      <section className="mx-auto max-w-[1000px] px-5 py-12 sm:px-8">
        <Reveal className="mb-10 text-center">
          <h2 className="heading-display text-[36px] font-medium text-[#0a0a0a] sm:text-[51.2px]">
            Our Values
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[17px] leading-[1.55] text-[#6b6b6b]">
            We strive to deliver exceptional results always.
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06} className="rounded-2xl border border-hairline bg-white p-8">
              <h3 className="text-[20px] font-bold text-[#0a0a0a]">{v.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-[#6b6b6b]">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="mx-auto max-w-[720px] px-5 py-16 text-center sm:px-8 sm:py-24">
        <h2 className="heading-display text-[30px] font-medium text-[#0a0a0a] sm:text-[40px]">
          Want to Join?
        </h2>
        <p className="mx-auto mt-5 max-w-[540px] text-[17px] leading-[1.55] text-[#6b6b6b]">
          We&rsquo;re always on the lookout for smart, curious people who move fast and build things
          that matter. Send your resume or CV to{" "}
          <a href="mailto:hello@peldot.com" className="font-semibold text-[#0a0a0a] underline">
            hello@peldot.com
          </a>
          . We&rsquo;d love to hear from you.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md bg-[#1c1c1c] px-6 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            See your signals
          </Link>
        </div>
      </Reveal>

      <CtaSection />
    </>
  );
}
