'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Leaf, Home, Package, Star, Users, HelpCircle, MessageCircle } from 'lucide-react';
import { businessConfig, getWhatsAppUrl } from '@/data/business';

const navLinks = [
  { label: 'Beranda',      href: '#beranda',    id: 'beranda',    icon: Home },
  { label: 'Produk',       href: '#produk',     id: 'produk',     icon: Package },
  { label: 'Keunggulan',   href: '#keunggulan', id: 'keunggulan', icon: Star },
  { label: 'Tentang Kami', href: '#tentang',    id: 'tentang',    icon: Users },
  { label: 'FAQ',          href: '#faq',        id: 'faq',        icon: HelpCircle },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  // Scroll state untuk navbar atas
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver untuk deteksi section aktif
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* ════════════════════════════════════════
          TOP FLOATING CAPSULE NAVBAR
          Desktop: logo + links + CTA
          Mobile : logo only
      ════════════════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-4 px-4 pointer-events-none">
        <nav
          className={`
            pointer-events-auto w-full max-w-4xl
            rounded-full border transition-all duration-500
            ${isScrolled
              ? 'bg-white/80 border-stone-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl'
              : 'bg-white/10 border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.10)] backdrop-blur-md'
            }
          `}
          aria-label="Navigasi utama"
        >
          <div className="flex items-center justify-between h-14 px-4 sm:px-5">
            {/* Logo */}
            <Link
              href="#beranda"
              className="flex items-center gap-2 group flex-shrink-0"
              aria-label={`${businessConfig.name} - Beranda`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                isScrolled
                  ? 'bg-green-700 group-hover:bg-green-800'
                  : 'bg-green-600/90 group-hover:bg-green-500'
              }`}>
                <Leaf className="w-3.5 h-3.5 text-white" aria-hidden="true" />
              </div>
              <div className="flex flex-col leading-none">
                <span className={`font-semibold text-sm tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-stone-900' : 'text-white'
                }`}>
                  {businessConfig.name}
                </span>
                <span className={`text-[10px] font-medium tracking-wide transition-colors duration-300 ${
                  isScrolled ? 'text-stone-400' : 'text-white/50'
                }`}>
                  {businessConfig.location}
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isScrolled
                      ? 'text-stone-600 hover:text-green-700 hover:bg-green-50'
                      : 'text-white/80 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <a
                href={getWhatsAppUrl('order')}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-semibold transition-all duration-200 shadow-md ${
                  isScrolled
                    ? 'bg-green-700 hover:bg-green-800 hover:shadow-green-700/30'
                    : 'bg-green-500/90 hover:bg-green-400 hover:shadow-green-500/30'
                }`}
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* ════════════════════════════════════════
          MOBILE BOTTOM NAVIGATION BAR
          Hanya muncul di layar < lg
      ════════════════════════════════════════ */}
      <nav
        className="lg:hidden fixed bottom-4 left-4 right-4 z-50"
        aria-label="Navigasi bawah"
      >
        <div className="bg-white/20 backdrop-blur-xl border border-white/25 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.20)] overflow-hidden">
          <div className="flex items-center justify-around px-1 py-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`
                    flex flex-col items-center justify-center gap-0.5 transition-all duration-300 rounded-xl
                    ${isActive
                      ? 'bg-green-600/90 text-white px-3.5 py-2 min-w-[72px]'
                      : 'text-white/70 hover:text-white px-3 py-2.5'
                    }
                  `}
                >
                  <Icon
                    className={`transition-all duration-300 ${isActive ? 'w-4 h-4' : 'w-5 h-5'}`}
                    aria-hidden="true"
                  />
                  {isActive && (
                    <span className="text-[10px] font-semibold leading-none whitespace-nowrap">
                      {link.label}
                    </span>
                  )}
                </Link>
              );
            })}

            {/* Tombol WhatsApp */}
            <a
              href={getWhatsAppUrl('order')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pesan via WhatsApp"
              className="flex flex-col items-center justify-center gap-0.5 text-white/70 hover:text-white px-3 py-2.5 transition-all duration-200 rounded-xl hover:bg-white/10"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}


