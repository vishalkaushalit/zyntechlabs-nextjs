import React from 'react';
import type { Metadata } from 'next';
import { BreadcrumbSchema, CaseStudySchema } from '@/components/seo/SchemaMarkup';
import { Accordion } from '@/components/case-study/Accordion';
import { constructMetadata } from '@/lib/seo';

const IMG = '/images';

export const metadata: Metadata = constructMetadata({
  title: 'Tarzan Transport Case Study | IoT Fleet Telematics | ZynTech Labs',
  description:
    'Discover how ZynTech Labs partnered with Tarzan Transport Ltd. to deliver reliable flatbed transportation across North America.',
  slug: 'case-study/tarzan-transport',
});

const challenges = [
  {
    question: 'Reliable Specialized Carriers',
    answer:
      'Look out for reliable carriers that have the proper equipment and experience in handling unique cargo requirements, ensuring safe transportation and reducing every possible risk.',
  },
  {
    question: 'Safe Transit Every Mile',
    answer: 'Our experienced logistics team ensures every shipment is transported securely using proper planning and equipment.',
  },
  {
    question: 'Seamless Cross-Border Logistics',
    answer: 'We simplify customs, documentation and compliance so your oversized cargo moves efficiently across borders.',
  },
  {
    question: 'On-Time Delivery Commitment',
    answer: 'Advanced route planning and real-time shipment tracking help us consistently deliver on schedule.',
  },
  {
    question: 'Compliant Heavy Cargo Coordination',
    answer: 'From permits to escort vehicles and route surveys, we coordinate every requirement for heavy haul transportation.',
  },
];

const solutionCards = [
  {
    image: 'specialized_flatbed_fleet.webp',
    title: 'Specialized Flatbed Fleet',
    desc: 'The business utilizes up-to-date flatbed trucks intended for moving all kinds of goods such as steel, building materials, machinery, and heavy cargo.',
    span: 'md:col-span-3',
  },
  {
    image: 'heavy_haul_expertise.webp',
    title: 'Heavy Haul Expertise',
    desc: 'Tarzan Transport Ltd. is responsible for handling oversized and overweight loads, requiring special planning, handling, and transportation skills.',
    span: 'md:col-span-3',
  },
  {
    image: 'north_american_coverage.webp',
    title: 'North American Coverage',
    desc: 'The company provides transport services in Canada and the United States. This allows businesses to simplify cross-border cargo transportation with the help of a single logistics service.',
    span: 'md:col-span-3 lg:col-span-2',
  },
  {
    image: 'safety_first_operations.webp',
    title: 'Safety-First Operations',
    desc: 'Safety is one of the main priorities in operations. It involves vehicle maintenance, safe cargo transport, and experienced drivers.',
    span: 'md:col-span-3 lg:col-span-2',
  },
  {
    image: 'customer_focused_logistics.webp',
    title: 'Customer-Focused Logistics',
    desc: 'Rather than offering standard transportation alone, Tarzan Transport Ltd. works to provide responsive communication, dependable scheduling, & customized freight solutions based on customer requirements.',
    span: 'md:col-span-3 lg:col-span-2',
  },
];

