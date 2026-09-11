import { MetadataRoute } from 'next';
import { businessConfig } from '@/data/business';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = businessConfig.seo.canonicalUrl || 'https://dedakpadi.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
