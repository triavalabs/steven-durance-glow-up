import HeroSection from "@/components/HeroSection";
import WhatYoullLearnSection from "@/components/WhatYoullLearnSection";
import StevensStorySection from "@/components/StevensStorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import StickyCTABanner from "@/components/StickyCTABanner";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased space-y-0 md:space-y-0">
      <HeroSection />
      <div className="pb-0 md:pb-0">
        <WhatYoullLearnSection />
      </div>
      <CTASection variant="secondary" urgency="ONLY 3 SPOTS LEFT" className="bg-gradient-card" />
      <div className="pb-0 md:pb-0">
        <StevensStorySection />
      </div>
      <CTASection urgency="FINAL CALL" className="bg-gradient-subtle" />
      <div className="pb-0 md:pb-0">
        <TestimonialsSection />
      </div>
      <CTASection urgency="LIMITED TIME" className="bg-gradient-card" />
      <div className="pb-0 md:pb-0">
        <ValuePropositionSection />
      </div>
      <CTASection urgency="ACT NOW" className="bg-gradient-subtle" />
      <div className="pb-0 md:pb-0">
        <FAQSection />
      </div>
      <FinalCTASection />
      <StickyCTABanner />
    </main>
  );
};

export default Index;
