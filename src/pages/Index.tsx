
import { useState, useEffect } from "react";
import { Calendar, Users, Heart, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const events = [
    {
      title: "Teej Celebration 2024",
      description: "Traditional Teej festival celebration with cultural programs",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      date: "September 2024"
    },
    {
      title: "Holi Festival",
      description: "Colorful Holi celebration bringing community together",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      date: "March 2024"
    },
    {
      title: "Samuhik Bhoj",
      description: "Community feast strengthening bonds among members",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      date: "January 2024"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [events.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % events.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);

  return (
    <div className="min-h-screen language-transition page-enter">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-saffron-100 via-emerald-50 to-gold-100 py-20 fade-in-up" style={{animationDelay: '0.1s'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left language-transition fade-in-up" style={{animationDelay: '0.2s'}}>
              <h1 className="text-5xl lg:text-6xl font-bold text-maroon-800 mb-6 font-serif slide-in-left">
                {t('home.welcome')}
                <span className="block text-saffron-600 slide-in-right" style={{animationDelay: '0.4s'}}>{t('home.title')}</span>
              </h1>
              <p className="text-xl text-emerald-700 mb-4 font-medium fade-in-up" style={{animationDelay: '0.6s'}}>
                {t('home.subtitle')}
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed language-transition fade-in-up" style={{animationDelay: '0.8s'}}>
                {t('home.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-in-up" style={{animationDelay: '1s'}}>
                <Button asChild className="bg-maroon-600 hover:bg-maroon-700 text-white px-8 py-3 text-lg photo-hover-effect shimmer-effect">
                  <Link to="/membership">
                    {t('home.becomeMember')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-saffron-600 text-saffron-700 hover:bg-saffron-50 px-8 py-3 text-lg photo-hover-effect">
                  <Link to="/about">{t('home.learnMore')}</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center fade-in-up" style={{animationDelay: '0.3s'}}> 
              <div className="relative">
                <img
                  loading="lazy"
                  src="/lovable-uploads/4c8e1252-8fc4-4179-b13a-d4d7a06f9936.png"
                  alt={t('maharaja.name')}
                  className="w-full max-w-md h-auto rounded-lg shadow-2xl border-4 border-gold-300 floating-animation shimmer-effect pulse-glow"
                />
                <div className="absolute -bottom-4 -right-4 bg-saffron-600 text-white p-4 rounded-lg shadow-lg photo-hover-effect language-transition">
                  <p className="font-semibold text-sm">{t('maharaja.name')}</p>
                  <p className="text-xs">{t('home.maharajaCaption')}</p>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white language-transition fade-in-up" style={{animationDelay: '0.5s'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-800 mb-4 font-serif fade-in-up" style={{animationDelay: '0.6s'}}>{t('home.purpose')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto language-transition fade-in-up" style={{animationDelay: '0.7s'}}>
              {t('home.purposeDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            <Card className="border-saffron-200 shadow-lg hover:shadow-xl transition-all duration-300 photo-hover-effect shimmer-effect card-animated">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4 floating-animation">
                  <Users className="h-8 w-8 text-saffron-600" />
                </div>
                <CardTitle className="text-maroon-700 language-transition">{t('home.unity')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 language-transition">
                  {t('home.unityDesc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 photo-hover-effect shimmer-effect card-animated">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 floating-animation" style={{ animationDelay: '1s' }}>
                  <Heart className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-maroon-700 language-transition">{t('home.heritage')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 language-transition">
                  {t('home.heritageDesc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-gold-200 shadow-lg hover:shadow-xl transition-all duration-300 photo-hover-effect shimmer-effect card-animated">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4 floating-animation" style={{ animationDelay: '2s' }}>
                  <Calendar className="h-8 w-8 text-gold-600" />
                </div>
                <CardTitle className="text-maroon-700 language-transition">{t('home.growth')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 language-transition">
                  {t('home.growthDesc')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Carousel */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-saffron-50 language-transition fade-in-up" style={{animationDelay: '0.8s'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-800 mb-4 font-serif fade-in-up" style={{animationDelay: '0.9s'}}>{t('home.events')}</h2>
            <p className="text-lg text-gray-600 language-transition fade-in-up" style={{animationDelay: '1s'}}>
              {t('home.eventsDesc')}
            </p>
          </div>

          <div className="relative fade-in-up" style={{animationDelay: '1.1s'}}>
            <div className="overflow-hidden rounded-xl shadow-2xl shimmer-effect">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {events.map((event, index) => (
                  <div key={index} className="w-full flex-shrink-0 relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-96 object-cover photo-hover-effect"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white language-transition">
                      <h3 className="text-3xl font-bold mb-2">{event.title}</h3>
                      <p className="text-lg mb-2">{event.description}</p>
                      <p className="text-saffron-200 font-medium">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all photo-hover-effect"
            >
              <ChevronLeft className="h-6 w-6 text-maroon-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all photo-hover-effect"
            >
              <ChevronRight className="h-6 w-6 text-maroon-600" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all photo-hover-effect ${
                    index === currentSlide ? "bg-maroon-600 scale-110" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-8 fade-in-up" style={{animationDelay: '1.2s'}}>
            <Button asChild className="bg-saffron-600 hover:bg-saffron-700 text-white px-8 py-3 photo-hover-effect shimmer-effect">
              <Link to="/events">
                {t('home.viewAllEvents')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
