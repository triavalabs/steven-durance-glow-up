import HeroSection from "@/components/HeroSection";
import WhatYoullLearnSection from "@/components/WhatYoullLearnSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <HeroSection />
      <WhatYoullLearnSection />
      <TestimonialsSection />
      <ValuePropositionSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;
