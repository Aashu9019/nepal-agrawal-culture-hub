
import { Card } from "@/components/ui/card";

export const Gallery = () => {
  const galleryItems = [
    {
      title: "Diwali Festival 2023",
      image: "bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400",
      category: "Cultural Events"
    },
    {
      title: "Community Service Day",
      image: "bg-gradient-to-br from-green-400 via-teal-400 to-blue-400",
      category: "Social Service"
    },
    {
      title: "Youth Workshop",
      image: "bg-gradient-to-br from-purple-400 via-pink-400 to-red-400",
      category: "Education"
    },
    {
      title: "Annual Gathering",
      image: "bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400",
      category: "Community"
    },
    {
      title: "Cultural Performance",
      image: "bg-gradient-to-br from-red-400 via-pink-400 to-purple-400",
      category: "Arts & Culture"
    },
    {
      title: "Business Meet",
      image: "bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600",
      category: "Business"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-red-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">
            Photo <span className="text-yellow-600">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Capturing memories and moments from our community events and celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer">
              <div className={`h-64 ${item.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-end">
                  <div className="p-6 text-white w-full">
                    <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full mb-2 inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};
