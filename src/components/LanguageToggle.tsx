
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      size="sm"
      className="relative group h-9 px-3 text-sm font-medium text-maroon-700 hover:text-maroon-800 hover:bg-saffron-50/50 border border-transparent hover:border-saffron-200 transition-all duration-200"
    >
      <div className="flex items-center space-x-2">
        <Globe className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12" />
        <span className="transition-opacity duration-200">
          {language === 'en' ? 'नेप' : 'EN'}
        </span>
      </div>
    </Button>
  );
};

export default LanguageToggle;
