"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import { ChevronDownIcon } from "@/components/icons";
import type { FaqGroup } from "@/types/content";

// NOTE: Questions are verbatim from the live site. Answers are loaded on a
// separate detail page on the original and are reconstructed here on-brand.
const GROUPS: FaqGroup[] = [
  {
    heading: "I need to build a business case…",
    items: [
      { question: "Why are the results so good?", answer: "Because the signals are written by you, in your own words, and validated against the deals you've already won. Instead of one generic intent score, Peldot combines multiple verifiable events into a clear \"why now\" — so reps reach out with a reason, not a guess." },
      { question: "We already pay for Intent Data. Why do we need this?", answer: "Intent data ships the same surging topics to every competitor who buys it. Peldot tracks custom signals unique to your motion, with a linked source you can quote on the call. It's the difference between \"a topic is surging\" and \"their CEO announced X last week.\"" },
      { question: "Will this require our IT or Engineering team to set up?", answer: "No. Setup takes about 15 minutes — write your questions, connect Hubly, Forcely, or Pingr, and turn on recommendations. No engineering work required." },
      { question: "My SDRs are already overwhelmed. Will they adopt another tool?", answer: "90% of users never log in. Signals are delivered straight to Pingr, your CRM, or wherever your team already works — so reps get a reason to reach out without learning another dashboard." },
      { question: "Is the data accurate enough to trust with enterprise accounts?", answer: "Every signal links to a verifiable, quoted source — earnings calls, press releases, job postings, regulatory filings. If Peldot can't point to where it found something, it doesn't surface it." },
    ],
  },
  {
    heading: "I have questions about your company…",
    items: [
      { question: "How long have you been around? Can we trust you?", answer: "Peldot (formerly Scout) builds on 5 years of combined experience working with hundreds of B2B sales teams, from SaaS to public safety to manufacturing. Over 700 sellers trust us today." },
      { question: "Why don't you have a huge team of employees?", answer: "We use AI to amplify human potential, not replace it. A lean team lets us move fast, talk to customers directly, and keep the product sharp instead of bloated." },
      { question: "Can I ask a question to ownership directly?", answer: "Yes. We're small enough that you can reach the people who build the product. Book a demo or email us and you'll talk to someone who can actually answer." },
    ],
  },
  {
    heading: "I have questions about your product & features…",
    items: [
      { question: "What sources do you use for signals?", answer: "Earnings calls, news, press releases, job postings, regulatory filings, company posts, and more — connected together to find the underlying narrative, not just a single alert." },
      { question: "How long does it take to get up and running?", answer: "About 15 minutes. By the time you finish your coffee, your reps have dozens of ranked accounts to call with full context and sources." },
      { question: "What if I don't want my reps logging into another tab?", answer: "Then they won't. Signals sync to Hubly, Forcely, Pingr, Teamspace, or your own tools via API. 90% of users never open the app." },
      { question: "Do I have to come up with all the Custom Signals myself?", answer: "No. We help you write them based on your sales motion and the deals you've already won — then you can refine, add, or remove up to 35 questions whenever you like." },
      { question: "Do you provide clean data for my CRM?", answer: "Yes. Ranked accounts, scores, and the signals behind them flow into your CRM so your data stays current and actionable." },
      { question: "Why don't you offer contact data, email drafting, or sequencing?", answer: "Because that's not where we win. We focus on telling you which accounts to work and why — and integrate with the tools you already use for outreach." },
    ],
  },
  {
    heading: "I have questions about your competitors…",
    items: [
      { question: 'How are you different from traditional "Intent Data" (Sensora, Bordata)?', answer: "Traditional intent data sells the same black-box scores and surging topics to everyone. Peldot tracks custom signals you define, each backed by a verifiable, quoted source — so no two customers see the same generic list." },
      { question: "Why can't I just use Atlas / Nova / Orion?", answer: "General LLMs can answer a question once. Peldot monitors your entire account list continuously, connects events across sources, scores them against your closed-won deals, and delivers the result to your CRM — at scale, every day." },
      { question: "Why can't I just use Tablr?", answer: "Tablr is a powerful enrichment workbench you build and maintain. Peldot is purpose-built to write custom signals, monitor accounts, and surface \"why now\" stories automatically — no table-building required." },
    ],
  },
  {
    heading: "I have other questions…",
    items: [
      { question: "Is Peldot secure?", answer: "Yes. We follow industry-standard security practices and only surface signals from public, verifiable sources." },
      { question: "Does Peldot have an API?", answer: "Yes. You can pull signals and ranked accounts into your own tools via our API and webhooks." },
      { question: "Can I export my data if we ever leave?", answer: "Always. Your accounts, signals, and scores are yours to export at any time." },
      { question: "Do you require annual contracts?", answer: "No long lock-ins to get started. Try it, see your signals, and scale up when it's working." },
      { question: "What is your refund policy?", answer: "If Peldot isn't surfacing signals worth acting on, reach out — we'll make it right." },
    ],
  },
];

function AccordionItem({ item }: { item: { question: string; answer: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 py-5 text-left"
      >
        <ChevronDownIcon
          className={cn("h-5 w-5 shrink-0 text-[#0a0a0a] transition-transform", open && "rotate-180")}
        />
        <span className="text-[18px] font-bold text-[#0a0a0a]">{item.question}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pl-8 pr-4 text-[16px] leading-[1.6] text-[#5b5b5b]">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  return (
    <section className="mx-auto max-w-[900px] px-5 py-16 sm:px-8 sm:py-24">
      {GROUPS.map((group) => (
        <Reveal key={group.heading} className="mb-12 last:mb-0">
          <h2 className="heading-display mb-2 text-[26px] font-medium text-[#0a0a0a] sm:text-[34px]">
            {group.heading}
          </h2>
          <div>
            {group.items.map((item) => (
              <AccordionItem key={item.question} item={item} />
            ))}
          </div>
        </Reveal>
      ))}
    </section>
  );
}
