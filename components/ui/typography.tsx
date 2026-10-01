import React from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'hero' | 'display' | 'section' | 'title' | 'subtitle' | 'card';
  serif?: boolean;
}

export function Heading({
  as: Component = 'h2',
  variant = 'section',
  serif = true,
  className,
  children,
  ...props
}: HeadingProps) {
  const variantStyles = {
    hero: 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight-editorial font-light leading-[1.08]',
    display: 'text-3xl sm:text-5xl md:text-6xl tracking-tight-editorial font-light leading-[1.12]',
    section: 'text-2xl sm:text-4xl md:text-5xl font-light leading-tight',
    title: 'text-xl sm:text-2xl md:text-3xl font-normal leading-snug',
    subtitle: 'text-lg sm:text-xl md:text-2xl font-normal tracking-wide leading-relaxed',
    card: 'text-base sm:text-lg md:text-xl font-medium tracking-wide',
  };

  return (
    <Component
      className={cn(
        serif ? 'font-serif' : 'font-sans',
        'text-foreground text-balance',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'lead' | 'body' | 'small' | 'muted' | 'caption';
  className?: string;
  children: React.ReactNode;
}

export function Text({
  variant = 'body',
  className,
  children,
  ...props
}: TextProps) {
  const variantStyles = {
    lead: 'text-lg sm:text-xl text-foreground/90 font-light leading-relaxed',
    body: 'text-sm sm:text-base text-muted font-normal leading-relaxed',
    small: 'text-sm text-muted font-normal leading-normal',
    muted: 'text-xs sm:text-sm text-muted font-normal',
    caption: 'text-xs text-muted tracking-wider uppercase font-medium',
  };

  return (
    <p
      className={cn('font-sans', variantStyles[variant], className)}
      {...props}
    >
      {children}
    </p>
  );
}

interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  accent?: boolean;
}

export function Eyebrow({
  children,
  accent = true,
  className,
  ...props
}: EyebrowProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-widest-editorial font-sans font-medium',
        accent ? 'text-accent' : 'text-muted',
        className
      )}
      {...props}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
      {children}
    </span>
  );
}
