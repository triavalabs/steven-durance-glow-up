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
    <main className="min-h-screen bg-background text-foreground antialiased">
      <HeroSection />
      <WhatYoullLearnSection />
      <CTASection variant="secondary" urgency="ONLY 3 SPOTS LEFT" className="bg-gradient-card" />
      <StevensStorySection />
      <CTASection urgency="FINAL CALL" className="bg-gradient-subtle" />
      <TestimonialsSection />
      <CTASection urgency="LIMITED TIME" className="bg-gradient-card" />
      <ValuePropositionSection />
      <CTASection urgency="ACT NOW" className="bg-gradient-subtle" />
      <FAQSection />
      <FinalCTASection />
      <StickyCTABanner />
    </main>
  );
};

export default Index;
