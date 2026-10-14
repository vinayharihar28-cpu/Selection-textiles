'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowUpRight,
  Scissors,
  Building2,
  CheckCircle2,
  Shirt,
  ShieldCheck,
  Briefcase,
  Users,
} from 'lucide-react';

export function TwoDivisionsSection() {
  return (
    <section
      aria-label="Two Core Business Divisions"
      className="relative py-20 sm:py-28 bg-background border-b border-border/80 text-foreground overflow-hidden"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 dark:bg-sage/15 border border-forest/20 dark:border-sage/30 text-forest dark:text-sage font-sans text-xs uppercase tracking-widest font-semibold mb-3">
            <span>Two Core Divisions</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground font-normal tracking-tight text-balance leading-tight">
            Serving Individuals & Organisations
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-muted font-sans leading-relaxed text-balance max-w-2xl font-light">
            Selection Textiles is built to meet two distinct client journeys—crafted individually for private menswear patrons, and scaled systematically for institutional enterprises.
          </p>
        </div>

        {/* ======================================================================= */}
        {/* DIVISION 1: MEN'S WEAR & DESIGNER COLLECTIONS                          */}
        {/* Editorial composition: Text Left, Rich Photography Right                */}
        {/* ======================================================================= */}
        <div className="mb-16 sm:mb-24 p-8 sm:p-12 lg:p-14 rounded-[2.5rem] bg-surface dark:bg-[#15201B] border border-border/80 dark:border-white/10 shadow-soft-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-forest/10 dark:bg-sage/15 border border-forest/20 text-forest dark:text-sage flex items-center justify-center">
                  <Scissors className="w-4 h-4" />
                </span>
                <span className="text-xs uppercase tracking-widest font-sans font-semibold text-forest dark:text-sage">
                  Division 01 • Private Menswear
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-foreground font-normal leading-tight">
                Men&apos;s Clothing, Fabrics & Bespoke Tailoring
              </h3>

              <p className="text-sm sm:text-base text-foreground/80 font-sans leading-relaxed">
                For gentlemen seeking distinguished attire for business, celebrations, and milestone occasions. We pair India&apos;s most respected mill cloths with in-house bespoke pattern cutting and hand-finished detailing.
              </p>

              {/* Offerings Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-sans">
                <div className="p-3.5 rounded-xl bg-surface-muted/60 dark:bg-black/20 border border-border/60">
                  <p className="font-semibold text-foreground flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-forest dark:text-sage" />
                    <span>Fine Suits & Blazers</span>
                  </p>
                  <p className="text-muted leading-relaxed">
                    Single- and double-breasted jackets, tuxedos, and 3-piece ensembles crafted from pure wool and linen.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-muted/60 dark:bg-black/20 border border-border/60">
                  <p className="font-semibold text-foreground flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-forest dark:text-sage" />
                    <span>Ethnic & Wedding Regalia</span>
                  </p>
                  <p className="text-muted leading-relaxed">
                    Royal sherwanis, Jodhpuri bandhgalas, Modi coats, and kurta pyjamas for grooms and celebratory occasions.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-muted/60 dark:bg-black/20 border border-border/60">
                  <p className="font-semibold text-foreground flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-forest dark:text-sage" />
                    <span>Branded Mill Cloths</span>
                  </p>
                  <p className="text-muted leading-relaxed">
                    Raymond, Siyarams, Linen Club, Mafatlal, Ramraj, Uthayam, and curated Italian contemporary imports.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-muted/60 dark:bg-black/20 border border-border/60">
                  <p className="font-semibold text-foreground flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-forest dark:text-sage" />
                    <span>Custom Tailoring Service</span>
                  </p>
                  <p className="text-muted leading-relaxed">
                    Anatomical measurement, personalized fitting sessions, and garment handover at our showroom.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <Link href="/collections">
                  <Button
                    variant="primary"
                    size="md"
                    className="gap-2 bg-forest hover:bg-forest/90 text-ivory dark:bg-sage dark:text-forest-dark"
                  >
                    <span>Explore Men&apos;s Collections</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/tailoring">
                  <Button variant="outline" size="md">
                    Our Tailoring Process
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Photography */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-soft-lg border border-border/80 bg-surface-muted">
                <Image
                  src="/images/products/bespoke-suits-model-one.png"
                  alt="Selection Textiles Bespoke Menswear"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-surface/90 dark:bg-black/80 backdrop-blur-md border border-border/60 text-xs font-sans text-foreground flex items-center justify-between">
                  <span className="font-medium">Handcrafted Bespoke Tailoring</span>
                  <span className="text-[11px] text-muted">B.V.K. Iyengar Road</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* DIVISION 2: CORPORATE & WORKPLACE UNIFORMS                              */}
        {/* Contrasting composition: Professional Imagery Left, Narrative Right     */}
        {/* ======================================================================= */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-[2.5rem] bg-[#F4F1EA] dark:bg-[#101915] border border-[#E0D8CB] dark:border-white/10 shadow-soft-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Photography */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-soft-lg border border-[#D5CBB9] dark:border-white/15 bg-surface-muted">
                <Image
                  src="/images/corporate/corporate-suits-blazers.png?v=20261014"
                  alt="Selection Textiles Corporate Uniforms"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-surface/90 dark:bg-black/80 backdrop-blur-md border border-border/60 text-xs font-sans text-foreground flex items-center justify-between">
                  <span className="font-medium">11 Institutional Sectors</span>
                  <span className="text-[11px] text-muted">Bulk Wholesale & Sizing</span>
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-forest/10 dark:bg-sage/15 border border-forest/20 text-forest dark:text-sage flex items-center justify-center">
                  <Building2 className="w-4 h-4" />
                </span>
                <span className="text-xs uppercase tracking-widest font-sans font-semibold text-forest dark:text-sage">
                  Division 02 • Institutional Fleets
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-foreground font-normal leading-tight">
                Corporate, Industrial & Workplace Uniforms
              </h3>

              <p className="text-sm sm:text-base text-foreground/80 font-sans leading-relaxed">
                For HR managers, procurement directors, and business owners outfitting professional teams. We engineer uniform fleets across 11 documented industry sectors, ensuring brand cohesion, fabric longevity, and workplace mobility.
              </p>

              {/* Sector Coverage Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-sans">
                <div className="p-3.5 rounded-xl bg-surface/80 dark:bg-surface/10 border border-border/60">
                  <p className="font-semibold text-foreground flex items-center gap-1.5 mb-1">
                    <Briefcase className="w-3.5 h-3.5 text-forest dark:text-sage" />
                    <span>Executive & Sales Uniforms</span>
                  </p>
                  <p className="text-muted leading-relaxed">
                    Wrinkle-resistant corporate suits, formal shirts, and trousers with computerized logo embroidery.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-surface/80 dark:bg-surface/10 border border-border/60">
                  <p className="font-semibold text-foreground flex items-center gap-1.5 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-forest dark:text-sage" />
                    <span>Workforce & Security Apparel</span>
                  </p>
                  <p className="text-muted leading-relaxed">
                    Heavy-duty poly-viscose security uniforms, technician boiler suits, and facility housekeeping tunics.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-surface/80 dark:bg-surface/10 border border-border/60">
                  <p className="font-semibold text-foreground flex items-center gap-1.5 mb-1">
                    <Shirt className="w-3.5 h-3.5 text-forest dark:text-sage" />
                    <span>Branded Polos & Tees</span>
                  </p>
                  <p className="text-muted leading-relaxed">
                    Bio-washed combed cotton round-neck t-shirts, piqué knit polo shirts, and winter corporate hoodies.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-surface/80 dark:bg-surface/10 border border-border/60">
                  <p className="font-semibold text-foreground flex items-center gap-1.5 mb-1">
                    <Users className="w-3.5 h-3.5 text-forest dark:text-sage" />
                    <span>Hospitality & Healthcare</span>
                  </p>
                  <p className="text-muted leading-relaxed">
                    Heat-resistant double-breasted chef coats, culinary aprons, doctor consultation coats, and lab wear.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <Link href="/corporate">
                  <Button
                    variant="primary"
                    size="md"
                    className="gap-2 bg-forest hover:bg-forest/90 text-ivory dark:bg-sage dark:text-forest-dark"
                  >
                    <span>Explore Corporate Uniforms</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact?requirement=corporate_uniforms">
                  <Button variant="outline" size="md">
                    Request Corporate Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
