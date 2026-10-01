'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BackButtonProps {
  href?: string;
  className?: string;
  ariaLabel?: string;
}

export function BackButton({
  href = '/',
  className,
  ariaLabel = 'Return to previous page',
}: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push(href);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      title={ariaLabel}
      className={cn(
        'w-10 h-10 sm:w-11 sm:h-11 rounded-full',
        'border border-border/80 bg-surface/90 hover:bg-surface active:scale-95',
        'backdrop-blur-md shadow-soft hover:shadow-soft-lg hover:border-accent/60',
        'text-foreground hover:text-accent transition-all duration-200',
        'flex items-center justify-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        className
      )}
    >
      <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-foreground group-hover:text-accent transition-transform duration-200 group-hover:-translate-x-0.5" />
    </button>
  );
}
