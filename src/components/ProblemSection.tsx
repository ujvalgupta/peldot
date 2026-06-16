import { Reveal } from "@/components/Reveal";
import { InlineTestimonial } from "@/components/InlineTestimonial";

const GETTING_NOW = [
  '"Company X raised a Series B" — sent to 4,000 reps',
  'A black-box "intent score" with no source you can verify',
  'Vague topic "surging" that means nothing on a call',
  '6-month "learning period" before anything is usable',
  "The exact same signals your 3 biggest competitors bought",
];

const WHITEWHALE_GIVES = [
  "Custom signals you write in your own words",
  "Verifiable events with linked, quoted sources",
  '"Why now" stories that combine multiple signals per account',
  "First results in 15 minutes…not 6 months",
  "Signals unique to your business that no one else sees",
];

export function ProblemSection() {
  return (
    <section className="bg-surface-alt">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="heading-display mx-auto max-w-[760px] text-center text-[36px] font-medium text-[#0a0a0a] sm:text-[51.2px]">
          Every sales team wants to know who to sell to{" "}
          <span className="font-bold">right now.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[640px] text-center text-[17px] leading-[1.5] text-[#5b5b5b]">
          Every sales team buys the same intent data from the same vendor. When
          you&rsquo;re all calling the same accounts with the same
          &lsquo;signal&rsquo;. No one stands out.
        </p>

        {/* Comparison card */}
        <Reveal className="mx-auto mt-14 grid max-w-[1080px] overflow-hidden rounded-2xl border border-hairline bg-white shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)] md:grid-cols-2">
          <div className="border-b border-hairline p-8 md:border-b-0 md:border-r sm:p-10">
            <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#b0b0b0]">
              What you&apos;re getting now
            </p>
            <ul>
              {GETTING_NOW.map((item, i) => (
                <li
                  key={i}
                  className="border-b border-hairline/70 py-4 text-[16px] text-[#a0a0a0] last:border-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 sm:p-10">
            <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#0a0a0a]">
              What Peldot gives you
            </p>
            <ul>
              {WHITEWHALE_GIVES.map((item, i) => (
                <li
                  key={i}
                  className="border-b border-hairline/70 py-4 text-[16px] font-medium text-[#0a0a0a] last:border-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Inline testimonial */}
        <Reveal className="mt-20">
          <InlineTestimonial
            quote={"“It's a no-brainer. You close one deal and it's paid for itself. If you try to track this on your own, you're going to miss stuff. You miss a lot less with Peldot.”"}
            name="Marcus Vale"
            role="Strategic Growth Manager, Vantora"
          />
        </Reveal>
      </div>
    </section>
  );
}
