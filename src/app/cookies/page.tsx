import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { constructMetadata } from '@/lib/seo';
import { Cookie, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Cookie & Tracking Policy',
  description:
    'Information about how ZynTech Labs utilizes essential, performance, and analytics cookies.',
  slug: 'cookies',
});

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#070b16] text-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Cookie Policy', url: '/cookies' }]} />

        <header className="pt-6 pb-8 border-b border-gray-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold mb-4">
            <Cookie className="w-3.5 h-3.5" />
            <span>Transparency in Tracking & Telemetry</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-sm text-gray-400 mt-2 font-mono">
            Last Updated: August 2026
          </p>
        </header>

        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-sm sm:text-base space-y-8 mt-8">
          <section className="bg-[#0c1324] border border-gray-800 p-6 sm:p-8 rounded-3xl space-y-4">
            <h2 className="text-xl font-bold text-white mb-3">Categories of Cookies We Use</h2>
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800">
                <strong className="text-teal-400 block mb-1">1. Strictly Necessary Cookies</strong>
                <p className="text-xs sm:text-sm text-gray-300">Essential for user authentication in Sanity Studio, session security, and CSRF token verification.</p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800">
                <strong className="text-teal-400 block mb-1">2. Performance & Analytics Cookies</strong>
                <p className="text-xs sm:text-sm text-gray-300">Google Analytics 4 (GA4) anonymous metrics to measure page load latency, popular blog posts, and conversion funnels.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
