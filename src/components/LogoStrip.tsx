// Placeholder customer wordmarks (fictional). Rendered as text, not real logos.
const LOGOS = [
  "Vantora",
  "Northwind",
  "Parcyl",
  "Arcwell",
  "Corventis",
  "Swyftly",
  "Doxa",
  "Nuvio",
];

export function LogoStrip() {
  return (
    <section className="border-y border-hairline/60">
      <div className="mx-auto max-w-[1280px] px-5 py-7 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:justify-between sm:gap-x-6">
          {LOGOS.map((name) => (
            <span
              key={name}
              className="text-[18px] font-bold tracking-tight text-[#9a9a9a] opacity-70 sm:text-[20px]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
