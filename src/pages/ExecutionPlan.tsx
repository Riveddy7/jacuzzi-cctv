import Navigation from "@/components/Navigation";
import { CheckCircle2, Clock, Wrench, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const ExecutionPlan = () => {
  const phases = [
    { 
      icon: CheckCircle2, 
      phase: "Phase 1",
      title: "Planning & Design", 
      duration: "2 weeks",
      activities: ["Site survey", "Final design approval", "Equipment procurement"]
    },
    { 
      icon: Wrench, 
      phase: "Phase 2",
      title: "Infrastructure Setup", 
      duration: "3 weeks",
      activities: ["Cable installation", "Network setup", "IDF configuration"]
    },
    { 
      icon: Zap, 
      phase: "Phase 3",
      title: "Equipment Installation", 
      duration: "2 weeks",
      activities: ["Camera mounting", "UPS installation", "System integration"]
    },
    { 
      icon: Clock, 
      phase: "Phase 4",
      title: "Testing & Training", 
      duration: "1 week",
      activities: ["System testing", "Staff training", "Documentation handover"]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Execution Plan & Timeline
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Visual timeline outlining project phases, key activities, and estimated durations for each stage of implementation.
          </p>

          <div className="space-y-6">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-border animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-sm font-semibold text-primary">{phase.phase}</span>
                        <div className="h-px flex-1 bg-border" />
                        <span className="text-sm font-semibold text-accent">{phase.duration}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{phase.title}</h3>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Total Project Duration</h3>
                <p className="text-2xl font-bold text-primary">8 weeks</p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ExecutionPlan;
