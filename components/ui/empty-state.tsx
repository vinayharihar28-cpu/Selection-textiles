import React from 'react';
import { LucideIcon, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';

export interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  actionHref?: string;
  className?: string;
}

export function EmptyState({
  icon: Icon = Layers,
  title,
  description,
  actionLabel,
  onAction,
  actionHref,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-dashed border-border bg-surface-muted/30 p-12 text-center flex flex-col items-center justify-center max-w-lg mx-auto my-8',
        className
      )}
    >
      <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-accent mb-4 shadow-soft">
        <Icon className="w-5 h-5" />
      </div>

      <h4 className="font-serif text-xl text-foreground font-normal mb-2">
        {title}
      </h4>

      <p className="text-xs text-muted font-sans max-w-sm mb-6 leading-relaxed">
        {description}
      </p>

      {actionLabel && (
        <>
          {actionHref ? (
            <a href={actionHref}>
              <Button variant="outline" size="sm">
                {actionLabel}
              </Button>
            </a>
          ) : (
            <Button variant="outline" size="sm" onClick={onAction}>
              {actionLabel}
            </Button>
          )}
        </>
      )}
    </div>
  );
}
