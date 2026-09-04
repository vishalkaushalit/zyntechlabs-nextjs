'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function ScrollProgressBar() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  
  // Smooth spring physics for fluid progress feedback
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (pathname?.startsWith('/studio')) {
    return null;
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 w-full h-[3px] overflow-hidden pointer-events-none">
      <motion.div
        style={{ scaleX }}
        className="w-full h-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 origin-left shadow-[0_0_15px_rgba(45,212,191,0.9)]"
      />
    </div>
  );
}
