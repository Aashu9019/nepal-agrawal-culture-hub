
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Mountain, Star, Users } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Community Unity",
      description: "Fostering strong bonds and mutual support among all members"
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Cultural Heritage",
      description: "Preserving and promoting our rich Agrawal traditions"
    },
    {
      icon: <Mountain className="h-8 w-8 text-blue-600" />,
      title: "Himalayan Values",
      description: "Embodying the strength and wisdom of the mountains"
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-600" />,
      title: "Excellence",
      description: "Striving for excellence in all our endeavors"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">
            About Our <span className="text-yellow-600">Community</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nepal Agrawal Samaj is a vibrant community organization dedicated to preserving our cultural heritage 
            while embracing progress and unity. We serve as a bridge between tradition and modernity, 
            fostering growth and solidarity among the Agrawal community in Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-red-50">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-red-100 leading-relaxed">
                To create a unified platform that celebrates our Agrawal heritage, supports community members 
                in their personal and professional growth, and contributes meaningfully to Nepal's development 
                while maintaining our cultural identity.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-full">
                <Heart className="h-16 w-16 text-yellow-300 mx-auto mb-2" />
                <p className="text-sm font-medium">Unity in Diversity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
