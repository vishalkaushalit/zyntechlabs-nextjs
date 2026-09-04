import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { constructMetadata } from '@/lib/seo';
import { Shield, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy',
  description:
    'ZynTech Labs privacy policy detailing how we handle client data, analytics, cookies, and enterprise compliance.',
  slug: 'privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#070b16] text-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Privacy Policy', url: '/privacy-policy' }]} />

        <header className="pt-6 pb-8 border-b border-gray-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>GDPR & Enterprise Privacy Standards</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400 mt-2 font-mono">
            Last Updated: August 2026 • Version 2.4
          </p>
        </header>

        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-sm sm:text-base space-y-8 mt-8">
          <section className="bg-[#0c1324] border border-gray-800 p-6 sm:p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-teal-400" /> 1. Commitment to Data Privacy
            </h2>
            <p>
              At ZynTech Labs, we take the confidentiality of our enterprise clients, partners, and website visitors seriously. This Privacy Policy explains the collection, storage, encryption, and processing of information when you interact with our website, book discovery calls, or engage our custom software engineering services.
            </p>
          </section>

          <section className="bg-[#0c1324] border border-gray-800 p-6 sm:p-8 rounded-3xl space-y-4">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5 text-teal-400" /> 2. Information We Collect
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-1" />
                <span><strong>Discovery Inquiry Data:</strong> Full name, work email address, company name, project domain, estimated budget, and scope descriptions.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-1" />
                <span><strong>Technical & Analytics Data:</strong> IP address, device viewport, browser type, referral URLs, and interaction metrics gathered via non-blocking GA4 & GTM telemetry.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-1" />
                <span><strong>Client Project Artifacts:</strong> Architecture specifications and proprietary business logic shared under our signed Non-Disclosure Agreement (NDA).</span>
              </div>
            </div>
          </section>

          <section className="bg-[#0c1324] border border-gray-800 p-6 sm:p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-teal-400" /> 3. How We Protect & Use Your Data
            </h2>
            <p className="mb-4">
              We never sell, rent, or trade your personal or corporate data to third-party advertisers. Information submitted is strictly used for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
              <li>Preparing customized architecture blueprints and engineering delivery roadmaps.</li>
              <li>Executing contractual service agreements and software milestones.</li>
              <li>Continuous performance tuning, Core Web Vitals optimization, and security audits.</li>
            </ul>
          </section>

          <section className="bg-[#0c1324] border border-gray-800 p-6 sm:p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-white mb-3">4. Contact Privacy Compliance Officer</h2>
            <p>
              If you have any questions regarding data protection, GDPR subject requests, or data deletion, please contact our security team at:
            </p>
            <p className="mt-3 font-mono text-teal-300">
              Email: <a href="mailto:privacy@zyntechlabs.io" className="underline hover:text-white">privacy@zyntechlabs.io</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
