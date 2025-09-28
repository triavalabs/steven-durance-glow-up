import { Target, Zap, MapPin, Heart } from "lucide-react";

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
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What You'll Discover on Your Call
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            During your personalized strategy session, Steven will help you uncover exactly what's needed to transform your body and mindset.
          </p>
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