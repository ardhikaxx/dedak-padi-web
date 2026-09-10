'use client';

import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { getWhatsAppUrl, businessConfig } from '@/data/business';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="fixed bottom-32 lg:bottom-6 right-4 lg:right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip / popup message */}
      {showTooltip && (
        <div className="bg-white rounded-xl shadow-xl border border-stone-200 p-4 max-w-[220px] relative animate-fade-in">
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
              setIsDismissed(true);
            }}
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center transition-colors"
            aria-label="Tutup notifikasi WhatsApp"
          >
            <X className="w-3 h-3 text-stone-600" aria-hidden="true" />
          </button>

          <p className="text-xs font-semibold text-stone-800 mb-1">
            Ada yang bisa kami bantu?
          </p>
          <p className="text-xs text-stone-500 leading-relaxed">
            Chat langsung dengan tim kami sekarang!
          </p>
        </div>
      )}

      {/* Main WhatsApp button */}
      <a
        href={getWhatsAppUrl('default')}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center gap-2.5 group"
        aria-label={`Hubungi ${businessConfig.name} via WhatsApp`}
      >
        {/* Label — desktop only */}
        <span className="hidden lg:flex items-center px-3 py-2 rounded-xl bg-white border border-stone-200 shadow-md text-sm font-semibold text-stone-700 group-hover:border-green-300 group-hover:text-green-700 transition-all whitespace-nowrap">
          Chat WhatsApp
        </span>

        {/* Icon button */}
        <div className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 group-hover:scale-105">
          {/* WhatsApp icon SVG */}
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.555 4.098 1.522 5.815L.057 23.882a.5.5 0 00.612.612l6.067-1.465A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.856 0-3.6-.487-5.116-1.34l-.367-.21-3.785.914.915-3.785-.21-.367A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
        </div>
      </a>
    </div>
  );
}
