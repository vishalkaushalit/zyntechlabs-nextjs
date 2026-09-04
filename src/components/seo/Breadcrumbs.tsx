import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbSchema } from './SchemaMarkup';
import { SITE_URL } from '@/lib/seo';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: 'Home', url: '/' }, ...items];

  return (
    <div className="py-4">
      <BreadcrumbSchema
        items={allItems.map((item) => ({
          name: item.name,
          url: item.url.startsWith('http')
            ? item.url
            : `${SITE_URL}${item.url}`,
        }))}
      />
      <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <React.Fragment key={item.url + index}>
              {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-600 flex-shrink-0" />}
              {isLast ? (
                <span className="text-teal-400 font-medium truncate max-w-[200px] md:max-w-xs" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-white transition-colors flex items-center gap-1 flex-shrink-0"
                >
                  {index === 0 && <Home className="w-3.5 h-3.5" />}
                  <span>{item.name}</span>
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
}
