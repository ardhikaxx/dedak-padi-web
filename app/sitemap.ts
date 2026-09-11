import { MetadataRoute } from 'next';
import { businessConfig } from '@/data/business';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = businessConfig.seo.canonicalUrl || 'https://dedak-padi.vercel.app';
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/edukasi`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
