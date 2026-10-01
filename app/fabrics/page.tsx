import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/layout/section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import { VISUAL_ASSETS } from '@/lib/data/assets';

export const metadata = {
  title: 'Fabrics & Textile Curation | Raymond, Siyarams, Linen Club, Mafatlal | Selection Textiles',
  description:
    'Documented textile brands at Selection Textiles Bengaluru: Raymond, Siyarams, Linen Club, Mafatlal, Ramraj, Uthayam dhoties, and exclusive Italian contemporary collections in shirting, trouser, blazer, and suit fabrics.',
};

const DOCUMENTED_BRANDS = [
  {
    name: 'Raymond',
    category: 'Fine Suiting & Shirting',
    tag: 'Documented Brand',
    description:
      'India’s celebrated textile manufacturer. Renowned for fine worsted suiting fabrics, all-wool cloths, and premium shirting collections suitable for formalwear and bespoke suiting.',
    offerings: 'Suiting, Shirting, Poly-Wool, Pure Wool Blends',
    assetKey: 'fab-raymond',
  },
  {
    name: 'Siyarams',
    category: 'Suiting & Formal Wear Fabrics',
    tag: 'Documented Brand',
    description:
      'Leading textile weaver specializing in poly-viscose and wool-blend suiting materials engineered for all-weather comfort, crease recovery, and boardroom presentation.',
    offerings: 'Suiting Fabrics, Coordinated Trouser Cloths',
    assetKey: 'fab-siyarams',
  },
  {
    name: 'Linen Club',
    category: 'Pure Flax Linen Fabrics',
    tag: 'Documented Brand',
    description:
      'The benchmark in genuine European flax linen. Breathable natural textures crafted for summer suiting, shirts, Modi coats, and unstructured jackets with distinctive slub character.',
    offerings: '100% Pure Linen, Linen-Cotton Blends',
    assetKey: 'fab-linen-club',
  },
  {
    name: 'Mafatlal',
    category: 'Heritage Shirting & Uniform Fabrics',
    tag: 'Documented Brand',
    description:
      'Over a century of textile excellence. Esteemed for fine cotton shirting, durable school and corporate uniform fabrics, and classic Indian woven cottons.',
    offerings: 'High-Density Cotton Shirting, Institutional Uniform Fabrics',
    assetKey: 'fab-mafatlal',
  },
  {
    name: 'Ramraj',
    category: 'Traditional Cottons & Dhoties',
    tag: 'Documented Brand',
    description:
      'Pioneers of pure cotton traditional attire. Traditional dhoties, festive angavastrams, and fine white cotton fabrics woven for ceremonial and daily cultural wear.',
    offerings: 'Traditional Dhoties, Cotton Angavastrams, White Cottons',
    assetKey: 'fab-ramraj',
  },
  {
    name: 'Uthayam',
    category: 'Traditional Dhoties & Veshtis',
    tag: 'Documented Brand',
    description:
      'South India’s established name in traditional dhoties. Classic gold and silver zari border dhoties and fine cotton vestis for weddings and religious celebrations.',
    offerings: 'Traditional Dhoties, Zari Border Veshtis, Pure Cottons',
    assetKey: 'fab-uthayam',
  },
];

const ITALIAN_COLLECTIONS = [
  {
    title: 'Italian Contemporary Shirting & Trouser Collections',
    category: 'Contemporary Italian Designs',
    tag: 'Italian Wear Collection',
    description:
      'Exclusive Italian contemporary designs and cloth patterns in premium shirting and trouser fabrics, curated for modern professionals who appreciate distinctive European weave structures, tonal depth, and tactile refinement.',
    highlights: ['Contemporary Shirting Weaves', 'Trouser Cloths with Natural Drape', 'Exclusive Pattern Stories'],
    assetKey: 'fab-italian-shirting-trouser',
  },
  {
    title: 'Italian Wear Collections for Blazer & Suit Fabrics',
    category: 'Sartorial Italian Cloth',
    tag: 'Italian Wear Collection',
    description:
      'Distinguished Italian wear collections curated specifically for bespoke blazers and suits. Selected for natural stretch, thermal adaptability, and soft, fluid drape that defines modern Italian sartorial aesthetics.',
    highlights: ['Blazer Fabrics with Soft Hand', 'Suiting Worsteds with Fluid Fall', 'Refined Color Palettes'],
    assetKey: 'fab-italian-blazer-suit',
  },
];

