import { Hero } from "@/components/Hero";
import { LogoStrip } from "@/components/LogoStrip";
import { DemoSection } from "@/components/DemoSection";
import { ProblemSection } from "@/components/ProblemSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Testimonials } from "@/components/Testimonials";
import { CommonTraits } from "@/components/CommonTraits";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <DemoSection />
      <ProblemSection />
      <FeaturesSection />
      <Testimonials />
      <CommonTraits />
      <Faq />
      <CtaSection />
    </>
  );
}
