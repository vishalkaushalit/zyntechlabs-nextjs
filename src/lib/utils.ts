import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const WORDS_PER_MINUTE = 200;

interface PortableTextSpan {
  text?: string;
}

interface PortableTextBlock {
  _type?: string;
  children?: PortableTextSpan[];
}

// Derives "X min read" from the actual Portable Text word count instead of a manually-typed, easily stale value.
export function calculateReadTime(content: unknown): string {
  if (!Array.isArray(content) || content.length === 0) {
    return '1 min read';
  }

  const wordCount = (content as PortableTextBlock[]).reduce((count, block) => {
    if (block?._type !== 'block' || !Array.isArray(block.children)) {
      return count;
    }
    const text = block.children.map((child) => child?.text || '').join(' ').trim();
    return count + (text ? text.split(/\s+/).length : 0);
  }, 0);

  const minutes = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}
