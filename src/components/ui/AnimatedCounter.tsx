'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface AnimatedCounterProps {
  value: string | number;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 2,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState<string>('0');

  // Extract number and formatting from string like "8+", "100+", "350+", "99.9%", "150K+", "-34%"
  const rawString = String(value);
  const match = rawString.match(/([-+]?[0-9]*\.?[0-9]+)/);
  const numericTarget = match ? parseFloat(match[0]) : 0;
  const isDecimal = rawString.includes('.');
  const prefix = rawString.startsWith('-') ? '-' : '';
  const suffix = rawString.replace(/^[-+]?[0-9]*\.?[0-9]+/, '');

  useEffect(() => {
    if (!isInView) {
      setDisplayValue(isDecimal ? '0.0' : '0');
      return;
    }

    let startTimestamp: number | null = null;
    const animDuration = duration * 1000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / animDuration, 1);
      
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNumber = easeProgress * numericTarget;

      if (isDecimal) {
        setDisplayValue(currentNumber.toFixed(1));
      } else {
        setDisplayValue(Math.floor(currentNumber).toLocaleString());
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        if (isDecimal) {
          setDisplayValue(numericTarget.toFixed(1));
        } else {
          setDisplayValue(numericTarget.toLocaleString());
        }
      }
    };

    const animFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animFrame);
  }, [isInView, numericTarget, isDecimal, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
