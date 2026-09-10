import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { businessConfig, getWhatsAppUrl } from '@/data/business';

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Background Layer: Gambar pabrik dedak padi ── */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/images/bg-hero.jpg"
          alt=""
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        {/* Dark overlay for texture */}
        <div className="absolute inset-0 bg-stone-950/20" />
      </div>

      {/* ── Overlay: gradien gelap agar teks terbaca ── */}
      <div
        className="absolute inset-0 bg-gradient-to-l from-stone-950/80 via-stone-900/60 to-stone-900/30"
        aria-hidden="true"
      />

      {/* ── Foreground: konten teks ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl ml-auto flex flex-col items-end text-right">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-green-300 text-xs font-semibold tracking-wide mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Tersedia Stok Sekarang
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Dedak Padi
            <span className="block text-green-400">Berkualitas</span>
          </h1>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-3 mb-10">
            {businessConfig.trustIndicators.map((item) => (
              <div
                key={item}
                className="flex items-center gap-1.5 text-sm text-stone-200"
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
            <a
              href="#produk"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-white/30 text-white font-semibold text-base hover:border-green-400 hover:text-green-400 hover:bg-white/5 transition-all duration-200 backdrop-blur-sm"
            >
              Lihat Produk
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </a>
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
