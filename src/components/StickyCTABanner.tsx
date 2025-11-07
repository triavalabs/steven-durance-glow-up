import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

const StickyCTABanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-accent border-t-2 border-accent/30 shadow-[var(--shadow-premium)] animate-slide-in-right">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-accent-foreground rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-accent-foreground rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-1.5 h-1.5 bg-accent-foreground rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
              </div>
              <p className="text-accent-foreground font-black text-sm md:text-base">
                FINAL CALL — Only 3 Spots Left
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="secondary" 
              className="bg-background/95 text-foreground hover:bg-background font-bold shadow-lg text-xs md:text-sm"
            >
              Find Your Plan
            </Button>
            
            <button
              onClick={() => setIsVisible(false)}
              className="text-accent-foreground/70 hover:text-accent-foreground transition-colors p-1 hover:bg-background/20 rounded-lg"
              aria-label="Close banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCTABanner;