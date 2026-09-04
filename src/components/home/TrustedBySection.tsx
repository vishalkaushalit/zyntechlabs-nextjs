import React from 'react';
import Image from 'next/image';
import { trustedByLogos } from '@/lib/fallbackData';

export function TrustedBySection() {
  return (
    <section className="pt-5 pt-md-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h2 className="font-display text-white text-2xl sm:text-3xl font-bold mb-4">Trusted By</h2>
        <div className="slider-wrapper">
          <div className="marquee-track">
            {[0, 1].map((set) => (
              <div key={set} className="marquee-group">
                {trustedByLogos.map((logo, i) => (
                  <Image
                    key={`${set}-${i}`}
                    src={logo}
                    alt="Client logo"
                    width={160}
                    height={80}
                    className="h-20 w-auto object-contain mx-8"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
