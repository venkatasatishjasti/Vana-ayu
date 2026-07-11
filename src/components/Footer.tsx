import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import VanaAyuLogo from './VanaAyuLogo';

interface FooterProps {
  scrollToSection: (id: string) => void;
  onSelectCategory: (catId: string) => void;
}

export default function Footer({ scrollToSection, onSelectCategory }: FooterProps) {
  
  const handleCatClick = (catId: string) => {
    onSelectCategory(catId);
    scrollToSection('products');
  };

  return (
    <footer id="app-footer" className="bg-[#1E2522] text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Column 1: Logo & Brand Description */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4">
            <div className="cursor-pointer group" onClick={() => scrollToSection('hero')}>
              <VanaAyuLogo variant="horizontal" light={true} className="group-hover:scale-[1.02] transition-transform duration-300" />
            </div>
            
            <p className="font-sans text-xs text-gray-400 leading-relaxed">
              We stand at the intersection of traditional ancient nutrition and modern clinical purity. Sourcing organic seeds, stones, and spices directly from verified soil stewards worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3.5 pt-2">
              <a href="#" className="h-8 w-8 rounded-full bg-white/5 hover:bg-forest hover:text-white flex items-center justify-center transition-all" title="Follow on Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/5 hover:bg-forest hover:text-white flex items-center justify-center transition-all" title="Follow on Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/5 hover:bg-forest hover:text-white flex items-center justify-center transition-all" title="Follow on Facebook">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-display font-bold text-xs uppercase tracking-wider mb-4 border-l-2 border-forest pl-2.5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 font-sans text-xs">
              <li>
                <button onClick={() => scrollToSection('hero')} className="hover:text-forest transition-colors text-left cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-forest transition-colors text-left cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="hover:text-forest transition-colors text-left cursor-pointer">
                  Our Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('features')} className="hover:text-forest transition-colors text-left cursor-pointer">
                  Our Mission
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('recipes')} className="hover:text-forest transition-colors text-left cursor-pointer">
                  Ayurvedic Recipes
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories Filter Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-display font-bold text-xs uppercase tracking-wider mb-4 border-l-2 border-forest pl-2.5">
              Organic Categories
            </h3>
            <ul className="space-y-2.5 font-sans text-xs">
              <li>
                <button onClick={() => handleCatClick('nuts')} className="hover:text-forest transition-colors text-left cursor-pointer">
                  🥜 Premium Nuts
                </button>
              </li>
              <li>
                <button onClick={() => handleCatClick('powders')} className="hover:text-forest transition-colors text-left cursor-pointer">
                  🌿 Heirloom Powders
                </button>
              </li>
              <li>
                <button onClick={() => handleCatClick('dryfruits')} className="hover:text-forest transition-colors text-left cursor-pointer">
                  🍇 Dried Organic Fruits
                </button>
              </li>
              <li>
                <button onClick={() => handleCatClick('flour')} className="hover:text-forest transition-colors text-left cursor-pointer">
                  🌾 Stone-Ground Flour
                </button>
              </li>
              <li>
                <button onClick={() => handleCatClick('homemade')} className="hover:text-forest transition-colors text-left cursor-pointer">
                  🏡 Homemade Cured
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Global Contact Information */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-white font-display font-bold text-xs uppercase tracking-wider mb-4 border-l-2 border-forest pl-2.5">
              Contact Information
            </h3>
            
            <div className="space-y-3 font-sans text-xs">
              {/* USA Contact */}
              <div className="flex items-start space-x-2.5">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">USA Headquarters:</span>
                  <p className="text-gray-400 mt-0.5">Vana Ayu Naturals LLC, 500 Broad Street, Suite 400, Philadelphia, PA 19102</p>
                </div>
              </div>

              {/* India Contact */}
              <div className="flex items-start space-x-2.5">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">India Processing Facility:</span>
                  <p className="text-gray-400 mt-0.5">Vana Ayu Agro Foods, IDA Phase II, Cherlapally, Hyderabad, TS 500051</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-forest shrink-0" />
                <span className="text-gray-400">Email:</span>
                <a href="mailto:support@vanaayunaturals.com" className="text-white hover:text-forest transition-colors">
                  support@vanaayunaturals.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-forest shrink-0" />
                <span className="text-gray-400">Phone:</span>
                <a href="tel:+18005558262" className="text-white hover:text-forest transition-colors">
                  +1 (800) 555-VANA
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Bottom Footer: Branding Details, Licences, Disclaimers, and Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-[11px] font-sans text-gray-400 space-y-4 md:space-y-0">
          
          {/* USA Marketing & Distribution & License */}
          <div className="text-center md:text-left space-y-1">
            <span className="text-white font-semibold">USA Marketing & Distribution: Vana Ayu Naturals LLC</span>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-0.5">
              <span className="bg-white/5 px-2 py-0.5 rounded text-gray-300 border border-white/10 font-mono">
                FSSAI Import Registration No: 10021013000214
              </span>
              <span className="bg-white/5 px-2 py-0.5 rounded text-gray-300 border border-white/10 font-mono">
                FDA Facility Reg: 17294827103
              </span>
            </div>
          </div>

          {/* Legal and Copyright */}
          <div className="text-center md:text-right space-y-1">
            <span>© {new Date().getFullYear()} Vana Ayu Naturals LLC. All rights reserved.</span>
            <div className="flex justify-center md:justify-end space-x-3.5 mt-0.5 text-gray-500">
              <a href="#" className="hover:text-forest transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-forest transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-forest transition-colors">FSSAI Compliance</a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
