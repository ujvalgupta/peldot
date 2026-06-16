import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaSection } from "@/components/CtaSection";
import { CheckIcon } from "@/components/icons";

interface Integration {
  name: string;
  heading: string;
  subheading: string;
  sectionHeading: React.ReactNode;
  sectionBody: string;
  benefits: { title: string; body: string }[];
  workflow: string[];
  setupNote: string;
  readyLine: string;
}

const INTEGRATIONS: Record<string, Integration> = {
  hubspot: {
    name: "HubSpot",
    heading: "Native HubSpot Integration",
    subheading:
      "Stop exporting CSVs. Put verifiable buying signals, source quotes, and “Why Now” narratives directly into the CRM your reps already live in.",
    sectionHeading: (
      <>
        Not just data fields. <strong className="font-bold">App Card available.</strong>
      </>
    ),
    sectionBody:
      "WhiteWhale functions as an invisible intelligence layer — delivering a Why Now summary, individual signals, and the sources, quotes, and relevant details behind each one.",
    benefits: [
      { title: "Zero Manual Uploads", body: "Automatic daily syncing to HubSpot — no spreadsheets to manage." },
      { title: "Lifecycle-Aware Signals", body: "Context-dependent signal relevance based on deal stage." },
      { title: "Closed-Won Analysis", body: "Revenue correlation calculations tied to the market triggers that close." },
    ],
    workflow: ["Signal trigger", "Webhook action", "Native sync update", "Team notification"],
    setupNote: "Less than a 10-minute integration",
    readyLine: "HubSpot access is included in all account plans.",
  },
  salesforce: {
    name: "Salesforce",
    heading: "Salesforce Integration",
    subheading:
      "Stop exporting CSVs. Put verifiable buying signals, source quotes, and “Why Now” narratives directly into the CRM your reps already live in.",
    sectionHeading: (
      <>
        Context exactly <strong className="font-bold">where reps need it.</strong>
      </>
    ),
    sectionBody:
      "Configure webhooks to push payloads to your endpoints the moment target accounts trigger signals — ideal for n8n automations, database updates, or alert routing.",
    benefits: [
      { title: "Zero Manual Uploads", body: "No spreadsheet management; automatic daily syncs to Salesforce." },
      { title: "Lifecycle-Aware Signals", body: "Surface relevant signals based on prospect stage." },
      { title: "Closed-Won Analysis", body: "Calculate the market triggers correlated with revenue." },
    ],
    workflow: ["Signal triggers", "Find contacts & enrich", "Update company & create task", "Send account alert"],
    setupNote: "Less than a 10-minute integration",
    readyLine: "Salesforce access is included in all account plans. 700+ sellers already using it.",
  },
  slack: {
    name: "Slack",
    heading: "Slack Integration",
    subheading:
      "Every morning, push verifiable buying signals directly into the Slack channels your team already lives in.",
    sectionHeading: (
      <>
        Daily alerts with <strong className="font-bold">all the context.</strong>
      </>
    ),
    sectionBody:
      "Each signal comes with details, sources, quotes, and facts to support your outreach. Your team is busy — pushing signals directly into Slack eliminates tool fatigue and dramatically decreases speed-to-lead.",
    benefits: [
      { title: "Daily Alerts", body: "Detection triggers instantly deliver exact quotes to your team's devices." },
      { title: "No New Tools to Learn", body: "Adoption is guaranteed because there is no login required." },
      { title: "One-Click Actions", body: "Native buttons enable direct CRM access or source navigation." },
    ],
    workflow: ["Signal detected", "Quote + source attached", "Posted to channel", "One-click to CRM"],
    setupNote: "Less than a 10-minute integration",
    readyLine: "Slack access is included in all account plans. 700+ sellers already using it.",
  },
  clay: {
    name: "Clay",
    heading: "Signals in Clay",
    subheading:
      "Every morning, push verifiable buying signals directly into your Clay tables to run enrichments and workflows.",
    sectionHeading: (
      <>
        Enrich your tables <strong className="font-bold">with signal data.</strong>
      </>
    ),
    sectionBody:
      "When signals are detected, WhiteWhale returns quoted sources and synthesized narratives for workflows, contact discovery, and messaging personalization. Pushing signals into Clay eliminates manual research and accelerates speed-to-lead.",
    benefits: [
      { title: "Automate Enrichments", body: "Detection triggers automatic waterfall enrichment of the buying committee." },
      { title: "No Manual Research", body: "Use source quotes from SEC filings, job boards, and earnings calls for AI email personalization." },
      { title: "Real-Time Workflows", body: "Evaluate intent, score accounts, and push enriched contacts to CRM or sequencing tools." },
    ],
    workflow: ["Signal detected", "Waterfall enrichment", "Score & evaluate", "Push to sequencing"],
    setupNote: "Less than a 10-minute integration",
    readyLine: "Clay access is included in all account plans. 700+ sellers already using it.",
  },
  mcp: {
    name: "MCP / Claude",
    heading: "MCP & Claude",
    subheading:
      "Your sales signal intelligence, entirely in natural language. Ask Claude to prioritize accounts, configure tracking, upload lists, and pull signal data.",
    sectionHeading: (
      <>
        Your pipeline data, <strong className="font-bold">fully conversational.</strong>
      </>
    ),
    sectionBody:
      "Give Claude direct access to your WhiteWhale intelligence. Instantly pull SEC quotes, evaluate target accounts, and generate personalized outreach — all in one chat interface. By bringing WhiteWhale into Claude Desktop you eliminate context switching and dramatically increase execution speed.",
    benefits: [
      { title: "Daily Prioritization", body: "Get ranked account lists with exact buying triggers and source quotes, ready for action." },
      { title: "No-Code Configuration", body: "Manage the entire setup via chat — upload lists, adjust signal weights, create ICP segments without dashboards." },
      { title: "Account Discovery", body: "Scan the market automatically and add net-new target accounts matching your ideal profile." },
    ],
    workflow: ["Ask in natural language", "Claude calls the tool", "Signals + sources returned", "Draft outreach"],
    setupNote: "No-code, conversational setup",
    readyLine: "Claude / MCP access is included in all account plans. 700+ sellers already using it.",
  },
};

