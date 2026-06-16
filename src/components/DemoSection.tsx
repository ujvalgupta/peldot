import { PlayIcon } from "@/components/icons";

const ROWS = [
  { company: "Clearview Data", region: "California, US", score: 88, signal: "Outbound sales hiring", owner: "Marcus Vale" },
  { company: "Norvell Financial", region: "New York, US", score: 81, signal: "New CIO appointed", owner: "Devin Hart" },
  { company: "Forgeline", region: "Illinois, US", score: 76, signal: "ERP modernization RFP", owner: "Adrian Cole" },
  { company: "Helixa Bio", region: "Massachusetts, US", score: 72, signal: "AI platform rollout", owner: "Theo Ramsey" },
  { company: "Orbital Dynamics", region: "Colorado, US", score: 69, signal: "New product launch", owner: "Riley Stone" },
];

/** Fictional product dashboard mock (placeholder for the real demo screenshot). */
export function DemoSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 pt-10 pb-16 sm:px-8 sm:pt-14">
      <p className="mb-7 text-center text-[15px] font-medium text-[#7a7a7a]">
        See Peldot in action —{" "}
        <span className="font-semibold text-[#0a0a0a]">5 Min Demo</span>
      </p>

      <a
        href="#"
        className="group relative mx-auto block max-w-[1040px] overflow-hidden rounded-2xl border border-hairline bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]"
      >
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-hairline bg-[#f9fafb] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-4 text-[13px] font-semibold text-[#0a0a0a]">Accounts</span>
        </div>

        {/* table */}
        <div className="overflow-hidden">
          <div className="grid grid-cols-[1.6fr_0.5fr_1.4fr_1fr] gap-2 border-b border-hairline bg-[#fcfcfd] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.04em] text-[#9a9a9a]">
            <span>Account</span>
            <span>Score</span>
            <span>Last Signal</span>
            <span>Owner</span>
          </div>
          {ROWS.map((r) => (
            <div
              key={r.company}
              className="grid grid-cols-[1.6fr_0.5fr_1.4fr_1fr] items-center gap-2 border-b border-hairline/60 px-5 py-3 text-[13px] last:border-0"
            >
              <div>
                <p className="font-semibold text-[#1c1c1c]">{r.company}</p>
                <p className="text-[11px] text-[#9a9a9a]">{r.region}</p>
              </div>
              <span className="font-bold text-ww-accent-blue">{r.score}</span>
              <span className="flex items-center gap-1.5 text-[#5b5b5b]">
                <span className="h-1.5 w-1.5 rounded-full bg-ww-green" />
                {r.signal}
              </span>
              <span className="text-[#5b5b5b]">{r.owner}</span>
            </div>
          ))}
        </div>

        {/* Play overlay */}
        <span className="absolute inset-0 flex items-center justify-center bg-black/[0.03]">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-105">
            <PlayIcon className="ml-1 h-6 w-6 text-[#1c1c1c]" />
          </span>
        </span>
      </a>
    </section>
  );
}
