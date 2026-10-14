import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Briefcase,
  Shirt,
  Layers,
  Shield,
  Stethoscope,
  Wrench,
  UtensilsCrossed,
  Home,
  Flame,
  Activity,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { VISUAL_ASSETS } from '@/lib/data/assets';
import { CorporateEnquiryForm } from '@/components/corporate/CorporateEnquiryForm';

export const metadata = {
  title: 'Corporate Uniform Collection & Workplace Outfitting | Selection Textiles',
  description:
    'Documented corporate uniform supplier in Bengaluru. Outfitting enterprises across 11 categories: corporate suits, formal shirts & trousers with embroidered logos, polo t-shirts, chef coats, medical coats, security, and technician uniforms.',
};

const UNIFORM_CATEGORIES = [
  {
    code: 'A',
    title: 'Corporate Suits & Blazers',
    icon: Briefcase,
    subtitle: 'Executive Leadership & Front-Line Ambassadorship',
    description:
      'Standardized and made-to-measure executive suits and blazers engineered for daily boardroom presence. Crafted in high-recovery, wrinkle-resistant performance wool blends with structured internal canvassing.',
    tags: ['Executive Suiting', 'Boardroom Fleets', 'Wrinkle Resistant'],
    assetKey: 'corp-suits-blazers',
  },
  {
    code: 'B',
    title: 'Formal Shirts & Trousers',
    icon: Shirt,
    subtitle: 'With High-Density Embroidered Company Logos',
    description:
      'Tailored corporate shirting and trousers featuring precision in-house computerized embroidery of your corporate insignia. Easy-care long-staple cotton blends designed for all-day crispness.',
    tags: ['Embroidered Logos', 'Easy-Care Cotton', 'Coordinated Fit'],
    assetKey: 'corp-formal-shirts-trousers',
  },
  {
    code: 'C',
    title: 'Polo Neck T-Shirts',
    icon: Layers,
    subtitle: 'Premium Combed Cotton Piqué',
    description:
      'Heavyweight 2-ply combed cotton piqué polo shirts with reinforced collar ribs and two-button pearlized plackets. Colorfast dyed to preserve corporate branding through commercial washing cycles.',
    tags: ['Piqué Knit', 'Custom Dye Match', 'Casual Corporate'],
    assetKey: 'corp-polo-neck-tshirts',
  },
  {
    code: 'D',
    title: 'Hoodies',
    icon: Flame,
    subtitle: 'Winter & Tech Workplace Layering',
    description:
      'Branded brushed fleece hoodies and zip-up sweatshirts. Engineered for modern tech offices, startup teams, outdoor operations, and corporate promotional merchandise.',
    tags: ['Brushed Fleece', 'Corporate Monogram', 'Thermal Comfort'],
    assetKey: 'corp-tech-winter-hoodies',
  },
  {
    code: 'E',
    title: 'Round Neck Cotton T-Shirts',
    icon: Shirt,
    subtitle: '100% Super-Combed Bio-Washed Cotton',
    description:
      'Soft-hand round neck tees for events, everyday team casuals, promotional campaigns, and institutional logistics personnel. Breathable, durable, and shrink-resistant.',
    tags: ['100% Cotton', 'Bio-Washed', 'Screen / Embroidered'],
    assetKey: 'corp-round-neck-cotton-tshirts',
  },
  {
    code: 'F',
    title: 'Sportswear & Tracksuits',
    icon: Activity,
    subtitle: 'Athletic Squads & Active Workplace Programs',
    description:
      'Performance moisture-wicking active tracksuits, training jackets, and sports tees. Built with breathable stretch fabrics for institutional sports teams and corporate fitness events.',
    tags: ['Moisture-Wicking', 'Stretch Recovery', 'Teamwear'],
    assetKey: 'corp-sportswear-tracksuits',
  },
  {
    code: 'G',
    title: 'Chef Coats',
    icon: UtensilsCrossed,
    subtitle: 'Commercial Culinary & Kitchen Uniforms',
    description:
      'Double-breasted executive chef jackets and kitchen uniforms crafted from heat-resistant, high-density cotton drill. Designed for culinary safety, breathability, and professional kitchen presence.',
    tags: ['Heat-Resistant', 'Cotton Drill', 'Double Breasted'],
    assetKey: 'corp-chef-coats',
  },
  {
    code: 'H',
    title: 'Housekeeping Uniforms',
    icon: Home,
    subtitle: 'Hospitality & Facility Maintenance',
    description:
      'Durable, flexible utility tunics, trousers, and apron sets for hotel housekeeping teams and commercial facility management staff. Stain-resistant and easy to launder.',
    tags: ['Stain Resistant', 'High Mobility', 'Hospitality Grade'],
    assetKey: 'corp-housekeeping-uniforms',
  },
  {
    code: 'I',
    title: 'Security Uniforms',
    icon: Shield,
    subtitle: 'Authoritative Guard & Security Regalia',
    description:
      'Crisp collared security shirts, heavy-duty trousers, epaulettes, and coordinated badges. Built with high-tensile fabric for law enforcement, corporate campus, and residential security details.',
    tags: ['Heavy-Duty Poly-Viscose', 'Epaulette Ready', 'Authoritative Cut'],
    assetKey: 'corp-security-guard-uniforms',
  },
  {
    code: 'J',
    title: 'Lab & Doctor Coats',
    icon: Stethoscope,
    subtitle: 'Healthcare, Clinical & Laboratory Apparel',
    description:
      'Lint-free medical lab coats, doctor consultation aprons, and hospital technician wear. Bleach-tolerant, autoclave-friendly, and cleanly tailored with deep instrument pockets.',
    tags: ['Antimicrobial Finish', 'Bleach Resistant', 'Clinical Grade'],
    assetKey: 'corp-doctor-lab-coats',
  },
  {
    code: 'K',
    title: 'Technician Uniforms',
    icon: Wrench,
    subtitle: 'Automotive & Industrial Service Environments',
    description:
      'Heavy-duty boiler suits, cargo trousers, and utility shirts tailored for automotive workshops, mechanical service stations, manufacturing floors, and engineering service centers.',
    tags: ['Heavy Drill Cloth', 'Bar-Tacked Reinforcement', 'Automotive & Service'],
    assetKey: 'corp-technician-boiler-suits',
  },
];

