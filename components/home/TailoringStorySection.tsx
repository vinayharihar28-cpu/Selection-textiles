'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TailoringStorySection() {
  const features = [
    {
      title: 'Fabric Selection',
      description: 'Choose from refined suiting, shirting and trouser fabrics.',
    },
    {
      title: 'Personal Measurements',
      description: 'Measurements shaped around your proportions and preferred fit.',
    },
    {
      title: 'Tailored Construction',
      description: 'Careful attention to structure, details and finishing.',
    },
    {
      title: 'Final Fitting',
      description: 'Final adjustments ensure the finished garment sits as intended.',
    },
  ];

  return (
    <section
      id="tailoring-story"
      aria-label="The Art of Tailoring — Where Fabric Becomes Form"
      className="relative w-full bg-ivory dark:bg-[#071714] text-foreground py-16 sm:py-24 lg:py-28 overflow-hidden transition-colors"
    >
      <Container size="wide">
        {/* ========================================================================= */}
        {/* DESKTOP ASYMMETRIC EDITORIAL LAYOUT (lg: 1024px+)                         */}
        {/* Inspired by Editorial Reference: Left Large Image + Right Detail + Copy   */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* LEFT COLUMN: Eyebrow + Main Heading + Large Vertical Tailoring Image */}
          <div className="col-span-5 xl:col-span-5 flex flex-col gap-6">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest-editorial font-sans font-medium text-forest dark:text-brass mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-brass" />
                <span>THE ART OF TAILORING</span>
              </div>

              {/* Display Headline with responsive clamp */}
              <h2 className="font-serif font-light text-forest-dark dark:text-ivory leading-[1.08] text-[clamp(2.5rem,3.8vw,3.75rem)] text-balance">
                Where Fabric <br />
                <span className="italic font-normal text-brass">Becomes Form</span>
              </h2>
            </div>

            {/* Large Vertical Tailoring Image */}
            <div className="group relative w-full aspect-[4/5] rounded-[28px] overflow-hidden bg-surface-muted shadow-soft-lg border border-sand/40 dark:border-forest-muted/50 mt-2">
              <Image
                src="/images/collections/suits-blazers.png"
                alt="Selection Textiles Tailoring Atelier — Full-Canvas Bespoke Suit Construction in Bengaluru"
                fill
                sizes="(max-width: 1280px) 42vw, 520px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/30 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity" />
              
              {/* Refined atelier badge overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-ivory/90 dark:bg-[#071714]/85 backdrop-blur-md border border-sand/50 dark:border-forest-muted text-foreground">
                <span className="text-[10px] uppercase tracking-widest font-sans font-semibold text-forest dark:text-brass block">
                  Bengaluru Atelier
                </span>
                <p className="font-serif text-sm text-foreground font-normal mt-0.5 leading-snug">
                  Artisan cutting counter & basted fitting discipline since 1979.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Smaller Upper Craftsmanship Image + Copy + Feature List + CTAs */}
          <div className="col-span-7 xl:col-span-7 flex flex-col gap-8 pt-4">
            {/* Smaller Upper Detail/Craftsmanship Image */}
            <div className="group relative w-full aspect-[16/10] rounded-[28px] overflow-hidden bg-surface-muted shadow-soft border border-sand/40 dark:border-forest-muted/50">
              <Image
                src="/images/products/made-to-measure-formal-shirt.png"
                alt="Selection Textiles Sartorial Craftsmanship — Single-Needle Seams, Collar Drafting and Artisan Tailoring Details"
                fill
                sizes="(max-width: 1280px) 58vw, 700px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/25 via-transparent to-transparent pointer-events-none opacity-50" />
              
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-ivory/90 dark:bg-[#071714]/85 backdrop-blur-md border border-sand/50 dark:border-forest-muted text-[11px] font-sans font-medium text-forest dark:text-ivory">
                Craftsmanship & Detail
              </div>
            </div>

            {/* Supporting Copy */}
            <div className="max-w-xl">
              <p className="font-sans text-base xl:text-lg text-charcoal/85 dark:text-ivory/85 leading-relaxed font-light">
                From the selection of fine fabrics to the final fitting, every garment is shaped around your style, proportions and occasion.
              </p>
            </div>

            {/* Minimal Two-Column Feature List */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 max-w-xl pt-2 border-t border-sand/40 dark:border-forest-muted/60">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-forest/10 dark:bg-brass/20 text-forest dark:text-brass flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base text-forest-dark dark:text-ivory font-medium leading-snug">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-xs text-charcoal/70 dark:text-ivory/70 mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <Link href="/tailoring">
                <Button
                  size="lg"
                  className="gap-2 bg-forest hover:bg-forest/90 text-ivory dark:bg-sage dark:text-forest-dark dark:hover:bg-sage/90 shadow-soft font-sans font-medium hover:scale-[1.02] transition-transform"
                >
                  <span>Explore Tailoring</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link href="/contact">
                <button
                  type="button"
                  className="h-12 px-7 text-xs uppercase tracking-widest-editorial font-sans font-medium rounded-lg border border-forest/30 dark:border-ivory/30 bg-transparent hover:bg-forest/5 dark:hover:bg-white/5 text-forest dark:text-ivory transition-all active:scale-[0.98]"
                >
                  Visit Showroom
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET LAYOUT (< lg: 1024px)                                     */}
        {/* Exact Requested Mobile Sequence:                                          */}
        {/* 1. Eyebrow -> 2. Heading -> 3. Supporting copy -> 4. Large image ->       */}
        {/* 5. Secondary image -> 6. Feature list -> 7. CTA buttons                   */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:hidden gap-6 sm:gap-8">
          {/* 1. Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest-editorial font-sans font-medium text-forest dark:text-brass">
            <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-brass" />
            <span>THE ART OF TAILORING</span>
          </div>

          {/* 2. Main Heading */}
          <h2 className="font-serif font-light text-forest-dark dark:text-ivory leading-[1.1] text-[clamp(2.1rem,6vw,3.25rem)] text-balance -mt-2">
            Where Fabric <br />
            <span className="italic font-normal text-brass">Becomes Form</span>
          </h2>

          {/* 3. Supporting Copy */}
          <p className="font-sans text-sm sm:text-base text-charcoal/85 dark:text-ivory/85 leading-relaxed font-light">
            From the selection of fine fabrics to the final fitting, every garment is shaped around your style, proportions and occasion.
          </p>

          {/* 4. Large Tailoring Image */}
          <div className="group relative w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-surface-muted shadow-soft border border-sand/40 dark:border-forest-muted/50 mt-1">
            <Image
              src="/images/collections/suits-blazers.png"
              alt="Selection Textiles Tailoring Atelier — Full-Canvas Bespoke Suit Construction in Bengaluru"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/30 via-transparent to-transparent pointer-events-none opacity-60" />
            
            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-ivory/90 dark:bg-[#071714]/85 backdrop-blur-md border border-sand/50 dark:border-forest-muted text-foreground">
              <span className="text-[10px] uppercase tracking-widest font-sans font-semibold text-forest dark:text-brass block">
                Bengaluru Atelier
              </span>
              <p className="font-serif text-xs text-foreground font-normal mt-0.5">
                Artisan cutting counter & basted fitting discipline since 1979.
              </p>
            </div>
          </div>

          {/* 5. Secondary Craftsmanship Image */}
          <div className="group relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-surface-muted shadow-soft border border-sand/40 dark:border-forest-muted/50">
            <Image
              src="/images/products/made-to-measure-formal-shirt.png"
              alt="Selection Textiles Sartorial Craftsmanship — Single-Needle Seams and Artisan Tailoring Details"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-ivory/90 dark:bg-[#071714]/85 backdrop-blur-md border border-sand/50 dark:border-forest-muted text-[10px] font-sans font-medium text-forest dark:text-ivory">
              Craftsmanship & Detail
            </div>
          </div>

          {/* 6. Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-sand/40 dark:border-forest-muted/60">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-forest/10 dark:bg-brass/20 text-forest dark:text-brass flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-sm sm:text-base text-forest-dark dark:text-ivory font-medium leading-snug">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-xs text-charcoal/70 dark:text-ivory/70 mt-0.5 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 7. CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <Link href="/tailoring" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto justify-center gap-2 bg-forest hover:bg-forest/90 text-ivory dark:bg-sage dark:text-forest-dark dark:hover:bg-sage/90 shadow-soft font-sans font-medium"
              >
                <span>Explore Tailoring</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto h-12 px-7 text-xs uppercase tracking-widest-editorial font-sans font-medium rounded-lg border border-forest/30 dark:border-ivory/30 bg-transparent hover:bg-forest/5 dark:hover:bg-white/5 text-forest dark:text-ivory transition-all text-center"
              >
                Visit Showroom
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
