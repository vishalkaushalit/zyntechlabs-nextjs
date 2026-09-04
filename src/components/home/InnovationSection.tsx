import React from 'react';
import Image from 'next/image';
import { innovationData } from '@/lib/fallbackData';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function InnovationSection() {
  return (
    <section id="innovation" className="py-5 circuit_bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ScrollReveal direction="up">
          <div className="max-w-3xl mb-8">
            <span className="section-tag">Smart Innovation</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Unlock Business Potential Through AI-Powered Smart Applications
            </h2>
            <p className="text-[#a0a0b8] text-base sm:text-lg leading-relaxed">
              We advise firms on the way they could make use of AI technology to develop intelligent applications. Our AI-based offerings have been designed to make your business operations more efficient and help you make informed decisions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {innovationData.map((item, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <div className="service-card">
                <div className="icon-square">
                  <Image src={item.image} alt={item.title} width={30} height={30} />
                </div>
                <h3 className="fs-6 fw-semibold text-white mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-[#a0a0b8] mb-0 leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
