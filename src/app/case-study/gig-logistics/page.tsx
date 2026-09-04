import React from 'react';
import type { Metadata } from 'next';
import { BreadcrumbSchema, CaseStudySchema } from '@/components/seo/SchemaMarkup';
import { Accordion } from '@/components/case-study/Accordion';
import { constructMetadata } from '@/lib/seo';

const IMG = '/images';

export const metadata: Metadata = constructMetadata({
  title: 'GIG Logistics Case Study | Enterprise Fleet Management | ZynTech Labs',
  description:
    'Learn how ZynTech Labs built the GIGGo App — a logistics and cross-border shopping platform — for GIG Logistics.',
  slug: 'case-study/gig-logistics',
});

const leftChallenges = [
  {
    question: 'Complex User Experience',
    answer:
      'Existing application facing non-intuitive interface issues that created friction during shipment booking, tracking, and order management, resulting in reduced customer engagement.',
  },
  {
    question: 'Performance Bottlenecks',
    answer:
      'Slow load times and inconsistent responsiveness affected customer trust and operational efficiency, especially during periods of high demand.',
  },
  {
    question: 'Scalability Constraints',
    answer:
      'Absence of a scalable system architecture to support expanding logistics operations, new logistics services, and international expansion.',
  },
  {
    question: 'B2B Workflow Limitations',
    answer: 'Lack of bulk shipment processing and multi-shipment booking capabilities for B2B users.',
  },
];

const rightChallenges = [
  {
    question: 'Cross-Border Coverage Gaps',
    answer: 'Limited international logistics support across key markets (USA, China, Ghana, Canada).',
  },
  {
    question: 'Domestic Service Fragmentation',
    answer: 'Fragmented domestic service integration, including last-mile delivery and express drop-off.',
  },
  {
    question: 'Limited Shipment Visibility',
    answer: 'No real-time shipment visibility, reducing operational transparency and customer confidence.',
  },
];

const gigServices = [
  { icon: 'express_drop_off.svg', label: 'Express Drop-Off', className: '' },
  { icon: 'secure_paybills.svg', label: 'Secure Paybills', className: 'secure_paybill' },
  { icon: 'multi_booking_support.svg', label: 'Multi-Booking Support', className: 'multi_booking_support' },
  { icon: 'real_time_tracking.svg', label: 'Real Time Tracking', className: 'real_time_tracking' },
  { icon: 'bulk_shippment.svg', label: 'Bulk Shippment', className: 'bulk_shippment' },
  { icon: 'instant_quotation.svg', label: 'Instant Quotation', className: 'instant_quotation' },
];

const solutionFeatures = [
  {
    icon: 'user_centered.svg',
    title: 'User-Centered Product Redesign',
    desc: 'We completely reimagined the customer journey, creating streamlined workflows for customers, drivers, and business individuals.',
  },
  {
    icon: 'high_performance.svg',
    title: 'High-Performance Mobile User Experience',
    desc: 'Our engineering team optimized application performance to ensure quick, reliable, and high-availability operations across Android and iOS devices.',
  },
  {
    icon: 'scalable_logistics.svg',
    title: 'Scalable Logistics Infrastructure',
    desc: 'Our team developed a modular backend architecture designed to support multi-region logistics operations, and service expansion.',
  },
  {
    icon: 'advanced_business.svg',
    title: 'Advanced Business Shipping Capabilities',
    desc: 'To support enterprise logistics requirements, we enabled bulk shipment processing, and multi-booking management for business customers.',
  },
  {
    icon: 'international_shipping.svg',
    title: 'International Shipping Expansion',
    desc: 'We integrated international shipping modules that enabled seamless logistics operations across the United States, China, Canada, Ghana.',
  },
  {
    icon: 'unified_logistics-.svg',
    title: 'Unified Logistics Platform',
    desc: 'We consolidated multiple logistics services into a single application, including last-mile delivery, and express drop-off services, within a single platform.',
  },
  {
    icon: 'real_time.svg',
    title: 'Real-Time Shipment Tracking',
    desc: 'Deployed real-time tracking capabilities that provide live shipment visibility from pickup to final delivery.',
  },
  {
    icon: 'smart_automation.svg',
    title: 'Smart Automation',
    desc: 'Added intelligent features such as instant quotation, PayBills integration, and streamlined order execution.',
  },
];

