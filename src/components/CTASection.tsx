import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
interface CTASectionProps {
  variant?: "primary" | "secondary";
  urgency?: string;
  className?: string;
}
const CTASection = ({
  variant = "primary",
  urgency = "LIMITED SPOTS",
  className = ""
}: CTASectionProps) => {
  if (variant === "secondary") {
    return <section className={`py-6 sm:py-8 text-center ${className}`}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-[21px] my-0">
          <Button variant="outline-accent" size="lg" className="w-auto">
            BOOK FREE CALL
          </Button>
          <div className="flex items-center gap-2 text-accent/70">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style={{
              animationDelay: "0.2s"
            }}></div>
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style={{
              animationDelay: "0.4s"
            }}></div>
            </div>
            <span className="font-bold text-sm">{urgency}</span>
          </div>
        </div>
      </section>;
  }
  return <section className={`pb-2 text-center ${className}`}>
      <div className="flex flex-col items-center gap-3 mb-[49px] mt-6 md:mt-[49px]">
        <Button variant="cta" size="lg" className="w-auto mx-auto group px-6 sm:px-12 text-base sm:text-lg rounded-[10px] sm:rounded-xl sm:h-14">
          BOOK FREE CALL
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        
        <div className="flex items-center gap-3 text-accent/80">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{
            animationDelay: "0.3s"
          }}></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{
            animationDelay: "0.6s"
          }}></div>
          </div>
          <p className="font-black text-orange-400">
            {urgency} — SECURE YOUR SPOT
          </p>
        </div>
      </div>
    </section>;
};
export default CTASection;