export function generateStaticParams() {
  return Object.keys(INTEGRATIONS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = INTEGRATIONS[slug];
  if (!data) return { title: "Integration — WhiteWhale" };
  return {
    title: `${data.name} Integration — WhiteWhale`,
    description: data.subheading,
  };
}

export default async function IntegrationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = INTEGRATIONS[slug];
  if (!data) notFound();

  return (
    <>
      <section className="mx-auto max-w-[1280px] px-5 pt-16 pb-12 text-center sm:px-8 sm:pt-24">
        <span className="mb-6 inline-block rounded-full border border-hairline bg-white px-4 py-1.5 text-[13px] font-medium text-[#4b4b4b]">
          {data.name} Integration
        </span>
        <h1 className="heading-hero mx-auto max-w-[760px] text-[34px] font-bold text-[#0a0a0a] sm:text-[44px] md:text-[52.8px]">
          {data.heading}
        </h1>
        <p className="mx-auto mt-6 max-w-[660px] text-[18px] leading-[1.5] text-[#5b5b5b]">
          {data.subheading}
        </p>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 py-10 sm:px-8">
        <div className="rounded-2xl border border-hairline bg-surface-alt p-8 sm:p-12">
          <h2 className="heading-display max-w-[640px] text-[30px] font-normal text-[#0a0a0a] sm:text-[40px]">
            {data.sectionHeading}
          </h2>
          <p className="mt-5 max-w-[680px] text-[17px] leading-[1.55] text-[#5b5b5b]">
            {data.sectionBody}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 py-10 sm:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {data.benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-hairline bg-white p-7">
              <CheckIcon className="h-6 w-6 text-ww-green" />
              <h3 className="mt-4 text-[18px] font-bold text-[#0a0a0a]">{b.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.5] text-[#6b6b6b]">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 py-10 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {data.workflow.map((step, i) => (
            <div key={step} className="flex items-center gap-2 sm:gap-3">
              <span className="rounded-full border border-hairline bg-white px-4 py-2 text-[13px] font-medium text-[#1c1c1c]">
                {step}
              </span>
              {i < data.workflow.length - 1 && <span className="text-[#c0c0c0]">→</span>}
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[14px] font-medium text-[#9a9a9a]">{data.setupNote}</p>
      </section>

      <section className="mx-auto max-w-[720px] px-5 py-12 text-center sm:px-8">
        <h2 className="heading-display text-[32px] font-medium text-[#0a0a0a] sm:text-[42px]">
          Ready to Integrate?
        </h2>
        <p className="mx-auto mt-5 max-w-[520px] text-[17px] text-[#6b6b6b]">{data.readyLine}</p>
      </section>

      <CtaSection />
    </>
  );
}
