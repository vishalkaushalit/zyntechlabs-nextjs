import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, Search, Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#070b16] text-white flex items-center justify-center px-4 py-24">
      <div className="max-w-xl w-full text-center space-y-6">
        {/* Glow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold">
          <span>Error Code 404 • Resource Not Found</span>
        </div>

        <h1 className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-500 font-mono tracking-tight">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          The Page You Are Looking For Does Not Exist
        </h2>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          The page may have been moved, renamed, or temporarily unavailable. Use the links below to navigate back to safe grounds.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-extrabold text-sm hover:from-teal-300 hover:to-cyan-400 transition-all shadow-lg shadow-teal-500/20"
          >
            <Home className="w-4 h-4" /> Return to Homepage
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm border border-gray-700 transition-colors"
          >
            Explore Case Studies
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm border border-gray-700 transition-colors"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
