import { X, Star, Leaf, Globe, Weight } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
}: ProductDetailModalProps) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" id="detail-modal-overlay">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Frame Card */}
      <div className="relative bg-white rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col md:flex-row max-h-[90vh] animate-[scale-up_0.3s_ease-out]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-dark-gray shadow-md border border-gray-100 transition-colors cursor-pointer"
          title="Close Modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Left: Product Media Hero Column */}
        <div className="w-full md:w-1/2 relative bg-[#F2E6D8] flex items-center justify-center border-r border-gray-100 min-h-[250px] md:min-h-0">
          
          {/* Main high-res product photo */}
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full min-h-[250px] md:h-full max-h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full min-h-[250px] bg-[#F2E6D8] flex flex-col items-center justify-center p-8 text-center select-none">
              <span className="text-6xl mb-4">
                {product.category === 'nuts' ? '🥜' : product.category === 'powders' ? '🌿' : product.category === 'dryfruits' ? '🍇' : product.category === 'flour' ? '🌾' : product.category === 'homemade' ? '🏡' : '🍃'}
              </span>
              <span className="font-display font-black text-lg text-dark-gray tracking-wider uppercase">Vana Ayu Naturals</span>
              <span className="text-xs font-mono text-earth mt-1.5 uppercase tracking-widest">{product.category}</span>
            </div>
          )}

          {/* Sparkle badge */}
          {product.badge && (
            <span className="absolute bottom-4 left-4 bg-forest text-white font-mono text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full shadow-sm">
              ✨ {product.badge}
            </span>
          )}
        </div>

        {/* Right: Technical specifications and ingredients details Column */}
        <div className="w-full md:w-1/2 overflow-y-auto p-6 sm:p-8 flex flex-col justify-between">
          
          <div>
            {/* Header: Name, price, stars */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-earth">
                Vana Ayu Naturals • {product.category}
              </span>
              <h2 className="font-display font-bold text-2xl text-dark-gray leading-tight">
                {product.name}
              </h2>
            </div>

            {/* Price & Rating Row */}
            <div className="flex items-center justify-between mt-3 mb-6">
              <span className="font-display font-black text-2xl text-forest">
                ${product.price.toFixed(2)}
              </span>
              <div className="flex items-center space-x-1">
                <Star className="h-4.5 w-4.5 fill-gold text-gold" />
                <span className="text-sm font-bold font-mono text-dark-gray">{product.rating}</span>
                <span className="text-xs text-gray-400">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            {/* Description lines */}
            <div className="space-y-4 font-sans text-xs sm:text-sm text-text-muted leading-relaxed">
              <p>{product.fullDescription}</p>
            </div>

            {/* Metadata Badges: Origin and Weight */}
            <div className="grid grid-cols-2 gap-3.5 my-6">
              <div className="p-3 bg-[#F2E6D8] border border-gray-100 rounded-2xl flex items-center space-x-2.5">
                <Globe className="h-5 w-5 text-earth" />
                <div>
                  <span className="text-[10px] uppercase text-gray-400 font-mono block">Origin</span>
                  <span className="text-xs font-bold text-dark-gray">{product.origin}</span>
                </div>
              </div>

              <div className="p-3 bg-[#F2E6D8] border border-gray-100 rounded-2xl flex items-center space-x-2.5">
                <Weight className="h-5 w-5 text-forest" />
                <div>
                  <span className="text-[10px] uppercase text-gray-400 font-mono block">Pack Weight</span>
                  <span className="text-xs font-bold text-dark-gray">{product.weight}</span>
                </div>
              </div>
            </div>

            {/* Ingredients Section */}
            <div className="mb-6">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-dark-gray mb-2 flex items-center space-x-1.5">
                <Leaf className="h-4 w-4 text-forest" />
                <span>Primal Ingredients</span>
              </h4>
              <p className="font-sans text-xs text-text-muted bg-[#F2E6D8] p-3 rounded-2xl border border-gray-100 leading-relaxed italic">
                {product.ingredients.join(', ')}
              </p>
            </div>

            {/* Nutrition Facts Table */}
            <div className="mb-6">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-dark-gray mb-2.5">
                Nutrition Facts (Per Serving)
              </h4>
              <div className="border border-gray-200 rounded-2xl overflow-hidden text-xs">
                {Object.entries(product.nutrition).map(([key, val], idx) => (
                  <div
                    key={key}
                    className={`flex justify-between px-4 py-2 ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-[#F2E6D8]'
                    } border-b border-gray-100 last:border-b-0`}
                  >
                    <span className="text-text-muted font-medium">{key}</span>
                    <span className="font-mono font-bold text-dark-gray">{val}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Action Controls footer */}
          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4">
            
            <p className="text-xs text-text-muted text-center sm:text-left leading-relaxed">
              We slow-process our products to order in small organic batches. For general inquiries or to purchase, subscribe to our newsletter below or get in touch.
            </p>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-forest hover:bg-forest/90 text-white text-xs font-semibold tracking-wider uppercase shadow-sm transition-all cursor-pointer text-center shrink-0"
            >
              Close Details
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}
