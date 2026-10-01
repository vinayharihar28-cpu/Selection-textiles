import React from 'react';
import { cn } from '@/lib/utils';

export interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'narrow' | 'default' | 'wide' | 'full';
  children: React.ReactNode;
}

export function PageContainer({
  maxWidth = 'default',
  className,
  children,
  ...props
}: PageContainerProps) {
  const maxWidthStyles = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-screen-2xl',
    full: 'max-w-none',
  };

  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12',
        maxWidthStyles[maxWidth],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
