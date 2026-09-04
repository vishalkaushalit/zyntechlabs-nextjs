'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const stats = [
  { value: '8+', label: 'Years of Experience' },
  { value: '100+', label: 'Tech Enthusiast' },
  { value: '350+', label: 'Products Delivered' },
];

export function CounterSection() {
  return (
    <section id="counter_experience" className="py-5 circuit_bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
              <div className="text-center">
                <span className="counter_number font-display block font-bold text-white text-4xl sm:text-5xl">
                  <AnimatedCounter value={stat.value} duration={2} />
                </span>
                <span className="text-[#a0a0b8] text-sm">{stat.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
