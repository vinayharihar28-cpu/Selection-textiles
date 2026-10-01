import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'outline' | 'subtle';
  size?: 'sm' | 'md';
}

export function Badge({
  className,
  variant = 'default',
  size = 'md',
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: 'bg-surface-muted text-foreground border border-border/80',
    accent: 'bg-accent/15 text-accent border border-accent/30',
    outline: 'border border-border text-muted bg-transparent',
    subtle: 'bg-surface text-foreground shadow-soft border border-border/60',
  };

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 tracking-wider uppercase font-medium rounded',
    md: 'text-xs px-2.5 py-1 tracking-wider uppercase font-medium rounded-md',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 select-none font-sans',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
