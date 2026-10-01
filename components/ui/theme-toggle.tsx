'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Laptop } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
  variant?: 'compact' | 'segmented';
}

export function ThemeToggle({ className, variant = 'compact' }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={cn('w-9 h-9 rounded-lg bg-surface-muted/50 animate-pulse', className)} />
    );
  }

  if (variant === 'segmented') {
    return (
      <div className={cn('inline-flex items-center p-1 rounded-lg bg-surface-muted border border-border gap-1', className)}>
        <button
          type="button"
          onClick={() => setTheme('light')}
          aria-label="Light mode"
          className={cn(
            'flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md font-sans transition-colors',
            theme === 'light'
              ? 'bg-surface text-foreground shadow-soft font-medium'
              : 'text-muted hover:text-foreground'
          )}
        >
          <Sun className="w-3.5 h-3.5" />
          <span>Light</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme('dark')}
          aria-label="Dark mode"
          className={cn(
            'flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md font-sans transition-colors',
            theme === 'dark'
              ? 'bg-surface text-foreground shadow-soft font-medium'
              : 'text-muted hover:text-foreground'
          )}
        >
          <Moon className="w-3.5 h-3.5" />
          <span>Dark</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme('system')}
          aria-label="System preference"
          className={cn(
            'flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md font-sans transition-colors',
            theme === 'system'
              ? 'bg-surface text-foreground shadow-soft font-medium'
              : 'text-muted hover:text-foreground'
          )}
        >
          <Laptop className="w-3.5 h-3.5" />
          <span>Auto</span>
        </button>
      </div>
    );
  }

  // Compact cycling toggle button
  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const currentIcon = () => {
    if (theme === 'dark') return <Moon className="w-4 h-4 text-foreground transition-transform" />;
    if (theme === 'light') return <Sun className="w-4 h-4 text-foreground transition-transform" />;
    return <Laptop className="w-4 h-4 text-foreground transition-transform" />;
  };

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={`Current theme: ${theme}. Click to switch theme.`}
      title={`Theme: ${theme}`}
      className={cn(
        'w-9 h-9 rounded-lg border border-border bg-surface flex items-center justify-center text-foreground hover:bg-surface-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 cursor-pointer shadow-soft',
        className
      )}
    >
      {currentIcon()}
    </button>
  );
}
