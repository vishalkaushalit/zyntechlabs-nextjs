import { type SchemaTypeDefinition } from 'sanity';
import { seoType } from './seoType';
import { authorType } from './authorType';
import { categoryType } from './categoryType';
import { faqType } from './faqType';
import { postType } from './postType';
import { caseStudyType } from './caseStudyType';
import { pageType } from './pageType';
import { siteSettingsType } from './siteSettingsType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    seoType,
    authorType,
    categoryType,
    faqType,
    postType,
    caseStudyType,
    pageType,
    siteSettingsType,
  ],
};
