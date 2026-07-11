import { useState } from 'react';
import { SlidersHorizontal, ArrowUpDown, X, Sparkles } from 'lucide-react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface FeaturedProductsProps {
  products: Product[];
  selectedCategory: string;
  searchQuery: string;
  onViewDetails: (product: Product) => void;
  onResetFilters: () => void;
}

type SortOption = 'default' | 'price-low' | 'price-high' | 'rating-high';

export default function FeaturedProducts({
  products,
  selectedCategory,
  searchQuery,
  onViewDetails,
  onResetFilters,
}: FeaturedProductsProps) {
  const [sortBy, setSortBy] = useState<SortOption>('default');

  // Filter products based on selectedCategory AND searchQuery
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    }
    if (sortBy === 'price-high') {
      return b.price - a.price;
    }
    if (sortBy === 'rating-high') {
      return b.rating - a.rating;
    }
    return 0; // default order
  });

  return (
    <section id="products" className="py-20 bg-[#F2E6D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 bg-forest/10 text-forest px-3 py-1 rounded-full mb-3 text-xs font-mono uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Vana Ayu Pantry</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark-gray tracking-tight">
              Featured Organic Treasures
            </h2>
            <p className="font-sans text-sm text-text-muted mt-2 max-w-xl">
              Ethically sourced superfoods, fresh stone-ground flours, and pure artisanal pantry staples made in harmony with Mother Nature.
            </p>
          </div>

          {/* Filtering & Sorting Controls */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-3">
            
            {/* Active filters indicators */}
            {(selectedCategory !== 'all' || searchQuery !== '') && (
              <button
                onClick={onResetFilters}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-dark-gray text-xs font-semibold rounded-full transition-all cursor-pointer"
              >
                <span>Clear Filters</span>
                <X className="h-3.5 w-3.5" />
              </button>
            )}

            {/* Sorting Dropdown */}
            <div className="flex items-center space-x-2 bg-white px-4 py-2 border border-gray-100 rounded-full shadow-sm text-xs">
              <ArrowUpDown className="h-3.5 w-3.5 text-earth" />
              <span className="font-medium text-text-muted">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-transparent focus:outline-none text-dark-gray font-semibold pr-1 cursor-pointer"
              >
                <option value="default">Relevance</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating-high">Rating: Highest First</option>
              </select>
            </div>

            <div className="text-xs text-gray-500 font-mono font-medium">
              Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
            </div>

          </div>
        </div>

        {/* Empty State Screen */}
        {sortedProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm max-w-lg mx-auto">
            <div className="text-5xl mb-4">🌻</div>
            <h3 className="font-display font-bold text-lg text-dark-gray">
              No Organic Items Found
            </h3>
            <p className="font-sans text-sm text-text-muted mt-2 mb-6">
              We couldn't find any products matching your search "{searchQuery}" under this category. Please clear your filter to view our complete list of pure foods.
            </p>
            <button
              onClick={onResetFilters}
              className="px-6 py-2.5 rounded-full bg-forest hover:bg-forest/90 text-white text-sm font-semibold transition-all shadow-sm cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          /* Responsive Product Card Grid (1 col Mobile, 2 cols Tablet, 4 cols Desktop) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sortedProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
