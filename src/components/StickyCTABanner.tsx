import { Button } from "@/components/ui/button";
import { Rocket, X } from "lucide-react";
import { useState } from "react";

const StickyCTABanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-accent border-t-2 border-accent/20 shadow-[var(--shadow-hero)] animate-slide-in-right">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-accent-foreground font-bold text-lg md:text-xl">
              Apply Now — Limited to 10 Clients
            </p>
            <p className="text-accent-foreground/80 text-sm">
              Don't miss your chance to transform your body in 90 days
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-background text-foreground hover:bg-background/90 font-bold px-8"
            >
              <Rocket className="w-5 h-5 mr-2" />
              APPLY NOW
            </Button>
            
            <button
              onClick={() => setIsVisible(false)}
              className="text-accent-foreground/60 hover:text-accent-foreground transition-colors p-2"
              aria-label="Close banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCTABanner;