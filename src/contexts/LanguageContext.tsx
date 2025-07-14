
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ne';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Header
    'header.title': 'Nepal Agrawal Samaj',
    'header.subtitle': 'नेपाल अग्रवाल समाज',
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.events': 'Events',
    'nav.gallery': 'Gallery',
    'nav.locations': 'Locations',
    'nav.membership': 'Membership',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    
    // Homepage
    'home.welcome': 'Welcome to',
    'home.title': 'Nepal Agrawal Samaj',
    'home.subtitle': 'नेपाल अग्रवाल समाज में आपका स्वागत है',
    'home.description': 'Following the noble ideals of Maharaja Agrasen, we unite the Agrawal community in Nepal to preserve our rich heritage, foster unity, and promote cultural values for future generations.',
    'home.becomeMember': 'Become a Member',
    'home.learnMore': 'Learn More',
    'home.maharajaCaption': 'Our Guiding Light',
    'home.purpose': 'Our Purpose',
    'home.purposeDesc': 'Guided by the principles of unity, equality, and prosperity established by Maharaja Agrasen',
    'home.unity': 'Unity',
    'home.unityDesc': 'Bringing together Agrawal families across Nepal to strengthen our community bonds and create lasting relationships.',
    'home.heritage': 'Heritage',
    'home.heritageDesc': 'Preserving and celebrating our rich cultural traditions, customs, and values for future generations.',
    'home.growth': 'Growth',
    'home.growthDesc': 'Supporting community development through educational, cultural, and social initiatives that benefit all members.',
    'home.events': 'Our Cultural Events',
    'home.eventsDesc': 'Celebrating traditions and creating memories together',
    'home.viewAllEvents': 'View All Events',
    
    // About Page
    'about.title': 'About Nepal Agrawal Samaj',
    'about.subtitle': 'नेपाल अग्रवाल समाज के बारे में',
    'about.description': 'Established to unite and serve the Agrawal community in Nepal, we are dedicated to preserving our ancient heritage while fostering modern progress and unity among our members.',
    'about.maharaja': 'Maharaja Agrasen',
    'about.maharajaDesc1': 'Maharaja Agrasen, the legendary king and founder of Agroha, established the principles that guide our community to this day. Over 5000 years ago, he created a society based on equality, non-violence, and mutual prosperity.',
    'about.maharajaDesc2': 'His revolutionary concept of "one brick, one rupee" ensured that every family contributed to building new homes, creating a system of mutual support that eliminated poverty and promoted collective growth.',
    'about.maharajaDesc3': 'Today, the Agrawal community worldwide follows his teachings of business ethics, social harmony, and community welfare. In Nepal, we honor his legacy by maintaining these values while adapting to modern times.',
    'about.values': 'Our Values',
    'about.valuesDesc': 'The timeless principles that guide our community',
    'about.royalHeritage': 'Royal Heritage',
    'about.royalHeritageDesc': 'Following the noble traditions established by Maharaja Agrasen over 5000 years ago',
    'about.communityUnity': 'Community Unity',
    'about.communityUnityDesc': 'Bringing together Agrawal families across Nepal under one umbrella',
    'about.culturalPreservation': 'Cultural Preservation',
    'about.culturalPreservationDesc': 'Maintaining our rich customs, festivals, and traditional practices',
    'about.socialWelfare': 'Social Welfare',
    'about.socialWelfareDesc': 'Supporting community development and member welfare initiatives',
    
    // Common
    'maharaja.name': 'Maharaja Agrasen',
  },
  ne: {
    // Header
    'header.title': 'नेपाल अग्रवाल समाज',
    'header.subtitle': 'Nepal Agrawal Samaj',
    'nav.home': 'गृहपृष्ठ',
    'nav.about': 'हाम्रो बारे',
    'nav.events': 'कार्यक्रमहरू',
    'nav.gallery': 'फोटो ग्यालेरी',
    'nav.locations': 'स्थानहरू',
    'nav.membership': 'सदस्यता',
    'nav.news': 'समाचार',
    'nav.contact': 'सम्पर्क',
    
    // Homepage
    'home.welcome': 'स्वागत छ',
    'home.title': 'नेपाल अग्रवाल समाज',
    'home.subtitle': 'Nepal Agrawal Samaj में आपका स्वागत है',
    'home.description': 'महाराजा अग्रसेनका उदात्त आदर्शहरूलाई पछ्याउँदै, हामी नेपालका अग्रवाल समुदायलाई एकजुट गराउँछौं र आउने पुस्ताका लागि हाम्रो समृद्ध सम्पदा जोगाउन, एकताको प्रवर्द्धन गर्न र सांस्कृतिक मूल्यहरूको संरक्षण गर्छौं।',
    'home.becomeMember': 'सदस्य बन्नुहोस्',
    'home.learnMore': 'थप जान्नुहोस्',
    'home.maharajaCaption': 'हाम्रो मार्गदर्शक ज्योति',
    'home.purpose': 'हाम्रो उद्देश्य',
    'home.purposeDesc': 'महाराजा अग्रसेनद्वारा स्थापित एकता, समानता र समृद्धिका सिद्धान्तहरूद्वारा निर्देशित',
    'home.unity': 'एकता',
    'home.unityDesc': 'नेपालभरका अग्रवाल परिवारहरूलाई एकसाथ ल्याएर हाम्रो सामुदायिक बन्धनलाई बलियो बनाउन र दिगो सम्बन्धहरू सिर्जना गर्न।',
    'home.heritage': 'सम्पदा',
    'home.heritageDesc': 'आउने पुस्ताका लागि हाम्रो समृद्ध सांस्कृतिक परम्परा, चलन र मूल्यहरूको संरक्षण र उत्सव मनाउन।',
    'home.growth': 'विकास',
    'home.growthDesc': 'सबै सदस्यहरूलाई फाइदा पुर्याउने शैक्षिक, सांस्कृतिक र सामाजिक पहलहरूमार्फत समुदायिक विकासलाई सहयोग गर्न।',
    'home.events': 'हाम्रा सांस्कृतिक कार्यक्रमहरू',
    'home.eventsDesc': 'परम्पराहरू मनाउन र सँगै सम्झनाहरू सिर्जना गर्न',
    'home.viewAllEvents': 'सबै कार्यक्रमहरू हेर्नुहोस्',
    
    // About Page
    'about.title': 'नेपाल अग्रवाल समाजको बारेमा',
    'about.subtitle': 'About Nepal Agrawal Samaj',
    'about.description': 'नेपालमा अग्रवाल समुदायलाई एकजुट गर्न र सेवा गर्न स्थापित, हामी आधुनिक प्रगतिलाई बढावा दिँदै र हाम्रा सदस्यहरूबीच एकताको विकास गर्दै हाम्रो प्राचीन सम्पदाको संरक्षणमा समर्पित छौं।',
    'about.maharaja': 'महाराजा अग्रसेन',
    'about.maharajaDesc1': 'महाराजा अग्रसेन, अग्रोहाका पौराणिक राजा र संस्थापक, तिनले आजसम्म हाम्रो समुदायलाई मार्गदर्शन गर्ने सिद्धान्तहरू स्थापना गरे। ५००० वर्ष पहिले, तिनले समानता, अहिंसा र पारस्परिक समृद्धिमा आधारित समाज सिर्जना गरे।',
    'about.maharajaDesc2': 'तिनको क्रान्तिकारी "एक इँटा, एक रुपैयाँ" को अवधारणाले प्रत्येक परिवारले नयाँ घर निर्माणमा योगदान दिने सुनिश्चित गर्‍यो, गरिबी हटाउने र सामूहिक वृद्धिलाई बढावा दिने पारस्परिक सहयोगको प्रणाली सिर्जना गर्‍यो।',
    'about.maharajaDesc3': 'आज, विश्वभरका अग्रवाल समुदायले व्यापारिक नैतिकता, सामाजिक सद्भावना र सामुदायिक कल्याणका तिनका शिक्षाहरू पछ्याउँछन्। नेपालमा, हामी आधुनिक समयमा अनुकूलन गर्दै यी मूल्यहरू कायम राखेर तिनको विरासतलाई सम्मान गर्छौं।',
    'about.values': 'हाम्रा मूल्यहरू',
    'about.valuesDesc': 'हाम्रो समुदायलाई मार्गदर्शन गर्ने कालातीत सिद्धान्तहरू',
    'about.royalHeritage': 'शाही सम्पदा',
    'about.royalHeritageDesc': '५००० वर्ष पहिले महाराजा अग्रसेनद्वारा स्थापित महान् परम्पराहरूलाई पछ्याउँदै',
    'about.communityUnity': 'सामुदायिक एकता',
    'about.communityUnityDesc': 'नेपालभरका अग्रवाल परिवारहरूलाई एउटै छाताअन्तर्गत ल्याउन',
    'about.culturalPreservation': 'सांस्कृतिक संरक्षण',
    'about.culturalPreservationDesc': 'हाम्रा समृद्ध चलन, चाडपर्वहरू र परम्परागत प्रथाहरूको संरक्षण',
    'about.socialWelfare': 'सामाजिक कल्याण',
    'about.socialWelfareDesc': 'सामुदायिक विकास र सदस्य कल्याण पहलहरूलाई सहयोग',
    
    // Common
    'maharaja.name': 'महाराजा अग्रसेन',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ne')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Apply language-specific styling to the document
    if (language === 'ne') {
      document.documentElement.classList.add('nepali-font');
      document.body.classList.add('nepali-text');
    } else {
      document.documentElement.classList.remove('nepali-font');
      document.body.classList.remove('nepali-text');
    }
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'ne' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
