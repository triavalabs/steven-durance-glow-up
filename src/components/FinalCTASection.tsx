import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
const FinalCTASection = () => {
  return <section className="py-0 md:py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90" />
      <div className="absolute top-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{
      animationDelay: "1s"
    }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                APPLY TO THE ELITE COACHING PROGRAM
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-bold">
              LIMITED TO 10 CLIENTS AT A TIME - APPLY TO SEE IF WE HAVE A SPOT FOR YOU
            </p>
          </div>
          
          {/* Benefits List */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-scale-in">
            {["Lose fat & build muscle simultaneously", "Flexible system that fits your lifestyle", "Build unshakeable confidence"].map((benefit, index) => <div key={index} className="flex items-center gap-3 text-left">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-foreground font-semibold">{benefit}</span>
              </div>)}
          </div>
          
          {/* Main CTA */}
          <div className="animate-fade-in-up" style={{
          animationDelay: "0.3s"
        }}>
            <Button variant="hero" size="xl" className="group mb-8 text-base md:text-lg px-4 md:px-12 py-4 md:py-6" onClick={() => window.open('https://app.gohighlevel.com/v2/preview/54pAqAfa3kAh5sarTHNp', '_blank')}>
              Find Your Plan
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-muted-foreground text-sm max-w-md mx-auto my-[12px]">
              Limited to 10 clients at a time. Apply to see if we have a spot for you.
            </p>
          </div>
          
          {/* Urgency/Scarcity */}
          <div className="mt-12 bg-gradient-card p-6 rounded-2xl shadow-[var(--shadow-card)] max-w-2xl mx-auto animate-scale-in" style={{
          animationDelay: "0.5s"
        }}>
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
              <span className="text-accent font-bold text-lg">Limited Spots Available</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Steven only accepts 20 new clients per month to ensure personalized attention. 
              Secure your spot while it's available.
            </p>
          </div>
          
          {/* Guarantee */}
          <div className="mt-8 text-center animate-fade-in-up" style={{
          animationDelay: "0.7s"
        }}>
            <p className="text-muted-foreground text-sm">
              30-day money-back guarantee. Your transformation is our commitment.
            </p>
          </div>
          
          {/* Footer Credit */}
          <div className="mt-6 mb-20 text-center">
            <p className="text-sm text-muted-foreground">
              Website automation, branding, and design — powered by{" "}
              <a 
                href="https://www.pixelcloud9.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-400 font-semibold transition-colors"
              >
                PixelCloud9 AI Agency
              </a>{" "}
              ⚡️
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default FinalCTASection;