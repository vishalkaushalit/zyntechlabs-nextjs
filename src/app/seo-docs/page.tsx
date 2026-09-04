import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { YoastSeoBox } from '@/components/seo/YoastSeoBox';
import { constructMetadata } from '@/lib/seo';
import Link from 'next/link';
import {
  FileText,
  Link2,
  Heading,
  Image as ImageIcon,
  Compass,
  Bot,
  Repeat,
  Code2,
  Share2,
  EyeOff,
  BarChart,
  Zap,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Sparkles,
  Layers,
  ShieldCheck,
  Cpu,
  Workflow
} from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'SEO Team Handbook • WordPress vs Next.js Migration Guide',
  description:
    'Comprehensive standard operating procedure and comparison guide for the SEO team: How every WordPress & Yoast feature functions in Next.js + Sanity.io.',
  slug: 'seo-docs',
});

const comparisonFeatures = [
  {
    icon: FileText,
    num: '01',
    name: 'SEO Title & Meta Description',
    location: 'Studio > Post/Page > SEO Settings Fieldset',
    wp: 'Post editor ke niche Yoast SEO metabox mein Title aur Meta Description enter kiya jata tha.',
    nextjs: 'Sanity Studio (/studio) mein har post ke sath dedicated Yoast SEO fieldset hai with character counter. Next.js dynamic generateMetadata() function automatic SSR/SSG <title> aur <meta name="description"> render karta hai.',
    status: '100% Identical Workflow',
  },
  {
    icon: Link2,
    num: '02',
    name: 'Clean Permalink Slugs (/blog/slug-name)',
    location: 'Studio > Slug Field',
    wp: 'Settings > Permalinks se /%postname%/ set karke slug customize hota tha.',
    nextjs: 'Title likhte hi "Generate Slug" button se clean lowercase slug banta hai. SEO team target focus keyword ke hisab se slug manually customize kar sakti hai.',
    status: '100% Identical Workflow',
  },
  {
    icon: Heading,
    num: '03',
    name: 'Heading Hierarchy (H1, H2, H3 Management)',
    location: 'Studio > Body PortableText Editor',
    wp: 'Gutenberg blocks mein heading block add karke H2/H3 tag select kiya jata tha.',
    nextjs: 'Page ka main title strictly single <h1> tag banta hai. Body editor mein text highlight karke dropdown se H2, H3, H4, Bullet List, Code Block select karein.',
    status: '100% Identical Workflow',
  },
  {
    icon: ImageIcon,
    num: '04',
    name: 'Image ALT Text & Image SEO',
    location: 'Studio > Image Upload Field',
    wp: 'Media Library mein image upload karke "Alt Text" field bhara jata tha.',
    nextjs: 'Image upload karte hi "Alternative Text" field mandatory display hota hai. Next.js automatic WebP compression aur responsive sizing provide karta hai.',
    status: '100% Identical + Faster CDN',
  },
  {
    icon: Compass,
    num: '05',
    name: 'Canonical Tags (<link rel="canonical">)',
    location: 'Studio > SEO Settings > Canonical URL Override',
    wp: 'Yoast Advanced tab mein Canonical URL enter kiya jata tha.',
    nextjs: 'By default, Next.js page ka exact self-canonical URL auto-generate karta hai. Agar duplicate content cross-domain point karna ho, toh Canonical URL field mein custom URL enter karein.',
    status: '100% Automated',
  },
  {
    icon: Repeat,
    num: '06',
    name: '301 Redirects Management',
    location: 'Studio > Global Site Settings > 301 Redirects Table',
    wp: 'Redirection plugin ya Yoast Premium Redirect Manager use hota tha.',
    nextjs: 'Sanity Studio mein "Global Site Settings > 301 Redirects" table mein Old Path (Source) aur New Path (Destination) add karein. Next.js Edge Middleware traffic instant redirect karta hai.',
    status: 'Zero Plugin Overhead',
  },
  {
    icon: EyeOff,
    num: '07',
    name: 'Index / No-Index & No-Follow Toggles',
    location: 'Studio > SEO Settings > Search Engine Visibility',
    wp: 'Yoast Advanced tab mein "Allow search engines to show this Post in search results? No" select hota tha.',
    nextjs: 'Har post mein "No-Index" aur "No-Follow" switch buttons hain. Turn on karne par Next.js auto <meta name="robots" content="noindex, nofollow" /> inject karta hai aur XML sitemap se exclude kar deta hai.',
    status: '1-Click Toggle',
  },
  {
    icon: Bot,
    num: '08',
    name: 'XML Sitemap Generation (/sitemap.xml)',
    location: 'Automatic at https://yourdomain.com/sitemap.xml',
    wp: 'Yoast XML Sitemap plugin dynamic sitemap_index.xml generate karta tha.',
    nextjs: 'Next.js App Router dynamic sitemap.ts route run karta hai jo all static routes + dynamic blog posts aur case studies real-time auto-include karta hai.',
    status: 'Zero Configuration',
  },
  {
    icon: Code2,
    num: '09',
    name: 'Schema Markup / JSON-LD Structured Data',
    location: 'Automatic + Schema Type Dropdown in Studio',
    wp: 'Yoast Schema tab se Organization / WebSite / Article schema select hota tha.',
    nextjs: 'Automatic high-grade JSON-LD schema injected: Organization, WebSite, BlogPosting, CreativeWork, BreadcrumbList, FAQPage, and Person. Search Console mein 0 warnings aate hain.',
    status: 'Auto-Validated JSON-LD',
  },
  {
    icon: Share2,
    num: '10',
    name: 'OpenGraph & Social Sharing Meta Tags',
    location: 'Studio > SEO Settings > Custom OG Image',
    wp: 'Yoast Social tab mein Facebook & Twitter image upload ki jati thi.',
    nextjs: 'Har post mein dedicated Custom Social Share Image uploader hai + Edge Dynamic OpenGraph image generator fallback available hai.',
    status: 'Automatic High-Res Cards',
  },
  {
    icon: BarChart,
    num: '11',
    name: 'Google Analytics 4, GTM & Search Console',
    location: 'Studio > Global Site Settings > Tracking & Analytics',
    wp: 'Site Kit by Google ya Insert Headers and Footers plugin use hota tha.',
    nextjs: 'Sanity Studio mein "Global Site Settings" mein GA4 ID (G-XXXXX), GTM ID (GTM-XXXXX), aur Google Search Console verification token enter karein. Non-blocking scripts automatically inject ho jayenge.',
    status: 'No Plugin Dependency',
  },
  {
    icon: Zap,
    num: '12',
    name: 'Page Speed & Core Web Vitals',
    location: 'Global Next.js 16 Edge CDN Architecture',
    wp: 'WP Rocket, Perfmatters, cache plugins aur CDN configure karna padta tha.',
    nextjs: 'Pre-rendered static HTML (SSG) + Tailwind CSS + AVIF image optimization se default 98-100 Core Web Vitals score milta hai (LCP < 1.0s, CLS = 0.00).',
    status: '10x Faster Ranking Boost',
  },
];

