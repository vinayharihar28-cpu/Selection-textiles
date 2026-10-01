'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Drawer } from '@/components/ui/drawer';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Search, MapPin, Phone } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Collections', href: '/collections' },
  { label: 'Tailoring', href: '/tailoring' },
  { label: 'Corporate', href: '/corporate' },
  { label: 'Fabrics', href: '/fabrics' },
  { label: 'Heritage', href: '/heritage' },
  { label: 'Contact', href: '/contact' },
];

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch?: () => void;
}

export function MobileNavigation({
  isOpen,
  onClose,
  onOpenSearch,
}: MobileNavigationProps) {
  const pathname = usePathname();

  return (
    <Drawer isOpen={isOpen} onClose={onClose} side="right">
      <div className="flex flex-col justify-between h-full gap-8">
        {/* Top brand & search */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-start">
            <Link href="/" onClick={onClose} className="inline-block py-1">
              <Image
                src="/images/Logo/Logo.png"
                alt="Selection Textiles"
                width={2172}
                height={724}
                priority
                className="h-11 w-auto object-contain"
              />
            </Link>
            <span className="text-[10px] uppercase tracking-widest text-muted font-sans mt-0.5">
              Bengaluru • Established 1979
            </span>
          </div>

          {/* Quick Search Bar */}
          <button
            type="button"
            onClick={() => {
              onClose();
              if (onOpenSearch) onOpenSearch();
            }}
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg border border-border bg-surface-muted text-muted text-xs hover:text-foreground transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Search className="w-4 h-4 text-muted" />
              <span>Search fabrics, suits, uniforms...</span>
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-surface border border-border">/</span>
          </button>

          {/* Links list */}
          <nav className="flex flex-col gap-1 pt-2">
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-sans transition-colors',
                    isActive
                      ? 'bg-surface-muted text-accent font-medium'
                      : 'text-foreground hover:bg-surface-muted/50'
                  )}
                >
                  <span className="font-serif text-lg">{item.label}</span>
                  {item.badge ? (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30 font-sans">
                      {item.badge}
                    </span>
                  ) : (
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted opacity-60" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Theme & Actions */}
        <div className="pt-6 border-t border-border flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted font-sans font-medium">Appearance</span>
            <ThemeToggle variant="segmented" />
          </div>

          <Link href="/contact" onClick={onClose}>
            <Button variant="primary" className="w-full py-3 text-xs uppercase tracking-widest-editorial">
              Visit Showroom / Enquire
            </Button>
          </Link>

          <div className="text-[11px] text-muted text-center leading-relaxed flex flex-col items-center gap-1">
            <span className="flex items-center gap-1 font-medium text-foreground">
              <MapPin className="w-3 h-3 text-accent" />
              B.V.K. Iyengar Road, Bengaluru
            </span>
            <p>#16-17, &ldquo;D.Rangaiah Complex&rdquo; – 560053</p>
            <p className="flex items-center gap-1 mt-0.5">
              <Phone className="w-3 h-3 text-accent" />
              +91-98446 75222 / 080-22258982
            </p>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
