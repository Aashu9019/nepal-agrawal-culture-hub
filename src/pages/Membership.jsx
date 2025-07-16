
import { Check, Users, Crown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Membership = () => {
  const { t } = useLanguage();

  const membershipTypes = [
    {
      name: "Regular Member",
      price: "NPR 2,000/year",
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      benefits: [
        "Access to all community events",
        "Monthly newsletter subscription", 
        "Voting rights in general meetings",
        "Access to community support services",
        "Networking opportunities"
      ],
      popular: false
    },
    {
      name: "Family Member", 
      price: "NPR 5,000/year",
      icon: <Crown className="h-8 w-8 text-gold-600" />,
      benefits: [
        "All Regular Member benefits",
        "Coverage for spouse and children",
        "Priority event registration",
        "Family event discounts",
        "Educational support programs",
        "Business networking events"
      ],
      popular: true
    },
    {
      name: "Lifetime Member",
      price: "NPR 50,000 (One-time)",
      icon: <Star className="h-8 w-8 text-purple-600" />,
      benefits: [
        "All Family Member benefits",
        "Permanent membership status",
        "Special recognition privileges",
        "Legacy family inclusion",
        "Advisory committee eligibility",
        "Exclusive lifetime member events"
      ],
      popular: false
    }
  ];

  const benefits = [
    "Cultural Event Participation",
    "Educational Scholarships", 
    "Business Networking",
    "Community Support Services",
    "Heritage Preservation Programs",
    "Youth Development Initiatives"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-saffron-50 to-emerald-50 language-transition page-enter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-5xl font-bold text-maroon-800 mb-6 font-serif">
            {t('membership.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto language-transition">
            {t('membership.description')}
          </p>
        </div>

        {/* Membership Benefits */}
        <section className="mb-20 fade-in-up" style={{animationDelay: '0.2s'}}>
          <h2 className="text-3xl font-bold text-maroon-700 mb-8 text-center">
            {t('membership.benefits')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-l-4 border-l-saffron-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-animated">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Membership Types */}
        <section className="mb-20 fade-in-up" style={{animationDelay: '0.4s'}}>
          <h2 className="text-3xl font-bold text-maroon-700 mb-8 text-center">
            {t('membership.types')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {membershipTypes.map((type, index) => (
              <Card key={index} className={`relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-animated ${
                type.popular ? 'border-2 border-gold-400' : ''
              }`}>
                {type.popular && (
                  <div className="absolute top-0 right-0 bg-gold-500 text-white px-4 py-1 text-sm font-semibold">
                    Popular
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl text-maroon-800">{type.name}</CardTitle>
                  <div className="text-3xl font-bold text-saffron-600 mt-2">{type.price}</div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${
                    type.popular 
                      ? 'bg-gold-600 hover:bg-gold-700' 
                      : 'bg-maroon-600 hover:bg-maroon-700'
                  } text-white`}>
                    {t('membership.apply')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="bg-gradient-to-r from-maroon-600 to-maroon-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h3>
            <p className="text-xl mb-8 text-maroon-100 max-w-2xl mx-auto">
              Become part of a vibrant community dedicated to preserving our heritage and building a stronger future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-saffron-600 hover:bg-saffron-700 text-white px-8">
                Apply for Membership
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-maroon-700 px-8">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Membership;
