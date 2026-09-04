import React from 'react';
import type { Metadata } from 'next';
import { getAllCaseStudies } from '@/sanity/client';
import { CaseStudyCard } from '@/components/case-study/CaseStudyCard';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Client Case Studies & Enterprise Engineering Portfolio',
  description:
    'Explore how ZynTech Labs has engineered high-throughput logistics platforms, IoT telematics systems, and fintech software for market leaders.',
  slug: 'case-studies',
});

export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies();

  return (
    <div className="min-h-screen bg-[#070b16] text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Portfolio & Case Studies', url: '/case-studies' }]} />

        {/* Page Header */}
        <div className="max-w-3xl pt-6 mb-16">
          <span className="text-xs uppercase tracking-widest text-teal-400 font-mono font-bold bg-teal-950/60 border border-teal-500/30 px-3 py-1 rounded-md">
            Portfolio Showcase
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-4 mb-4">
            Enterprise Client Case Studies
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Real-world stories of how our software architecture, AI telemetry, and cloud engineering created scalable business outcomes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study._id || study.slug} study={study} />
          ))}
        </div>
      </div>
    </div>
  );
}
