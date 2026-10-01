import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Building2,
  Wrench,
  Stethoscope,
  UtensilsCrossed,
  GraduationCap,
  Shield,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

export const metadata = {
  title: 'Our Corporate Clients & Sectors | Selection Textiles Bengaluru',
  description:
    'Corporate and workplace uniform portfolio of Selection Textiles Bengaluru. Supplying corporate suits, embroidered shirts, chef coats, medical coats, and technician workwear across diverse industries.',
};

const CLIENT_SECTORS = [
  {
    icon: Building2,
    sector: 'Corporate Enterprises & Financial Institutions',
    apparelSupplied: 'Executive suits, blazers, and formal shirts & trousers with embroidered company logos',
    standards: 'Wrinkle-resistant fabrics, sharp tailored cut, all-day comfort',
  },
  {
    icon: Wrench,
    sector: 'Automotive & Industrial Service Centers',
    apparelSupplied: 'Technician workwear, boiler suits, utility shirts, and reinforced cargo trousers',
    standards: 'Heavy-duty cotton drill, bar-tacked stress points, grease resistance',
  },
  {
    icon: Stethoscope,
    sector: 'Healthcare, Clinics & Diagnostic Laboratories',
    apparelSupplied: 'Doctor coats, medical lab aprons, nurse scrubs, and clinical staff tunics',
    standards: 'Antimicrobial finish, bleach tolerant, autoclave-friendly, lint-free',
  },
  {
    icon: UtensilsCrossed,
    sector: 'Hospitality, Hotels & Commercial Kitchens',
    apparelSupplied: 'Executive chef coats, banquet service uniforms, and front-of-house attire',
    standards: 'Heat-resistant cotton drill, stain release finish, elegant presentation',
  },
  {
    icon: GraduationCap,
    sector: 'Educational Institutions & Universities',
    apparelSupplied: 'Institutional crested blazers, student formalwear, laboratory aprons, and sports kits',
    standards: 'High colorfastness, durable washing durability, precision crest embroidery',
  },
  {
    icon: Shield,
    sector: 'Security Agencies & Facility Management',
    apparelSupplied: 'Authoritative security uniforms, guard epaulette shirts, and housekeeping utility sets',
    standards: 'High-tensile poly-viscose cloth, crisp collar shapes, long service lifespan',
  },
];

export default function ClientsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section
        variant="muted"
        eyebrow="Selection Textiles • Corporate Portfolio"
        title="Client Sectors & Workplace Programs."
        description="Selection Textiles serves institutional and corporate organizations with specialized workplace uniform programs. From executive boardroom fleets to heavy-duty automotive technician workwear, we deliver standardized quality and custom-embroidered brand consistency."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/contact">
            <Button variant="primary" size="sm" className="gap-2 shadow-soft">
              <span>Request a Corporate Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/corporate">
            <Button variant="outline" size="sm">
              View All 11 Uniform Categories
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" size="sm">
              Discuss Your Requirement
            </Button>
          </Link>
        </div>
      </Section>

      {/* Sectors Grid */}
      <Section
        variant="default"
        eyebrow="Workplace Coverage"
        title="Industries Outfitted"
        description="Our uniform division engineers garments specifically calibrated to the operational demands of each industry."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CLIENT_SECTORS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.sector}
                className="p-7 sm:p-8 rounded-2xl border border-border bg-surface shadow-soft flex flex-col justify-between hover:border-accent/40 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface-muted border border-border flex items-center justify-center text-accent mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-foreground font-normal mb-2">
                    {item.sector}
                  </h3>

                  <div className="pt-3 border-t border-border/60 text-xs font-sans mb-3">
                    <span className="text-[10px] uppercase tracking-wider text-muted block mb-1">
                      Apparel Supplied
                    </span>
                    <p className="text-foreground leading-relaxed">
                      {item.apparelSupplied}
                    </p>
                  </div>

                  <div className="text-xs font-sans">
                    <span className="text-[10px] uppercase tracking-wider text-muted block mb-1">
                      Quality Standards
                    </span>
                    <p className="text-muted leading-relaxed">
                      {item.standards}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <Link
                    href="/contact"
                    className="text-xs text-accent hover:text-accent/80 font-medium inline-flex items-center gap-1 font-sans"
                  >
                    <span>Discuss Requirement</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Guarantees */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl border border-border bg-surface-muted shadow-soft">
          <Badge variant="accent" size="sm" className="mb-2">
            Enterprise Assurance
          </Badge>
          <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-6">
            Institutional Supply Standards
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs font-sans">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-foreground block mb-0.5">High-Density Logo Embroidery</span>
                <p className="text-muted leading-relaxed">In-house computerized embroidery ensuring exact Pantone and brand insignia replication.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-foreground block mb-0.5">Commercial Wash Durability</span>
                <p className="text-muted leading-relaxed">Selected fabrics withstand institutional laundering without pilling or color loss.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-foreground block mb-0.5">Timely Wholesale Fulfillment</span>
                <p className="text-muted leading-relaxed">Systematic manufacturing schedules ensuring predictable on-time dispatch for enterprise fleets.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Quote Banner */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl border border-border bg-surface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-soft">
          <div>
            <h4 className="font-serif text-2xl text-foreground font-normal">
              Request a Corporate Quote
            </h4>
            <p className="text-xs text-muted font-sans mt-1">
              Connect with our corporate uniforms department in Bengaluru for customized samples and bulk tier pricing.
            </p>
          </div>
          <Link href="/contact" className="shrink-0 w-full sm:w-auto">
            <Button variant="primary" size="md" className="w-full sm:w-auto gap-2">
              <span>Request a Corporate Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
