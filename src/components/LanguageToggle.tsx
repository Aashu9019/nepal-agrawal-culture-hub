
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      size="sm"
      className="relative group bg-gradient-to-r from-saffron-50 to-emerald-50 hover:from-saffron-100 hover:to-emerald-100 border border-gold-200 transition-all duration-300 hover:shadow-lg hover:scale-105"
    >
      <div className="flex items-center space-x-2">
        <Languages className="h-4 w-4 text-maroon-600 transition-transform duration-300 group-hover:rotate-12" />
        <div className="relative overflow-hidden">
          <div
            className={`flex transition-transform duration-500 ease-in-out ${
              language === 'ne' ? '-translate-x-full' : 'translate-x-0'
            }`}
          >
            <span className="text-maroon-700 font-medium whitespace-nowrap min-w-[2rem] text-center">
              EN
            </span>
            <span className="text-maroon-700 font-medium whitespace-nowrap min-w-[2rem] text-center">
              नेप
            </span>
          </div>
        </div>
      </div>
      
      {/* Animated background indicator */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-saffron-200 to-emerald-200 opacity-20 transition-transform duration-500 ease-in-out ${
          language === 'ne' ? 'translate-x-0' : '-translate-x-full'
        }`}
      />
    </Button>
  );
};

export default LanguageToggle;
