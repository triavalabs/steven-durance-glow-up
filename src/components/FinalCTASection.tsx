import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90" />
      <div className="absolute top-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 leading-tight">
              Your Journey
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                Starts Now
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              You've seen the results. You've heard the stories. You've confirmed your strategy call. 
              The only question left is: are you ready to transform?
            </p>
          </div>
          
          {/* Benefits List */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-scale-in">
            {[
              "Lose fat & build muscle simultaneously",
              "Flexible system that fits your lifestyle", 
              "Build unshakeable confidence"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-foreground font-semibold">{benefit}</span>
              </div>
            ))}
          </div>
          
          {/* Main CTA */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" className="group mb-8">
              Yes, I'm Ready to Transform
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Click above to access Steven's exclusive coaching program and start your transformation today.
            </p>
          </div>
          
          {/* Urgency/Scarcity */}
          <div className="mt-12 bg-gradient-card p-6 rounded-2xl shadow-[var(--shadow-card)] max-w-2xl mx-auto animate-scale-in" style={{ animationDelay: "0.5s" }}>
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
          <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            <p className="text-muted-foreground text-sm">
              30-day money-back guarantee. Your transformation is our commitment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;