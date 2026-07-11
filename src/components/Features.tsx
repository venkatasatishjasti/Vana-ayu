import { useEffect, useState } from 'react';
import { Leaf, Ban, Wheat, Award, Users, ShieldAlert, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

export default function Features() {
  const [organicCount, setOrganicCount] = useState(0);
  const [additiveCount, setAdditiveCount] = useState(100);
  const [customerCount, setCustomerCount] = useState(0);

  // Simple and safe scroll counters animation
  useEffect(() => {
    const interval = setInterval(() => {
      setOrganicCount((prev) => {
        if (prev >= 100) return 100;
        return prev + 5;
      });
      setAdditiveCount((prev) => {
        if (prev <= 0) return 0;
        return prev - 5;
      });
      setCustomerCount((prev) => {
        if (prev >= 15000) return 15000;
        return prev + 500;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Map icon strings to Lucide components
  const getIcon = (id: string) => {
    switch (id) {
      case 'natural':
        return <Leaf className="h-6 w-6 text-forest" />;
      case 'preservatives':
        return <Ban className="h-6 w-6 text-[#E57373]" />;
      case 'fresh':
        return <Wheat className="h-6 w-6 text-gold" />;
      case 'certified':
        return <Award className="h-6 w-6 text-forest" />;
      default:
        return <Sparkles className="h-6 w-6 text-earth" />;
    }
  };

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-forest uppercase bg-forest/10 px-3 py-1 rounded-full">
            Our Mission & Pledge
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark-gray mt-3 tracking-tight">
            Our Pure Food Standards
          </h2>
          <p className="font-sans text-sm text-text-muted mt-2">
            Every product in the Asha Synergy catalog is monitored closely from sowing to stone-milling, ensuring uncompromised purity.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.id}
              id={`feature-card-${item.id}`}
              className="bg-[#F2E6D8] border-soft p-8 rounded-3xl hover:bg-white hover:shadow-soft hover:-translate-y-2 transition-all duration-300 flex flex-col items-start group"
            >
              {/* Circular Icon with scale effect */}
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-forest/10 transition-all duration-300">
                {getIcon(item.id)}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-dark-gray mt-6 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-xs text-text-muted leading-relaxed flex-grow">
                {item.description}
              </p>

              {/* Subtle hover line highlight */}
              <div className="w-0 h-1 bg-forest rounded-full mt-6 group-hover:w-12 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Dynamic Animated Statistics Counters Row */}
        <div className="mt-20 pt-16 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <span className="font-display font-extrabold text-4xl lg:text-5xl text-forest tracking-tight leading-none">
              {organicCount}%
            </span>
            <span className="font-sans text-sm font-semibold text-dark-gray mt-2.5">
              Organic Integrity
            </span>
            <span className="font-mono text-[10px] text-gray-400 mt-1 uppercase tracking-wider">
              Absolutely No Chemical Spray
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <span className="font-display font-extrabold text-4xl lg:text-5xl text-[#E57373] tracking-tight leading-none">
              {additiveCount}%
            </span>
            <span className="font-sans text-sm font-semibold text-dark-gray mt-2.5">
              Artificial Additives
            </span>
            <span className="font-mono text-[10px] text-gray-400 mt-1 uppercase tracking-wider">
              No MSG, Color, or Sulfites
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <span className="font-display font-extrabold text-4xl lg:text-5xl text-gold tracking-tight leading-none">
              {(customerCount / 1000).toFixed(0)}k+
            </span>
            <span className="font-sans text-sm font-semibold text-dark-gray mt-2.5">
              Happy Families Served
            </span>
            <span className="font-mono text-[10px] text-gray-400 mt-1 uppercase tracking-wider">
              Across USA, Canada, and India
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
