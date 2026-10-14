'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { cn } from '@/lib/utils';

export interface CollectionCardData {
  id: string;
  pill: string;
  title: string;
  description: string;
  image: string;
  href: string;
  imagePosition?: string;
  featured?: boolean;
}

export const EDITORIAL_COLLECTIONS: CollectionCardData[] = [
  {
    id: 'fine-suits',
    pill: 'BESPOKE TAILORING',
    title: 'Fine Suits',
    description: 'Full-canvas western tailoring, two-piece suits, three-piece sets, and double-breasted blazers.',
    image: '/images/hero/fine-suits.png',
    href: '#collection-fine-suits',
    imagePosition: 'object-top',
    featured: true,
  },
  {
    id: 'fabrics',
    pill: 'TEXTILE ARCHIVE',
    title: 'Fabrics',
    description: 'Raymond, Siyarams, Linen Club, Mafatlal, Ramraj, Uthayam, and imported Italian worsted cloth.',
    image: '/images/hero/fabrics.png',
    href: '#collection-fabrics',
    imagePosition: 'object-center',
  },
  {
    id: 'ethnics',
    pill: 'HERITAGE TRADITIONAL',
    title: 'Ethnics',
    description: 'Hand-placket kurtas, traditional pyjamas, and pure Bangalore silk ceremonial ensembles.',
    image: '/images/hero/ethnics.png',
    href: '#collection-ethnics',
    imagePosition: 'object-top',
  },
  {
    id: 'indo-western',
    pill: 'FUSION SARTORIAL',
    title: 'Indo Western',
    description: 'Contemporary stand-collar Modi coats, structured Bandhgalas, and contoured waistcoats.',
    image: '/images/hero/indo-western.png',
    href: '#collection-indo-western',
    imagePosition: 'object-top',
  },
  {
    id: 'weddings-collections',
    pill: 'REGAL CEREMONIAL',
    title: 'Weddings Collections',
    description: 'Grand royal sherwanis, achkans, and embroidered bridal groom trousseaus.',
    image: '/images/hero/weddings.png',
    href: '#collection-wedding-collections',
    imagePosition: 'object-top',
  },
  {
    id: 'corporate-uniforms',
    pill: 'INSTITUTIONAL',
    title: 'Corporate Uniforms',
    description: 'Turnkey workforce apparel across 11 sectors including executive, healthcare, and culinary.',
    image: '/images/hero/corporate-uniforms.png',
    href: '#collection-corporate-uniforms',
    imagePosition: 'object-top',
  },
  {
    id: 'custom-tailorings',
    pill: 'MADE TO MEASURE',
    title: 'Custom Tailorings',
    description: 'Precision made-to-measure shirts, forward-pleat trousers, and bespoke back-cinch waistcoats.',
    image: '/images/hero/custom-tailoring.png',
    href: '#collection-custom-tailorings',
    imagePosition: 'object-top',
  },
];

