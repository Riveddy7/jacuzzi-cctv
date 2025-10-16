import Navigation from "@/components/Navigation";

const TechnicalSolution = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-5xl font-light mb-8 tracking-tight">Technical Solution</h1>
        <div className="max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            (Here we will detail the proposed equipment: Open Eye cameras, network switches, and UPS systems. Each component will be presented with its specifications and justification.)
          </p>
        </div>
      </main>
    </div>
  );
};

export default TechnicalSolution;
