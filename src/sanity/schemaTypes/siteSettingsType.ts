import { defineField, defineType } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings & Analytics (Yoast / Global Config)',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'ZynTech Labs',
    }),
    defineField({
      name: 'siteUrl',
      title: 'Production Site URL',
      type: 'url',
      initialValue: 'https://zyntechlabs.io',
    }),
    defineField({
      name: 'defaultSeoTitle',
      title: 'Default SEO Title',
      type: 'string',
      initialValue: 'Custom Enterprise Software Development Company | ZynTech Labs',
    }),
    defineField({
      name: 'defaultSeoDescription',
      title: 'Default SEO Meta Description',
      type: 'text',
      rows: 3,
      initialValue:
        'ZynTech Labs builds scalable enterprise software, mobile apps, SaaS platforms, AI automation and cloud solutions for fintech, logistics and growing businesses.',
    }),
    defineField({
      name: 'defaultOgImage',
      title: 'Default Social Share Image',
      type: 'image',
    }),
    defineField({
      name: 'ga4Id',
      title: 'Google Analytics 4 Measurement ID (e.g. G-XXXXXXXXXX)',
      type: 'string',
      initialValue: 'G-LPLPSRELWG',
    }),
    defineField({
      name: 'gtmId',
      title: 'Google Tag Manager ID (e.g. GTM-XXXXXXX)',
      type: 'string',
      initialValue: 'GTM-WFGWS5HN',
    }),
    defineField({
      name: 'googleVerification',
      title: 'Google Search Console Verification Code',
      type: 'string',
    }),
    defineField({
      name: 'faqs',
      title: 'Homepage FAQ Section',
      description: 'Q&A list shown in the homepage FAQ section. Also generates FAQPage rich-result schema for Google automatically. Leave empty to use the built-in default questions.',
      type: 'array',
      of: [{ type: 'faq' }],
    }),
    defineField({
      name: 'redirects',
      title: '301 URL Redirects Table',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'source', type: 'string', title: 'Source Path (e.g. /old-blog-url)' },
            { name: 'destination', type: 'string', title: 'Destination Path (e.g. /blog/new-blog-url)' },
            { name: 'permanent', type: 'boolean', title: 'Permanent 301 Redirect', initialValue: true },
          ],
        },
      ],
    }),
  ],
});
