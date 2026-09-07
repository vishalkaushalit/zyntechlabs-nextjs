import React from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function HeroSection() {
  return (
    <section className="py-12 relative flex min-h-screen items-center justify-center overflow-hidden bg-[#08090e] px-4 sm:px-6 lg:px-8">
      {/* Subtle technical grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(71,76,88,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(71,76,88,0.22)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_42%_46%_at_50%_43%,rgba(0,201,167,0.075),transparent_72%)]" />

      <div className="relative z-10 mx-auto w-full lg:w-[85%] max-w-5xl text-center">
        {/* Main H1 Headline */}
        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="text-[30px] mb-6 md:text-[40px] lg:text-[50px] font-extrabold leading-[1.2] tracking-[-0.065em] text-white sm:mb-8">
            Driving Enterprise Growth with Innovative
            <span className="text-[#00c9a7]"> Software Solution</span>
          </h1>
        </ScrollReveal>

        {/* Feature Badges */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="my-12 sm:mb-6 flex flex-wrap sm:flex-nowrap items-center justify-center gap-7 sm:gap-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-zinc-200 sm:gap-6 lg:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/25 bg-[#08090e]/60 px-4 py-2 sm:px-6">
              <CheckCircle2 className="h-3 w-3 shrink-0 text-zinc-300" />
              <span className="whitespace-nowrap text-[12px] sm:whitespace-normal">Full-Cycle Development</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/25 bg-[#08090e]/60 px-4 py-2 sm:px-6">
              <CheckCircle2 className="h-3 w-3 shrink-0 text-zinc-300" />
              <span className="whitespace-nowrap text-[12px] sm:whitespace-normal">Enterprise-Focused Solutions</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/25 bg-[#08090e]/60 px-4 py-2 sm:px-6">
              <CheckCircle2 className="h-3 w-3 shrink-0 text-zinc-300" />
              <span className="whitespace-nowrap text-[12px] sm:whitespace-normal">Global Delivery & Support</span>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal direction="up" delay={0.5}>
          <Link href="/contact" className="inline-flex min-h-10 items-center justify-center rounded-lg btn-teal-primary px-5 py-3 text-base font-semibold text-[#06100f] transition-colors hover:bg-[#12ddba] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00c9a7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090e] sm:min-w-[250px] sm:text-md">
            Book A Discovery Call
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
