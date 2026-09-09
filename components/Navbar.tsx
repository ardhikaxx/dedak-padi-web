'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Leaf } from 'lucide-react';
import { businessConfig, getWhatsAppUrl } from '@/data/business';

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Produk', href: '#produk' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-4 px-4 pointer-events-none">
      {/* ── Floating Capsule Navbar ── */}
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
            <span className={`font-semibold text-sm tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-stone-900' : 'text-white'
            }`}>
              {businessConfig.name}
            </span>
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

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-1.5 rounded-full transition-all ${
              isScrolled
                ? 'text-stone-600 hover:text-green-700 hover:bg-green-50'
                : 'text-white/80 hover:text-white hover:bg-white/15'
            }`}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {isOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* ── Mobile Dropdown (glassmorphism) ── */}
      <div
        className={`
          pointer-events-auto w-full max-w-4xl mt-2
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className={`rounded-3xl border backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] overflow-hidden ${
          isScrolled
            ? 'bg-white/90 border-stone-200/60'
            : 'bg-white/15 border-white/20'
        }`}>
          <div className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={`px-5 py-3 text-sm font-medium transition-all ${
                  isScrolled
                    ? 'text-stone-700 hover:text-green-700 hover:bg-green-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className={`px-4 py-3 mt-1 border-t ${isScrolled ? 'border-stone-100' : 'border-white/10'}`}>
              <a
                href={getWhatsAppUrl('order')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className={`flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full text-white text-sm font-semibold transition-all shadow-md ${
                  isScrolled ? 'bg-green-700 hover:bg-green-800' : 'bg-green-500/90 hover:bg-green-400'
                }`}
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
