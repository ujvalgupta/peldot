/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/Reveal";
import { PlayIcon } from "@/components/icons";

interface Card {
  poster: string;
  overlayName: string;
  quote: string;
  name: string;
  role: string;
  stats: { value: string; caption: string }[];
}

const CARDS: Card[] = [
  {
    poster: "/images/testimonial-conner.webp",
    overlayName: "Conner Slater",
    quote:
      "“It's so easy to use. I truly cannot highlight that point enough. This is the information you need, right where you need it and when you need it. Don't hesitate to try it out.”",
    name: "Conner Slater",
    role: "Account Executive, Bitdrift",
    stats: [
      { value: "300+", caption: "ACCOUNTS RANKED" },
      { value: "13 Signals", caption: "IN THE FIRST TWO WEEKS" },
    ],
  },
  {
    poster: "/images/testimonial-nicholas.webp",
    overlayName: "Nicholas de la Guardia",
    quote:
      "“Even just within our ICP, there are so many accounts that I had never heard of before. It's been cool even when I thought I already had a decent grasp of our ICP.”",
    name: "Nicholas de la Guardia",
    role: "GTM Lead, Simpli",
    stats: [
      { value: "30 minutes", caption: "TO FIRST SUGGESTIONS" },
      { value: "279 accounts", caption: "SUGGESTIONS FOUND" },
    ],
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28">
      <h2 className="heading-display mx-auto max-w-[820px] text-center text-[36px] font-medium text-[#0a0a0a] sm:text-[51.2px]">
        Don&apos;t take it from us. Take it from the{" "}
        <span className="font-bold">700+ sellers</span> that trust us.
      </h2>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {CARDS.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.08}>
            <a href="#" className="group relative block overflow-hidden rounded-xl bg-black/5">
              <img
                src={c.poster}
                alt={`${c.name} video testimonial`}
                className="aspect-video h-auto w-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-black/55 transition-transform group-hover:scale-105">
                  <PlayIcon className="ml-0.5 h-6 w-6 text-white" />
                </span>
              </span>
              <span className="absolute bottom-3 left-3 text-[12px] font-medium text-white/90 drop-shadow">
                {c.overlayName}
              </span>
            </a>

            <p className="mt-6 text-[17px] leading-[1.5] text-[#1c1c1c]">{c.quote}</p>
            <p className="mt-4 text-[15px] font-bold text-[#0a0a0a]">{c.name}</p>
            <p className="text-[14px] text-[#7a7a7a]">{c.role}</p>

            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-hairline pt-5">
              {c.stats.map((s) => (
                <div key={s.caption}>
                  <p className="text-[24px] font-bold text-ww-accent-blue">{s.value}</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.04em] text-[#9a9a9a]">
                    {s.caption}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-14 text-center text-[16px] text-[#9a9a9a]">
        WhiteWhale powers over 700+ sellers. From ambitious startups to major enterprises.
      </p>
    </section>
  );
}
