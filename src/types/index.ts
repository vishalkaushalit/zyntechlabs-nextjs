export interface SeoMetadata {
  metaTitle?: string;
  metaDescription?: string;
  focusKeywords?: string[];
  canonicalUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  ogImage?: string;
  schemaType?: "BlogPosting" | "TechArticle" | "CaseStudy" | "Service" | "FAQPage" | "Organization";
}

export interface Author {
  _id?: string;
  name: string;
  slug: string;
  role?: string;
  avatar?: string;
  bio?: string;
}

export interface Category {
  _id?: string;
  title: string;
  slug: string;
  description?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
  readTime?: string;
  author?: Author;
  categories?: Category[];
  tags?: string[];
  content?: any; // PortableText or HTML/Markdown content
  faqs?: FaqItem[];
  seo?: SeoMetadata;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  change?: string;
}

export interface CaseStudy {
  _id?: string;
  title: string;
  client: string;
  slug: string;
  tagline: string;
  heroImage: string;
  category: string;
  industry: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: CaseStudyMetric[];
  techStack: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  faqs?: FaqItem[];
  seo?: SeoMetadata;
}

export interface Page {
  _id?: string;
  title: string;
  slug: string;
  tagline?: string;
  heroImage?: string;
  body?: any; // PortableText content
  faqs?: FaqItem[];
  seo?: SeoMetadata;
}

export interface SiteSettings {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultSeoTitle?: string;
  defaultSeoDescription?: string;
  defaultOgImage: string;
  gtmId?: string;
  ga4Id?: string;
  googleVerification?: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    facebook?: string;
  };
  faqs?: FaqItem[];
  redirects?: Array<{ source: string; destination: string; permanent: boolean }>;
}
