import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/ui/product-card';
import { BackButton } from '@/components/ui/back-button';
import { CheckCircle2, Eye, ArrowUpRight } from 'lucide-react';
import { getCollectionBySlug } from '@/lib/data/collections';
import { STATIC_PRODUCTS } from '@/lib/data/products';
import { redirect } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: Props) {
  const collection = getCollectionBySlug(params.slug);
  const title = collection
    ? collection.title
    : params.slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');

  return {
    title: `${title} | Selection Textiles Bengaluru`,
    description: `Explore ${title} at Selection Textiles Bengaluru. Established 1979. Made-to-measure tailoring, textiles, and uniform solutions.`,
  };
}

export default function CollectionSlugPage({ params }: Props) {
  const { slug } = params;

  // Corporate Uniforms is a full 11-category catalogue with its own dedicated page.
  if (slug === 'corporate-uniforms' || slug === 'corporate' || slug === 'workplace-uniforms') {
    redirect('/corporate');
  }
  if (slug === 'fabrics' || slug === 'textile-archives' || slug === 'mill-fabrics') {
    redirect('/fabrics');
  }

  const collection = getCollectionBySlug(slug);

  const title = collection
    ? collection.title
    : slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');

  const description = collection
    ? collection.description
    : `Explore the ${title} collection by Selection Textiles Bengaluru. Handcrafted made-to-measure tailoring and curated textiles.`;

  const highlights = collection?.highlights || [
    'Made-to-Measure Tailoring',
    'Custom Fitting',
    'Bengaluru Showroom',
  ];

  // Match products for this collection
  const allProducts = Object.values(STATIC_PRODUCTS);
  const matchingProducts = allProducts.filter((p) => {
    if (slug === 'suits-blazers' || slug === 'bespoke-suits' || slug === 'tailored-blazers') {
      return p.category === 'two_piece_suit' || p.category === 'three_piece_suit' || p.tags.includes('Suits & Blazers');
    }
    if (slug === 'sherwanis' || slug === 'regal-sherwanis') {
      return p.category === 'regal_sherwani' || p.tags.includes('Sherwanis');
    }
    if (slug === 'shirts-trousers' || slug === 'formal-shirts-trousers') {
      return p.category === 'dress_shirt' || p.category === 'bespoke_trouser' || p.tags.includes('Shirts & Trousers');
    }
    if (slug === 'modi-coats-jackets' || slug === 'modi-coats' || slug === 'coats' || slug === 'jackets') {
      return p.category === 'modi_coat' || p.tags.includes('Modi Coats & Jackets') || p.tags.includes('Coats');
    }
    if (slug === 'waistcoats' || slug === 'tailored-waistcoats') {
      return p.category === 'waistcoat' || p.tags.includes('Waistcoats');
    }
    if (slug === 'mens-kurta-pyjama' || slug === 'kurta-pyjama') {
      return p.category === 'kurta_pyjama' || p.tags.includes("Men's Kurta Pyjama");
    }
    if (slug === 'polo-t-shirts' || slug === 'polo-tshirts') {
      return p.category === 'polo_tshirts' || p.tags.includes('Polo T-Shirts');
    }
    if (slug === 'sports-wear' || slug === 'sportswear') {
      return p.category === 'sports_wear' || p.tags.includes('Sports Wear');
    }
    if (slug === 'corporate-uniforms' || slug === 'corporate' || slug === 'workplace-uniforms') {
      return p.division === 'corporate_uniform_studio' || p.tags.includes('Corporate Uniforms');
    }
    return p.slug.includes(slug);
  });

  return (
    <div className="flex flex-col">
      {/* Collection Hero with Portrait Showcase Frame (Full Opacity, 4:5 Portrait Ratio) */}
      <section className="bg-surface-muted/60 border-b border-border pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-14 lg:pb-16">
        <Container size="wide">
          <div className="mb-6 sm:mb-8">
            <BackButton href="/collections" ariaLabel="Return to Collections" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="subtle" size="sm">
                  Selection Textiles
                </Badge>
                <span className="text-xs text-muted font-sans">•</span>
                <span className="text-xs uppercase tracking-widest text-accent font-medium font-sans">
                  {collection?.group || 'Collection'}
                </span>
                <span className="text-xs text-muted font-sans">•</span>
                <span className="text-xs text-muted font-sans font-medium">
                  {collection?.season || 'Signature'}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-normal tracking-tight">
                {title}.
              </h1>

              <p className="mt-4 text-sm sm:text-base text-muted font-sans leading-relaxed max-w-2xl">
                {description}
              </p>

              {/* Highlights pills */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {highlights.map((h, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border text-xs font-sans text-foreground"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href={`/contact?collection=${encodeURIComponent(title)}&item=${encodeURIComponent(title)}`}>
                  <Button variant="primary" size="md">
                    Enquire About {title}
                  </Button>
                </Link>
                <Link href="/tailoring">
                  <Button variant="ghost" size="md">
                    Tailoring Consultation
                  </Button>
                </Link>
                {slug === 'corporate-uniforms' && (
                  <Link href="/corporate">
                    <Button variant="ghost" size="md">
                      Corporate Uniform Studio
                    </Button>
                  </Link>
                )}
                {slug === 'fabrics' && (
                  <Link href="/fabrics">
                    <Button variant="ghost" size="md">
                      Explore Fabrics
                    </Button>
                  </Link>
                )}
              </div>

              {/* Showroom trust note */}
              <div className="mt-8 pt-4 border-t border-border/60 text-xs font-sans text-muted flex flex-wrap items-center gap-3">
                <span>Bengaluru Showroom: #16-17, D.Rangaiah Complex, B.V.K. Iyengar Road</span>
                <span>•</span>
                <span>Bengaluru – 560053</span>
                <span>•</span>
                <span>Est. 1979</span>
              </div>
            </div>

            {/* Right: Portrait Image Showcase (5 cols, 4:5 / 5:3 portrait proportions, 100% full opacity) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-surface shadow-soft-xl group">
                {collection?.imageUrl ? (
                  <Image
                    src={collection.imageUrl}
                    alt={title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top opacity-100 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-surface-muted text-muted text-xs">
                    Selection Textiles Showcase
                  </div>
                )}

                {/* Floating Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md border border-border/80 text-foreground font-sans text-xs font-medium shadow-sm">
                    {collection?.season || 'Signature Collection'}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md border border-border/80 text-foreground font-sans text-xs font-medium shadow-sm">
                    {matchingProducts.length > 0
                      ? `${matchingProducts.length} Silhouettes`
                      : `${collection?.itemsCount || 12} Offerings`}
                  </span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-3.5 inset-x-3.5 p-3.5 rounded-xl bg-surface/90 backdrop-blur-md border border-border/80 text-foreground font-sans text-xs shadow-soft flex items-center justify-between z-10">
                  <div className="flex flex-col">
                    <span className="font-serif text-sm font-medium text-foreground">{title}</span>
                    <span className="text-[11px] text-muted">Made-to-Measure • Selection Textiles</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-accent font-medium px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                    Est. 1979
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Highlights Bar */}
      <div className="border-y border-border bg-surface py-4">
        <Container size="wide">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
            <div className="flex flex-wrap items-center gap-6">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
            <span className="text-muted">
              Bengaluru Showroom • Est. 1979
            </span>
          </div>
        </Container>
      </div>

      {/* Available Silhouettes / Products */}
      <Section variant="default">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-border">
          <span className="text-xs uppercase tracking-wider text-muted font-sans font-medium">
            Available Silhouettes & Offerings
          </span>
          <Badge variant="accent" size="sm">
            Made-to-Measure & Custom Orders
          </Badge>
        </div>

        {matchingProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchingProducts.map((garment) => (
              <ProductCard
                key={garment.id}
                slug={garment.slug}
                name={garment.name}
                category={garment.category.replace(/_/g, ' ')}
                division={garment.division}
                fabricSummary={garment.subtitle}
                craftsmanshipTag={garment.construction}
                priceDisplay={garment.price.formattedDisplay}
                imageUrl={garment.heroImage.url}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="p-6 rounded-2xl border border-border bg-surface shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[3/4] rounded-xl bg-surface-muted border border-border flex flex-col items-center justify-center p-6 text-center mb-4">
                    <span className="text-xs text-muted font-sans">
                      {title} Commission {num}
                    </span>
                    <span className="font-serif text-lg text-foreground mt-1">
                      Made-to-Measure Design
                    </span>
                    <p className="text-[11px] text-muted mt-2">
                      Custom tailored to individual measurements at our Bengaluru showroom.
                    </p>
                  </div>
                  <h4 className="font-serif text-xl text-foreground font-normal">
                    {title} Model {num}
                  </h4>
                  <p className="text-xs text-muted font-sans mt-1">
                    Made-to-measure tailoring and refined presentation.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                  <Link
                    href={`/contact?collection=${encodeURIComponent(title)}&item=${encodeURIComponent(`${title} Model ${num}`)}`}
                    className="text-xs text-accent hover:text-accent/80 font-medium font-sans inline-flex items-center gap-1"
                  >
                    <span>Enquire Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}
