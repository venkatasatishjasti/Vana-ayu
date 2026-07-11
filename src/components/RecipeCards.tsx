import { Clock, ChefHat, User, Calendar, BookOpen } from 'lucide-react';
import { Recipe } from '../types';
import { RECIPES } from '../data';

interface RecipeCardsProps {
  onSelectRecipe: (recipe: Recipe) => void;
}

export default function RecipeCards({ onSelectRecipe }: RecipeCardsProps) {
  return (
    <section id="recipes" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-earth-brown uppercase bg-[#F2E6D8] border border-gray-100 px-3 py-1.5 rounded-full">
            Ayurvedic Wellness Library
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark-gray mt-4 tracking-tight">
            Health Recipes & Nutrition Tips
          </h2>
          <p className="font-sans text-sm text-text-muted mt-2">
            Discover traditional food combinations, ancient brewing guides, and easy wellness tips from our expert nutrition panels.
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RECIPES.map((recipe) => (
            <div
              key={recipe.id}
              id={`recipe-card-${recipe.id}`}
              className="bg-white rounded-3xl overflow-hidden border-soft shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              
              {/* Recipe Image with category label overlay */}
              <div className="relative pt-[60%] overflow-hidden bg-gray-100">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Category label overlay */}
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-earth-brown text-[10px] font-mono tracking-wider uppercase font-semibold px-2.5 py-1 rounded-full shadow-sm">
                  {recipe.category}
                </span>
              </div>

              {/* Recipe Info */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {/* Meta (Time & Difficulty) */}
                  <div className="flex items-center space-x-4 text-xs font-mono text-gray-400 mb-3">
                    <span className="flex items-center space-x-1">
                      <Clock className="h-3.5 w-3.5 text-earth-brown" />
                      <span>{recipe.time}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <ChefHat className="h-3.5 w-3.5 text-primary-green" />
                      <span>{recipe.difficulty}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-dark-gray leading-snug group-hover:text-primary-green transition-colors mb-2.5 line-clamp-2">
                    {recipe.title}
                  </h3>

                  {/* Summary */}
                  <p className="font-sans text-xs text-text-muted leading-relaxed line-clamp-3 mb-4">
                    {recipe.summary}
                  </p>
                </div>

                {/* Card Footer: Author & Read More button */}
                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] text-gray-500 font-bold uppercase font-mono">
                      {recipe.author.charAt(0)}
                    </div>
                    <span className="text-[11px] font-medium text-text-muted">
                      By {recipe.author}
                    </span>
                  </div>

                  <button
                    id={`read-recipe-btn-${recipe.id}`}
                    onClick={() => onSelectRecipe(recipe)}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-primary-green hover:text-primary-green-hover transition-colors group/btn cursor-pointer"
                  >
                    <span>Read Recipe</span>
                    <BookOpen className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
