export interface LegalSection {
  heading: string;
  body: string;
}

interface LegalPageProps {
  title: string;
  updated: string;
  intro?: string;
  sections: LegalSection[];
}

export function LegalPage({ title, updated, intro, sections }: LegalPageProps) {
  return (
    <section className="mx-auto max-w-[780px] px-5 pt-12 pb-20 sm:px-8 sm:pt-20">
      <h1 className="heading-hero text-[34px] font-bold text-[#0a0a0a] sm:text-[46px]">{title}</h1>
      <p className="mt-3 text-[14px] text-[#9a9a9a]">{updated}</p>
      {intro && <p className="mt-6 text-[17px] leading-[1.7] text-[#3b3b3b]">{intro}</p>}

      <div className="mt-10 space-y-8">
        {sections.map((s, i) => (
          <div key={s.heading}>
            <h2 className="text-[19px] font-bold text-[#0a0a0a]">
              {i + 1}. {s.heading}
            </h2>
            <p className="mt-2 text-[16px] leading-[1.7] text-[#4b4b4b]">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
