'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowUpRight,
  Play,
  Pause,
  Phone,
  Calendar,
} from 'lucide-react';
import { HERO_COLLECTIONS, HeroCollectionSlide } from '@/lib/data/hero-collections';
import { Container } from '@/components/layout/container';
import { cn } from '@/lib/utils';


export function HeroCollectionSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const speedMs = 5000; // 5.0s measured luxury editorial pace

  // Mobile touch swipe tracking
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Mobile horizontal category chips auto-scroll refs
  const mobileChipsContainerRef = useRef<HTMLDivElement>(null);
  const mobileChipRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const totalSlides = HERO_COLLECTIONS.length;
  const displayedSlide: HeroCollectionSlide = HERO_COLLECTIONS[displayedIndex];

  // Respect prefers-reduced-motion setting
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (motionQuery.matches) {
        setIsPaused(true);
      }
      const handleChange = (e: MediaQueryListEvent) => {
        if (e.matches) setIsPaused(true);
      };
      motionQuery.addEventListener('change', handleChange);
      return () => motionQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Progressive preloading of next slide for seamless transitions without network flooding
  useEffect(() => {
    const nextIdx = (activeIndex + 1) % totalSlides;
    const nextSlide = HERO_COLLECTIONS[nextIdx];
    if (nextSlide?.heroImage) {
      const img = new window.Image();
      img.src = nextSlide.heroImage;
    }
  }, [activeIndex, totalSlides]);

  const changeSlide = useCallback(
    (nextIndex: number) => {
      if (nextIndex === activeIndex) return;
      setPrevIndex(activeIndex);
      setActiveIndex(nextIndex);
    },
    [activeIndex]
  );

  const handleNext = useCallback(() => {
    changeSlide((activeIndex + 1) % totalSlides);
  }, [activeIndex, totalSlides, changeSlide]);

  const handlePrev = useCallback(() => {
    changeSlide((activeIndex - 1 + totalSlides) % totalSlides);
  }, [activeIndex, totalSlides, changeSlide]);

  const handleSelect = useCallback(
    (idx: number) => {
      changeSlide(idx);
    },
    [changeSlide]
  );

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Coordinated text transition to prevent flickering
  useEffect(() => {
    if (activeIndex === displayedIndex) return;

    setIsTextVisible(false);
    const timer = setTimeout(() => {
      setDisplayedIndex(activeIndex);
      setIsTextVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, [activeIndex, displayedIndex]);

  // Continuous auto-cycle with pause toggle
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, speedMs);

    return () => clearInterval(timer);
  }, [speedMs, handleNext, isPaused]);

  // Auto-scroll mobile category chips container to center the active category
  useEffect(() => {
    const container = mobileChipsContainerRef.current;
    const activeChip = mobileChipRefs.current[activeIndex];
    if (container && activeChip) {
      const containerWidth = container.clientWidth;
      const chipLeft = activeChip.offsetLeft;
      const chipWidth = activeChip.clientWidth;
      const targetScrollLeft = chipLeft - containerWidth / 2 + chipWidth / 2;

      container.scrollTo({
        left: Math.max(0, targetScrollLeft),
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. MOBILE & TABLET LAYOUT (< lg screens: 320px – 1023px)                   */}
      {/* Contained Rectangular Box Architecture with 100dvh Viewport Lock:         */}
      {/* Image is cleanly contained inside a rectangular frame. On landing, ONLY    */}
      {/* the hero section is visible. Below content appears ONLY when scrolled.     */}
      {/* ========================================================================= */}
      <section
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="block lg:hidden relative w-full h-[100dvh] min-h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between pt-[70px] sm:pt-[78px] pb-2 sm:pb-3 px-3.5 sm:px-5 select-none font-sans bg-gradient-to-b from-[#EDE8DC] via-background to-background dark:from-[#0a1f1a] dark:via-background dark:to-background border-b border-border/60 text-foreground"
        aria-label="Selection Textiles Collections Mobile Hero"
      >
        {/* Top Header Clearance Bar: Est. 1979 info + Pause toggle */}
        <div className="flex items-center justify-between gap-2 shrink-0 mb-1.5 px-0.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface border border-border text-foreground font-sans text-[11px] uppercase tracking-wider font-semibold shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-sage animate-pulse" />
            <span>Bengaluru Est. 1979</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-muted-foreground font-medium">
              0{activeIndex + 1} / 0{totalSlides}
            </span>
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface hover:bg-surface-muted border border-border text-foreground font-sans text-[10px] uppercase tracking-wider font-semibold transition-all cursor-pointer active:scale-95 shadow-2xs"
            >
              {isPaused ? (
                <>
                  <Play className="w-2.5 h-2.5 fill-current text-forest dark:text-sage" />
                  <span>Play</span>
                </>
              ) : (
                <>
                  <Pause className="w-2.5 h-2.5 fill-current text-muted-foreground" />
                  <span>Pause</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* CONTAINED RECTANGULAR LANDSCAPE IMAGE BOX                                */}
        {/* ======================================================================= */}
        <div className="relative w-full flex-1 min-h-[170px] max-h-[38vh] sm:max-h-[40vh] rounded-2xl sm:rounded-[1.5rem] overflow-hidden border border-border/80 ring-1 ring-brass/15 shadow-soft-lg bg-[#080B0A] group">
          {/* Images Stack with Dissolve & Ken-Burns */}
          {HERO_COLLECTIONS.map((slide, idx) => {
            const isActive = idx === activeIndex;
            const isPrev = idx === prevIndex;

            return (
              <div
                key={slide.id}
                className={cn(
                  'absolute inset-0 w-full h-full will-change-[opacity]',
                  isActive ? 'z-20' : isPrev ? 'z-10' : 'z-0',
                  isActive
                    ? 'opacity-100 transition-opacity duration-700 ease-in-out'
                    : isPrev
                    ? 'opacity-100'
                    : 'opacity-0'
                )}
              >
                <div
                  className={cn(
                    'relative w-full h-full overflow-hidden',
                    isActive && !isPaused && 'animate-hero-ken-burns'
                  )}
                >
                  <Image
                    src={slide.heroImage}
                    alt={`Selection Textiles — ${slide.title}`}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectPosition: slide.mobilePosition || '74% 10%' }}
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}

          {/* Subtle Contrast Gradients for visual depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/30 pointer-events-none z-[25]" />

          {/* Left Arrow Button for scrolling between slides */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/45 hover:bg-black/70 text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-md"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
          </button>

          {/* Right Arrow Button for scrolling between slides */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="absolute right-2.5 sm:right-3.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/45 hover:bg-black/70 text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-md"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.2]" />
          </button>

          {/* Top category chip inside image box */}
          <div className="absolute top-2.5 left-2.5 z-30 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-white text-[10px] font-sans font-semibold uppercase tracking-widest shadow-xs">
              <span>{displayedSlide.pill}</span>
            </span>
          </div>

          {/* Bottom Active Progress Bar on Image Box */}
          <div className="absolute bottom-0 inset-x-0 h-1 bg-white/20 z-30 overflow-hidden">
            <div
              key={`mobile-progress-${activeIndex}`}
              className={cn(
                'h-full bg-forest dark:bg-sage transition-all',
                isPaused ? 'w-full' : 'animate-slide-progress'
              )}
              style={{
                animationDuration: `${speedMs}ms`,
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            />
          </div>
        </div>

        {/* ======================================================================= */}
        {/* REFINED EDITORIAL CARD BELOW THE RECTANGULAR IMAGE                      */}
        {/* ======================================================================= */}
        <div className="shrink-0 mt-1.5 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-surface/95 dark:bg-[#16221D]/95 backdrop-blur-sm border border-border/80 shadow-soft-md relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brass/40 to-transparent" />
          <div
            className={cn(
              'transition-all duration-300 ease-out will-change-[opacity,transform]',
              isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
            )}
          >
            {/* Collection Index & Pill Badge */}
            <div className="flex items-center justify-between gap-2 mb-0.5">
              <div className="flex items-center gap-1.5 text-[10px] font-sans font-semibold uppercase tracking-wider text-forest dark:text-sage">
                <span>Collection 0{displayedIndex + 1}</span>
                <span className="opacity-40">•</span>
                <span>{displayedSlide.pill}</span>
              </div>
              <span className="text-[10px] font-sans tabular-nums px-2 py-0.5 rounded-full bg-forest/10 dark:bg-sage/15 text-forest dark:text-sage border border-forest/15 dark:border-sage/25 shrink-0 font-semibold">
                0{displayedIndex + 1}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-lg sm:text-xl font-normal tracking-tight text-foreground leading-tight">
              {displayedSlide.title}
            </h1>

            {/* Subtitle / Description */}
            <p className="mt-0.5 text-xs text-muted-foreground font-sans font-normal leading-relaxed line-clamp-1 sm:line-clamp-2">
              {displayedSlide.subtitle}
            </p>

            {/* Key Sartorial Badges (Max 2 for mobile conciseness) */}
            <div className="mt-1 flex flex-wrap items-center gap-1">
              {displayedSlide.highlights.slice(0, 2).map((item, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md bg-surface-muted border border-border text-[10px] font-sans font-medium text-foreground/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-2 pt-1.5 border-t border-border/80 flex items-center gap-2">
            {/* Primary Explore Collection Button */}
            <Link
              href={displayedSlide.exploreRoute}
              className="flex-1 h-9 px-3 rounded-xl bg-forest hover:bg-forest/90 dark:bg-sage dark:text-forest-dark text-ivory font-sans text-[11px] uppercase tracking-wider font-semibold shadow-soft active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 whitespace-nowrap overflow-hidden"
            >
              <span className="truncate">Explore</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2] shrink-0" />
            </Link>

            {/* Enquire / Book Fitting */}
            <Link
              href="/contact"
              className="flex-1 h-9 px-3 rounded-xl border border-border bg-background hover:bg-surface-muted text-foreground font-sans text-[11px] uppercase tracking-wider font-semibold shadow-2xs active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 whitespace-nowrap overflow-hidden"
            >
              <Calendar className="w-3.5 h-3.5 text-forest dark:text-sage shrink-0" />
              <span className="truncate">Enquire</span>
            </Link>

            {/* Direct Phone Call Button */}
            <a
              href="tel:+918660451300"
              aria-label="Call Showroom"
              className="h-9 w-9 shrink-0 rounded-xl border border-border bg-background hover:bg-surface-muted flex items-center justify-center text-forest dark:text-sage transition-all active:scale-95 shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* BOTTOM ROW: COLLECTION SELECTOR CHIPS + SCROLL CUE                     */}
        {/* ======================================================================= */}
        <div className="shrink-0 mt-1.5 flex flex-col gap-1">
          {/* Quick Horizontal Collection Selector Chips */}
          <div
            ref={mobileChipsContainerRef}
            className="relative overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden -mx-3.5 px-3.5 flex items-center gap-1.5 py-0.5 scroll-smooth"
          >
            {HERO_COLLECTIONS.map((slide, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={slide.id}
                  ref={(el) => {
                    mobileChipRefs.current[idx] = el;
                  }}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-sans font-medium transition-all cursor-pointer border min-h-[30px] whitespace-nowrap',
                    isActive
                      ? 'bg-forest text-ivory dark:bg-sage dark:text-forest-dark border-transparent shadow-xs font-semibold scale-[1.02]'
                      : 'bg-surface text-foreground/80 hover:bg-surface-muted border-border'
                  )}
                >
                  <span className="text-[9px] font-mono opacity-70">0{idx + 1}</span>
                  <span>{slide.title}</span>
                </button>
              );
            })}
          </div>

          {/* Subtle Scroll Cue: Clickable and indicates more content below when scrolled */}
          <button
            type="button"
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              }
            }}
            className="hidden sm:flex items-center justify-center gap-1.5 py-0.5 text-[10px] font-sans text-muted-foreground/80 hover:text-foreground uppercase tracking-widest transition-colors cursor-pointer"
          >
            <span>Scroll to explore</span>
            <ChevronDown className="w-3 h-3 animate-bounce text-forest dark:text-sage" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DESKTOP LAYOUT (>= lg screens: 1024px+)                                */}
      {/* Cinematic Full-Bleed Photography with Face-Safe Per-Slide Positioning,     */}
      {/* Restrained Editorial Left Panel, and Low-Profile Collection Selector.     */}
      {/* ========================================================================= */}
      <section
        className="hidden lg:flex relative w-full min-h-[680px] h-[100svh] max-h-[1080px] flex-col justify-between overflow-hidden text-foreground select-none font-sans pt-20 sm:pt-24 pb-5"
        aria-label="Selection Textiles Collections Hero"
      >
        {/* FULL BACKGROUND IMAGE STACK WITH PER-SLIDE FOCAL POSITIONING */}
        <div className="absolute inset-0 w-full h-full bg-[#080B0A] select-none pointer-events-none overflow-hidden z-0">
          {HERO_COLLECTIONS.map((slide, idx) => {
            const isActive = idx === activeIndex;
            const isPrev = idx === prevIndex;

            return (
              <div
                key={slide.id}
                className={cn(
                  'absolute inset-0 w-full h-full will-change-[opacity]',
                  isActive ? 'z-20' : isPrev ? 'z-10' : 'z-0',
                  isActive
                    ? 'opacity-100 transition-opacity duration-1000 ease-in-out'
                    : isPrev
                    ? 'opacity-100'
                    : 'opacity-0'
                )}
              >
                <div
                  className={cn(
                    'relative w-full h-full overflow-hidden',
                    isActive && !isPaused && 'animate-hero-ken-burns'
                  )}
                >
                  <Image
                    src={slide.heroImage}
                    alt={`Selection Textiles — ${slide.title}`}
                    fill
                    priority={idx === 0}
                    sizes="100vw"
                    style={{ objectPosition: slide.desktopPosition || '75% 8%' }}
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}

          {/* STATIC UNIFIED RESTRAINED SCRIMS (Z-20) */}
          {/* Left subtle vignette to guarantee editorial text legibility */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-[58%] bg-gradient-to-r from-black/75 via-black/35 to-transparent pointer-events-none z-20" />
          {/* Bottom vignette to gently support bottom collection rail */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/25 to-transparent pointer-events-none z-20" />
          {/* Top soft linear vignette for transparent header legibility */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none z-20" />
          {/* Warm brass tint on left editorial zone */}
          <div className="absolute inset-y-0 left-0 w-[42%] bg-gradient-to-br from-brass/10 via-transparent to-transparent pointer-events-none z-20 mix-blend-soft-light" />
        </div>

        {/* FOREGROUND CONTENT & CONTROLS */}
        <Container size="wide" className="relative z-30 flex flex-col justify-between h-full gap-3">
          {/* TOP CLEARANCE AREA: Discreet Brand Indicator & Play/Pause */}
          <div className="pt-2 flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/95 font-sans text-[11px] uppercase tracking-wide-editorial font-medium shadow-soft-md">
              <span className="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" />
              <span>Selection Textiles • Bengaluru • Est. 1979</span>
            </div>

            {/* PAUSE / PLAY BUTTON */}
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/35 hover:bg-black/55 backdrop-blur-md border border-white/15 text-white/90 font-sans text-[11px] uppercase tracking-wider font-semibold shadow-2xs transition-all cursor-pointer active:scale-95"
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 fill-current text-sage" />
                  <span>Play</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 fill-current text-white/90" />
                  <span>Pause</span>
                </>
              )}
            </button>
          </div>

          {/* CENTER CONTENT: REFINED EDITORIAL INFORMATION PANEL (Positioned on Left) */}
          <div className="max-w-lg xl:max-w-xl my-auto py-1">
            <div className="relative p-5 sm:p-6 lg:p-7 rounded-[1.25rem] hero-panel-accent backdrop-blur-xl border border-white/20 border-l-[3px] border-l-brass shadow-soft-xl text-white overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,241,232,0.08),transparent_55%)] pointer-events-none" />
              <div
                className={cn(
                  'relative transition-all duration-300 ease-out will-change-[opacity,transform]',
                  isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                )}
              >
                {/* Category Pill Tag */}
                <div className="text-[11px] font-sans font-semibold uppercase tracking-widest-editorial text-brass-light mb-2 flex items-center gap-2">
                  <span>Collection 0{displayedIndex + 1}</span>
                  <span className="opacity-40">•</span>
                  <span className="text-white/90">{displayedSlide.pill}</span>
                </div>

                {/* Editorial Collection Title */}
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight leading-[1.08] drop-shadow-md text-balance">
                  {displayedSlide.title}
                </h1>

                {/* Subtitle / Lead */}
                <p className="mt-2 text-xs sm:text-sm text-white/90 font-sans font-normal leading-relaxed max-w-lg line-clamp-2">
                  {displayedSlide.subtitle}
                </p>

                {/* Key Sartorial Badges (Strictly max 3) */}
                <div className="mt-3 flex flex-wrap items-center gap-1.5 sm:gap-2">
                  {displayedSlide.highlights.slice(0, 3).map((item, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-xs border border-white/15 text-[11px] font-sans text-white/90 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTONS & PREV/NEXT ARROWS */}
              <div className="relative mt-4 pt-1 flex flex-wrap items-center gap-2.5">
                <Link
                  href={displayedSlide.exploreRoute}
                  className="h-10 sm:h-11 px-5 sm:px-6 rounded-xl bg-forest hover:bg-forest/90 dark:bg-sage dark:text-forest-dark text-ivory font-sans text-xs uppercase tracking-wide-editorial font-semibold shadow-soft hover:shadow-soft-md active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-white/15"
                >
                  <span>Explore {displayedSlide.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
                </Link>

                <Link
                  href="/contact"
                  className="h-10 sm:h-11 px-4 sm:px-5 rounded-xl border border-white/35 hover:border-brass/60 bg-white/8 hover:bg-white/15 text-white font-sans text-xs uppercase tracking-wide-editorial font-medium shadow-2xs transition-all flex items-center justify-center backdrop-blur-sm active:scale-[0.98]"
                >
                  <span>Book Fitting</span>
                </Link>

                {/* Quick Next/Prev Controls */}
                <div className="flex items-center gap-1.5 ml-auto">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous slide"
                    className="w-9 h-9 rounded-full border border-white/25 hover:border-white/50 bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                  >
                    <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="w-9 h-9 rounded-full border border-white/25 hover:border-white/50 bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                  >
                    <ChevronRight className="w-4 h-4 stroke-[2.2]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW: ARCHITECTURAL EDITORIAL COLLECTION SELECTOR */}
          <div className="w-full pb-1">
            <div className="rounded-[1.15rem] bg-black/45 backdrop-blur-xl border border-white/20 p-2 grid grid-cols-7 gap-1.5 shadow-soft-xl">
              {HERO_COLLECTIONS.map((slide, idx) => {
                const isActive = idx === activeIndex;

                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => handleSelect(idx)}
                    className={cn(
                      'group relative flex items-center gap-2 p-1.5 rounded-xl text-left transition-all duration-300 ease-out cursor-pointer overflow-hidden',
                      isActive
                        ? 'bg-white/20 border border-white/35 shadow-xs'
                        : 'hover:bg-white/10 border border-transparent text-white/70 hover:text-white'
                    )}
                  >
                    {/* Compact Image Thumbnail */}
                    <div className="relative w-9 h-9 rounded-lg overflow-hidden shrink-0 bg-black/40 border border-white/25 ring-1 ring-white/10">
                      <Image
                        src={slide.heroImage}
                        alt={slide.title}
                        fill
                        sizes="32px"
                        style={{ objectPosition: slide.desktopPosition || 'center center' }}
                        className="object-cover"
                      />
                    </div>

                    {/* Collection Index & Title */}
                    <div className="min-w-0 flex-1 hidden xl:block">
                      <span className="text-[9px] font-mono text-white/60 block leading-none">
                        0{idx + 1}
                      </span>
                      <span
                        className={cn(
                          'text-xs font-sans truncate block mt-0.5',
                          isActive ? 'text-white font-semibold' : 'text-white/80 font-medium'
                        )}
                      >
                        {slide.title}
                      </span>
                    </div>

                    {/* Active Underline Progress Bar */}
                    {isActive && (
                      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-white/25 overflow-hidden">
                        <div
                          key={`progress-${activeIndex}`}
                          className={cn(
                            'h-full bg-white transition-all',
                            isPaused ? 'w-full' : 'animate-slide-progress'
                          )}
                          style={{
                            animationDuration: `${speedMs}ms`,
                            animationPlayState: isPaused ? 'paused' : 'running',
                          }}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
