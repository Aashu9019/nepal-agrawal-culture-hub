
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Events = () => {
  const { t } = useLanguage();

  const upcomingEvents = [
    {
      title: "Diwali Celebration 2024",
      date: "November 1, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Community Hall, Kathmandu",
      description: "Join us for a grand Diwali celebration with traditional rituals, cultural programs, and feast.",
      image: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8"
    },
    {
      title: "Annual General Meeting",
      date: "December 15, 2024", 
      time: "2:00 PM - 5:00 PM",
      location: "Hotel Annapurna, Durbar Marg",
      description: "Important community meeting to discuss annual plans and elect new committee members.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865"
    }
  ];

  const pastEvents = [
    {
      title: "Teej Festival 2024",
      date: "September 2024",
      description: "Traditional Teej celebration with cultural programs and community feast.",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92"
    },
    {
      title: "Holi Celebration 2024", 
      date: "March 2024",
      description: "Colorful Holi festival bringing the community together in celebration.",
      image: "https://images.unsplash.com/photo-1489336399864-52af90dc9116"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-saffron-50 to-emerald-50 language-transition page-enter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-5xl font-bold text-maroon-800 mb-6 font-serif">
            {t('events.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto language-transition">
            {t('events.description')}
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-20 fade-in-up" style={{animationDelay: '0.2s'}}>
          <h2 className="text-3xl font-bold text-maroon-700 mb-8 text-center">
            {t('events.upcoming')}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 stagger-children">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-animated">
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover photo-hover-effect"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-saffron-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Upcoming
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-maroon-800">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-saffron-600" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-emerald-600" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-gold-600" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  <Button className="w-full bg-maroon-600 hover:bg-maroon-700 text-white mt-4">
                    {t('events.register')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section className="fade-in-up" style={{animationDelay: '0.4s'}}>
          <h2 className="text-3xl font-bold text-maroon-700 mb-8 text-center">
            {t('events.past')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
            {pastEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-animated">
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover photo-hover-effect"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-maroon-800">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Calendar className="h-4 w-4 mr-2 text-saffron-600" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