export function EditorialCollectionCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  // Check scroll boundary to toggle arrow states
  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  // Horizontal wheel handler for trackpad/mouse wheel
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      // If user is primarily scrolling vertically over the carousel on desktop
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && Math.abs(e.deltaY) > 5) {
        // Only divert if we have horizontal room to scroll
        const maxScroll = el.scrollWidth - el.clientWidth;
        if ((e.deltaY > 0 && el.scrollLeft < maxScroll) || (e.deltaY < 0 && el.scrollLeft > 0)) {
          // Allow subtle wheel conversion with bounds
          el.scrollBy({ left: e.deltaY * 1.2, behavior: 'auto' });
          e.preventDefault();
        }
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  const handleScrollBy = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const offset = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -offset : offset,
      behavior: 'smooth',
    });
  };

  // Click & drag to scroll handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      setHasMoved(true);
    }
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-background border-t border-border/40 overflow-hidden">
      <Container size="wide">
        {/* ========================================================================= */}
        {/* EDITORIAL HEADER (Centered, Elegant, Generous Spacing) */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          {/* Subtle Category Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/5 dark:bg-sage/10 border border-forest/15 dark:border-sage/20 text-forest dark:text-sage font-sans text-xs uppercase tracking-widest font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-sage" />
            <span>Sartorial Divisions • Est. 1979</span>
          </div>

          {/* Large Editorial Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground font-light tracking-tight text-balance leading-tight">
            Explore Our Collections
          </h2>

          {/* Supporting Description */}
          <p className="mt-4 text-base sm:text-lg text-muted font-sans leading-relaxed text-balance max-w-2xl font-light">
            From refined tailoring and traditional occasionwear to premium fabrics and corporate uniforms.
          </p>

          {/* Navigation Controls for Desktop & Tablet */}
          <div className="mt-8 flex items-center gap-3 select-none">
            <button
              type="button"
              onClick={() => handleScrollBy('left')}
              disabled={!canScrollLeft}
              aria-label="Previous collection"
              className={cn(
                'w-11 h-11 rounded-full border border-border flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs',
                canScrollLeft
                  ? 'bg-surface hover:bg-surface-muted text-foreground hover:border-forest/60 dark:hover:border-sage/60 hover:scale-105 active:scale-95'
                  : 'bg-surface-muted/50 text-muted/40 border-border/40 cursor-not-allowed opacity-40'
              )}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <span className="text-[11px] uppercase tracking-widest text-muted font-sans font-medium px-2">
              Slide to Explore
            </span>

            <button
              type="button"
              onClick={() => handleScrollBy('right')}
              disabled={!canScrollRight}
              aria-label="Next collection"
              className={cn(
                'w-11 h-11 rounded-full border border-border flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs',
                canScrollRight
                  ? 'bg-surface hover:bg-surface-muted text-foreground hover:border-forest/60 dark:hover:border-sage/60 hover:scale-105 active:scale-95'
                  : 'bg-surface-muted/50 text-muted/40 border-border/40 cursor-not-allowed opacity-40'
              )}
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HORIZONTAL COLLECTION CAROUSEL TRACK */}
        {/* ========================================================================= */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={cn(
            'flex gap-5 sm:gap-6 lg:gap-8 overflow-x-auto scroll-smooth pb-8 pt-2 px-1',
            'scrollbar-none select-none',
            isDragging ? 'cursor-grabbing' : 'cursor-grab',
            'snap-x snap-mandatory sm:snap-none'
          )}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {EDITORIAL_COLLECTIONS.map((card, idx) => {
            const isFeatured = card.featured;

            return (
              <div
                key={card.id}
                className={cn(
                  'shrink-0 snap-center transition-all duration-300',
                  // Mobile: 85-88% viewport so next card naturally peeks
                  'w-[86vw] max-w-[360px]',
                  // Tablet & Desktop: featured card is wider for visual rhythm
                  isFeatured
                    ? 'sm:w-[440px] md:w-[480px] lg:w-[520px]'
                    : 'sm:w-[340px] md:w-[370px] lg:w-[390px]'
                )}
              >
                <Link
                  href={card.href}
                  onClick={(e) => {
                    // Prevent accidental click if user was dragging
                    if (hasMoved) {
                      e.preventDefault();
                    }
                  }}
                  className={cn(
                    'group block h-full rounded-[2rem] sm:rounded-[2.25rem] border border-border/80 dark:border-white/10',
                    'bg-surface dark:bg-forest-surface shadow-soft hover:shadow-soft-lg',
                    'hover:border-forest/40 dark:hover:border-sage/40 transition-all duration-500 overflow-hidden flex flex-col justify-between'
                  )}
                >
                  {/* Card Image Area (Dominates the card, 60-65% visual weight) */}
                  <div className="relative w-full aspect-[1/1] sm:aspect-[4/3.8] lg:aspect-[1/1] overflow-hidden bg-surface-muted">
                    <Image
                      src={card.image}
                      alt={`Selection Textiles ${card.title}`}
                      fill
                      unoptimized
                      sizes={isFeatured ? '(max-width: 768px) 90vw, 520px' : '(max-width: 768px) 85vw, 390px'}
                      className={cn(
                        'object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03]',
                        card.imagePosition || 'object-top'
                      )}
                    />

                    {/* Subtle top vignette to frame image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none" />

                    {/* Top Floating Category Pill */}
                    <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 pointer-events-none">
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-sans font-semibold bg-surface/90 dark:bg-forest-dark/90 backdrop-blur-md text-foreground border border-border/70 dark:border-white/15 shadow-xs">
                        {card.pill}
                      </span>
                    </div>
                  </div>

                  {/* Card Content & Action Area */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 gap-5 bg-surface dark:bg-forest-surface">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-light tracking-tight group-hover:text-forest dark:group-hover:text-sage transition-colors leading-snug">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-muted font-sans leading-relaxed line-clamp-2 font-light">
                        {card.description}
                      </p>
                    </div>

                    {/* Bottom Action Footer with Arrow Button */}
                    <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest font-sans font-medium text-forest dark:text-sage group-hover:underline underline-offset-4 transition-all">
                        View Collection
                      </span>

                      <div className="w-10 h-10 rounded-full border border-border group-hover:border-forest dark:group-hover:border-sage bg-surface-muted group-hover:bg-forest group-hover:text-ivory dark:group-hover:bg-sage dark:group-hover:text-forest-dark flex items-center justify-center transition-all duration-300 shadow-xs shrink-0">
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint Indicator */}
        <div className="mt-4 flex sm:hidden items-center justify-center gap-1.5 text-muted text-[11px] font-sans">
          <span>Swipe to discover all collections</span>
          <ArrowRight className="w-3.5 h-3.5 text-forest dark:text-sage animate-pulse" />
        </div>
      </Container>
    </section>
  );
}
