import React from 'react';
import { cn } from '@/lib/utils';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'outline' | 'surface';
  size?: 'sm' | 'md' | 'lg';
  ariaLabel: string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant = 'ghost', size = 'md', ariaLabel, children, ...props }, ref) => {
    const variantStyles = {
      ghost: 'text-muted hover:text-foreground hover:bg-surface-muted',
      outline: 'border border-border bg-surface text-foreground hover:bg-surface-muted',
      surface: 'bg-surface-muted text-foreground hover:bg-surface-muted/80',
    };

    const sizeStyles = {
      sm: 'h-8 w-8 rounded-md p-1.5',
      md: 'h-10 w-10 rounded-lg p-2',
      lg: 'h-12 w-12 rounded-xl p-3',
    };

    return (
      <button
        ref={ref}
        type="button"
        aria-label={ariaLabel}
        className={cn(
          'inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-40 cursor-pointer',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
