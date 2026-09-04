'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function WhatsAppButton({
  phoneNumber = '17326327363',
  defaultMessage = 'Hi ZynTech Labs! I would like to discuss an enterprise software / AI project.',
}: {
  phoneNumber?: string;
  defaultMessage?: string;
}) {
  const pathname = usePathname();

  if (pathname?.startsWith('/studio')) {
    return null;
  }

  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-xl shadow-black/30"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Pulsing glow rings */}
      <span className="absolute inset-0 rounded-full bg-emerald-400/60 animate-ping" />
      <span className="absolute -inset-1.5 rounded-full bg-emerald-400/30 animate-pulse" />

      <Image
        src="/whatsapp_icon.png"
        alt="WhatsApp"
        width={52}
        height={52}
        className="relative w-[52px] h-[52px] object-contain"
      />
    </motion.a>
  );
}
