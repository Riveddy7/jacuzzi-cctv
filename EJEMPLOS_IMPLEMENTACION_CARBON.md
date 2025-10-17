# Ejemplos de Implementación - Sistema Carbon

## CONFIGURACIÓN TAILWIND ACTUALIZADA

```css
/* src/index.css */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');

:root {
  --carbon-blue-60: #0F62FF;
  --carbon-blue-50: #4589FF;
  --carbon-gray-10: #F4F4F4;
  --carbon-gray-30: #E0E0E0;
  --carbon-gray-70: #525252;
  --carbon-gray-90: #393939;
  --carbon-gray-100: #161616;
}

@layer base {
  * {
    @apply border-carbon-gray-30;
  }
  body {
    @apply bg-carbon-gray-10 text-carbon-gray-100 font-sans;
  }
}
```

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
      },
      colors: {
        'carbon-blue': '#0F62FF',
        'carbon-blue-50': '#4589FF',
        'carbon-gray-10': '#F4F4F4',
        'carbon-gray-30': '#E0E0E0',
        'carbon-gray-70': '#525252',
        'carbon-gray-90': '#393939',
        'carbon-gray-100': '#161616',
      },
      borderRadius: {
        'none': '0px',
      },
      animation: {
        'carbon': 'carbon 0.25s cubic-bezier(0.2, 0, 0.38, 0.9)',
      },
      keyframes: {
        carbon: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
}
```

## COMPONENTE NAVIGATION CARBON

```typescript
// src/components/NavigationCarbon.tsx
import { Link, useLocation } from "react-router-dom";
import { Home, FileText, Wrench, Map, Calendar, DollarSign } from "lucide-react";

const NavigationCarbon = () => {
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-carbon-gray-30">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-carbon-blue flex items-center justify-center">
            <span className="text-white font-semibold text-sm">YC</span>
          </div>
          <span className="text-carbon-gray-100 font-semibold text-lg">Your Company</span>
        </div>
        
        <ul className="flex items-center gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-carbon-blue text-white"
                      : "text-carbon-gray-70 hover:text-carbon-blue hover:bg-carbon-gray-10"
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
    </header>
  );
};

export default NavigationCarbon;
```

## PÁGINA LANDING CARBON

```typescript
// src/pages/LandingCarbon.tsx
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Camera, Zap } from "lucide-react";
import NavigationCarbon from "@/components/NavigationCarbon";

