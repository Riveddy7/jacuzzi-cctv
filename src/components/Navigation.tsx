import { Link, useLocation } from "react-router-dom";
import { Home, FileText, Wrench, Map, Calendar, DollarSign, CheckCircle2 } from "lucide-react";
// Note: Logos will be added locally. For now, using placeholders until files are available.
// import companyLogo from "@/assets/company-logo.png";
// import clientLogo from "@/assets/jacuzzi-logo.svg";

// Using external URLs with regular img tags instead of imports
const companyLogo = "http://www.baja-net.com/images/logo.png";
const clientLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Jacuzzi_logo.svg/1280px-Jacuzzi_logo.svg.png";

const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/overview", label: "Project Overview", icon: FileText },
    { path: "/technical-solution", label: "Technical Solution", icon: Wrench },
    { path: "/interactive-map", label: "Interactive Map", icon: Map },
    { path: "/execution-plan", label: "Execution Plan", icon: Calendar },
    { path: "/post-execution", label: "Post-Execution", icon: CheckCircle2 },
    { path: "/investment", label: "Investment", icon: DollarSign },
  ];

  const isActive = (path: string) => location.pathname === path;
  const currentIndex = navLinks.findIndex(link => link.path === location.pathname);
  const progressPercentage = currentIndex >= 0 ? ((currentIndex + 1) / navLinks.length) * 100 : 0;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={companyLogo}
            alt="Baja-Net Company Logo"
            className="h-10 w-auto object-contain"
          />
        </div>
        
        <ul className="flex items-center gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center">
          <img
            src={clientLogo}
            alt="Jacuzzi Company Logo"
            className="h-10 w-auto object-contain"
          />
        </div>
      </nav>
      
      {/* Carbon Progress Bar */}
      <div className="h-1 bg-secondary">
        <div
          className="h-full bg-primary transition-all duration-250 ease-carbon"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </header>
  );
};

export default Navigation;
