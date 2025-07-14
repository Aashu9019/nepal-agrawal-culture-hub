
import { Button } from "@/components/ui/button";
import { ArrowDown, Heart, Users } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Nepal-inspired gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      
      {/* Mountain silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-red-900/80 to-transparent">
        <svg viewBox="0 0 1200 300" className="absolute bottom-0 w-full h-full text-red-900/60 fill-current">
          <path d="M0,300 L0,150 L200,50 L400,120 L600,30 L800,90 L1000,60 L1200,100 L1200,300 Z" />
        </svg>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Heart className="h-5 w-5 text-red-300" />
            <span className="text-sm font-medium">स्वागतम्</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight">
          <span className="bg-gradient-to-r from-yellow-200 to-orange-300 bg-clip-text text-transparent">
            Nepal Agrawal
          </span>
          <br />
          <span className="text-white">Samaj</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-red-100 animate-fade-in max-w-2xl mx-auto leading-relaxed">
          Preserving our rich heritage, fostering unity, and building a stronger community together
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-red-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Users className="mr-2 h-5 w-5" />
            Join Our Community
          </Button>
          <Button variant="outline" size="lg" className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-3 rounded-full">
            Learn More
          </Button>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="h-8 w-8 mx-auto text-white/70" />
        </div>
      </div>
    </section>
  );
};
