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
        <div className="absolute top-2 right-4 md:top-8 md:left-8 z-30 animate-fade-in">
          <div className="backdrop-blur-sm bg-background/10 rounded-lg p-1 md:p-3">
            <img 
              src={stevenLogo} 
              alt="StevenDurance Logo" 
              className="w-10 h-10 md:w-20 md:h-20 opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto animate-fade-in-up pt-16 md:pt-0">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-foreground">You're In —</span>
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
            <iframe
              id="youtube-video"
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/4GjOqOoKR48?start=17&autoplay=0&rel=0&modestbranding=1&enablejsapi=1"
              title="Steven's Strategy Call Message"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            
            {/* Custom Play Button Overlay */}
            <div 
              className="absolute inset-0 bg-black/30 rounded-xl flex items-center justify-center cursor-pointer group hover:bg-black/40 transition-all duration-300"
              onClick={() => {
                const iframe = document.getElementById('youtube-video') as HTMLIFrameElement;
                if (iframe) {
                  iframe.src = iframe.src.replace('autoplay=0', 'autoplay=1');
                  (iframe.parentNode as HTMLElement).querySelector('.absolute.inset-0')?.remove();
                }
              }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-accent-foreground ml-1" />
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