import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schema } from './schemaTypes';
import { projectId, dataset } from './env';

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'ZynTech Labs CMS Studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content & SEO Management')
          .items([
            S.listItem()
              .title('Global Site Settings & SEO')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            S.documentTypeListItem('post').title('Blog Posts (Articles)'),
            S.documentTypeListItem('caseStudy').title('Case Studies (Portfolio)'),
            S.documentTypeListItem('page').title('Standalone Pages (not in navbar)'),
            S.divider(),
            S.documentTypeListItem('category').title('Categories'),
            S.documentTypeListItem('author').title('Authors'),
          ]),
    }),
    visionTool({ defaultApiVersion: '2024-08-01' }),
  ],
});
