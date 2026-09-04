import React from 'react';
import Image from 'next/image';
import { techStackRowOne, techStackRowTwo } from '@/lib/fallbackData';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function TechStackSection() {
  return (
    <section id="tech_stack" className="py-5 circuit_bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="max-w-2xl mx-auto text-center mb-4">
            <h2 className="font-display text-white text-2xl sm:text-3xl md:text-4xl font-bold">
              Tech Stack We Use for Enterprise Software Development
            </h2>
            <p className="text-[#a0a0b8]">
              Our proficient developers leverage top-notch technologies to create scalable, secure, and future-ready custom enterprise applications. Join us and gain the cost of operating, efficiency and risk management with an effective team.
            </p>
          </div>
        </ScrollReveal>

        <div className="slider-wrapper">
          <div className="marquee-track">
            {[0, 1].map((set) => (
              <div key={set} className="marquee-group">
                {techStackRowOne.map((tech, i) => (
                  <div key={`${set}-${i}`} className="text-center mx-3">
                    <Image src={tech.image} alt={tech.name} width={100} height={100} className="h-[100px] w-auto object-contain mx-auto" />
                    <p className="text-[#a0a0b8] text-sm mt-1">{tech.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="slider-wrapper mt-4">
          <div className="marquee-track marquee-track-reverse">
            {[0, 1].map((set) => (
              <div key={set} className="marquee-group">
                {techStackRowTwo.map((tech, i) => (
                  <div key={`${set}-${i}`} className="text-center mx-3">
                    <Image src={tech.image} alt={tech.name} width={100} height={100} className="h-[100px] w-auto object-contain mx-auto" />
                    <p className="text-[#a0a0b8] text-sm mt-1">{tech.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