export default function SeoDocsPage() {
  return (
    <div className="min-h-screen bg-[#070b16] text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'SEO Team Handbook', url: '/seo-docs' }]} />

        {/* Hero Header Banner */}
        <header className="pt-6 pb-12 border-b border-gray-800">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold mb-4 shadow-lg shadow-teal-500/10">
            <BookOpen className="w-4 h-4 text-teal-400" />
            <span>SEO Team Standard Operating Procedure (SOP)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            WordPress to Next.js + Sanity CMS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
              SEO Migration Handbook
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Yeh technical guide hamari SEO aur Content team ke liye design ki gayi hai. Isme explain kiya gaya hai ki WordPress/Yoast ka har feature Next.js + Sanity architecture mein kaise 100% same tarike se kaam karta hai aur isse organic ranking mein kya faayda milta hai.
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <a
              href="/studio"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-400 text-black font-extrabold text-sm transition-all shadow-lg shadow-teal-500/20"
            >
              <span>Open Sanity Studio (/studio)</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="/seo-documentation.html"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-700 font-semibold text-sm transition-all"
            >
              <span>View Standalone HTML Handbook</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </header>

        {/* Summary Breakdown: Kya Change Hua vs Kya Same Hai */}
        <section className="py-12 border-b border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Box 1: Kya Change Hua */}
            <div className="bg-[#0c1324] border border-cyan-500/30 rounded-3xl p-8 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                <Cpu className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                1. Kya Change Hua? (Architecture & Speed)
              </h2>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Slow MySQL Queries:</strong> WordPress har page load par database query karta tha. Next.js static HTML pre-render karta hai jo instant load hota hai.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span><strong>No Plugin Security Crashes:</strong> WordPress plugins (Yoast, WP Rocket, Redirection) update hone par website crash nahi hoti.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Perfect Core Web Vitals:</strong> Page speed 98-100 hone se Google organic search mein ranking priority deta hai.</span>
                </li>
              </ul>
            </div>

            {/* Box 2: SEO Team Ke Liye Same Kaise Hai */}
            <div className="bg-[#0c1324] border border-teal-500/30 rounded-3xl p-8 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-300">
                <Workflow className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                2. SEO Team Ke Liye 100% Same Kaise Hai?
              </h2>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Same Content Workflow:</strong> SEO team <code>/studio</code> open karti hai aur har blog ke liye Meta Title, Meta Description, Image Alt, Slug, aur Focus Keywords enter karti hai.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Same Control Over Indexing:</strong> No-Index toggle, Canonical override, aur 301 redirects table directly CMS mein available hain.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Live SERP Preview:</strong> Meta Title aur Description likhte waqt live Google desktop/mobile snippet preview milta hai.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Live Interactive SERP Simulator */}
        <section className="py-12 border-b border-gray-800">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              Interactive Google SERP Snippet Simulator
            </h2>
            <p className="text-sm text-gray-400">
              SEO team neeche diye gaye box mein Title aur Description test karke character lengths aur Google preview check kar sakti hai:
            </p>
          </div>

          <YoastSeoBox
            title="Custom Enterprise Software Development Company | ZynTech Labs"
            description="ZynTech Labs builds scalable enterprise software, mobile apps, SaaS platforms, AI automation and cloud solutions for fintech, logistics and fast-growing businesses worldwide."
            slug="blog/scaling-enterprise-microservices-2026"
            focusKeyword="Enterprise Software Development"
          />
        </section>

        {/* Feature-by-Feature 12-Item Comparison Table */}
        <section className="py-12">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Complete Feature Comparison Matrix (WordPress vs Next.js)
            </h2>
            <p className="text-sm text-gray-400">
              Dekhein WordPress Yoast ke sabhi 12 features Next.js mein kahan located hain aur kaise kaam karte hain:
            </p>
          </div>

          <div className="space-y-6">
            {comparisonFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.num}
                  className="bg-[#0c1324] border border-gray-800 hover:border-cyan-500/40 rounded-3xl p-6 sm:p-8 transition-all shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-800/80 gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 font-mono font-bold">
                        {feat.num}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {feat.name}
                        </h3>
                        <span className="text-xs text-cyan-300 font-mono">
                          Location: {feat.location}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-teal-400 bg-teal-950/60 border border-teal-500/30 px-3 py-1 rounded-full self-start sm:self-auto">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {feat.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                    <div className="bg-[#070b16] border border-gray-800/80 p-4 rounded-2xl">
                      <span className="text-[11px] uppercase font-mono font-bold text-red-400 block mb-1">
                        WordPress (Yoast / Plugins)
                      </span>
                      <p className="text-gray-300 leading-relaxed">{feat.wp}</p>
                    </div>

                    <div className="bg-[#070b16] border border-teal-500/30 p-4 rounded-2xl">
                      <span className="text-[11px] uppercase font-mono font-bold text-teal-400 block mb-1">
                        Next.js + Sanity CMS (/studio)
                      </span>
                      <p className="text-gray-200 leading-relaxed">{feat.nextjs}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5-Step SOP for Publishing a New Blog */}
        <section className="py-12 border-t border-gray-800">
          <div className="bg-gradient-to-r from-[#0c1830] via-[#0f2142] to-[#0c1830] border border-cyan-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-teal-400 bg-teal-950/60 px-3 py-1 rounded-md">
                Standard Operating Procedure (SOP)
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
                SEO Team: Naya Article Publish Karne Ke 5 Steps
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-[#070b16]/80 border border-gray-800 space-y-2">
                <span className="w-7 h-7 rounded-lg bg-teal-500 text-black font-black flex items-center justify-center text-xs">
                  1
                </span>
                <strong className="text-white block font-bold">Studio Open Karein</strong>
                <p className="text-gray-400 text-xs">Browser mein <code>/studio</code> open karein aur login karein.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070b16]/80 border border-gray-800 space-y-2">
                <span className="w-7 h-7 rounded-lg bg-teal-500 text-black font-black flex items-center justify-center text-xs">
                  2
                </span>
                <strong className="text-white block font-bold">Article Likhein</strong>
                <p className="text-gray-400 text-xs">Title, Slug, Category, Author aur Rich-text body content enter karein.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070b16]/80 border border-gray-800 space-y-2">
                <span className="w-7 h-7 rounded-lg bg-teal-500 text-black font-black flex items-center justify-center text-xs">
                  3
                </span>
                <strong className="text-white block font-bold">Yoast SEO Bharein</strong>
                <p className="text-gray-400 text-xs">Meta Title, Description, Focus Keywords aur Custom Social Image add karein.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070b16]/80 border border-gray-800 space-y-2">
                <span className="w-7 h-7 rounded-lg bg-teal-500 text-black font-black flex items-center justify-center text-xs">
                  4
                </span>
                <strong className="text-white block font-bold">Image ALT Tags</strong>
                <p className="text-gray-400 text-xs">Sabhi uploaded images par descriptive Alt Text mandatory fill karein.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070b16]/80 border border-teal-500/40 space-y-2 bg-teal-950/20">
                <span className="w-7 h-7 rounded-lg bg-teal-400 text-black font-black flex items-center justify-center text-xs">
                  5
                </span>
                <strong className="text-teal-300 block font-bold">Publish & Go Live</strong>
                <p className="text-gray-300 text-xs">"Publish" dabate hi article Next.js edge CDN par live ho jata hai!</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