const LandingCarbon = () => {
  return (
    <div className="min-h-screen bg-carbon-gray-10">
      <NavigationCarbon />
      
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Shield className="w-12 h-12 text-carbon-blue" />
            <Camera className="w-10 h-10 text-carbon-blue-50" />
            <Zap className="w-12 h-12 text-carbon-blue" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-semibold text-carbon-gray-100 mb-6 leading-tight">
            Advanced Security & Surveillance Solution
          </h1>
          
          <h3 className="text-xl text-carbon-gray-70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Engineered for the operational integrity and safety of the Jacuzzi facility.
          </h3>
          
          <Link to="/overview">
            <button className="bg-carbon-blue hover:bg-carbon-blue-50 text-white px-8 py-4 text-base font-medium transition-colors">
              Explore Proposal
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingCarbon;
```

## PÁGINA OVERVIEW CARBON

```typescript
// src/pages/OverviewCarbon.tsx
import NavigationCarbon from "@/components/NavigationCarbon";
import { Target, Award, Shield, CheckCircle } from "lucide-react";

const OverviewCarbon = () => {
  const benefits = [
    { icon: Target, title: "Clear Objectives", description: "Well-defined security goals and implementation strategy" },
    { icon: Award, title: "Premium Quality", description: "Industry-leading equipment and installation standards" },
    { icon: Shield, title: "Complete Protection", description: "360-degree coverage for maximum facility security" },
    { icon: CheckCircle, title: "Proven Solutions", description: "Tested and reliable security infrastructure" },
  ];

  return (
    <div className="min-h-screen bg-carbon-gray-10">
      <NavigationCarbon />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-semibold text-carbon-gray-100 mb-4">
            Project Overview
          </h1>
          
          <p className="text-lg text-carbon-gray-70 mb-16 max-w-3xl leading-relaxed">
            This section features the project's executive summary, key objectives, and the main benefits of the proposed solution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white border border-carbon-gray-30 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-carbon-blue flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-carbon-gray-100 mb-2">{benefit.title}</h3>
                      <p className="text-carbon-gray-70 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white border border-carbon-gray-30 p-8">
            <h2 className="text-3xl font-semibold text-carbon-gray-100 mb-4">Executive Summary</h2>
            <p className="text-carbon-gray-70 leading-relaxed mb-4">
              Our comprehensive security and surveillance solution is specifically designed to enhance the operational integrity and safety of your Jacuzzi facility. This proposal outlines a state-of-the-art system featuring cutting-edge Open Eye cameras, robust network infrastructure, and reliable power backup systems.
            </p>
            <p className="text-carbon-gray-70 leading-relaxed">
              The implementation will ensure complete facility coverage, real-time monitoring capabilities, and seamless integration with your existing operations.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OverviewCarbon;
```

## PÁGINA TECHNICAL SOLUTION CARBON

```typescript
// src/pages/TechnicalSolutionCarbon.tsx
import NavigationCarbon from "@/components/NavigationCarbon";
import { Camera, Network, Battery, Server } from "lucide-react";

const TechnicalSolutionCarbon = () => {
  const equipment = [
    { 
      icon: Camera, 
      title: "Open Eye Cameras", 
      specs: "4K Resolution, Night Vision, AI Analytics",
      description: "Advanced surveillance with intelligent detection capabilities"
    },
    { 
      icon: Network, 
      title: "Network Switches", 
      specs: "Enterprise-grade, PoE+, Gigabit",
      description: "High-performance networking infrastructure for reliable connectivity"
    },
    { 
      icon: Battery, 
      title: "UPS Systems", 
      specs: "1500VA, Pure Sine Wave, 2-hour runtime",
      description: "Continuous power protection ensuring uninterrupted operation"
    },
    { 
      icon: Server, 
      title: "Storage Systems", 
      specs: "RAID 6, 30-day retention, Cloud backup",
      description: "Secure and redundant video storage with remote access"
    },
  ];

  return (
    <div className="min-h-screen bg-carbon-gray-10">
      <NavigationCarbon />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-semibold text-carbon-gray-100 mb-4">
            Technical Solution
          </h1>
          
          <p className="text-lg text-carbon-gray-70 mb-16 max-w-3xl leading-relaxed">
            Detailed specifications of the proposed equipment including Open Eye cameras, network switches, UPS systems, and storage solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {equipment.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white border border-carbon-gray-30 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-carbon-blue flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-carbon-gray-100 mb-2">{item.title}</h3>
                      <div className="text-sm font-medium text-carbon-blue mb-3">{item.specs}</div>
                      <p className="text-carbon-gray-70 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TechnicalSolutionCarbon;
```

## PÁGINA INVESTMENT CARBON

```typescript
// src/pages/InvestmentCarbon.tsx
import NavigationCarbon from "@/components/NavigationCarbon";
import { DollarSign, TrendingUp, Shield, CheckCircle } from "lucide-react";

const InvestmentCarbon = () => {
  const costBreakdown = [
    { category: "Equipment", amount: "$45,000", percentage: 45, items: ["Cameras", "Network switches", "UPS systems", "Storage"] },
    { category: "Installation", amount: "$25,000", percentage: 25, items: ["Labor", "Cable installation", "Configuration"] },
    { category: "Infrastructure", amount: "$20,000", percentage: 20, items: ["Fiber optic", "IDF setup", "Power infrastructure"] },
    { category: "Training & Support", amount: "$10,000", percentage: 10, items: ["Staff training", "Documentation", "1-year support"] },
  ];

  const totalInvestment = "$100,000";

  return (
    <div className="min-h-screen bg-carbon-gray-10">
      <NavigationCarbon />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-semibold text-carbon-gray-100 mb-4">
            Investment Summary
          </h1>
          
          <p className="text-lg text-carbon-gray-70 mb-16 max-w-3xl leading-relaxed">
            Transparent breakdown of costs organized by project phase with visual graphs for clarity.
          </p>

          <div className="bg-carbon-blue text-white p-8 mb-8">
            <div className="flex items-center gap-4">
              <DollarSign className="w-16 h-16" />
              <div>
                <h2 className="text-lg font-medium mb-1">Total Investment</h2>
                <p className="text-5xl font-semibold">{totalInvestment}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {costBreakdown.map((item, index) => (
              <div 
                key={index} 
                className="bg-white border border-carbon-gray-30 p-6"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-carbon-gray-100">{item.category}</h3>
                    <span className="text-2xl font-semibold text-carbon-blue">{item.amount}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-carbon-gray-30 rounded-none overflow-hidden">
                      <div 
                        className="h-full bg-carbon-blue transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-carbon-blue">{item.percentage}%</span>
                  </div>
                </div>
                <ul className="space-y-1">
                  {item.items.map((listItem, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-carbon-gray-70">
                      <CheckCircle className="w-4 h-4 text-carbon-blue" />
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-carbon-gray-30 p-6">
              <Shield className="w-8 h-8 text-carbon-blue mb-3" />
              <h3 className="font-semibold text-carbon-gray-100 mb-1">Protected Investment</h3>
              <p className="text-sm text-carbon-gray-70">Comprehensive warranty coverage</p>
            </div>
            <div className="bg-white border border-carbon-gray-30 p-6">
              <TrendingUp className="w-8 h-8 text-carbon-blue mb-3" />
              <h3 className="font-semibold text-carbon-gray-100 mb-1">ROI Timeline</h3>
              <p className="text-sm text-carbon-gray-70">Expected payback in 24-36 months</p>
            </div>
            <div className="bg-white border border-carbon-gray-30 p-6">
              <DollarSign className="w-8 h-8 text-carbon-blue mb-3" />
              <h3 className="font-semibold text-carbon-gray-100 mb-1">Flexible Payment</h3>
              <p className="text-sm text-carbon-gray-70">Multiple financing options available</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InvestmentCarbon;
```

## UTILIDADES CARBON

```typescript
// src/lib/carbon-utils.ts
export const carbonColors = {
  blue: '#0F62FF',
  blue50: '#4589FF',
  gray10: '#F4F4F4',
  gray30: '#E0E0E0',
  gray70: '#525252',
  gray90: '#393939',
  gray100: '#161616',
};

export const carbonSpacing = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
  xxl: '64px',
};

export const carbonTypography = {
  h1: 'text-5xl font-semibold leading-tight',
  h2: 'text-4xl font-semibold leading-tight',
  h3: 'text-3xl font-semibold leading-tight',
  h4: 'text-2xl font-medium leading-normal',
  bodyLarge: 'text-lg font-normal leading-relaxed',
  body: 'text-base font-normal leading-relaxed',
  small: 'text-sm font-normal leading-normal',
  caption: 'text-xs font-normal leading-normal',
};