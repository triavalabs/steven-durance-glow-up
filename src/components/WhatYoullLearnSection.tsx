import { Target, Zap, MapPin, Heart } from "lucide-react";
import athleticBodyImage from "@/assets/athletic-body-result.png";

const learningPoints = [
  {
    icon: Target,
    title: "Where you are now vs. where you want to be",
    description: "Get crystal clear on your current situation and define your transformation goals."
  },
  {
    icon: Zap,
    title: "The challenges holding you back",
    description: "Identify and overcome the specific obstacles preventing your success."
  },
  {
    icon: MapPin,
    title: "Steven's proven blueprint for fat loss & muscle gain",
    description: "Discover the exact system that's helped hundreds of busy professionals transform."
  },
  {
    icon: Heart,
    title: "Flexible approach that works with your lifestyle",
    description: "Learn how to fit fitness into your busy schedule without sacrificing your life."
  }
];

const WhatYoullLearnSection = () => {
  return (
    <section className="pt-24 pb-8 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              THIS COACHING PROGRAM IS
              <br />
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                THE FASTEST WAY TO THE ATHLETIC BODY YOU'VE ALWAYS WANTED!
              </span>
            </h2>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <img 
              src={athleticBodyImage} 
              alt="Athletic transformation result showing muscular physique"
              className="w-full max-w-md mx-auto rounded-2xl shadow-[var(--shadow-hero)] hover:shadow-[var(--shadow-card)] hover:scale-105 transition-all duration-300"
            />
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