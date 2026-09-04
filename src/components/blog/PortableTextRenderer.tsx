import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { urlForImage } from '@/sanity/image';

const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-bold text-white mt-10 mb-4 tracking-tight border-b border-gray-800 pb-2">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold text-teal-400 mt-8 mb-4 tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold text-white mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-medium text-gray-200 mt-4 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-teal-400 pl-5 my-6 italic text-gray-300 bg-teal-950/20 py-3 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300 ml-4">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-300 ml-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
    em: ({ children }) => <em className="italic text-teal-200">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-800 text-teal-300 px-2 py-0.5 rounded font-mono text-sm border border-gray-700">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <Link
          href={value?.href || '#'}
          target={target}
          rel={target ? 'noopener noreferrer' : undefined}
          className="text-teal-400 hover:text-teal-300 underline decoration-teal-500/40 hover:decoration-teal-300 transition-colors"
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      const imageUrl = urlForImage(value)?.url();
      return (
        <figure className="my-8">
          <div className="relative w-full h-80 md:h-[450px] rounded-xl overflow-hidden border border-gray-800 shadow-xl">
            <Image
              src={imageUrl || ''}
              alt={value.alt || 'Blog illustration'}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-xs text-gray-400 mt-2 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export function PortableTextRenderer({ value }: { value: any }) {
  if (!value) return null;
  return (
    <div className="prose prose-invert max-w-none">
      <PortableText value={value} components={portableTextComponents} />
    </div>
  );
}
