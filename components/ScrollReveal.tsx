'use client';

import { useEffect, useRef, ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'fade';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add('sr-visible');
          obs.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  // left/right perlu overflow-hidden agar translateX tidak sebabkan horizontal scroll
  // dan IntersectionObserver bisa mendeteksi elemen dengan benar
  const needsClip = direction === 'left' || direction === 'right';

  return (
    <div className={needsClip ? 'overflow-hidden' : ''}>
      <div
        ref={ref}
        className={`sr-hidden sr-${direction} ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
