import Navigation from "@/components/Navigation";
import { CheckCircle, FileText, Users, Wrench, Shield, TrendingUp, Clock, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const PostExecution = () => {
  const deliverables = [
    { 
      icon: CheckCircle, 
      title: "System Commissioning", 
      description: "Complete system setup and optimization to user satisfaction",
      details: [
        "Full system testing and validation",
        "Performance optimization and calibration",
        "User acceptance testing and approval",
        "System documentation and handover"
      ]
    },
    { 
      icon: FileText, 
      title: "As-Built Plans", 
      description: "Comprehensive documentation of final installation",
      details: [
        "Updated floor plans with equipment locations",
        "Network topology diagrams",
        "Cabling infrastructure documentation",
        "Power and backup system schematics"
      ]
    },
    { 
      icon: Users, 
      title: "Equipment & Network Inventory", 
      description: "Detailed inventory of all installed components",
      details: [
        "Complete equipment list with serial numbers",
        "Network node mapping and IP assignments",
        "Warranty documentation and certificates",
        "Asset tagging and identification system"
      ]
    },
    { 
      icon: Award, 
      title: "Training Session", 
      description: "Comprehensive user training for system operation",
      details: [
        "Hands-on system operation training",
        "Monitoring and management procedures",
        "Troubleshooting and maintenance basics",
        "User manuals and quick reference guides"
      ]
    }
  ];

  const maintenanceBenefits = [
    { icon: TrendingUp, title: "Extended Equipment Lifespan", description: "Preventive care significantly extends operational life" },
    { icon: Shield, title: "Reduced System Downtime", description: "Regular maintenance prevents unexpected failures" },
    { icon: Clock, title: "Optimal System Performance", description: "Continuous tuning ensures peak efficiency" },
    { icon: Award, title: "Warranty Compliance", description: "Maintain manufacturer warranties with proper service" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto animate-carbon">
          <h1 className="text-5xl font-semibold text-foreground mb-4">
            Post-Execution Deliverables
          </h1>
          
          <p className="text-lg text-muted-foreground mb-16 max-w-4xl leading-relaxed">
            Upon completion of your Jacuzzi CCTV security system installation, we provide comprehensive deliverables 
            ensuring system optimization, complete documentation, and user empowerment for long-term operational success.
          </p>

          {/* Project Deliverables */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-foreground mb-8">Project Deliverables</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deliverables.map((deliverable, index) => {
                const Icon = deliverable.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-6 bg-card border-border hover:shadow-lg transition-shadow duration-150 animate-carbon"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">{deliverable.title}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{deliverable.description}</p>
                        
                        <div className="space-y-2">
                          {deliverable.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-none mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Maintenance Policy Recommendation */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-foreground mb-8">Maintenance Policy Recommendation</h2>
            
            <Card className="p-8 bg-card border-border mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-primary flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Preventive Maintenance Program</h3>
                  <p className="text-primary font-medium">Recommended for Optimal System Performance</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                We strongly recommend implementing a comprehensive preventive maintenance program to ensure the longevity, 
                reliability, and optimal performance of your security investment. Regular maintenance not only protects 
                your equipment but also provides peace of mind knowing your system will operate flawlessly when needed most.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Our on-demand maintenance services provide expert care without long-term commitments, allowing you to 
                access professional support exactly when you need it, with transparent pricing and guaranteed response times.
              </p>
            </Card>

            {/* Maintenance Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {maintenanceBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-6 bg-card border-border hover:shadow-lg transition-shadow duration-150 animate-carbon"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="w-12 h-12 bg-primary flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">{benefit.title}</h4>
                        <p className="text-xs text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Sales Copy for Maintenance */}
            <Card className="p-8 bg-card border border-primary">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Why Choose Our Maintenance Services?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-none flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Expert Technicians</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Our certified engineers possess extensive experience with all installed equipment brands, 
                      ensuring knowledgeable service and rapid problem resolution.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-none flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Proactive System Health</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Regular inspections identify potential issues before they become problems, 
                      preventing costly downtime and ensuring continuous security coverage.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-none flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Cost-Effective Investment</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Preventive maintenance costs significantly less than emergency repairs and system replacements, 
                      providing excellent ROI while protecting your initial investment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-none flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Flexible Service Options</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Our on-demand maintenance model provides professional support without long-term contracts, 
                      allowing you to scale service based on your specific needs and budget requirements.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact CTA */}
          <Card className="p-8 bg-primary text-primary-foreground">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Protect Your Security Investment</h3>
              <p className="mb-6 max-w-2xl mx-auto leading-relaxed">
                Ensure optimal performance and longevity of your CCTV system with our professional maintenance services. 
                Contact us today to customize a maintenance plan that meets your specific requirements.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="bg-primary-foreground text-primary px-6 py-3 rounded-none font-medium">
                  Schedule Maintenance Consultation
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PostExecution;