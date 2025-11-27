import { useState } from "react";
import Navigation from "@/components/Navigation";
import { CheckCircle2, ChevronDown, ChevronUp, Clock, Wrench, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const ExecutionPlan = () => {
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({});

  const togglePhase = (phaseId: string) => {
    setExpandedPhases(prev => ({
      ...prev,
      [phaseId]: !prev[phaseId]
    }));
  };

  const phases = [
    {
      id: "idf-infrastructure",
      phase: "1",
      title: "IDF Infrastructure",
      subtitle: "Installation of ladder racks, IDFs and Fiber Optic",
      duration: "5 weeks",
      icon: Wrench,
      activities: [
        { task: "250 ladder rack sections", duration: "5 weeks" },
        { task: "1 floor rack for IDF", duration: "1 day" },
        { task: "8 IDF cabinet installations at height", duration: "1 week" },
        { task: "Fiber optic installation and connection", duration: "1 week" }
      ]
    },
    {
      id: "steel-conduit",
      phase: "2",
      title: "Steel Conduit Channeling",
      subtitle: "Installation of steel conduit for camera cabling",
      duration: "5 weeks",
      icon: Zap,
      activities: [
        { task: "129 steel 3/4\" conduit drops for indoor cameras", duration: "3 weeks" },
        { task: "38 steel 1\" conduit drops for outdoor cameras", duration: "1 week" },
        { task: "10 steel conduit drops for explosion-proof cameras", duration: "1 week" }
      ]
    },
    {
      id: "network-node",
      phase: "3",
      title: "Camera Network Node",
      subtitle: "Network infrastructure for camera connectivity",
      duration: "5 weeks",
      icon: CheckCircle2,
      activities: [
        { task: "Network cabling for 177 network nodes", duration: "3 weeks" },
        { task: "Termination and labeling of 177 network nodes", duration: "2 weeks" },
        { task: "Certification of 177 network nodes", duration: "2 days" }
      ]
    },
    {
      id: "camera-installation",
      phase: "4",
      title: "Camera Mounting & Configuration",
      subtitle: "Installation and setup of CCTV cameras",
      duration: "3 weeks",
      icon: Clock,
      activities: [
        { task: "Mounting of 177 CCTV cameras", duration: "3 weeks" },
        { task: "Server configuration", duration: "2 days" },
        { task: "Camera focusing", duration: "2 days" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto animate-carbon">
          <h1 className="text-5xl font-semibold text-foreground mb-4">
            Execution Plan & Timeline
          </h1>
          
          <p className="text-lg text-muted-foreground mb-16 max-w-3xl leading-relaxed">
            Detailed project phases with specific activities, timelines, and deliverables for systematic implementation of the Jacuzzi CCTV security system.
          </p>

          <div className="space-y-6">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isExpanded = expandedPhases[phase.id] || false;
              
              return (
                <Card
                  key={index}
                  className="overflow-hidden bg-card border-border hover:shadow-lg transition-all duration-150 animate-carbon"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => togglePhase(phase.id)}
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-4">
                            <span className="text-sm font-medium text-primary">Phase {phase.phase}</span>
                            <div className="h-px flex-1 bg-border w-12" />
                            <span className="text-sm font-medium text-accent">{phase.duration}</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5" />
                            ) : (
                              <ChevronDown className="w-5 h-5" />
                            )}
                          </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground mb-2">{phase.title}</h3>
                        <p className="text-muted-foreground">{phase.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expandable Content */}
                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-border">
                      <div className="pt-4">
                        <h4 className="text-lg font-medium text-foreground mb-4">Phase Activities</h4>
                        <div className="space-y-3">
                          {phase.activities.map((activity, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-carbon-gray-10 rounded-none">
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-primary rounded-none" />
                                <span className="text-foreground">{activity.task}</span>
                              </div>
                              <span className="text-sm font-medium text-primary bg-carbon-gray-10 px-3 py-1 rounded-none">
                                {activity.duration}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>

          {/* Total Duration Summary */}
          <Card className="mt-8 p-6 bg-card border border-primary">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">Total Project Duration</h3>
                  <p className="text-sm text-muted-foreground">Including all phases and activities</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-semibold text-primary">18 weeks</p>
                <p className="text-sm text-muted-foreground">Approximately 4.5 months</p>
              </div>
            </div>
          </Card>

          {/* Project Timeline Overview */}
          <Card className="mt-8 p-6 bg-card border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">Timeline Overview</h3>
            <div className="space-y-3">
              {phases.map((phase, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0 text-primary-foreground text-sm font-medium">
                    {phase.phase}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">{phase.title}</span>
                      <span className="text-xs text-muted-foreground">{phase.duration}</span>
                    </div>
                    <div className="h-2 bg-carbon-gray-10 rounded-none overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{
                          width: `${(parseInt(phase.duration) / 18) * 100}%`,
                          animationDelay: `${index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ExecutionPlan;
