import HeroSection from "@/components/HeroSection";
import WhatYoullLearnSection from "@/components/WhatYoullLearnSection";
import StevensStorySection from "@/components/StevensStorySection";
import LifestyleSection from "@/components/LifestyleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <HeroSection />
      <WhatYoullLearnSection />
      <StevensStorySection />
      <LifestyleSection />
      <TestimonialsSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;
