import { businessConfig } from '@/data/business';
import { products, faqItems } from '@/data/products';

export default function JsonLd() {
  const baseUrl = businessConfig.seo.canonicalUrl || 'https://dedakpadi.com';

  // 1. LocalBusiness / WholesaleStore Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Store', 'WholesaleStore'],
    '@id': `${baseUrl}/#localbusiness`,
    name: businessConfig.name,
    alternateName: 'UD Purnama Bondowoso - Dedak Padi & Bekatul',
    description: businessConfig.seo.description,
    url: baseUrl,
    telephone: `+${businessConfig.whatsapp.adminNumber}`,
    priceRange: 'Rp 4.000 - Rp 20.000',
    image: [`${baseUrl}${businessConfig.seo.ogImage}`, `${baseUrl}/images/logo-katul.svg`],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bondowoso',
      addressRegion: 'Jawa Timur',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -7.9135,
      longitude: 113.8214,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Bondowoso' },
      { '@type': 'AdministrativeArea', name: 'Jember' },
      { '@type': 'AdministrativeArea', name: 'Situbondo' },
      { '@type': 'AdministrativeArea', name: 'Banyuwangi' },
      { '@type': 'AdministrativeArea', name: 'Probolinggo' },
      { '@type': 'AdministrativeArea', name: 'Lumajang' },
      { '@type': 'AdministrativeArea', name: 'Jawa Timur' },
    ],
    knowsAbout: [
      'Dedak Padi',
      'Bekatul',
      'Pakan Ternak Unggas',
      'Pakan Sapi dan Ruminansia',
      'Pakan Ikan Budidaya',
      'Bahan Pakan Ternak Konsentrat',
      'Penggilingan Padi',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Katalog Produk Dedak Padi UD Purnama',
      itemListElement: products.map((product, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: product.name,
          description: product.shortDescription,
          category: 'Pakan Ternak',
          image: `${baseUrl}${product.image}`,
          brand: {
            '@type': 'Brand',
            name: businessConfig.name,
          },
          offers: {
            '@type': 'Offer',
            price: product.price,
            priceCurrency: 'IDR',
            availability: 'https://schema.org/InStock',
            url: baseUrl,
            seller: {
              '@type': 'Organization',
              name: businessConfig.name,
            },
          },
        },
        position: index + 1,
      })),
    },
  };

  // 2. FAQPage Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  // 3. WebSite Schema
  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: `${businessConfig.name} - Dedak Padi Bondowoso`,
    description: businessConfig.seo.description,
    publisher: {
      '@id': `${baseUrl}/#localbusiness`,
    },
    inLanguage: 'id-ID',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
