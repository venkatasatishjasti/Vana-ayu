import { useState, useEffect } from 'react';
import { Search, Menu, X, Facebook, Instagram } from 'lucide-react';
import VanaAyuLogo from './VanaAyuLogo';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  scrollToSection: (id: string) => void;
}

export default function Navbar({
  searchQuery,
  onSearchChange,
  scrollToSection,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="app-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F2E6D8]/95 backdrop-blur-md shadow-md py-3'
          : 'bg-[#F2E6D8]/90 backdrop-blur-sm shadow-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Brand Logo & Navigation links aligned near it */}
          <div className="flex items-center space-x-6 xl:space-x-12">
            <div 
              id="brand-logo"
              className="cursor-pointer group shrink-0"
              onClick={() => handleNavClick('hero')}
            >
              <VanaAyuLogo variant="horizontal" className="h-14 sm:h-16 md:h-20 group-hover:scale-[1.02] transition-transform duration-300" />
            </div>

            {/* Navigation links - brought close to the logo on desktop */}
            <nav id="desktop-nav" className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <button
                onClick={() => handleNavClick('hero')}
                className="font-sans font-medium text-sm text-dark-gray hover:text-forest transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="font-sans font-medium text-sm text-dark-gray hover:text-forest transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('products')}
                className="font-sans font-medium text-sm text-dark-gray hover:text-forest transition-colors cursor-pointer"
              >
                Products
              </button>
              <button
                onClick={() => handleNavClick('features')}
                className="font-sans font-medium text-sm text-dark-gray hover:text-forest transition-colors cursor-pointer"
              >
                Mission
              </button>
              <button
                onClick={() => handleNavClick('recipes')}
                className="font-sans font-medium text-sm text-dark-gray hover:text-forest transition-colors cursor-pointer"
              >
                Health Recipes & Tips
              </button>
            </nav>
          </div>

          {/* Right Navigation Controls with Social Icons & Search */}
          <div id="nav-controls" className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
            
            {/* Desktop Social Icons (Facebook & Instagram) */}
            <div className="hidden sm:flex items-center space-x-3 border-r border-gray-200/60 pr-3 lg:pr-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-dark-gray hover:text-forest hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-110"
                title="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-dark-gray hover:text-[#CFA050] hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-110"
                title="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            {/* Mobile Social Icons (only showing on very small devices next to search if sm is hidden) */}
            <div className="flex sm:hidden items-center space-x-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-dark-gray hover:text-forest"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-dark-gray hover:text-[#CFA050]"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
            </div>

            {/* Search Input Toggle */}
            <div className="relative flex items-center">
              <div
                className={`flex items-center overflow-hidden bg-white border border-gray-200 rounded-full transition-all duration-300 ${
                  isSearchVisible ? 'w-40 sm:w-64 px-3 py-1 shadow-sm opacity-100' : 'w-0 opacity-0 pointer-events-none'
                }`}
              >
                <input
                  type="text"
                  placeholder="Search organic goods..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full text-xs bg-transparent focus:outline-none text-dark-gray"
                />
                {searchQuery && (
                  <button onClick={() => onSearchChange('')} className="text-gray-400 hover:text-dark-gray text-xs">
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>
              <button
                id="search-toggle-btn"
                onClick={() => {
                  setIsSearchVisible(!isSearchVisible);
                  if (isSearchVisible) onSearchChange('');
                }}
                className="p-2 text-dark-gray hover:text-forest rounded-full hover:bg-gray-100 transition-all"
                title="Search Products"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>

            {/* Hamburger Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 lg:hidden text-dark-gray hover:text-forest rounded-full hover:bg-gray-100 transition-all"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Horizontal Quick Links (Instantly visible on mobile preview) */}
      <div 
        id="mobile-quick-nav" 
        className="lg:hidden border-t border-gray-100/60 bg-[#F2E6D8]/95 py-2.5 overflow-x-auto flex items-center space-x-6 px-4 shadow-sm"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <button
          onClick={() => handleNavClick('hero')}
          className="font-sans font-medium text-xs text-dark-gray hover:text-forest transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          Home
        </button>
        <button
          onClick={() => handleNavClick('about')}
          className="font-sans font-medium text-xs text-dark-gray hover:text-forest transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          About
        </button>
        <button
          onClick={() => handleNavClick('products')}
          className="font-sans font-medium text-xs text-dark-gray hover:text-forest transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          Products
        </button>
        <button
          onClick={() => handleNavClick('features')}
          className="font-sans font-medium text-xs text-dark-gray hover:text-forest transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          Mission
        </button>
        <button
          onClick={() => handleNavClick('recipes')}
          className="font-sans font-medium text-xs text-dark-gray hover:text-forest transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          Health Recipes & Tips
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-menu" className="lg:hidden bg-white border-b border-gray-100 shadow-lg px-4 py-4 space-y-4 transition-all">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-left py-2 font-medium text-dark-gray hover:text-forest transition-all border-b border-gray-50 text-sm"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2 font-medium text-dark-gray hover:text-forest transition-all border-b border-gray-50 text-sm"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('products')}
              className="text-left py-2 font-medium text-dark-gray hover:text-forest transition-all border-b border-gray-50 text-sm"
            >
              Our Products
            </button>
            <button
              onClick={() => handleNavClick('features')}
              className="text-left py-2 font-medium text-dark-gray hover:text-forest transition-all border-b border-gray-50 text-sm"
            >
              Our Mission
            </button>
            <button
              onClick={() => handleNavClick('recipes')}
              className="text-left py-2 font-medium text-dark-gray hover:text-forest transition-all text-sm"
            >
              Health Recipes & Tips
            </button>
          </div>
          
          {/* Social Links inside Mobile Dropdown */}
          <div className="pt-2 flex items-center space-x-4 border-t border-gray-100">
            <span className="text-xs font-medium text-gray-400">Connect with us:</span>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-[#F2E6D8]/50 text-dark-gray hover:text-forest rounded-full transition-colors"
            >
              <Facebook className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-[#F2E6D8]/50 text-dark-gray hover:text-[#CFA050] rounded-full transition-colors"
            >
              <Instagram className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
