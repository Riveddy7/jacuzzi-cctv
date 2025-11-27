import { useState } from "react";
import Navigation from "@/components/Navigation";
import { DollarSign, TrendingUp, Shield, CheckCircle, Plus, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Investment = () => {
  const [selectedPhases, setSelectedPhases] = useState<Record<string, boolean>>({
    infrastructure: true,
    indoorCameras: true,
    outdoorCameras: true,
    specialCameras: false,
  });

  const phases = [
    {
      id: "infrastructure",
      title: "Infrastructure",
      amount: 175974.91,
      items: [
        "Ladder Racks (66/200)",
        "9 IDF Cabinets",
        "Fiber Optic",
        "Switches",
        "Lifting Equipment"
      ]
    },
    {
      id: "indoor-cameras",
      title: "Indoor Cameras",
      amount: 273526.38,
      items: [
        "Steel Conduit (Interior)",
        "129 Network Nodes",
        "129 Indoor Cameras",
        "4 NVR Servers",
        "Lifting Equipment"
      ]
    },
    {
      id: "outdoor-cameras",
      title: "Outdoor Cameras",
      amount: 61080.70,
      items: [
        "Steel Conduit (Exterior)",
        "Network Nodes",
        "38 Outdoor Cameras",
        "1 NVR",
        "Wireless Link",
        "Lifting Equipment"
      ]
    },
    {
      id: "special-cameras",
      title: "Special Cameras",
      amount: 42053.80,
      items: [
        "Steel Conduit",
        "10 Anti-Explosive Cameras",
        "Network Nodes",
        "Lifting Equipment"
      ]
    },
    {
      id: "licensing",
      title: "Licensing",
      amount: 17523.00,
      items: [
        "Licensing for 177 Cameras",
        "Video Management System",
        "Technical Support",
        "System Updates"
      ]
    }
  ];

  const togglePhase = (phaseId: string) => {
    setSelectedPhases(prev => ({
      ...prev,
      [phaseId]: !prev[phaseId]
    }));
  };

  const calculateTotal = () => {
    return phases
      .filter(phase => selectedPhases[phase.id])
      .reduce((total, phase) => total + phase.amount, 0);
  };

  const calculatePercentage = (phaseAmount: number) => {
    const total = calculateTotal();
    return total > 0 ? Math.round((phaseAmount / total) * 100) : 0;
  };

  const totalInvestment = calculateTotal();
  const formattedTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(totalInvestment);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto animate-carbon">
          <h1 className="text-5xl font-semibold text-foreground mb-4">
            Investment Summary
          </h1>
          
          <p className="text-lg text-muted-foreground mb-16 max-w-3xl leading-relaxed">
            Select project phases to customize your investment. The total will automatically update based on your selections.
          </p>

          {/* Total Investment Card */}
          <Card className="p-8 bg-primary text-primary-foreground mb-8 animate-carbon">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <DollarSign className="w-16 h-16" />
                <div>
                  <h2 className="text-lg font-medium mb-1">Total Investment</h2>
                  <p className="text-5xl font-semibold">{formattedTotal}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm opacity-80 mb-1">+ IVA</p>
                <p className="text-2xl font-semibold">
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2,
                  }).format(totalInvestment * 1.16)}
                </p>
              </div>
            </div>
          </Card>

          {/* Phase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {phases.map((phase, index) => {
              const isSelected = selectedPhases[phase.id];
              const percentage = calculatePercentage(phase.amount);
              const formattedAmount = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }).format(phase.amount);
              
              return (
                <Card
                  key={index}
                  className={`p-6 bg-card border-border hover:shadow-lg transition-all duration-150 animate-carbon ${
                    isSelected ? 'border-primary' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{phase.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-semibold text-primary">{formattedAmount}</span>
                        <span className="text-sm font-medium text-accent">+ IVA</span>
                      </div>
                    </div>
                    
                    {isSelected && (
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex-1 h-2 bg-secondary rounded-none overflow-hidden">
                          <div
                            className="h-full bg-primary transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-accent">{percentage}%</span>
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-1 mb-4">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    variant={isSelected ? "default" : "outline"}
                    className="w-full"
                    onClick={() => togglePhase(phase.id)}
                  >
                    {isSelected ? (
                      <>
                        <Minus className="w-4 h-4 mr-2" />
                        Remove Phase
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Phase
                      </>
                    )}
                  </Button>
                </Card>
              );
            })}
          </div>

          {/* Investment Benefits */}
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

          {/* Summary Table */}
          <Card className="p-8 bg-card border-border mt-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Investment Breakdown</h3>
            <div className="space-y-4">
              {phases.filter(phase => selectedPhases[phase.id]).map((phase, index) => {
                const formattedAmount = new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }).format(phase.amount);
                const percentage = calculatePercentage(phase.amount);
                const withIVA = new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }).format(phase.amount * 1.16);
                
                return (
                  <div key={index} className="flex items-center justify-between pb-4 border-b border-border last:border-0">
                    <div>
                      <h4 className="font-medium text-foreground">{phase.title}</h4>
                      <p className="text-sm text-muted-foreground">{phase.items.length} items included</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">{formattedAmount}</p>
                      <p className="text-sm text-muted-foreground">+ {percentage}% with IVA: {withIVA}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Investment;
