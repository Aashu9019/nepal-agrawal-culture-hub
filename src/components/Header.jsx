
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navigation = [
    { name: "nav.home", href: "/" },
    { name: "nav.about", href: "/about" },
    { name: "nav.events", href: "/events" },
    { name: "nav.gallery", href: "/gallery" },
    { name: "nav.locations", href: "/locations" },
    { name: "nav.membership", href: "/membership" },
    { name: "nav.news", href: "/news" },
    { name: "nav.contact", href: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-saffron-50 to-emerald-50 shadow-lg border-b-4 border-gold-500 language-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="../././Images/logo.png"
              alt="Maharaja Agrasen"
              className="h-20 w-auto photo-hover-effect"
            />
            <div className="text-left language-transition">
              <h1 className="text-2xl font-bold text-maroon-800 font-serif fade-in-up">
                {t('header.title')}
              </h1>
              <p className="text-sm text-emerald-700 font-medium slide-in-right">
                {t('header.subtitle')}
              </p>
            </div>
          </Link>

          {/* Language Toggle and Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <a href="#" className="text-saffron-600 hover:text-saffron-800 transition-colors photo-hover-effect">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-saffron-600 hover:text-saffron-800 transition-colors photo-hover-effect">
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-maroon-600 hover:text-maroon-800 transition-transform duration-200 hover:scale-110"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`${isOpen ? "block" : "hidden"} md:block border-t border-gold-200 pt-4 pb-2 language-transition`}>
          <div className="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-md text-center font-medium transition-all duration-200 language-transition ${
                  isActive(item.href)
                    ? "bg-maroon-600 text-white shadow-lg"
                    : "text-maroon-700 hover:bg-saffron-100 hover:text-maroon-800"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {t(item.name)}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
