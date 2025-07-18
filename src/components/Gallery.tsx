
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GalleryModal } from "./GalleryModal";

export const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const galleryItems = [
    {
      id: 1,
      title: "Diwali Festival 2023",
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop",
      category: "Cultural Events",
      description: "Grand celebration of lights with traditional rituals and community gathering"
    },
    {
      id: 2,
      title: "Community Service Day",
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
      category: "Social Service",
      description: "Volunteers working together to serve the community"
    },
    {
      id: 3,
      title: "Youth Workshop",
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop",
      category: "Education",
      description: "Skill development workshop for young community members"
    },
    {
      id: 4,
      title: "Annual Gathering",
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop",
      category: "Community",
      description: "Annual community meeting bringing families together"
    },
    {
      id: 5,
      title: "Cultural Performance",
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
      category: "Arts & Culture",
      description: "Traditional dance and music performances"
    },
    {
      id: 6,
      title: "Business Meet",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      category: "Business",
      description: "Networking event for community business leaders"
    },
    {
      id: 7,
      title: "Holi Celebration",
      src: "https://images.unsplash.com/photo-1583796882585-7a5ca1eac67d?w=800&h=600&fit=crop",
      category: "Cultural Events",
      description: "Colorful festival of colors celebration"
    },
    {
      id: 8,
      title: "Educational Seminar",
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
      category: "Education",
      description: "Educational seminar on career development"
    }
  ];

  const categories = ["All", ...Array.from(new Set(galleryItems.map(item => item.category)))];

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (index: number) => {
    const actualIndex = galleryItems.findIndex(item => item.id === filteredItems[index].id);
    setSelectedImageIndex(actualIndex);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const navigateModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-red-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">
            Photo <span className="text-yellow-600">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Capturing memories and moments from our community events and celebrations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
          {categories.map((category) => (
            <Badge
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-white text-red-600 border border-red-200 hover:bg-red-50"
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden cursor-pointer card-animated"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 mb-2 text-xs">
                    {item.category}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200 opacity-90">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            View Full Gallery
          </button>
        </div>
      </div>

      {/* Modal */}
      <GalleryModal
        isOpen={selectedImageIndex !== null}
        onClose={closeModal}
        images={galleryItems}
        currentIndex={selectedImageIndex || 0}
        onNavigate={navigateModal}
      />
    </section>
  );
};
