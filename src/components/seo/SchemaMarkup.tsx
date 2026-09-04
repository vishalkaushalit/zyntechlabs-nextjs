import React from 'react';
import { SITE_URL } from '@/lib/seo';

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ZynTech Labs',
    url: SITE_URL,
    logo: '/zyntech_logo.svg',
    description:
      'Custom enterprise software development agency building scalable software, mobile apps, SaaS platforms, AI automation and cloud solutions.',
    sameAs: [
      'https://www.linkedin.com/company/zyntechlabs',
      'https://twitter.com/zyntechlabs',
      'https://github.com/zyntechlabs',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales & enterprise support',
      email: 'contact@zyntechlabs.io',
      availableLanguage: ['English'],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ZynTech Labs',
    url: SITE_URL,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostingSchema({
  title,
  description,
  url,
  image,
  datePublished,
  authorName,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  authorName?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: datePublished,
    author: {
      '@type': 'Person',
      name: authorName || 'ZynTech Labs Editorial Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ZynTech Labs',
      logo: {
        '@type': 'ImageObject',
        url: '/zyntech_logo.svg',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function CaseStudySchema({
  title,
  description,
  url,
  image,
  client,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  client: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    name: title,
    description: description,
    image: image,
    creator: {
      '@type': 'Organization',
      name: 'ZynTech Labs',
    },
    about: {
      '@type': 'Organization',
      name: client,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
