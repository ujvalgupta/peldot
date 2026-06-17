import { cn } from "@/lib/utils";

/** Wrapper: the rounded blue panel that holds each feature's white cards. */
function BluePanel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-[14px] bg-ww-blue p-4", className)}>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

const ACCENT = {
  green: "#10b981",
  blue: "#3b82f6",
  purple: "#8b5cf6",
} as const;

/* 1 — Plain-English signal questions */
export function SignalQuestionsCard() {
  const items = [
    { label: "EXECUTIVE MANDATE", count: "89 accounts found", accent: ACCENT.green, q: "Did the CEO or CIO mention overhauling the business via AI or automation?" },
    { label: "COMPLIANCE TRIGGER", count: "214 accounts found", accent: ACCENT.blue, q: "Does {account} have SOC 2 or HIPAA data compliance?" },
    { label: "GRANULAR RESPONSIBILITY", count: null, accent: ACCENT.purple, q: "Is {account} hiring for non-technical roles (Marketing/Ops) that explicitly require SQL?" },
  ];
  return (
    <BluePanel>
      {items.map((it) => (
        <div key={it.label} className="overflow-hidden rounded-xl bg-white pl-1">
          <div className="border-l-4 py-4 pl-4 pr-4" style={{ borderColor: it.accent }}>
            <div className="mb-2 flex items-start justify-between gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#8a8a8a]">{it.label}</span>
              {it.count && (
                <span className="shrink-0 text-[12px] font-semibold" style={{ color: it.accent }}>{it.count}</span>
              )}
            </div>
            <p className="text-[15px] font-medium text-[#1c1c1c]">{it.q}</p>
          </div>
        </div>
      ))}
    </BluePanel>
  );
}

