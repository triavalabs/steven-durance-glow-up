import { Target, Zap, MapPin, Heart } from "lucide-react";
import athleticBodyImage from "@/assets/athletic-body-result.png";
import athleticHeroBg from "@/assets/athletic-hero-bg.png";
const learningPoints = [{
  icon: Target,
  title: "Personal 1:1 Coaching",
  description: "Get a personalized plan that teaches you exactly what your body needs—and how to keep your results for life."
}, {
  icon: Zap,
  title: "Customized App Access",
  description: "Exclusive access to Steven's custom app with your personalized workout and nutrition plans."
}, {
  icon: MapPin,
  title: "Sustainable Nutrition Strategy",
  description: "Learn the flexible nutrition approach that fits your lifestyle without restrictive dieting."
}, {
  icon: Heart,
  title: "Guaranteed Results",
  description: "Follow the system and see results in 90 days, or get your money back - no questions asked."
}];
const WhatYoullLearnSection = () => {
  return <section className="pt-0 md:pt-24 bg-gradient-premium relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Premium Header Card */}
        <div className="hero max-w-[520px] sm:max-w-4xl mx-auto mb-0 py-8 sm:py-0 my-0">
          <div className="sm:bg-gradient-card sm:border-2 sm:border-accent/20 sm:rounded-3xl sm:p-12 sm:shadow-[var(--shadow-premium)] sm:hover:shadow-[var(--shadow-hero)] transition-all duration-500 relative sm:overflow-hidden sm:bg-cover sm:bg-center sm:bg-no-repeat" style={{
          backgroundImage: typeof window !== 'undefined' && window.innerWidth >= 640 ? `url(${athleticHeroBg})` : 'none'
        }}>
            {/* Gradient overlay - desktop only */}
            <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-transparent"></div>
            
            {/* Text Content */}
            <div className="hero-text text-center px-6 sm:px-0 animate-fade-in-up relative z-10">
              <div className="inline-flex items-center gap-3 bg-accent/20 px-6 py-3 rounded-full mb-8 sm:mb-12">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-accent font-bold uppercase tracking-wider text-sm">Limited to 10 Clients</span>
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              </div>
              
              <h2 className="text-[32px] sm:text-4xl md:text-6xl font-black text-foreground mb-8 sm:mb-12 leading-[1.15] tracking-[-0.5px] sm:leading-tight sm:tracking-normal max-w-[90%] sm:max-w-none mx-auto">
                THE FASTEST WAY TO THE{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  ATHLETIC BODY
                </span>{" "}
                YOU'VE ALWAYS WANTED
              </h2>
              
              <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto mb-8 sm:mb-10"></div>
              
              <p className="text-base sm:text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-[1.45] sm:leading-relaxed">
                Stop wasting time with generic programs. Get the personalized coaching that actually works.
              </p>
            </div>

            {/* CTA Button - Mobile only */}
            <div className="hero-cta sm:hidden mt-4 px-6">
              <a href="#apply" className="block w-full h-[52px] bg-gradient-accent text-accent-foreground font-bold text-base rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 py-0 my-[30px]">
                BOOK FREE CALL
              </a>
            </div>

            {/* Hero Image - Mobile only */}
            <div className="hero-media sm:hidden mt-8 px-6 mb-0 my-[59px]">
              <div className="relative mx-auto" style={{
              maxWidth: '520px',
              aspectRatio: '3/4'
            }}>
                <img src={athleticHeroBg} alt="Athletic transformation - fit physique" className="w-full h-full object-cover object-[center_40%] rounded-2xl shadow-[var(--shadow-card)]" loading="eager" />
              </div>
            </div>
          </div>
        </div>

        {/* Premium Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-10 md:mb-16">
          {learningPoints.map((point, index) => <div key={index} className="group bg-gradient-card border border-accent/10 p-8 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-premium)] hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 animate-scale-in" style={{
          animationDelay: `${index * 0.15}s`
        }}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[var(--shadow-button)]">
                    <point.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>

        {/* Athletic Body Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card border-2 border-accent/20 rounded-3xl overflow-hidden shadow-[var(--shadow-premium)]">
            <div className="grid lg:grid-cols-2 gap-0 items-end">
              <div className="p-12 animate-fade-in-up">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-accent font-semibold text-sm uppercase tracking-wide">Results Guaranteed</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                    This Is What's Possible
                    <span className="block text-accent">In Just 90 Days</span>
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Lose 15-25 lbs of pure fat</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Build lean, athletic muscle</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Reveal your six-pack abs</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block animate-scale-in self-end" style={{
              animationDelay: "0.3s"
            }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-accent/20 blur-2xl rounded-t-3xl"></div>
                  <img src={athleticBodyImage} alt="Athletic transformation result showing muscular physique" className="relative w-full max-w-md mx-auto rounded-t-3xl shadow-[var(--shadow-hero)] hover:scale-105 transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WhatYoullLearnSection;