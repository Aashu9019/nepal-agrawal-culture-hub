
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const News = () => {
  const { t } = useLanguage();

  const newsArticles = [
    {
      title: "Annual Diwali Celebration Breaks Attendance Records",
      excerpt: "This year's Diwali celebration saw unprecedented participation from community members across Nepal, showcasing the strength of our cultural bonds.",
      date: "October 28, 2024",
      author: "Community Relations Team",
      image: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8",
      category: "Events"
    },
    {
      title: "New Scholarship Program Launched for Underprivileged Students", 
      excerpt: "Nepal Agrawal Samaj announces a comprehensive scholarship program aimed at supporting education for economically disadvantaged students.",
      date: "October 15, 2024",
      author: "Education Committee",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      category: "Education"
    },
    {
      title: "Community Service Initiative Reaches 1000 Families",
      excerpt: "Our ongoing community service programs have successfully provided support to over 1000 families across different regions of Nepal.",
      date: "September 30, 2024", 
      author: "Social Welfare Team",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
      category: "Social Welfare"
    },
    {
      title: "Business Network Event Connects 200+ Entrepreneurs",
      excerpt: "The recent business networking event facilitated valuable connections between established business owners and aspiring entrepreneurs.",
      date: "September 20, 2024",
      author: "Business Committee",
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754",
      category: "Business"
    },
    {
      title: "Cultural Heritage Documentation Project Begins",
      excerpt: "A new initiative to document and preserve Agrawal cultural practices and traditions has been launched with support from community elders.",
      date: "September 10, 2024",
      author: "Heritage Committee", 
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
      category: "Culture"
    },
    {
      title: "Youth Leadership Program Shows Promising Results",
      excerpt: "The inaugural batch of our youth leadership program has completed training, showing remarkable growth in community engagement skills.",
      date: "August 25, 2024",
      author: "Youth Development Team",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4", 
      category: "Youth"
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Events: "bg-saffron-100 text-saffron-800",
      Education: "bg-emerald-100 text-emerald-800", 
      "Social Welfare": "bg-blue-100 text-blue-800",
      Business: "bg-purple-100 text-purple-800",
      Culture: "bg-gold-100 text-gold-800",
      Youth: "bg-pink-100 text-pink-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-saffron-50 to-emerald-50 language-transition page-enter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-5xl font-bold text-maroon-800 mb-6 font-serif">
            {t('news.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto language-transition">
            {t('news.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {newsArticles.map((article, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-animated">
              <div className="relative h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover photo-hover-effect"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-maroon-800 line-clamp-2 hover:text-maroon-600 transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-3 w-3" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="h-3 w-3" />
                    <span>{article.author}</span>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full border-maroon-200 text-maroon-600 hover:bg-maroon-50 group">
                  {t('news.readMore')}
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 fade-in-up" style={{animationDelay: '0.6s'}}>
          <Button size="lg" className="bg-maroon-600 hover:bg-maroon-700 text-white px-8">
            View All News
          </Button>
        </div>
      </div>
    </div>
  );
};

export default News;
