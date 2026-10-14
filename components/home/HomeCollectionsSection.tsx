'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Sparkles, Scissors, Layers, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { HERO_COLLECTIONS, HeroCollectionSlide } from '@/lib/data/hero-collections';

type CategoryFilter = 'all' | 'tailoring' | 'ceremonial' | 'fabrics-corporate';

interface FilterOption {
  id: CategoryFilter;
  label: string;
  count: number;
}

const FILTERS: FilterOption[] = [
  { id: 'all', label: 'All Collections', count: 7 },
  { id: 'tailoring', label: 'Bespoke Tailoring & Suits', count: 3 },
  { id: 'ceremonial', label: 'Traditional & Weddings', count: 2 },
  { id: 'fabrics-corporate', label: 'Fabrics & Enterprise', count: 2 },
];

export function HomeCollectionsSection() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const filteredCollections = HERO_COLLECTIONS.filter((item) => {
    if (activeFilter === 'tailoring') {
      return item.id === 'fine-suits' || item.id === 'custom-tailorings';
    }
    if (activeFilter === 'ceremonial') {
      return item.id === 'ethnics' || item.id === 'weddings-collections' || item.id === 'indo-western';
    }
    if (activeFilter === 'fabrics-corporate') {
      return item.id === 'fabrics' || item.id === 'corporate-uniforms';
    }
    return true;
  });

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-background border-t border-b border-border/60 text-foreground overflow-hidden">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 dark:bg-sage/15 border border-forest/20 dark:border-sage/30 text-forest dark:text-sage font-sans text-xs uppercase tracking-widest font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-sage" />
            <span>Curated Menswear Catalog</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground font-light tracking-tight text-balance leading-tight">
            Our Master Collections
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-muted font-sans leading-relaxed text-balance max-w-2xl font-light">
            Every collection is built on genuine mill provenance, precise pattern drafting, and four decades of bespoke tailoring craft in Bengaluru.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 select-none">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={cn(
                  'px-4 py-2 rounded-full text-xs font-sans font-semibold transition-all cursor-pointer shadow-xs',
                  activeFilter === f.id
                    ? 'bg-forest dark:bg-sage text-white dark:text-forest-dark shadow-soft scale-[1.02]'
                    : 'bg-surface dark:bg-[#16211C] border border-border/80 dark:border-white/10 text-muted hover:text-foreground hover:bg-surface-muted'
                )}
              >
                <span>{f.label}</span>
                <span className="ml-1.5 opacity-70">({f.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Collections Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredCollections.map((col, idx) => (
            <div
              key={col.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-surface dark:bg-[#16211C] border border-border/80 dark:border-white/10 overflow-hidden shadow-soft hover:shadow-soft-xl transition-all duration-300"
            >
              {/* Card Image Stage */}
              <div className="relative w-full h-72 sm:h-80 overflow-hidden bg-black/10">
                <Image
                  src={col.heroImage}
                  alt={`Selection Textiles — ${col.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-sans font-bold bg-white/90 dark:bg-black/80 backdrop-blur-md text-forest dark:text-sage border border-white/40 shadow-xs">
                    {col.pill}
                  </span>
                </div>

                {/* Bottom Title on Image */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <span className="text-[10px] font-mono tracking-widest text-white/80 block uppercase">
                    Division 0{idx + 1}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight mt-0.5">
                    {col.title}
                  </h3>
                </div>
              </div>

              {/* Card Content & Details */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                    {col.subtitle}
                  </p>

                  {/* Highlights Bullet Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {col.highlights.slice(0, 3).map((item, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-surface-muted dark:bg-white/5 border border-border/60 dark:border-white/10 text-[11px] font-sans text-foreground/90 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-5 border-t border-border/70 dark:border-white/10 flex items-center justify-between">
                  <Link
                    href={col.exploreRoute}
                    className="w-full h-11 rounded-xl bg-forest hover:bg-forest/90 dark:bg-sage dark:text-forest-dark text-white font-sans text-xs uppercase tracking-wider font-bold shadow-soft flex items-center justify-center gap-2 group-hover:scale-[1.01] transition-all"
                  >
                    <span>Explore {col.title}</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Comprehensive Advisory Banner */}
        <div className="mt-16 sm:mt-20 p-8 rounded-3xl bg-forest text-white dark:bg-[#131F19] dark:border dark:border-white/15 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-soft-lg">
          <div>
            <span className="text-[11px] font-sans uppercase tracking-widest text-sage/90 font-bold block mb-1">
              Private Fitting & Fabric Consultation
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Looking for a custom ensemble or institutional consultation?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-sans mt-1.5 max-w-2xl font-light">
              Visit our Bengaluru showroom on B.V.K. Iyengar Road for personal fabric inspection, made-to-measure fitting, or bulk uniform sampling.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="h-11 px-6 rounded-xl bg-white text-forest hover:bg-ivory font-sans text-xs uppercase tracking-wider font-bold shadow-soft flex items-center gap-2 transition-all"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tailoring"
              className="h-11 px-6 rounded-xl border border-white/30 hover:bg-white/10 text-white font-sans text-xs uppercase tracking-wider font-semibold transition-all flex items-center"
            >
              <span>Tailoring Process</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
