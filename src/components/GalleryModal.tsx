
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{
    id: number;
    src: string;
    title: string;
    category: string;
    description?: string;
  }>;
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const GalleryModal = ({ isOpen, onClose, images, currentIndex, onNavigate }: GalleryModalProps) => {
  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    onNavigate(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    onNavigate(newIndex);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center animate-fade-in">
      <div className="relative max-w-7xl max-h-screen p-4">
        {/* Close button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full p-2"
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Navigation buttons */}
        <Button
          onClick={goToPrevious}
          variant="ghost"
          size="sm"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full p-3"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>

        <Button
          onClick={goToNext}
          variant="ghost"
          size="sm"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full p-3"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>

        {/* Image */}
        <div className="flex flex-col items-center">
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-scale-in"
            loading="lazy"
          />
          
          {/* Image info */}
          <div className="mt-4 text-center text-white max-w-2xl animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-bold mb-2">{currentImage.title}</h3>
            <p className="text-yellow-300 text-sm mb-2">{currentImage.category}</p>
            {currentImage.description && (
              <p className="text-gray-300 text-sm">{currentImage.description}</p>
            )}
          </div>
        </div>

        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};
