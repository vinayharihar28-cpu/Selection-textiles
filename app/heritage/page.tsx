import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, CheckCircle2, Building2, User, Layers } from 'lucide-react';

export const metadata = {
  title: 'Our Heritage Since 1979 | Selection Textiles Bengaluru',
  description:
    'The documented history of Selection Textiles Bengaluru. Incorporated in 1979 by Mr. Nakode S Krishnan, and expanded in 2005 under Mr. Nakode K Subramani into corporate and workplace uniforms.',
};

export default function HeritagePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section
        variant="muted"
        eyebrow="Bengaluru Heritage • Established 1979"
        title="Our Heritage."
        description="Selection Textiles was established in 1979 in Bengaluru. Over the decades, the house has evolved from foundational textile trade into a premier destination for made-to-measure tailoring and corporate workplace uniforms."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/collections">
            <Button variant="primary" size="sm">
              Explore Collections
            </Button>
          </Link>
          <Link href="/fabrics">
            <Button variant="outline" size="sm">
              View Fabric Archives
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" size="sm">
              Visit Showroom
            </Button>
          </Link>
        </div>
      </Section>

      {/* Documented Historical Timeline (Rule 20) */}
      <Section
        variant="default"
        eyebrow="Documented Milestones"
        title="The Story in Timeline"
        description="Representing the documented founding and leadership evolution of Selection Textiles."
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {/* Milestone 1: 1979 */}
          <div className="relative pl-8 sm:pl-12 border-l-2 border-accent">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background" />

            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="font-serif text-3xl sm:text-4xl text-accent font-light">
                1979
              </span>
              <Badge variant="subtle" size="sm">
                Founding & Incorporation
              </Badge>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-3">
              Incorporated by Mr. Nakode S Krishnan
            </h3>

            <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed mb-4">
              Selection Textiles was incorporated in Bengaluru by Mr. Nakode S Krishnan. Establishing its foundational operations in textile retail, wholesale cloth, and fine suiting and shirting trade, the company quickly became a respected merchant for quality fabrics across Karnataka.
            </p>

            <div className="p-4 rounded-xl border border-border bg-surface text-xs font-sans text-muted flex items-center gap-3">
              <User className="w-4 h-4 text-accent shrink-0" />
              <span>Founder: Mr. Nakode S Krishnan • Bengaluru, Karnataka</span>
            </div>
          </div>

          {/* Milestone 2: 2005 */}
          <div className="relative pl-8 sm:pl-12 border-l-2 border-accent">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background" />

            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="font-serif text-3xl sm:text-4xl text-accent font-light">
                2005
              </span>
              <Badge variant="accent" size="sm">
                Expansion & Corporate Supply
              </Badge>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-3">
              Strategic Expansion under Mr. Nakode K Subramani
            </h3>

            <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed mb-4">
              Mr. Nakode K Subramani became involved with new directions in textiles and established Selection Textiles as a key corporate and workplace uniform supplier. Under this leadership, the business broadened into specialized institutional apparel, made-to-measure tailoring programs, and bulk enterprise outfitting.
            </p>

            <div className="p-4 rounded-xl border border-border bg-surface text-xs font-sans text-muted flex items-center gap-3">
              <Building2 className="w-4 h-4 text-accent shrink-0" />
              <span>Leadership: Mr. Nakode K Subramani • Corporate & Uniform Directions</span>
            </div>
          </div>

          {/* Today: Digital Showroom & Continuation */}
          <div className="relative pl-8 sm:pl-12 border-l-2 border-border/80">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-surface border-4 border-accent" />

            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="font-serif text-3xl sm:text-4xl text-foreground font-light">
                Today
              </span>
              <Badge variant="subtle" size="sm">
                Digital Showroom & Tailoring
              </Badge>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-3">
              Comprehensive Textile House & Modern Showroom
            </h3>

            <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed mb-4">
              Continuing its operational commitment to textile retail, wholesale fabrics, made-to-measure tailoring, and corporate workplace uniform supply, Selection Textiles presents its offerings through a polished digital showroom with 3D garment visualization.
            </p>

            <div className="p-4 rounded-xl border border-border bg-surface text-xs font-sans text-muted flex items-center gap-3">
              <Layers className="w-4 h-4 text-accent shrink-0" />
              <span>Textile Retail • Wholesale • Made-to-Measure Tailoring • Corporate Uniforms</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Documented Brands & Italian Collections Spotlight */}
      <Section
        variant="surface"
        eyebrow="Cloth Lineage"
        title="Documented Brand Relationships"
        description="We carry officially documented domestic textile brands alongside exclusive Italian collections."
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          {['Raymond', 'Siyarams', 'Linen Club', 'Mafatlal', 'Ramraj', 'Uthayam'].map((brand) => (
            <div
              key={brand}
              className="p-5 rounded-xl border border-border bg-surface shadow-soft flex flex-col items-center justify-center"
            >
              <span className="font-serif text-lg text-foreground font-normal">
                {brand}
              </span>
              <span className="text-[10px] text-muted font-sans uppercase tracking-wider mt-1">
                Documented Brand
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 rounded-2xl border border-border bg-surface-muted flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans">
          <div>
            <span className="font-medium text-foreground block">
              Italian Contemporary & Italian Wear Collections
            </span>
            <span className="text-muted">
              Curated collections in shirting, trouser fabrics, blazers, and suitings.
            </span>
          </div>
          <Link href="/fabrics" className="shrink-0 text-accent font-medium hover:underline inline-flex items-center gap-1">
            <span>Explore Fabrics</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Location Verification Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl border border-border bg-surface shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-2xl text-foreground font-normal">
              Visit Our Bengaluru Showroom
            </h4>
            <p className="text-xs text-muted font-sans mt-1">
              #16-17, &ldquo;D.Rangaiah Complex&rdquo;, B.V.K. Iyengar Road, Bengaluru – 560053
            </p>
          </div>
          <Link href="/contact" className="shrink-0 w-full sm:w-auto">
            <Button variant="primary" size="md" className="w-full sm:w-auto">
              Contact & Directions
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
