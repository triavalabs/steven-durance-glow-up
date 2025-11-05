import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Rocket, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import stevenLogo from "@/assets/stevendurance-logo-latest.png";
const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      video.play();
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed hero background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }}>
        <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Logo & Scarcity Banner */}
          <div className="mb-12 animate-fade-in-down">
            <img src={stevenLogo} alt="StevenDurance Logo" className="h-16 mx-auto mb-8 opacity-95" />
            <div className="inline-flex items-center gap-3 bg-gradient-glass backdrop-blur-sm border border-accent/30 rounded-full px-8 py-4 shadow-glass">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{
                animationDelay: "0.2s"
              }}></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{
                animationDelay: "0.4s"
              }}></div>
              </div>
              <span className="text-accent font-black text-base tracking-wide text-left">
                LIMITED TO 10 CLIENTS — APPLY NOW TO SECURE YOUR SPOT
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="mb-16 animate-fade-in-up" style={{
          animationDelay: "0.2s"
        }}>
            <h1 className="text-display font-black leading-tight mb-8">
              <span className="block text-foreground mb-2">EXCLUSIVE</span>
              <span className="bg-gradient-accent bg-clip-text text-transparent block mb-4">
                1:1 COACHING
              </span>
              <span className="text-foreground block text-subheading font-bold">
                Transform Your Body in 90 Days
              </span>
            </h1>
            <p className="text-body-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
              LOSE FAT • BUILD MUSCLE • REVEAL YOUR 6-PACK
              <span className="block text-accent font-bold mt-2">
                Join 500+ Men Who've Already Transformed Their Lives
              </span>
            </p>
          </div>

          {/* Premium Video Section */}
          <div className="mb-16 animate-scale-in" style={{
          animationDelay: "0.4s"
        }}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-glass backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-glass">
                <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
                  <video id="hero-video" className="w-full h-full object-cover" controls={isVideoPlaying} playsInline>
                    <source src="https://storage.googleapis.com/msgsndr/cZ4d8uNLL9JqhpAPPjXg/media/660328833ac22349e5c97565.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {!isVideoPlaying && <div className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer group" onClick={handleVideoPlay}>
                      <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" />
                      </div>
                    </div>}
                </div>
              </div>
            </div>
          </div>

          {/* Premium CTAs */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12 animate-fade-in-up" style={{
          animationDelay: "0.6s"
        }}>
            <Button variant="cta" size="xxl" className="shadow-glow">
              <Rocket className="w-5 h-5 mr-2" />
              APPLY NOW
            </Button>
            <Button variant="glass" size="xl">
              <Phone className="w-6 h-6" />
              CHECK AVAILABILITY
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 animate-fade-in-up" style={{
          animationDelay: "0.8s"
        }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center shadow-elegant">
                <span className="text-accent-foreground font-black">500+</span>
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground">Transformations</p>
                <p className="text-sm text-muted-foreground">Proven Results</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center shadow-elegant">
                <span className="text-accent-foreground font-black">95%</span>
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground">Success Rate</p>
                <p className="text-sm text-muted-foreground">Client Achievement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;