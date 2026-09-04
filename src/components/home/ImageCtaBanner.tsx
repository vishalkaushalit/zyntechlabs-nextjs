import React from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface ImageCtaBannerProps {
  bgClassName: string;
  heading: string;
  buttonText: string;
  buttonHref: string;
}

export function ImageCtaBanner({ bgClassName, heading, buttonText, buttonHref }: ImageCtaBannerProps) {
  return (
    <section className={`${bgClassName} py-5`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-4">
          <div className="text-center">
            <h2 className="font-display text-white text-2xl sm:text-3xl font-bold mb-4">{heading}</h2>
            <ScrollReveal direction="up">
              <Link href={buttonHref} className="btn-white-outlined">
                {buttonText}
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
