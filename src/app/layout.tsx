import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Analytics } from '@/components/analytics/Analytics';
import { AppLoader } from '@/components/ui/AppLoader';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { getSiteSettings } from '@/sanity/client';
import { constructMetadata } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#070b16',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return constructMetadata({
    description: settings.defaultDescription,
    settings,
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="alternate" type="application/rss+xml" title="ZynTech Labs RSS Feed" href="/feed.xml" />
      </head>
      <body className="bg-[#070b16] text-gray-100 font-sans antialiased selection:bg-teal-500 selection:text-black">
        {/* App Loading Animation */}
        <AppLoader />

        {/* Tracking Scripts */}
        <Analytics
          ga4Id={settings.ga4Id}
          gtmId={settings.gtmId}
          googleVerification={settings.googleVerification}
        />

        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>

        {/* Floating WhatsApp Support Button (Bottom-Left) */}
        <WhatsAppButton phoneNumber="17326327363" />

        {/* Floating Scroll-To-Top Progress Pill (Bottom-Center) */}
        <ScrollToTop />
      </body>
    </html>
  );
}
