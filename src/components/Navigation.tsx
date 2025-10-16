import { Link, useLocation } from "react-router-dom";
import { Home, FileText, Wrench, Map, Calendar, DollarSign } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/overview", label: "Project Overview", icon: FileText },
    { path: "/technical-solution", label: "Technical Solution", icon: Wrench },
    { path: "/interactive-map", label: "Interactive Map", icon: Map },
    { path: "/execution-plan", label: "Execution Plan", icon: Calendar },
    { path: "/investment", label: "Investment", icon: DollarSign },
  ];

  const isActive = (path: string) => location.pathname === path;
  const currentIndex = navLinks.findIndex(link => link.path === location.pathname);
  const progressPercentage = currentIndex >= 0 ? ((currentIndex + 1) / navLinks.length) * 100 : 0;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg shadow-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">YC</span>
            </div>
            <span className="text-foreground font-semibold text-lg">Your Company</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <span className="text-foreground font-semibold text-sm">CL</span>
            </div>
            <span className="text-muted-foreground font-medium">Client Logo</span>
          </div>
        </div>

        <ul className="flex items-center justify-center gap-1 md:gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground shadow-md scale-105"
                      : "text-foreground hover:bg-secondary hover:scale-105"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      {/* Progress Bar */}
      <div className="h-1 bg-secondary">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </header>
  );
};

export default Navigation;
