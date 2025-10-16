import Navigation from "@/components/Navigation";

const Investment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-5xl font-light mb-8 tracking-tight">Investment Summary</h1>
        <div className="max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            (This section will provide a transparent breakdown of the costs, organized by project phase, and will include visual graphs for clarity.)
          </p>
        </div>
      </main>
    </div>
  );
};

export default Investment;
