'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, User, RefreshCw, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Message {
  id: string;
  role: 'user' | 'bot';
  text: string;
  actionUrl?: string;
  actionLabel?: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 'm-0',
    role: 'bot',
    text: "Hello! I'm ZynTech AI powered by Gemini ✨. How can I help you with enterprise software, AI automation, or cloud solutions today?",
  },
];

const QUICK_PROMPTS = [
  'What services do you offer?',
  'Show case studies',
  'Book a discovery call',
  'What is your tech stack?',
];

export function AiChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (pathname?.startsWith('/studio')) return null;

  const historyForAPI = messages.map((m) => ({ role: m.role === 'bot' ? 'model' : 'user', text: m.text }));

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isTyping) return;

    const userMsg: Message = { id: `u-${Date.now()}`, role: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: historyForAPI }),
      });
      const data = await res.json();

      const botMsg: Message = {
        id: `b-${Date.now()}`,
        role: 'bot',
        text: data.reply || data.error || "I couldn't process that. Please try again.",
        // Attach smart action links based on topic
        ...(data.reply?.toLowerCase().includes('contact') || text.toLowerCase().includes('call') || text.toLowerCase().includes('book')
          ? { actionUrl: '/contact', actionLabel: 'Book A Discovery Call' }
          : data.reply?.toLowerCase().includes('case stud') || text.toLowerCase().includes('case')
          ? { actionUrl: '/case-studies', actionLabel: 'View Case Studies' }
          : {}),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: `err-${Date.now()}`, role: 'bot', text: 'Connection error. Please refresh and try again.' },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') { e.preventDefault(); handleSend(); }
  };

  const resetChat = () => setMessages(INITIAL_MESSAGES);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end font-sans select-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-3 w-[calc(100vw-32px)] sm:w-96 max-w-sm h-[480px] sm:h-[520px] max-h-[75vh] bg-[#0c1324] border border-cyan-500/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0d1b38] to-[#0c1324] p-3.5 sm:p-4 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-teal-400 p-[1.5px] shadow-lg shadow-teal-500/20">
                  <div className="w-full h-full bg-[#0b1120] rounded-[10px] flex items-center justify-center text-teal-300">
                    <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs sm:text-sm font-bold text-white">ZynTech AI</h3>
                    <Sparkles className="w-3 h-3 text-teal-400" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-teal-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Powered by Gemini · Online
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={resetChat} title="Reset" className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors">
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button onClick={() => setIsOpen(false)} title="Close" className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3 text-xs">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex items-start gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.role === 'user' ? 'bg-teal-500 text-black' : 'bg-cyan-950 border border-cyan-500/40 text-cyan-300'
                  }`}>
                    {msg.role === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>
                  <div className={`max-w-[82%] p-3 rounded-2xl leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-teal-500 text-black font-medium rounded-tr-none'
                      : 'bg-[#111c33] text-gray-200 border border-gray-800 rounded-tl-none'
                  }`}>
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                    {msg.actionUrl && (
                      <div className="mt-2 pt-2 border-t border-gray-700/60">
                        <Link href={msg.actionUrl} onClick={() => setIsOpen(false)} className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-400 hover:underline">
                          {msg.actionLabel} <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-[#111c33] p-2.5 rounded-2xl border border-gray-800 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick prompts */}
            <div className="px-3 py-2 border-t border-gray-800 bg-[#090f1d] flex gap-1.5 overflow-x-auto no-scrollbar">
              {QUICK_PROMPTS.map((p, i) => (
                <button key={i} onClick={() => handleSend(p)} disabled={isTyping}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-[#111c33] hover:bg-teal-500 hover:text-black text-gray-300 text-[10px] font-medium border border-gray-800 transition-colors flex-shrink-0 disabled:opacity-40">
                  {p}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-2.5 sm:p-3 bg-[#0c1324] border-t border-gray-800">
              <div className="flex items-center gap-2 bg-[#070b16] border border-gray-800 focus-within:border-cyan-500/60 rounded-xl px-3 py-2 transition-colors">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about services, pricing, tech stack…"
                  className="w-full bg-transparent text-xs text-white placeholder-gray-500 focus:outline-none"
                />
                <button type="button" onClick={() => handleSend()} disabled={!input.trim() || isTyping}
                  className="text-teal-400 hover:text-teal-300 disabled:text-gray-600 transition-colors p-1">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Trigger */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-extrabold text-xs shadow-xl shadow-teal-500/30 group"
        aria-label="Toggle AI Assistant"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-200 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-200" />
        </span>
        <Bot className="w-5 h-5 flex-shrink-0" />
        <span className="hidden sm:inline-block text-[11px]">AI Copilot</span>
      </motion.button>
    </div>
  );
}
