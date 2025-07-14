
import { useState } from "react";
import { MapPin, Phone, Clock, Globe, Navigation, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Locations = () => {
  const { language, t } = useLanguage();

  const locations = [
    {
      id: 1,
      name: language === 'nepali' ? 'काठमाडौं मुख्यालय' : 'Kathmandu Headquarters',
      address: language === 'nepali' ? 'दरबार मार्ग, काठमाडौं' : 'Durbar Marg, Kathmandu',
      phone: '+977-1-4123456',
      hours: language === 'nepali' ? 'आइतबार - शुक्रबार: बिहान १० - साँझ ६' : 'Sunday - Friday: 10 AM - 6 PM',
      type: 'headquarters',
      rating: 4.8,
      description: language === 'nepali' ? 'नेपाल अग्रवाल समाजको मुख्य कार्यालय' : 'Main office of Nepal Agrawal Samaj',
      featured: true
    },
    {
      id: 2,
      name: language === 'nepali' ? 'पोखरा शाखा' : 'Pokhara Branch',
      address: language === 'nepali' ? 'लेकसाइड, पोखरा' : 'Lakeside, Pokhara',
      phone: '+977-61-123456',
      hours: language === 'nepali' ? 'सोमबार - शनिबार: बिहान ९ - साँझ ५' : 'Monday - Saturday: 9 AM - 5 PM',
      type: 'branch',
      rating: 4.6,
      description: language === 'nepali' ? 'पश्चिमी नेपालका सदस्यहरूका लागि सेवा केन्द्र' : 'Service center for members in western Nepal',
      featured: false
    },
    {
      id: 3,
      name: language === 'nepali' ? 'चितवन सम्पर्क कार्यालय' : 'Chitwan Liaison Office',
      address: language === 'nepali' ? 'भरतपुर, चितवन' : 'Bharatpur, Chitwan',
      phone: '+977-56-123456',
      hours: language === 'nepali' ? 'सोमबार - बुधबार, शुक्रबार: बिहान १० - साँझ ४' : 'Monday - Wednesday, Friday: 10 AM - 4 PM',
      type: 'liaison',
      rating: 4.4,
      description: language === 'nepali' ? 'मध्य नेपालका सदस्यहरूका लागि सम्पर्क कार्यालय' : 'Liaison office for members in central Nepal',
      featured: false
    },
    {
      id: 4,
      name: language === 'nepali' ? 'वीरगञ्ज केन्द्र' : 'Birgunj Center',
      address: language === 'nepali' ? 'अदर्श नगर, वीरगञ्ज' : 'Adarsh Nagar, Birgunj',
      phone: '+977-51-123456',
      hours: language === 'nepali' ? 'आइतबार - बिहीबार: बिहान ९ - साँझ ५' : 'Sunday - Thursday: 9 AM - 5 PM',
      type: 'center',
      rating: 4.5,
      description: language === 'nepali' ? 'सीमावर्ती क्षेत्रका सदस्यहरूका लागि सेवा केन्द्र' : 'Service center for members in border areas',
      featured: true
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'headquarters': return 'bg-maroon-100 text-maroon-800';
      case 'branch': return 'bg-saffron-100 text-saffron-800';
      case 'liaison': return 'bg-emerald-100 text-emerald-800';
      case 'center': return 'bg-gold-100 text-gold-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    if (language === 'nepali') {
      switch (type) {
        case 'headquarters': return 'मुख्यालय';
        case 'branch': return 'शाखा';
        case 'liaison': return 'सम्पर्क कार्यालय';
        case 'center': return 'केन्द्र';
        default: return type;
      }
    }
    switch (type) {
      case 'headquarters': return 'Headquarters';
      case 'branch': return 'Branch';
      case 'liaison': return 'Liaison Office';
      case 'center': return 'Center';
      default: return type;
    }
  };

  const featuredLocations = locations.filter(location => location.featured);
  const regularLocations = locations.filter(location => !location.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 via-white to-emerald-50 page-enter">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-800 to-maroon-900 text-white animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 font-serif animate-fade-in">
              {language === 'nepali' ? 'हाम्रा स्थानहरू' : 'Our Locations'}
            </h1>
            <p className="text-xl text-saffron-200 mb-4 nepali-text animate-fade-in" style={{animationDelay: '0.2s'}}>
              {language === 'nepali' ? 'स्थानहरू र सम्पर्क विवरण' : 'Locations & Contact Details'}
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
              {language === 'nepali' 
                ? 'नेपाल भरि फैलिएका हाम्रा कार्यालयहरू र सेवा केन्द्रहरूको जानकारी पाउनुहोस्।' 
                : 'Find information about our offices and service centers located across Nepal.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Featured Locations */}
      {featuredLocations.length > 0 && (
        <section className="py-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-maroon-800 mb-8 font-serif">
              {language === 'nepali' ? 'मुख्य स्थानहरू' : 'Main Locations'}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 stagger-children">
              {featuredLocations.map((location) => (
                <Card key={location.id} className="overflow-hidden shadow-xl border-gold-200 hover:shadow-2xl card-animated">
                  <div className="bg-gradient-to-r from-saffron-100 to-gold-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={getTypeColor(location.type)}>
                        <MapPin className="h-3 w-3 mr-1" />
                        {getTypeLabel(location.type)}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{location.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-maroon-800 mb-3 font-serif">
                      {location.name}
                    </CardTitle>
                    <CardDescription className="text-gray-700 text-base leading-relaxed">
                      {location.description}
                    </CardDescription>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-maroon-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">{language === 'nepali' ? 'ठेगाना' : 'Address'}</p>
                          <p className="text-gray-600">{location.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Phone className="h-5 w-5 text-emerald-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">{language === 'nepali' ? 'फोन' : 'Phone'}</p>
                          <p className="text-gray-600">{location.phone}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-saffron-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">{language === 'nepali' ? 'समय' : 'Hours'}</p>
                          <p className="text-gray-600">{location.hours}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button className="flex-1 bg-maroon-600 hover:bg-maroon-700 text-white btn-animated">
                        <Navigation className="h-4 w-4 mr-2" />
                        {language === 'nepali' ? 'दिशा निर्देश' : 'Get Directions'}
                      </Button>
                      <Button variant="outline" className="flex-1 border-saffron-300 text-saffron-700 hover:bg-saffron-50 btn-animated">
                        <Phone className="h-4 w-4 mr-2" />
                        {language === 'nepali' ? 'फोन गर्नुहोस्' : 'Call'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Locations */}
      <section className="py-12 animate-fade-in" style={{animationDelay: '0.8s'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-maroon-800 mb-8 font-serif">
            {language === 'nepali' ? 'सबै स्थानहरू' : 'All Locations'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {regularLocations.map((location) => (
              <Card key={location.id} className="shadow-lg hover:shadow-xl card-animated border-saffron-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getTypeColor(location.type)}>
                      <MapPin className="h-3 w-3 mr-1" />
                      {getTypeLabel(location.type)}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs">{location.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-maroon-700 font-serif">
                    {location.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {location.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{location.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{location.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600 text-xs">{location.hours}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-saffron-300 text-saffron-700 hover:bg-saffron-50 btn-animated"
                    >
                      <Navigation className="h-3 w-3 mr-1" />
                      {language === 'nepali' ? 'दिशा' : 'Directions'}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-emerald-300 text-emerald-700 hover:bg-emerald-50 btn-animated"
                    >
                      <Phone className="h-3 w-3 mr-1" />
                      {language === 'nepali' ? 'फोन' : 'Call'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-saffron-100 to-emerald-100 animate-fade-in" style={{animationDelay: '1s'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-maroon-800 mb-4 font-serif">
            {language === 'nepali' ? 'सम्पर्कमा रहनुहोस्' : 'Stay Connected'}
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            {language === 'nepali' 
              ? 'कुनै प्रश्न वा सहायता चाहिन्छ? हामीलाई सम्पर्क गर्नुहोस्।'
              : 'Have questions or need assistance? Get in touch with us.'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-maroon-600 hover:bg-maroon-700 text-white px-8 btn-animated">
              <Globe className="h-4 w-4 mr-2" />
              {language === 'nepali' ? 'सम्पर्क गर्नुहोस्' : 'Contact Us'}
            </Button>
            <Button variant="outline" className="border-saffron-300 text-saffron-700 hover:bg-saffron-50 px-8 btn-animated">
              <MapPin className="h-4 w-4 mr-2" />
              {language === 'nepali' ? 'नक्सा हेर्नुहोस्' : 'View Map'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
