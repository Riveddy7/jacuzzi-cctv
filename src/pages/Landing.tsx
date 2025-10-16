import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tech-bg.jpg";

const Landing = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
          Advanced Security & Surveillance Solution
        </h1>
        <h3 className="text-xl md:text-2xl font-light text-muted-foreground mb-12 max-w-3xl mx-auto">
          Engineered for the operational integrity and safety of the Jacuzzi facility.
        </h3>
        <Link to="/overview">
          <Button size="lg" className="text-base px-8 py-6 font-medium">
            Explore Proposal
          </Button>
        </Link>
      </div>

      {/* Decorative grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </div>
  );
};

export default Landing;
