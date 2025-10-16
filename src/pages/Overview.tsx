import Navigation from "@/components/Navigation";
import { Target, Award, Shield, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const Overview = () => {
  const benefits = [
    { icon: Target, title: "Clear Objectives", description: "Well-defined security goals and implementation strategy" },
    { icon: Award, title: "Premium Quality", description: "Industry-leading equipment and installation standards" },
    { icon: Shield, title: "Complete Protection", description: "360-degree coverage for maximum facility security" },
    { icon: CheckCircle, title: "Proven Solutions", description: "Tested and reliable security infrastructure" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Project Overview
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            This section features the project's executive summary, key objectives, and the main benefits of the proposed solution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-border animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 bg-gradient-to-br from-secondary/50 to-card border-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Executive Summary</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our comprehensive security and surveillance solution is specifically designed to enhance the operational integrity and safety of your Jacuzzi facility. This proposal outlines a state-of-the-art system featuring cutting-edge Open Eye cameras, robust network infrastructure, and reliable power backup systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The implementation will ensure complete facility coverage, real-time monitoring capabilities, and seamless integration with your existing operations.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Overview;
