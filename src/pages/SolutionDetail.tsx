import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import openEyeLogo from "@/assets/logos/openeye-logo.jpg";
import panduitLogo from "@/assets/logos/panduit-logo.svg";
import charofilLogo from "@/assets/logos/charofil-logo.png";
import ciscoLogo from "@/assets/logos/cisco-logo.png";
import apcLogo from "@/assets/logos/apc-logo.png";

interface ProductModel {
  model: string;
  description: string;
  specs: string[];
  datasheet: string;
  image?: string;
  brand?: string;
}

interface SolutionData {
  id: string;
  title: string;
  brand: string;
  description: string;
  overview: string;
  features: string[];
  products: ProductModel[];
  logo: string;
}

const solutionData: Record<string, SolutionData> = {
  "surveillance-cameras": {
    id: "surveillance-cameras",
    title: "Surveillance Cameras",
    brand: "Open Eye",
    description: "Professional-grade 4K cameras with AI-powered analytics for intelligent threat detection.",
    overview: "Open Eye cameras provide superior image quality and advanced analytics capabilities for comprehensive surveillance coverage. These cameras are engineered for demanding environments requiring reliable performance and intelligent monitoring.",
    features: [
      "4K Ultra HD resolution for crystal-clear imagery",
      "AI-powered analytics for intelligent threat detection",
      "Advanced low-light performance with night vision",
      "Wide dynamic range for challenging lighting conditions",
      "H.265 compression for efficient storage utilization",
      "Weather-resistant construction for outdoor deployment"
    ],
    logo: openEyeLogo,
    products: [
      {
        model: "OE-C9912M20",
        description: "20MP Outdoor IP Multisensor Camera",
        specs: ["20MP Resolution", "Outdoor", "Multisensor", "IP Camera"],
        datasheet: "https://portal.openeye.net/assets/documents/oe-c9912m20-spec-sheet",
        image: "https://portal.openeye.net/media/2868/OE-C9912M20_no-plate_600x400.png"
      },
      {
        model: "OE-C3012T4-S",
        description: "In/Out 4MP IP VF Dome 2.7 - 13.5mm AF WDR IR",
        specs: ["4MP Resolution", "In/Out", "VF Dome", "2.7-13.5mm AF", "WDR IR"],
        datasheet: "https://portal.openeye.net/assets/documents/oe-c3012t4-s-spec-sheet",
        image: "https://portal.openeye.net/media/1428/OE-C3012T8.png"
      },
      {
        model: "OE-C1024T5-S",
        description: "In/Out 5MP IP Turret 1.6mm Fixed 180°FoV",
        specs: ["5MP Resolution", "In/Out", "IP Turret", "1.6mm Fixed", "180°FoV"],
        datasheet: "https://portal.openeye.net/assets/documents/oe-c1024t5-s-spec-sheet",
        image: "https://portal.openeye.net/media/3867/0235C6LV-F.png"
      },
      {
        model: "OE-C2012B8-S",
        description: "In/Out 8MP IP Bullet 2.8 ~12mm AF WDR IR",
        specs: ["8MP Resolution", "In/Out", "IP Bullet", "2.8-12mm AF", "WDR IR"],
        datasheet: "https://portal.openeye.net/assets/documents/oe-c1024t5-s-spec-sheet",
        image: "https://portal.openeye.net/media/3867/0235C6LV-F.png"
      },
      {
        model: "OE-C1013D4-S",
        description: "Indr 4MP IP Mini Dome 4mm WDR IR",
        specs: ["4MP Resolution", "Indoor", "IP Mini Dome", "4mm", "WDR IR"],
        datasheet: "https://portal.openeye.net/assets/documents/oe-c1013d4-s-spec-sheet",
        image: "https://portal.openeye.net/media/3126/OE-C1013D4.png"
      },
      {
        model: "OE-MMX32",
        description: "2U Rackmount Server, Linux, 32TB (No Lic)",
        specs: ["2U Rackmount", "Linux", "32TB Storage", "No License"],
        datasheet: "https://cdn.adiglobaldistribution.us/pim/Original/10133/OI-OEMMX32_Product-Data-Sheet.pdf?_gl=1*169xs46*_gcl_au*MTkwNzIyLjE3NjA2NjA2NzY.*_ga*NTYwNzE0ODExLjE3NjA2NjA2Nzc.*_ga_PM2Y0JQQC9*czE3NjA2NjA2NzckbzEkZzEkdDE3NjA2NjA2OTkkajM4JGwwJGgw",
        image: "https://cdn.adiglobaldistribution.us/pim/500X500/10133/OI-OEMMX32.jpg"
      },
      {
        model: "OE-C2012B4-S",
        description: "In/Out 4MP IP Bullet 2.7 ~13.5mm AF WDR IR",
        specs: ["4MP Resolution", "In/Out", "IP Bullet", "2.7-13.5mm AF", "WDR IR"],
        datasheet: "https://portal.openeye.net/assets/documents/oe-c2012b4-s-spec-sheet",
        image: "https://portal.openeye.net/media/1713/OE-C2012B8.png"
      },
    ]
  },
  "structured-cabling": {
    id: "structured-cabling",
    title: "Structured Cabling",
    brand: "Panduit",
    description: "Complete network infrastructure with copper and fiber optic solutions for maximum reliability.",
    overview: "Panduit structured cabling solutions provide the foundation for reliable network infrastructure. engineered for performance and durability, these solutions ensure optimal data transmission and system reliability.",
    features: [
      "Category 6A copper cabling for 10GbE performance",
      "Single-mode and multi-mode fiber optic solutions",
      "High-density patch panels for space optimization",
      "Color-coded system for easy identification",
      "Certified performance standards compliance",
      "Lifetime warranty on all cabling components"
    ],
    logo: panduitLogo,
    products: [
      {
        model: "PUR6ASD04BU-CG",
        description: "4-Pair MaTriX UTP Cable Reel, Cat6A Reduced Diameter, 26 AWG, CMR (Riser), Blue, 305m",
        specs: ["Cat6A", "4 Pair", "26 AWG", "CMR (Riser)", "Blue", "305m"],
        datasheet: "https://ftp3.syscom.mx/usuarios/ftp/2020/03/04/b2f38/PUR6ASD04BUCG.pdf?_gl=1*n5u2zi*_gcl_au*MTAyMjI2MjEwNy4xNzU1NTMzNDc0",
        image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/PANDUIT/PUR6ASD04BUCG/PUR6ASD04BUCG-l.PNG",
        brand: "PANDUIT"
      },
      {
        model: "CJ6X88TGBU",
        description: "TG Style RJ45 Jack Mini-Com, Category 6A, 8 Position 8 Wire, Blue",
        specs: ["Category 6A", "RJ45 Jack", "Mini-Com", "8 Position 8 Wire", "Blue"],
        datasheet: "https://ftp3.syscom.mx/usuarios/ftp/2020/03/03/e9347/CJ6X88TG.pdf?_gl=1*n5u2zi*_gcl_au*MTAyMjI2MjEwNy4xNzU1NTMzNDc0",
        image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/PANDUIT/CJ6X88TGBU/CJ6X88TGBU-l.PNG",
        brand: "PANDUIT"
      },
      {
        model: "UTP28X5BU",
        description: "Cat6A UTP Patch Cable, CM/LSZH, Reduced Diameter (28AWG), Blue, 5ft",
        specs: ["Cat6A", "UTP Patch Cable", "CM/LSZH", "28AWG", "Blue", "5ft"],
        datasheet: "https://ftp3.syscom.mx/usuarios/ftp/2020/09/02/39b0a/106612759.pdf?_gl=1*1puysfw*_gcl_au*MTAyMjI2MjEwNy4xNzU1NTMzNDc0",
        image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/PANDUIT/UTP28X5BU/UTP28X5BU-l.PNG",
        brand: "PANDUIT"
      },
      {
        model: "FOCRZ06Y",
        description: "6-Strand OM4 50/125 Optimized Multimode Fiber Optic Cable, Indoor/Outdoor, Loose Tube 250um, Non-Conductive (Dielectric), OFNR (Riser), Priced Per Meter",
        specs: ["6-Strand", "OM4", "50/125", "Multimode", "Loose Tube", "Non-Conductive", "OFNR (Riser)"],
        datasheet: "https://ftp3.syscom.mx/usuarios/ftp/2020/03/27/40880/FOCRZ06Y.pdf?_gl=1*1puysfw*_gcl_au*MTAyMjI2MjEwNy4xNzU1NTMzNDc0",
        image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/PANDUIT/FOCRZ06Y/FOCRZ06Y-l.PNG",
        brand: "PANDUIT"
      },
      {
        model: "FLCSMCXAQY",
        description: "LC Simplex OptiCam Fiber Optic Connector, Multimode 50/125 OM3/OM4, Pre-polished, Aqua",
        specs: ["LC Simplex", "OptiCam", "Multimode", "50/125", "OM3/OM4", "Pre-polished", "Aqua"],
        datasheet: "https://ftp3.syscom.mx/usuarios/ftp/2019/11/20/dd63f/FLCDMCXAQY.pdf?_gl=1*1puysfw*_gcl_au*MTAyMjI2MjEwNy4xNzU1NTMzNDc0",
        image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/PANDUIT/FLCSMCXAQY/FLCSMCXAQY-l.PNG",
        brand: "PANDUIT"
      },
      {
        model: "FO6CB",
        description: "6-Fiber Fan-Out Kit, For Converting from 250 to 900 Microns, 1 Meter",
        specs: ["6-Fiber", "Fan-Out Kit", "250 to 900 Microns", "1 Meter"],
        datasheet: "https://ftp3.syscom.mx/usuarios/ftp/2020/03/06/98d29/FO12CB.pdf?_gl=1*1puysfw*_gcl_au*MTAyMjI2MjEwNy4xNzU1NTMzNDc0",
        image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/PANDUIT/FO6CB/FO6CB-l.PNG",
        brand: "PANDUIT"
      },
      {
        model: "FAP6WAQDLCZ",
        description: "FAP Fiber Optic Coupler Panel, With 6 LC Duplex Connectors (12 Fibers), For Multimode OM3/OM4 Fiber, Aqua",
        specs: ["FAP Coupler Panel", "6 LC Duplex Connectors", "12 Fibers", "Multimode OM3/OM4", "Aqua"],
        datasheet: "https://ftp3.syscom.mx/usuarios/ftp/2020/03/05/c722c/FAP3WAQDSCZ .pdf?_gl=1*14tdtzv*_gcl_au*MTAyMjI2MjEwNy4xNzU1NTMzNDc0",
        image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/PANDUIT/FAP6WAQDLCZ/FAP6WAQDLCZ-l.PNG",
        brand: "PANDUIT"
      },
      {
        model: "FMT1",
        description: "Fiber Optic Distribution Panel, Accepts 4 QuickNet Cassettes or FAP/FMP Plates with CFAPPBL1 Panel (Not Included), Fixed Tray, Up to 96 Fibers, Black, 1UR",
        specs: ["Fiber Optic Distribution Panel", "4 QuickNet Cassettes", "FAP/FMP Plates", "CFAPPBL1 Panel", "96 Fibers", "Black", "1UR"],
        datasheet: "https://ftp3.syscom.mx/usuarios/ftp/2020/03/03/25b0a/FMT1.pdf?_gl=1*14tdtzv*_gcl_au*MTAyMjI2MjEwNy4xNzU1NTMzNDc0",
        image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/PANDUIT/FMT1/FMT1-l.PNG",
        brand: "PANDUIT"
      },
      {
        model: "CFAPPBL1",
        description: "Fiber Optic Patch Panel, For 4 FAP or FMP Coupler Plates, Black, 1UR",
        specs: ["Fiber Optic Patch Panel", "4 FAP/FMP Coupler Plates", "Black", "1UR"],
        datasheet: "https://ftp3.syscom.mx/usuarios/ftp/2020/03/04/c0050/CFAPPBL1.pdf?_gl=1*14tdtzv*_gcl_au*MTAyMjI2MjEwNy4xNzU1NTMzNDc0",
        image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/PANDUIT/CFAPPBL1/CFAPPBL1-l.PNG",
        brand: "PANDUIT"
      },
      {
        model: "FZ2ERLNLNSNM001",
        description: "Multimode 50/125 OM4 Fiber Optic Jumper, LC-LC Duplex, OFNR (Riser), Aqua, 1 Meters",
        specs: ["Multimode", "50/125", "OM4", "Fiber Jumper", "LC-LC Duplex", "OFNR (Riser)", "Aqua", "1 Meter"],
        datasheet: "https://ftp3.syscom.mx/usuarios/ftp/2020/03/04/025ee/FZ2ERLNLNSNM001.pdf?_gl=1*8hdbeh*_gcl_au*MTAyMjI2MjEwNy4xNzU1NTMzNDc0",
        image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/PANDUIT/FZ2ERLNLNSNM001/FZ2ERLNLNSNM001-l.PNG",
        brand: "PANDUIT"
      }
    ]
  },
  "idf-infrastructure": {
    id: "idf-infrastructure",
    title: "IDF Infrastructure",
    brand: "Panduit & Charofill",
    description: "Professional cabinets, accessories, and ladder racks for organized equipment housing.",
    overview: "Professional IDF infrastructure combining Panduit cabinets and Charofill ladder racks creates an organized, efficient equipment housing solution. Designed for optimal airflow, cable management, and equipment accessibility.",
    features: [
      "Heavy-duty steel construction for durability",
      "Optimized airflow design for equipment cooling",
      "Integrated cable management systems",
      "Flexible mounting options for various equipment",
      "Lockable security features for asset protection",
      "Modular design for future expansion"
    ],
    logo: charofilLogo,
    products: [
      {
        model: "XGL64222B",
        description: "FlexFusion™ XGL (Light) Data Center Cabinet, 42 RU, 600mm Width, 1200mm Depth, Steel Construction, Black",
        specs: ["42U", "600mm Width", "1200mm Depth", "Steel Construction", "Black", "FlexFusion XGL"],
        datasheet: "https://ftp3.syscom.mx/usuarios/ftp/2023/04/05/7d096/FlexFusion XGL.pdf?_gl=1*1raibk8*_gcl_au*MTAyMjI2MjEwNy4xNzU1NTMzNDc0",
        image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/PANDUIT/XGL64222B/XGL64222B-l.PNG",
        brand: "PANDUIT"
      },
      {
        model: "PZWMC18W",
        description: "PanZone 19in Wall Mount Cabinet, Security Window Door, 18 RU, 635mm Depth, Black",
        specs: ["19in Wall Mount", "Security Window Door", "18 RU", "635mm Depth", "Black", "PanZone"],
        datasheet: "https://ftp3.syscom.mx/usuarios/ftp/2019/06/10/d4ea2/D-ZCSP31--WW-ENG-PanZone-NewWllCabnt.pdf?_gl=1*1raibk8*_gcl_au*MTAyMjI2MjEwNy4xNzU1NTMzNDc0",
        image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/PANDUIT/PZWMC18W/PZWMC18W-l.PNG",
        brand: "PANDUIT"
      },
      {
        model: "CPP48HDWBLY",
        description: "Mini-Com Modular Patch Panel (No Connectors), Flat, Unshielded, High Density, 48 ports, 1UR",
        specs: ["48 ports", "Mini-Com", "Modular", "Flat", "Unshielded", "High Density", "1UR"],
        datasheet: "https://ftp3.syscom.mx/usuarios/ftp/2020/03/19/d6d80/CPP48HDWBLY.pdf?_gl=1*1raibk8*_gcl_au*MTAyMjI2MjEwNy4xNzU1NTMzNDc0",
        image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/PANDUIT/CPP48HDWBLY/CPP48HDWBLY-l.PNG",
        brand: "PANDUIT"
      },
      {
        model: "WMPH2E",
        description: "Horizontal PatchLink Cable Manager, Double (Front and Back), Extended Cover, For 19in Rack, 2UR",
        specs: ["Horizontal", "PatchLink", "Cable Manager", "Double", "Extended Cover", "19in Rack", "2UR"],
        datasheet: "https://ftp3.syscom.mx/usuarios/ftp/2018/12/13/3c131/D-RKSP154--WW-ENG-PatchLinkHorizCableMngrs-WEB.pdf?_gl=1*tak9uy*_gcl_au*MTAyMjI2MjEwNy4xNzU1NTMzNDc0",
        image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/PANDUIT/WMPH2E/WMPH2E-l.PNG",
        brand: "PANDUIT"
      },
      {
        model: "P12B01M",
        description: "Basic PDU for Power Distribution, NEMA 5-15P Input Plug, With 12 NEMA 5-20R Outlets, 19in Horizontal Installation, 1UR, 15 Amp, 120 Vac",
        specs: ["Basic PDU", "NEMA 5-15P Input", "12 NEMA 5-20R Outlets", "19in Horizontal", "1UR", "15 Amp", "120 Vac"],
        datasheet: "https://ftp3.syscom.mx/usuarios/ftp/2018/12/20/65109/Spec Sheet.pdf?_gl=1*tak9uy*_gcl_au*MTAyMjI2MjEwNy4xNzU1NTMzNDc0",
        image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/PANDUIT/P12B01M/P12B01M-l.PNG",
        brand: "PANDUIT"
      },
      {
        model: "SR-1906-LH3G",
        description: "6U Wall Cabinet with Tempered Glass Door, 455mm Total Depth, 19'' Rack, Reinforced Steel Black",
        specs: ["6U", "Wall Cabinet", "Tempered Glass Door", "455mm Depth", "19'' Rack", "Reinforced Steel", "Black"],
        datasheet: "https://ftp3.syscom.mx/usuarios/ftp/2025/06/13/dcf84/SR19XXLH3X HOJA DE ESPECIFICACIONES.PDF?_gl=1*1437cgl*_gcl_au*MTAyMjI2MjEwNy4xNzU1NTMzNDc0",
        image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/LINKEDPRO/SR1906LH3G/SR1906LH3G-l.PNG",
        brand: "LINKEDPRO"
      },
      {
        model: "MG-50-433EZ",
        description: "66/200 mm Mesh Type Tray, Electro Zinc Finish, Up to 210 Cat6 Cables, 3 Meter Section",
        specs: ["66/200 mm", "Mesh Type Tray", "Electro Zinc Finish", "210 Cat6 Cables", "3 Meter Section"],
        datasheet: "https://ftp3.syscom.mx/usuarios/ftp/2016/07/27/2e1cc/MG-50-433EZ.pdf?_gl=1*1437cgl*_gcl_au*MTAyMjI2MjEwNy4xNzU1NTMzNDc0",
        image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/CHAROFIL/MG50433EZ/MG50433EZ-l.PNG",
        brand: "CHAROFIL"
      },
      {
        model: "LSS12BLK",
        description: "Straight Section Ladder Tray, 12 in (305 mm) Width, Crossbars at 9 in (229 mm) Intervals, 10 ft (3.05 m) Section, Steel, Black",
        specs: ["12 in Width", "Straight Section", "Ladder Tray", "305 mm", "Crossbars at 229 mm", "10 ft Section", "Steel", "Black"],
        datasheet: "https://ftp3.syscom.mx/usuarios/ftp/2023/11/17/35fc6/Hoja .pdf?_gl=1*1437cgl*_gcl_au*MTAyMjI2MjEwNy4xNzU1NTMzNDc0",
        image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/HOFFMAN/LSS12BLK/LSS12BLK-l.PNG",
        brand: "HOFFMAN"
      }
    ]
  },
  "network-switches": {
    id: "network-switches",
    title: "Network Switches",
    brand: "Cisco",
    description: "Enterprise-grade network switches with PoE+ capabilities for optimal camera performance.",
    overview: "Cisco network switches are specifically designed for surveillance applications, providing reliable power and data transmission to IP cameras. Engineered for performance and ease of management in security environments.",
    features: [
      "PoE+ support for high-power devices",
      "Intelligent port management for camera optimization",
      "Redundant power supply options",
      "Network monitoring and diagnostic tools",
      "Plug-and-play camera integration",
      "Advanced security features for network protection"
    ],
    logo: ciscoLogo,
    products: [
      {
        model: "C1300-24FP-4G",
        description: "Cisco Switch Catalyst 1300, 24 puertos Gigabit Ethernet, PoE+ con 375W totales, 4 puertos SFP Gigabit",
        specs: ["24 Ports", "Gigabit Ethernet", "PoE+ 375W", "4 x 1G SFP", "Managed Layer 3"],
        datasheet: "https://www.cisco.com/c/en/us/products/collateral/switches/catalyst-1300-series-switches/nb-06-cat1300-ser-data-sheet-cte-en.html",
        image: ciscoLogo,
        brand: "Cisco"
      },
      {
        model: "C1200-48P-4X",
        description: "Cisco Switch Catalyst 1200, 48 puertos Gigabit Ethernet, PoE+ con 375W totales, 4 Puertos SFP+ (4x 1G/10G), Incluye cable CAB-16AWG-AC, el Smartnet se adquieren por separado.",
        specs: ["48 Ports", "Gigabit Ethernet", "PoE+ 375W", "4 x 10G SFP+", "Smart Managed Layer 2"],
        datasheet: "https://www.cisco.com/c/en/us/products/collateral/switches/catalyst-1200-series-switches/nb-06-cat1200-ser-data-sheet-cte-en.html",
        image: ciscoLogo,
        brand: "Cisco"
      }
    ]
  },
  "ups-systems": {
    id: "ups-systems",
    title: "UPS Systems",
    brand: "APC",
    description: "Reliable power protection systems ensuring continuous operation during outages.",
    overview: "APC UPS systems provide comprehensive power protection for critical security infrastructure. Designed for reliability and efficiency, these systems ensure continuous operation during power disturbances and outages.",
    features: [
      "Pure sine wave output for sensitive equipment",
      "Extended runtime options for critical systems",
      "Intelligent battery management for longer life",
      "Network management capabilities for remote monitoring",
      "Automatic voltage regulation for power conditioning",
      "Hot-swappable batteries for continuous operation"
    ],
    logo: apcLogo,
    products: [
      {
        model: "APC-SMT1500C",
        description: "1500VA Smart UPS with LCD display",
        specs: ["1500VA/1000W", "Pure Sine Wave", "LCD Display", "Network Card", "2U Rack Mount"],
        datasheet: "https://example.com/apc-smt1500c-datasheet"
      },
      {
        model: "APC-SRT2200XLA",
        description: "2200VA Smart UPS with extended runtime",
        specs: ["2200VA/1980W", "Pure Sine Wave", "LCD Display", "Network Card", "2U Rack Mount"],
        datasheet: "https://example.com/apc-srt2200xla-datasheet"
      },
      {
        model: "APC-SURT5000XLT",
        description: "5000VA Smart UPS for critical infrastructure",
        specs: ["5000VA/4500W", "Pure Sine Wave", "LCD Display", "Network Card", "3U Rack Mount"],
        datasheet: "https://example.com/apc-surt5000xlt-datasheet"
      }
    ]
  }
};

