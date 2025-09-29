import stevenProfessional from "@/assets/steven-professional.png";
import stevenDuranceLogo from "@/assets/stevendurance-logo.png";
const StevensStorySection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/10"></div>
      <div className="absolute top-40 right-40 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-40 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Image Side */}
            <div className="relative animate-scale-in">
              <div className="relative">
                {/* Premium Background Design */}
                <div className="absolute inset-0 bg-gradient-premium rounded-3xl shadow-[var(--shadow-premium)]" />
                <div className="absolute top-6 right-6 opacity-10 w-32 h-32">
                  <img src={stevenDuranceLogo} alt="StevenDurance Logo" className="w-full h-full object-contain" />
                </div>
                
                {/* Premium Geometric Elements */}
                <div className="absolute bottom-16 right-16 w-20 h-20 bg-accent/20 rounded-2xl rotate-45" />
                <div className="absolute top-16 left-16 w-12 h-12 bg-accent/30 rounded-xl rotate-12" />
                
                {/* Enhanced Professional Photo */}
                <div className="relative p-8">
                  {/* Premium Glow Effects */}
                  <div className="absolute inset-0 bg-gradient-accent/20 blur-3xl rounded-3xl" />
                  <div className="absolute inset-4 bg-accent/10 blur-xl rounded-2xl" />
                  
                  <div className="relative">
                    <img 
                      src={stevenProfessional} 
                      alt="Steven - Professional Fitness Coach" 
                      className="relative w-full rounded-2xl shadow-[var(--shadow-hero)] border-2 border-accent/30 hover:border-accent/50 transition-all duration-500" 
                    />
                    <div className="absolute inset-8 bg-gradient-to-t from-background/30 to-transparent rounded-2xl pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Content Side */}
            <div className="animate-fade-in-up">
              <div className="mb-12">
                <div className="inline-flex items-center gap-3 bg-accent/20 px-6 py-3 rounded-full mb-8">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-accent font-bold uppercase tracking-wider">Meet Your Coach</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
                  Steven's Story
                </h2>
                <div className="w-24 h-1 bg-gradient-accent rounded-full mb-8" />
              </div>
              
              {/* Premium Quote Block */}
              <div className="bg-gradient-card border border-accent/20 p-10 rounded-3xl shadow-[var(--shadow-premium)] mb-12 hover:border-accent/30 transition-all duration-500">
                <div className="relative">
                  <div className="text-7xl text-accent opacity-30 absolute -top-6 -left-4">"</div>
                  <blockquote className="text-xl md:text-3xl font-bold text-foreground leading-relaxed relative z-10 mb-6">
                    I'm not genetically gifted — I had to figure this out through trial and error. 
                    <span className="block text-accent mt-4">
                      Now I've built a proven formula to help you.
                    </span>
                  </blockquote>
                  <div className="text-7xl text-accent opacity-30 absolute -bottom-10 -right-4 rotate-180">"</div>
                </div>
              </div>
              
              {/* Enhanced Context */}
              <div className="space-y-8 mb-12">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Steven understands the unique challenges busy professionals face. After years of 
                  struggling with inconsistent results and unsustainable approaches, he developed a 
                  <span className="text-accent font-semibold"> proven system that actually works</span> with your lifestyle.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  His transformation isn't just physical — it's about building confidence, establishing 
                  sustainable habits, and <span className="text-accent font-semibold">creating a life you're proud of</span>.
                </p>
              </div>
              
              {/* Premium Stats Grid */}
              <div className="bg-gradient-card border border-accent/20 rounded-2xl p-8 shadow-[var(--shadow-card)]">
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-accent mb-3 animate-counter-up">500+</div>
                    <div className="text-sm md:text-base text-muted-foreground font-semibold uppercase tracking-wide">
                      Clients Transformed
                    </div>
                  </div>
                  <div className="text-center border-x border-accent/20">
                    <div className="text-4xl md:text-5xl font-black text-accent mb-3 animate-counter-up">5+</div>
                    <div className="text-sm md:text-base text-muted-foreground font-semibold uppercase tracking-wide">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-accent mb-3 animate-counter-up">95%</div>
                    <div className="text-sm md:text-base text-muted-foreground font-semibold uppercase tracking-wide">
                      Success Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StevensStorySection;