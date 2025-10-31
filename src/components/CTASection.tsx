import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  variant?: "primary" | "secondary";
  urgency?: string;
  className?: string;
}

const CTASection = ({ variant = "primary", urgency = "LIMITED SPOTS", className = "" }: CTASectionProps) => {
  if (variant === "secondary") {
    return (
      <section className={`py-16 text-center ${className}`}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="outline-accent" size="lg" className="w-auto">
            CHECK AVAILABILITY
          </Button>
          <div className="flex items-center gap-2 text-accent/70">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
            </div>
            <span className="font-bold text-sm">{urgency}</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-12 text-center ${className}`}>
      <div className="flex flex-col items-center gap-6">
        <Button variant="cta" size="lg" className="w-full sm:w-auto group h-[52px] sm:h-auto text-base sm:text-lg rounded-[10px] sm:rounded-xl">
          APPLY NOW
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        
        <div className="flex items-center gap-3 text-accent/80">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }}></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }}></div>
          </div>
          <p className="font-black text-orange-400">
            {urgency} — SECURE YOUR SPOT
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;