import { MetadataRoute } from 'next';
import { getAllBlogPosts, getAllCaseStudies, getAllPages, getSiteSettings } from '@/sanity/client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const settings = await getSiteSettings();
  const baseUrl = settings.siteUrl || 'https://zyntechlabs.io';

  const [posts, caseStudies, pages] = await Promise.all([
    getAllBlogPosts(),
    getAllCaseStudies(),
    getAllPages(),
  ]);

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/seo-docs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // Dynamic Blog Post routes
  const blogRoutes: MetadataRoute.Sitemap = posts
    .filter((post) => !post.seo?.noIndex)
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt || Date.now()),
      changeFrequency: 'monthly',
      priority: 0.8,
    }));

  // Dynamic Case Study routes
  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies
    .filter((study) => !study.seo?.noIndex)
    .map((study) => ({
      url: `${baseUrl}/case-study/${study.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }));

  // Dynamic Standalone Page routes (not linked from the header)
  const pageRoutes: MetadataRoute.Sitemap = pages
    .filter((page) => !page.seo?.noIndex)
    .map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));

  return [...staticRoutes, ...caseStudyRoutes, ...blogRoutes, ...pageRoutes];
}
