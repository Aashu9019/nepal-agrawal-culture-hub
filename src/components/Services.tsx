
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase, GraduationCap, HandHeart, Home, Users2 } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <GraduationCap className="h-10 w-10 text-blue-600" />,
      title: "Education Support",
      description: "Scholarships and educational guidance for community students",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Briefcase className="h-10 w-10 text-green-600" />,
      title: "Business Network",
      description: "Connecting entrepreneurs and business opportunities",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <HandHeart className="h-10 w-10 text-red-600" />,
      title: "Social Welfare",
      description: "Community support programs and charitable initiatives",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Home className="h-10 w-10 text-yellow-600" />,
      title: "Cultural Events",
      description: "Traditional festivals and cultural celebrations",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Users2 className="h-10 w-10 text-purple-600" />,
      title: "Community Connect",
      description: "Bringing families and individuals together",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <BookOpen className="h-10 w-10 text-indigo-600" />,
      title: "Heritage Preservation",
      description: "Documenting and sharing our cultural history",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-red-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">
            Our <span className="text-yellow-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive support to our community members through various programs and initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 bg-white overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <CardContent className="p-6">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <Button variant="outline" size="sm" className="border-red-200 text-red-600 hover:bg-red-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Become a Member
          </Button>
        </div>
      </div>
    </section>
  );
};
