import { Star, Shield, TrendingUp, Calendar, CheckCircle } from "lucide-react";

// Import transformation images
import client1Transform from "@/assets/transformations/client1-transformation.png";
import client2Transform from "@/assets/transformations/client2-transformation.png";
import client3Transform from "@/assets/transformations/client3-transformation.png";
import client4Transform from "@/assets/transformations/client4-transformation.png";
import client5Transform from "@/assets/transformations/client5-transformation.png";
import client6Transform from "@/assets/transformations/client6-transformation.png";
import client7Transform from "@/assets/transformations/client7-transformation.png";
import client8Transform from "@/assets/transformations/client8-transformation.png";
import client9Transform from "@/assets/transformations/client9-transformation.png";

const testimonials = [
  {
    quote: "This program completely changed my life. The results speak for themselves and the journey was actually sustainable.",
    rating: 5,
    result: "22 lbs lost in 8 weeks",
    transformationImage: client1Transform,
    duration: "8 WEEKS",
    weightLoss: "22 LBS",
    verified: true,
    bodyFatLoss: "7%",
    muscleGain: "5 LBS"
  },
  {
    quote: "I never thought transformation could be this straightforward. The system works if you trust the process.",
    rating: 5,
    result: "18 lbs lost in 12 weeks",
    transformationImage: client2Transform,
    duration: "12 WEEKS",
    weightLoss: "18 LBS",
    verified: true,
    bodyFatLoss: "6%",
    muscleGain: "8 LBS"
  },
  {
    quote: "Best investment I've ever made in myself. The confidence and energy I have now is priceless.",
    rating: 5,
    result: "25 lbs lost in 3 months",
    transformationImage: client3Transform,
    duration: "3 MONTHS",
    weightLoss: "25 LBS",
    verified: true,
    bodyFatLoss: "8%",
    muscleGain: "6 LBS"
  },
  {
    quote: "Finally found something that fits my busy lifestyle. No more excuses, just results.",
    rating: 5,
    result: "15 lbs muscle gained",
    transformationImage: client4Transform,
    duration: "4 MONTHS",
    weightLoss: "15 LBS MUSCLE",
    verified: true,
    bodyFatLoss: "5%",
    muscleGain: "15 LBS"
  },
  {
    quote: "The accountability and guidance made all the difference. I'm stronger and more confident than ever.",
    rating: 5,
    result: "20 lbs lost in 10 weeks",
    transformationImage: client5Transform,
    duration: "10 WEEKS",
    weightLoss: "20 LBS",
    verified: true,
    bodyFatLoss: "7%",
    muscleGain: "4 LBS"
  },
  {
    quote: "Sustainable approach that actually works long-term. This isn't a quick fix, it's a lifestyle change.",
    rating: 5,
    result: "28 lbs lost in 5 months",
    transformationImage: client6Transform,
    duration: "5 MONTHS",
    weightLoss: "28 LBS",
    verified: true,
    bodyFatLoss: "9%",
    muscleGain: "7 LBS"
  },
  {
    quote: "I've tried everything else and nothing worked. This program delivered results I didn't think were possible.",
    rating: 5,
    result: "12 lbs muscle gained",
    transformationImage: client7Transform,
    duration: "3 MONTHS",
    weightLoss: "12 LBS MUSCLE",
    verified: true,
    bodyFatLoss: "4%",
    muscleGain: "12 LBS"
  },
  {
    quote: "The personalized approach made me feel supported every step of the way. Results came faster than expected.",
    rating: 5,
    result: "16 lbs lost in 8 weeks",
    transformationImage: client8Transform,
    duration: "8 WEEKS",
    weightLoss: "16 LBS",
    verified: true,
    bodyFatLoss: "6%",
    muscleGain: "3 LBS"
  },
  {
    quote: "Life-changing transformation. I look better, feel better, and have more energy than I've had in years.",
    rating: 5,
    result: "30 lbs lost in 6 months",
    transformationImage: client9Transform,
    duration: "6 MONTHS",
    weightLoss: "30 LBS",
    verified: true,
    bodyFatLoss: "10%",
    muscleGain: "8 LBS"
  }
];

const TestimonialsSection = () => {
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
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-glass backdrop-blur-md border border-glass-border rounded-3xl p-6 shadow-[var(--shadow-glass)] hover:shadow-[var(--shadow-hero)] transition-all duration-500 hover:-translate-y-3 animate-scale-in overflow-hidden"
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
              <div className="relative mb-6 overflow-hidden rounded-2xl group/image">
                <img 
                  src={testimonial.transformationImage} 
                  alt="Client transformation before and after"
                  className="w-full h-56 object-cover rounded-2xl transition-transform duration-700 group-hover/image:scale-105"
                />
                
                {/* Gradient Overlay for Stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl" />
                
                {/* Transformation Stats Overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <div className="text-xs opacity-80">DURATION</div>
                      <div className="font-bold text-sm">{testimonial.duration}</div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-xs opacity-80">RESULT</div>
                      <div className="font-bold text-sm">{testimonial.weightLoss}</div>
                    </div>
                  </div>
                  
                  {/* Progress Metrics */}
                  <div className="flex gap-4 mt-3 text-xs">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-success" />
                      <span>Body Fat: -{testimonial.bodyFatLoss}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-accent" />
                      <span>Muscle: +{testimonial.muscleGain}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-foreground text-base leading-relaxed mb-6 relative">
                <div className="text-3xl text-accent/30 absolute -top-2 -left-1 font-serif">"</div>
                <span className="relative z-10 italic">{testimonial.quote}</span>
              </blockquote>
              
              {/* Result Badge */}
              <div className="bg-gradient-accent text-white px-4 py-2 rounded-xl text-sm font-semibold inline-block shadow-lg">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {testimonial.result}
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
                  12
                </div>
                <div className="text-muted-foreground font-semibold text-sm sm:text-base">Week Program</div>
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
    </section>
  );
};

export default TestimonialsSection;