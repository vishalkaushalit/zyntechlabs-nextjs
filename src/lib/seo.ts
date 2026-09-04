import type { Metadata } from 'next';
import { SeoMetadata, SiteSettings } from '@/types';
import { siteSettings as defaultSettings } from './fallbackData';

// Fallback used by components that render before/without a settings fetch (e.g. structured data
// on statically-rendered pages). Prefer passing the live Sanity siteUrl through props where possible.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://zyntechlabs.io';

interface GenerateMetaProps {
  title?: string;
  description?: string;
  slug?: string;
  image?: string;
  seo?: SeoMetadata;
  type?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
  settings?: SiteSettings;
}

export function constructMetadata({
  title,
  description,
  slug = '',
  image,
  seo,
  type = 'website',
  publishedTime,
  authors,
  settings = defaultSettings,
}: GenerateMetaProps = {}): Metadata {
  const metaTitle =
    seo?.metaTitle ||
    (title
      ? `${title} | ${settings.siteName}`
      : settings.defaultTitle);

  const metaDescription =
    seo?.metaDescription ||
    description ||
    settings.defaultDescription;

  const canonical =
    seo?.canonicalUrl ||
    (slug
      ? `${settings.siteUrl}/${slug.replace(/^\/+/, '')}`
      : settings.siteUrl);

  const ogImageUrl =
    seo?.ogImage ||
    image ||
    settings.defaultOgImage;

  const noIndex = seo?.noIndex || false;
  const noFollow = seo?.noFollow || false;

  return {
    metadataBase: new URL(settings.siteUrl || 'https://zyntechlabs.io'),
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical,
    },
    robots: {
      index: !noIndex,
      follow: !noFollow,
      googleBot: {
        index: !noIndex,
        follow: !noFollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonical,
      siteName: settings.siteName,
      type: type === 'article' ? 'article' : 'website',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(authors && { authors }),
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [ogImageUrl],
      creator: '@zyntechlabs',
    },
    keywords: seo?.focusKeywords,
  };
}
