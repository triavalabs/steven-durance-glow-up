import { Button } from "@/components/ui/button";
import { Play, Rocket, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import stevenLogo from "@/assets/stevendurance-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/80 via-background/40 to-background/90" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        {/* Logo */}
        <div className="absolute top-8 left-8 z-30 animate-fade-in">
          <img 
            src={stevenLogo} 
            alt="StevenDurance Logo" 
            className="w-16 h-16 md:w-20 md:h-20"
          />
        </div>
        
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-foreground">Congratulations —</span>
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Your Free Six-Pack Strategy Call Is Confirmed
            </span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Here's what to expect and how we'll help you transform your body and confidence.
          </p>
          
          {/* Video Section */}
          <div className="relative mb-12 max-w-2xl mx-auto animate-scale-in">
            <div className="relative aspect-video bg-gradient-card rounded-2xl p-1 shadow-[var(--shadow-hero)]">
              <div className="w-full h-full bg-secondary rounded-xl flex items-center justify-center group cursor-pointer hover:bg-secondary/80 transition-colors">
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-accent-foreground ml-1" />
                  </div>
                  <p className="text-foreground font-semibold text-lg">Watch Steven's Message</p>
                  <p className="text-muted-foreground text-sm">Click to play the video</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Join Coaching Now
            </Button>
            <Button variant="outline-light" size="xl">
              <Phone className="w-5 h-5" />
              Book Another Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;