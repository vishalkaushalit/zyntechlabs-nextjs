import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPageBySlug, getAllPages } from '@/sanity/client';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { PortableTextRenderer } from '@/components/blog/PortableTextRenderer';
import { FaqSection } from '@/components/home/FaqSection';
import { constructMetadata } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const pages = await getAllPages();
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    return constructMetadata({ title: 'Page Not Found' });
  }

  return constructMetadata({
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription || page.tagline,
    slug: page.slug,
    image: page.heroImage,
    seo: page.seo,
  });
}

export default async function StandalonePage({ params }: Props) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-[#070b16] text-white">
      {/* Hero — same grid-pattern background as the homepage hero */}
      <section className="relative flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#070b16]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/20 to-teal-500/20 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs items={[{ name: page.title, url: `/${slug}` }]} />

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mt-6 mb-4">
            {page.title}
          </h1>

          {page.tagline && (
            <p className="text-lg md:text-xl text-teal-300/90 font-medium leading-relaxed max-w-2xl mx-auto">
              {page.tagline}
            </p>
          )}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {page.heroImage && (
          <div className="relative w-full h-72 sm:h-[420px] mb-12 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
            <Image
              src={page.heroImage}
              alt={page.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        )}

        {page.body && (
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-base sm:text-lg">
            <PortableTextRenderer value={page.body} />
          </div>
        )}
      </div>

      {/* FAQ Section (editor-driven, adds FAQPage rich-result schema) */}
      {page.faqs && page.faqs.length > 0 && (
        <FaqSection
          faqs={page.faqs}
          eyebrow="FAQ"
          heading="Frequently Asked Questions"
          subheading={`Common questions readers ask about ${page.title}.`}
          id="page-faq"
        />
      )}
    </article>
  );
}
