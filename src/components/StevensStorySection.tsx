import stevenProfessional from "@/assets/steven-professional.png";
import stevenDuranceLogo from "@/assets/stevendurance-logo.png";
const StevensStorySection = () => {
  return <section className="pt-16 pb-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative animate-scale-in">
              <div className="relative">
                {/* Background Design */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/20 rounded-2xl" />
                <div className="absolute top-4 right-4 opacity-5 w-32 h-32">
                  <img src={stevenDuranceLogo} alt="StevenDurance Logo" className="w-full h-full object-contain" />
                </div>
                
                {/* Geometric Accent Elements */}
                <div className="absolute bottom-12 right-12 w-16 h-16 bg-primary/15 rounded-lg rotate-45" />
                
                {/* Professional Photo */}
                <div className="relative pt-6 pb-6 mx-0 my-0 px-[21px] py-[4px]">
                  <img src={stevenProfessional} alt="Steven - Professional Fitness Coach" className="w-full rounded-xl shadow-[var(--shadow-hero)] border-2 border-accent/20" />
                  <div className="absolute inset-6 bg-gradient-to-t from-background/20 to-transparent rounded-xl pointer-events-none" />
                </div>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="animate-fade-in-up">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Steven's Story
                </h2>
                <div className="w-20 h-1 bg-gradient-accent rounded-full mb-8" />
              </div>
              
              {/* Quote Block */}
              <div className="bg-gradient-card p-8 rounded-2xl shadow-[var(--shadow-card)] mb-8">
                <div className="relative">
                  <div className="text-6xl text-accent opacity-20 absolute -top-4 -left-2">"</div>
                  <blockquote className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed relative z-10">
                    I'm not genetically gifted — I had to figure this out through trial and error. 
                    Now I've built a proven formula to help you.
                  </blockquote>
                  <div className="text-6xl text-accent opacity-20 absolute -bottom-8 -right-2 rotate-180">"</div>
                </div>
              </div>
              
              {/* Additional Context */}
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Steven understands the unique challenges busy gay professionals face. After years of 
                  struggling with inconsistent results and unsustainable approaches, he developed a 
                  system that actually works with your lifestyle.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  His transformation isn't just physical — it's about building confidence, establishing 
                  sustainable habits, and creating a life you're proud of.
                </p>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Clients Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default StevensStorySection;