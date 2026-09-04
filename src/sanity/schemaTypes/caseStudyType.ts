import { defineField, defineType } from 'sanity';

export const caseStudyType = defineType({
  name: 'caseStudy',
  title: 'Case Study (Portfolio)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client Name (e.g. GIG Logistics, Tarzan Transport)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'SEO-Friendly Slug (e.g. gig-logistics)',
      type: 'slug',
      options: {
        source: 'client',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline / Short Hook',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero / Showcase Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Image Alt Text',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category (e.g. Logistics & Supply Chain, Fintech)',
      type: 'string',
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'solution',
      title: 'Our Solution',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'results',
      title: 'Key Results & Achievements',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'metrics',
      title: 'Key Metrics Counters',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Metric Label (e.g. Platform Uptime)' },
            { name: 'value', type: 'string', title: 'Metric Value (e.g. 99.98%)' },
            { name: 'change', type: 'string', title: 'Context (e.g. Zero downtime)' },
          ],
        },
      ],
    }),
    defineField({
      name: 'techStack',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      fields: [
        { name: 'quote', type: 'text', title: 'Quote' },
        { name: 'author', type: 'string', title: 'Author Name' },
        { name: 'position', type: 'string', title: 'Designation / Role' },
        { name: 'company', type: 'string', title: 'Company' },
      ],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQ Section',
      description: 'Optional Q&A list shown at the bottom of this case study. Also generates FAQPage rich-result schema for Google automatically.',
      type: 'array',
      of: [{ type: 'faq' }],
    }),
    defineField({
      name: 'seo',
      title: 'Yoast SEO Settings',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'client',
      subtitle: 'title',
      media: 'heroImage',
    },
  },
});
