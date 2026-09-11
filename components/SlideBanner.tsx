'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    src: '/images/slides/1.svg',
    alt: 'Dedak Padi dan Bekatul Berkualitas UD Purnama Bondowoso Jawa Timur',
  },
  {
    id: 2,
    src: '/images/slides/2.svg',
    alt: 'Pasokan Dedak Padi Segar Langsung dari Penggilingan Padi Bondowoso',
  },
  {
    id: 3,
    src: '/images/slides/3.svg',
    alt: 'UD Purnama Bondowoso - Produsen & Supplier Dedak Padi Pakan Ternak',
  },
];

const AUTO_SLIDE_INTERVAL = 5000; // 5 detik

export default function SlideBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-slide effect (resets every time currentIndex changes or when unhovered)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [isHovered, nextSlide, currentIndex]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    // Minimum swipe distance of 50px
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  return (
    <section
      className="pt-4 pb-8 sm:pt-6 sm:pb-10 bg-white"
      aria-label="Banner informasi produk"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Galeri Slide Promo Produk"
          className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl border border-stone-200/70 bg-stone-100 group isolate focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onKeyDown={handleKeyDown}
        >
          {/* Slides track */}
          <div
            className="flex w-full h-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="min-w-full w-full h-full relative flex-shrink-0"
                aria-hidden={currentIndex !== index}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                  className="w-full h-full object-cover select-none"
                  priority={index === 0}
                  unoptimized
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/35 hover:bg-black/65 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 opacity-80 sm:opacity-0 sm:group-hover:opacity-100 shadow-md hover:scale-105 active:scale-95 z-10"
            aria-label="Slide sebelumnya"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/35 hover:bg-black/65 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 opacity-80 sm:opacity-0 sm:group-hover:opacity-100 shadow-md hover:scale-105 active:scale-95 z-10"
            aria-label="Slide berikutnya"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Indicator dots */}
          <div
            className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/35 backdrop-blur-md z-10"
            role="tablist"
            aria-label="Navigasi slide"
          >
            {slides.map((_, index) => {
              const isActive = currentIndex === index;
              return (
                <button
                  key={index}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Ke slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full h-2 sm:h-2.5 ${
                    isActive
                      ? 'w-6 sm:w-8 bg-green-500 shadow-sm'
                      : 'w-2 sm:w-2.5 bg-white/60 hover:bg-white/90'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
