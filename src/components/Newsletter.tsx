import { useState, FormEvent } from 'react';
import { Mail, Check, Sparkles } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please provide a valid email address.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please provide a valid email structure (e.g. name@example.com).');
      return;
    }

    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section id="newsletter" className="py-20 bg-[#F2E6D8] border-t border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Newsletter Content Frame */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
          {/* Subtle nature circle decoration */}
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-forest/5 rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-gold/5 rounded-full" />

          <div className="relative z-10 max-w-xl mx-auto">
            {/* Sparkles Icon */}
            <div className="inline-flex items-center space-x-1.5 bg-gold/10 text-gold px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Vana Ayu Club</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-bold text-dark-gray tracking-tight">
              Stay Updated with Organic Lore
            </h2>
            <p className="font-sans text-xs sm:text-sm text-text-muted mt-2 mb-8 leading-relaxed">
              Subscribe to receive weekly Ayurvedic health recipes, traditional immunity tips, and exclusive early access to wood-fired small-batch ghee batches.
            </p>

            {isSubmitted ? (
              /* Success Message */
              <div className="bg-forest/10 border border-forest/20 rounded-2xl p-6 flex flex-col items-center animate-fade-in">
                <div className="h-10 w-10 rounded-full bg-forest text-white flex items-center justify-center mb-3">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-sm text-dark-gray">
                  You are now on the Purity Circle list!
                </h3>
                <p className="font-sans text-xs text-text-muted mt-1">
                  We've sent a 15% discount code to your email. See you in the wellness circle.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-forest hover:underline cursor-pointer"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              /* Subscription Form */
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    className="w-full pl-11 pr-4 py-3.5 rounded-full bg-[#F2E6D8] border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-forest/50 text-dark-gray placeholder-gray-400 font-sans"
                  />
                </div>
                <button
                  type="submit"
                  id="newsletter-subscribe-btn"
                  className="px-6 py-3.5 rounded-full bg-forest hover:bg-forest/90 text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm hover:shadow-md cursor-pointer shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}

            {/* Error Message */}
            {error && (
              <p className="text-xs text-[#E57373] mt-2 font-medium font-sans">
                {error}
              </p>
            )}

            <p className="text-[10px] text-gray-400 font-sans mt-4">
              We respect your privacy. Unsubscribe at any time. No spam, ever.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
