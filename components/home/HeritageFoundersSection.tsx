'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, MapPin, Award, CheckCircle2, Users, Sparkles } from 'lucide-react';

export function HeritageFoundersSection() {
  return (
    <section
      aria-label="About Selection Textiles and Founder Heritage"
      className="relative py-16 sm:py-24 lg:py-28 bg-[#FAF7F2] dark:bg-[#121815] border-t border-b border-[#E8E1D5] dark:border-white/10 text-foreground overflow-hidden"
    >
      <Container size="wide">
        <div className="max-w-6xl mx-auto flex flex-col gap-10 lg:gap-14">
          {/* ======================================================================= */}
          {/* TOP: EDITORIAL HEADER & BRAND STORY                                   */}
          {/* ======================================================================= */}
          <div className="flex flex-col gap-5 max-w-3xl">
            {/* Restrained Heritage Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest/10 dark:bg-sage/15 border border-forest/20 dark:border-sage/30 text-forest dark:text-sage font-sans text-xs uppercase tracking-widest font-semibold w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-sage animate-pulse" />
              <span>Our Heritage · Established 1979 · Bengaluru</span>
            </div>

            {/* Strong Editorial Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-normal tracking-tight leading-tight">
              Four Decades of Fabric Authenticity, Tailoring & Trust
            </h2>

            {/* Narrative Paragraphs */}
            <p className="text-sm sm:text-base text-foreground/85 font-sans leading-relaxed">
              In 1979, <strong className="text-foreground font-semibold">Sri Nakode S. Krishnan</strong> founded Selection Textiles on the historic trade artery of <strong className="text-foreground font-semibold">B.V.K. Iyengar Road, Bengaluru</strong>. Drawing upon deep, hands-on experience in textile suiting and shirting, he established the business on foundational principles: direct sourcing from India&apos;s finest mills, uncompromising cloth authenticity, and trusted, personal service for every patron.
            </p>

            <p className="text-sm sm:text-base text-foreground/85 font-sans leading-relaxed">
              In 2002, after completing his B.Com, <strong className="text-foreground font-semibold">Nakode K. Subramani</strong> joined the family enterprise. Under his stewardship, Selection Textiles broadened its traditional fabric trade into full-scale <strong className="text-foreground font-semibold">bespoke menswear tailoring</strong>, ceremonial occasionwear, and institutional <strong className="text-foreground font-semibold">corporate uniform supply</strong>—now outfitting executive teams, hospitality venues, healthcare establishments, and industrial workforces across Karnataka.
            </p>
          </div>

          {/* ======================================================================= */}
          {/* CENTER: DUAL LEADERSHIP PORTRAIT CARDS                                 */}
          {/* Mr. Nakode S. Krishnan (Founder) & Mr. Nakode K. Subramani (Successor)  */}
          {/* ======================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* ------------------------------------------------------------------- */}
            {/* CARD 1: MR. NAKODE S. KRISHNAN (FOUNDER 1979)                        */}
            {/* ------------------------------------------------------------------- */}
            <div className="relative rounded-3xl p-5 sm:p-6 bg-surface dark:bg-[#17221E] border border-border/80 dark:border-white/10 shadow-soft-lg flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start group transition-all duration-300 hover:shadow-soft-xl hover:border-forest/30 dark:hover:border-sage/30">
              {/* Archival Portrait Frame */}
              <div className="relative w-36 h-44 sm:w-40 sm:h-52 shrink-0 rounded-2xl overflow-hidden bg-gradient-to-b from-[#F2ECE1] via-[#E8E0D1] to-[#DDD4C2] dark:from-[#1E2C26] dark:via-[#19241F] dark:to-[#141D19] border-2 border-[#D5C9B5] dark:border-white/15 shadow-soft">
                <Image
                  src="/images/founders/founder_krishnan.jpg"
                  alt="Mr. Nakode S. Krishnan - Founder of Selection Textiles"
                  fill
                  sizes="(max-width: 640px) 144px, 160px"
                  loading="eager"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-forest/90 dark:bg-sage/90 text-white dark:text-forest-dark text-[10px] font-sans font-semibold uppercase tracking-wider backdrop-blur-xs shadow-xs">
                  Est. 1979
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1 text-center sm:text-left justify-between h-full min-h-[190px]">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-sans text-forest dark:text-sage font-semibold uppercase tracking-wider mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Founder & Visionary Merchant</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-foreground font-medium">
                    Mr. Nakode S. Krishnan
                  </h3>
                  <p className="text-xs font-sans text-muted leading-relaxed mt-2.5">
                    Pioneered Selection Textiles on B.V.K. Iyengar Road. Built four decades of trusted goodwill through direct mill relationships, uncompromised yardage integrity, and authentic suiting and shirting fabrics.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/60 dark:border-white/10 flex items-center justify-between text-[11px] font-sans text-muted">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-forest dark:text-sage" />
                    <span>B.V.K. Iyengar Rd</span>
                  </span>
                  <span className="font-medium text-foreground">
                    First Generation Founder
                  </span>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------------- */}
            {/* CARD 2: MR. NAKODE K. SUBRAMANI (MANAGING PARTNER 2002)              */}
            {/* ------------------------------------------------------------------- */}
            <div className="relative rounded-3xl p-5 sm:p-6 bg-surface dark:bg-[#17221E] border border-border/80 dark:border-white/10 shadow-soft-lg flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start group transition-all duration-300 hover:shadow-soft-xl hover:border-forest/30 dark:hover:border-sage/30">
              {/* Archival Portrait Frame */}
              <div className="relative w-36 h-44 sm:w-40 sm:h-52 shrink-0 rounded-2xl overflow-hidden bg-gradient-to-b from-[#F2ECE1] via-[#E8E0D1] to-[#DDD4C2] dark:from-[#1E2C26] dark:via-[#19241F] dark:to-[#141D19] border-2 border-[#D5C9B5] dark:border-white/15 shadow-soft">
                <Image
                  src="/images/founders/successor_subramani.jpg"
                  alt="Mr. Nakode K. Subramani - Managing Partner of Selection Textiles"
                  fill
                  sizes="(max-width: 640px) 144px, 160px"
                  loading="eager"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-forest/90 dark:bg-sage/90 text-white dark:text-forest-dark text-[10px] font-sans font-semibold uppercase tracking-wider backdrop-blur-xs shadow-xs">
                  Joined 2002
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1 text-center sm:text-left justify-between h-full min-h-[190px]">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-sans text-forest dark:text-sage font-semibold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Managing Partner & Director</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-foreground font-medium">
                    Mr. Nakode K. Subramani
                  </h3>
                  <p className="text-xs font-sans text-muted leading-relaxed mt-2.5">
                    Joined in 2002 after completing his B.Com. Spearheaded the modern expansion into custom bespoke tailoring ateliers, ceremonial occasionwear, and institutional uniform supply outfitting 11 industry sectors.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/60 dark:border-white/10 flex items-center justify-between text-[11px] font-sans text-muted">
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-forest dark:text-sage" />
                    <span>B.Com • Commercial Lead</span>
                  </span>
                  <span className="font-medium text-foreground">
                    Second Generation Leadership
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================================= */}
          {/* BOTTOM: STATED VALUES RIBBON & ACTION CTAS                             */}
          {/* ======================================================================= */}
          <div className="pt-2 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-border/80 dark:border-white/10">
            {/* Core Values Ribbon */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[11px] uppercase tracking-wider font-sans font-semibold text-muted block">
                Stated Values & Core Principles
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Quality & Trust',
                  'Reliability & Accuracy',
                  'Branded Mill Fabrics',
                  'Custom In-House Tailoring',
                  'Direct Mill Provenance',
                ].map((val, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface dark:bg-[#16211C] border border-border/80 dark:border-white/10 text-xs font-sans text-foreground/90 shadow-2xs"
                  >
                    <CheckCircle2 className="w-3 h-3 text-forest dark:text-sage" />
                    <span>{val}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link href="/about">
                <Button
                  variant="primary"
                  size="md"
                  className="gap-2 bg-forest hover:bg-forest/90 text-ivory dark:bg-sage dark:text-forest-dark dark:hover:bg-sage/90 shadow-soft"
                >
                  <span>Discover Our Story</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="md">
                  Visit Showroom
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

