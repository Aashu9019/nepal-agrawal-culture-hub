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
      title: language === 'nepali' ? 'वार्षिक साधारण सभा २०२४ को घोषणा' : 'Annual General Meeting 2024 Announcement',
      excerpt: language === 'nepali' 
        ? 'नेपाल अग्रवाल समाजले सबै सदस्यहरूलाई डिसेम्बर १, २०२४ मा तोकिएको वार्षिक साधारण सभामा उपस्थित हुन आग्रह गर्दछ।'
        : 'Nepal Agrawal Samaj cordially invites all members to attend the Annual General Meeting scheduled for December 1st, 2024.',
      content: language === 'nepali'
        ? 'हामी २०२४ को लागि हाम्रो वार्षिक साधारण सभाको घोषणा गर्न पाउँदा खुसी छौं। यस सभामा महत्वपूर्ण समुदायिक विषयहरू, वित्तीय प्रतिवेदनहरू र भविष्यको योजनाहरू समेटिनेछ।'
        : 'We are pleased to announce our Annual General Meeting for 2024. The meeting will cover important community matters, financial reports, and future planning.',
      date: "2024-11-15",
      author: language === 'nepali' ? 'कार्यकारी समिति' : 'Executive Committee',
      category: "announcement",
      views: 245,
      featured: true
    },
    {
      id: 2,
      title: language === 'nepali' ? 'सफल तीज उत्सव २०२४' : 'Successful Teej Celebration 2024',
      excerpt: language === 'nepali'
        ? 'हाम्रो तीज महोत्सव महान् उत्साहका साथ मनाइयो, जसमा १५० भन्दा बढी परिवारहरूले परम्परागत उत्सवमा भाग लिए।'
        : 'Our Teej Mahotsav was celebrated with great enthusiasm, bringing together over 150 families in traditional festivities.',
      content: language === 'nepali'
        ? 'तीज पर्वको उत्सव परम्परागत नृत्य प्रदर्शन, सांस्कृतिक कार्यक्रमहरू र सामुदायिक भोजको साथ सफल भयो।'
        : 'The Teej festival celebration was a grand success with traditional dance performances, cultural programs, and community feast.',
      date: "2024-09-20",
      author: language === 'nepali' ? 'सांस्कृतिक समिति' : 'Cultural Committee',
      category: "event-report",
      views: 189,
      featured: false
    },
    {
      id: 3,
      title: language === 'nepali' ? 'विद्यार्थीहरूका लागि नयाँ छात्रवृत्ति कार्यक्रम' : 'New Scholarship Program for Students',
      excerpt: language === 'nepali'
        ? 'नेपाल अग्रवाल समाजले हाम्रो समुदायका प्रतिभाशाली विद्यार्थीहरूलाई सहयोग गर्न शैक्षिक छात्रवृत्ति कार्यक्रम सुरु गरेको छ।'
        : 'Nepal Agrawal Samaj launches educational scholarship program to support talented students from our community.',
      content: language === 'nepali'
        ? 'हामी अग्रवाल परिवारका योग्य विद्यार्थीहरूलाई सहयोग गर्ने उद्देश्यले नयाँ छात्रवृत्ति कार्यक्रम घोषणा गर्न पाउँदा गर्व गर्छौं। शैक्षिक वर्ष २०२४-२५ का लागि आवेदनहरू खुला छन्।'
        : 'We are proud to announce our new scholarship program aimed at supporting deserving students from Agrawal families. Applications are now open for the academic year 2024-25.',
      date: "2024-11-10",
      author: language === 'nepali' ? 'शिक्षा समिति' : 'Education Committee',
      category: "social-initiative",
      views: 312,
      featured: true
    },
    {
      id: 4,
      title: language === 'nepali' ? 'दिवाली उत्सवको तयारी हुँदै' : 'Diwali Celebration Preparations Underway',
      excerpt: language === 'nepali'
        ? 'नोभेम्बर १, २०२४ मा हुने हाम्रो भव्य दिवाली उत्सवको तयारी तीव्र गतिमा भइरहेको छ।'
        : 'Preparations are in full swing for our grand Diwali celebration scheduled for November 1st, 2024.',
      content: language === 'nepali'
        ? 'महोत्सव समितिले यादगार दिवाली उत्सव आयोजना गर्न लगनशीलताका साथ काम गरिरहेको छ। हामी सबै सदस्यहरूलाई उत्सवमा भाग लिन र विभिन्न गतिविधिहरूमा स्वयंसेवा गर्न आमन्त्रित गर्दछौं।'
        : 'The festival committee is working diligently to organize a memorable Diwali celebration. We invite all members to participate in the festivities and volunteer for various activities.',
      date: "2024-10-25",
      author: language === 'nepali' ? 'महोत्सव समिति' : 'Festival Committee',
      category: "announcement",
      views: 156,
      featured: false
    },
    {
      id: 5,
      title: language === 'nepali' ? 'सामुदायिक स्वास्थ्य शिविर सफल' : 'Community Health Camp Success',
      excerpt: language === 'nepali'
        ? 'नेपाल अग्रवाल समाजद्वारा आयोजित नि:शुल्क स्वास्थ्य जाँच शिविरबाट १०० भन्दा बढी समुदायका सदस्यहरू लाभान्वित भए।'
        : 'Free health checkup camp organized by Nepal Agrawal Samaj served over 100 community members.',
      content: language === 'nepali'
        ? 'हाम्रो हालैको स्वास्थ्य शिविर ठूलो सफलता थियो, जसमा सबै उमेरका समुदायका सदस्यहरूलाई नि:शुल्क चिकित्सा जाँच, स्वास्थ्य जागरूकता र आधारभूत उपचार प्रदान गरियो।'
        : 'Our recent health camp was a great success, providing free medical checkups, health awareness, and basic treatments to community members of all ages.',
      date: "2024-10-15",
      author: language === 'nepali' ? 'स्वास्थ्य समिति' : 'Health Committee',
      category: "social-initiative",
      views: 203,
      featured: false
    },
    {
      id: 6,
      title: language === 'nepali' ? 'युवा सांस्कृतिक कार्यक्रमका मुख्य विशेषताहरू' : 'Youth Cultural Program Highlights',
      excerpt: language === 'nepali'
        ? 'युवा सदस्यहरूले हाम्रो हालैको सांस्कृतिक कार्यक्रममा असाधारण प्रतिभा प्रदर्शन गरे, जसले परम्परागत कलालाई संरक्षण गर्‍यो।'
        : 'Young members showcased exceptional talent in our recent cultural program, preserving traditional arts.',
      content: language === 'nepali'
        ? 'युवा सांस्कृतिक कार्यक्रममा हाम्रो समुदायका युवा सदस्यहरूद्वारा परम्परागत नृत्य, संगीत र नाटकीय प्रदर्शनहरू प्रस्तुत गरियो, जसले हाम्रो सम्पदासँगको उनीहरूको सम्बन्ध प्रदर्शन गर्‍यो।'
        : 'The youth cultural program featured traditional dance, music, and theatrical performances by young members of our community, demonstrating their connection to our heritage.',
      date: "2024-08-20",
      author: language === 'nepali' ? 'युवा समिति' : 'Youth Committee',
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
    return date.toLocaleDateString(language === 'nepali' ? 'ne-NP' : 'en-US', { 
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
    if (language === 'nepali') {
      switch (category) {
        case 'announcement': return 'घोषणा';
        case 'event-report': return 'कार्यक्रम रिपोर्ट';
        case 'social-initiative': return 'सामाजिक पहल';
        default: return category;
      }
    }
    switch (category) {
      case 'announcement': return 'Announcement';
      case 'event-report': return 'Event Report';
      case 'social-initiative': return 'Social Initiative';
      default: return category;
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
              {language === 'nepali' ? 'समाचार र घोषणाहरू' : 'News & Announcements'}
            </h1>
            <p className="text-xl text-saffron-200 mb-4 nepali-text animate-fade-in" style={{animationDelay: '0.2s'}}>
              {language === 'nepali' ? 'समाचार र घोषणाहरू' : 'समाचार र घोषणाहरू'}
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
              {language === 'nepali'
                ? 'नेपाल अग्रवाल समाजका पछिल्ला समाचारहरू, घोषणाहरू र समुदायिक अपडेटहरूसँग अद्यावधिक रहनुहोस्।'
                : 'Stay updated with the latest news, announcements, and community updates from Nepal Agrawal Samaj.'
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
                placeholder={language === 'nepali' ? 'समाचार र घोषणाहरू खोज्नुहोस्...' : 'Search news and announcements...'}
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
              {language === 'nepali' ? 'मुख्य समाचारहरू' : 'Featured News'}
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
                        {language === 'nepali' ? 'मुख्य' : 'Featured'}
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
                        <span>{item.views} {language === 'nepali' ? 'हेराइ' : 'views'}</span>
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
            {language === 'nepali' ? 'पछिल्ला समाचारहरू' : 'Latest News'}
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
                      <span>{item.views} {language === 'nepali' ? 'हेराइ' : 'views'}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-4 border-saffron-300 text-saffron-700 hover:bg-saffron-50 btn-animated"
                  >
                    {language === 'nepali' ? 'थप पढ्नुहोस्' : 'Read More'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <p className="text-lg text-gray-600">
                {language === 'nepali' 
                  ? 'तपाईंको खोजी मापदण्डसँग मेल खाने कुनै समाचार फेला परेन।'
                  : 'No news found matching your search criteria.'
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
            {language === 'nepali' ? 'अद्यावधिक रहनुहोस्' : 'Stay Updated'}
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            {language === 'nepali'
              ? 'हाम्रो न्यूजलेटरमा सब्स्क्राइब गर्नुहोस् र पछिल्ला समाचार र घोषणाहरू सिधै तपाईंको इनबक्समा प्राप्त गर्नुहोस्।'
              : 'Subscribe to our newsletter to receive the latest news and announcements directly in your inbox.'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder={language === 'nepali' ? 'तपाईंको इमेल ठेगाना' : 'Enter your email address'} 
              className="flex-1 border-saffron-300 focus:border-saffron-500"
            />
            <Button className="bg-maroon-600 hover:bg-maroon-700 text-white px-8 btn-animated">
              {language === 'nepali' ? 'सब्स्क्राइब गर्नुहोस्' : 'Subscribe'}
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            {language === 'nepali'
              ? 'हामी तपाईंको गोपनीयताको सम्मान गर्छौं र तपाईंको इमेल ठेगाना कहिल्यै साझा गर्दैनौं।'
              : 'We respect your privacy and will never share your email address.'
            }
          </p>
        </div>
      </section>
    </div>
  );
};

export default News;
