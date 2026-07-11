import React, { useState } from 'react';

interface VanaAyuLogoProps {
  className?: string;
  variant?: 'icon' | 'full' | 'horizontal';
  light?: boolean;
}

export default function VanaAyuLogo({
  className = '',
  variant = 'horizontal',
  light = false,
}: VanaAyuLogoProps) {
  const [useFallback, setUseFallback] = useState(false);

  // Set default dimensions depending on the variant if they aren't explicitly overridden in className
  let sizeClass = '';
  if (variant === 'icon') {
    sizeClass = 'h-10 w-10';
  } else if (variant === 'horizontal') {
    sizeClass = 'h-11 sm:h-12 md:h-14';
  } else if (variant === 'full') {
    sizeClass = 'h-36 md:h-40';
  }

  // Check if a height or width class has been supplied in the custom className
  const classes = className.split(' ');
  const hasHeight = classes.some(c => c.startsWith('h-') || c.includes(':h-'));
  const hasWidth = classes.some(c => c.startsWith('w-') || c.includes(':w-'));

  let finalSizeClass = sizeClass;
  if (hasHeight && hasWidth) {
    finalSizeClass = '';
  } else if (hasHeight) {
    finalSizeClass = 'w-auto';
  } else if (hasWidth) {
    finalSizeClass = 'h-auto';
  }

  const imgClass = `${finalSizeClass} ${className}`.trim();

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    // If the image is the 1x1 transparent placeholder, use the elegant fallback
    if (img.naturalWidth <= 1 && img.naturalHeight <= 1) {
      setUseFallback(true);
    }
  };

  const handleError = () => {
    setUseFallback(true);
  };

  if (useFallback) {
    // Elegant SVG fallback that looks like a simplified version of the customized logo
    const forestColor = light ? '#FFFFFF' : '#1C3B2B';
    const goldColor = '#CFA050';

    if (variant === 'icon') {
      return (
        <svg
          viewBox="0 0 100 100"
          className={imgClass || 'h-10 w-10'}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" stroke={forestColor} strokeWidth="2" />
          <path d="M 35 35 L 50 70 L 65 35" stroke={forestColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="50" cy="45" r="4" fill={goldColor} />
        </svg>
      );
    }

    if (variant === 'horizontal') {
      return (
        <div className="flex items-center gap-3">
          <svg
            viewBox="0 0 100 100"
            className="h-9 w-9 shrink-0"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="45" stroke={forestColor} strokeWidth="3" />
            <path d="M 35 35 L 50 70 L 65 35" stroke={forestColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="50" cy="45" r="5" fill={goldColor} />
          </svg>
          <div className="flex flex-col justify-center select-none text-left">
            <span
              className="font-display font-bold text-lg sm:text-xl tracking-[0.05em] uppercase leading-none transition-colors duration-300"
              style={{ color: forestColor }}
            >
              vana ayu
            </span>
            <span
              className="font-sans text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase mt-1 transition-colors duration-300"
              style={{ color: goldColor }}
            >
              naturals
            </span>
          </div>
        </div>
      );
    }

    // Default 'full' fallback
    return (
      <div className="flex flex-col items-center text-center">
        <svg
          viewBox="0 0 100 100"
          className="h-20 w-20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" stroke={forestColor} strokeWidth="2.5" />
          <path d="M 35 35 L 50 70 L 65 35" stroke={forestColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="50" cy="45" r="5" fill={goldColor} />
        </svg>
        <h1
          className="font-display font-normal text-2xl sm:text-3xl tracking-[0.06em] mt-3 uppercase leading-tight"
          style={{ color: forestColor }}
        >
          vana ayu
        </h1>
        <div className="flex items-center justify-center w-full max-w-[200px] my-1">
          <div className="h-[1px] flex-1" style={{ backgroundColor: goldColor }} />
          <span
            className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase px-3"
            style={{ color: goldColor }}
          >
            naturals
          </span>
          <div className="h-[1px] flex-1" style={{ backgroundColor: goldColor }} />
        </div>
      </div>
    );
  }

  return (
    <img
      src="/logo.png"
      alt="Vana Ayu Naturals Logo"
      className={`${imgClass} object-contain transition-all duration-300 ${
        light ? 'bg-white p-1 rounded-xl shadow-sm' : ''
      }`}
      referrerPolicy="no-referrer"
      onLoad={handleLoad}
      onError={handleError}
    />
  );
}
