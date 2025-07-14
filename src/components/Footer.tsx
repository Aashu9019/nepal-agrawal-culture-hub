
import { Heart, Facebook, Instagram, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-800 to-red-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-8 w-8 text-yellow-400" />
              <h3 className="text-2xl font-bold">Nepal Agrawal Samaj</h3>
            </div>
            <p className="text-red-100 leading-relaxed mb-4">
              Preserving our rich heritage while building a stronger, united community. 
              Together we celebrate our culture, support each other, and contribute to Nepal's growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-red-700 hover:bg-red-600 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-red-700 hover:bg-red-600 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-red-700 hover:bg-red-600 rounded-full transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-300">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-red-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-red-100 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-red-100 hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="text-red-100 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" className="text-red-100 hover:text-white transition-colors">Membership</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-300">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                <span className="text-red-100 text-sm">+977-1-4123456</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                <span className="text-red-100 text-sm">info@nepalagrawalsamaj.org</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-red-100 text-sm">Durbar Marg, Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-700 mt-8 pt-8 text-center">
          <p className="text-red-200 text-sm">
            © 2024 Nepal Agrawal Samaj. Made with <Heart className="inline h-4 w-4 text-red-400 mx-1" /> for our community.
          </p>
        </div>
      </div>
    </footer>
  );
};
