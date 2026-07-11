import { useState } from 'react';

// Type Interfaces
import { Product, Recipe } from './types';

// Content Database
import { PRODUCTS } from './data';

// Custom Visual Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import RecipeCards from './components/RecipeCards';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

// Side panels / drawer overlays
import ProductDetailModal from './components/ProductDetailModal';
import RecipeDetailModal from './components/RecipeDetailModal';

export default function App() {
  // Client-side search and category states
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Active details modal controllers
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  // General Page Scroll anchor helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Reset filtering operations
  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F2E6D8]">
      
      {/* Sticky Header Navigation Component */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={(query) => {
          setSearchQuery(query);
          if (query) scrollToSection('products');
        }}
        scrollToSection={scrollToSection}
      />

      {/* Main Container Layout */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero
          onExploreProducts={() => scrollToSection('products')}
          onLearnMore={() => scrollToSection('about')}
        />

        {/* Circular Category filtering navigation bar */}
        <CategorySection
          selectedCategory={selectedCategory}
          onSelectCategory={(categoryId) => {
            setSelectedCategory(categoryId);
            scrollToSection('products');
          }}
        />

        {/* Featured Products Shop Section */}
        <FeaturedProducts
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          onViewDetails={setSelectedProduct}
          onResetFilters={handleResetFilters}
        />

        {/* Brand Story About Us section */}
        <About onLearnMoreMission={() => scrollToSection('features')} />

        {/* Core Values and Why Choose Us Section */}
        <Features />

        {/* Customer testimonial slider reviews */}
        <Testimonials />

        {/* Wellness Recipes and nutrition blog portal */}
        <RecipeCards onSelectRecipe={setSelectedRecipe} />

        {/* Newsletter dynamic email form */}
        <Newsletter />

      </main>

      {/* Structured Footer Section */}
      <Footer
        scrollToSection={scrollToSection}
        onSelectCategory={setSelectedCategory}
      />

      {/* ==================== INTERACTIVE DRAWERS & MODALS OVERLAYS ==================== */}

      {/* Product Information Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Recipe Checklist Instruction detail Modal */}
      <RecipeDetailModal
        recipe={selectedRecipe}
        isOpen={selectedRecipe !== null}
        onClose={() => setSelectedRecipe(null)}
      />

    </div>
  );
}
