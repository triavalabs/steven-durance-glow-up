import { Shield, CheckCircle, X, ZoomIn } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

// Import transformation images
import jayTransform from "@/assets/transformations/jay-transformation.png";
import eddieTransform from "@/assets/transformations/eddie-transformation.png";
import chrisTransform from "@/assets/transformations/chris-transformation.jpg";
import danielTransform from "@/assets/transformations/daniel-transformation.jpg";
import mattTransform from "@/assets/transformations/matt-transformation.png";
import matt2Transform from "@/assets/transformations/matt2-transformation.png";

const testimonials = [
  {
    name: "Jay",
    transformationImage: jayTransform,
    duration: "6 MONTHS",
    verified: true,
  },
  {
    name: "Eddie",
    transformationImage: eddieTransform,
    duration: "6 MONTHS",
    verified: true,
  },
  {
    name: "Chris",
    transformationImage: chrisTransform,
    duration: "6 MONTHS",
    verified: true,
  },
  {
    name: "Daniel",
    transformationImage: danielTransform,
    duration: "6 MONTHS",
    verified: true,
  },
  {
    name: "Matt",
    transformationImage: mattTransform,
    duration: "6 MONTHS",
    verified: true,
  },
  {
    name: "Matt",
    transformationImage: matt2Transform,
    duration: "6 MONTHS",
    verified: true,
  }
];

const TestimonialsSection = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; name: string; duration: string } | null>(null);

  return (
    <section className="pt-12 pb-24 sm:py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            VERIFIED TRANSFORMATIONS
          </div>
          <h2 className="text-[var(--text-heading)] font-bold text-foreground mb-6 leading-tight">
            REAL RESULTS FROM
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              REAL PROFESSIONALS
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These aren't stock photos or paid actors. These are real busy professionals who transformed their bodies and lives using Steven's proven system.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-glass backdrop-blur-md border border-glass-border rounded-3xl p-4 shadow-[var(--shadow-glass)] hover:shadow-[var(--shadow-hero)] transition-all duration-500 hover:-translate-y-3 animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Verification Badge */}
              {testimonial.verified && (
                <div className="absolute top-4 right-4 z-20 bg-success/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  VERIFIED
                </div>
              )}
              
              {/* Transformation Image with Overlay Stats */}
              <div 
                className="relative overflow-hidden rounded-2xl group/image cursor-pointer"
                onClick={() => setSelectedImage({ 
                  src: testimonial.transformationImage, 
                  name: testimonial.name, 
                  duration: testimonial.duration 
                })}
              >
                {/* Zoom indicator */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                    <ZoomIn className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <img 
                  src={testimonial.transformationImage} 
                  alt={`${testimonial.name} transformation before and after`}
                  className="w-full h-80 object-cover rounded-2xl transition-transform duration-700 group-hover/image:scale-105"
                />
                
                {/* Gradient Overlay for Stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl" />
                
                {/* Transformation Stats Overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="space-y-1">
                    <div className="text-xs opacity-80">DURATION</div>
                    <div className="font-bold text-sm">{testimonial.duration}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Stats Section */}
        <div className="relative">
          {/* Glass Background */}
          <div className="absolute inset-0 bg-gradient-glass backdrop-blur-xl rounded-3xl border border-glass-border" />
          
          <div className="relative z-10 py-12 px-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                THE NUMBERS DON'T LIE
              </h3>
              <p className="text-muted-foreground">
                Proven results across hundreds of transformations
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
              <div className="text-center animate-fade-in-up group cursor-pointer">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">500+</div>
                <div className="text-muted-foreground font-semibold text-sm sm:text-base">Verified Transformations</div>
                <div className="text-xs text-muted-foreground/70 mt-1">Since 2019</div>
              </div>
              
              <div className="text-center animate-fade-in-up group cursor-pointer" style={{ animationDelay: "0.1s" }}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  97%
                </div>
                <div className="text-muted-foreground font-semibold text-sm sm:text-base">Success Rate</div>
                <div className="text-xs text-muted-foreground/70 mt-1">Complete program</div>
              </div>
              
              <div className="text-center animate-fade-in-up group cursor-pointer" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  6
                </div>
                <div className="text-muted-foreground font-semibold text-sm sm:text-base">Month Program</div>
                <div className="text-xs text-muted-foreground/70 mt-1">Average duration</div>
              </div>
              
              <div className="text-center animate-fade-in-up group cursor-pointer" style={{ animationDelay: "0.3s" }}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  24/7
                </div>
                <div className="text-muted-foreground font-semibold text-sm sm:text-base">Expert Support</div>
                <div className="text-xs text-muted-foreground/70 mt-1">Always available</div>
              </div>
            </div>
            
            {/* Guarantee Badge */}
            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-2 bg-success/10 text-success px-6 py-3 rounded-full font-semibold">
                <Shield className="w-5 h-5" />
                100% Money-Back Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 border-0 bg-black/95">
          <DialogClose className="absolute top-4 right-4 z-50 rounded-full bg-white/10 backdrop-blur-sm p-2 hover:bg-white/20 transition-colors">
            <X className="h-6 w-6 text-white" />
          </DialogClose>
          
          {selectedImage && (
            <div className="relative w-full h-full flex items-center justify-center p-8">
              <div className="relative max-w-full max-h-full">
                <img
                  src={selectedImage.src}
                  alt={`${selectedImage.name} transformation - full view`}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg animate-scale-in"
                />
                
                {/* Image Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-lg p-4 text-white">
                  <div className="text-center">
                    <div className="text-sm opacity-80">DURATION</div>
                    <div className="font-bold text-lg">{selectedImage.duration}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TestimonialsSection;