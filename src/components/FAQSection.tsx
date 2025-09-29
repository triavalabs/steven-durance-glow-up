import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What Do I need to join the program? Do I need to train in a gym?",
    answer: "Ideally yes but we can get you World Class Results from home!"
  },
  {
    question: "How Soon Will I Start Seeing Results?",
    answer: "You will see progress within the first few weeks. This is the prime phase and some people move get super quick results while others take a tad longer. Everyone's body is different after all. That said, after 2 weeks is when it starts to really accelerate as we learn your body."
  },
  {
    question: "What Will I Learn During The Program?",
    answer: "A lifestyle that you can maintain for the rest of your life."
  },
  {
    question: "How Is This Program Different From Any Other Program?",
    answer: "This program utilizes my unique metabolic priming nutritional approach using a form of carb cycling, so you can enjoy the food you love whilst getting world class results!"
  },
  {
    question: "How Do You Help Me Personally?",
    answer: "You will receive weekly feedback videos and monthly Zoom calls to touch base and keep you on track. You can also DM directly through the app for 24/7 support!"
  },
  {
    question: "Do I Get support When I Reach A Plateau?",
    answer: "Yes! This is why this program is so successful. You continue to have weekly feedback that assesses at your progress. We always look for solutions together as this is a partnership."
  },
  {
    question: "Do I Get A Step By Step Blueprint For Getting Into Shape?",
    answer: "Yes, there is a clear plan in this coaching program and you will get clear personal goals with specific strategies to achieve them."
  },
  {
    question: "Can I Still Have Dinner With My Family?",
    answer: "Yes! The most important thing for success is being able to maintain the program and learn how to have structure so you can continue to enjoy your life and the food you love."
  },
  {
    question: "Should I Use Supplements?",
    answer: "This depends on your goals. Some supplements have no added value and I will not recommend them. Some are a must to not only achieve your goals in a healthy way, but to live a consistently healthy life. It is, however, your choice whether to follow the advice or not. It is very important for the coaches to know whether or not you adhere to this advice because it can affect your results. Your health is the most important thing. Not everyone has the financial means to purchase all supplements, so we will designate the cost effective non-negotiable ones."
  },
  {
    question: "Is This Program A Crash or Fad Diet?",
    answer: "Not even close! The aim of the program is to give you longevity and an athletic look. Some people will be interested in losing weight while others are focused on adding mass. The goal is to keep eating as much as possible while your body fat diminishes."
  },
  {
    question: "What Happens After The Program?",
    answer: "I will give you guidelines on what to do for your body and how to keep your results and build on them. This program is an educational with the goal of giving you GUARANTEED results whilst teaching you how to maintain them for the rest of your life."
  },
  {
    question: "Can I Still Eat Out?",
    answer: "Yes. This can be factored into your plan. You are given guidelines on what to do when eating out based on your goals."
  },
  {
    question: "Can It Be Combined With Day And Night Shifts?",
    answer: "Yes. The schedule is created to fit your lifestyle and troubleshoot anything that's challenging. Day and night shifts do not have to have an adverse effect on the result."
  },
  {
    question: "Can I Still Enjoy Holidays and Vacations?",
    answer: "Absolutely. Strategies are applied to create structure/enjoyment (the 80/20 rule) while on vacation and during the holidays so you can continue to make progress and sustain your results without backsliding."
  },
  {
    question: "I Can't Bring Food To Work. Can This Be Solved?",
    answer: "Yes. This coaching is based on macronutrients and how to combine them (whether you are tracking them or given rules when you aren't tracking them). This means you are not obliged to eat the same things over and over again."
  },
  {
    question: "I Don't Like Certain Foods. Will This Be Taken Into Account?",
    answer: "100%. You fill out an onboarding form detailing your lifestyle, food allergies & preferences, etc. All of this is worked into your plan."
  },
  {
    question: "I Don't Know How To Weight Train. How Will I Know How To Perform Each Exercise?",
    answer: "You will be using the exclusive Stevendurance Coaching app system available on both Apple and Android phones. The app gives you the entire customized workout and every exercise has an example video and cues displaying how to perform the different movements."
  }
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
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