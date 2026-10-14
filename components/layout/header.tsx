'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, Menu, ArrowUpRight } from 'lucide-react';
import { Container } from './container';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { MobileNavigation, MAIN_NAV_ITEMS } from './mobile-navigation';
import { Modal } from '@/components/ui/modal';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-smooth',
          isScrolled
            ? 'h-16 sm:h-18 bg-surface/95 dark:bg-[#081a16]/95 backdrop-blur-xl border-b border-border/80 shadow-soft-xs'
            : pathname === '/'
            ? 'h-16 sm:h-20 max-lg:bg-surface/95 max-lg:dark:bg-[#081a16]/95 max-lg:backdrop-blur-xl max-lg:border-b max-lg:border-border/80 max-lg:shadow-soft-xs lg:bg-gradient-to-b lg:from-black/60 lg:via-black/20 lg:to-transparent lg:border-b-transparent'
            : 'h-16 sm:h-18 bg-surface/95 dark:bg-[#081a16]/95 backdrop-blur-xl border-b border-border/80 shadow-soft-xs'
        )}
      >
        <div className="w-full max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center select-none focus-visible:outline-none shrink-0"
            aria-label="Selection Textiles Home"
          >
            <Image
              src="/images/Logo/Logo.png"
              alt="Selection Textiles - Bengaluru Est. 1979"
              width={2067}
              height={761}
              priority
              className={cn(
                'w-auto object-contain transition-all duration-300 group-hover:scale-[1.02]',
                isScrolled ? 'h-7 sm:h-8' : 'h-8 sm:h-9 lg:h-10'
              )}
            />
          </Link>

          {/* Desktop Navigation Links (Visible on lg: 1024px+) */}
          <nav
            className="hidden lg:flex items-center gap-5 xl:gap-7"
            aria-label="Main Navigation"
          >
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              const isHeroOverlaid = !isScrolled && pathname === '/';

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative text-xs tracking-[0.16em] uppercase font-sans py-1.5 transition-colors duration-200 select-none flex items-center gap-1.5 font-medium',
                    isHeroOverlaid
                      ? isActive
                        ? 'text-white font-semibold'
                        : 'text-white/80 hover:text-white'
                      : isActive
                        ? 'text-forest dark:text-sage font-semibold'
                        : 'text-foreground/75 hover:text-foreground'
                  )}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={cn(
                        'text-[9px] px-1.5 py-0.2 rounded-full font-medium -ml-0.5',
                        isHeroOverlaid
                          ? 'bg-white/20 text-white border border-white/30'
                          : 'bg-forest/10 dark:bg-sage/20 text-forest dark:text-sage'
                      )}
                    >
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span
                      className={cn(
                        'absolute -bottom-1 left-0 right-0 h-[2px] rounded-full',
                        isHeroOverlaid ? 'bg-white shadow-2xs' : 'bg-forest dark:bg-sage'
                      )}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Search Button */}
            <button
              type="button"
              aria-label="Search catalog"
              onClick={() => setSearchModalOpen(true)}
              className={cn(
                'w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all cursor-pointer active:scale-95',
                !isScrolled && pathname === '/'
                  ? 'border border-white/25 bg-black/25 hover:bg-black/40 text-white backdrop-blur-xs max-lg:border-border max-lg:hover:border-foreground/30 max-lg:bg-surface max-lg:hover:bg-surface-muted max-lg:text-foreground/80 max-lg:shadow-2xs'
                  : 'border border-border hover:border-foreground/30 bg-surface hover:bg-surface-muted text-foreground/80 hover:text-foreground shadow-2xs'
              )}
            >
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* Theme Toggle */}
            <ThemeToggle variant="compact" />

            {/* Refined Enquire Button */}
            <Link href="/contact" className="hidden sm:inline-flex">
              <Button
                variant="primary"
                size="sm"
                className={cn(
                  'gap-1.5 text-[11px] uppercase tracking-[0.14em] font-sans font-medium px-4 py-1.5 h-8 sm:h-9 rounded-full transition-all shadow-xs active:scale-95',
                  !isScrolled && pathname === '/'
                    ? 'bg-forest hover:bg-forest/90 text-white border border-white/25 shadow-sm'
                    : 'bg-forest hover:bg-forest/90 text-ivory dark:bg-sage dark:text-forest-dark dark:hover:bg-sage/90'
                )}
              >
                <span>Enquire</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
              </Button>
            </Link>

            {/* Mobile Menu Trigger (Visible on screens < lg) */}
            <button
              type="button"
              aria-label="Open mobile menu"
              onClick={() => setMobileMenuOpen(true)}
              className={cn(
                'lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all cursor-pointer active:scale-95 ml-0.5',
                !isScrolled && pathname === '/'
                  ? 'border border-white/25 bg-black/25 hover:bg-black/40 text-white backdrop-blur-xs max-lg:border-border max-lg:hover:border-foreground/30 max-lg:bg-surface max-lg:hover:bg-surface-muted max-lg:text-foreground max-lg:shadow-2xs'
                  : 'border border-border hover:border-foreground/30 bg-surface hover:bg-surface-muted text-foreground shadow-2xs'
              )}
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>

      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Search Modal */}
      <Modal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        title="Search Selection Textiles"
        description="Find bespoke silhouettes, rare mill fabrics, and tailoring appointments."
      >
        <div className="flex flex-col gap-4 mt-2">
          <div className="relative">
            <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setSearchModalOpen(false);
                  window.location.href = `/collections${searchQuery.trim() ? `?q=${encodeURIComponent(searchQuery.trim())}` : ''}`;
                }
              }}
              placeholder="e.g. Scabal Super 150s, Royal Bandhgala, Linen Blazer..."
              className="w-full h-12 pl-10 pr-4 text-sm bg-surface-muted border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="text-[11px] text-muted self-center mr-1">Popular:</span>
            {['Sherwanis', 'Bandhgalas', 'Full-Canvas Suits', 'Scabal', 'Loro Piana', 'Modi Coats'].map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => {
                  setSearchQuery(term);
                  setSearchModalOpen(false);
                  window.location.href = `/collections?q=${encodeURIComponent(term)}`;
                }}
                className="text-xs px-2.5 py-1 rounded-md bg-surface-muted hover:bg-border text-foreground transition-colors cursor-pointer"
              >
                {term}
              </button>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-border flex justify-end">
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                setSearchModalOpen(false);
                window.location.href = `/collections${searchQuery.trim() ? `?q=${encodeURIComponent(searchQuery.trim())}` : ''}`;
              }}
            >
              Explore Results
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
