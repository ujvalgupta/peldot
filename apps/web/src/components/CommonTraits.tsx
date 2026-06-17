import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";

const TRAITS = [
  {
    title: "They know signals build great lists. Not Firmographics.",
    body: "Firmographics aren't enough anymore. They need to focus on the accounts ready now, not the accounts that match a static ICP definition from 6 months ago.",
  },
  {
    title: "They know the world changes fast and their list should too",
    body: "They're not satisfied with account lists that get re-ranked every 6–12 months. The best account today is not the best account 2 weeks from now. They want to know what is, even if it's not on their list.",
  },
  {
    title: "They're consultative and relational, not transactional",
    body: "They win deals by showing up with their homework done. “Do you need my SaaS?” is noise. “Saw your CEO said X at Y. Are you working on that?” enters the conversation they're already having.",
  },
];

export function CommonTraits() {
  return (
    <section className="bg-surface-alt">
      <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="heading-display mx-auto max-w-[820px] text-center text-[36px] font-medium text-[#0a0a0a] sm:text-[51.2px]">
          Here&rsquo;s what all our best customers{" "}
          <span className="font-bold">had in common</span>
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {TRAITS.map((t, i) => (
            <Reveal key={t.title} index={i}>
              <h3 className="text-[19px] font-bold leading-snug text-[#0a0a0a]">{t.title}</h3>
              <p className="mt-3 text-[16px] leading-[1.55] text-[#6b6b6b]">{t.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-[20px] font-bold text-[#0a0a0a]">
            If that&apos;s you, what are you waiting for?
          </p>
          <CtaButton withArrow>See your signals</CtaButton>
        </div>
      </div>
    </section>
  );
}
