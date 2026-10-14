'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Briefcase,
  Shield,
  Wrench,
  UtensilsCrossed,
  Stethoscope,
  Building,
  Car,
  Activity,
  ArrowUpRight,
  Phone,
  CheckCircle2,
} from 'lucide-react';

const CORPORATE_SECTORS = [
  {
    title: 'Sales & Executive Teams',
    description: 'Corporate suits, blazers, and formal shirts with computerized company insignia.',
    icon: Briefcase,
    category: 'Corporate Offices & Retail',
  },
  {
    title: 'Security & Campus Guards',
    description: 'Epaulette shirts, heavy-duty poly-viscose trousers, and coordinated regalia.',
    icon: Shield,
    category: 'Security & Facility Protection',
  },
  {
    title: 'Technical & Engineering',
    description: 'Industrial boiler suits, cargo trousers, and heavy drill utility shirts.',
    icon: Wrench,
    category: 'Manufacturing & Workshop',
  },
  {
    title: 'Hospitality & Culinary Teams',
    description: 'Double-breasted executive chef coats, kitchen aprons, and hotel staff tunics.',
    icon: UtensilsCrossed,
    category: 'Hotels, Resorts & Restaurants',
  },
  {
    title: 'Healthcare & Clinical Staff',
    description: 'Bleach-tolerant doctor coats, clinical aprons, and hospital technician wear.',
    icon: Stethoscope,
    category: 'Hospitals, Clinics & Labs',
  },
  {
    title: 'Automotive Showrooms & Service',
    description: 'Branded customer-service shirts and heavy-duty mechanical bay gear.',
    icon: Car,
    category: 'Dealerships & Service Hubs',
  },
  {
    title: 'Facility Management & Housekeeping',
    description: 'Stain-resistant housekeeping sets and high-mobility maintenance tunics.',
    icon: Building,
    category: 'Commercial Properties',
  },
  {
    title: 'Events & Corporate Sportswear',
    description: 'Piqué knit polo shirts, bio-washed cotton round-neck tees, and team tracksuits.',
    icon: Activity,
    category: 'Conferences & Team Programs',
  },
];

export function CorporateExpertiseSection() {
  return (
    <section
      aria-label="Corporate Uniform Sectors & Institutional Outfitting"
      className="relative py-20 sm:py-28 bg-[#F4F1EA] dark:bg-[#0E1612] border-b border-[#E0D8CB] dark:border-white/10 text-foreground overflow-hidden"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 dark:bg-sage/15 border border-forest/20 dark:border-sage/30 text-forest dark:text-sage font-sans text-xs uppercase tracking-widest font-semibold mb-3">
            <span>Enterprise Uniform Supply</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground font-normal tracking-tight text-balance leading-tight">
            Institutional Uniform Fleets Across 11 Sectors
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-muted font-sans leading-relaxed text-balance max-w-2xl font-light">
            Engineered for brand alignment, employee comfort, and commercial wash endurance. Selection Textiles supports organisations with reliable wholesale delivery and size customization.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {CORPORATE_SECTORS.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface dark:bg-[#16221D] border border-border/80 dark:border-white/10 shadow-soft flex flex-col justify-between hover:border-forest/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-forest/10 dark:bg-sage/15 border border-forest/20 text-forest dark:text-sage flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-mono text-muted uppercase tracking-wider">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase tracking-wider text-forest dark:text-sage font-sans font-semibold block mb-1">
                    {sector.category}
                  </span>

                  <h3 className="font-serif text-xl text-foreground font-medium mb-2 leading-snug">
                    {sector.title}
                  </h3>

                  <p className="text-xs text-muted font-sans leading-relaxed">
                    {sector.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-border/60 dark:border-white/10">
                  <Link
                    href={`/contact?requirement=corporate_uniforms&sector=${encodeURIComponent(sector.title)}`}
                    className="text-[11px] font-sans text-forest dark:text-sage hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    <span>Enquire Sector</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Value Strip */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-surface dark:bg-[#141F1A] border border-border/80 dark:border-white/10 shadow-soft max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-sans">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-forest dark:text-sage shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground text-sm">Computerized Logo Embroidery</p>
              <p className="text-muted mt-1 leading-relaxed">
                Precision pantone-matched crests and insignias applied in-house with colorfast industrial threads.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-forest dark:text-sage shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground text-sm">Standard Sizing & Made-to-Measure</p>
              <p className="text-muted mt-1 leading-relaxed">
                Available in full standard size runs (S to 5XL) or tailored measurement sessions for leadership tiers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-forest dark:text-sage shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground text-sm">Pan-Karnataka Scheduled Delivery</p>
              <p className="text-muted mt-1 leading-relaxed">
                Batch fulfillment inspected, packed by department, and dispatched reliably to your facility.
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Direct Action Banner */}
        <div className="mt-10 p-8 sm:p-10 rounded-3xl bg-forest dark:bg-[#111C16] text-white border border-forest-dark/40 dark:border-white/10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 shadow-soft-lg">
          <div>
            <span className="text-[11px] font-sans uppercase tracking-widest text-sage font-bold block mb-1">
              Procurement & HR Concierge
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Request Samples or an Institutional Uniform Quotation
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-sans mt-1 max-w-xl font-light">
              Connect with our corporate team in Bengaluru to discuss fabric swatches, sizing sessions, and wholesale pricing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link href="/contact?requirement=corporate_uniforms">
              <Button
                variant="primary"
                size="md"
                className="gap-2 bg-white text-forest hover:bg-ivory dark:bg-sage dark:text-forest-dark font-semibold shadow-soft"
              >
                <span>Request Corporate Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
            <a
              href="tel:+9108022258982"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-xl border border-white/30 hover:bg-white/10 text-white font-sans text-xs uppercase tracking-wider font-semibold transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call 080-22258982</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
