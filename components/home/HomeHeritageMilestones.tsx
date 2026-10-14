'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  Building2,
  Users,
  Award,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';

interface MilestoneItem {
  year: string;
  badge: string;
  title: string;
  description: string;
  highlight: string;
}

const MILESTONES: MilestoneItem[] = [
  {
    year: '1979',
    badge: 'Founding Inception',
    title: 'Incorporation by Mr. Nakode S. Krishnan',
    description:
      'Selection Textiles opened its doors in the historic textile trade district of B.V.K. Iyengar Road in Bengaluru. The founding vision was clear: provide patrons with 100% genuine, mill-authentic cloth backed by uncompromising trade ethics.',
    highlight: 'Bengaluru merchant establishment & wholesale cloth trade',
  },
  {
    year: '1990s',
    badge: 'Direct Mill Alliances',
    title: 'Formal Partnerships with India’s Premier Textile Mills',
    description:
      'Secured direct mill partnerships with Raymond, Siyaram’s, Linen Club, Mafatlal, Ramraj, and Uthayam. Selection Textiles established one of the region’s largest running bolt inventories for suiting, shirting, and traditional handlooms.',
    highlight: 'Over 400+ running bolt variations across wool, linen, and pure silk',
  },
  {
    year: '2005',
    badge: 'Sartorial Evolution',
    title: 'Strategic Expansion under Mr. Nakode K. Subramani',
    description:
      'Mr. Nakode K. Subramani expanded the house into high-precision made-to-measure tailoring, ceremonial wedding ensembles, and institutional workforce uniforms across 11 key industry sectors.',
    highlight: 'Master tailor in-house atelier & institutional uniform supply',
  },
  {
    year: 'Present',
    badge: '45+ Years of Trust',
    title: 'Multi-Generational Excellence & Modern Innovation',
    description:
      'Today, Selection Textiles serves thousands of families and enterprise clients across Karnataka. Combining master pattern cutting with modern digital consultation and bespoke showroom appointments.',
    highlight: 'Over 10,000+ tailored ensembles & multi-generational patron trust',
  },
];

const HERITAGE_STATS = [
  { value: '1979', label: 'Established in Bengaluru', note: 'Historic B.V.K. Iyengar Road' },
  { value: '45+', label: 'Years of Merchant Trust', note: 'Uncompromised fabric integrity' },
  { value: '400+', label: 'Running Fabric Variations', note: 'Raymond, Linen Club, Siyarams' },
  { value: '11', label: 'Corporate Sectors Outfitted', note: 'Executive, Healthcare, Hospitality' },
];

export function HomeHeritageMilestones() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#F7F4EC] dark:bg-[#101714] border-t border-b border-[#E8E1D5] dark:border-white/10 text-foreground overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest/5 dark:bg-sage/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brass/5 dark:bg-brass/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 dark:bg-sage/15 border border-forest/20 text-forest dark:text-sage font-sans text-xs uppercase tracking-widest font-semibold mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-forest dark:text-sage" />
            <span>Documented Lineage • Est. 1979</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground font-normal tracking-tight text-balance leading-tight">
            Our Heritage & Milestones
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-muted font-sans leading-relaxed text-balance max-w-2xl font-light">
            Tracing four decades of sartorial evolution in Bengaluru — from foundational cloth merchant roots on B.V.K. Iyengar Road to bespoke master tailoring and enterprise apparel.
          </p>
        </div>

        {/* 4-Stat Heritage Metric Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 max-w-5xl mx-auto">
          {HERITAGE_STATS.map((stat, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 rounded-2xl bg-white/80 dark:bg-[#16211C] border border-border/80 dark:border-white/10 shadow-xs text-center backdrop-blur-sm"
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest dark:text-sage font-light block leading-none">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-sans font-bold text-foreground block mt-2">
                {stat.label}
              </span>
              <span className="text-[11px] font-sans text-muted block mt-1">
                {stat.note}
              </span>
            </div>
          ))}
        </div>

        {/* Chronological Timeline Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-10 border-l-2 border-forest/30 dark:border-sage/30 space-y-12 sm:space-y-14">
            {MILESTONES.map((m, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-forest dark:bg-sage border-4 border-[#F7F4EC] dark:border-[#101714] shadow-sm group-hover:scale-125 transition-transform" />

                {/* Content Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-[#16211C] border border-border/70 dark:border-white/10 shadow-soft hover:shadow-soft-lg transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-forest dark:text-sage">
                        {m.year}
                      </span>
                      <Badge variant="subtle" size="sm" className="bg-forest/10 text-forest dark:bg-sage/15 dark:text-sage text-[10px]">
                        {m.badge}
                      </Badge>
                    </div>

                    <span className="text-[11px] font-sans text-muted flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-forest dark:text-sage" />
                      <span>Documented Milestone</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-foreground font-medium tracking-tight mb-2.5">
                    {m.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed mb-4">
                    {m.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-[#FAF7F2] dark:bg-[#131C18] border border-border/60 dark:border-white/10 text-xs font-sans text-foreground/90 flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-forest dark:text-sage shrink-0" />
                    <span className="font-medium">{m.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heritage Callout Card with Direct Showroom Link */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#16211C] border border-border/80 dark:border-white/10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-soft">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-forest/10 dark:bg-sage/15 flex items-center justify-center text-forest dark:text-sage shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-sans font-bold text-foreground uppercase tracking-wider">
                Visit the Historic Bengaluru Showroom
              </h4>
              <p className="text-xs text-muted font-sans mt-0.5">
                #16-17, D.Rangaiah Complex, B.V.K. Iyengar Road, Bengaluru – 560053
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="h-11 px-6 rounded-xl bg-forest hover:bg-forest/90 dark:bg-sage dark:text-forest-dark text-white font-sans text-xs uppercase tracking-wider font-bold shadow-soft flex items-center gap-2"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
