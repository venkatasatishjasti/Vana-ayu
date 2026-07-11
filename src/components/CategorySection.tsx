import { Category } from '../types';
import { CATEGORIES } from '../data';

interface CategorySectionProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export default function CategorySection({
  selectedCategory,
  onSelectCategory,
}: CategorySectionProps) {
  // We want to skip 'all' in the category slider/circles, or we can include it to let them reset.
  // Including 'all' under a 'Leaf' or '🍃 All' is perfect to reset filters!
  
  return (
    <section id="categories" className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl font-display font-bold text-dark-gray tracking-tight">
            Browse Our Natural Categories
          </h2>
          <p className="font-sans text-sm text-text-muted mt-2">
            Click on any category to explore our hand-crafted, nutrient-dense organic selections.
          </p>
        </div>

        {/* Circular category cards list */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`category-btn-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className="flex flex-col items-center group cursor-pointer focus:outline-none"
              >
                {/* Circular Icon Container */}
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-3xl sm:text-4xl transition-all duration-300 transform ${
                    isActive
                      ? 'bg-primary-green text-white shadow-lg scale-110 ring-4 ring-primary-green/20'
                      : 'bg-white border-soft text-dark-gray group-hover:bg-primary-green group-hover:text-white group-hover:scale-105 group-hover:shadow-md'
                  }`}
                >
                  <span className="group-hover:animate-bounce duration-300">
                    {cat.id === 'all' ? '🍃' : cat.icon}
                  </span>
                </div>

                {/* Category Title */}
                <span
                  className={`mt-4 font-display font-semibold text-xs sm:text-sm tracking-wide transition-colors ${
                    isActive
                      ? 'text-primary-green font-bold'
                      : 'text-dark-gray group-hover:text-primary-green'
                  }`}
                >
                  {cat.name}
                </span>

                {/* Active Indicator dot */}
                <div
                  className={`h-1.5 w-1.5 rounded-full mt-1.5 transition-all duration-300 ${
                    isActive ? 'bg-golden-yellow scale-100' : 'bg-transparent scale-0'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
