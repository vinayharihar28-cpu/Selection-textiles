import React from 'react';
import { cn } from '@/lib/utils';

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

export function Spinner({ size = 'md', className, ...props }: SpinnerProps) {
  const sizeStyles = {
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-2',
    lg: 'w-10 h-10 border-3',
  };

  return (
    <div
      className={cn(
        'inline-block animate-spin rounded-full border-border border-t-accent',
        sizeStyles[size],
        className
      )}
      role="status"
      aria-label="Loading"
      {...props}
    />
  );
}

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn('animate-pulse rounded-lg bg-surface-muted/60', className)}
      {...props}
    />
  );
}

export function LoadingCard() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 flex flex-col gap-4 shadow-soft">
      <Skeleton className="aspect-[3/4] w-full rounded-xl" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-3/4 rounded" />
        <Skeleton className="h-3 w-1/2 rounded" />
      </div>
      <div className="flex justify-between items-center pt-2">
        <Skeleton className="h-5 w-20 rounded" />
        <Skeleton className="h-8 w-24 rounded-lg" />
      </div>
    </div>
  );
}