export default function TarzanTransportCaseStudy() {
  const pageUrl = 'https://zyntechlabs.io/case-study/tarzan-transport';

  return (
    <article className="main_sec">
      <CaseStudySchema
        title="Delivering Reliable Flatbed Transportation Across North America"
        description="How ZynTech Labs partnered with Tarzan Transport Ltd. on fleet management and telematics."
        url={pageUrl}
        image={`${IMG}/case_study_tarzan_banner-scaled.webp`}
        client="Tarzan Transport"
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://zyntechlabs.io' },
          { name: 'Tarzan Transport', url: pageUrl },
        ]}
      />

      {/* Banner */}
      <section className="tarzan_case_study_banner hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="info tarzan_transport_case_study_div text-center mx-auto">
            <h1 className="mb-3 text-3xl md:text-4xl">
              Delivering <span>Reliable</span> <br />
              <span>Flatbed Transportation</span> Across
              <br />
              North America
            </h1>
          </div>
          <div className="mx-auto mt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${IMG}/case_study_tarzan_banner-scaled.webp`}
              alt="Banner"
              className="w-full hidden sm:block"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${IMG}/case_study_tarzan_mobile_banner.webp`}
              alt="Banner Mobile"
              className="w-full block sm:hidden"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about_gig about_tarzan py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-7">
              <div className="info">
                <h2 className="black_color">About Tarzan Transport Ltd.</h2>
                <p className="dscp my-2 black_color">
                  Tarzan Transport Ltd. is a manually operated North American flatbed freight company where every
                  shipment is managed through hands-on coordination rather than automated processes.
                  <br />
                  <br />
                  Specializing in heavy hauling, oversized cargo transport, and regional and long-haul freight
                  services, the company has over 13 years&apos; of experience providing transportation services for
                  companies across the U.S., including Alaska, as well as every province in Canada.
                </p>
                <a href="/contact" className="tarzan_btn_blue mt-4">
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <div className="about_box first bg-white h-full">
                    <p className="text-gray-500 mb-2">Industry</p>
                    <h3 className="black_color">Transportation &amp; Logistics</h3>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="about_box secondtarzan h-full">
                    <p className="text-white mb-2">Business Type</p>
                    <h3 className="text-white">Technology-Driven Logistics Company</h3>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="about_box third bg-white h-full">
                    <p className="text-gray-500 mb-2">Services</p>
                    <ul className="black_color list-disc pl-5 space-y-1">
                      <li>Flatbed Trucking</li>
                      <li>Heavy Haul Transportation</li>
                      <li>Regional &amp; Long-Haul Freight Services</li>
                      <li>Oversized Load Transport</li>
                      <li>Cross-Border Transportation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-5 key_challenges_tarzan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="info text-center">
            <h2 className="text-white">Key Challenges That We Addresses</h2>
            <p className="text-white/80">
              Businesses transporting oversized or specialized freight often encounter challenges such as:
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-3 items-center">
            <div className="lg:col-span-7">
              <Accordion items={challenges} variant="tarzan" />
            </div>
          </div>
        </div>
      </section>

      {/* Solution - What We Did */}
      <section className="solution_what_we_did py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="info text-center">
            <h2 className="black_color">Solution - What We Did</h2>
            <p className="black_color">
              To address the varied demands for transportation from its clients, Zyntech Labs entered into
              partnership with Tarzan Transport Ltd., who would benefit from its logistics services through a
              technological solution designed to suit their transportation needs. By establishing a robust logistic
              web platform that would emphasize reliability, effective management of the fleet, and customer
              experience, Zyntech Labs was able to support Tarzan Transport Ltd. in meeting the varying demands of
              its clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-3">
            {solutionCards.map((card) => (
              <div key={card.title} className={`col-span-1 ${card.span}`}>
                <div className="solution_what_we_tarzan_card">
                  <div>
                    <h3 className="black_color">{card.title}</h3>
                    <p className="black_color">{card.desc}</p>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/${card.image}`} alt={card.title} className="w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="partner_with_zyntech_tarzan py-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="info text-center">
            <h2 className="text-white">
              Partner with Zyntech Labs to Build Your Next-Gen Logistics Platform Like Tarzan Transport Ltd.
            </h2>
            <p className="dscp my-2 gray_dark">
              Partner with Zyntech Labs to Build Your Next-Gen Logistics Platform Like Tarzan Transport Ltd.
            </p>
            <a href="/contact" className="tarzan_btn mt-4 mx-auto">
              Get Started Now
            </a>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="technology_stack py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="info text-center">
            <h2 className="black_color">Technology Stack We Used for Tarzan Transport Ltd.</h2>
          </div>
          <div className="technology_stack_card_wrapper technology_stack_tarzan mt-2">
            <div className="technology_stack_card tarzan_stack_card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/html.svg`} alt="HTML 5" />
              <p className="black_color mb-0 mt-2 text-center">HTML 5</p>
            </div>
            <div className="technology_stack_card tarzan_stack_card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/javascript.svg`} alt="JavaScript" />
              <p className="black_color mb-0 mt-2 text-center">JavaScript</p>
            </div>
            <div className="technology_stack_card tarzan_stack_card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/php.svg`} alt="PHP" />
              <p className="black_color mb-0 mt-2 text-center">PHP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Business Impact */}
      <section className="result_and_buiness_sec py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-7">
              <div className="info">
                <h2 className="black_color">Results &amp; Business Impact</h2>
                <p className="black_color">
                  The transformation of Tarzan Transport Ltd. delivered measurable outcomes for both customers and
                  business operations.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="result_business_card tarzan_transport_result_first">
                  <h3>High</h3>
                  <p>Efficiency gain</p>
                </div>
                <div className="result_business_card tarzan_transport_result_second">
                  <h3>4.3</h3>
                  <p>Average rating</p>
                </div>
                <div className="result_business_card tarzan_transport_result_third">
                  <h3 className="text-white">40K+</h3>
                  <p className="text-white">Heavy Haul Shipments Delivered</p>
                </div>
                <div className="result_business_card_tarzan_image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/result_tarzan.webp`} alt="Results and business impact" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Build */}
      <section className="ready_to_build_tarzan py-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="info text-center">
            <h2 className="text-white">Ready to Build Your Logistics Software?</h2>
            <p className="dscp my-2 gray_dark">
              Partner with Zyntech Labs to develop scalable, high-performance logistics solutions tailored to your
              business.
            </p>
            <a href="/contact" className="tarzan_btn mt-4 mx-auto">
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
