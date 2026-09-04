'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll event for blur/shadow effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setPortfolioOpen(false);
  }, [pathname]);

  // Don't show public navbar in studio
  if (pathname?.startsWith('/studio')) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0a0a0f]/85 backdrop-blur-md border-b border-cyan-500/20 ${
        isScrolled ? 'py-3 shadow-lg shadow-black/50' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/zyntech_logo.svg"
              alt="ZynTech Labs Logo"
              width={185}
              height={32}
              priority
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link
              href="/#industries"
              className="hover:text-teal-400 transition-colors py-1"
            >
              Industries
            </Link>
            <Link
              href="/#services"
              className="hover:text-teal-400 transition-colors py-1"
            >
              Services
            </Link>
            <Link
              href="/#enterprise"
              className="hover:text-teal-400 transition-colors py-1"
            >
              Enterprise
            </Link>

            {/* Portfolio / Case Studies Dropdown */}
            <div className="relative group">
              <button
                type="button"
                onClick={() => setPortfolioOpen(!portfolioOpen)}
                className="flex items-center gap-1 hover:text-teal-400 transition-colors py-1 focus:outline-none"
              >
                Portfolio <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-teal-400 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute top-full -left-4 w-64 pt-3 hidden group-hover:block animate-fade-in">
                <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-2 shadow-2xl backdrop-blur-xl">
                  <Link
                    href="/case-study/gig-logistics"
                    className="flex flex-col p-2.5 rounded-xl hover:bg-teal-950/40 text-gray-200 hover:text-teal-300 transition-colors"
                  >
                    <span className="font-semibold text-xs text-white">GIG Logistics</span>
                    <span className="text-[11px] text-gray-400">Fleet automation platform</span>
                  </Link>
                  <Link
                    href="/case-study/tarzan-transport"
                    className="flex flex-col p-2.5 rounded-xl hover:bg-teal-950/40 text-gray-200 hover:text-teal-300 transition-colors"
                  >
                    <span className="font-semibold text-xs text-white">Tarzan Transport</span>
                    <span className="text-[11px] text-gray-400">IoT Telematics & telemetry</span>
                  </Link>
                  <div className="border-t border-gray-800 my-1 pt-1">
                    <Link
                      href="/case-studies"
                      className="block p-2 text-center text-xs font-semibold text-teal-400 hover:text-teal-300"
                    >
                      View All Case Studies →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/blog"
              className={`hover:text-teal-400 transition-colors py-1 ${
                pathname?.startsWith('/blog') ? 'text-teal-400 font-semibold' : ''
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3.5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-black font-semibold text-sm transition-colors"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Right Quick Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact"
              className="text-xs bg-teal-500 text-black font-bold px-3 py-1.5 rounded-xl"
            >
              Contact
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070b16]/98 border-b border-gray-800 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-fade-in">
          <Link
            href="/#industries"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-teal-400 hover:bg-gray-800/60"
          >
            Industries
          </Link>
          <Link
            href="/#services"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-teal-400 hover:bg-gray-800/60"
          >
            Services
          </Link>
          <Link
            href="/#enterprise"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-teal-400 hover:bg-gray-800/60"
          >
            Enterprise Architecture
          </Link>
          <Link
            href="/case-studies"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-teal-400 hover:bg-gray-800/60"
          >
            Case Studies
          </Link>
          <Link
            href="/blog"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-teal-400 hover:bg-gray-800/60"
          >
            Blog
          </Link>
          <div className="pt-2">
            <Link
              href="/contact"
              className="w-full block text-center bg-teal-500 text-black font-bold py-3 rounded-xl"
            >
              Contact us
            </Link>
          </div>
        </div>
      )}

      {/* Real-time Scroll Progress Bar directly under the Header */}
      <ScrollProgressBar />
    </header>
  );
}
