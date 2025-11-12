import HeroSection from "@/components/HeroSection";
import WhatYoullLearnSection from "@/components/WhatYoullLearnSection";
import StevensStorySection from "@/components/StevensStorySection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import StickyCTABanner from "@/components/StickyCTABanner";
import CTASection from "@/components/CTASection";
import ClientTransformationsSection from "@/components/ClientTransformationsSection";
import logoImage from "@/assets/stevendurance-logo-latest.png";
import transformationImage from "@/assets/transformation-split.jpg";

const Index = () => {
  return <main className="min-h-screen bg-background text-foreground antialiased space-y-0 md:space-y-0">
      {/* Hidden OG Card for Social Media Preview - 1200x630px */}
      <div 
        id="og-card" 
        className="fixed top-0 left-[-9999px] w-[1200px] h-[630px] bg-gradient-to-br from-background via-background to-primary/20 flex items-center justify-between p-16 overflow-hidden"
        style={{ opacity: 0, pointerEvents: 'none' }}
      >
        {/* Left Content */}
        <div className="flex-1 z-10">
          <img 
            src={logoImage} 
            alt="Steven Durance Logo" 
            className="w-48 mb-8"
          />
          <h1 className="text-6xl font-bold text-foreground mb-6 leading-tight">
            EXCLUSIVE 1:1<br />COACHING
          </h1>
          <p className="text-4xl font-semibold bg-gradient-accent bg-clip-text text-transparent mb-4">
            Transform Your Body<br />in 90 Days
          </p>
          <p className="text-2xl text-muted-foreground">
            Elite Personal Training & Nutrition
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 z-10">
          <img 
            src={transformationImage} 
            alt="Client Transformation Results" 
            className="w-[450px] h-[550px] object-cover rounded-2xl shadow-2xl"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <HeroSection />
      <WhatYoullLearnSection />
      <CTASection variant="secondary" urgency="ONLY 3 SPOTS LEFT" className="bg-gradient-card" />
      <StevensStorySection className="my-0 py-0" />
      <CTASection urgency="FINAL CALL" className="bg-gradient-subtle" />
      <ClientTransformationsSection />
      <CTASection urgency="LIMITED TIME" className="bg-gradient-card" />
      <ValuePropositionSection />
      <CTASection urgency="ACT NOW" className="bg-gradient-subtle" />
      <FAQSection />
      <FinalCTASection />
      <StickyCTABanner />
    </main>;
};
export default Index;