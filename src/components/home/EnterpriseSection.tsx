import React from 'react';
import { enterprisePillars } from '@/lib/fallbackData';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function EnterpriseSection() {
  return (
    <section id="enterprise" className="bg-[#14141c] py-5 border-t border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="lg:pr-8">
            <ScrollReveal direction="left">
              <span className="section-tag">Enterprise-Grade Software Engineering for Scalable Growth</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
                Built for enterprises
                <br />
                that cannot afford failure
              </h2>

              <p className="text-[#a0a0b8] mb-4">
                Zyntechlabs is not only a technology provider, but a technology partner. We integrate with your team, learn your architecture and are fully responsible for delivery from first commit to production.
              </p>
              <p className="text-[#a0a0b8] mb-4">
                We work in a model that must be used in enterprise environments, where structured governance, security and accountability are embedded in every engagement – from the initial point of the NDA, through the SLAs, sprint planning, audit trails, and complete project ownership throughout.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {enterprisePillars.map((pillar, i) => (
                  <div key={i} className="pillar-card">
                    <div className="font-bold text-white mb-1">{pillar.title}</div>
                    <div className="text-sm text-[#a0a0b8]">{pillar.desc}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-3">
                <div className="stat-box">
                  <span className="big-number">100%</span>
                  <span className="text-[#a0a0b8] text-sm mt-1 block">In-house delivery</span>
                </div>
                <div className="stat-box">
                  <span className="big-number">8+</span>
                  <span className="text-[#a0a0b8] text-sm mt-1 block">Years of Experience</span>
                </div>
                <div className="stat-box">
                  <span className="big-number">24/7</span>
                  <span className="text-[#a0a0b8] text-sm mt-1 block">Production Support</span>
                </div>
                <div className="stat-box">
                  <span className="big-number">ISO</span>
                  <span className="text-[#a0a0b8] text-sm mt-1 block">Aligned Process Standards</span>
                </div>

                <div className="col-span-2">
                  <div className="stat-box-full mt-2">
                    <span className="font-semibold text-[#00c9a7] block text-base">zyntechlabs.io</span>
                    <span className="text-sm text-[#00c9a7] opacity-75 block">Enterprise enquiries · sales@zyntechlabs.io</span>
                    <span className="text-sm text-[#00c9a7] opacity-75 block">Enterprise enquiries · Gary@zyntechlabs.io</span>
                  </div>
                </div>

                <div className="stat-box">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/iso.svg"
                    alt="ISO"
                    width={48}
                    height={48}
                    className="mx-auto"
                  />
                  <h3 className="my-2 font-display text-white">ISO 9001</h3>
                  <span className="text-[#a0a0b8] text-sm block">Quality Managment System</span>
                </div>
                <div className="stat-box">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/aws.svg"
                    alt="AWS"
                    width={48}
                    height={48}
                    className="mx-auto"
                  />
                  <h3 className="my-2 font-display text-white">AWS</h3>
                  <span className="text-[#a0a0b8] text-sm block">Solution Architecture, Associate</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
