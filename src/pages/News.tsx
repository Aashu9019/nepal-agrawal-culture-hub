
import { useState } from "react";
import { Calendar, User, Eye, Search, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const News = () => {
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

  const newsItems = [
    {
      id: 1,
      title: language === 'en' ? 'Annual General Meeting 2024 Announcement' : 'वार्षिक साधारण सभा २०२४ को घोषणा',
      excerpt: language === 'en' 
        ? 'Nepal Agrawal Samaj cordially invites all members to attend the Annual General Meeting scheduled for December 1st, 2024.'
        : 'नेपाल अग्रवाल समाजले सबै सदस्यहरूलाई डिसेम्बर १, २०२४ मा तोकिएको वार्षिक साधारण सभामा उपस्थित हुन आग्रह गर्दछ।',
      content: language === 'en'
        ? 'We are pleased to announce our Annual General Meeting for 2024. The meeting will cover important community matters, financial reports, and future planning.'
        : 'हामी २०२४ को लागि हाम्रो वार्षिक साधारण सभाको घोषणा गर्न पाउँदा खुसी छौं। यस सभामा महत्वपूर्ण समुदायिक विषयहरू, वित्तीय प्रतिवेदनहरू र भविष्यको योजनाहरू समेटिनेछ।',
      date: "2024-11-15",
      author: language === 'en' ? 'Executive Committee' : 'कार्यकारी समिति',
      category: "announcement",
      views: 245,
      featured: true
    },
    {
      id: 2,
      title: language === 'en' ? 'Successful Teej Celebration 2024' : 'सफल तीज उत्सव २०२४',
      excerpt: language === 'en'
        ? 'Our Teej Mahotsav was celebrated with great enthusiasm, bringing together over 150 families in traditional festivities.'
        : 'हाम्रो तीज महोत्सव महान् उत्साहका साथ मनाइयो, जसमा १५० भन्दा बढी परिवारहरूले परम्परागत उत्सवमा भाग लिए।',
      content: language === 'en'
        ? 'The Teej festival celebration was a grand success with traditional dance performances, cultural programs, and community feast.'
        : 'तीज पर्वको उत्सव परम्परागत नृत्य प्रदर्शन, सांस्कृतिक कार्यक्रमहरू र सामुदायिक भोजको साथ सफल भयो।',
      date: "2024-09-20",
      author: language === 'en' ? 'Cultural Committee' : 'सांस्कृतिक समिति',
      category: "event-report",
      views: 189,
      featured: false
    },
    {
      id: 3,
      title: language === 'en' ? 'New Scholarship Program for Students' : 'विद्यार्थीहरूका लागि नयाँ छात्रवृत्ति कार्यक्रम',
      excerpt: language === 'en'
        ? 'Nepal Agrawal Samaj launches educational scholarship program to support talented students from our community.'
        : 'नेपाल अग्रवाल समाजले हाम्रो समुदायका प्रतिभाशाली विद्यार्थीहरूलाई सहयोग गर्न शैक्षिक छात्रवृत्ति कार्यक्रम सुरु गरेको छ।',
      content: language === 'en'
        ? 'We are proud to announce our new scholarship program aimed at supporting deserving students from Agrawal families. Applications are now open for the academic year 2024-25.'
        : 'हामी अग्रवाल परिवारका योग्य विद्यार्थीहरूलाई सहयोग गर्ने उद्देश्यले नयाँ छात्रवृत्ति कार्यक्रम घोषणा गर्न पाउँदा गर्व गर्छौं। शैक्षिक वर्ष २०२४-२५ का लागि आवेदनहरू खुला छन्।',
      date: "2024-11-10",
      author: language === 'en' ? 'Education Committee' : 'शिक्षा समिति',
      category: "social-initiative",
      views: 312,
      featured: true
    },
    {
      id: 4,
      title: language === 'en' ? 'Diwali Celebration Preparations Underway' : 'दिवाली उत्सवको तयारी हुँदै',
      excerpt: language === 'en'
        ? 'Preparations are in full swing for our grand Diwali celebration scheduled for November 1st, 2024.'
        : 'नोभेम्बर १, २०२४ मा हुने हाम्रो भव्य दिवाली उत्सवको तयारी तीव्र गतिमा भइरहेको छ।',
      content: language === 'en'
        ? 'The festival committee is working diligently to organize a memorable Diwali celebration. We invite all members to participate in the festivities and volunteer for various activities.'
        : 'महोत्सव समितिले यादगार दिवाली उत्सव आयोजना गर्न लगनशीलताका साथ काम गरिरहेको छ। हामी सबै सदस्यहरूलाई उत्सवमा भाग लिन र विभिन्न गतिविधिहरूमा स्वयंसेवा गर्न आमन्त्रित गर्दछौं।',
      date: "2024-10-25",
      author: language === 'en' ? 'Festival Committee' : 'महोत्सव समिति',
      category: "announcement",
      views: 156,
      featured: false
    },
    {
      id: 5,
      title: language === 'en' ? 'Community Health Camp Success' : 'सामुदायिक स्वास्थ्य शिविर सफल',
      excerpt: language === 'en'
        ? 'Free health checkup camp organized by Nepal Agrawal Samaj served over 100 community members.'
        : 'नेपाल अग्रवाल समाजद्वारा आयोजित नि:शुल्क स्वास्थ्य जाँच शिविरबाट १०० भन्दा बढी समुदायका सदस्यहरू लाभान्वित भए।',
      content: language === 'en'
        ? 'Our recent health camp was a great success, providing free medical checkups, health awareness, and basic treatments to community members of all ages.'
        : 'हाम्रो हालैको स्वास्थ्य शिविर ठूलो सफलता थियो, जसमा सबै उमेरका समुदायका सदस्यहरूलाई नि:शुल्क चिकित्सा जाँच, स्वास्थ्य जागरूकता र आधारभूत उपचार प्रदान गरियो।',
      date: "2024-10-15",
      author: language === 'en' ? 'Health Committee' : 'स्वास्थ्य समिति',
      category: "social-initiative",
      views: 203,
      featured: false
    },
    {
      id: 6,
      title: language === 'en' ? 'Youth Cultural Program Highlights' : 'युवा सांस्कृतिक कार्यक्रमका मुख्य विशेषताहरू',
      excerpt: language === 'en'
        ? 'Young members showcased exceptional talent in our recent cultural program, preserving traditional arts.'
        : 'युवा सदस्यहरूले हाम्रो हालैको सांस्कृतिक कार्यक्रममा असाधारण प्रतिभा प्रदर्शन गरे, जसले परम्परागत कलालाई संरक्षण गर्‍यो।',
      content: language === 'en'
        ? 'The youth cultural program featured traditional dance, music, and theatrical performances by young members of our community, demonstrating their connection to our heritage.'
        : 'युवा सांस्कृतिक कार्यक्रममा हाम्रो समुदायका युवा सदस्यहरूद्वारा परम्परागत नृत्य, संगीत र नाटकीय प्रदर्शनहरू प्रस्तुत गरियो, जसले हाम्रो सम्पदासँगको उनीहरूको सम्बन्ध प्रदर्शन गर्‍यो।',
      date: "2024-08-20",
      author: language === 'en' ? 'Youth Committee' : 'युवा समिति',
      category: "event-report",
      views: 178,
      featured: false
    }
  ];

  const filteredNews = newsItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'en' ? 'en-US' : 'ne-NP', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'announcement': return 'bg-saffron-100 text-saffron-800';
      case 'event-report': return 'bg-emerald-100 text-emerald-800';
      case 'social-initiative': return 'bg-maroon-100 text-maroon-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = (category: string) => {
    if (language === 'en') {
      switch (category) {
        case 'announcement': return 'Announcement';
        case 'event-report': return 'Event Report';
        case 'social-initiative': return 'Social Initiative';
        default: return category;
      }
    } else {
      switch (category) {
        case 'announcement': return 'घोषणा';
        case 'event-report': return 'कार्यक्रम रिपोर्ट';
        case 'social-initiative': return 'सामाजिक पहल';
        default: return category;
      }
    }
  };

  const featuredNews = filteredNews.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 via-white to-emerald-50 page-enter">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-800 to-maroon-900 text-white animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 font-serif animate-fade-in">
              {language === 'en' ? 'News & Announcements' : 'समाचार र घोषणाहरू'}
            </h1>
            <p className="text-xl text-saffron-200 mb-4 nepali-text animate-fade-in" style={{animationDelay: '0.2s'}}>
              {language === 'en' ? 'Latest Updates' : 'नवीनतम अपडेटहरू'}
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
              {language === 'en'
                ? 'Stay updated with the latest news, announcements, and community updates from Nepal Agrawal Samaj.'
                : 'नेपाल अग्रवाल समाजका पछिल्ला समाचारहरू, घोषणाहरू र समुदायिक अपडेटहरूसँग अद्यावधिक रहनुहोस्।'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder={language === 'en' ? 'Search news and announcements...' : 'समाचार र घोषणाहरू खोज्नुहोस्...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-saffron-300 focus:border-saffron-500 smooth-transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-12 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-maroon-800 mb-8 font-serif">
              {language === 'en' ? 'Featured News' : 'मुख्य समाचारहरू'}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 stagger-children">
              {featuredNews.map((item) => (
                <Card key={item.id} className="overflow-hidden shadow-xl border-gold-200 hover:shadow-2xl card-animated">
                  <div className="bg-gradient-to-r from-saffron-100 to-gold-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={getCategoryColor(item.category)}>
                        <Tag className="h-3 w-3 mr-1" />
                        {getCategoryLabel(item.category)}
                      </Badge>
                      <Badge className="bg-gold-500 text-white">
                        {language === 'en' ? 'Featured' : 'मुख्य'}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-maroon-800 mb-3 font-serif">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-gray-700 text-base leading-relaxed">
                      {item.excerpt}
                    </CardDescription>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.content}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(item.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{item.author}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{item.views} {language === 'en' ? 'views' : 'हेराइ'}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News */}
      <section className="py-12 animate-fade-in" style={{animationDelay: '1s'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-maroon-800 mb-8 font-serif">
            {language === 'en' ? 'Latest News' : 'पछिल्ला समाचारहरू'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {regularNews.map((item) => (
              <Card key={item.id} className="shadow-lg hover:shadow-xl card-animated border-saffron-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getCategoryColor(item.category)}>
                      <Tag className="h-3 w-3 mr-1" />
                      {getCategoryLabel(item.category)}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-maroon-700 font-serif line-clamp-2">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">
                    {item.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {item.content}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(item.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{item.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{item.views} {language === 'en' ? 'views' : 'हेराइ'}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-4 border-saffron-300 text-saffron-700 hover:bg-saffron-50 btn-animated"
                  >
                    {language === 'en' ? 'Read More' : 'थप पढ्नुहोस्'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <p className="text-lg text-gray-600">
                {language === 'en' 
                  ? 'No news found matching your search criteria.'
                  : 'तपाईंको खोजी मापदण्डसँग मेल खाने कुनै समाचार फेला परेन।'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-saffron-100 to-emerald-100 animate-fade-in" style={{animationDelay: '1.2s'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-maroon-800 mb-4 font-serif">
            {language === 'en' ? 'Stay Updated' : 'अद्यावधिक रहनुहोस्'}
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            {language === 'en'
              ? 'Subscribe to our newsletter to receive the latest news and announcements directly in your inbox.'
              : 'हाम्रो न्यूजलेटरमा सब्स्क्राइब गर्नुहोस् र पछिल्ला समाचार र घोषणाहरू सिधै तपाईंको इनबक्समा प्राप्त गर्नुहोस्।'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder={language === 'en' ? 'Enter your email address' : 'तपाईंको इमेल ठेगाना'} 
              className="flex-1 border-saffron-300 focus:border-saffron-500"
            />
            <Button className="bg-maroon-600 hover:bg-maroon-700 text-white px-8 btn-animated">
              {language === 'en' ? 'Subscribe' : 'सब्स्क्राइब गर्नुहोस्'}
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            {language === 'en'
              ? 'We respect your privacy and will never share your email address.'
              : 'हामी तपाईंको गोपनीयताको सम्मान गर्छौं र तपाईंको इमेल ठेगाना कहिल्यै साझा गर्दैनौं।'
            }
          </p>
        </div>
      </section>
    </div>
  );
};

export default News;
