import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, ArrowRight, User } from 'lucide-react';
import { BlogPost } from '@/types';

export function BlogCard({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className="group bg-[#111827]/80 hover:bg-[#1f293d]/80 border border-gray-800 hover:border-cyan-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-cyan-500/10">
      <Link href={`/blog/${post.slug}`} className="relative h-52 w-full overflow-hidden block">
        <Image
          src={post.coverImage || '/images/unsplash/blog-fallback-cover.jpg'}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {post.categories && post.categories.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
            {post.categories.map((cat) => (
              <span
                key={cat.slug}
                className="bg-teal-500/90 text-black text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm"
              >
                {cat.title}
              </span>
            ))}
          </div>
        )}
      </Link>

      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-teal-400" />
              {formattedDate}
            </span>
            {post.readTime && (
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                {post.readTime}
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors line-clamp-2 mb-3">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed mb-6">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between mt-auto">
          {post.author ? (
            <div className="flex items-center gap-2.5">
              {post.author.avatar ? (
                <div className="relative w-7 h-7 rounded-full overflow-hidden border border-teal-500/40">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-7 h-7 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center text-xs">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
              <span className="text-xs text-gray-300 font-medium truncate max-w-[120px]">
                {post.author.name}
              </span>
            </div>
          ) : (
            <div />
          )}

          <Link
            href={`/blog/${post.slug}`}
            className="text-xs font-semibold text-teal-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
          >
            Read Article <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
