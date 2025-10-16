import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/overview", label: "Project Overview" },
    { path: "/technical-solution", label: "Technical Solution" },
    { path: "/interactive-map", label: "Interactive Map" },
    { path: "/execution-plan", label: "Execution Plan" },
    { path: "/investment", label: "Investment" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-12">
          <div className="text-muted-foreground font-medium text-sm tracking-wide">
            [Your Company Logo]
          </div>
          
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.path)
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-muted-foreground font-medium text-sm tracking-wide">
          [Client Logo]
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
