import { useState } from "react";
import Navigation from "@/components/Navigation";
import { MapPin, Layers, Cable, Eye, Camera, Wifi, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import local images for indoor cameras
import topLeftImage from "@/assets/images/interactive-map/indoor-cameras/top-left-2.webp";
import topRightImage from "@/assets/images/interactive-map/indoor-cameras/top-right-2.webp";
import bottomLeftImage from "@/assets/images/interactive-map/indoor-cameras/bottom-left-2.webp";
import bottomRightImage from "@/assets/images/interactive-map/indoor-cameras/bottom-right-2.webp";

// Import local images for ladder racks
import ladderImage from "@/assets/images/interactive-map/ladder-racks/escalerilla.png";

// Import local images for outdoor cameras
import outdoorImage1 from "@/assets/images/interactive-map/outdoor-cameras/01.png";
import outdoorImage2 from "@/assets/images/interactive-map/outdoor-cameras/02.png";
import outdoorImage3 from "@/assets/images/interactive-map/outdoor-cameras/03.png";
import outdoorImage4 from "@/assets/images/interactive-map/outdoor-cameras/04.png";
import outdoorImage5 from "@/assets/images/interactive-map/outdoor-cameras/05.png";
import outdoorImage6 from "@/assets/images/interactive-map/outdoor-cameras/06.png";

// Import local images for fiber optic
import fiberImage1 from "@/assets/images/interactive-map/fiber-optic/01.webp";
import fiberImage2 from "@/assets/images/interactive-map/fiber-optic/02.webp";
import fiberImage3 from "@/assets/images/interactive-map/fiber-optic/03.webp";
import fiberImage4 from "@/assets/images/interactive-map/fiber-optic/04.webp";
import fiberImage5 from "@/assets/images/interactive-map/fiber-optic/05.webp";
import fiberImage6 from "@/assets/images/interactive-map/fiber-optic/06.webp";
import fiberImage7 from "@/assets/images/interactive-map/fiber-optic/07.webp";
import fiberImage8 from "@/assets/images/interactive-map/fiber-optic/08.webp";

// Import local images for special cameras
import specialCameraImage from "@/assets/images/interactive-map/special-cameras/top-left-2.webp";

const InteractiveMap = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const specialties = [
    {
      id: "ladder-racks",
      title: "Ladder Racks",
      icon: Layers,
      description: "Structured cable management system",
      images: [
        ladderImage
      ]
    },
    {
      id: "idf-closets",
      title: "IDF Closets",
      icon: Wifi,
      description: "Intermediate distribution frames",
      images: [
        "idf1", "idf2", "idf3", "idf4", "idf5", "idf6", "idf7", "mdf1"
      ]
    },
    {
      id: "fiber-optic",
      title: "Fiber Optic",
      icon: Cable,
      description: "High-speed network backbone",
      images: [
        fiberImage1,
        fiberImage2,
        fiberImage3,
        fiberImage4,
        fiberImage5,
        fiberImage6,
        fiberImage7,
        fiberImage8
      ]
    },
    {
      id: "indoor-cameras",
      title: "Indoor Cameras",
      icon: Camera,
      description: "Internal surveillance systems",
      images: [
        topLeftImage,
        topRightImage,
        bottomLeftImage,
        bottomRightImage
      ]
    },
    {
      id: "outdoor-cameras",
      title: "Outdoor Cameras",
      icon: Eye,
      description: "External perimeter surveillance",
      images: [
        outdoorImage1,
        outdoorImage2,
        outdoorImage3,
        outdoorImage4,
        outdoorImage5,
        outdoorImage6
      ]
    },
    {
      id: "special-cameras",
      title: "Special Cameras",
      icon: MapPin,
      description: "Specialized surveillance equipment",
      images: [
        specialCameraImage
      ]
    },
  ];

  const selectedSpecialtyData = specialties.find(s => s.id === selectedSpecialty);
  const currentImages = selectedSpecialtyData?.images || [];

  // Standard IDF Rack Configuration - 14U Rack Layout
  const standardIDFRackUnits = [
    { unit: 14, equipment: "FIBER OPTIC", type: "fiber-optic", occupied: true },
    { unit: 13, equipment: "HORIZONTAL CABLE MANAGER", type: "cable-manager", occupied: true },
    { unit: 12, equipment: "HORIZONTAL CABLE MANAGER", type: "cable-manager", occupied: true },
    { unit: 11, equipment: "SWITCH", type: "switch", occupied: true },
    { unit: 10, equipment: "HORIZONTAL CABLE MANAGER", type: "cable-manager", occupied: true },
    { unit: 9, equipment: "HORIZONTAL", type: "cable-manager", occupied: true },
    { unit: 8, equipment: "48 PORT PANEL", type: "patch-panel", occupied: true },
    { unit: 7, equipment: "HORIZONTAL CABLE MANAGER", type: "cable-manager", occupied: true },
    { unit: 6, equipment: "HORIZONTAL CABLE MANAGER", type: "cable-manager", occupied: true },
    { unit: 5, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 4, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 3, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 2, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 1, equipment: "UPS 1500", type: "ups", occupied: true }
  ];

  // Camera counts for each IDF
  const idfCameraCounts = {
    idf1: 0,
    idf2: 15,
    idf3: 21,
    idf4: 14,
    idf5: 32,
    idf6: 6,
    idf7: 24,
    mdf1: 0
  };

  // MDF1 Rack Configuration - 42U Rack Layout
  const mdf1RackUnits = [
    { unit: 42, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 41, equipment: "FIBER OPTIC", type: "fiber-optic", occupied: true },
    { unit: 40, equipment: "FIBER OPTIC", type: "fiber-optic", occupied: true },
    { unit: 39, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 38, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 37, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 36, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 35, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 34, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 33, equipment: "HORIZONTAL CABLE MANAGER", type: "cable-manager", occupied: true },
    { unit: 32, equipment: "SWITCH", type: "switch", occupied: true },
    { unit: 31, equipment: "HORIZONTAL CABLE MANAGER", type: "cable-manager", occupied: true },
    { unit: 30, equipment: "48 PORT PANEL", type: "patch-panel", occupied: true },
    { unit: 29, equipment: "HORIZONTAL CABLE MANAGER", type: "cable-manager", occupied: true },
    { unit: 28, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 27, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 26, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 25, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 24, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 23, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 22, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 21, equipment: "PDU", type: "pdu", occupied: true },
    { unit: 20, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 19, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 18, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 17, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 16, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 15, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 14, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 13, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 12, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 11, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 10, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 9, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 8, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 7, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 6, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 5, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 4, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 3, equipment: "EMPTY", type: "empty", occupied: false },
    { unit: 2, equipment: "UPS 3000", type: "ups", occupied: true },
    { unit: 1, equipment: "UPS 3000", type: "ups", occupied: true }
  ];

  // Function to render IDF rack view
  const renderIDFRackView = (rackId: string) => {
    let rackUnits = [];
    const cameraCount = idfCameraCounts[rackId] || 0;
    
    if (rackId === "mdf1") {
      rackUnits = mdf1RackUnits;
    } else {
      rackUnits = standardIDFRackUnits;
    }
    
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* IDF Number - Centered and Larger */}
          <div className="text-center mb-2">
            <span className="text-3xl font-bold text-foreground">{rackId.toUpperCase()}</span>
            {cameraCount > 0 && (
              <span className="text-lg text-muted-foreground block">({cameraCount} CAMERAS)</span>
            )}
          </div>
          
          {/* Rack Title */}
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            {rackId === "mdf1" ? "42U Rack Configuration" : "14U Rack Configuration"}
          </h3>
            
            {/* Realistic Rack Frame with Side Rails */}
            <div className="relative bg-background border-l-4 border-r-4 border-gray-800 rounded-none">
              {/* Top Rail */}
              <div className="h-4 bg-gray-800"></div>
              
              {/* Rack Units */}
              <div className="divide-y divide-gray-300">
                {rackUnits.map((unit) => (
                  <div
                    key={unit.unit}
                    className={`h-10 flex items-center justify-between px-3 border-b-2 ${
                      unit.occupied
                        ? unit.type === 'ups' ? 'bg-yellow-900/50 border-yellow-600' :
                          unit.type === 'switch' ? 'bg-blue-900/50 border-blue-600' :
                          unit.type === 'patch-panel' ? 'bg-green-900/50 border-green-600' :
                          unit.type === 'fiber-optic' ? 'bg-purple-900/50 border-purple-600' :
                          unit.type === 'pdu' ? 'bg-red-900/50 border-red-600' :
                          'bg-gray-700/50 border-gray-600'
                        : 'bg-gray-800 border-gray-800'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white w-4">U{unit.unit}</span>
                      <span className={`text-sm font-bold ${
                        unit.occupied ? 'text-white' : 'text-gray-400'
                      }`}>
                        {unit.equipment}
                      </span>
                    </div>
                    {unit.occupied && (
                      <div className={`w-2 h-2 rounded-full ${
                        unit.type === 'ups' ? 'bg-yellow-600' :
                        unit.type === 'switch' ? 'bg-blue-600' :
                        unit.type === 'patch-panel' ? 'bg-green-600' :
                        unit.type === 'fiber-optic' ? 'bg-purple-600' :
                        unit.type === 'pdu' ? 'bg-red-600' :
                        'bg-gray-600'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              
              {/* Bottom Rail */}
              <div className="h-4 bg-gray-800"></div>
              
              {/* Side Rails Visual */}
              <div className="absolute top-4 bottom-4 left-0 w-1 bg-gray-700"></div>
              <div className="absolute top-4 bottom-4 right-0 w-1 bg-gray-700"></div>
              
              {/* Rack Mounting Holes */}
              <div className="absolute top-4 bottom-4 left-1 w-3 flex flex-col justify-around">
                {Array.from({ length: rackId === "mdf1" ? 42 : 14 }).map((_, i) => (
                  <div key={i} className="h-1 w-1 bg-gray-900 rounded-full"></div>
                ))}
              </div>
              <div className="absolute top-4 bottom-4 right-4 w-3 flex flex-col justify-around">
                {Array.from({ length: rackId === "mdf1" ? 42 : 14 }).map((_, i) => (
                  <div key={i} className="h-1 w-1 bg-gray-900 rounded-full"></div>
                ))}
              </div>
            </div>
            
            {/* Legend with Colored Backgrounds */}
            <div className="mt-6 grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-600 rounded-full" />
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-bold">UPS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full" />
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-bold">Switch</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-600 rounded-full" />
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-bold">Patch Panel</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-600 rounded-full" />
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded font-bold">Fiber Optic</span>
              </div>
              <div className="flex items-center gap-2 col-span-2">
                <div className="w-3 h-3 bg-gray-600 rounded-full" />
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded font-bold">Cable Manager</span>
              </div>
              {rackId === "mdf1" && (
                <div className="flex items-center gap-2 col-span-2">
                  <div className="w-3 h-3 bg-red-600 rounded-full" />
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-bold">PDU</span>
                </div>
              )}
            </div>
          </div>
        </div>
      );
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  const handleSpecialtyClick = (specialtyId: string) => {
    setSelectedSpecialty(specialtyId);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto animate-carbon">
          <h1 className="text-5xl font-semibold text-foreground mb-4">
            Interactive Installation Map
          </h1>
          
          {/* Engineering Assessment Copy */}
          <div className="mb-16">
            <p className="text-lg text-muted-foreground mb-6 max-w-4xl leading-relaxed">
              Based on comprehensive site visits and detailed engineering assessments, our team of experts has
              determined the optimal configuration for the Jacuzzi facility security infrastructure.
              The following detailed plans represent the culmination of extensive analysis and strategic planning.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl leading-relaxed">
              Our engineers have conducted thorough evaluations of the facility layout, security requirements,
              and operational needs to design a comprehensive surveillance system that provides complete coverage
              and maximum effectiveness. Click on each specialty below to explore detailed installation plans.
            </p>
          </div>

          {/* Specialty Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <Card
                  key={index}
                  className={`p-6 bg-card border-border hover:shadow-lg transition-all duration-150 animate-carbon cursor-pointer ${
                    selectedSpecialty === specialty.id ? 'border-primary' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => handleSpecialtyClick(specialty.id)}
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{specialty.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{specialty.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Modal for Image Carousel */}
          {isModalOpen && selectedSpecialtyData && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={handleOverlayClick}
            >
              {/* Close Button - Top Right Corner */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white h-10 w-10 rounded-none"
                onClick={handleCloseModal}
              >
                <X className="w-5 h-5" />
              </Button>

              {/* Image Counter - Top Left Corner */}
              <div className="absolute top-4 left-4 z-10 bg-black/60 text-white px-3 py-1 rounded-none text-sm">
                {selectedSpecialty === "idf-closets"
                  ? currentImages[currentImageIndex].toUpperCase()
                  : `${currentImageIndex + 1} / ${currentImages.length}`
                }
              </div>

              {/* Content Container - Image or IDF Rack View */}
              <div className="relative w-full h-full flex items-center justify-center">
                {selectedSpecialty === "idf-closets" ? (
                  renderIDFRackView(currentImages[currentImageIndex])
                ) : (
                  <>
                    <img
                      src={currentImages[currentImageIndex]}
                      alt={`${selectedSpecialtyData.title} - Image ${currentImageIndex + 1}`}
                      className="max-w-full max-h-[85vh] object-contain"
                    />
                    
                    {/* Navigation Buttons - Overlay on Image */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white h-12 w-12 rounded-none"
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white h-12 w-12 rounded-none"
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>
                  </>
                )}
              </div>

              {/* Thumbnail Navigation Bottom - No Visible Container */}
              <div className="absolute bottom-4 left-0 right-0 flex gap-2 justify-center p-4">
                {currentImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-none transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/40'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default InteractiveMap;
