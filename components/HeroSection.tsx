'use client';

import Image from 'next/image';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { businessConfig, getWhatsAppUrl } from '@/data/business';
import { scrollToSection } from '@/data/scroll';

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-[100dvh] h-screen min-h-[580px] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Background Layer: Gambar pabrik dedak padi ── */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/images/bg-hero.jpg"
          alt="Pabrik Penggilingan Dedak Padi UD Purnama"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover object-[65%_center] sm:object-center scale-110 sm:scale-100 transition-transform duration-700 select-none"
        />
        {/* Dark overlay for texture */}
        <div className="absolute inset-0 bg-stone-950/30 sm:bg-stone-950/20" />
      </div>

      {/* ── Overlay: gradien gelap agar teks terbaca ── */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-900/50 to-stone-900/20 sm:from-stone-950/60 sm:via-stone-900/40 sm:to-stone-900/15"
        aria-hidden="true"
      />

      {/* ── Foreground: konten teks ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-3 sm:mb-4"
          >
            Dedak Padi Berkualitas di{' '}
            <span className="text-green-400">Bondowoso, Jawa Timur</span>
          </h1>

          {/* Subheadline SEO Context */}
          <p className="text-sm sm:text-base text-stone-200 leading-relaxed mb-4 sm:mb-5 max-w-xl">
            UD Purnama menyediakan dedak padi halus (bekatul) dan dedak campuran menir bersih langsung dari penggilingan padi untuk pakan ternak ayam, bebek, sapi, dan budidaya ikan. Siap melayani kebutuhan eceran maupun pasokan grosir partai besar.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-2.5 sm:gap-4 mb-6 sm:mb-7">
            {businessConfig.trustIndicators.map((item) => (
              <div
                key={item}
                className="flex items-center gap-1.5 text-xs sm:text-sm text-stone-200"
              >
                <CheckCircle2
                  className="w-4 h-4 text-green-400 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={getWhatsAppUrl('order')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-green-600 text-white font-semibold text-base hover:bg-green-500 transition-all duration-200 shadow-lg hover:shadow-green-500/30 group"
            >
              Pesan Sekarang
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('produk')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-white/30 text-white font-semibold text-base hover:border-green-400 hover:text-green-400 hover:bg-white/5 transition-all duration-200 backdrop-blur-sm cursor-pointer"
            >
              Lihat Produk
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-10" aria-hidden="true">
        <div className="w-0.5 h-10 bg-white/30 rounded-full animate-pulse" />
        <p className="text-xs text-white/40 tracking-widest uppercase">Scroll</p>
      </div>
    </section>
  );
}
