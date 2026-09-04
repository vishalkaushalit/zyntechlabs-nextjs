'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity/sanity.config';
import { isSanityProjectConfigured, projectId } from '@/sanity/env';
import Link from 'next/link';
import { KeyRound, ArrowRight, ExternalLink, RefreshCw } from 'lucide-react';

export default function StudioPage() {
  if (!isSanityProjectConfigured) {
    return (
      <div className="min-h-screen bg-[#070b16] text-white flex items-center justify-center p-6">
        <div className="max-w-xl w-full bg-[#0c1324] border border-cyan-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
            <KeyRound className="w-7 h-7" />
          </div>

          <div>
            <span className="text-xs uppercase font-mono font-bold text-teal-400 bg-teal-950/60 px-3 py-1 rounded-md">
              Sanity Studio CMS Setup
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white mt-3">
              Connect Your Free Sanity Project
            </h1>
            <p className="text-gray-300 text-sm mt-2 leading-relaxed">
              To open the Sanity Studio admin dashboard, you need to add your free Sanity Project ID in your environment variables.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#070b16] border border-gray-800 space-y-3 text-xs sm:text-sm">
            <div className="flex items-center justify-between border-b border-gray-800 pb-2 font-mono">
              <span className="text-gray-400">Step 1: Create Free Project</span>
              <a
                href="https://www.sanity.io/manage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline inline-flex items-center gap-1 font-bold"
              >
                sanity.io/manage <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-gray-400 block font-mono">Step 2: Add to .env.local file:</span>
              <div className="bg-[#050811] p-3 rounded-xl font-mono text-teal-300 text-xs border border-gray-850 select-all">
                NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here<br />
                NEXT_PUBLIC_SANITY_DATASET=production
              </div>
            </div>

            <div className="pt-1">
              <span className="text-gray-400 font-mono">Step 3: Restart dev server or reload this page.</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <Link
              href="/"
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              ← Back to Main Website
            </Link>

            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-black font-extrabold text-xs transition-colors shadow-lg shadow-teal-500/20"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reload Studio</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
