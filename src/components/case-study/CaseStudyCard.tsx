import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { CaseStudy } from '@/types';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="group relative bg-[#0f172a]/90 hover:bg-[#162238] border border-gray-800 hover:border-cyan-500/50 rounded-3xl overflow-hidden transition-all duration-500 flex flex-col justify-between shadow-2xl hover:shadow-cyan-500/10">
      {/* Top Banner / Image */}
      <div className="relative h-64 md:h-72 w-full overflow-hidden">
        <Image
          src={study.heroImage}
          alt={study.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-black/30" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-teal-500 text-black text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
            {study.client}
          </span>
          <span className="bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full border border-white/10">
            {study.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors mb-3 leading-snug">
            <Link href={`/case-study/${study.slug}`}>
              {study.title}
            </Link>
          </h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
            {study.overview}
          </p>

          {/* Metrics Highlight with Animated Rolling Numbers */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {study.metrics.slice(0, 2).map((m, i) => (
              <div
                key={i}
                className="bg-[#0b1120]/80 p-3.5 rounded-xl border border-gray-800/80 group-hover:border-cyan-500/40 transition-colors"
              >
                <div className="text-xl md:text-2xl font-extrabold text-teal-400 font-mono">
                  <AnimatedCounter value={m.value} duration={2} />
                </div>
                <div className="text-xs text-gray-400 font-medium truncate mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {study.techStack.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="text-xs bg-gray-900/90 text-gray-300 px-3 py-1 rounded-md border border-gray-800 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-800/80">
          <Link
            href={`/case-study/${study.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-400 group-hover:text-white transition-colors"
          >
            <span>Read Full Case Study</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
