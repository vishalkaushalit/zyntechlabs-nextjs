import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, ArrowRight, Layers, Award, Quote } from 'lucide-react';
import { getCaseStudyBySlug, getAllCaseStudies } from '@/sanity/client';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CaseStudySchema } from '@/components/seo/SchemaMarkup';
import { SocialShare } from '@/components/blog/SocialShare';
import { FaqSection } from '@/components/home/FaqSection';
import { constructMetadata, SITE_URL } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    return constructMetadata({ title: 'Case Study Not Found' });
  }

  return constructMetadata({
    title: study.seo?.metaTitle || `${study.client} Case Study: ${study.title}`,
    description: study.seo?.metaDescription || study.overview,
    slug: `case-study/${slug}`,
    image: study.heroImage,
    seo: study.seo,
    type: 'article',
  });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/case-study/${slug}`;

  return (
    <article className="min-h-screen bg-[#070b16] text-white pt-24 pb-20">
      {/* Schema Markup for Search Engines */}
      <CaseStudySchema
        title={study.title}
        description={study.overview}
        url={pageUrl}
        image={study.heroImage}
        client={study.client}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: 'Case Studies', url: '/case-studies' },
            { name: study.client, url: `/case-study/${slug}` },
          ]}
        />

        {/* Hero Header */}
        <header className="pt-6 pb-12 border-b border-gray-800">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-teal-500 text-black font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
              {study.client}
            </span>
            <span className="bg-gray-800 text-gray-300 text-xs font-medium px-3 py-1 rounded-full border border-gray-700">
              {study.category}
            </span>
            <span className="text-gray-400 text-xs font-mono">
              Industry: {study.industry}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            {study.title}
          </h1>

          <p className="text-lg md:text-xl text-teal-300/90 font-medium leading-relaxed">
            {study.tagline}
          </p>
        </header>

        {/* Featured Banner Image */}
        <div className="relative w-full h-80 sm:h-[450px] my-10 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        {/* Key Metrics Counter Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#0c1324] border border-cyan-500/30 rounded-2xl mb-12 shadow-xl">
          {study.metrics.map((m, i) => (
            <div key={i} className="text-center p-3">
              <div className="text-2xl sm:text-3xl font-black text-teal-400 font-mono mb-1">
                {m.value}
              </div>
              <div className="text-xs font-bold text-gray-200">{m.label}</div>
              {m.change && <div className="text-[11px] text-gray-400">{m.change}</div>}
            </div>
          ))}
        </div>

        {/* Main Content Sections */}
        <div className="space-y-12 text-gray-300 text-base md:text-lg leading-relaxed">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Award className="w-6 h-6 text-teal-400" /> Project Overview
            </h2>
            <p className="bg-[#0b101f] p-6 rounded-2xl border border-gray-800">
              {study.overview}
            </p>
          </section>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="bg-[#0e1628] p-8 rounded-3xl border border-gray-800">
              <h2 className="text-xl font-bold text-rose-400 mb-3">
                The Operational Challenge
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-300">
                {study.challenge}
              </p>
            </section>

            <section className="bg-[#0e1628] p-8 rounded-3xl border border-teal-500/30">
              <h2 className="text-xl font-bold text-teal-400 mb-3">
                The Architectural Solution
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-300">
                {study.solution}
              </p>
            </section>
          </div>

          {/* Key Deliverables & Results */}
          <section className="bg-[#0c1324] p-8 rounded-3xl border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">
              Key Results & Business Impact
            </h2>
            <div className="space-y-3">
              {study.results.map((res, i) => (
                <div key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-teal-400" /> Technology Architecture Stack
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {study.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="font-mono text-xs sm:text-sm bg-gray-900 text-teal-300 border border-teal-500/30 px-4 py-2 rounded-xl shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Client Testimonial */}
          {study.testimonial && (
            <section className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-r from-teal-950/40 via-cyan-950/30 to-[#070b16] border border-cyan-500/40">
              <Quote className="w-10 h-10 text-teal-400/40 mb-4" />
              <blockquote className="text-lg md:text-xl font-medium text-white italic mb-6">
                &ldquo;{study.testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex flex-col">
                <span className="font-bold text-white text-base">
                  {study.testimonial.author}
                </span>
                <span className="text-xs text-teal-400">
                  {study.testimonial.position}, {study.testimonial.company}
                </span>
              </div>
            </section>
          )}

          {/* Social Sharing */}
          <SocialShare title={study.title} url={pageUrl} />

          {/* Bottom Discovery Call CTA */}
          <div className="pt-8 text-center bg-[#0d162b] p-10 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-3">
              Need Similar Results for Your Business?
            </h3>
            <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6">
              Our engineering team can evaluate your current tech infrastructure and draft a custom delivery roadmap.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-extrabold text-sm hover:from-teal-300 hover:to-cyan-400 transition-all shadow-lg shadow-teal-500/20"
            >
              <span>Book A Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section (editor-driven, adds FAQPage rich-result schema) */}
      {study.faqs && study.faqs.length > 0 && (
        <FaqSection
          faqs={study.faqs}
          eyebrow="FAQ"
          heading="Frequently Asked Questions"
          subheading={`Common questions about the ${study.client} project.`}
          id="case-study-faq"
        />
      )}
    </article>
  );
}
