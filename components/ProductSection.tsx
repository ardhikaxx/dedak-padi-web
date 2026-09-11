import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { getWhatsAppUrl } from '@/data/business';
import { ArrowRight } from 'lucide-react';

export default function ProductSection() {
  return (
    <section
      id="produk"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold tracking-wide uppercase mb-4">
            Produk Kami
          </span>
          <h2
            id="products-heading"
            className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4"
          >
            Produk Unggulan
          </h2>
          <p className="text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Tersedia dalam kemasan praktis 1kg dan 5kg. Langsung beli di Shopee
            atau hubungi kami untuk pembelian grosir.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-stone-600 mb-4">
            Butuh informasi harga untuk pembelian dalam jumlah besar?
          </p>
          <a
            href={getWhatsAppUrl('wholesale')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-green-700 text-green-700 font-semibold text-sm hover:bg-green-700 hover:text-white transition-all duration-200 group"
          >
            Konsultasi Kebutuhan Grosir
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
