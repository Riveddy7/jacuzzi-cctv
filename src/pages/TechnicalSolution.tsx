import Navigation from "@/components/Navigation";
import { Camera, Network, Battery, Server } from "lucide-react";
import { Card } from "@/components/ui/card";

const TechnicalSolution = () => {
  const equipment = [
    { 
      icon: Camera, 
      title: "Open Eye Cameras", 
      specs: "4K Resolution, Night Vision, AI Analytics",
      description: "Advanced surveillance with intelligent detection capabilities"
    },
    { 
      icon: Network, 
      title: "Network Switches", 
      specs: "Enterprise-grade, PoE+, Gigabit",
      description: "High-performance networking infrastructure for reliable connectivity"
    },
    { 
      icon: Battery, 
      title: "UPS Systems", 
      specs: "1500VA, Pure Sine Wave, 2-hour runtime",
      description: "Continuous power protection ensuring uninterrupted operation"
    },
    { 
      icon: Server, 
      title: "Storage Systems", 
      specs: "RAID 6, 30-day retention, Cloud backup",
      description: "Secure and redundant video storage with remote access"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Solution
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Detailed specifications of the proposed equipment including Open Eye cameras, network switches, UPS systems, and storage solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {equipment.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border group animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">{item.title}</h3>
                      <div className="text-sm font-semibold text-primary mb-3">{item.specs}</div>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TechnicalSolution;
