import React from 'react';
import Image from 'next/image';
import { servicesData } from '@/lib/fallbackData';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function ServicesSection() {
  return (
    <section id="services" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="w-full lg:max-w-3xl mb-8">
            <span className="section-tag">Our capabilities</span>
            <h2 className="font-display text-[30px] lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Powering Innovation with End-to-End In-House Development
            </h2>
            <p className="text-[#a0a0b8] text-base sm:text-lg leading-relaxed">
              We are a reputable technology provider to various enterprises, dealing with all aspects of delivery, from strategy to design and engineering, deployment and support. No outsourcing - just accountable execution and consistent quality across the entire development lifecycle.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesData.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <div className="service-card">
                <div className="icon-square">
                  <Image src={service.image} alt={service.title} width={30} height={30} />
                </div>
                <h3 className="fs-6 fw-semibold text-white mb-2 text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-[#a0a0b8] mb-0 leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