export default function GigLogisticsCaseStudy() {
  const pageUrl = 'https://zyntechlabs.io/case-study/gig-logistics';

  return (
    <article className="main_sec">
      <CaseStudySchema
        title="Transforming Logistics at Scale — GIGGo App"
        description="How ZynTech Labs helped GIG Logistics power growth through the GIGGo App."
        url={pageUrl}
        image={`${IMG}/gig_cargo.webp`}
        client="GIG Logistics"
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://zyntechlabs.io' },
          { name: 'GIG Logistics', url: pageUrl },
        ]}
      />

      {/* Banner */}
      <section className="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="info text-center">
            <h1 className="mb-3 text-3xl md:text-4xl">
              Transforming Logistics at Scale -<br />
              <span className="block mt-2">
                How We Helped GIG Logistics Power
                <br />
                Growth Through the <span className="gig_color">GIGGo App</span>
              </span>
            </h1>
          </div>
          <div className="banner_grid mx-auto mt-4">
            <div className="grid_item item1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/gig_cargo.webp`} alt="Gig Cargo" />
            </div>
            <div className="grid_item item2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/cargo_arrive.webp`} alt="Gig Cargo" />
            </div>
            <div className="grid_item item3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/pacel_arrive.webp`} alt="Gig Cargo" />
            </div>
            <div className="grid_item item4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/cargo_plane.webp`} alt="Gig Cargo" />
            </div>
            <div className="grid_item item5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/happy_customer.webp`} alt="Gig Cargo" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about_gig py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-7">
              <div className="info">
                <h2 className="black_color">About GIGGo App</h2>
                <p className="dscp my-2 black_color">
                  The GIGGo App is the all-in-one platform created by GIG Logistics that allows users to simplify
                  logistics and cross-border shopping for individuals and businesses.
                  <br />
                  <br />
                  Using this app, one can easily schedule shipments, request doorstep deliveries, track their
                  shipments in real-time, and manage interstate and international logistics seamlessly.
                  <br />
                  <br />
                  Besides providing logistics solutions, GIGGo App also allows users to shop from global stores in
                  the UK, USA, Canada, and China, with delivery handled end-to-end by GIG Logistics.
                </p>
                <a href="/contact" className="spotlight_btn mt-4">
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <div className="about_box first bg-white h-full">
                    <p className="text-gray-500 mb-2">Industry</p>
                    <h3 className="black_color">Logistics</h3>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="about_box second h-full">
                    <p className="text-white mb-2">Business Type</p>
                    <h3 className="text-white">Technology-Driven Logistics Company</h3>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="about_box third bg-white h-full">
                    <p className="text-gray-500 mb-2">Services</p>
                    <ul className="black_color list-disc pl-5 space-y-1">
                      <li>International Shipping</li>
                      <li>Cross-Border Logistics</li>
                      <li>On-Demand Pickup &amp; Delivery, etc.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="project_overview">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full" src={`${IMG}/cargo_sec.webp`} alt="Gig Cargo" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="info py-5">
            <h2 className="black_color">Project Overview</h2>
            <p className="dscp my-2 black_color">
              The GIGGo App was developed to simplify logistics and cross-border commerce for individuals and
              businesses across Nigeria. Many people found it difficult to organize their shipments, track
              deliveries, and buy international products due to many logistical complications.
              <br />
              To address these challenges, Zyntech labs was brought in to design and create a one-stop digital
              platform solution - GIGGo App that makes shipping, deliveries, and shopping much easier. The app
              allows users to plan shipments, get door-step pickup services, track packages, and manage local and
              international logistics seamlessly. Through the connection with stores in the United Kingdom, the
              USA, Canada, and China, GIGGo App is providing end-to-end logistics service.
            </p>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-5 problem-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="info text-center">
            <h2 className="text-white">Key Challenges That We Addresses</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-3 items-center">
            <div className="lg:col-span-7">
              <Accordion items={leftChallenges} variant="custom" />
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/gig_cargo_guy.webp`} alt="GIG Logistics Delivery" className="w-full" />
                </div>
                <div className="col-span-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/gig_cargo_box.webp`} alt="GIG Logistics Delivery" className="w-full h-full object-cover" />
                </div>
                <div className="col-span-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/gig_truck_cargo.webp`} alt="GIG Logistics Delivery" className="w-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4 items-center">
            <div className="lg:col-span-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/gig_user.webp`} alt="GIG Logistics App" className="w-full" />
            </div>
            <div className="lg:col-span-7">
              <Accordion items={rightChallenges} variant="custom" />
            </div>
          </div>
        </div>
      </section>

      {/* GIG Services */}
      <section className="gig_services_sec py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gig_services_wrapper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/gig_services_main.webp`} className="gig_services_img" alt="Services" />

            <div className="gig_services_card_main_wrapper">
              {gigServices.map((s) => (
                <div key={s.label} className={`gig_services_card ${s.className}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/${s.icon}`} alt={s.label} />
                  <p className="black_color mb-0">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="partner_with_zyntech py-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="info text-center">
            <h2 className="text-white">
              Partner with Zyntech labs to Build
              <br />
              Your Next-Gen Logistics Platform Like GIGGo App
            </h2>
            <p className="dscp my-2 gray_dark">
              Empowering seamless logistics and cross-border experiences through innovative digital platforms.
            </p>
            <a href="/contact" className="spotlight_btn mt-4 mx-auto">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Solution - What We Did */}
      <section className="solution_we_did py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="info">
            <h2 className="black_color">Solution - What We Did</h2>
            <p className="dscp my-2 black_color">
              We redesigned and rebuilt the key features of the GIGGo platform to build a high-performing, scalable
              logistics ecosystem that can cater to today&apos;s operations as well as future growth requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
            {solutionFeatures.map((f) => (
              <div key={f.title} className="feature-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/${f.icon}`} alt="Icon" />
                <h3 className="my-2 black_color">{f.title}</h3>
                <p className="black_color">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="technology_stack py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="info text-center">
            <h2 className="black_color">Technology Stack We Used for GIGGo App</h2>
          </div>
          <div className="technology_stack_card_wrapper mt-2">
            <div className="technology_stack_card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/swift.svg`} alt="Swift (iOS)" />
              <p className="black_color mb-0 mt-2 text-center">Swift (iOS)</p>
            </div>
            <div className="technology_stack_card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/kotlin.svg`} alt="Kotlin (Android)" />
              <p className="black_color mb-0 mt-2 text-center">Kotlin (Android)</p>
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
                  The transformation of GIGGo delivered measurable outcomes for both customers and business
                  operations.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="result_business_card">
                  <h3 className="black_color">100,000+</h3>
                  <p className="text-gray-500">App downloads</p>
                </div>
                <div className="result_business_card red">
                  <h3 className="text-white">4.3</h3>
                  <p className="text-white">Average app rating</p>
                </div>
                <div className="result_business_card red">
                  <h3 className="text-white">50%</h3>
                  <p className="text-white">App downloads</p>
                </div>
                <div className="result_business_card black">
                  <h3 className="text-white">High</h3>
                  <p className="text-white">Efficiency gain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
