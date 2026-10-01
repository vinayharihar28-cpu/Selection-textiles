'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Collections', href: '/collections' },
  { label: 'Tailoring', href: '/tailoring' },
  { label: 'Fabrics', href: '/fabrics' },
  { label: 'Corporate Studio', href: '/corporate' },
  { label: 'Heritage', href: '/heritage' },
  { label: 'Showroom', href: '/showroom', badge: '360°' },
  { label: 'Contact', href: '/contact' },
];

interface NavigationProps {
  className?: string;
  onItemClick?: () => void;
  orientation?: 'horizontal' | 'vertical';
}

export function Navigation({
  className,
  onItemClick,
  orientation = 'horizontal',
}: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        'flex',
        orientation === 'horizontal'
          ? 'items-center gap-7 lg:gap-9'
          : 'flex-col gap-6 items-start',
        className
      )}
      aria-label="Main Navigation"
    >
      {MAIN_NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className={cn(
              'group relative text-xs tracking-widest-editorial uppercase transition-all duration-300 select-none py-1.5 flex items-center gap-2',
              isActive
                ? 'text-champagne-300 font-medium'
                : 'text-neutral-400 hover:text-ivory-100'
            )}
          >
            <span>{item.label}</span>
            {item.badge && (
              <span className="text-[9px] tracking-wider px-1.5 py-0.5 rounded-full bg-champagne-400/10 text-champagne-400 border border-champagne-400/30">
                {item.badge}
              </span>
            )}
            {/* Active / Hover subtle indicator underline */}
            <span
              className={cn(
                'absolute -bottom-0.5 left-0 h-[1px] bg-champagne-400/70 transition-all duration-300 ease-atelier',
                isActive ? 'w-full' : 'w-0 group-hover:w-full'
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
