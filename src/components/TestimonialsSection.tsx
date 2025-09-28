import { Star } from "lucide-react";

// Import transformation images
import marcusBefore from "@/assets/transformations/marcus-before.jpg";
import marcusAfter from "@/assets/transformations/marcus-after.jpg";
import davidBefore from "@/assets/transformations/david-before.jpg";
import davidAfter from "@/assets/transformations/david-after.jpg";
import jamesBefore from "@/assets/transformations/james-before.jpg";
import jamesAfter from "@/assets/transformations/james-after.jpg";
import michaelBefore from "@/assets/transformations/michael-before.jpg";
import michaelAfter from "@/assets/transformations/michael-after.jpg";
import alexBefore from "@/assets/transformations/alex-before.jpg";
import alexAfter from "@/assets/transformations/alex-after.jpg";
import ryanBefore from "@/assets/transformations/ryan-before.jpg";
import ryanAfter from "@/assets/transformations/ryan-after.jpg";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "Software Engineer", 
    location: "San Francisco",
    quote: "Lost 25 lbs and gained incredible confidence. Steven's approach actually fits into my crazy work schedule.",
    rating: 5,
    result: "25 lbs lost, 6 months",
    beforeImage: marcusBefore,
    afterImage: marcusAfter,
    duration: "6 MONTHS",
    beforeStats: "210 LBS",
    afterStats: "185 LBS"
  },
  {
    name: "David Rodriguez",
    role: "Marketing Director",
    location: "New York",
    quote: "Finally found a system that doesn't require me to live in the gym. The results speak for themselves.",
    rating: 5,
    result: "15% body fat reduction",
    beforeImage: davidBefore,
    afterImage: davidAfter,
    duration: "4 MONTHS",
    beforeStats: "22% BF",
    afterStats: "12% BF"
  },
  {
    name: "James Thompson",
    role: "Financial Advisor",
    location: "Chicago",
    quote: "Steven understands the unique challenges we face. His program is practical, sustainable, and it works.",
    rating: 5,
    result: "30 lbs muscle gained",
    beforeImage: jamesBefore,
    afterImage: jamesAfter,
    duration: "8 MONTHS",
    beforeStats: "165 LBS",
    afterStats: "195 LBS"
  },
  {
    name: "Michael Park",
    role: "Consultant",
    location: "Los Angeles",
    quote: "The confidence boost was immediate. I feel like a completely different person - stronger inside and out.",
    rating: 5,
    result: "Complete transformation",
    beforeImage: michaelBefore,
    afterImage: michaelAfter,
    duration: "5 MONTHS",
    beforeStats: "190 LBS",
    afterStats: "175 LBS"
  },
  {
    name: "Alex Martinez",
    role: "Tech Executive",
    location: "Austin",
    quote: "Travel constantly for work, but Steven's system travels with me. Consistency has never been easier.",
    rating: 5,
    result: "20 lbs lost, maintained",
    beforeImage: alexBefore,
    afterImage: alexAfter,
    duration: "3 MONTHS",
    beforeStats: "200 LBS",
    afterStats: "180 LBS"
  },
  {
    name: "Ryan Johnson",
    role: "Creative Director",
    location: "Miami",
    quote: "Best investment I've ever made. The physical changes are amazing, but the mental shift is life-changing.",
    rating: 5,
    result: "Complete lifestyle change",
    beforeImage: ryanBefore,
    afterImage: ryanAfter,
    duration: "7 MONTHS",
    beforeStats: "185 LBS",
    afterStats: "170 LBS"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Track Record
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real transformations from busy professionals just like you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-gradient-card p-6 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hero)] transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Transformation Images */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <div className="flex gap-1">
                  {/* Before Image */}
                  <div className="relative flex-1">
                    <img 
                      src={testimonial.beforeImage} 
                      alt={`${testimonial.name} before transformation`}
                      className="w-full h-32 object-cover rounded-l-lg"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {testimonial.beforeStats}
                    </div>
                  </div>
                  
                  {/* After Image */}
                  <div className="relative flex-1">
                    <img 
                      src={testimonial.afterImage} 
                      alt={`${testimonial.name} after transformation`}
                      className="w-full h-32 object-cover rounded-r-lg"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {testimonial.afterStats}
                    </div>
                  </div>
                </div>
                
                {/* Duration Overlay */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded">
                  {testimonial.duration}
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-foreground text-base leading-relaxed mb-4 relative">
                <div className="text-2xl text-accent opacity-30 absolute -top-1 -left-1">"</div>
                <span className="relative z-10">{testimonial.quote}</span>
              </blockquote>
              
              {/* Result Badge */}
              <div className="bg-accent/10 text-accent px-3 py-1 rounded-lg text-sm font-semibold mb-4 inline-block">
                {testimonial.result}
              </div>
              
              {/* Author Info */}
              <div className="border-t border-border pt-4">
                <div className="font-bold text-foreground group-hover:text-accent transition-colors">
                  {testimonial.name}
                </div>
                <div className="text-muted-foreground text-sm">
                  {testimonial.role}
                </div>
                <div className="text-muted-foreground text-sm">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center animate-fade-in-up">
            <div className="text-4xl font-bold text-accent mb-2">500+</div>
            <div className="text-muted-foreground">Transformations</div>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="text-4xl font-bold text-accent mb-2">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-4xl font-bold text-accent mb-2">12</div>
            <div className="text-muted-foreground">Week Program</div>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;