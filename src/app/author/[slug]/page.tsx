import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllBlogPosts } from '@/sanity/client';
import { BlogCard } from '@/components/blog/BlogCard';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { constructMetadata, SITE_URL } from '@/lib/seo';
import { User, Award, BookOpen } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  const authors = posts.map((p) => p.author?.slug).filter(Boolean);
  return Array.from(new Set(authors)).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getAllBlogPosts();
  const author = posts.find((p) => p.author?.slug === slug)?.author;

  if (!author) {
    return constructMetadata({ title: 'Author Not Found' });
  }

  return constructMetadata({
    title: `${author.name} - Author & Engineering Lead`,
    description: author.bio || `Articles and architecture guides published by ${author.name} on ZynTech Labs.`,
    slug: `author/${slug}`,
    image: author.avatar,
  });
}

export default async function AuthorProfilePage({ params }: Props) {
  const { slug } = await params;
  const posts = await getAllBlogPosts();
  const authorPosts = posts.filter((p) => p.author?.slug === slug);
  const author = authorPosts[0]?.author;

  if (!author) {
    notFound();
  }

  // Google Person JSON-LD Schema for E-E-A-T
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    jobTitle: author.role || 'Senior Solutions Architect',
    worksFor: {
      '@type': 'Organization',
      name: 'ZynTech Labs',
      url: SITE_URL,
    },
    description: author.bio,
    image: author.avatar,
  };

  return (
    <div className="min-h-screen bg-[#070b16] text-white pt-24 pb-20">
      {/* Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Blog', url: '/blog' },
            { name: author.name, url: `/author/${slug}` },
          ]}
        />

        {/* Author Bio Header Card */}
        <div className="bg-[#0c1324] border border-cyan-500/30 rounded-3xl p-8 sm:p-12 mb-14 shadow-2xl flex flex-col sm:flex-row items-center sm:items-start gap-8 mt-6">
          {author.avatar ? (
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-teal-400 shadow-xl flex-shrink-0">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                priority
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-28 h-28 rounded-full bg-teal-950 border border-teal-500/30 flex items-center justify-center text-teal-300 flex-shrink-0">
              <User className="w-12 h-12" />
            </div>
          )}

          <div className="space-y-3 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase font-mono font-bold text-teal-400 bg-teal-950/60 border border-teal-500/30 px-3 py-1 rounded-md">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Tech Author (E-E-A-T)</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {author.name}
            </h1>

            <p className="text-teal-300 text-sm font-medium">
              {author.role || 'Senior Solutions Architect & Contributor'}
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              {author.bio || 'Alex is a veteran cloud architect specializing in high-throughput distributed systems and enterprise infrastructure.'}
            </p>
          </div>
        </div>

        {/* Author's Articles Section */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="w-5 h-5 text-teal-400" />
            <h2 className="text-2xl font-bold text-white">
              Articles Published by {author.name} ({authorPosts.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorPosts.map((post) => (
              <BlogCard key={post._id || post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
