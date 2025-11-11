import transformationResultImage from "@/assets/transformation-result.png";

const ValuePropositionSection = () => {
  return (
    <section className="py-8 md:py-24 bg-gradient-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="border-2 border-accent rounded-3xl bg-gradient-card overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-end p-4 md:p-8 pb-0">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-8 leading-tight">
                The Value of Your Investment</h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                IF ALL THIS PROGRAM DID WAS HELP
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  YOU SHED THOSE LAST FEW POUNDS
                </span>
                {" "}YOU THOUGHT WERE IMPOSSIBLE TO LOSE AND MAKE YOU FEEL MORE{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  CONFIDENT PHYSICALLY & MENTALLY,
                </span>
                {" "}WOULD IT BE WORTH IT?
              </p>
            </div>
            <div className="animate-scale-in self-end" style={{ animationDelay: "0.2s" }}>
              <img 
                src={transformationResultImage} 
                alt="Transformation result — confident athletic physique — 90 days"
                className="w-full max-w-md mx-auto rounded-t-2xl shadow-[var(--shadow-hero)] hover:shadow-[var(--shadow-card)] hover:scale-105 transition-all duration-300"
                loading="lazy"
                decoding="async"
                width="400"
                height="600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;