'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { FaqSchema } from '@/components/seo/SchemaMarkup';
import type { FaqItem } from '@/types';

const defaultFaqs: FaqItem[] = [
  {
    question: 'What types of custom enterprise software does ZynTech Labs develop?',
    answer:
      'We architect and build end-to-end custom enterprise software systems including high-throughput core banking engines, real-time fleet telematics & dispatch platforms, AI document processing pipelines, multi-tenant B2B SaaS platforms, and HIPAA-compliant healthcare portals.',
  },
  {
    question: 'How does the discovery call and project engagement process work?',
    answer:
      'After you book a discovery call via our contact form, our senior solutions architect meets with your technical stakeholders to audit requirements. Within 48 hours, we provide an architectural blueprint, tech stack recommendations, milestone timelines, and fixed or dedicated team pricing options.',
  },
  {
    question: 'Do we own 100% of the source code and intellectual property?',
    answer:
      'Yes, absolutely. Upon milestone completion, 100% of the custom source code, documentation, CI/CD deployment scripts, and intellectual property rights are fully transferred to your company under our standard Master Services Agreement.',
  },
  {
    question: 'How does your Next.js + Headless CMS setup compare to WordPress?',
    answer:
      'Our Next.js architecture provides sub-second page loads (<1.0s LCP), zero plugin security vulnerabilities, perfect 98–100 Google Core Web Vitals, and a modern Sanity.io CMS dashboard with real-time Yoast-style SEO controls and visual editing.',
  },
  {
    question: 'What are your standard delivery timelines for MVP and enterprise scale platforms?',
    answer:
      'Typical enterprise MVP delivery spans 6 to 10 weeks. For large-scale distributed platforms requiring complex IoT or microservice integrations, we operate on bi-weekly agile sprint cadences with continuous automated testing and deployment.',
  },
];

interface FaqSectionProps {
  faqs?: FaqItem[];
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  id?: string;
}

export function FaqSection({
  faqs = defaultFaqs,
  eyebrow = 'Frequently Asked Questions',
  heading = 'Everything You Need to Know',
  subheading = 'Find answers to common questions regarding our engineering methodologies, intellectual property ownership, and technology deliverables.',
  id = 'faq',
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={id} className="py-24 bg-[#070b16] relative border-t border-gray-800/80">
      {/* Structured Data FAQ Schema for Google Rich Snippets */}
      <FaqSchema faqs={faqs} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-teal-400 font-mono font-bold bg-teal-950/60 border border-teal-500/30 px-3 py-1 rounded-md mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              {heading}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              {subheading}
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={index} direction="up" delay={index * 0.08}>
                <div className="bg-[#0c1324] border border-gray-800 hover:border-cyan-500/40 rounded-2xl overflow-hidden transition-all shadow-lg">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-white text-base sm:text-lg pr-2">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-teal-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-teal-950 border-teal-500/40 text-teal-300' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-gray-850/60 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
