
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

export const Events = () => {
  const events = [
    {
      title: "Diwali Celebration 2024",
      date: "November 15, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Community Hall, Kathmandu",
      description: "Join us for a grand Diwali celebration with traditional rituals, cultural programs, and feast",
      image: "bg-gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      title: "Annual General Meeting",
      date: "December 10, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Hotel Annapurna, Durbar Marg",
      description: "Important community meeting to discuss plans and elect new committee members",
      image: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      title: "Youth Development Workshop",
      date: "January 20, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Tinkune Community Center",
      description: "Career guidance and skill development workshop for young community members",
      image: "bg-gradient-to-br from-green-400 to-green-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">
            Upcoming <span className="text-yellow-600">Events</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay connected with our community through various events and gatherings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
              <div className={`h-32 ${event.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                  <Calendar className="h-5 w-5 text-red-600" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-3 group-hover:text-red-600 transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-red-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {event.description}
                </p>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-red-200 text-red-600 hover:bg-red-50">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};