/* 2 — Signal performance table */
export function PerformanceCard() {
  const rows = [
    { name: "Executive Mandate", val: "1.4x win rate", color: ACCENT.green, bold: false },
    { name: "Hiring Surge + Budget Signal", val: "2.1x win rate", color: ACCENT.green, bold: false },
    { name: "Compliance Trigger", val: "1.1x win rate", color: ACCENT.blue, bold: false },
    { name: "Leadership Hire (Generic)", val: "0.9x — flagged", color: "#9a9a9a", bold: true },
  ];
  return (
    <BluePanel>
      <div className="rounded-xl bg-white p-5 sm:p-6">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.06em] text-ww-green">
          Signal Performance — Last 90 Days
        </p>
        <ul>
          {rows.map((r) => (
            <li key={r.name} className="flex items-center justify-between border-b border-hairline/70 py-3 last:border-0">
              <span className={cn("text-[15px] text-[#1c1c1c]", r.bold && "font-semibold")}>{r.name}</span>
              <span className="text-[14px] font-semibold" style={{ color: r.color }}>{r.val}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl bg-[#ecfdf5] px-4 py-3">
        <p className="text-[13px] font-medium text-[#047857]">
          📈 Accounts with 2+ stacked signals close at 2.1x your baseline win rate
        </p>
      </div>
    </BluePanel>
  );
}

/* 3 — Account ranking grid */
export function AccountsCard() {
  return (
    <BluePanel>
      <div className="grid grid-cols-2 gap-4">
        <AccountTile name="Norvell Financial" badge="3 ACTIVE SIGNALS" />
        <AccountTile name="Helixa Bio" badge="4 ACTIVE SIGNALS" note="AI platform deployed to 11,000 employees" />
        <AccountTile name="Forgeline" badge="2 ACTIVE SIGNALS" />
        <AccountTile name="Clearview Data" discovery note="Not in your CRM — found via signal match" />
      </div>
    </BluePanel>
  );
}

function AccountTile({ name, badge, note, discovery }: { name: string; badge?: string; note?: string; discovery?: boolean }) {
  return (
    <div className={cn("rounded-xl p-4", discovery ? "border border-[#bfdbfe] bg-[#eff6ff]" : "bg-white")}>
      {discovery && (
        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.06em] text-ww-accent-blue">New Discovery</p>
      )}
      <p className={cn("text-[15px] font-bold", discovery ? "text-[#1c1c1c]" : "text-[#1c1c1c]")}>{name}</p>
      {badge && (
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.04em] text-ww-green">{badge}</p>
      )}
      {note && <p className={cn("mt-1.5 text-[12px] leading-snug", discovery ? "text-ww-accent-blue" : "text-[#9a9a9a]")}>{note}</p>}
    </div>
  );
}

/* 4 — Connecting the dots event cards */
export function EventsCard() {
  const events = [
    { name: "Orbital Dynamics", time: "4 days ago", bullets: ["New monitoring satellite launched Feb 2026 — first commercial product, moving out of prototype", "$80M production contract signed May 2026, on top of existing government deal"] },
    { name: "Norvell Financial", time: "just now", bullets: ["Internal AI platform deployed to 180,000 employees — company-wide mandate, not a pilot", "New CIO appointed to lead digital transformation, two AI programs already running"] },
  ];
  return (
    <BluePanel>
      {events.map((e) => (
        <div key={e.name} className="rounded-xl bg-white p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[15px] font-bold text-[#1c1c1c]">{e.name}</span>
            <span className="text-[12px] text-[#9a9a9a]">{e.time}</span>
          </div>
          <ul className="space-y-2">
            {e.bullets.map((b, i) => (
              <li key={i} className="text-[13px] leading-snug text-[#5b5b5b]">• {b}</li>
            ))}
          </ul>
        </div>
      ))}
    </BluePanel>
  );
}

/* 5 — Pingr alert mock */
export function PingrAlertCard() {
  return (
    <BluePanel>
      <div className="rounded-xl bg-white p-5">
        <p className="mb-4 text-[13px] font-semibold text-[#9a9a9a]">#peldot-alerts</p>
        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#0a0a0a] text-[18px]">🐋</div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[15px] font-bold text-[#1c1c1c]">Peldot</span>
              <span className="rounded bg-[#e5e7eb] px-1.5 py-0.5 text-[9px] font-bold uppercase text-[#6b7280]">App</span>
              <span className="text-[12px] text-[#9a9a9a]">4:13 AM</span>
            </div>
            <p className="mt-1 text-[15px] font-semibold text-[#1c1c1c]">Signal Found: Finlane, Inc.</p>
            <div className="mt-2 rounded-md bg-[#f3f4f6] px-3 py-2 text-[13px] text-[#5b5b5b]">
              Signal: PLG transition | 1.4x higher win rate
            </div>
            <p className="mt-3 text-[13px] leading-snug text-[#5b5b5b]">
              Finlane&apos;s CEO outlined a <strong className="font-semibold text-[#1c1c1c]">shift from Sales-Led to Product-Led Growth</strong> in a recent press release. The company is <strong className="font-semibold text-[#1c1c1c]">hiring a Head of PLG</strong> and restructuring its go-to-market motion.
            </p>
          </div>
        </div>
      </div>
    </BluePanel>
  );
}

/* 6 — Onboarding timeline */
export function TimelineCard() {
  const steps = [
    { label: "SIGN UP", color: ACCENT.green, title: "Create signals. Connect integrations", body: "Write the questions that matter. Connect Hubly, Forcely, or Pingr. Turn on recommendations. Done.", strong: false },
    { label: "15 MINUTES", color: ACCENT.blue, title: "Ranked accounts. First suggestions", body: "Your accounts are scored and ranked. Suggestions start rolling in — accounts you should be targeting that you haven't heard of yet.", strong: false },
    { label: "HOUR 1", color: "#1c1c1c", title: '"How did I not always do it this way?"', body: "Always accounts to call, context to reference, a reason to reach out. No more scrolling through databases, manual research, or time wasted.", strong: true },
  ];
  return (
    <BluePanel>
      {steps.map((s) => (
        <div key={s.label} className="overflow-hidden rounded-xl bg-white pl-1">
          <div className="border-l-4 p-4" style={{ borderColor: s.color }}>
            <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.06em]" style={{ color: s.color }}>{s.label}</p>
            <p className={cn("text-[15px] text-[#1c1c1c]", s.strong ? "font-bold" : "font-semibold")}>{s.title}</p>
            <p className="mt-1.5 text-[13px] leading-snug text-[#7a7a7a]">{s.body}</p>
          </div>
        </div>
      ))}
    </BluePanel>
  );
}
