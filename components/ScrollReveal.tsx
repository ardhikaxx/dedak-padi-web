'use client';

import { useEffect, useRef, ReactNode } from 'react';

type Direction = 'up' | 'fade';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Jika sudah terlihat saat pertama load, langsung tampilkan
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('sr-visible');
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('sr-visible');
          obs.unobserve(el);
        }
      },
      // threshold 0 = trigger saat 1px pertama masuk viewport
      { threshold: 0, rootMargin: '0px 0px -60px 0px' }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`sr-hidden sr-${direction} ${className}`}
    >
      {children}
    </div>
  );
}
