
import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    // Header translations
    'header.title': 'Nepal Agrawal Samaj',
    'header.subtitle': 'नेपाल अग्रवाल समाज',
    
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.events': 'Events',
    'nav.gallery': 'Gallery',
    'nav.locations': 'Locations',
    'nav.membership': 'Membership',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    
    // Home page
    'home.welcome': 'Welcome to',
    'home.title': 'Nepal Agrawal Samaj',
    'home.subtitle': 'Preserving Heritage, Building Unity',
    'home.description': 'A vibrant community organization dedicated to preserving our cultural heritage while fostering growth and solidarity among the Agrawal community in Nepal.',
    'home.becomeMember': 'Become a Member',
    'home.learnMore': 'Learn More',
    'home.maharajaCaption': 'Our Inspiration',
    'home.purpose': 'Our Purpose',
    'home.purposeDesc': 'Dedicated to preserving our rich heritage while building a stronger, united community',
    'home.unity': 'Community Unity',
    'home.unityDesc': 'Bringing together families and individuals from across Nepal',
    'home.heritage': 'Cultural Heritage',
    'home.heritageDesc': 'Preserving and celebrating our rich Agrawal traditions',
    'home.growth': 'Personal Growth',
    'home.growthDesc': 'Supporting education, business, and personal development',
    'home.events': 'Recent Events',
    'home.eventsDesc': 'Celebrating our culture through various community gatherings',
    
    // Maharaja Agrasen
    'maharaja.name': 'Maharaja Agrasen',
    
    // About page
    'about.title': 'About Nepal Agrawal Samaj',
    'about.description': 'Nepal Agrawal Samaj is a vibrant community organization dedicated to preserving our cultural heritage while embracing progress and unity.',
    'about.mission': 'Our Mission',
    'about.missionDesc': 'To create a unified platform that celebrates our Agrawal heritage, supports community members in their personal and professional growth.',
    'about.vision': 'Our Vision',
    'about.visionDesc': 'To be the leading voice of the Agrawal community in Nepal, fostering unity, preserving culture, and promoting prosperity.',
    'about.values': 'Our Values',
    'about.valuesDesc': 'Unity, Cultural Preservation, Excellence, and Service to Community',
    
    // Events page
    'events.title': 'Events & Celebrations',
    'events.description': 'Join us for various cultural events, festivals, and community gatherings throughout the year.',
    'events.upcoming': 'Upcoming Events',
    'events.past': 'Past Events',
    'events.register': 'Register Now',
    
    // Gallery page
    'gallery.title': 'Photo Gallery',
    'gallery.description': 'Capturing memories and moments from our community events and celebrations',
    'gallery.viewAll': 'View All Photos',
    
    // Locations page
    'locations.title': 'Our Locations',
    'locations.description': 'Find Nepal Agrawal Samaj communities and centers across Nepal',
    'locations.mainOffice': 'Main Office',
    'locations.branches': 'Branch Offices',
    'locations.communities': 'Community Centers',
    
    // Membership page
    'membership.title': 'Become a Member',
    'membership.description': 'Join our community and be part of preserving our rich heritage',
    'membership.benefits': 'Membership Benefits',
    'membership.apply': 'Apply for Membership',
    'membership.types': 'Membership Types',
    
    // News page
    'news.title': 'Latest News',
    'news.description': 'Stay updated with the latest news and announcements from our community',
    'news.recent': 'Recent News',
    'news.readMore': 'Read More',
    
    // Contact page
    'contact.title': 'Contact Us',
    'contact.description': 'Get in touch with us for any questions or information',
    'contact.getInTouch': 'Get In Touch',
    'contact.sendMessage': 'Send Message',
  },
  ne: {
    // Header translations
    'header.title': 'नेपाल अग्रवाल समाज',
    'header.subtitle': 'Nepal Agrawal Samaj',
    
    // Navigation
    'nav.home': 'गृहपृष्ठ',
    'nav.about': 'हाम्रो बारेमा',
    'nav.events': 'कार्यक्रमहरू',
    'nav.gallery': 'फोटो ग्यालेरी',
    'nav.locations': 'स्थानहरू',
    'nav.membership': 'सदस्यता',
    'nav.news': 'समाचार',
    'nav.contact': 'सम्पर्क',
    
    // Home page
    'home.welcome': 'स्वागतम्',
    'home.title': 'नेपाल अग्रवाल समाज',
    'home.subtitle': 'सांस्कृतिक सम्पदा संरक्षण, एकता निर्माण',
    'home.description': 'नेपालमा अग्रवाल समुदायको बीचमा बृद्धि र एकताको पोषण गर्दै हाम्रो सांस्कृतिक सम्पदाको संरक्षणमा समर्पित एक जीवन्त सामुदायिक संगठन।',
    'home.becomeMember': 'सदस्य बन्नुहोस्',
    'home.learnMore': 'थप जान्नुहोस्',
    'home.maharajaCaption': 'हाम्रो प्रेरणा',
    'home.purpose': 'हाम्रो उद्देश्य',
    'home.purposeDesc': 'हाम्रो समृद्ध सम्पदाको संरक्षण गर्दै बलियो, एकीकृत समुदाय निर्माणमा समर्पित',
    'home.unity': 'सामुदायिक एकता',
    'home.unityDesc': 'नेपालभरका परिवार र व्यक्तिहरूलाई एकसाथ ल्याउँदै',
    'home.heritage': 'सांस्कृतिक सम्पदा',
    'home.heritageDesc': 'हाम्रो समृद्ध अग्रवाल परम्पराको संरक्षण र उत्सव',
    'home.growth': 'व्यक्तिगत विकास',
    'home.growthDesc': 'शिक्षा, व्यापार, र व्यक्तिगत विकासमा सहयोग',
    'home.events': 'भर्खरैका कार्यक्रमहरू',
    'home.eventsDesc': 'विभिन्न सामुदायिक भेलाहरू मार्फत हाम्रो संस्कृति मनाउँदै',
    
    // Maharaja Agrasen
    'maharaja.name': 'महाराजा अग्रसेन',
    
    // About page
    'about.title': 'नेपाल अग्रवाल समाजको बारेमा',
    'about.description': 'नेपाल अग्रवाल समाज प्रगति र एकतालाई अँगालो मार्दै हाम्रो सांस्कृतिक सम्पदाको संरक्षणमा समर्पित एक जीवन्त सामुदायिक संगठन हो।',
    'about.mission': 'हाम्रो मिशन',
    'about.missionDesc': 'हाम्रो अग्रवाल सम्पदाको उत्सव मनाउने, समुदायका सदस्यहरूलाई उनीहरूको व्यक्तिगत र व्यावसायिक विकासमा सहयोग गर्ने एकीकृत मञ्च सिर्जना गर्नु।',
    'about.vision': 'हाम्रो दृष्टिकोण',
    'about.visionDesc': 'नेपालमा अग्रवाल समुदायको अग्रणी आवाज बनी एकता बढाउने, संस्कृति संरक्षण गर्ने, र समृद्धि प्रवर्द्धन गर्नु।',
    'about.values': 'हाम्रा मूल्यहरू',
    'about.valuesDesc': 'एकता, सांस्कृतिक संरक्षण, उत्कृष्टता, र समुदायको सेवा',
    
    // Events page
    'events.title': 'कार्यक्रम र उत्सवहरू',
    'events.description': 'वर्षभरि विभिन्न सांस्कृतिक कार्यक्रम, चाडपर्व र सामुदायिक भेलाहरूमा हामीसँग सामेल हुनुहोस्।',
    'events.upcoming': 'आगामी कार्यक्रमहरू',
    'events.past': 'भएका कार्यक्रमहरू',
    'events.register': 'अहिले दर्ता गर्नुहोस्',
    
    // Gallery page
    'gallery.title': 'फोटो ग्यालेरी',
    'gallery.description': 'हाम्रा सामुदायिक कार्यक्रम र उत्सवहरूका सम्झनाहरू र क्षणहरू कैद गर्दै',
    'gallery.viewAll': 'सबै फोटोहरू हेर्नुहोस्',
    
    // Locations page
    'locations.title': 'हाम्रा स्थानहरू',
    'locations.description': 'नेपालभरि नेपाल अग्रवाल समाज समुदाय र केन्द्रहरू फेला पार्नुहोस्',
    'locations.mainOffice': 'मुख्य कार्यालय',
    'locations.branches': 'शाखा कार्यालयहरू',
    'locations.communities': 'सामुदायिक केन्द्रहरू',
    
    // Membership page
    'membership.title': 'सदस्य बन्नुहोस्',
    'membership.description': 'हाम्रो समुदायमा सामेल हुनुहोस् र हाम्रो समृद्ध सम्पदाको संरक्षणको भाग बन्नुहोस्',
    'membership.benefits': 'सदस्यताका फाइदाहरू',
    'membership.apply': 'सदस्यताका लागि आवेदन दिनुहोस्',
    'membership.types': 'सदस्यताका प्रकारहरू',
    
    // News page
    'news.title': 'ताजा समाचार',
    'news.description': 'हाम्रो समुदायबाट ताजा समाचार र घोषणाहरूसँग अपडेट रहनुहोस्',
    'news.recent': 'भर्खरैका समाचारहरू',
    'news.readMore': 'थप पढ्नुहोस्',
    
    // Contact page
    'contact.title': 'हामीलाई सम्पर्क गर्नुहोस्',
    'contact.description': 'कुनै प्रश्न वा जानकारीको लागि हामीसँग सम्पर्कमा रहनुहोस्',
    'contact.getInTouch': 'सम्पर्कमा रहनुहोस्',
    'contact.sendMessage': 'सन्देश पठाउनुहोस्',
  }
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ne' : 'en');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
