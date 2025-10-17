import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center max-w-lg mx-auto px-6 animate-carbon">
          <div className="mb-8">
            <div className="text-9xl font-semibold text-primary mb-4">
              404
            </div>
            <h1 className="text-3xl font-semibold text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="font-medium bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-150">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <Link to="/overview">
              <Button variant="outline" size="lg" className="font-medium border-border hover:bg-accent hover:text-accent-foreground transition-colors duration-150">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Previous Page
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
