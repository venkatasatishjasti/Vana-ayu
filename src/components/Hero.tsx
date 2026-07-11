import { ArrowRight, Leaf, ShieldCheck, Award } from 'lucide-react';
import VanaAyuLogo from './VanaAyuLogo';

interface HeroProps {
  onExploreProducts: () => void;
  onLearnMore: () => void;
}

export default function Hero({ onExploreProducts, onLearnMore }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative bg-white pt-12 pb-24 sm:pt-20 sm:pb-32 lg:pt-28 lg:pb-40 overflow-hidden border-b border-gray-100 flex items-center"
    >
      {/* Background Image: logo2.png covering the hero section with grass and logo naturally (desktop only) */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-right-bottom bg-cover pointer-events-none select-none hidden lg:block"
        style={{ backgroundImage: "url('/logo2.png')" }}
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Information content */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Tagline Accent */}
            <div className="flex items-center gap-2 text-earth font-bold text-xs uppercase tracking-widest mb-5">
              <span>•</span>
              <span>100% Certified Organic</span>
              <span>•</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-green-900 leading-tight tracking-tight mb-5 underline decoration-gold decoration-4 underline-offset-4">
              Natural Foods for a <br />
              <span className="text-green-900 underline decoration-gold decoration-4 underline-offset-4">Healthier Life</span>
            </h1>

            {/* Subheading */}
            <p className="font-sans text-base sm:text-lg text-gray-500 max-w-xl leading-relaxed mb-8">
              Premium quality products sourced directly from farms with artisanal care and traditional stone-grounding and sun-curing methods.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-explore-btn"
                onClick={onExploreProducts}
                className="bg-forest hover:bg-forest/90 text-white px-8 py-3.5 rounded-full font-bold shadow-soft hover:shadow-xl hover:shadow-forest/10 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer text-sm"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                id="hero-learn-more-btn"
                onClick={onLearnMore}
                className="border-2 border-forest text-forest hover:bg-forest/5 px-8 py-3.5 rounded-full font-bold transition-all duration-200 cursor-pointer text-sm flex items-center justify-center"
              >
                Learn More
              </button>
            </div>

            {/* High-contrast trust badges inside Hero */}
            <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-forest/5 rounded-xl text-forest">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800">Lab Tested</h4>
                  <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider font-semibold">Purity Certified</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-gold/5 rounded-xl text-gold">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800">100% Natural</h4>
                  <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider font-semibold">FSSAI Approved</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center space-x-3">
                <div className="p-2.5 bg-earth/5 rounded-xl text-earth">
                  <Leaf className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800">No Preservatives</h4>
                  <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider font-semibold">Sun-Cured Care</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Decorative premium brand emblem badge */}
          <div className="lg:col-span-5 hidden lg:block relative w-full h-[440px] flex items-center justify-center">
            {/* Elegant floating visual card carrying the brand logo */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100/80 p-8 sm:p-10 flex flex-col items-center justify-center transform hover:scale-[1.01] transition-transform duration-500">
              <VanaAyuLogo variant="full" className="w-64" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
