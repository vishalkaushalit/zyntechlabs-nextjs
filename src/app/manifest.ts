import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ZynTech Labs | Enterprise Software & AI Platforms',
    short_name: 'ZynTech Labs',
    description:
      'Custom enterprise software development, AI automation, and cloud solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#070b16',
    theme_color: '#070b16',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