const SolutionDetail = () => {
  const { solutionId } = useParams<{ solutionId: string }>();
  const solution = solutionId ? solutionData[solutionId] : null;

  if (!solution) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-semibold text-foreground mb-4">Solution Not Found</h1>
            <p className="text-muted-foreground mb-8">The requested solution could not be found.</p>
            <Link to="/technical-solution">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Technical Solutions
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto animate-carbon">
          {/* Header */}
          <div className="mb-8">
            <Link
              to="/technical-solution"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Technical Solutions
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 bg-carbon-gray-10 border border-carbon-gray-30 rounded-none flex items-center justify-center p-3">
                <img
                  src={solution.logo}
                  alt={`${solution.brand} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-4xl font-semibold text-foreground mb-2">{solution.title}</h1>
                <p className="text-lg text-primary font-medium">{solution.brand}</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">
              {solution.description}
            </p>
          </div>

          {/* Overview */}
          <Card className="p-8 bg-card border-border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              {solution.overview}
            </p>
          </Card>

          {/* Key Features */}
          <Card className="p-8 bg-card border-border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {solution.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Product Models */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Product Models</h2>

            {solution.products.map((product, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <div className="flex items-start justify-between gap-6">
                  {product.image && (
                    <div className="w-32 h-32 bg-carbon-gray-10 border border-carbon-gray-30 rounded-none flex items-center justify-center p-2 flex-shrink-0">
                      <img
                        src={product.image}
                        alt={`${product.model} product image`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{product.model}</h3>
                      {product.brand && (
                        <span className="text-sm font-medium text-primary bg-carbon-gray-10 px-2 py-1 rounded-none">
                          {product.brand}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-foreground mb-2">Specifications:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {product.specs.map((spec, specIndex) => (
                          <div key={specIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span className="text-sm text-muted-foreground">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <a
                      href={product.datasheet}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <span className="text-sm">Technical Datasheet</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Certified Partner</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Official {solution.brand} certified partner with direct access to technical support and training.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Expert Installation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Factory-trained technicians ensure proper installation and configuration for optimal performance.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Warranty Support</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Comprehensive warranty coverage with extended support options for complete peace of mind.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SolutionDetail;