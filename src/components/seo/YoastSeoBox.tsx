'use client';

import React, { useState } from 'react';
import { Globe, Smartphone, Monitor, CheckCircle, AlertTriangle } from 'lucide-react';

interface YoastSeoBoxProps {
  title?: string;
  description?: string;
  slug?: string;
  focusKeyword?: string;
}

export function YoastSeoBox({
  title = 'Default Title',
  description = 'Default Meta Description',
  slug = 'your-page-slug',
  focusKeyword = '',
}: YoastSeoBoxProps) {
  const [device, setDevice] = useState<'mobile' | 'desktop'>('desktop');

  const titleLength = title.length;
  const descLength = description.length;

  const isTitleGood = titleLength >= 40 && titleLength <= 65;
  const isDescGood = descLength >= 120 && descLength <= 160;

  return (
    <div className="bg-[#0f172a] border border-cyan-500/20 rounded-xl p-5 text-gray-200 shadow-2xl">
      <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-teal-400" />
          <h3 className="font-semibold text-white text-base">Yoast-Style Google Search Snippet Preview</h3>
        </div>
        <div className="flex items-center bg-gray-900 rounded-lg p-1 border border-gray-800 text-xs">
          <button
            onClick={() => setDevice('desktop')}
            className={`flex items-center gap-1 px-3 py-1 rounded-md transition-colors ${
              device === 'desktop' ? 'bg-teal-500 text-black font-semibold' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" /> Desktop
          </button>
          <button
            onClick={() => setDevice('mobile')}
            className={`flex items-center gap-1 px-3 py-1 rounded-md transition-colors ${
              device === 'mobile' ? 'bg-teal-500 text-black font-semibold' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" /> Mobile
          </button>
        </div>
      </div>

      {/* Google SERP Simulated Card */}
      <div
        className={`bg-[#202124] rounded-lg p-4 font-sans text-left transition-all ${
          device === 'mobile' ? 'max-w-md mx-auto border border-gray-700' : 'w-full'
        }`}
      >
        <div className="flex items-center gap-2 text-xs text-[#bdc1c6] mb-1">
          <div className="w-4 h-4 rounded-full bg-teal-400 flex items-center justify-center text-[9px] text-black font-bold">
            Z
          </div>
          <span className="truncate">https://zyntechlabs.io › {slug}</span>
        </div>
        <h4 className="text-[#8ab4f8] text-lg font-medium hover:underline cursor-pointer line-clamp-1 leading-snug mb-1">
          {title || 'Please enter a Meta Title'}
        </h4>
        <p className="text-[#bdc1c6] text-xs leading-relaxed line-clamp-2">
          {description || 'Please enter a Meta Description to optimize search engine click-through rates.'}
        </p>
      </div>

      {/* SEO Score Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 pt-3 border-t border-gray-800 text-xs">
        <div className="flex items-center justify-between bg-gray-900/60 p-2.5 rounded-lg border border-gray-800">
          <span className="flex items-center gap-1.5">
            {isTitleGood ? (
              <CheckCircle className="w-4 h-4 text-emerald-400" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-amber-400" />
            )}
            <span>SEO Title Length:</span>
          </span>
          <span className={`font-mono font-semibold ${isTitleGood ? 'text-emerald-400' : 'text-amber-400'}`}>
            {titleLength} / 60 chars
          </span>
        </div>

        <div className="flex items-center justify-between bg-gray-900/60 p-2.5 rounded-lg border border-gray-800">
          <span className="flex items-center gap-1.5">
            {isDescGood ? (
              <CheckCircle className="w-4 h-4 text-emerald-400" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-amber-400" />
            )}
            <span>Meta Description Length:</span>
          </span>
          <span className={`font-mono font-semibold ${isDescGood ? 'text-emerald-400' : 'text-amber-400'}`}>
            {descLength} / 160 chars
          </span>
        </div>
      </div>
    </div>
  );
}
