import { Star, Shield, TrendingUp, Calendar, CheckCircle } from "lucide-react";

// Import transformation images
import marcusTransform from "@/assets/transformations/marcus-transformation.jpg";
import davidTransform from "@/assets/transformations/david-transformation.jpg";
import jamesTransform from "@/assets/transformations/james-transformation.jpg";
import michaelTransform from "@/assets/transformations/michael-transformation.jpg";
import alexTransform from "@/assets/transformations/alex-transformation.jpg";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "Software Engineer", 
    location: "San Francisco",
    quote: "Lost 25 lbs and gained incredible confidence. Steven's approach actually fits into my crazy work schedule.",
    rating: 5,
    result: "25 lbs lost in 6 months",
    transformationImage: marcusTransform,
    duration: "6 MONTHS",
    weightLoss: "25 LBS",
    verified: true,
    bodyFatLoss: "8%",
    muscleGain: "12 LBS"
  },
  {
    name: "David Rodriguez",
    role: "Marketing Director",
    location: "New York",
    quote: "Finally found a system that doesn't require me to live in the gym. The results speak for themselves.",
    rating: 5,
    result: "20 lbs lost in 4 months",
    transformationImage: davidTransform,
    duration: "4 MONTHS",
    weightLoss: "20 LBS",
    verified: true,
    bodyFatLoss: "6%",
    muscleGain: "8 LBS"
  },
  {
    name: "James Thompson",
    role: "Financial Advisor",
    location: "Chicago",
    quote: "Steven understands the unique challenges we face. His program is practical, sustainable, and it works.",
    rating: 5,
    result: "30 lbs muscle gained",
    transformationImage: jamesTransform,
    duration: "8 MONTHS",
    weightLoss: "30 LBS MUSCLE",
    verified: true,
    bodyFatLoss: "10%",
    muscleGain: "30 LBS"
  },
  {
    name: "Michael Park",
    role: "Consultant",
    location: "Los Angeles",
    quote: "The confidence boost was immediate. I feel like a completely different person - stronger inside and out.",
    rating: 5,
    result: "Complete transformation",
    transformationImage: michaelTransform,
    duration: "5 MONTHS",
    weightLoss: "15 LBS",
    verified: true,
    bodyFatLoss: "7%",
    muscleGain: "10 LBS"
  },
  {
    name: "Alex Martinez",
    role: "Tech Executive",
    location: "Austin",
    quote: "Travel constantly for work, but Steven's system travels with me. Consistency has never been easier.",
    rating: 5,
    result: "18 lbs lost in 3 months",
    transformationImage: alexTransform,
    duration: "3 MONTHS",
    weightLoss: "18 LBS",
    verified: true,
    bodyFatLoss: "5%",
    muscleGain: "6 LBS"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
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
                  alt={`${testimonial.name} before and after transformation`}
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
              <div className="bg-gradient-accent text-white px-4 py-2 rounded-xl text-sm font-semibold mb-6 inline-block shadow-lg">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {testimonial.result}
                </div>
              </div>
              
              {/* Author Info */}
              <div className="border-t border-glass-border pt-4">
                <div className="font-bold text-foreground group-hover:text-accent transition-colors text-lg">
                  {testimonial.name}
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  {testimonial.role}
                </div>
                <div className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  {testimonial.location}
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
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center animate-fade-in-up group cursor-pointer">
                <div className="text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  500+
                </div>
                <div className="text-muted-foreground font-semibold">Verified Transformations</div>
                <div className="text-xs text-muted-foreground/70 mt-1">Since 2019</div>
              </div>
              
              <div className="text-center animate-fade-in-up group cursor-pointer" style={{ animationDelay: "0.1s" }}>
                <div className="text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  97%
                </div>
                <div className="text-muted-foreground font-semibold">Success Rate</div>
                <div className="text-xs text-muted-foreground/70 mt-1">Complete program</div>
              </div>
              
              <div className="text-center animate-fade-in-up group cursor-pointer" style={{ animationDelay: "0.2s" }}>
                <div className="text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  12
                </div>
                <div className="text-muted-foreground font-semibold">Week Program</div>
                <div className="text-xs text-muted-foreground/70 mt-1">Average duration</div>
              </div>
              
              <div className="text-center animate-fade-in-up group cursor-pointer" style={{ animationDelay: "0.3s" }}>
                <div className="text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  24/7
                </div>
                <div className="text-muted-foreground font-semibold">Expert Support</div>
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