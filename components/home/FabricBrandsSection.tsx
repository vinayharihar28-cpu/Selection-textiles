'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { cn } from '@/lib/utils';

export interface FabricBrandItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  established?: string;
  logoSrc?: string; // Component ready for official SVG/PNG brand assets
  fontClass: string;
  letterSpacing: string;
  ariaLabel: string;
}

const FABRIC_BRANDS: FabricBrandItem[] = [
  {
    id: 'raymond',
    name: 'RAYMOND',
    slug: 'raymond',
    category: 'Fine Suiting & All-Wool Worsteds',
    established: '1925',
    fontClass: 'font-serif font-semibold text-lg sm:text-xl md:text-2xl',
    letterSpacing: 'tracking-[0.24em]',
    ariaLabel: 'Raymond Fine Suiting and Wool Fabrics',
  },
  {
    id: 'siyarams',
    name: "SIYARAM'S",
    slug: 'siyarams',
    category: 'Poly-Viscose & Poly-Wool Suiting',
    established: '1978',
    fontClass: 'font-sans font-bold text-base sm:text-lg md:text-xl',
    letterSpacing: 'tracking-[0.18em]',
    ariaLabel: "Siyaram's Suiting and Trouser Fabrics",
  },
  {
    id: 'linen-club',
    name: 'LINEN CLUB',
    slug: 'linen-club',
    category: '100% Pure European Flax Linen',
    established: '1949',
    fontClass: 'font-serif italic font-medium text-lg sm:text-xl md:text-2xl',
    letterSpacing: 'tracking-[0.16em]',
    ariaLabel: 'Linen Club Pure Flax Linen Fabrics',
  },
  {
    id: 'mafatlal',
    name: 'MAFATLAL',
    slug: 'mafatlal',
    category: 'Heritage Shirting & Uniform Cottons',
    established: '1905',
    fontClass: 'font-sans font-semibold text-base sm:text-lg md:text-xl',
    letterSpacing: 'tracking-[0.22em]',
    ariaLabel: 'Mafatlal Heritage Shirting and Cotton Fabrics',
  },
  {
    id: 'ramraj',
    name: 'RAMRAJ',
    slug: 'ramraj',
    category: 'Traditional Cottons & Gold Zari Dhoties',
    established: '1983',
    fontClass: 'font-serif font-bold text-lg sm:text-xl md:text-2xl',
    letterSpacing: 'tracking-[0.18em]',
    ariaLabel: 'Ramraj Traditional Cotton Dhoties and Fabrics',
  },
  {
    id: 'uthayam',
    name: 'UTHAYAM',
    slug: 'uthayam',
    category: 'Ceremonial Temple Border Veshtis',
    established: '1998',
    fontClass: 'font-sans font-bold text-base sm:text-lg md:text-xl',
    letterSpacing: 'tracking-[0.22em]',
    ariaLabel: 'Uthayam Ceremonial Veshtis and Traditional Cloths',
  },
];

export function FabricBrandsSection() {
  return (
    <section
      aria-label="Documented Fabric Brands"
      className="relative w-full bg-ivory dark:bg-[#071714] text-foreground border-y border-sand/40 dark:border-forest-muted/50 py-16 sm:py-20 md:py-24 transition-colors overflow-hidden"
    >
      <Container size="wide">
        {/* Section Header: Eyebrow + Concise Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-widest-editorial font-sans font-medium text-forest/80 dark:text-brass mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-brass" />
            <span>FABRIC BRANDS</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest-dark dark:text-ivory font-light text-balance leading-snug">
            Selected names behind the cloth.
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm text-charcoal/70 dark:text-ivory/70 font-sans max-w-lg mx-auto leading-relaxed">
            Curated running rolls and documented textile mill archives available at our Bengaluru cutting counters.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP & TABLET LOGO STRIP (One Elegant Row on Desktop, Balanced on Tablet) */}
        {/* ========================================================================= */}
        <div className="hidden md:flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-8 lg:gap-10 xl:gap-14 w-full px-2 sm:px-6">
          {FABRIC_BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="group flex flex-col items-center justify-center transition-all duration-300 hover:scale-[1.03] select-none cursor-default"
              title={`${brand.name} • ${brand.category}`}
            >
              {/* Ready for SVG/PNG asset if provided, otherwise tasteful text wordmark */}
              {brand.logoSrc ? (
                <div className="relative h-8 sm:h-9 max-w-[140px] flex items-center justify-center">
                  <Image
                    src={brand.logoSrc}
                    alt={brand.name}
                    width={160}
                    height={36}
                    className="h-full w-auto object-contain filter dark:brightness-0 dark:invert opacity-85 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ) : (
                <div className="h-9 sm:h-10 flex items-center justify-center px-2">
                  <span
                    className={cn(
                      'text-forest dark:text-ivory/90 group-hover:text-forest-dark dark:group-hover:text-brass transition-colors duration-200 select-none text-center',
                      brand.fontClass,
                      brand.letterSpacing
                    )}
                  >
                    {brand.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE HORIZONTAL SWIPE RAIL (Shows ~2-3 logos at a time, smooth scroll, no page overflow) */}
        {/* ========================================================================= */}
        <div className="md:hidden relative -mx-4 px-4 overflow-hidden">
          <div
            className="flex items-center gap-7 overflow-x-auto snap-x snap-mandatory py-3 px-2 no-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {FABRIC_BRANDS.map((brand) => (
              <div
                key={brand.id}
                className="shrink-0 snap-center min-w-[130px] sm:min-w-[150px] flex flex-col items-center justify-center py-2 px-3 transition-transform active:scale-95"
              >
                {brand.logoSrc ? (
                  <div className="relative h-7 max-w-[120px] flex items-center justify-center">
                    <Image
                      src={brand.logoSrc}
                      alt={brand.name}
                      width={120}
                      height={28}
                      className="h-full w-auto object-contain filter dark:brightness-0 dark:invert"
                    />
                  </div>
                ) : (
                  <span
                    className={cn(
                      'text-forest dark:text-ivory/90 text-sm sm:text-base select-none whitespace-nowrap text-center',
                      brand.fontClass,
                      brand.letterSpacing
                    )}
                  >
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Subtle Swipe Cue on Mobile */}
          <div className="flex items-center justify-center gap-1.5 mt-3 text-[10px] text-charcoal/50 dark:text-ivory/50 uppercase tracking-widest font-sans">
            <span>Swipe for all mills</span>
            <span className="text-xs">→</span>
          </div>
        </div>

        {/* Generous Section Breathing Divider */}
        <div className="mt-14 sm:mt-16 md:mt-20 flex items-center justify-center">
          <div className="w-16 h-[1px] bg-sand/60 dark:bg-forest-muted" />
        </div>
      </Container>
    </section>
  );
}
