import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "Software Engineer",
    location: "San Francisco",
    quote: "Lost 25 lbs and gained incredible confidence. Steven's approach actually fits into my crazy work schedule.",
    rating: 5,
    result: "25 lbs lost, 6 months"
  },
  {
    name: "David Rodriguez",
    role: "Marketing Director",
    location: "New York",
    quote: "Finally found a system that doesn't require me to live in the gym. The results speak for themselves.",
    rating: 5,
    result: "15% body fat reduction"
  },
  {
    name: "James Thompson",
    role: "Financial Advisor",
    location: "Chicago",
    quote: "Steven understands the unique challenges we face. His program is practical, sustainable, and it works.",
    rating: 5,
    result: "30 lbs muscle gained"
  },
  {
    name: "Michael Park",
    role: "Consultant",
    location: "Los Angeles",
    quote: "The confidence boost was immediate. I feel like a completely different person - stronger inside and out.",
    rating: 5,
    result: "Complete transformation"
  },
  {
    name: "Alex Martinez",
    role: "Tech Executive",
    location: "Austin",
    quote: "Travel constantly for work, but Steven's system travels with me. Consistency has never been easier.",
    rating: 5,
    result: "20 lbs lost, maintained"
  },
  {
    name: "Ryan Johnson",
    role: "Creative Director",
    location: "Miami",
    quote: "Best investment I've ever made. The physical changes are amazing, but the mental shift is life-changing.",
    rating: 5,
    result: "Complete lifestyle change"
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
              className="group bg-gradient-card p-8 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hero)] transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-foreground text-lg leading-relaxed mb-6 relative">
                <div className="text-3xl text-accent opacity-30 absolute -top-2 -left-1">"</div>
                <span className="relative z-10">{testimonial.quote}</span>
              </blockquote>
              
              {/* Result Badge */}
              <div className="bg-accent/10 text-accent px-4 py-2 rounded-lg text-sm font-semibold mb-6 inline-block">
                {testimonial.result}
              </div>
              
              {/* Author Info */}
              <div className="border-t border-border pt-6">
                <div className="font-bold text-foreground text-lg group-hover:text-accent transition-colors">
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