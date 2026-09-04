import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, Calendar, ArrowLeft, ArrowRight, Tag } from 'lucide-react';
import { getBlogPostBySlug, getAllBlogPosts } from '@/sanity/client';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { BlogPostingSchema } from '@/components/seo/SchemaMarkup';
import { PortableTextRenderer } from '@/components/blog/PortableTextRenderer';
import { SocialShare } from '@/components/blog/SocialShare';
import { BlogCard } from '@/components/blog/BlogCard';
import { FaqSection } from '@/components/home/FaqSection';
import { constructMetadata, SITE_URL } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return constructMetadata({ title: 'Blog Post Not Found' });
  }

  return constructMetadata({
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    slug: `blog/${slug}`,
    image: post.coverImage,
    seo: post.seo,
    type: 'article',
    publishedTime: post.publishedAt,
    authors: post.author?.name ? [post.author.name] : ['ZynTech Labs'],
  });
}

export default async function BlogPostDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const pageUrl = `${SITE_URL}/blog/${slug}`;

  return (
    <article className="min-h-screen bg-[#070b16] text-white pt-24 pb-20">
      {/* Schema Markup for Google Search Rich Results */}
      <BlogPostingSchema
        title={post.title}
        description={post.excerpt}
        url={pageUrl}
        image={post.coverImage}
        datePublished={post.publishedAt}
        authorName={post.author?.name}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: 'Blog', url: '/blog' },
            { name: post.title, url: `/blog/${slug}` },
          ]}
        />

        {/* Back Link */}
        <div className="pt-2 pb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to all articles
          </Link>
        </div>

        {/* Header */}
        <header className="pb-8 border-b border-gray-800/80">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {post.categories?.map((cat) => (
              <span
                key={cat.slug}
                className="bg-teal-500 text-black text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider"
              >
                {cat.title}
              </span>
            ))}
            <span className="flex items-center gap-1 text-xs text-gray-400 font-mono">
              <Calendar className="w-3.5 h-3.5 text-teal-400" /> {formattedDate}
            </span>
            {post.readTime && (
              <span className="flex items-center gap-1 text-xs text-gray-400 font-mono">
                <Clock className="w-3.5 h-3.5 text-teal-400" /> {post.readTime}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          {/* Author info pill */}
          {post.author && (
            <div className="flex items-center gap-3.5 mt-6 pt-6 border-t border-gray-800">
              {post.author.avatar && (
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-teal-400">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <div className="text-sm font-bold text-white">{post.author.name}</div>
                <div className="text-xs text-teal-400">{post.author.role || 'Contributor'}</div>
              </div>
            </div>
          )}
        </header>

        {/* Featured Cover Image */}
        <div className="relative w-full h-80 sm:h-[420px] my-10 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>

        {/* Main Body Content */}
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-base sm:text-lg space-y-6">
          {post.content ? (
            <PortableTextRenderer value={post.content} />
          ) : (
            <p className="text-gray-500 italic">
              This post doesn&apos;t have any body content yet. Add it in the Post Content field in the Studio.
            </p>
          )}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-8 pb-4">
            <span className="text-xs text-gray-400 flex items-center gap-1 font-mono">
              <Tag className="w-3.5 h-3.5 text-teal-400" /> Tags:
            </span>
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-gray-900 text-gray-300 px-3 py-1 rounded-full border border-gray-800 font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Social Share Strip */}
        <SocialShare title={post.title} url={pageUrl} />

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <div className="pt-12 border-t border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">
              Related Engineering Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <BlogCard key={related._id || related.slug} post={related} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* FAQ Section (editor-driven, adds FAQPage rich-result schema) */}
      {post.faqs && post.faqs.length > 0 && (
        <FaqSection
          faqs={post.faqs}
          eyebrow="FAQ"
          heading="Frequently Asked Questions"
          subheading={`Common questions readers ask about ${post.title}.`}
          id="post-faq"
        />
      )}
    </article>
  );
}
