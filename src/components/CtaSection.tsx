import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";

export function CtaSection() {
  return (
    <Reveal as="section" className="mx-auto max-w-[1280px] px-5 py-20 text-center sm:px-8 sm:py-28">
      <h2 className="heading-display mx-auto max-w-[820px] text-[40px] font-medium text-[#0a0a0a] sm:text-[51.2px]">
        Almost everyone says{" "}
        <span className="font-bold">&ldquo;Wait...you can track THAT?&rdquo;</span>
      </h2>
      <p className="mx-auto mt-6 max-w-[560px] text-[18px] text-[#6b6b6b]">
        See your signals for free. No credit card required.
      </p>
      <div className="mt-9 flex justify-center">
        <CtaButton withArrow>See your signals</CtaButton>
      </div>
    </Reveal>
  );
}
