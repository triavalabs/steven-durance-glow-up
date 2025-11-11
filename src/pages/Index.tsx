import HeroSection from "@/components/HeroSection";
import WhatYoullLearnSection from "@/components/WhatYoullLearnSection";
import StevensStorySection from "@/components/StevensStorySection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import StickyCTABanner from "@/components/StickyCTABanner";
import CTASection from "@/components/CTASection";
import ClientTransformationsSection from "@/components/ClientTransformationsSection";
const Index = () => {
  return <main className="min-h-screen bg-background text-foreground antialiased space-y-0 md:space-y-0">
      <HeroSection />
      <WhatYoullLearnSection />
      <CTASection variant="secondary" urgency="ONLY 3 SPOTS LEFT" className="bg-gradient-card" />
      <StevensStorySection className="my-0 py-0" />
      <CTASection urgency="FINAL CALL" className="bg-gradient-subtle" />
      <CTASection urgency="LIMITED TIME" className="bg-gradient-card" />
      <ClientTransformationsSection />
      <ValuePropositionSection />
      <CTASection urgency="ACT NOW" className="bg-gradient-subtle" />
      <FAQSection />
      <FinalCTASection />
      <StickyCTABanner />
    </main>;
};
export default Index;