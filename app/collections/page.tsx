'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Building2, Gem, Shirt, Sparkles, SwatchBook } from 'lucide-react';
import { Section } from '@/components/layout/section';
import { CollectionCard } from '@/components/ui/collection-card';
import { Button } from '@/components/ui/button';
import { COLLECTIONS_DATA, CollectionCategory } from '@/lib/data/collections';

type CollectionGroup = CollectionCategory['group'];
type Filter = 'all' | CollectionGroup;

const GROUPS: Array<{ id: CollectionGroup; title: string; description: string; icon: React.ElementType }> = [
  { id: 'Bespoke Tailoring', title: 'Bespoke Tailoring', description: 'The modern wardrobe, made around your fit—from suits and blazers to formal shirts and trousers.', icon: Shirt },
  { id: 'Wedding Collections', title: 'Wedding Collections', description: 'Ceremonial ensembles for weddings, receptions, and festive celebrations.', icon: Gem },
  { id: 'Indo-Western', title: 'Indo-Western', description: 'Contemporary heritage layers, including Modi coats and Bandhgala jackets.', icon: Sparkles },
  { id: 'Fabrics & Casualwear', title: 'Fabrics & Casualwear', description: 'Mill fabrics, relaxed piqué polos, and performance apparel for everyday wear.', icon: SwatchBook },
  { id: 'Corporate', title: 'Corporate Uniforms', description: 'Professional workplace apparel, branded uniform programs, and bulk supply.', icon: Building2 },
];

export default function CollectionsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const visibleGroups = activeFilter === 'all' ? GROUPS : GROUPS.filter((group) => group.id === activeFilter);

  return (
    <div className="flex flex-col">
      <Section
        variant="muted"
        eyebrow="Selection Textiles · Curated Catalog"
        title="Find the collection for your occasion."
        description="Our collections are organised by how you dress: bespoke formalwear, wedding ensembles, Indo-Western layers, fabrics and casualwear, and corporate uniforms."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/contact"><Button variant="primary" size="sm">Book a Consultation <ArrowUpRight className="ml-1.5 h-4 w-4" /></Button></Link>
          <Link href="/fabrics"><Button variant="outline" size="sm">Explore Fabrics</Button></Link>
          <Link href="/corporate"><Button variant="ghost" size="sm">Corporate Uniforms</Button></Link>
        </div>
      </Section>

      <Section variant="default" className="py-12 sm:py-16">
        <div className="flex flex-wrap gap-2 border-b border-border pb-6">
          <button onClick={() => setActiveFilter('all')} className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${activeFilter === 'all' ? 'bg-forest text-ivory' : 'bg-surface-muted text-muted hover:text-foreground'}`}>All collections ({COLLECTIONS_DATA.length})</button>
          {GROUPS.map((group) => {
            const count = COLLECTIONS_DATA.filter((collection) => collection.group === group.id).length;
            return <button key={group.id} onClick={() => setActiveFilter(group.id)} className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${activeFilter === group.id ? 'bg-forest text-ivory' : 'bg-surface-muted text-muted hover:text-foreground'}`}>{group.title} ({count})</button>;
          })}
        </div>

        <div className="mt-10 space-y-16 sm:space-y-20">
          {visibleGroups.map((group) => {
            const collections = COLLECTIONS_DATA.filter((collection) => collection.group === group.id);
            const Icon = group.icon;
            return (
              <section key={group.id} aria-labelledby={`group-${group.id.replace(/[^a-z]/gi, '-').toLowerCase()}`}>
                <div className="mb-7 flex flex-col gap-3 border-l-2 border-accent pl-5 sm:flex-row sm:items-end sm:justify-between">
                  <div><span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent"><Icon className="h-3.5 w-3.5" /> Curated category</span><h2 id={`group-${group.id.replace(/[^a-z]/gi, '-').toLowerCase()}`} className="mt-2 font-serif text-3xl sm:text-4xl">{group.title}</h2></div>
                  <p className="max-w-xl text-sm leading-relaxed text-muted">{group.description}</p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {collections.map((collection) => <CollectionCard key={collection.slug} slug={collection.slug} title={collection.title} subtitle={collection.subtitle} season={collection.season} itemCount={collection.itemsCount} imageUrl={collection.imageUrl} group={collection.group} />)}
                </div>
              </section>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
