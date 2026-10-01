import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-sans font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-accent text-accent-foreground hover:bg-accent/90 active:scale-[0.98] shadow-sm',
        secondary:
          'bg-surface-muted text-foreground border border-border hover:bg-surface-muted/80 active:scale-[0.98]',
        outline:
          'border border-border bg-surface text-foreground hover:bg-surface-muted active:scale-[0.98]',
        ghost:
          'text-foreground hover:bg-surface-muted hover:text-foreground',
        editorial:
          'relative text-foreground hover:text-accent tracking-widest uppercase text-xs p-0 h-auto bg-transparent after:content-[""] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-accent hover:after:w-full after:transition-all after:duration-300',
      },
      size: {
        default: 'h-11 px-5 py-2.5 rounded-lg',
        sm: 'h-9 px-3.5 text-xs rounded-md',
        md: 'h-11 px-5 text-sm rounded-lg',
        lg: 'h-12 px-7 text-xs uppercase tracking-widest-editorial rounded-lg',
        icon: 'h-10 w-10 p-0 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
