import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  MessageSquare,
  Layers,
  Shirt,
  Ruler,
  Scissors,
  CheckCircle2,
  ArrowUpRight,
  MapPin,
  Phone,
} from 'lucide-react';

export const metadata = {
  title: 'Made-to-Measure Tailoring Process | Selection Textiles Bengaluru',
  description:
    'Experience made-to-measure tailoring at Selection Textiles Bengaluru. Established 1979. From initial consultation and fabric selection to precision fitting and final garment.',
};

const TAILORING_STEPS = [
  {
    num: '01',
    step: 'Consultation',
    icon: MessageSquare,
    title: 'Consultation',
    subtitle: 'Understanding Your Requirement & Occasion',
    description:
      'We begin with a personal consultation to understand your aesthetic preference, upcoming occasion (wedding, business, festive, or everyday wear), posture nuances, and personal style.',
  },
  {
    num: '02',
    step: 'Fabric Selection',
    icon: Layers,
    title: 'Fabric Selection',
    subtitle: 'Choosing from Mill Archives & Cloth Curations',
    description:
      'Explore running fabrics from renowned brands such as Raymond, Siyarams, Linen Club, Mafatlal, Ramraj, and Italian contemporary collections. Feel cloth weights, drape, and texture firsthand.',
  },
  {
    num: '03',
    step: 'Garment Selection',
    icon: Shirt,
    title: 'Garment Selection',
    subtitle: 'Silhouettes, Lapels, Collars & Details',
    description:
      'Select your desired silhouette: Suits & Blazers, Sherwanis, Modi Coats & Jackets, Shirts & Trousers, Waistcoats, or Men&apos;s Kurta Pyjama. Finalize lapel styles, button stances, pocket welts, and linings.',
  },
  {
    num: '04',
    step: 'Fitting',
    icon: Ruler,
    title: 'Fitting',
    subtitle: 'Postural Balance & Anatomical Calibration',
    description:
      'Detailed measurements and custom fitting sessions ensure the garment contours naturally to your anatomy. The shoulder line, chest ease, and waist suppression are balanced for effortless comfort.',
  },
  {
    num: '05',
    step: 'Finishing',
    icon: Scissors,
    title: 'Finishing',
    subtitle: 'Artisanal Needlework & Structural Details',
    description:
      'Master craftsmen execute internal canvassing, hand-sewn buttonholes, seam pressing, and fine detailing to give the garment structural integrity and enduring shape.',
  },
  {
    num: '06',
    step: 'Final Garment',
    icon: CheckCircle2,
    title: 'Final Garment',
    subtitle: 'Handover & Sartorial Excellence',
    description:
      'The finished made-to-measure garment is inspected, hand-steamed, and presented for your final trial, ready for your milestone event or daily executive presence.',
  },
];

export default function TailoringPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section
        variant="muted"
        eyebrow="Selection Textiles • Craftsmanship Since 1979"
        title="Made-to-Measure Tailoring."
        description="Made-to-measure tailoring is a collaboration between client, fabric, and cutter. At Selection Textiles in Bengaluru, we guide you through every step of crafting garments tailored to your personal measurements."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/contact">
            <Button variant="primary" size="md" className="gap-2 shadow-soft">
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="md">
              Visit the Showroom
            </Button>
          </Link>
          <Link href="/collections">
            <Button variant="ghost" size="md">
              View Silhouettes
            </Button>
          </Link>
        </div>
      </Section>

      {/* 6 Documented Tailoring Steps */}
      <Section
        variant="default"
        eyebrow="The 6-Step Journey"
        title="Our Made-to-Measure Methodology"
        description="From your initial visit to the final garment handover, our disciplined process ensures an immaculate fit."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TAILORING_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-7 sm:p-8 rounded-2xl border border-border bg-surface shadow-soft flex flex-col justify-between hover:border-accent/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="font-serif text-3xl sm:text-4xl text-accent font-light">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-surface-muted border border-border flex items-center justify-center text-muted">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>

                  <span className="text-[10px] tracking-widest uppercase text-muted font-sans font-medium block mb-1">
                    Step {step.num} • {step.step}
                  </span>
                  <h3 className="font-serif text-2xl text-foreground font-normal mb-1">
                    {step.title}
                  </h3>
                  <span className="text-xs text-accent font-sans block mb-3 font-medium">
                    {step.subtitle}
                  </span>

                  <p className="text-xs text-muted font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <span className="text-[11px] text-muted font-sans">
                    Handcrafted in Bengaluru
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Showroom CTA Banner */}
        <div className="mt-14 p-8 sm:p-12 rounded-3xl border border-border bg-surface-muted shadow-soft flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <Badge variant="accent" size="sm" className="mb-2">
              Bengaluru Showroom
            </Badge>
            <h4 className="font-serif text-2xl sm:text-3xl text-foreground font-normal">
              Book a Consultation or Visit the Showroom
            </h4>
            <p className="text-xs sm:text-sm text-muted font-sans mt-2 max-w-xl leading-relaxed">
              Visit our showroom at #16-17, &ldquo;D.Rangaiah Complex&rdquo;, B.V.K. Iyengar Road, Bengaluru – 560053. Discover running cloth swatches and discuss made-to-measure tailoring with our team.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-sans text-muted">
              <span className="flex items-center gap-1.5 text-foreground">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                B.V.K. Iyengar Road, Bengaluru
              </span>
              <span className="flex items-center gap-1.5 text-foreground">
                <Phone className="w-3.5 h-3.5 text-accent" />
                +91-98446 75222 / 080-22258982
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="primary" size="md" className="w-full sm:w-auto gap-2">
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="md" className="w-full sm:w-auto">
                Visit the Showroom
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
