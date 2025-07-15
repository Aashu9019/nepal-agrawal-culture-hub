
import { useState } from "react";
import { Calendar, User, Eye, Search, Tag, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Gallery = () => {
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

  const galleryItems = [
    {
      id: 1,
      title: language === 'en' ? 'Diwali Festival 2024' : 'दिवाली उत्सव २०२४',
      description: language === 'en' ? 'Grand Diwali celebration with traditional dance, cultural programs, and feast' : 'परम्परागत नृत्य, सांस्कृतिक कार्यक्रम र दावत सहितको भव्य दिवाली उत्सव',
      date: "2024-11-15",
      location: language === 'en' ? 'Community Hall, Kathmandu' : 'सामुदायिक हल, काठमाडौं',
      category: "cultural",
      views: 1250,
      image: "bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400",
      featured: true
    },
    {
      id: 2,
      title: language === 'en' ? 'Community Service Day' : 'सामुदायिक सेवा दिवस',
      description: language === 'en' ? 'Community members came together for service activities' : 'समुदायका सदस्यहरूले मिलेर सेवाकार्यमा भाग लिएको दिन',
      date: "2024-10-20",
      location: language === 'en' ? 'Various Locations' : 'विभिन्न स्थानहरू',
      category: "service",
      views: 890,
      image: "bg-gradient-to-br from-green-400 via-teal-400 to-blue-400",
      featured: false
    },
    {
      id: 3,
      title: language === 'en' ? 'Youth Workshop' : 'युवा कार्यशाला',
      description: language === 'en' ? 'Skill development and career guidance for young members' : 'युवा सदस्यहरूका लागि सीप विकास र क्यारियर मार्गदर्शन',
      date: "2024-12-01",
      location: language === 'en' ? 'Youth Center, Lalitpur' : 'युवा केन्द्र, ललितपुर',
      category: "education",
      views: 670,
      image: "bg-gradient-to-br from-purple-400 via-pink-400 to-red-400",
      featured: true
    },
    {
      id: 4,
      title: language === 'en' ? 'Annual Gathering' : 'वार्षिक भेला',
      description: language === 'en' ? 'Annual community gathering where all members come together' : 'सबै सदस्यहरू एकसाथ आउने वार्षिक सामुदायिक भेला',
      date: "2025-01-15",
      location: language === 'en' ? 'Hotel Annapurna, Kathmandu' : 'होटल अन्नपूर्ण, काठमाडौं',
      category: "community",
      views: 1500,
      image: "bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400",
      featured: true
    },
    {
      id: 5,
      title: language === 'en' ? 'Cultural Performance' : 'सांस्कृतिक प्रदर्शन',
      description: language === 'en' ? 'Traditional dance and music by community members' : 'समुदायका सदस्यहरूद्वारा परम्परागत नृत्य र संगीत',
      date: "2024-11-25",
      location: language === 'en' ? 'Art Center, Bhaktapur' : 'कला केन्द्र, भक्तपुर',
      category: "cultural",
      views: 980,
      image: "bg-gradient-to-br from-red-400 via-pink-400 to-purple-400",
      featured: false
    },
    {
      id: 6,
      title: language === 'en' ? 'Business Meet' : 'व्यापार भेटघाट',
      description: language === 'en' ? 'Business networking opportunity for members' : 'सदस्यहरूका लागि व्यापार नेटवर्किंग अवसर',
      date: "2024-12-20",
      location: language === 'en' ? 'Business Center, Kathmandu' : 'व्यापार केन्द्र, काठमाडौं',
      category: "business",
      views: 760,
      image: "bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600",
      featured: false
    }
  ];

  const filteredItems = galleryItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'en' ? 'en-US' : 'ne-NP', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'cultural': return 'bg-saffron-100 text-saffron-800';
      case 'service': return 'bg-emerald-100 text-emerald-800';
      case 'business': return 'bg-maroon-100 text-maroon-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = (category: string) => {
    if (language === 'en') {
      switch (category) {
        case 'cultural': return 'Cultural';
        case 'service': return 'Service';
        case 'business': return 'Business';
        default: return category;
      }
    } else {
      switch (category) {
        case 'cultural': return 'सांस्कृतिक';
        case 'service': return 'सेवा';
        case 'business': return 'व्यापार';
        default: return category;
      }
    }
  };

  const featuredItems = filteredItems.filter(item => item.featured);
  const regularItems = filteredItems.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 via-white to-emerald-50 page-enter">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-800 to-maroon-900 text-white animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 font-serif animate-fade-in">
              {t('gallery.title')}
            </h1>
            <p className="text-xl text-saffron-200 mb-4 nepali-text animate-fade-in" style={{animationDelay: '0.2s'}}>
              {t('gallery.subtitle')}
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
              {t('gallery.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder={t('gallery.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-saffron-300 focus:border-saffron-500 smooth-transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      {featuredItems.length > 0 && (
        <section className="py-12 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-maroon-800 mb-8 font-serif">
              {t('gallery.featured')}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 stagger-children">
              {featuredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden shadow-xl border-gold-200 hover:shadow-2xl card-animated photo-hover">
                  <div className={`h-64 ${item.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4 space-y-2">
                      <Badge className={getCategoryColor(item.category)}>
                        <Tag className="h-3 w-3 mr-1" />
                        {getCategoryLabel(item.category)}
                      </Badge>
                      <Badge className="bg-gold-500 text-white block">
                        {t('gallery.featuredBadge')}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(item.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{item.views} {t('gallery.views')}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-maroon-600 hover:bg-maroon-700 text-white btn-animated"
                    >
                      {t('gallery.viewDetails')}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Gallery */}
      <section className="py-12 animate-fade-in" style={{animationDelay: '1s'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-maroon-800 mb-8 font-serif">
            {t('gallery.allPhotos')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {regularItems.map((item) => (
              <Card key={item.id} className="shadow-lg hover:shadow-xl card-animated photo-hover border-saffron-200">
                <div className={`h-48 ${item.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className={getCategoryColor(item.category)}>
                      <Tag className="h-3 w-3 mr-1" />
                      {getCategoryLabel(item.category)}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="space-y-1 text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(item.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{item.views} {t('gallery.views')}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-saffron-300 text-saffron-700 hover:bg-saffron-50 btn-animated"
                  >
                    {t('gallery.viewPhoto')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <p className="text-lg text-gray-600">
                {t('gallery.noResults')}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
