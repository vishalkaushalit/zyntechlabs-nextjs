import React from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface CircuitCtaSectionProps {
  tag?: string;
  heading: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
}

export function CircuitCtaSection({ tag, heading, description, buttonText, buttonHref }: CircuitCtaSectionProps) {
  return (
    <section className="py-5 circuit_bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center text-center">
          <div className="max-w-2xl">
            <ScrollReveal direction="up">
              {tag && <span className="section-tag">{tag}</span>}
              <h2 className="font-display text-white text-2xl sm:text-3xl md:text-4xl font-bold">{heading}</h2>
              {description && <p className="text-[#a0a0b8] mb-4">{description}</p>}
              <Link href={buttonHref} className="btn-teal-primary mt-2">
                {buttonText}
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
