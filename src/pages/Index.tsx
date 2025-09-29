import HeroSection from "@/components/HeroSection";
import WhatYoullLearnSection from "@/components/WhatYoullLearnSection";
import StevensStorySection from "@/components/StevensStorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import StickyCTABanner from "@/components/StickyCTABanner";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <HeroSection />
      <WhatYoullLearnSection />
      <StevensStorySection />
      <TestimonialsSection />
      <ValuePropositionSection />
      <FAQSection />
      <FinalCTASection />
      <StickyCTABanner />
    </main>
  );
};

export default Index;
