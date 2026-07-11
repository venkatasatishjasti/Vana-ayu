import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-[#F2E6D8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quotation Icon decoration */}
        <div className="flex justify-center mb-6">
          <div className="bg-primary-green p-4 rounded-full text-white shadow-lg shadow-primary-green/20">
            <Quote className="h-8 w-8" />
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-dark-gray tracking-tight">
            Trusted by Wellness Scholars
          </h2>
          <p className="font-sans text-sm text-text-muted mt-2">
            Read stories of healing and vital food connection from our global customer club.
          </p>
        </div>

        {/* Carousel Container Card */}
        <div className="relative bg-white border-soft rounded-3xl p-8 sm:p-12 shadow-soft hover:shadow-lg transition-all duration-300">
          
          {/* Active Testimonial Content */}
          <div className="text-center">
            
            {/* Stars */}
            <div className="flex items-center justify-center space-x-1.5 mb-6">
              {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-golden-yellow text-golden-yellow" />
              ))}
            </div>

            {/* Testimonial Review Body */}
            <blockquote className="font-sans text-base sm:text-lg lg:text-xl text-dark-gray font-light italic leading-relaxed max-w-3xl mx-auto">
              "{TESTIMONIALS[activeIndex].review}"
            </blockquote>

            {/* User Profile Info */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center sm:space-x-4">
              <img
                src={TESTIMONIALS[activeIndex].avatar}
                alt={TESTIMONIALS[activeIndex].name}
                className="w-16 h-16 rounded-full border-2 border-primary-green/10 object-cover shadow-sm mb-3 sm:mb-0"
                referrerPolicy="no-referrer"
              />
              <div className="text-center sm:text-left">
                <h4 className="font-display font-bold text-sm text-dark-gray">
                  {TESTIMONIALS[activeIndex].name}
                </h4>
                <p className="text-xs text-earth-brown font-semibold mt-0.5">
                  {TESTIMONIALS[activeIndex].role}
                </p>
              </div>
            </div>

          </div>

          {/* Carousel Buttons (Left & Right arrows) */}
          <div className="flex items-center justify-center space-x-4 mt-8 sm:absolute sm:inset-y-0 sm:left-4 sm:right-4 sm:justify-between sm:mt-0 sm:pointer-events-none">
            
            {/* Left Button */}
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              className="p-3 bg-[#F2E6D8] hover:bg-primary-green hover:text-white rounded-full text-dark-gray border border-gray-100 shadow-sm transition-all sm:pointer-events-auto active:scale-95 cursor-pointer"
              title="Previous Review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Right Button */}
            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              className="p-3 bg-[#F2E6D8] hover:bg-primary-green hover:text-white rounded-full text-dark-gray border border-gray-100 shadow-sm transition-all sm:pointer-events-auto active:scale-95 cursor-pointer"
              title="Next Review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

          </div>

          {/* Slide dots Indicators */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                id={`testimonial-dot-${idx}`}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                  activeIndex === idx ? 'w-8 bg-primary-green' : 'w-2.5 bg-gray-200'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
