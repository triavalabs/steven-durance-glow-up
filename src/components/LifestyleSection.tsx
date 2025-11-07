import lifestyleBalance from "@/assets/lifestyle-balance.jpg";
import { Plane, Utensils, Dumbbell, Coffee } from "lucide-react";

const lifestylePoints = [
  {
    icon: Utensils,
    title: "Enjoy Your Favorite Foods",
    description: "No restrictive diets or foods you hate"
  },
  {
    icon: Plane,
    title: "Travel & Social Life",
    description: "Maintain results while living your life"
  },
  {
    icon: Dumbbell,
    title: "Efficient Workouts",
    description: "Maximum results in minimal time"
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Fit fitness into your busy schedule"
  }
];

const LifestyleSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Lifestyle & Sustainability
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              You don't need to give up the things you love to see results. This program is designed 
              to be sustainable and enjoyable.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="animate-fade-in-up">
              <div className="grid sm:grid-cols-2 gap-6">
                {lifestylePoints.map((point, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <point.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-gradient-card p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">The Reality Check</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Most fitness programs expect you to completely overhaul your life. Steven's approach 
                  is different — it's built around your existing lifestyle, not against it. You'll learn 
                  how to make progress while still enjoying dinners out, travel, and your social life.
                </p>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="relative animate-scale-in">
              <div className="relative">
                <img 
                  src={lifestyleBalance} 
                  alt="Lifestyle coaching — balanced fitness and life — sustainable results" 
                  className="w-full rounded-2xl shadow-[var(--shadow-hero)]"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-2xl" />
              </div>
              
              {/* Overlay Badge */}
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl shadow-lg">
                <div className="font-bold text-lg">Sustainable Results</div>
                <div className="text-sm opacity-90">Not Just Quick Fixes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;