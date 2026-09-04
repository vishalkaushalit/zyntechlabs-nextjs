import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CaseStudyCard } from '@/components/case-study/CaseStudyCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { CaseStudy } from '@/types';

export function FeaturedCaseStudies({ studies }: { studies: CaseStudy[] }) {
  return (
    <section className="py-24 bg-[#050811] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-block text-xs uppercase tracking-widest text-teal-400 font-mono font-bold bg-teal-950/60 border border-teal-500/30 px-3 py-1 rounded-md mb-3">
                Proven Track Record
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Featured Client Case Studies & Impact
              </h2>
            </div>

            <div>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-bold text-teal-400 hover:text-white transition-colors group"
              >
                View All Case Studies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Case Studies 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {studies.map((study, index) => (
            <ScrollReveal key={study._id || study.slug} direction="up" delay={index * 0.15}>
              <CaseStudyCard study={study} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