export default function CorporatePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section
        variant="muted"
        eyebrow="Selection Textiles • Corporate & Workplace Division"
        title="Corporate Uniform Collection."
        description="Selection Textiles is an officially established corporate and workplace uniform supplier in Bengaluru. We provide comprehensive uniform programs across 11 documented categories, engineered for corporate identity, durative wash-cycles, and wearer comfort."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/contact">
            <Button variant="primary" size="md" className="gap-2 shadow-soft">
              <span>Request a Corporate Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
          <a href="#uniform-catalog">
            <Button variant="outline" size="md">
              View All 11 Categories
            </Button>
          </a>
          <Link href="/contact">
            <Button variant="ghost" size="md">
              Discuss Your Uniform Requirement
            </Button>
          </Link>
        </div>
      </Section>

      {/* Trust & Supply Metrics */}
      <div className="border-y border-border bg-surface py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-sans text-center">
            <div>
              <span className="font-serif text-2xl text-accent block">Est. 1979</span>
              <span className="text-muted mt-0.5 block">Bengaluru Heritage Supplier</span>
            </div>
            <div>
              <span className="font-serif text-2xl text-foreground block">11 Sectors</span>
              <span className="text-muted mt-0.5 block">Complete Workplace Coverage</span>
            </div>
            <div>
              <span className="font-serif text-2xl text-foreground block">Wholesale & Custom</span>
              <span className="text-muted mt-0.5 block">Bulk Supply & Precision Sizing</span>
            </div>
            <div>
              <span className="font-serif text-2xl text-accent block">In-House</span>
              <span className="text-muted mt-0.5 block">Logo Embroidery & Finishing</span>
            </div>
          </div>
        </div>
      </div>

      {/* 11 Documented Uniform Categories Grid */}
      <Section id="uniform-catalog" variant="default">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-border">
          <div>
            <span className="text-xs uppercase tracking-wider text-muted font-sans font-medium block">
              Documented Categories A through K
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mt-1">
              Workplace Uniform Curation
            </h2>
          </div>
          <Badge variant="accent" size="sm">
            Bulk Wholesale & Tailored Supply
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UNIFORM_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const asset = VISUAL_ASSETS[cat.assetKey];

            return (
              <div
                key={cat.code}
                className="group rounded-2xl border border-border bg-surface overflow-hidden shadow-soft flex flex-col justify-between hover:border-accent/50 hover:shadow-soft-xl transition-all duration-300"
              >
                {/* 4:5 Portrait Contextual Image Frame */}
                {asset && (
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-muted border-b border-border/50">
                    <Image
                      src={asset.url}
                      alt={asset.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Floating Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-7 h-7 rounded-lg bg-surface/90 backdrop-blur-md border border-border/80 flex items-center justify-center font-serif text-xs text-accent font-medium shadow-sm">
                          {cat.code}
                        </span>
                        <Badge variant="subtle" size="sm" className="bg-surface/90 backdrop-blur-md">
                          Category {cat.code}
                        </Badge>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-surface/90 backdrop-blur-md border border-border/80 flex items-center justify-center text-accent shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-2xl text-foreground font-normal mb-1 group-hover:text-accent transition-colors">
                      {cat.title}
                    </h3>
                    <span className="text-[11px] text-accent font-sans block mb-3 font-medium">
                      {cat.subtitle}
                    </span>

                    <p className="text-xs text-muted font-sans leading-relaxed mb-5">
                      {cat.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                      {cat.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded bg-surface-muted border border-border text-muted font-sans"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                    <Link
                      href={`/contact?requirement=corporate_uniforms&item=${encodeURIComponent(cat.title)}`}
                      className="text-xs text-accent hover:text-accent/80 font-medium font-sans inline-flex items-center gap-1"
                    >
                      <span>Request Quotation</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Executive Decision-Maker Summary (5 Key Questions) */}
        <div className="mt-14 p-8 sm:p-12 rounded-[2.5rem] bg-surface dark:bg-[#141F1A] border border-border/80 dark:border-white/10 shadow-soft-lg">
          <Badge variant="accent" size="sm" className="mb-2 bg-forest text-ivory dark:bg-sage dark:text-forest-dark">
            For HR, Admin & Procurement Leads
          </Badge>
          <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-8">
            Essential Questions Answered for Decision-Makers
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-surface-muted/60 dark:bg-black/20 border border-border/60">
              <p className="font-semibold text-foreground text-sm flex items-center gap-2 mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-forest dark:text-sage" />
                <span>What types of uniforms do we supply?</span>
              </p>
              <p className="text-muted leading-relaxed">
                We supply 11 full categories: executive suits, formal shirts & trousers with computerized embroidery, piqué polo tees, round-neck cotton t-shirts, winter hoodies, chef coats, housekeeping tunics, security guard uniforms, lab coats, and technician boiler suits.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-muted/60 dark:bg-black/20 border border-border/60">
              <p className="font-semibold text-foreground text-sm flex items-center gap-2 mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-forest dark:text-sage" />
                <span>Which industries do we serve?</span>
              </p>
              <p className="text-muted leading-relaxed">
                Corporate headquarters, retail sales forces, security agencies, hospitality and commercial kitchens, private hospitals and diagnostic labs, automotive service networks, manufacturing plants, and educational institutions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-muted/60 dark:bg-black/20 border border-border/60">
              <p className="font-semibold text-foreground text-sm flex items-center gap-2 mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-forest dark:text-sage" />
                <span>Can uniforms be customized with brand identity?</span>
              </p>
              <p className="text-muted leading-relaxed">
                Yes. We apply high-density computerized embroidery and durable colorfast printing matching your exact corporate pantone colors, along with custom piping, epaulettes, and branded neck tags.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-muted/60 dark:bg-black/20 border border-border/60">
              <p className="font-semibold text-foreground text-sm flex items-center gap-2 mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-forest dark:text-sage" />
                <span>How are fabrics and sizing selected?</span>
              </p>
              <p className="text-muted leading-relaxed">
                Fabrics are tested for abrasion resistance, crease recovery, and commercial wash endurance. Sizing is offered in standardized runs (S to 5XL) or via in-person master tailor measurement sessions for leadership staff.
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Workflow / Uniform Program */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl border border-border bg-surface-muted dark:bg-[#121B16] shadow-soft">
          <Badge variant="subtle" size="sm" className="mb-2">
            Uniform Supply Methodology
          </Badge>
          <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-6">
            Institutional Procurement Process
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-sans">
            <div className="p-4 rounded-xl border border-border bg-surface dark:bg-[#16221D]">
              <span className="font-serif text-lg text-forest dark:text-sage block mb-1">Step 1</span>
              <p className="font-medium text-foreground">Requirement Brief</p>
              <p className="text-muted mt-1 leading-relaxed">
                Consultation on staff roles, fabric durability needs, corporate brand colors, and volume requirements.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-surface dark:bg-[#16221D]">
              <span className="font-serif text-lg text-forest dark:text-sage block mb-1">Step 2</span>
              <p className="font-medium text-foreground">Fabric & Swatch Selection</p>
              <p className="text-muted mt-1 leading-relaxed">
                Presentation of mill cloths tested for wash fastness, tensile resilience, and comfortable breathability.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-surface dark:bg-[#16221D]">
              <span className="font-serif text-lg text-forest dark:text-sage block mb-1">Step 3</span>
              <p className="font-medium text-foreground">Prototype Sampling & Sizing</p>
              <p className="text-muted mt-1 leading-relaxed">
                Sample garments produced with logo embroidery for corporate management review and size approval.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-surface dark:bg-[#16221D]">
              <span className="font-serif text-lg text-forest dark:text-sage block mb-1">Step 4</span>
              <p className="font-medium text-foreground">Wholesale Delivery</p>
              <p className="text-muted mt-1 leading-relaxed">
                Quality-inspected batch fulfillment dispatched on schedule to your workplace or institutional facility.
              </p>
            </div>
          </div>
        </div>

        {/* Embedded Corporate Quotation Enquiry Form */}
        <div className="mt-14 max-w-4xl mx-auto">
          <CorporateEnquiryForm />
        </div>
      </Section>
    </div>
  );
}
