import Navigation from "@/components/Navigation";
import { MapPin, Layers, Cable, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";

const InteractiveMap = () => {
  const mapLayers = [
    { icon: MapPin, title: "Camera Locations", count: "24 units", color: "from-blue-500 to-blue-600" },
    { icon: Layers, title: "IDF Closets", count: "4 points", color: "from-purple-500 to-purple-600" },
    { icon: Cable, title: "Fiber Optic Routes", count: "6 routes", color: "from-green-500 to-green-600" },
    { icon: Eye, title: "Coverage Zones", count: "100%", color: "from-orange-500 to-orange-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Interactive Installation Map
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Comprehensive facility floor plans with interactive layers showing camera locations, IDF closets, and fiber optic routes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {mapLayers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <Card 
                  key={index} 
                  className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-border animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${layer.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{layer.title}</h3>
                  <p className="text-sm text-muted-foreground">{layer.count}</p>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 bg-card border-border min-h-[500px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Interactive Map Placeholder</h3>
              <p className="text-muted-foreground max-w-2xl">
                This area will display the facility's floor plans with interactive layers showing the precise location of cameras, IDF closets, and fiber optic routes.
              </p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default InteractiveMap;
