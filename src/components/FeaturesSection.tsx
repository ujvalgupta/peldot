import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { InlineTestimonial } from "@/components/InlineTestimonial";
import {
  AccountsCard,
  EventsCard,
  PerformanceCard,
  SignalQuestionsCard,
  PingrAlertCard,
  TimelineCard,
} from "@/components/feature-cards";

interface RowProps {
  heading: ReactNode;
  description: string;
  card: ReactNode;
}

function FeatureRow({ heading, description, card }: RowProps) {
  return (
    <Reveal className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16">
      <div>
        <h3 className="heading-display max-w-[460px] text-[30px] font-normal text-[#0a0a0a] sm:text-[40px]">
          {heading}
        </h3>
        <p className="mt-5 max-w-[480px] text-[17px] leading-[1.55] text-[#5b5b5b]">
          {description}
        </p>
      </div>
      <div>{card}</div>
    </Reveal>
  );
}

export function FeaturesSection() {
  return (
    <section className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-24">
      {/* Section header */}
      <Reveal className="mx-auto max-w-[860px] text-center">
        <h2 className="heading-display text-[36px] font-medium text-[#0a0a0a] sm:text-[51.2px]">
          Peldot is different and it all starts with{" "}
          <span className="font-bold">truly custom signals</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[640px] text-[17px] leading-[1.55] text-[#5b5b5b]">
          Our platform builds the perfect signals for your org by leveraging 5
          years of combined experience working with hundreds of B2B sales teams,
          from SaaS to public safety to manufacturing and everything in between.
          Here&rsquo;s how:
        </p>
      </Reveal>

      <div className="mt-6 divide-y divide-hairline/60">
        <FeatureRow
          heading={<>You write the signals <strong className="font-bold">in plain English</strong></>}
          description="Gone are the days of pre set libraries and 20 generic intent topics. You get to write up to 35 exact questions that matter to your sales motion. If it’s on the internet, Peldot can find it."
          card={<SignalQuestionsCard />}
        />
        <FeatureRow
          heading={<>Tested against <strong className="font-bold">deals you&apos;ve already won</strong></>}
          description="All of your questions are analyzed against the deals you’ve already closed won, so Peldot can point to the signals that actually lead to revenue."
          card={<PerformanceCard />}
        />
        <FeatureRow
          heading={<>We rank your list <strong className="font-bold">and find new accounts.</strong></>}
          description="Take hundreds or thousands of companies from your named account list or CRM, we'll find the ones ready to buy now so your sellers don't waste time on low-fit accounts. Then we use those same signals to surface high-fit accounts you didn't even know existed."
          card={<AccountsCard />}
        />
        <FeatureRow
          heading={<>Connecting the dots <strong className="font-bold">to see the story.</strong></>}
          description="Anyone can send you one alert. Peldot scans earnings calls, news, press releases, and more, connecting the dots between them to find the underlying narrative."
          card={<EventsCard />}
        />
        <FeatureRow
          heading={<>All of this, <strong className="font-bold">without another login.</strong></>}
          description="Peldot seamlessly syncs to Hubly, Forcely, Pingr, Teamspace, Tablr, or your own tools via API. 90% of users never log in. By design. Your team spends time selling, not clicking."
          card={<PingrAlertCard />}
        />
      </div>

      {/* Inline testimonial */}
      <Reveal className="py-16">
        <InlineTestimonial
          quote={"“I looked at InfoPeak, Tablr, and other signal companies, but having a system that scrapes regulatory filings, company posts, and job postings gives us a much warmer approach than 'Hey, thanks for looking at our website today.”"}
          name="Theo Ramsey"
          role="Sales and Marketing Coordinator, Cendyx"
        />
      </Reveal>

      <div className="border-t border-hairline/60">
        <FeatureRow
          heading={<>Integrated in <strong className="font-bold">15 minutes, not 6 months</strong></>}
          description="By the time you finish your coffee, your reps have dozens of accounts to call with full context and sources."
          card={<TimelineCard />}
        />
      </div>
    </section>
  );
}
