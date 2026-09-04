'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(Math.max(currentProgress, 0), 100));
      }

      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (pathname?.startsWith('/studio')) {
    return null;
  }

  // Calculate SVG circle strokeDashoffset for 360-degree progress ring
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-20 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 select-none pointer-events-auto"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
            className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#0c1424]/90 hover:bg-[#121e38] text-white border border-cyan-500/40 shadow-2xl backdrop-blur-xl group cursor-pointer"
            title="Scroll back to top"
            aria-label="Scroll to top"
          >
            {/* Circular Progress Ring */}
            <div className="relative w-5 h-5 flex items-center justify-center">
              <svg className="w-5 h-5 -rotate-90" viewBox="0 0 38 38">
                <circle
                  cx="19"
                  cy="19"
                  r={radius}
                  className="stroke-gray-800"
                  strokeWidth="3.5"
                  fill="none"
                />
                <circle
                  cx="19"
                  cy="19"
                  r={radius}
                  className="stroke-teal-400 transition-all duration-150"
                  strokeWidth="3.5"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </svg>
              <ArrowUp className="w-2.5 h-2.5 text-teal-400 absolute group-hover:-translate-y-0.5 transition-transform" />
            </div>

            <span className="text-[11px] sm:text-xs font-bold font-mono text-gray-200 group-hover:text-teal-300">
              {Math.round(scrollProgress)}%
            </span>

            <span className="hidden sm:inline-block text-xs font-semibold text-gray-400 group-hover:text-white">
              Top
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
