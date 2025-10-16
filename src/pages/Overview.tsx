import Navigation from "@/components/Navigation";

const Overview = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-5xl font-light mb-8 tracking-tight">Project Overview</h1>
        <div className="max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            (This section will feature the project's executive summary, key objectives, and the main benefits of the proposed solution, highlighted with icons.)
          </p>
        </div>
      </main>
    </div>
  );
};

export default Overview;
