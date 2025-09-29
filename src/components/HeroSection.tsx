import { Button } from "@/components/ui/button";
import { Play, Rocket, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import stevenLogo from "@/assets/stevendurance-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/90 via-background/30 to-background/95" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        {/* Logo */}
        <div className="absolute top-4 right-4 md:top-8 md:left-8 z-30 animate-fade-in-down">
          <img 
            src={stevenLogo} 
            alt="StevenDurance Logo" 
            className="w-12 h-12 md:w-24 md:h-24 opacity-95 hover:opacity-100 transition-all duration-300 hover:scale-110"
          />
        </div>
        
        <div className="max-w-5xl mx-auto animate-fade-in-up pt-20 md:pt-8">
          {/* Premium Scarcity Banner */}
          <div className="bg-gradient-accent text-accent-foreground px-8 py-4 rounded-full text-sm md:text-base font-bold mb-12 inline-block shadow-[var(--shadow-button)] animate-glow-pulse">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent-foreground rounded-full animate-pulse"></div>
              LIMITED TO 10 CLIENTS — APPLY NOW TO SECURE YOUR SPOT
              <div className="w-2 h-2 bg-accent-foreground rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Enhanced Main Headline */}
          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
            <span className="block text-foreground mb-2">EXCLUSIVE</span>
            <span className="bg-gradient-accent bg-clip-text text-transparent block mb-2">
              1:1 COACHING
            </span>
            <span className="text-foreground block text-3xl md:text-5xl font-semibold">
              Transform Your Body in 90 Days
            </span>
          </h1>
          
          {/* Premium Sub-headline */}
          <p className="text-xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            LOSE FAT • BUILD MUSCLE • REVEAL YOUR 6-PACK
            <span className="block text-lg md:text-xl mt-4 text-accent">
              Join 500+ Men Who've Already Transformed Their Lives
            </span>
          </p>
          
          {/* Enhanced Video Instructions */}
          <div className="mb-6">
            <p className="text-lg md:text-xl text-accent mb-2 font-bold animate-pulse">
              🔊 Turn Sound ON for Steven's Personal Message
            </p>
            <p className="text-sm text-muted-foreground">
              (Video loads in 3-5 seconds)
            </p>
          </div>
          
          {/* Premium Video Section */}
          <div className="relative mb-12 max-w-3xl mx-auto animate-scale-in">
            <div className="relative aspect-video bg-gradient-premium rounded-2xl p-2 shadow-[var(--shadow-premium)]">
              <iframe
                id="youtube-video"
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/4GjOqOoKR48?start=17&autoplay=0&rel=0&modestbranding=1&enablejsapi=1&showinfo=0&controls=0&fs=0&iv_load_policy=3&cc_load_policy=0&disablekb=1"
                title="Steven's Strategy Call Message"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              {/* Premium Play Button Overlay */}
              <div 
                className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center cursor-pointer group hover:bg-black/30 transition-all duration-300"
                onClick={() => {
                  const iframe = document.getElementById('youtube-video') as HTMLIFrameElement;
                  if (iframe) {
                    iframe.src = iframe.src.replace('autoplay=0', 'autoplay=1');
                    (iframe.parentNode as HTMLElement).querySelector('.absolute.inset-0')?.remove();
                  }
                }}
              >
                <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-[var(--shadow-hero)] animate-glow-pulse">
                  <Play className="w-10 h-10 md:w-12 md:h-12 text-accent-foreground ml-1" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Premium CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button variant="hero" size="xl" className="group text-lg px-16 py-8 text-xl font-black">
              <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              APPLY NOW — LIMITED SPOTS
            </Button>
            <Button variant="premium" size="xl" className="text-lg px-12 py-8 font-bold">
              <Phone className="w-6 h-6" />
              CHECK AVAILABILITY
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span>500+ Transformations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span>30-Day Money Back</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span>95% Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;