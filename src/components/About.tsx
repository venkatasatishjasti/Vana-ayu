import { ShieldCheck, Heart, Leaf } from 'lucide-react';

interface AboutProps {
  onLearnMoreMission: () => void;
}

export default function About({ onLearnMoreMission }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Overlapping Images Frame */}
          <div className="lg:col-span-5 relative">
            {/* Visual background blob accent */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#F2E6D8] rounded-full filter blur-3xl -z-10" />
            
            {/* Main Image Container */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl border-4 border-[#F2E6D8] group">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800"
                alt="Organic farming soil with hands"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
              
              {/* Overlapping text badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-soft border-soft flex items-center space-x-4">
                <div className="bg-[#F2E6D8] p-3 rounded-xl text-forest">
                  <Leaf className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-dark-gray font-display">Est. 1926 • Heritage</h4>
                  <p className="text-xs text-text-muted mt-0.5">Four generations of organic soil stewardship.</p>
                </div>
              </div>
            </div>

            {/* Decorative dot grid */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-10 bg-radial from-earth to-transparent" />
          </div>

          {/* Right Column: Story & Mission & Vision Details */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-earth">
              Our Ancestral Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark-gray tracking-tight mt-2 mb-6">
              Nourishing Generations with <br />
              <span className="text-forest">Primal, Sacred Superfoods</span>
            </h2>

            <div className="space-y-6 font-sans text-sm sm:text-base text-text-muted leading-relaxed">
              <p>
                At <strong className="text-forest">Vana Ayu Naturals</strong>, we believe that food is medicine, and medicine is food. Our journey began in organic-certified ancestral lands, where we discovered the profound wellness benefits of chemical-free, heirloom agricultural techniques.
              </p>
              <p>
                Instead of fast-paced industrial extraction, we honor slow processes: sun-drying our almonds, stone-grinding sprouted ragi grains, and wood-boiling indigenous grass-fed butter to produce authentic Vedic ghee. No shortcuts, no compromises.
              </p>
            </div>

            {/* Mission & Vision Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {/* Mission Card */}
              <div className="p-5 rounded-2xl bg-[#F2E6D8] border-soft flex items-start space-x-3.5 hover:shadow-soft transition-all duration-200">
                <div className="p-2.5 bg-forest/10 text-forest rounded-xl shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-dark-gray">Our Mission</h3>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    To deliver unadulterated premium organic superfoods directly from the farm, ensuring bio-available vitality.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="p-5 rounded-2xl bg-[#F2E6D8] border-soft flex items-start space-x-3.5 hover:shadow-soft transition-all duration-200">
                <div className="p-2.5 bg-gold/10 text-gold rounded-xl shrink-0">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-dark-gray">Our Vision</h3>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    To revive heirloom grains, preserve ancient farming practices, and build a toxin-free future for our children.
                  </p>
                </div>
              </div>
            </div>

            {/* Small CTA Button */}
            <div className="mt-10">
              <button
                id="about-cta-btn"
                onClick={onLearnMoreMission}
                className="px-6 py-3 rounded-full bg-earth hover:bg-earth-hover text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:shadow-lg transform active:scale-95 cursor-pointer"
              >
                Our Purity Standards
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
