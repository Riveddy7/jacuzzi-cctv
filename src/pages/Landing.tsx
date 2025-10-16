import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Camera, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      <Navigation />
      
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-12 h-12 text-primary" />
            <Camera className="w-10 h-10 text-accent" />
            <Zap className="w-12 h-12 text-primary" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Advanced Security & Surveillance Solution
          </h1>
          
          <h3 className="text-xl md:text-2xl font-medium text-muted-foreground mb-12 max-w-3xl mx-auto">
            Engineered for the operational integrity and safety of the Jacuzzi facility.
          </h3>
          
          <Link to="/overview">
            <Button size="lg" className="text-base px-8 py-6 font-semibold group hover:scale-105 transition-transform">
              Explore Proposal
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
