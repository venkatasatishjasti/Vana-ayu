import { useState } from 'react';
import { X, Clock, ChefHat, Check, User, Sparkles, BookOpen } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeDetailModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function RecipeDetailModal({
  recipe,
  isOpen,
  onClose,
}: RecipeDetailModalProps) {
  if (!isOpen || !recipe) return null;

  // Track checked ingredients for culinary assistance
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Extract which Vana Ayu ingredients might match
  const matchesVanaAyuIngredients = (ingLine: string) => {
    const lower = ingLine.toLowerCase();
    if (lower.includes('turmeric')) return 'High-Curcumin Turmeric Powder';
    if (lower.includes('ghee')) return 'Wood-Fired A2 Vedic Ghee';
    if (lower.includes('almond')) return 'Premium California Almonds';
    if (lower.includes('ragi') || lower.includes('finger millet')) return 'Traditional Ragi Flour';
    if (lower.includes('dates')) return 'Organic Medjool Dates';
    if (lower.includes('cashew')) return 'Organic Whole Cashews';
    if (lower.includes('raisin')) return 'Sun-Dried Golden Raisins';
    return null;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" id="recipe-modal-overlay">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Frame Card */}
      <div className="relative bg-white rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh] animate-[scale-up_0.3s_ease-out]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/95 hover:bg-white text-dark-gray shadow-md border border-gray-100 transition-colors cursor-pointer"
          title="Close Recipe"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1">
          
          {/* Header Photo Box */}
          <div className="relative h-64 sm:h-80 bg-gray-100">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Header Content Overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
              <span className="bg-forest text-white font-mono text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full shadow-sm inline-block">
                {recipe.category}
              </span>
              <h2 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight leading-tight">
                {recipe.title}
              </h2>
              
              {/* Meta statistics row */}
              <div className="flex items-center space-x-4 text-xs font-mono text-gray-300 pt-1">
                <span className="flex items-center space-x-1">
                  <Clock className="h-3.5 w-3.5 text-gold" />
                  <span>Prep: {recipe.time}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <ChefHat className="h-3.5 w-3.5 text-forest" />
                  <span>Difficulty: {recipe.difficulty}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <User className="h-3.5 w-3.5" />
                  <span>By {recipe.author}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Cooking Directions details */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Recipe summary block */}
            <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed border-l-4 border-forest pl-4 italic">
              "{recipe.summary}"
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Left Side: Interactive Ingredients Checklist */}
              <div className="md:col-span-5 space-y-4">
                <h3 className="font-display font-bold text-xs uppercase tracking-wider text-dark-gray border-b border-gray-100 pb-2 flex items-center space-x-1.5">
                  <BookOpen className="h-4 w-4 text-earth" />
                  <span>Ingredients Checklist</span>
                </h3>
                
                <ul className="space-y-3.5">
                  {recipe.ingredients.map((ing, idx) => {
                    const matchedProduct = matchesVanaAyuIngredients(ing);
                    const isChecked = !!checkedIngredients[idx];

                    return (
                      <li key={idx} className="flex flex-col space-y-1 bg-[#F2E6D8] p-3 rounded-2xl border border-gray-50">
                        {/* Checkbox row */}
                        <div
                          onClick={() => toggleIngredient(idx)}
                          className="flex items-start space-x-2.5 cursor-pointer select-none"
                        >
                          <div className={`mt-0.5 h-4.5 w-4.5 rounded-md border flex items-center justify-center shrink-0 transition-all ${
                            isChecked
                              ? 'bg-forest border-forest text-white'
                              : 'bg-white border-gray-300 hover:border-forest'
                          }`}>
                            {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                          </div>
                          <span className={`text-xs leading-relaxed transition-all ${isChecked ? 'line-through text-gray-400 font-light' : 'text-dark-gray font-medium'}`}>
                            {ing}
                          </span>
                        </div>

                        {/* Vana Ayu Premium Ingredient badge */}
                        {matchedProduct && (
                          <div className="mt-2 pl-7 border-t border-gray-100/60 pt-1.5 flex items-center justify-between">
                            <span className="text-[9px] font-mono font-bold text-earth uppercase tracking-wider block">
                              ✨ Vana Ayu Premium
                            </span>
                            <span className="text-[9px] font-semibold font-sans bg-forest/10 text-forest px-2 py-0.5 rounded-full">
                              Featured
                            </span>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Right Side: Step by Step Instructions */}
              <div className="md:col-span-7 space-y-4">
                <h3 className="font-display font-bold text-xs uppercase tracking-wider text-dark-gray border-b border-gray-100 pb-2">
                  Preparation Instructions
                </h3>

                <ol className="space-y-6">
                  {recipe.instructions.map((step, idx) => (
                    <li key={idx} className="flex space-x-3.5 items-start">
                      {/* Step Number Badge */}
                      <span className="h-6.5 w-6.5 rounded-full bg-forest/10 text-forest flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block font-semibold font-sans">
                          Step {idx + 1}
                        </span>
                        <p className="font-sans text-xs text-text-muted leading-relaxed">
                          {step}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

            </div>

            {/* Ayurvedic Nutrition tip block */}
            <div className="p-5 rounded-3xl bg-gold/5 border border-gold/10 flex items-start space-x-3.5">
              <Sparkles className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-xs text-dark-gray">Ayurvedic Culinary Principle</h4>
                <p className="font-sans text-xs text-text-muted mt-1 leading-relaxed">
                  Always cook spices slowly over low heat to release their water-soluble and lipid-soluble therapeutic compounds. Mixing turmeric with black pepper and wood-fired ghee increases active curcumin absorption efficiency by over 2000%!
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Footer close action button */}
        <div className="px-6 py-4 border-t border-gray-100 flex justify-end bg-[#F2E6D8]">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-dark-gray hover:bg-dark-gray/90 text-white font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer shadow-sm active:scale-95"
          >
            Close Recipe
          </button>
        </div>

      </div>
    </div>
  );
}
