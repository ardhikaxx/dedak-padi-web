'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Home, Package, Star, BookOpen, HelpCircle } from 'lucide-react';
import { businessConfig, getWhatsAppUrl } from '@/data/business';
import { scrollToSection } from '@/data/scroll';

const navLinks = [
  { label: 'Beranda',      id: 'beranda',    href: '/',        icon: Home },
  { label: 'Produk',       id: 'produk',     href: '/',        icon: Package },
  { label: 'Keunggulan',   id: 'keunggulan', href: '/',        icon: Star },
  { label: 'Edukasi',      id: 'edukasi',    href: '/edukasi', icon: BookOpen },
  { label: 'FAQ',          id: 'faq',        href: '/',        icon: HelpCircle },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  // Tangani navigasi lintas halaman via sessionStorage atau bersihkan hash dari URL agar route link tetap bersih
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedSection = sessionStorage.getItem('target_section');
      if (savedSection) {
        sessionStorage.removeItem('target_section');
        setTimeout(() => {
          scrollToSection(savedSection);
        }, 150);
      }

      if (window.location.hash) {
        const hash = window.location.hash.slice(1);
        const targetEl = document.getElementById(hash);
        if (targetEl) {
          setTimeout(() => {
            scrollToSection(hash);
          }, 100);
        }
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }
  }, [isHome]);

  // Tampilkan navbar dengan latar solid & teks gelap jika di-scroll ATAU jika sedang berada di luar homepage (seperti /edukasi)
  const isSolidNav = isScrolled || !isHome;

  // Scroll state untuk navbar atas & pastikan activeSection = 'beranda' saat di hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      if (isHome && scrollY < 250) {
        setActiveSection('beranda');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // IntersectionObserver untuk deteksi section aktif di beranda, atau sinkronisasi rute aktif
  useEffect(() => {
    if (!isHome) {
      if (pathname.startsWith('/edukasi')) {
        setActiveSection('edukasi');
      }
      return;
    }

    const observers: IntersectionObserver[] = [];
    navLinks.forEach(({ id }) => {
      if (id === 'edukasi') return;
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-30% 0px -50% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [isHome, pathname]);

  const handleNavClick = (link: (typeof navLinks)[0]) => {
    if (typeof window !== 'undefined') {
      setActiveSection(link.id);
      if (link.id === 'beranda') {
        if (!isHome) {
          window.location.href = '/';
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          if (window.location.hash) {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
          }
        }
        return;
      }
      if (link.href === '/edukasi') {
        if (pathname === '/edukasi') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.location.href = '/edukasi';
        }
        return;
      }
      if (!isHome) {
        sessionStorage.setItem('target_section', link.id);
        window.location.href = '/';
      } else {
        scrollToSection(link.id);
        if (window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      }
    }
  };

  const handleLogoClick = () => {
    setActiveSection('beranda');
    if (typeof window !== 'undefined') {
      if (!isHome) {
        window.location.href = '/';
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      }
    }
  };

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
            ${isSolidNav
              ? 'bg-white/80 border-stone-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl'
              : 'bg-white/10 border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.10)] backdrop-blur-md'
            }
          `}
          aria-label="Navigasi utama"
        >
          <div className="flex items-center justify-between h-14 px-4 sm:px-5">
            {/* Logo */}
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2 group flex-shrink-0"
              aria-label={`${businessConfig.name} - Beranda`}
            >
              <div className="w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/logo-katul.svg"
                  alt={`Logo ${businessConfig.name}`}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  priority
                  unoptimized
                />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className={`font-semibold text-sm tracking-tight transition-colors duration-300 ${
                  isSolidNav ? 'text-stone-900' : 'text-white'
                }`}>
                  {businessConfig.name}
                </span>
                <span className={`text-[10px] font-medium tracking-wide transition-colors duration-300 ${
                  isSolidNav ? 'text-stone-400' : 'text-white/50'
                }`}>
                  {businessConfig.location}
                </span>
              </div>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link)}
                    className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? isSolidNav
                          ? 'text-green-700 bg-green-50 font-semibold shadow-xs ring-1 ring-green-600/20'
                          : 'bg-green-600 text-white font-semibold shadow-md'
                        : isSolidNav
                          ? 'text-stone-600 hover:text-green-700 hover:bg-green-50/60'
                          : 'text-white/85 hover:text-white hover:bg-white/15'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <a
                href={getWhatsAppUrl('order')}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-semibold transition-all duration-200 shadow-md ${
                  isSolidNav
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
        className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        aria-label="Navigasi bawah"
      >
        <div className={`
          backdrop-blur-xl border rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.18)] overflow-hidden
          transition-all duration-500
          ${isSolidNav
            ? 'bg-white/90 border-stone-200/60'
            : 'bg-stone-900/70 border-white/15'
          }
        `}>
          <div className="flex items-center px-3 py-2 gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`
                    flex items-center justify-center transition-all duration-300 rounded-full
                    ${isActive
                      ? 'flex-row gap-2 bg-green-600 text-white px-4 py-3'
                      : isSolidNav
                        ? 'flex-col text-stone-500 hover:text-green-700 px-4 py-3'
                        : 'flex-col text-white/70 hover:text-white px-4 py-3'
                    }
                  `}
                >
                  <Icon
                    className={`flex-shrink-0 transition-all duration-300 ${isActive ? 'w-5 h-5' : 'w-6 h-6'}`}
                    aria-hidden="true"
                  />
                  {isActive && (
                    <span className="text-xs font-semibold leading-none whitespace-nowrap">
                      {link.label}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}


