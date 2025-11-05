import transformationResultImage from "@/assets/transformation-result.png";

const ValuePropositionSection = () => {
  return (
    <section className="py-24 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="border-2 border-accent rounded-3xl bg-gradient-card overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-end p-8 pb-0">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                IF ALL THIS PROGRAM DID WAS HELP
                <br />
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  YOU SHED THOSE LAST FEW POUNDS
                </span>
                <br />
                YOU THOUGHT WERE IMPOSSIBLE TO LOSE AND MAKE YOU FEEL MORE
                <br />
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  CONFIDENT PHYSICALLY & MENTALLY,
                </span>
                <br />
                WOULD IT BE WORTH IT?
              </h2>
            </div>
            <div className="animate-scale-in self-end" style={{ animationDelay: "0.2s" }}>
              <img 
                src={transformationResultImage} 
                alt="Transformation result showing confident muscular physique"
                className="w-full max-w-md mx-auto rounded-t-2xl shadow-[var(--shadow-hero)] hover:shadow-[var(--shadow-card)] hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;