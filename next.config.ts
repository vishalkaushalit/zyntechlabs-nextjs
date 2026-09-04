import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // SEO 301 Redirects setup
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/insights',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
