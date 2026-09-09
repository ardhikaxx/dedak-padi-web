import { testimonials } from '@/data/products';
import { Star } from 'lucide-react';

export default function TestimonialSection() {
  const visibleTestimonials = testimonials.filter((t) => t.show);

  // Don't render section if no testimonials
  if (visibleTestimonials.length === 0) {
    return null;
  }

  return (
    <section
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="testimonial-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold tracking-wide uppercase mb-4">
            Testimoni
          </span>
          <h2
            id="testimonial-heading"
            className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4"
          >
            Kata Pelanggan{' '}
            <span className="text-green-700">Kami</span>
          </h2>
          <p className="text-base text-stone-600 max-w-xl mx-auto leading-relaxed">
            Kepercayaan pelanggan adalah prioritas utama kami.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((t) => (
            <article
              key={t.id}
              className="bg-[#FAFAF8] rounded-2xl border border-stone-200 p-6 hover:border-green-200 hover:shadow-md transition-all duration-300"
            >
              {/* Rating */}
              {t.rating > 0 && (
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < t.rating
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-stone-200 fill-stone-200'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              )}

              {/* Content */}
              <blockquote className="text-sm text-stone-700 leading-relaxed mb-5 italic">
                &ldquo;{t.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-green-700">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-900">{t.name}</p>
                  <p className="text-xs text-stone-500">
                    {t.role}
                    {t.location ? ` • ${t.location}` : ''}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
