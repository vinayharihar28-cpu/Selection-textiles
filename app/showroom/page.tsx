import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Box, Eye, ArrowUpRight, MapPin, Phone, Layers, Scissors } from 'lucide-react';

export const metadata = {
  title: 'Showroom & Atelier | Selection Textiles Bengaluru',
  description:
    'Experience the historic showroom of Selection Textiles Bengaluru. Established in 1979 on B.V.K. Iyengar Road. Made-to-measure tailoring, fine cloth archives, and bespoke consultation.',
};

export default function ShowroomPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section
        variant="muted"
        eyebrow="Selection Textiles • Bengaluru Showroom"
        title="The Bengaluru Showroom & Atelier."
        description="More than four decades of fabric mastery and made-to-measure tailoring on B.V.K. Iyengar Road. Explore running bolt archives or schedule a private fitting consultation."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/collections">
            <Button variant="primary" size="sm">
              Explore Collections
            </Button>
          </Link>
          <Link href="/fabrics">
            <Button variant="outline" size="sm">
              Fabric Archives
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" size="sm">
              Visit Bengaluru Showroom
            </Button>
          </Link>
        </div>
      </Section>

      {/* Atelier Feature Stage */}
      <Section variant="default">
        <div className="relative aspect-[16/9] min-h-[440px] rounded-3xl border border-accent/40 bg-surface-muted flex flex-col items-center justify-center text-center p-8 overflow-hidden shadow-soft">
          <div className="relative z-10 max-w-xl flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl border border-accent/40 bg-surface flex items-center justify-center text-accent mb-5 shadow-soft">
              <Box className="w-8 h-8" />
            </div>

            <Badge variant="accent" size="sm" className="mb-3">
              Bespoke Fitting Atelier
            </Badge>

            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-light mb-3">
              Craftsmanship & Made-to-Measure
            </h2>

            <p className="text-xs sm:text-sm text-muted font-sans mb-6 leading-relaxed">
              Experience personalized tailoring consultations with our master cutters. Inspect cloth rolls in natural light, assess shoulder structure, and commission custom suits, kurtas, or corporate uniforms.
            </p>

            <Link href="/contact" className="mb-6">
              <Button variant="primary" size="md" className="gap-2 shadow-soft">
                <span>Book In-Store Fitting</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-surface text-foreground text-xs font-sans shadow-soft">
                <Scissors className="w-3.5 h-3.5 text-accent" />
                <span>32 Anatomic Measurements</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-surface text-foreground text-xs font-sans shadow-soft">
                <Layers className="w-3.5 h-3.5 text-accent" />
                <span>Full Floating Canvas</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-surface text-foreground text-xs font-sans shadow-soft">
                <Scissors className="w-3.5 h-3.5 text-accent" />
                <span>Made-to-Measure Cut</span>
              </div>
            </div>
          </div>
        </div>

        {/* Physical Showroom Coordinates */}
        <div className="mt-14 p-8 sm:p-12 rounded-3xl border border-border bg-surface shadow-soft flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <Badge variant="subtle" size="sm" className="mb-2">
              Physical Showroom
            </Badge>
            <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-normal">
              Visit Us in Bengaluru
            </h3>
            <div className="flex items-start gap-2.5 mt-3 text-xs sm:text-sm text-muted font-sans">
              <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                #16-17, &ldquo;D.Rangaiah Complex&rdquo;, B.V.K. Iyengar Road,<br />
                Bengaluru – 560053, Karnataka, India
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2 text-xs font-sans text-muted">
              <Phone className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>+91-86604 51300 / 080-22258982 / 080-41264992</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="primary" size="md" className="w-full sm:w-auto">
                Contact & Directions
              </Button>
            </Link>
            <Link href="/tailoring" className="w-full sm:w-auto">
              <Button variant="outline" size="md" className="w-full sm:w-auto">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
