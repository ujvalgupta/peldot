import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers — WhiteWhale",
  description:
    "WhiteWhale is built for exceptional people, and we want to build with exceptional people. See our values and get in touch.",
};

const VALUES = [
  {
    title: "Delight, Always",
    body: "Whether it's product design, a customer email, or an internal Slack message — we believe in creating moments that feel thoughtful, clear, and genuinely enjoyable. The little things matter.",
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
        <h1 className="heading-display text-[42px] font-bold text-[#0a0a0a] sm:text-[56px] md:text-[60px]">
          Join WhiteWhale
        </h1>
        <p className="mx-auto mt-6 max-w-[620px] text-[18px] leading-[1.5] text-[#5b5b5b]">
          WhiteWhale is built for exceptional people, and we want to build with exceptional people.
        </p>
      </section>

      <section className="mx-auto max-w-[1000px] px-5 py-12 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl border border-hairline bg-white p-8">
              <h2 className="text-[20px] font-bold text-[#0a0a0a]">{v.title}</h2>
              <p className="mt-3 text-[15px] leading-[1.6] text-[#6b6b6b]">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[720px] px-5 py-16 text-center sm:px-8 sm:py-24">
        <h2 className="heading-display text-[34px] font-medium text-[#0a0a0a] sm:text-[44px]">
          Want to Join?
        </h2>
        <p className="mx-auto mt-5 max-w-[520px] text-[17px] leading-[1.55] text-[#6b6b6b]">
          We&apos;re looking for smart, curious people who move fast and build things that matter.
          Reach out at{" "}
          <a href="mailto:hello@getwhitewhale.com" className="font-semibold text-[#0a0a0a] underline">
            hello@getwhitewhale.com
          </a>
          .
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md bg-[#1c1c1c] px-6 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            See your signals
          </Link>
        </div>
      </section>
    </>
  );
}
