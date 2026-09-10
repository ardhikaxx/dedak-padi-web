import Link from 'next/link';
import { Leaf, MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { businessConfig, getWhatsAppUrl } from '@/data/business';

const footerLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Produk', href: '#produk' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'FAQ', href: '#faq' },
];

export default function Footer() {
  const { contact, social } = businessConfig;

  return (
    <footer className="bg-stone-900 text-stone-300" role="contentinfo">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-green-700 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-base text-white">
                  {businessConfig.name}
                </span>
                <span className="text-[11px] font-medium text-stone-500 tracking-wide mt-0.5">
                  {businessConfig.location}
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed mb-6 max-w-xs">
              {businessConfig.shortDescription}
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              {contact.address && contact.address !== '[ALAMAT LENGKAP]' && (
                <div className="flex items-start gap-3">
                  <MapPin
                    className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-stone-400">{contact.address}</span>
                </div>
              )}
              <div className="flex items-center gap-3">
                <Phone
                  className="w-4 h-4 text-green-500 flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={getWhatsAppUrl('default')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-stone-400 hover:text-green-400 transition-colors"
                >
                  {businessConfig.whatsapp.number !== '6281234567890'
                    ? `+${businessConfig.whatsapp.number}`
                    : contact.phone}
                </a>
              </div>
              {contact.email && contact.email !== '[EMAIL BISNIS]' && (
                <div className="flex items-center gap-3">
                  <Mail
                    className="w-4 h-4 text-green-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-stone-400 hover:text-green-400 transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              )}
              <div className="flex items-center gap-3">
                <Clock
                  className="w-4 h-4 text-green-500 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm text-stone-400">
                  {contact.operationalHours}
                </span>
              </div>
            </div>

            {/* Social media */}
            {(social.instagram || social.facebook) && (
              <div className="flex items-center gap-3 mt-6">
                {social.instagram && (
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-green-700 flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
                {social.facebook && (
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-green-700 flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Navigasi
            </h3>
            <ul className="space-y-2.5" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Pemesanan
            </h3>
            <p className="text-sm text-stone-400 leading-relaxed mb-4">
              Hubungi kami langsung untuk pemesanan dan informasi produk.
            </p>
            <a
              href={getWhatsAppUrl('order')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-green-700 text-white text-sm font-semibold hover:bg-green-600 transition-colors"
            >
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-stone-500 text-center sm:text-left">
              &copy; {new Date().getFullYear()} {businessConfig.name}. Hak cipta
              dilindungi.
            </p>
            <p className="text-xs text-stone-600">
              Penyedia Dedak Padi Berkualitas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
