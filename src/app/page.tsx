import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { CounterSection } from '@/components/home/CounterSection';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { ImageCtaBanner } from '@/components/home/ImageCtaBanner';
import { TrustedBySection } from '@/components/home/TrustedBySection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { CircuitCtaSection } from '@/components/home/CircuitCtaSection';
import { InnovationSection } from '@/components/home/InnovationSection';
import { CtaBanner } from '@/components/home/CtaBanner';
import { TechStackSection } from '@/components/home/TechStackSection';
import { EnterpriseSection } from '@/components/home/EnterpriseSection';
import { FeaturedCaseStudies } from '@/components/home/FeaturedCaseStudies';
import { FaqSection } from '@/components/home/FaqSection';
import { OrganizationSchema, WebSiteSchema } from '@/components/seo/SchemaMarkup';
import { getAllCaseStudies, getSiteSettings } from '@/sanity/client';
import { constructMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return constructMetadata({
    description: settings.defaultDescription,
    settings,
  });
}

export default async function HomePage() {
  const [caseStudies, settings] = await Promise.all([
    getAllCaseStudies(),
    getSiteSettings(),
  ]);

  return (
    <>
      {/* Structured Data JSON-LD for Google Search */}
      <OrganizationSchema />
      <WebSiteSchema />

      <main className="min-h-screen bg-[#0a0a0f] text-white">
        <HeroSection />
        <CounterSection />
        <IndustriesSection />
        <ImageCtaBanner
          bgClassName="industries_cta_sec"
          heading="Don't See Your Industry Listed?"
          buttonText="Talk to Our Expert!"
          buttonHref="/contact"
        />
        <TrustedBySection />
        <ServicesSection />
        <CircuitCtaSection
          heading="How Much Does It Cost to Build Enterprise Software?"
          description="No hidden fees. Just transparent pricing and enterprise software you can rely on."
          buttonText="Get a Free Cost Estimation"
          buttonHref="/contact"
        />
        <InnovationSection />
        <CtaBanner />
        <TechStackSection />
        <EnterpriseSection />
        <FeaturedCaseStudies studies={caseStudies} />
        <FaqSection faqs={settings.faqs} />
        <CircuitCtaSection
          tag="Get in touch"
          heading="Boost Productivity with Custom Enterprise Software Solutions"
          description="Collaborate with a business software developer of the caliber to create custom, efficient, performance-oriented software solutions which meet your business needs."
          buttonText="Book a Free Consultation"
          buttonHref="/contact"
        />
      </main>
    </>
  );
}
