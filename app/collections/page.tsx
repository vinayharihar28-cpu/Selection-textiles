'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Section } from '@/components/layout/section';
import { CollectionCard } from '@/components/ui/collection-card';
import { Button } from '@/components/ui/button';
import { COLLECTIONS_DATA } from '@/lib/data/collections';
import { ArrowUpRight } from 'lucide-react';

export default function CollectionsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'tailoring' | 'fabrics-casualwear' | 'corporate'>('all');

  const filteredCollections = COLLECTIONS_DATA.filter((col) => {
    if (activeTab === 'tailoring') return col.group === 'Tailoring & Menswear';
    if (activeTab === 'fabrics-casualwear') return col.group === 'Fabrics & Casualwear';
    if (activeTab === 'corporate') return col.group === 'Corporate';
    return true;
  });

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section
        variant="muted"
        eyebrow="Selection Textiles • Full Catalog"
        title="Curated Collections & Categories."
        description="Explore the complete documented offering of Selection Textiles. From made-to-measure tailoring and traditional occasionwear to running fabric archives and workplace uniform programs."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/fabrics">
            <Button variant="primary" size="sm">
              Explore Fabrics
            </Button>
          </Link>
          <Link href="/tailoring">
            <Button variant="outline" size="sm">
              Tailoring Process
            </Button>
          </Link>
          <Link href="/corporate">
            <Button variant="ghost" size="sm">
              Corporate Uniforms
            </Button>
          </Link>
        </div>
      </Section>

      {/* Filter Tabs */}
      <Section variant="default">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-border">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Collections (10)' },
              { id: 'tailoring', label: 'Tailoring & Menswear (6)' },
              { id: 'fabrics-casualwear', label: 'Fabrics & Casualwear (3)' },
              { id: 'corporate', label: 'Corporate Uniforms (1)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-sans transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-accent text-accent-foreground font-medium shadow-soft'
                    : 'bg-surface-muted text-muted hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-muted font-sans hidden sm:inline">
            Showing {filteredCollections.length} Categories
          </span>
        </div>

        {/* Collection Cards Grid with Full-Opacity Portrait Frames */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCollections.map((col) => (
            <CollectionCard
              key={col.slug}
              slug={col.slug}
              title={col.title}
              subtitle={col.subtitle}
              season={col.season}
              itemCount={col.itemsCount}
              imageUrl={col.imageUrl}
              group={col.group}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
