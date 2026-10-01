import React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'narrow' | 'default' | 'wide' | 'full';
  children: React.ReactNode;
}

export function Container({
  size = 'default',
  className,
  children,
  ...props
}: ContainerProps) {
  const sizeStyles = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-screen-2xl',
    full: 'max-w-none',
  };

  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16',
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