export default function FabricsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section
        variant="muted"
        eyebrow="Selection Textiles • Retail & Wholesale Cloth"
        title="Fabric Curation & Mill Collections."
        description="Selection Textiles operates in textile retail and wholesale, providing fine suiting and shirting fabrics from India’s foremost mills alongside exclusive contemporary Italian collections."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/contact">
            <Button variant="primary" size="sm">
              Explore Fabrics
            </Button>
          </Link>
          <Link href="/tailoring">
            <Button variant="outline" size="sm">
              Tailoring Consultation
            </Button>
          </Link>
          <Link href="/collections">
            <Button variant="ghost" size="sm">
              View Collections
            </Button>
          </Link>
        </div>
      </Section>

      {/* Trust Bar */}
      <div className="border-y border-border bg-surface py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
            <div className="flex flex-wrap items-center gap-6">
              <span className="flex items-center gap-1.5 text-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Textile Retail & Wholesale</span>
              </span>
              <span className="flex items-center gap-1.5 text-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Suiting & Shirting Specialists</span>
              </span>
              <span className="flex items-center gap-1.5 text-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>B.V.K. Iyengar Road, Bengaluru</span>
              </span>
            </div>
            <span className="text-muted">Established 1979</span>
          </div>
        </div>
      </div>

      {/* Documented Brands Grid */}
      <Section variant="default">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-border">
          <div>
            <span className="text-xs uppercase tracking-wider text-muted font-sans font-medium block">
              Documented Mill Partners & Brands
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mt-1">
              Indian Heritage Fabric Brands
            </h2>
          </div>
          <Badge variant="accent" size="sm">
            Authentic Mill Partners
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCUMENTED_BRANDS.map((item) => {
            const asset = VISUAL_ASSETS[item.assetKey];

            return (
              <div
                key={item.name}
                className="group rounded-2xl border border-border bg-surface overflow-hidden shadow-soft flex flex-col justify-between hover:border-accent/50 hover:shadow-soft-xl transition-all duration-300"
              >
                {/* 4:5 Macro Textile Archive Frame (Strictly No Human Models) */}
                {asset && (
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-muted border-b border-border/50">
                    <Image
                      src={asset.url}
                      alt={asset.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Floating Brand Tag */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                      <Badge variant="subtle" size="sm" className="bg-surface/90 backdrop-blur-md">
                        {item.tag}
                      </Badge>
                      <span className="px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-md border border-border/80 text-[11px] text-accent font-sans font-medium shadow-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-3xl tracking-wide text-foreground font-normal mb-2 group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs text-muted font-sans leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="pt-3 border-t border-border/60 text-xs font-sans">
                      <span className="text-muted block text-[10px] uppercase tracking-wider">
                        Offerings
                      </span>
                      <span className="text-foreground font-medium mt-0.5 block">
                        {item.offerings}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-border/60 flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="text-xs text-accent hover:text-accent/80 font-medium inline-flex items-center gap-1 font-sans"
                    >
                      <span>Explore Fabrics</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Italian Contemporary Collections Section */}
        <div className="mt-16 pt-10 border-t border-border">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-wider text-muted font-sans font-medium block">
              European Curation
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mt-1">
              Italian Contemporary & Italian Wear Collections
            </h2>
            <p className="text-xs sm:text-sm text-muted font-sans mt-2 max-w-2xl leading-relaxed">
              Selection Textiles curates exclusive Italian contemporary designs in shirting and trouser fabrics, alongside Italian wear collections for blazer and suit fabrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ITALIAN_COLLECTIONS.map((col) => {
              const asset = VISUAL_ASSETS[col.assetKey];

              return (
                <div
                  key={col.title}
                  className="group rounded-2xl border border-border bg-surface overflow-hidden shadow-soft flex flex-col justify-between hover:border-accent/50 hover:shadow-soft-xl transition-all duration-300"
                >
                  {/* 4:5 Macro Textile Frame */}
                  {asset && (
                    <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-muted border-b border-border/50">
                      <Image
                        src={asset.url}
                        alt={asset.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
                        <Badge variant="accent" size="sm" className="bg-accent/95 backdrop-blur-md">
                          {col.tag}
                        </Badge>
                        <span className="px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-md border border-border/80 text-[11px] text-muted font-sans font-medium shadow-sm">
                          {col.category}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-7 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-serif text-2xl text-foreground font-normal mb-3 group-hover:text-accent transition-colors">
                        {col.title}
                      </h3>

                      <p className="text-xs text-muted font-sans leading-relaxed mb-6">
                        {col.description}
                      </p>

                      <div className="flex flex-col gap-2 pt-4 border-t border-border text-xs font-sans">
                        {col.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-foreground">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                      <Link
                        href={`/contact?requirement=fabrics_wholesale_retail&item=${encodeURIComponent(col.title)}&fabric=${encodeURIComponent(col.title)}`}
                        className="text-xs text-accent hover:text-accent/80 font-medium inline-flex items-center gap-1 font-sans"
                      >
                        <span>Enquire About {col.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Wholesale & Retail Inquiry Callout */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl border border-border bg-surface shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-2xl text-foreground font-normal">
              Retail & Wholesale Cloth Enquiries
            </h4>
            <p className="text-xs text-muted font-sans mt-1 max-w-xl">
              Visit our Bengaluru showroom on B.V.K. Iyengar Road to view running cloth bolts, feel weave weights, or discuss bulk commercial supply.
            </p>
          </div>
          <Link href="/contact" className="shrink-0 w-full sm:w-auto">
            <Button variant="primary" size="md" className="w-full sm:w-auto gap-2">
              <span>Explore Fabrics</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
