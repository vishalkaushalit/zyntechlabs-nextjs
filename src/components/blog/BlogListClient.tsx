'use client';

import React, { useMemo, useState } from 'react';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogPost } from '@/types';

export function BlogListClient({ posts }: { posts: BlogPost[] }) {
  const categories = useMemo(
    () =>
      Array.from(
        new Set(posts.flatMap((p) => p.categories?.map((c) => c.title) || []))
      ),
    [posts]
  );

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? posts.filter((p) => p.categories?.some((c) => c.title === activeCategory))
    : posts;

  return (
    <>
      {categories.length > 0 && (
        <div className="flex flex-wrap items-center gap-2.5 pb-10 border-b border-gray-800/80 mb-12">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-colors ${
              activeCategory === null
                ? 'bg-teal-500 text-black shadow-md shadow-teal-500/20'
                : 'bg-gray-900/80 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800 font-semibold'
            }`}
          >
            All Articles ({posts.length})
          </button>
          {categories.map((cat, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs transition-colors ${
                activeCategory === cat
                  ? 'bg-teal-500 text-black font-extrabold shadow-md shadow-teal-500/20'
                  : 'bg-gray-900/80 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800 font-semibold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <BlogCard key={post._id || post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
