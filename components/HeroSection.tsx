import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { businessConfig, getWhatsAppUrl } from '@/data/business';

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Background Layer: Gambar / visual dedak padi ── */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Placeholder visual — ganti dengan <Image> saat foto tersedia */}
        <div className="w-full h-full bg-gradient-to-br from-amber-900 via-amber-700 to-stone-800 flex items-center justify-center">
          {/* SVG Illustration of sacks/grain */}
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full object-cover opacity-30"
            aria-hidden="true"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Background grain field pattern */}
            {[...Array(12)].map((_, i) => (
              <ellipse
                key={i}
                cx={30 + (i % 4) * 110}
                cy={60 + Math.floor(i / 4) * 130}
                rx="40"
                ry="15"
                fill="#d97706"
                opacity="0.25"
                transform={`rotate(${-20 + (i * 7)} ${30 + (i % 4) * 110} ${60 + Math.floor(i / 4) * 130})`}
              />
            ))}
            {/* Large sack shapes */}
            <ellipse cx="200" cy="340" rx="130" ry="35" fill="#92400e" opacity="0.4"/>
            <path d="M100 200 Q80 310 70 330 Q200 380 330 330 Q320 310 300 200 Q260 150 200 140 Q140 150 100 200Z" fill="#a16207" opacity="0.6"/>
            <path d="M150 140 Q200 110 250 140 Q260 175 250 200 Q200 195 150 200 Q140 175 150 140Z" fill="#854d0e" opacity="0.7"/>
            <ellipse cx="200" cy="162" rx="35" ry="15" fill="#78350f" opacity="0.9"/>
            {/* Grain particles scattered */}
            {[
              [160, 260], [200, 280], [240, 256], [180, 300], [220, 310],
              [140, 240], [260, 270], [190, 320], [210, 240], [170, 280],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={4 + (i % 3)} fill="#d97706" opacity="0.35"/>
            ))}
          </svg>
        </div>

        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234a7c4e' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ── Overlay: gradien gelap agar teks terbaca ── */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-900/60 to-stone-900/30"
        aria-hidden="true"
      />

      {/* ── Foreground: konten teks ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
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

          {/* Subheadline */}
          <p className="text-lg text-stone-300 leading-relaxed mb-8 max-w-lg">
            Penyedia dedak padi / bekatul bersih dan berkualitas untuk kebutuhan pakan
            ternak, budidaya, dan industri pakan. Siap memenuhi kebutuhan Anda dalam
            berbagai volume.
          </p>

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

      {/* Floating badge cards — pojok kanan bawah */}
      <div className="absolute bottom-12 right-6 sm:right-12 hidden sm:flex flex-col gap-3 z-10">
        {/* Produk Unggulan */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 text-amber-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-stone-300">Produk Unggulan</p>
            <p className="text-sm font-semibold text-white">Dedak Padi Segar</p>
          </div>
        </div>
        {/* Tersedia Partai Besar */}
        <div className="bg-green-600/80 backdrop-blur-md rounded-xl border border-green-500/50 px-4 py-3">
          <p className="text-xs text-green-200 font-medium">Tersedia</p>
          <p className="text-sm font-bold text-white">Partai Besar</p>
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
