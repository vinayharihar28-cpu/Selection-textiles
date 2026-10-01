import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  aspectRatio?: 'portrait' | 'square' | 'wide' | 'tall';
  title?: string;
  subtitle?: string;
  badge?: string;
  overlay?: boolean;
}

export function ImageCard({
  src,
  alt,
  aspectRatio = 'portrait',
  title,
  subtitle,
  badge,
  overlay = true,
  className,
  children,
  ...props
}: ImageCardProps) {
  const aspectStyles = {
    portrait: 'aspect-[3/4]',
    square: 'aspect-square',
    wide: 'aspect-[16/10]',
    tall: 'aspect-[2/3]',
  };

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border bg-surface-muted shadow-soft transition-all duration-300 hover:shadow-soft-lg',
        aspectStyles[aspectRatio],
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-smooth group-hover:scale-105"
        />
      </div>

      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent transition-opacity duration-300" />
      )}

      {badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[10px] tracking-widest uppercase font-sans font-medium px-2.5 py-1 rounded-md bg-surface/90 text-foreground border border-border/80 backdrop-blur-sm shadow-soft">
            {badge}
          </span>
        </div>
      )}

      {(title || subtitle || children) && (
        <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col gap-1">
          {title && (
            <h4 className="font-serif text-xl sm:text-2xl text-foreground font-normal">
              {title}
            </h4>
          )}
          {subtitle && (
            <p className="text-xs text-muted font-sans line-clamp-2">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      )}
    </div>
  );
}
