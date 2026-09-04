'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const industries = [
  'Fintech & Banking',
  'Logistics & Supply Chain',
  'Healthcare & MedTech',
  'Retail & E-Commerce',
  'Enterprise SaaS',
  'Real Estate & PropTech',
  'EdTech',
  'Other Domain',
];

const budgets = ['$10k – $25k', '$25k – $50k', '$50k – $100k', '$100k+'];

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    industry: industries[0],
    budget: budgets[1],
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBudget = (b: string) => setForm((prev) => ({ ...prev, budget: b }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || 'Submission failed.');
      }
      setStatus('success');
      setForm({ name: '', email: '', company: '', industry: industries[0], budget: budgets[1], message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  return (
    <div className="bg-[#0b1120] border border-gray-800/90 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
      <h2 className="text-2xl font-bold text-white mb-2">Book A Discovery Call</h2>
      <p className="text-gray-400 text-sm mb-8">
        Fill in the details below and our solution architects will prepare custom project estimates.
      </p>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center gap-4"
          >
            <div className="w-20 h-20 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-teal-400" />
            </div>
            <h3 className="text-xl font-black text-white">Request Sent Successfully!</h3>
            <p className="text-gray-400 text-sm max-w-xs">
              We emailed your enquiry to our team and sent a confirmation to your inbox. Expect a reply within 24 hours.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-4 px-6 py-2.5 rounded-xl border border-teal-500/40 text-teal-400 text-sm font-semibold hover:bg-teal-500/10 transition-colors"
            >
              Submit Another Request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono text-gray-300 uppercase mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. John Doe"
                  className="w-full bg-[#070b16] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/40 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-300 uppercase mb-2">Work Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                  className="w-full bg-[#070b16] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/40 transition-colors"
                />
              </div>
            </div>

            {/* Company + Industry */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono text-gray-300 uppercase mb-2">Company / Organization</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="e.g. Acme Corp"
                  className="w-full bg-[#070b16] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/40 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-300 uppercase mb-2">Project Industry</label>
                <select
                  name="industry"
                  value={form.industry}
                  onChange={handleChange}
                  className="w-full bg-[#070b16] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/40 transition-colors"
                >
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-xs font-mono text-gray-300 uppercase mb-2">Estimated Budget (USD)</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {budgets.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => handleBudget(b)}
                    className={`p-3 rounded-xl text-xs font-mono border transition-colors ${
                      form.budget === b
                        ? 'border-teal-400 bg-teal-950/30 text-teal-300'
                        : 'border-gray-800 bg-[#070b16] text-gray-400 hover:border-gray-600'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-mono text-gray-300 uppercase mb-2">
                Project Requirements & Scope *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
                placeholder="Tell us about your project goals, current challenges, and required technologies..."
                className="w-full bg-[#070b16] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/40 transition-colors resize-none"
              />
            </div>

            {/* Error message */}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-red-400 text-xs"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMsg}</span>
              </motion.div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-extrabold text-base hover:from-teal-300 hover:to-cyan-400 transition-all shadow-xl shadow-teal-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending…</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Discovery Request</span>
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
