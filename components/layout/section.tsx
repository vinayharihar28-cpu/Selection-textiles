import React from 'react';
import { cn } from '@/lib/utils';
import { Container, ContainerProps } from './container';
import { SectionHeading } from '@/components/ui/section-heading';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'surface' | 'muted' | 'forest' | 'forest-dark' | 'sage' | 'sand';
  hasTopDivider?: boolean;
  hasBottomDivider?: boolean;
  containerSize?: ContainerProps['size'];
  eyebrow?: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  headerAlignment?: 'left' | 'center';
  tone?: 'default' | 'inverted';
  children?: React.ReactNode;
}

export function Section({
  variant = 'default',
  hasTopDivider = false,
  hasBottomDivider = false,
  containerSize = 'default',
  eyebrow,
  title,
  description,
  action,
  headerAlignment = 'left',
  tone,
  className,
  children,
  ...props
}: SectionProps) {
  const bgStyles = {
    default: 'bg-background text-foreground',
    surface: 'bg-surface text-foreground',
    muted: 'bg-surface-muted text-foreground',
    forest: 'bg-forest-deep text-ivory',
    'forest-dark': 'bg-forest-dark text-ivory',
    sage: 'bg-sage-surface text-charcoal dark:text-ivory',
    sand: 'bg-sand-surface text-charcoal dark:text-ivory',
  };

  const isForestOrDark = variant === 'forest' || variant === 'forest-dark';
  const resolvedTone = tone || (isForestOrDark ? 'inverted' : 'default');

  return (
    <section
      className={cn('relative py-16 sm:py-24 md:py-28 first-of-type:pt-28 sm:first-of-type:pt-32 transition-colors', bgStyles[variant], className)}
      {...props}
    >
      {hasTopDivider && (
        <div className={cn(
          "absolute top-0 left-0 right-0 hairline-divider",
          isForestOrDark && "opacity-20 bg-ivory"
        )} />
      )}

      <Container size={containerSize}>
        {(title || eyebrow || description || action) && (
          <SectionHeading
            eyebrow={eyebrow}
            title={title || ''}
            description={description}
            action={action}
            align={headerAlignment}
            tone={resolvedTone}
          />
        )}

        {children}
      </Container>

      {hasBottomDivider && (
        <div className={cn(
          "absolute bottom-0 left-0 right-0 hairline-divider",
          isForestOrDark && "opacity-20 bg-ivory"
        )} />
      )}
    </section>
  );
}
