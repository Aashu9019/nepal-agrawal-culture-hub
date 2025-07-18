
import { Crown, Users, Heart, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Crown,
      title: "about.royalHeritage",
      description: "about.royalHeritageDesc"
    },
    {
      icon: Users,
      title: "about.communityUnity",
      description: "about.communityUnityDesc"
    },
    {
      icon: Heart,
      title: "about.culturalPreservation",
      description: "about.culturalPreservationDesc"
    },
    {
      icon: Star,
      title: "about.socialWelfare",
      description: "about.socialWelfareDesc"
    }
  ];

  const leaders = [
    {
      name: "Ram Prakash Agrawal",
      position: "President",
      gotra: "Garg",
      experience: "15+ years community service"
    },
    {
      name: "Sita Devi Agrawal",
      position: "Vice President",
      gotra: "Bhardwaj",
      experience: "Cultural program coordinator"
    },
    {
      name: "Mohan Lal Agrawal",
      position: "Secretary",
      gotra: "Kashyap",
      experience: "Business community leader"
    },
    {
      name: "Kamala Agrawal",
      position: "Treasurer",
      gotra: "Vashishtha",
      experience: "Financial management expert"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 via-white to-emerald-50 language-transition">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-800 to-maroon-900 text-white animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 font-serif animate-fade-in">{t('about.title')}</h1>
            <p className="text-xl text-saffron-200 mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>{t('about.subtitle')}</p>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed language-transition animate-fade-in" style={{animationDelay: '0.4s'}}>
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Maharaja Agrasen Section */}
      <section className="py-16 animate-fade-in" style={{animationDelay: '0.2s'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <img
                src="/lovable-uploads/4c8e1252-8fc4-4179-b13a-d4d7a06f9936.png"
                alt={t('maharaja.name')}
                className="w-full max-w-lg mx-auto rounded-lg shadow-2xl border-4 border-gold-300 animate-float hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="language-transition animate-fade-in" style={{animationDelay: '0.4s'}}>
              <h2 className="text-4xl font-bold text-maroon-800 mb-6 font-serif">{t('about.maharaja')}</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="animate-fade-in" style={{animationDelay: '0.5s'}}>
                  {t('about.maharajaDesc1')}
                </p>
                <p className="animate-fade-in" style={{animationDelay: '0.6s'}}>
                  {t('about.maharajaDesc2')}
                </p>
                <p className="animate-fade-in" style={{animationDelay: '0.7s'}}>
                  {t('about.maharajaDesc3')}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 animate-fade-in" style={{animationDelay: '0.8s'}}>
                <Badge className="bg-saffron-100 text-saffron-800 px-3 py-1 hover:scale-105 transition-transform">Non-Violence</Badge>
                <Badge className="bg-emerald-100 text-emerald-800 px-3 py-1 hover:scale-105 transition-transform">Equality</Badge>
                <Badge className="bg-gold-100 text-gold-800 px-3 py-1 hover:scale-105 transition-transform">Prosperity</Badge>
                <Badge className="bg-maroon-100 text-maroon-800 px-3 py-1 hover:scale-105 transition-transform">Unity</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-maroon-800 mb-4 font-serif">{t('about.values')}</h2>
            <p className="text-lg text-gray-600 language-transition">
              {t('about.valuesDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-saffron-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-animated">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-saffron-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    <value.icon className="h-8 w-8 text-maroon-600" />
                  </div>
                  <CardTitle className="text-maroon-700 language-transition">{t(value.title)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 language-transition">
                    {t(value.description)}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History in Nepal */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-saffron-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-maroon-800 mb-4 font-serif">Our History in Nepal</h2>
            <p className="text-lg text-gray-600">
              The journey of Agrawal community in the land of mountains
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 stagger-children">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-saffron-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-maroon-700 mb-4">Early Settlement</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Agrawal community began settling in Nepal during the medieval period, primarily 
                  engaging in trade and commerce along the ancient trade routes between India and Tibet. 
                  Many families established themselves in the Kathmandu Valley and other major trading centers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-emerald-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-maroon-700 mb-4">Modern Era</h3>
                <p className="text-gray-700 leading-relaxed">
                  In the 20th century, the Agrawal community in Nepal grew significantly, contributing 
                  to various sectors including business, education, and social services. The need for 
                  organized community support led to the formation of Nepal Agrawal Samaj.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-gold-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-maroon-700 mb-4">Present Day</h3>
                <p className="text-gray-700 leading-relaxed">
                  Today, Nepal Agrawal Samaj serves hundreds of families across the country, organizing 
                  cultural events, providing community support, and maintaining our rich traditions while 
                  embracing Nepal's diverse cultural landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-maroon-800 mb-4 font-serif">Our Leadership</h2>
            <p className="text-lg text-gray-600">
              Dedicated individuals serving our community with passion and commitment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {leaders.map((leader, index) => (
              <Card key={index} className="text-center border-maroon-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-animated">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-maroon-100 to-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                    <Users className="h-10 w-10 text-maroon-600" />
                  </div>
                  <CardTitle className="text-maroon-700">{leader.name}</CardTitle>
                  <Badge className="bg-saffron-100 text-saffron-800 mx-auto hover:scale-105 transition-transform">{leader.position}</Badge>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Gotra:</span> {leader.gotra}
                  </p>
                  <p className="text-sm text-gray-600">{leader.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
