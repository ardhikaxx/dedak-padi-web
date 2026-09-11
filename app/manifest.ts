import { MetadataRoute } from 'next';
import { businessConfig } from '@/data/business';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${businessConfig.name} - Dedak Padi & Bekatul Bondowoso`,
    short_name: businessConfig.name,
    description: businessConfig.seo.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAF8',
    theme_color: '#15803d',
    icons: [
      {
        src: '/images/logo-katul.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
