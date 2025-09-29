import { Target, Zap, MapPin, Heart } from "lucide-react";
import athleticBodyImage from "@/assets/athletic-body-result.png";

const learningPoints = [
  {
    icon: Target,
    title: "Personal 1:1 Coaching",
    description: "Get direct access to Steven with personalized guidance tailored specifically to your goals and lifestyle."
  },
  {
    icon: Zap,
    title: "Customized App Access",
    description: "Exclusive access to Steven's custom app with your personalized workout and nutrition plans."
  },
  {
    icon: MapPin,
    title: "Sustainable Nutrition Strategy",
    description: "Learn the flexible nutrition approach that fits your lifestyle without restrictive dieting."
  },
  {
    icon: Heart,
    title: "Guaranteed Results",
    description: "Follow the system and see results in 90 days, or get your money back - no questions asked."
  }
];

const WhatYoullLearnSection = () => {
  return (
    <section className="pt-24 pb-8 bg-background">
      <div className="container mx-auto px-6">
        <div className="border-2 border-red-500 rounded-3xl bg-gradient-card overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-end p-8 pb-0">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                THIS COACHING PROGRAM IS
                <br />
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  THE FASTEST WAY TO THE ATHLETIC BODY YOU'VE ALWAYS WANTED!
                </span>
              </h2>
            </div>
            <div className="animate-scale-in self-end" style={{ animationDelay: "0.2s" }}>
              <img 
                src={athleticBodyImage} 
                alt="Athletic transformation result showing muscular physique"
                className="w-full max-w-md mx-auto rounded-t-2xl shadow-[var(--shadow-hero)] hover:shadow-[var(--shadow-card)] hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {learningPoints.map((point, index) => (
            <div 
              key={index}
              className="group bg-gradient-card p-8 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hero)] transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <point.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearnSection;