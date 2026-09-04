import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#070b16]">
      {/* Background glowing gradients & tech grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415580_1px,transparent_1px),linear-gradient(to_bottom,#33415580_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_90%_at_50%_20%,#000_50%,transparent_100%)] pointer-events-none" />

      {/* Top Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/20 to-teal-500/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Main H1 Headline */}
        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="font-display text-[26px] sm:text-[32px] md:text-[40px] lg:text-[50px] font-extrabold text-white tracking-[-1px] leading-[1.2] mb-6">
            Driving Enterprise Growth with Innovative Software{' '}
            <span className="text-[#00c9a7]">Solution</span>
          </h1>
        </ScrollReveal>

        {/* Feature Badges */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10 text-xs sm:text-sm text-gray-200 uppercase tracking-wide">
            <div className="badge-teal non_dot bg-transparent">
              <CheckCircle2 className="w-4 h-4 text-[#00c9a7]" />
              <span>Full-Cycle Development</span>
            </div>
            <div className="badge-teal non_dot bg-transparent">
              <CheckCircle2 className="w-4 h-4 text-[#00c9a7]" />
              <span>Enterprise-Focused Solutions</span>
            </div>
            <div className="badge-teal non_dot bg-transparent">
              <CheckCircle2 className="w-4 h-4 text-[#00c9a7]" />
              <span>Global Delivery & Support</span>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal direction="up" delay={0.5}>
          <Link href="/contact" className="btn-teal-primary group">
            <span>Book A Discovery Call</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
