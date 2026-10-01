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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-smooth pointer-events-none flex justify-center',
          isScrolled ? 'pt-2 sm:pt-2.5 px-3 sm:px-5 lg:px-8' : 'pt-3 sm:pt-4 px-3 sm:px-6 lg:px-8'
        )}
      >
        <div
          className={cn(
            'pointer-events-auto w-full max-w-7xl relative transition-all duration-300 ease-smooth flex items-center justify-between',
            // 5% soft corner radius with glassmorphism border and shadows
            'rounded-[18px] border overflow-hidden',
            isScrolled
              ? 'h-[62px] sm:h-[66px] px-4 sm:px-6 bg-background/70 dark:bg-[#071714]/70 backdrop-blur-2xl backdrop-saturate-150 border-border/60 dark:border-white/15 shadow-[0_12px_40px_0_rgba(15,45,38,0.12)] dark:shadow-[0_12px_40px_0_rgba(0,0,0,0.5)]'
              : 'h-[70px] sm:h-[76px] px-4 sm:px-7 bg-background/65 dark:bg-[#071714]/65 backdrop-blur-xl backdrop-saturate-150 border-white/50 dark:border-white/10 shadow-[0_8px_32px_0_rgba(15,45,38,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.38)]'
          )}
          style={{ borderRadius: '18px' }}
        >
          {/* Glass Specular Top Highlight */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 dark:via-white/20 to-transparent pointer-events-none" />

          {/* Dynamic Scroll Progress Bar */}
          <div
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brass via-forest to-sage dark:from-brass dark:via-sage dark:to-brass transition-all duration-150 ease-out opacity-75"
            style={{ width: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
          />

          {/* Horizontal Brand Logo */}
          <Link
            href="/"
            className="group flex items-center select-none focus-visible:outline-none shrink-0"
            aria-label="Selection Textiles Home"
          >
            <Image
              src="/images/Logo/Logo.png"
              alt="Selection Textiles - Bengaluru Est. 1979"
              width={2172}
              height={724}
              priority
              className={cn(
                'w-auto object-contain transition-all duration-300 group-hover:scale-[1.02]',
                isScrolled ? 'h-7 sm:h-8' : 'h-8 sm:h-9'
              )}
            />
          </Link>

          {/* Desktop Navigation Links (Visible on lg: 1024px+) */}
          <nav
            className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-8"
            aria-label="Main Navigation"
          >
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative text-xs tracking-[0.14em] uppercase font-sans py-1.5 transition-all duration-200 select-none flex items-center gap-1.5',
                    isActive
                      ? 'text-forest dark:text-sage font-semibold'
                      : 'text-foreground/75 hover:text-foreground font-medium'
                  )}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-forest/10 dark:bg-sage/20 text-forest dark:text-sage font-medium -ml-0.5">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-forest dark:bg-sage rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Minimalist Circular Search Button */}
            <button
              type="button"
              aria-label="Search catalog"
              onClick={() => setSearchModalOpen(true)}
              className="w-9 h-9 rounded-full border border-border/70 hover:border-forest/50 dark:hover:border-sage/50 bg-surface/60 hover:bg-surface text-foreground/80 hover:text-foreground flex items-center justify-center transition-all cursor-pointer shadow-xs"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Theme Toggle */}
            <ThemeToggle variant="compact" />

            {/* Sleek Pill Enquire CTA */}
            <Link href="/contact" className="hidden sm:inline-flex">
              <Button
                variant="primary"
                size="sm"
                className="gap-1.5 text-[11px] uppercase tracking-[0.14em] font-sans font-medium px-4 py-2 rounded-full bg-forest hover:bg-forest/90 text-ivory dark:bg-sage dark:text-forest-dark dark:hover:bg-sage/90 shadow-soft transition-all"
              >
                <span>Enquire</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </Link>

            {/* Mobile Menu Trigger (Visible on screens < lg) */}
            <button
              type="button"
              aria-label="Open mobile menu"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-9 h-9 rounded-full border border-border/70 hover:border-forest/50 dark:hover:border-sage/50 bg-surface/60 hover:bg-surface text-foreground flex items-center justify-center transition-all cursor-pointer shadow-xs ml-1"
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
