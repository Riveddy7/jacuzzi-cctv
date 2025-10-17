import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Camera, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Carbon grid pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-carbon">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Shield className="w-12 h-12 text-primary" />
            <Camera className="w-10 h-10 text-accent" />
            <Zap className="w-12 h-12 text-primary" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-semibold text-foreground mb-6 leading-tight">
            Advanced Security & Surveillance Solution
          </h1>
          
          <h3 className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Engineered for the operational integrity and safety of the Jacuzzi facility.
          </h3>
          
          <Link to="/overview">
            <Button size="lg" className="text-base px-8 py-4 font-medium bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-150">
              Explore Proposal
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
