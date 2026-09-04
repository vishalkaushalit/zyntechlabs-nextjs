import React from 'react';
import Image from 'next/image';
import { industriesData } from '@/lib/fallbackData';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-[#14141c] py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ScrollReveal direction="up">
          <div className="max-w-3xl mb-8">
            <span className="section-tag">Industries we serve</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Industries Our Custom Enterprise Software Development Company Serves
            </h2>
            <p className="text-[#a0a0b8] text-base sm:text-lg leading-relaxed">
              At our custom enterprise software development agency, we provide custom enterprise technology solutions that are designed to meet the operational, regulatory and scalability needs of modern businesses. We create efficient, innovative and sustainable digital platforms for financial services, logistics networks, and more.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {industriesData.map((item, index) => (
            <ScrollReveal key={item.id} direction="up" delay={index * 0.1}>
              <div className="industry-item h-[300px]">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="icon-square w-20 h-20 flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={80}
                          height={80}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-0">{item.title}</h3>
                    </div>
                    <div className="flip-card-back">
                      <p>{item.fullDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
