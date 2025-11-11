const ValuePropositionSection = () => {
  return (
    <section className="py-8 md:py-24 bg-gradient-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="border-2 border-accent rounded-3xl bg-gradient-card overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-center p-4 md:p-8">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;