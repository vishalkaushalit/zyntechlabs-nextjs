import { defineField, defineType } from 'sanity';
import { SeoPreviewInput } from '../components/SeoPreview';

export const seoType = defineType({
  name: 'seo',
  title: 'SEO & Social Sharing (Yoast SEO Style)',
  type: 'object',
  components: {
    input: SeoPreviewInput,
  },
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'SEO Meta Title',
      type: 'string',
      description: 'Optimal length: 50-60 characters for Google SERP display.',
      validation: (Rule) =>
        Rule.max(70).warning('Titles longer than 60-70 characters may get truncated in search results.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 3,
      description: 'Optimal length: 140-160 characters describing the page value proposition.',
      validation: (Rule) =>
        Rule.max(170).warning('Descriptions longer than 160 characters will be truncated by search engines.'),
    }),
    defineField({
      name: 'focusKeywords',
      title: 'Focus Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Target keywords for SEO analysis and internal search matching.',
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL Override',
      type: 'url',
      description: 'Leave empty to automatically use the current page URL.',
    }),
    defineField({
      name: 'noIndex',
      title: 'Disallow Indexing (noindex)',
      type: 'boolean',
      initialValue: false,
      description: 'Check this box if you DO NOT want search engines to show this page in search results.',
    }),
    defineField({
      name: 'noFollow',
      title: 'Disallow Follow (nofollow)',
      type: 'boolean',
      initialValue: false,
      description: 'Check this box if you DO NOT want search engines to follow links on this page.',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph (Social Sharing Image)',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image displayed when link is shared on LinkedIn, Twitter, WhatsApp, etc. (1200x630 recommended)',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Image Alt Text',
        }),
      ],
    }),
    defineField({
      name: 'schemaType',
      title: 'Structured Data Schema Type (JSON-LD)',
      type: 'string',
      options: {
        list: [
          { title: 'BlogPosting (Articles & News)', value: 'BlogPosting' },
          { title: 'TechArticle (Technical Guides)', value: 'TechArticle' },
          { title: 'CaseStudy (Client Results & Portfolio)', value: 'CaseStudy' },
          { title: 'Service (Service Landing Pages)', value: 'Service' },
          { title: 'FAQPage (Questions & Answers)', value: 'FAQPage' },
          { title: 'Organization (Company Page)', value: 'Organization' },
        ],
      },
      initialValue: 'BlogPosting',
    }),
  ],
});
