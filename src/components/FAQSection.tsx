import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What do I need to join the program? Do I need to train in a gym?",
    answer: "Ideally, yes — but we can deliver world-class results right from home too."
  },
  {
    question: "How soon will I start seeing results?",
    answer: "Most clients see progress in the first few weeks. After two weeks, things really accelerate as we dial in your plan."
  },
  {
    question: "What will I learn during the program?",
    answer: "A lifestyle you can maintain for life — built around what works best for your body."
  },
  {
    question: "How is this program different from others?",
    answer: "It uses my Metabolic Priming method — a science-based carb-cycling system that lets you enjoy food while transforming your body."
  },
  {
    question: "How do you help me personally?",
    answer: "You'll get weekly feedback videos, monthly Zoom calls, and 24/7 in-app support to keep you accountable and on track."
  },
  {
    question: "Do I get support when I hit a plateau?",
    answer: "Yes. We assess, adjust, and break through together — that's what makes this program so effective."
  },
  {
    question: "Do I get a step-by-step blueprint for getting in shape?",
    answer: "Absolutely. You'll receive a clear plan, tailored goals, and proven strategies for lasting results."
  },
  {
    question: "Can I still have dinner with my family?",
    answer: "Of course. Structure and balance are built in so you can enjoy life and still stay consistent."
  },
  {
    question: "Should I use supplements?",
    answer: "Only if they add real value. We'll cover the must-haves, budget-friendly essentials, and safe options for your goals."
  },
  {
    question: "Is this a crash or fad diet?",
    answer: "Not even close. The focus is longevity — building a strong, athletic body that lasts."
  },
  {
    question: "What happens after the program?",
    answer: "You'll know exactly how to maintain and build on your results. This isn't just coaching — it's education for life."
  },
  {
    question: "Can I still eat out?",
    answer: "Yes — I'll show you how to navigate menus and make smart choices without restriction."
  },
  {
    question: "Can it fit around day and night shifts?",
    answer: "Yes, the plan adapts to your lifestyle so your schedule never limits your progress."
  },
  {
    question: "Can I still enjoy holidays and vacations?",
    answer: "Absolutely. We'll use an 80/20 approach so you can relax, recharge, and still maintain momentum."
  },
  {
    question: "I can't bring food to work — can this be solved?",
    answer: "Yes. The plan focuses on flexible macronutrients, not repetitive meals, so you can eat freely and still hit your goals."
  },
  {
    question: "I don't like certain foods — will this be taken into account?",
    answer: "100%. Your preferences and allergies are all built into your plan."
  },
  {
    question: "I don't know how to weight train — will I learn?",
    answer: "Yes. The Stevendurance Coaching App includes demo videos and cues for every exercise so you feel confident training anywhere."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card rounded-2xl border-none shadow-[var(--shadow-card)] overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold text-foreground hover:text-accent hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;