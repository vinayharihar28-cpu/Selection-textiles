'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product3DViewer } from '@/components/3d/Product3DViewer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface Props {
  collectionTitle: string;
  collectionSlug: string;
  products: Product[];
}

export function Collection3DStudio({
  collectionTitle,
  collectionSlug,
  products,
}: Props) {
  // Only products with 3D models
  const eligibleProducts = products.filter((p) => p.modelUrl || p.inDigitalShowroom);

  // Active silhouette state
  const [selectedSlug, setSelectedSlug] = useState<string>(
    eligibleProducts[0]?.slug || products[0]?.slug || ''
  );

  const activeProduct =
    eligibleProducts.find((p) => p.slug === selectedSlug) ||
    products.find((p) => p.slug === selectedSlug) ||
    products[0];

  if (!activeProduct) return null;

  return (
    <section className="my-10 p-6 sm:p-8 lg:p-10 rounded-3xl border border-accent/40 bg-surface-muted shadow-soft-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-6 border-b border-border/70">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-accent font-sans font-medium">
              Interactive 3D Garment Studio
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal">
            Inspect {collectionTitle} in 360° 3D
          </h2>
          <p className="text-xs sm:text-sm text-muted font-sans mt-1 max-w-xl">
            Examine tailoring canvassing, rotate full 360 degrees, and inspect shoulder slope and drape before your showroom fitting.
          </p>
        </div>

        {/* Silhouette Switcher Tabs */}
        {eligibleProducts.length > 1 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted font-sans mr-1">Silhouette:</span>
            {eligibleProducts.map((p) => (
              <button
                key={p.slug}
                onClick={() => setSelectedSlug(p.slug)}
                className={`px-3 py-1.5 rounded-xl text-xs font-sans transition-all cursor-pointer ${
                  selectedSlug === p.slug
                    ? 'bg-accent text-accent-foreground font-medium shadow-sm'
                    : 'bg-surface text-muted hover:text-foreground border border-border'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main 3D Studio Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: 3D Interactive Stage */}
        <div className="lg:col-span-7">
          <Product3DViewer
            key={activeProduct.slug}
            modelUrl={activeProduct.modelUrl}
            imageUrl={activeProduct.heroImage.url}
            imageAlt={activeProduct.heroImage.alt || activeProduct.name}
            productName={activeProduct.name}
            aspectRatioClass="aspect-[3/4] sm:aspect-[4/3] lg:aspect-auto lg:h-[500px]"
            craftsmanshipTag={activeProduct.construction}
            category={activeProduct.category.replace(/_/g, ' ')}
          />
        </div>

        {/* Right: Specifications & Direct Actions */}
        <div className="lg:col-span-5 flex flex-col justify-between lg:h-[500px] gap-6">
          <div className="flex flex-col gap-4">
            <div>
              <Badge variant="subtle" size="sm" className="mb-2">
                {activeProduct.category.replace(/_/g, ' ')}
              </Badge>
              <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-normal">
                {activeProduct.name}
              </h3>
              <p className="text-xs text-muted font-sans mt-1.5 leading-relaxed">
                {activeProduct.shortDescription}
              </p>
            </div>

            {/* Spec Cards */}
            <div className="grid grid-cols-3 gap-2.5 text-center text-xs font-sans">
              <div className="p-3 rounded-xl border border-border bg-surface shadow-soft">
                <span className="text-muted block text-[10px] uppercase tracking-wider">Canvas</span>
                <span className="text-foreground font-serif text-sm mt-0.5 block">{activeProduct.construction}</span>
              </div>
              <div className="p-3 rounded-xl border border-border bg-surface shadow-soft">
                <span className="text-muted block text-[10px] uppercase tracking-wider">Handwork</span>
                <span className="text-foreground font-serif text-sm mt-0.5 block">{activeProduct.handworkHours}+ Hours</span>
              </div>
              <div className="p-3 rounded-xl border border-border bg-surface shadow-soft">
                <span className="text-muted block text-[10px] uppercase tracking-wider">Fitting</span>
                <span className="text-foreground font-serif text-sm mt-0.5 block">Custom Fit</span>
              </div>
            </div>

            {/* Craftsmanship points */}
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-2 text-xs font-sans text-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Individually drafted paper pattern to client measurements</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-sans text-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Selection Textiles Bengaluru Showroom • Est. 1979</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col gap-2.5 pt-4 border-t border-border/80">
            <Link
              href={`/contact?source=3d-studio&item=${encodeURIComponent(activeProduct.name)}&garment=${encodeURIComponent(activeProduct.name)}&tailoring=${encodeURIComponent(activeProduct.construction)}`}
            >
              <Button variant="primary" size="md" className="w-full gap-2 shadow-soft">
                <span>Enquire About {activeProduct.name}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>

            <Link href={`/products/${activeProduct.slug}`}>
              <Button variant="outline" size="sm" className="w-full">
                View Full Garment Dossier & Fabric Choices
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
