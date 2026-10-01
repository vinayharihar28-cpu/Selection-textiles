'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { IconButton } from './icon-button';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  side?: 'left' | 'right' | 'bottom';
  children: React.ReactNode;
}

export function Drawer({
  isOpen,
  onClose,
  title,
  side = 'right',
  children,
}: DrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sideStyles = {
    right: 'inset-y-0 right-0 max-w-md w-full border-l border-border animate-in slide-in-from-right duration-300',
    left: 'inset-y-0 left-0 max-w-md w-full border-r border-border animate-in slide-in-from-left duration-300',
    bottom: 'inset-x-0 bottom-0 max-h-[85vh] w-full border-t border-border rounded-t-3xl animate-in slide-in-from-bottom duration-300',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer content */}
      <div
        className={cn(
          'fixed bg-surface p-6 sm:p-8 flex flex-col justify-between shadow-soft-lg z-10 overflow-y-auto',
          sideStyles[side]
        )}
      >
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-border/80 mb-6">
          {title ? (
            <h3 className="font-serif text-xl sm:text-2xl text-foreground font-normal">
              {title}
            </h3>
          ) : <div />}
          <IconButton
            variant="ghost"
            size="sm"
            ariaLabel="Close drawer"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </IconButton>
        </div>

        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
