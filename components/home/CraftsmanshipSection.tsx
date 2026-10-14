'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import {
  Layers,
  Scissors,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Shirt,
  Ruler,
} from 'lucide-react';

const PRACTICAL_STRENGTHS = [
  {
    icon: Layers,
    title: 'Fabric Provenance & Mill Sourcing',
    description:
      'Direct sourcing relationships with India’s leading mills—including Raymond, Siyaram’s, Linen Club, Mafatlal, Ramraj, and Uthayam—as well as curated Italian contemporary wools and linens. Patrons receive guaranteed authentic, tested cloth bolts.',
  },
  {
    icon: Scissors,
    title: 'In-House Custom Tailoring & Drafting',
    description:
      'Master cutters draft individual paper patterns to client measurements. Every suit, blazer, sherwani, and formal trouser is shaped with attention to posture, shoulder slope, and natural chest balance.',
  },
  {
    icon: Shirt,
    title: 'Environment-Specific Material Selection',
    description:
      'Uniform fabrics are chosen based on real working environments: breathable high-cotton blends for humid floors, crease-resistant poly-viscose for travel and sales teams, and heavy-duty drill cloths for mechanical workshops.',
  },
  {
    icon: Ruler,
    title: 'Custom Sizing & Precise Fitting',
    description:
      'Whether tailoring a single ceremonial wedding sherwani or taking size runs across a corporate sales department, we ensure anatomical accuracy so every garment fits comfortably without requiring awkward adjustments.',
  },
  {
    icon: ShieldCheck,
    title: 'Stitching Quality & Seam Durability',
    description:
      'Industrial garments and tailored suits feature reinforced seam stitching, bar-tacked stress pockets, and colorfast thread dyes engineered to withstand repeated commercial laundry cycles without loss of shape.',
  },
  {
    icon: Clock,
    title: 'Uniform Branding & Delivery Coordination',
    description:
      'High-density computerized embroidery of corporate logos and heraldry applied with strict color pantone matching. Bulk orders are inspected, size-tagged, and dispatched according to agreed client timelines.',
  },
];

export function CraftsmanshipSection() {
  return (
    <section
      aria-label="Craftsmanship, Fabrics, and Service"
      className="relative py-20 sm:py-28 bg-[#FAF7F2] dark:bg-[#121815] border-b border-border/80 text-foreground overflow-hidden"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 dark:bg-sage/15 border border-forest/20 dark:border-sage/30 text-forest dark:text-sage font-sans text-xs uppercase tracking-widest font-semibold mb-3">
            <span>Operational Integrity</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground font-normal tracking-tight text-balance leading-tight">
            Craftsmanship, Sourcing & Service
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-muted font-sans leading-relaxed text-balance max-w-2xl font-light">
            How Selection Textiles delivers reliable value—grounded in verifiable textile knowledge, skilled master tailors, and systematic order fulfillment.
          </p>
        </div>

        {/* 6 Practical Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {PRACTICAL_STRENGTHS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-3xl bg-surface dark:bg-[#17221E] border border-border/80 dark:border-white/10 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-forest/10 dark:bg-sage/15 border border-forest/20 dark:border-sage/30 text-forest dark:text-sage flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  <h3 className="font-serif text-2xl text-foreground font-normal mb-2.5 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-foreground/75 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 dark:border-white/10 flex items-center justify-between text-xs font-sans text-muted">
                  <span className="font-mono text-[11px]">0{idx + 1}</span>
                  <span className="text-forest dark:text-sage font-medium">Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner linking to Tailoring & Corporate */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-surface dark:bg-[#16211C] border border-border/80 dark:border-white/10 shadow-soft max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-2xl text-foreground font-normal">
              Experience Our Cutting Counter in Bengaluru
            </h4>
            <p className="text-xs sm:text-sm text-muted font-sans mt-1 max-w-xl">
              Meet our master tailors at B.V.K. Iyengar Road to inspect running fabric bolts, discuss garment fit, or schedule a corporate uniform trial.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link href="/tailoring">
              <Button variant="outline" size="md">
                Tailoring Process
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="primary"
                size="md"
                className="gap-2 bg-forest hover:bg-forest/90 text-ivory dark:bg-sage dark:text-forest-dark"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
