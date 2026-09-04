import React from 'react';
import type { Metadata } from 'next';
import { getAllBlogPosts } from '@/sanity/client';
import { BlogListClient } from '@/components/blog/BlogListClient';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { constructMetadata } from '@/lib/seo';
import { Newspaper } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Engineering & Technology Insights Blog',
  description:
    'Deep dives into enterprise microservices, AI automation in supply chain, fintech compliance, and scalable cloud engineering from ZynTech Labs.',
  slug: 'blog',
});

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="min-h-screen bg-[#070b16] text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Blog & Insights', url: '/blog' }]} />

        {/* Page Header */}
        <div className="max-w-3xl pt-6 mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-teal-400 font-mono font-bold bg-teal-950/60 border border-teal-500/30 px-3 py-1 rounded-md mb-3">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Engineering & Architecture Insights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-2 mb-4">
            Insights on Enterprise Software & AI
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Practical engineering insights, architectural patterns, and strategic guides written by experienced practitioners.
          </p>
        </div>

        <BlogListClient posts={posts} />
      </div>
    </div>
  );
}
