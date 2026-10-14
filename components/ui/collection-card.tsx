import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './badge';

export interface CollectionCardProps {
  slug: string;
  title: string;
  subtitle: string;
  season?: string;
  itemCount?: number;
  imageUrl?: string;
  group?: string;
  className?: string;
  orientation?: 'vertical' | 'horizontal' | 'featured';
  aspectRatioClass?: string;
}

export function CollectionCard({
  slug,
  title,
  subtitle,
  season,
  itemCount,
  imageUrl,
  group,
  className,
  orientation = 'vertical',
  aspectRatioClass,
}: CollectionCardProps) {
  const is3DReady = slug === 'suits-blazers' || slug === 'bespoke-suits';
  const destination =
    slug === 'corporate-uniforms'
      ? '/corporate'
      : slug === 'fabrics'
      ? '/fabrics'
      : `/collections/${slug}`;

  const isHorizontal = orientation === 'horizontal';

  return (
    <Link
      href={destination}
      className={cn(
        'group flex overflow-hidden rounded-3xl border border-border bg-surface shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:border-forest/40 dark:hover:border-sage/40',
        isHorizontal ? 'flex-col md:flex-row md:items-stretch' : 'flex-col',
        className
      )}
    >
      {/* Image Frame */}
      <div
        className={cn(
          'relative overflow-hidden bg-surface-muted shrink-0',
          isHorizontal
            ? 'w-full md:w-1/2 min-h-[260px] sm:min-h-[320px]'
            : aspectRatioClass || 'w-full aspect-[4/5]'
        )}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top opacity-100 transition-transform duration-700 ease-smooth group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-surface-muted text-muted text-xs">
            Selection Textiles
          </div>
        )}

        {/* Floating Top Badges */}
        {(season || itemCount !== undefined) && (
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none z-10">
            {season && (
              <span className="px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-md border border-border/70 text-foreground font-sans text-[11px] font-medium shadow-sm">
                {season}
              </span>
            )}
            {itemCount !== undefined && (
              <span className="px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-md border border-border/70 text-foreground font-sans text-[11px] font-medium shadow-sm ml-auto">
                {itemCount} Silhouettes
              </span>
            )}
          </div>
        )}

        {/* 3D Studio Ready Badge */}
        {is3DReady && (
          <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-forest text-ivory font-sans text-[10px] font-medium tracking-wide shadow-sm">
              <span>3D Studio Ready</span>
            </span>
          </div>
        )}
      </div>

      {/* Editorial Content */}
      <div
        className={cn(
          'flex flex-col justify-between flex-1 bg-surface',
          isHorizontal ? 'p-6 sm:p-8 md:p-10' : 'p-5 sm:p-6'
        )}
      >
        <div>
          {group && (
            <span className="block text-[10px] uppercase tracking-widest text-forest dark:text-sage font-medium font-sans mb-1.5">
              {group}
            </span>
          )}

          <h3
            className={cn(
              'font-serif text-foreground font-normal group-hover:text-forest dark:group-hover:text-sage transition-colors duration-200',
              isHorizontal ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-2xl'
            )}
          >
            {title}
          </h3>

          <p
            className={cn(
              'mt-2 text-xs sm:text-sm text-muted font-sans leading-relaxed',
              isHorizontal ? 'line-clamp-3 sm:line-clamp-4 mt-3' : 'line-clamp-2'
            )}
          >
            {subtitle}
          </p>
        </div>

        <div className="mt-5 pt-3.5 border-t border-border/70 flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-muted font-sans font-medium group-hover:text-foreground transition-colors">
            Explore Collection
          </span>
          <span className="w-8 h-8 rounded-full bg-surface-muted border border-border flex items-center justify-center text-forest dark:text-sage group-hover:bg-forest group-hover:text-ivory dark:group-hover:bg-sage dark:group-hover:text-forest-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
