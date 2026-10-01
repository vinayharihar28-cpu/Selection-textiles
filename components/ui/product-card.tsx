import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './badge';

export interface ProductCardProps {
  slug: string;
  name: string;
  category: string;
  division?: string;
  priceDisplay?: string;
  imageUrl: string;
  fabricSummary?: string;
  craftsmanshipTag?: string;
  className?: string;
}

export function ProductCard({
  slug,
  name,
  category,
  division,
  priceDisplay = 'Price on Request',
  imageUrl,
  fabricSummary,
  craftsmanshipTag = 'Full Canvas',
  className,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className={cn(
        'group flex flex-col rounded-2xl border border-border bg-surface overflow-hidden shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:border-accent/40',
        className
      )}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-muted">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top transition-transform duration-700 ease-smooth group-hover:scale-105"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          <Badge variant="subtle" size="sm">
            {category}
          </Badge>
          {craftsmanshipTag && (
            <Badge variant="accent" size="sm">
              {craftsmanshipTag}
            </Badge>
          )}
        </div>
      </div>

      {/* Details Container */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          {division && (
            <span className="text-[10px] tracking-widest uppercase font-sans text-muted block mb-1">
              {division.replace('_', ' ')}
            </span>
          )}
          <h4 className="font-serif text-lg text-foreground font-normal group-hover:text-accent transition-colors duration-200 line-clamp-1">
            {name}
          </h4>
          {fabricSummary && (
            <p className="text-xs text-muted font-sans mt-1 line-clamp-1">
              {fabricSummary}
            </p>
          )}
        </div>

        <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between">
          <span className="text-[11px] font-sans uppercase tracking-wider text-muted font-medium">
            {priceDisplay}
          </span>
          <span className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
