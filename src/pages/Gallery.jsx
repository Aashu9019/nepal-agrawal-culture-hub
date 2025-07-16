
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Gallery = () => {
  const { t } = useLanguage();

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
    <div className="min-h-screen bg-gradient-to-b from-saffron-50 to-emerald-50 language-transition page-enter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-5xl font-bold text-maroon-800 mb-6 font-serif">
            {t('gallery.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto language-transition">
            {t('gallery.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {galleryItems.map((item, index) => (
            <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer card-animated">
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

        <div className="text-center mt-12 fade-in-up" style={{animationDelay: '0.6s'}}>
          <button className="bg-maroon-600 hover:bg-maroon-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 photo-hover-effect">
            {t('gallery.viewAll')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
