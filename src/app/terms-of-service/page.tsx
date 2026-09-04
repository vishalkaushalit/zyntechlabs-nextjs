import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { constructMetadata } from '@/lib/seo';
import { Scale, FileCheck, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Terms of Service & Engagement Agreement',
  description:
    'ZynTech Labs Terms of Service outlining intellectual property rights, engineering deliverables, SLAs, and liability terms.',
  slug: 'terms-of-service',
});

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#070b16] text-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Terms of Service', url: '/terms-of-service' }]} />

        <header className="pt-6 pb-8 border-b border-gray-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>Master Services & Engagement Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-400 mt-2 font-mono">
            Last Updated: August 2026 • Version 3.1
          </p>
        </header>

        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-sm sm:text-base space-y-8 mt-8">
          <section className="bg-[#0c1324] border border-gray-800 p-6 sm:p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-teal-400" /> 1. Intellectual Property & Code Ownership
            </h2>
            <p>
              Upon full settlement of agreed project milestone invoices, 100% of all custom software source code, proprietary algorithms, database schemas, and digital assets developed exclusively for the client are fully assigned to the client. ZynTech Labs retains zero proprietary claim on bespoke client intellectual property.
            </p>
          </section>

          <section className="bg-[#0c1324] border border-gray-800 p-6 sm:p-8 rounded-3xl space-y-3">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-teal-400" /> 2. Delivery Guarantees & SLAs
            </h2>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-1" />
                <span>All software deliverables pass automated unit testing, vulnerability analysis, and code quality audits before production release.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-1" />
                <span>Enterprise high-availability architecture deployments include 99.99% uptime guarantees when coupled with our managed Cloud/DevOps support packages.</span>
              </div>
            </div>
          </section>

          <section className="bg-[#0c1324] border border-gray-800 p-6 sm:p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-white mb-3">3. Governing Law & Dispute Resolution</h2>
            <p>
              These terms and all associated Statement of Work (SOW) documents shall be governed and construed in accordance with the corporate enterprise statutes of the contracting entity&apos;s primary jurisdiction.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
