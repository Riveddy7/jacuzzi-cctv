import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

import openEyeLogo from "@/assets/logos/openeye-logo.jpg";
import panduitLogo from "@/assets/logos/panduit-logo.svg";
import charofilLogo from "@/assets/logos/charofil-logo.png";
import ciscoLogo from "@/assets/logos/cisco-logo.png";
import apcLogo from "@/assets/logos/apc-logo.png";

const TechnicalSolution = () => {
  const solutions = [
    {
      id: "surveillance-cameras",
      title: "Surveillance Cameras",
      brand: "Open Eye",
      description: "Professional-grade 4K cameras with AI-powered analytics for intelligent threat detection.",
      logo: openEyeLogo
    },
    {
      id: "structured-cabling",
      title: "Structured Cabling",
      brand: "Panduit",
      description: "Complete network infrastructure with copper and fiber optic solutions for maximum reliability.",
      logo: panduitLogo
    },
    {
      id: "idf-infrastructure",
      title: "IDF Infrastructure",
      brand: "Panduit & Charofill",
      description: "Professional cabinets, accessories, and ladder racks for organized equipment housing.",
      logo: charofilLogo
    },
    {
      id: "network-switches",
      title: "Network Switches",
      brand: "Cisco",
      description: "Enterprise-grade network switches with PoE+ capabilities for optimal camera performance.",
      logo: ciscoLogo
    },
    {
      id: "ups-systems",
      title: "UPS Systems",
      brand: "APC",
      description: "Reliable power protection systems ensuring continuous operation during outages.",
      logo: apcLogo
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto animate-carbon">
          <h1 className="text-5xl font-semibold text-foreground mb-4">
            Technical Solution
          </h1>

          {/* Sales Copy Section */}
          <div className="mb-16">
            <p className="text-lg text-muted-foreground mb-6 max-w-4xl leading-relaxed">
              We are committed to delivering excellence through cutting-edge technology solutions.
              As certified integrators with extensive industry experience, we partner with leading
              manufacturers to provide state-of-the-art security infrastructure that exceeds expectations.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl leading-relaxed">
              Our team of certified professionals ensures seamless integration, optimal performance,
              and reliable operation of all implemented systems. We stand behind our solutions with
              comprehensive support and maintenance programs.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                to={`/technical-solution/${solution.id}`}
                className="group"
              >
                <Card
                  className="p-6 bg-card border-border hover:shadow-lg transition-all duration-150 hover:border-primary animate-carbon cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col gap-4">
                    {/* Real Logo */}
                    <div className="w-16 h-16 bg-carbon-gray-10 border border-carbon-gray-30 rounded-none flex items-center justify-center p-2">
                      <img
                        src={solution.logo}
                        alt={`${solution.brand} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{solution.title}</h3>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="text-sm font-medium text-primary mb-3">{solution.brand}</div>
                      <p className="text-muted-foreground leading-relaxed text-sm">{solution.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Certified Integrators</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Official certification from all major manufacturers ensuring proper installation and support.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Premium Partners</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Direct partnership with industry leaders ensures access to latest technology and best pricing.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Expert Support</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                24/7 technical support and maintenance services for complete peace of mind.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TechnicalSolution;
