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
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on nav click
  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/60'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Navigasi utama"
      >
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link
            href="#beranda"
            className="flex items-center gap-2 group"
            aria-label={`${businessConfig.name} - Beranda`}
          >
            <div className="w-8 h-8 rounded-lg bg-green-700 flex items-center justify-center group-hover:bg-green-800 transition-colors">
              <Leaf className="w-4 h-4 text-white" aria-hidden="true" />
            </div>
            <span className="font-semibold text-lg text-stone-900 tracking-tight">
              {businessConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-stone-600 hover:text-green-700 rounded-md hover:bg-green-50 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getWhatsAppUrl('order')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-green-700 text-white text-sm font-semibold hover:bg-green-800 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-600 hover:text-green-700 hover:bg-green-50 transition-all"
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

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white border border-stone-200 rounded-xl mb-4 overflow-hidden shadow-lg">
            <div className="flex flex-col py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-4 py-3 text-sm font-medium text-stone-700 hover:text-green-700 hover:bg-green-50 transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-3 border-t border-stone-100 mt-1">
                <a
                  href={getWhatsAppUrl('order')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-green-700 text-white text-sm font-semibold hover:bg-green-800 transition-all"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
