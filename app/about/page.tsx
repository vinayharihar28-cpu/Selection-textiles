import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Scissors, Layers, Building2, MapPin } from 'lucide-react';

export const metadata = {
  title: 'About Selection Textiles | Bengaluru Est. 1979 • Retail, Wholesale, Tailoring & Uniforms',
  description:
    'About Selection Textiles Bengaluru. Established in 1979 by Mr. Nakode S Krishnan. Specializing in textile retail, wholesale fabrics, made-to-measure tailoring, and corporate uniforms.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <Section
        variant="muted"
        eyebrow="Bengaluru • Established 1979"
        title="About Selection Textiles."
        description="Established in Bengaluru in 1979, Selection Textiles is a dedicated textile house and made-to-measure tailoring supplier. Operating across textile retail, textile wholesale, suiting & shirting, made-to-measure tailoring, and corporate/workplace uniforms."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/collections">
            <Button variant="primary" size="sm">
              Explore Collections
            </Button>
          </Link>
          <Link href="/heritage">
            <Button variant="outline" size="sm">
              Our Heritage Timeline
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" size="sm">
              Visit Bengaluru Showroom
            </Button>
          </Link>
        </div>
      </Section>

      {/* Core Business Divisions */}
      <Section
        variant="default"
        eyebrow="Business Operations"
        title="Our Primary Operating Divisions"
        description="Selection Textiles serves individual tailoring clients, wholesale textile buyers, and institutional corporate partners."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl border border-border bg-surface shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-muted border border-border flex items-center justify-center text-accent mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-foreground font-normal mb-2">
                Textile Retail & Wholesale
              </h3>
              <p className="text-xs text-muted font-sans leading-relaxed">
                Extensive collection of suiting, shirting, and trouser fabrics from leading domestic mills including Raymond, Siyarams, Linen Club, Mafatlal, Ramraj, and Uthayam, alongside curated contemporary Italian cloth.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/60">
              <Link href="/fabrics" className="text-xs text-accent hover:underline font-medium inline-flex items-center gap-1 font-sans">
                <span>Explore Fabrics</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-surface shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-muted border border-border flex items-center justify-center text-accent mb-5">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-foreground font-normal mb-2">
                Made-to-Measure Tailoring
              </h3>
              <p className="text-xs text-muted font-sans leading-relaxed">
                Full-service tailoring for Suits & Blazers, Sherwanis, Modi Coats & Jackets, Shirts & Trousers, Waistcoats, and Men&apos;s Kurta Pyjama. Each garment is drafted to client measurements with custom fitting.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/60">
              <Link href="/tailoring" className="text-xs text-accent hover:underline font-medium inline-flex items-center gap-1 font-sans">
                <span>Tailoring Process</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-surface shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-muted border border-border flex items-center justify-center text-accent mb-5">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-foreground font-normal mb-2">
                Corporate Uniform Supplier
              </h3>
              <p className="text-xs text-muted font-sans leading-relaxed">
                Complete uniform programs across 11 industry categories, including executive suits, embroidered formal shirts & trousers, polo t-shirts, hoodies, chef coats, medical coats, and technician uniforms.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/60">
              <Link href="/corporate" className="text-xs text-accent hover:underline font-medium inline-flex items-center gap-1 font-sans">
                <span>Corporate Programs</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Showroom & Location */}
      <Section variant="surface" className="py-12 sm:py-16">
        <div className="p-8 sm:p-12 rounded-3xl border border-border bg-surface shadow-soft flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <Badge variant="accent" size="sm" className="mb-3">
              Bengaluru Showroom
            </Badge>
            <h3 className="font-serif text-3xl sm:text-4xl text-foreground font-normal">
              Visit Selection Textiles
            </h3>
            <div className="flex items-start gap-2.5 mt-3 text-xs sm:text-sm text-muted font-sans leading-relaxed">
              <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <p>
                #16-17, &ldquo;D.Rangaiah Complex&rdquo;, B.V.K. Iyengar Road, Bengaluru – 560053, Karnataka, India
              </p>
            </div>
            <p className="text-xs text-muted font-sans mt-2">
              Phone: +91-98446 75222 • Landline: +91-080-22258982 • Email: selection.textiles@gmail.com
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact">
              <Button variant="primary" size="md">
                Contact & Directions
              </Button>
            </Link>
            <Link href="/collections">
              <Button variant="outline" size="md">
                Browse Collections
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
