import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/CtaSection";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Signals API — Peldot",
  description:
    "Programmatic access to custom buying signals, verifiable source data, and account narratives. Built for automation agencies, AI agents, and custom internal platforms.",
};

function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-[#23232a] bg-[#0d0d12] p-5 text-[13px] leading-[1.7] text-[#d6d6e0]">
      <code>{children}</code>
    </pre>
  );
}

const UPLOAD_EXAMPLE = `POST /v1/signals/account.upload

{
  "domain": "helixabio.com",
  "signals": [
    {
      "type": "ma_activity",
      "summary": "Acquired AI diagnostics startup",
      "source": "https://sec.gov/...",
      "confidence": 0.94
    },
    {
      "type": "new_product",
      "summary": "AI platform deployed to 11,000 employees",
      "source": "https://press/...",
      "confidence": 0.91
    }
  ]
}`;

const ARCHITECTURES = [
  { name: "Why & Who Sync", flow: "Peldot → Tablr → Hubly" },
  { name: "Campaign Orchestration", flow: "Peldot → Atlas → Prospra" },
  { name: "Enterprise Routing", flow: "Peldot → Forcely → Selene" },
];

const METHODS = [
  { name: "Historical Backfill", endpoint: "POST /v1/accounts/batch", desc: "Hydrate your entire account list with the signals behind every closed-won deal." },
  { name: "Active Monitoring", endpoint: "GET /v1/farsight", desc: "Poll for the freshest ranked accounts and the signals that moved them." },
  { name: "Account Discovery", endpoint: "GET /v1/discover", desc: "Surface high-fit accounts that match your winning signal patterns." },
];

export default function ApiPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-[1280px] px-5 pt-16 pb-12 text-center sm:px-8 sm:pt-24">
        <h1 className="heading-hero mx-auto max-w-[760px] text-[34px] font-bold text-[#0a0a0a] sm:text-[44px] md:text-[52.8px]">
          The most advanced and accurate signal API data.
        </h1>
        <p className="mx-auto mt-6 max-w-[680px] text-[18px] leading-[1.5] text-[#5b5b5b]">
          Programmatic access to custom buying signals, verifiable source data, and account
          narratives. Built for automation agencies, proprietary AI agents, and custom internal
          platforms.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md bg-[#1c1c1c] px-6 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Get API Key
          </Link>
          <Link
            href="/api"
            className="inline-flex items-center justify-center rounded-md border border-hairline bg-white px-6 py-3 text-[14px] font-semibold text-[#1c1c1c] transition-colors hover:bg-[#f5f5f5]"
          >
            Read The Docs
          </Link>
        </div>
        <p className="mt-5 text-[14px] text-[#9a9a9a]">700+ sellers already using it, build now.</p>
      </section>

      {/* Query accounts */}
      <section className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="heading-display text-[34px] font-normal text-[#0a0a0a] sm:text-[44px]">
              Query accounts. <strong className="font-bold">Receive context.</strong>
            </h2>
            <p className="mt-5 max-w-[480px] text-[17px] leading-[1.55] text-[#5b5b5b]">
              Send a domain and receive active signals, quoted sources, and a synthesized narrative
              in real time.
            </p>
            <ul className="mt-6 space-y-3">
              {["Standardized JSON payloads", "High-throughput rate limits", "Native citation tracking"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-[16px] text-[#1c1c1c]">
                  <CheckIcon className="h-5 w-5 shrink-0 text-ww-green" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <Code>{UPLOAD_EXAMPLE}</Code>
        </div>
      </section>

      {/* Event-driven */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="heading-display max-w-[640px] text-[34px] font-normal text-[#0a0a0a] sm:text-[44px]">
            Event-driven <strong className="font-bold">signal streaming.</strong>
          </h2>
          <p className="mt-5 max-w-[620px] text-[17px] leading-[1.55] text-[#5b5b5b]">
            Configure webhooks to push payloads the moment a target account triggers a new signal —
            compatible with Tablr Workflows, AI Agents (LLM), engagement platforms, and custom systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Tablr Workflows", "AI Agents (LLM)", "Engagement Platforms", "Custom Systems"].map((t) => (
              <span key={t} className="rounded-full border border-hairline bg-white px-4 py-2 text-[14px] font-medium text-[#1c1c1c]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* GTM Automation */}
      <section className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="heading-display max-w-[640px] text-[34px] font-normal text-[#0a0a0a] sm:text-[44px]">
          Engineered for <strong className="font-bold">GTM Automation.</strong>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {METHODS.map((m) => (
            <div key={m.name} className="rounded-2xl border border-hairline bg-white p-6">
              <p className="text-[16px] font-bold text-[#0a0a0a]">{m.name}</p>
              <code className="mt-2 inline-block rounded-md bg-[#f3f4f6] px-2 py-1 text-[12px] text-[#2b7bb9]">
                {m.endpoint}
              </code>
              <p className="mt-3 text-[14px] leading-[1.5] text-[#6b6b6b]">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MCP */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="heading-display text-[34px] font-normal text-[#0a0a0a] sm:text-[44px]">
                Trust your agents with <strong className="font-bold">factual sources.</strong>
              </h2>
              <p className="mt-5 max-w-[480px] text-[17px] leading-[1.55] text-[#5b5b5b]">
                Native Model Context Protocol support for Atlas Code and proprietary LLMs, exposed
                as native tool calls.
              </p>
            </div>
            <Code>{`// MCP tool definition
{
  "name": "get_account_signals",
  "description": "Fetch active buying signals and source citations for a domain.",
  "input": { "domain": "string" }
}`}</Code>
          </div>
        </div>
      </section>

      {/* Integration architectures */}
      <section className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="heading-display mb-8 text-center text-[30px] font-medium text-[#0a0a0a] sm:text-[40px]">
          Integration architectures
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {ARCHITECTURES.map((a) => (
            <div key={a.name} className="rounded-2xl border border-hairline bg-white p-6 text-center">
              <p className="text-[15px] font-bold text-[#0a0a0a]">{a.name}</p>
              <p className="mt-3 font-mono text-[13px] leading-[1.6] text-[#2b7bb9]">{a.flow}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ready to integrate */}
      <section className="mx-auto max-w-[820px] px-5 py-12 text-center sm:px-8">
        <h2 className="heading-display text-[32px] font-medium text-[#0a0a0a] sm:text-[42px]">
          Ready to Integrate?
        </h2>
        <p className="mx-auto mt-5 max-w-[520px] text-[17px] text-[#6b6b6b]">
          API and Webhook access is included in all account plans.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md bg-[#1c1c1c] px-6 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Get API Key
          </Link>
          <Link
            href="/api"
            className="inline-flex items-center justify-center rounded-md border border-hairline bg-white px-6 py-3 text-[14px] font-semibold text-[#1c1c1c] transition-colors hover:bg-[#f5f5f5]"
          >
            Read The Docs
          </Link>
        </div>
        <p className="mt-5 text-[14px] text-[#9a9a9a]">715+ sellers already using it, build now.</p>
      </section>

      <CtaSection />
    </>
  );
}
