'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function AppLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // Only run on non-studio routes
    if (pathname?.startsWith('/studio')) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 20) + 10;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [pathname]);

  if (pathname?.startsWith('/studio')) {
    return null;
  }

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="app-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-[#050811] flex flex-col items-center justify-center p-6 select-none"
        >
          {/* Glowing background halo */}
          <div className="absolute w-72 h-72 rounded-full bg-cyan-500/20 blur-[100px] pointer-events-none animate-pulse" />

          <div className="relative z-10 flex flex-col items-center max-w-xs w-full text-center space-y-6">
            {/* Logo pulse container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative p-2"
            >
              <Image
                src="/zyntech_logo.svg"
                alt="ZynTech Labs"
                width={200}
                height={35}
                priority
                className="h-10 w-auto object-contain drop-shadow-[0_0_20px_rgba(20,184,166,0.5)]"
              />
            </motion.div>

            {/* Progress Bar */}
            <div className="w-full space-y-2">
              <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden border border-gray-800 p-0.5">
                <motion.div
                  className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
                  <span>Loading Experience</span>
                </span>
                <span className="text-teal-300 font-bold">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
