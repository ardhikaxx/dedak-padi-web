'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/data/products';

import { getWhatsAppUrl } from '@/data/business';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItem({ question, answer, isOpen, onToggle, index }: AccordionItemProps) {
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 text-left gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 rounded-sm"
        aria-expanded={isOpen}
        id={`faq-trigger-${index}`}
        aria-controls={`faq-content-${index}`}
      >
        <span className="text-sm sm:text-base font-semibold text-stone-800 group-hover:text-green-700 transition-colors pr-2">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-stone-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-green-600' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        id={`faq-content-${index}`}
        role="region"
        aria-labelledby={`faq-trigger-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-sm text-stone-600 leading-relaxed pb-5 pr-10">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-12 lg:py-16 bg-[#FAFAF8]"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Header */}
          <div className="lg:sticky lg:top-24 self-start">
            <span className="inline-block px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold tracking-wide uppercase mb-4">
              Tanya Jawab Dedak Padi
            </span>
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4"
            >
              Pertanyaan yang{' '}
              <span className="text-green-700">Sering Ditanyakan</span>
            </h2>
            <p className="text-base text-stone-600 leading-relaxed mb-6">
              Informasi lengkap seputar produk dedak padi, bekatul, pemesanan, harga, dan layanan pengiriman UD Purnama di Bondowoso & Jawa Timur.
            </p>

            <a
              href={getWhatsAppUrl('default')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors"
            >
              Tanya Langsung via WhatsApp
              <ChevronDown className="w-4 h-4 -rotate-90" aria-hidden="true" />
            </a>
          </div>

          {/* Right — Accordion */}
          <div className="bg-white rounded-2xl border border-stone-200 px-6 lg:px-8">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
