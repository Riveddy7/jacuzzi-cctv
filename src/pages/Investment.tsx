import Navigation from "@/components/Navigation";
import { DollarSign, TrendingUp, Shield, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const Investment = () => {
  const costBreakdown = [
    { category: "Equipment", amount: "$45,000", percentage: 45, items: ["Cameras", "Network switches", "UPS systems", "Storage"] },
    { category: "Installation", amount: "$25,000", percentage: 25, items: ["Labor", "Cable installation", "Configuration"] },
    { category: "Infrastructure", amount: "$20,000", percentage: 20, items: ["Fiber optic", "IDF setup", "Power infrastructure"] },
    { category: "Training & Support", amount: "$10,000", percentage: 10, items: ["Staff training", "Documentation", "1-year support"] },
  ];

  const totalInvestment = "$100,000";

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Investment Summary
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Transparent breakdown of costs organized by project phase with visual graphs for clarity.
          </p>

          <Card className="p-8 bg-gradient-to-br from-primary to-accent text-white mb-8 animate-scale-in">
            <div className="flex items-center gap-4">
              <DollarSign className="w-16 h-16" />
              <div>
                <h2 className="text-lg font-medium opacity-90 mb-1">Total Investment</h2>
                <p className="text-5xl font-bold">{totalInvestment}</p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {costBreakdown.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-border animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">{item.category}</h3>
                    <span className="text-2xl font-bold text-primary">{item.amount}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-accent">{item.percentage}%</span>
                  </div>
                </div>
                <ul className="space-y-1">
                  {item.items.map((listItem, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      {listItem}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6 bg-card border-border">
              <Shield className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Protected Investment</h3>
              <p className="text-sm text-muted-foreground">Comprehensive warranty coverage</p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <TrendingUp className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-semibold text-foreground mb-1">ROI Timeline</h3>
              <p className="text-sm text-muted-foreground">Expected payback in 24-36 months</p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <DollarSign className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Flexible Payment</h3>
              <p className="text-sm text-muted-foreground">Multiple financing options available</p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Investment;
