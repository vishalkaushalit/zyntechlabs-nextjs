import { defineField, defineType } from 'sanity';

export const pageType = defineType({
  name: 'page',
  title: 'Standalone Page (not in navbar)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title (H1)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'SEO-Friendly Slug / URL',
      type: 'slug',
      description: 'The page will be published at zyntechlabs.io/<slug> — it is never added to the header menu automatically.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Hero Tagline / Subheading',
      type: 'text',
      rows: 2,
      description: 'Short intro line shown under the title in the hero section.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero / Cover Image (optional)',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Page Content (Portable Text / Rich WYSIWYG)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link (Internal / External)',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel'],
                        allowRelative: true,
                      }),
                  },
                  {
                    name: 'isExternal',
                    type: 'boolean',
                    title: 'Open in new tab (rel="noopener noreferrer")',
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Image Alt Text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Image Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQ Section',
      description: 'Optional Q&A list shown at the bottom of this page. Also generates FAQPage rich-result schema for Google automatically.',
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
      title: 'title',
      subtitle: 'slug.current',
    },
  },
});
