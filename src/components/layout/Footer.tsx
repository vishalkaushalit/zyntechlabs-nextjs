'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/Zyntechlabs/',
    hoverClass: 'hover:bg-[#1877f2] hover:text-white',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/zyntechlabs/',
    hoverClass: 'hover:bg-[#e1306c] hover:text-white',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/zyntechlabs',
    hoverClass: 'hover:bg-[#0077b5] hover:text-white',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.75s-.78-1.75-1.75-1.75-1.75.79-1.75 1.75.78 1.75 1.75 1.75M7.86 18.5v-8.37H5.07v8.37h2.79z"/>
      </svg>
    ),
  },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('Subscription failed');

      setSubscribed(true);
      setEmail('');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#050811] text-gray-400 border-t border-gray-850 pt-16 pb-8 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-10">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/zyntech_logo.svg"
                alt="ZynTech Labs Logo"
                width={175}
                height={30}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-400">
              Ready to transform your business digitally?
            </p>

            {subscribed ? (
              <div className="p-3 bg-teal-950/60 border border-teal-500/40 rounded-xl text-xs text-teal-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2 max-w-sm">
                <input
                  type="email"
                  required
                  disabled={submitting}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-[#0c1324] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-teal-400 text-black font-bold text-sm hover:bg-teal-300 transition-all flex items-center justify-center gap-1.5 disabled:opacity-60"
                >
                  <span>{submitting ? 'Sending...' : 'Subscribe'}</span>
                  {submitting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                </button>
                {error && <p className="text-xs text-rose-400">{error}</p>}
              </form>
            )}
          </div>

          {/* Important Links */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h3 className="mb-4 text-teal-400 font-bold">Important Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">
                  Case Study
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-4 lg:col-start-9">
            <h3 className="mb-4 text-teal-400 font-bold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:sales@zyntechlabs.io" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  sales@zyntechlabs.io
                </a>
              </li>
              <li>
                <a href="tel:+17326327363" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +1 732-632-7363
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/f69fnwjQbrTDde5L7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  170 Jordan Rd, Colonia, NJ 07067, USA
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-2.5 pt-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className={`w-9 h-9 rounded-full bg-transparent border border-gray-700 flex items-center justify-center text-white transition-all hover:scale-110 ${social.hoverClass}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-800/80 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Zyntech Labs. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
