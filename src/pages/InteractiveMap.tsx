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
        "https://via.placeholder.com/800x600/4589FF/FFFFFF?text=IDF+Closet+1",
        "https://via.placeholder.com/800x600/4589FF/FFFFFF?text=IDF+Closet+2",
        "https://via.placeholder.com/800x600/4589FF/FFFFFF?text=IDF+Closet+3"
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
        "https://via.placeholder.com/800x600/393939/FFFFFF?text=Special+Camera+1",
        "https://via.placeholder.com/800x600/393939/FFFFFF?text=Special+Camera+2",
        "https://via.placeholder.com/800x600/393939/FFFFFF?text=Special+Camera+3"
      ]
    },
  ];

  const selectedSpecialtyData = specialties.find(s => s.id === selectedSpecialty);
  const currentImages = selectedSpecialtyData?.images || [];

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
                {currentImageIndex + 1} / {currentImages.length}
              </div>

              {/* Floating Image Container - No Visible Border */}
              <div className="relative w-full h-full flex items-center justify-center">
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
