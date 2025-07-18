
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Locations = () => {
  const { t } = useLanguage();

  const locations = [
    {
      name: "Main Office - Kathmandu",
      address: "Durbar Marg, Kathmandu 44600",
      phone: "+977-1-4123456",
      email: "kathmandu@nepalagrawalsamaj.org",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      type: "main"
    },
    {
      name: "Pokhara Branch",
      address: "Lakeside, Pokhara 33700",
      phone: "+977-61-123456",
      email: "pokhara@nepalagrawalsamaj.org", 
      hours: "Mon-Sat: 10:00 AM - 4:00 PM",
      type: "branch"
    },
    {
      name: "Chitwan Community Center",
      address: "Bharatpur, Chitwan 44200",
      phone: "+977-56-123456",
      email: "chitwan@nepalagrawalsamaj.org",
      hours: "Sun-Fri: 9:00 AM - 3:00 PM",
      type: "community"
    },
    {
      name: "Biratnagar Branch",
      address: "Traffic Chowk, Biratnagar 56613",
      phone: "+977-21-123456", 
      email: "biratnagar@nepalagrawalsamaj.org",
      hours: "Mon-Fri: 9:30 AM - 4:30 PM",
      type: "branch"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-saffron-50 to-emerald-50 language-transition page-enter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-5xl font-bold text-maroon-800 mb-6 font-serif">
            {t('locations.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto language-transition">
            {t('locations.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
          {locations.map((location, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-animated">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-maroon-800 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-saffron-600" />
                    {location.name}
                  </CardTitle>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    location.type === 'main' 
                      ? 'bg-gold-100 text-gold-800'
                      : location.type === 'branch'
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-saffron-100 text-saffron-800'
                  }`}>
                    {location.type === 'main' && t('locations.mainOffice').split(' - ')[0]}
                    {location.type === 'branch' && t('locations.branches').split(' ')[0]}
                    {location.type === 'community' && t('locations.communities').split(' ')[0]}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 mt-1 text-gray-500" />
                  <span className="text-gray-700 text-sm">{location.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700 text-sm">{location.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700 text-sm">{location.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700 text-sm">{location.hours}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-maroon-800 mb-4">Visit Us</h3>
            <p className="text-gray-600 mb-6 language-transition">
              We welcome all community members and visitors. Please feel free to visit any of our locations during operating hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2 text-saffron-600" />
                <span>Multiple Locations</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2 text-emerald-600" />
                <span>Call Ahead</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="h-4 w-4 mr-2 text-gold-600" />
                <span>Regular Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
