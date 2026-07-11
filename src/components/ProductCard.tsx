import { Star, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  key?: string;
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({
  product,
  onViewDetails,
}: ProductCardProps) {
  
  // Render full and half stars
  const renderStars = (rating: number) => {
    const stars = [];
    const floorRating = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= floorRating) {
        stars.push(<Star key={i} className="h-4.5 w-4.5 fill-gold text-gold" />);
      } else if (i === floorRating + 1 && rating % 1 >= 0.5) {
        stars.push(
          <div key={i} className="relative inline-block text-gold">
            <Star className="h-4.5 w-4.5 text-gray-300" />
            <div className="absolute top-0 left-0 overflow-hidden w-1/2">
              <Star className="h-4.5 w-4.5 fill-gold text-gold" />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} className="h-4.5 w-4.5 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div
      id={`product-card-${product.id}`}
      className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border-soft flex flex-col group relative"
    >
      
      {/* Badge (e.g. Best Seller, Superfood, Sprouted) */}
      {product.badge && (
        <span className="absolute top-4 left-4 z-10 bg-forest/90 text-white font-mono text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded-full shadow-sm">
          {product.badge}
        </span>
      )}

      {/* Product Image with Hover Zoom Container */}
      <div 
        className="relative pt-[100%] overflow-hidden bg-gray-50 cursor-pointer"
        onClick={() => onViewDetails(product)}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-[#F2E6D8]/50 flex flex-col items-center justify-center p-6 text-center select-none">
            <span className="text-4xl sm:text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
              {product.category === 'nuts' ? '🥜' : product.category === 'powders' ? '🌿' : product.category === 'dryfruits' ? '🍇' : product.category === 'flour' ? '🌾' : product.category === 'homemade' ? '🏡' : '🍃'}
            </span>
            <span className="font-display font-bold text-xs text-dark-gray tracking-wider uppercase">Vana Ayu Naturals</span>
            <span className="text-[10px] font-mono text-earth mt-1 uppercase tracking-widest">{product.category}</span>
          </div>
        )}
        {/* Hover Overlay Quick-View Button */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="bg-white/95 text-dark-gray hover:bg-forest hover:text-white px-4 py-2.5 rounded-full text-xs font-semibold shadow-md flex items-center space-x-1.5 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 cursor-pointer"
          >
            <Eye className="h-4 w-4" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Details Container */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          {/* Category & Weight Accent */}
          <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-earth mb-2">
            <span>{product.category}</span>
            <span className="bg-gray-100 px-1.5 py-0.5 rounded font-sans text-gray-500 font-medium">
              {product.weight}
            </span>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onViewDetails(product)}
            className="font-display font-bold text-base text-dark-gray hover:text-forest transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="font-sans text-xs text-text-muted mt-1.5 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pricing & Ratings Footer */}
        <div className="mt-4 pt-4 border-t border-gray-50">
          
          {/* Rating */}
          <div className="flex items-center space-x-1.5 mb-3">
            <div className="flex">{renderStars(product.rating)}</div>
            <span className="text-xs text-dark-gray font-bold font-mono">
              {product.rating}
            </span>
            <span className="text-[10px] text-gray-400 font-sans">
              ({product.reviewsCount})
            </span>
          </div>

          <div className="flex items-center justify-between">
            {/* Price */}
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400">
                Price
              </span>
              <span className="font-display font-extrabold text-lg text-forest leading-none">
                ${product.price.toFixed(2)}
              </span>
            </div>

            {/* View Details CTA Button */}
            <button
              onClick={() => onViewDetails(product)}
              className="px-4 py-2.5 border border-forest/30 text-forest hover:bg-forest hover:text-white rounded-full text-xs font-semibold shadow-sm hover:shadow-md transform active:scale-95 transition-all duration-200 flex items-center space-x-1 cursor-pointer"
            >
              <span>View Product</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
