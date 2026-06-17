import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaSection } from "@/components/CtaSection";
import { CheckIcon } from "@/components/icons";
import { INTEGRATIONS } from "@/content/integrations";

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
  if (!data) return { title: "Integration — Peldot" };
  return {
    title: `${data.name} Integration — Peldot`,
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
