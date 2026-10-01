import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  align?: 'left' | 'center';
  tone?: 'default' | 'inverted';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = 'left',
  tone = 'default',
  className,
  ...props
}: SectionHeadingProps) {
  const isInverted = tone === 'inverted';

  return (
    <div
      className={cn(
        'mb-10 sm:mb-14',
        align === 'center'
          ? 'text-center mx-auto max-w-3xl flex flex-col items-center'
          : 'flex flex-col md:flex-row md:items-end md:justify-between gap-6',
        className
      )}
      {...props}
    >
      <div className={cn(align === 'center' ? 'text-center' : 'max-w-2xl')}>
        {eyebrow && (
          <div
            className={cn(
              'inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-widest-editorial font-sans font-medium mb-3',
              isInverted ? 'text-ivory/80' : 'text-accent',
              align === 'center' && 'justify-center'
            )}
          >
            <span
              className={cn(
                'w-1.5 h-1.5 rounded-full inline-block',
                isInverted ? 'bg-brass' : 'bg-accent'
              )}
            />
            <span>{eyebrow}</span>
          </div>
        )}
        <h2
          className={cn(
            'font-serif text-3xl sm:text-4xl md:text-5xl font-light text-balance leading-tight',
            isInverted ? 'text-ivory' : 'text-foreground'
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              'mt-4 text-sm sm:text-base font-sans font-normal leading-relaxed text-balance',
              isInverted ? 'text-ivory/80' : 'text-muted'
            )}
          >
            {description}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
