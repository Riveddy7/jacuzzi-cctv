import Navigation from "@/components/Navigation";
import { MapPin, Camera, Wifi, Server, Activity, Shield, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import facilityPhoto from "@/assets/facilityPhoto.png";

const Overview = () => {
  const solutionPillars = [
    {
      icon: Camera,
      title: "Advanced Surveillance Technology",
      description: "High-performance Open Eye cameras with AI-powered analytics for intelligent threat detection"
    },
    {
      icon: Wifi,
      title: "High-Speed Network Backbone",
      description: "Dedicated fiber-optic network ensuring maximum data throughput and system reliability"
    },
    {
      icon: Server,
      title: "Centralized Management",
      description: "User-friendly and powerful Video Management System (VMS) for intuitive monitoring and control"
    },
  ];

  const keyMetrics = [
    { label: "HD Cameras", value: "175", icon: Camera, color: "text-primary" },
    { label: "Facility Size", value: "50,000 sq ft", icon: Activity, color: "text-primary" },
    { label: "Coverage", value: "24/7", icon: Shield, color: "text-primary" },
    { label: "Security Gaps", value: "Critical", icon: AlertTriangle, color: "text-destructive" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-7xl mx-auto animate-carbon">
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-5xl font-semibold text-foreground mb-4">
              Project Dashboard
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">
              State-of-the-art centralized CCTV system for Jacuzzi production facility.
              Enhancing operational security with 175 HD cameras and comprehensive surveillance coverage.
            </p>
          </div>

          {/* Key Metrics Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {keyMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:shadow-lg transition-shadow duration-150 animate-carbon"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-8 h-8 ${metric.color}`} />
                    <div>
                      <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Location & Map */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">Plant Location</h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  <strong>Jacuzzi Production Facility</strong><br />
                  50,000 sq ft manufacturing hub<br />
                  El Florido Industrial Park, Tijuana, Mexico
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Strategic location with multiple access points and high-value assets requiring robust security framework.
                </p>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Location Map</h3>
                <div className="aspect-video bg-carbon-gray-10 rounded-none overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.724534817!2d-116.927!3d32.533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9395e7b7b7b7b%3A0x7b7b7b7b7b7b7b7b!2sParque%20Industrial%20El%20Florido!5e0!3m2!1sen!2smx!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </Card>
            </div>

            {/* Facility Photo & Status */}
            <div className="space-y-6">
              <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Facility Status</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Security Level</span>
                    <span className="text-destructive font-medium">Critical</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">System Status</span>
                    <span className="text-destructive font-medium">Obsolete</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Coverage</span>
                    <span className="text-destructive font-medium">Limited</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Facility Photo</h3>
                <div className="bg-carbon-gray-10 rounded-none overflow-hidden">
                  <img
                    src={facilityPhoto}
                    alt="Jacuzzi Production Facility"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>
          </div>

          {/* Project Origin */}
          <Card className="p-6 bg-card border-border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Project Origin</h2>
            <p className="text-muted-foreground leading-relaxed">
              Strategic assessment identified limitations and obsolescence in current surveillance system.
              Critical security gaps around perimeter and logistical zones limit effective monitoring
              and incident response capabilities. This project addresses these vulnerabilities with
              modern solutions for reliable video evidence and compliance.
            </p>
          </Card>

          {/* Solution Pillars */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Solution Proposal</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {solutionPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 bg-card border-border hover:shadow-lg transition-shadow duration-150 animate-carbon"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex flex-col items-start gap-4">
                      <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-foreground">{pillar.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">{pillar.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Overview;
