import Navigation from "@/components/Navigation";

const InteractiveMap = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-5xl font-light mb-8 tracking-tight">Interactive Installation Map</h1>
        <div className="max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            (This page will display the facility's floor plans, with interactive layers showing the location of cameras, IDF closets, and fiber optic routes.)
          </p>
        </div>
      </main>
    </div>
  );
};

export default InteractiveMap;
