import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/ui/product-card';
import { STATIC_PRODUCTS } from '@/lib/data/products';
import { SectionHeading } from '@/components/ui/section-heading';
import { BackButton } from '@/components/ui/back-button';
import { Eye, Box, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Bespoke Garments & 3D Interactive Studio | Selection Textiles Bengaluru',
  description:
    'Explore bespoke tailored silhouettes by Selection Textiles. Interactive 3D garment visualization, full floating canvas tailoring, and rare textile archives.',
};

export default function ProductsPage() {
  const productsList = Object.values(STATIC_PRODUCTS);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section variant="muted" className="pt-24 sm:pt-28 lg:pt-32">
        <div className="mb-6 sm:mb-8">
          <BackButton href="/" ariaLabel="Return to Home" />
        </div>
        <SectionHeading
          eyebrow="Bespoke Garment Studio"
          title="Tailored Silhouettes & 3D Stage."
          description="Experience made-to-measure tailoring through our interactive 3D digital studio. Inspect canvassing, rotate 360 degrees, and commission your custom piece."
        />
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/products/bespoke-suits-model-one">
            <Button variant="primary" size="md" className="gap-2 shadow-soft">
              <Eye className="w-4 h-4 text-accent-foreground" />
              <span>Launch 3D Suit Studio</span>
            </Button>
          </Link>
          <Link href="/collections">
            <Button variant="outline" size="md">
              View Collections
            </Button>
          </Link>
          <Link href="/fabrics">
            <Button variant="ghost" size="md">
              Fabric Archives
            </Button>
          </Link>
        </div>
      </Section>

      {/* Featured 3D Hero Callout */}
      <Section variant="surface" className="py-8 sm:py-12">
        <div className="p-6 sm:p-8 rounded-3xl border border-accent/30 bg-surface-muted/60 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center text-accent shadow-soft shrink-0">
              <Box className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="accent" size="sm">
                  Active 3D Production Model
                </Badge>
                <span className="text-[10px] uppercase tracking-wider text-muted font-sans">
                  Interactive GPU Render
                </span>
              </div>
              <h3 className="font-serif text-2xl text-foreground font-normal">
                Savile Double-Breasted 6x2 Suit
              </h3>
              <p className="text-xs text-muted font-sans mt-0.5 max-w-xl">
                Inspect floating horsehair canvas, hand-padded peak lapel roll, and worsted wool drape in interactive 3D.
              </p>
            </div>
          </div>

          <Link href="/products/bespoke-suits-model-one" className="w-full md:w-auto shrink-0">
            <Button variant="primary" size="md" className="w-full md:w-auto gap-2">
              <span>View in 3D Studio</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Product Catalog Grid */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-border">
            <span className="text-xs uppercase tracking-wider text-muted font-sans font-medium">
              Available Bespoke Silhouettes
            </span>
            <span className="text-xs text-muted font-sans">
              Handcrafted in Bengaluru
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsList.map((product) => (
              <ProductCard
                key={product.id}
                slug={product.slug}
                name={product.name}
                category={product.category.replace(/_/g, ' ')}
                division={product.division}
                fabricSummary={product.subtitle}
                craftsmanshipTag={product.construction}
                priceDisplay={product.price.formattedDisplay}
                imageUrl={product.heroImage.url}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
