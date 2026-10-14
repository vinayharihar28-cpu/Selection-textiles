'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  ArrowUpRight,
  Eye,
  Maximize2,
  CheckCircle2,
  Filter,
  MessageSquare,
} from 'lucide-react';
import { HERO_COLLECTIONS, CollectionGalleryItem, HeroCollectionSlide } from '@/lib/data/hero-collections';
import { ImageDetailModal } from '@/components/collections/ImageDetailModal';
import { Container } from '@/components/layout/container';
import { cn } from '@/lib/utils';

export function CollectionShowcaseSection() {
  const [selectedCollectionId, setSelectedCollectionId] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<{
    item: CollectionGalleryItem;
    collectionTitle: string;
    gallery: CollectionGalleryItem[];
    currentIndex: number;
  } | null>(null);

  // Listen to expand-collection event dispatched from the Hero slideshow
  useEffect(() => {
    const handleExpandEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ sectionId: string }>;
      if (customEvent.detail?.sectionId) {
        const matching = HERO_COLLECTIONS.find((c) => c.sectionId === customEvent.detail.sectionId);
        if (matching) {
          // If in filter mode, ensure it's either 'all' or this collection
          // Flash highlight the targeted section
          const el = document.getElementById(customEvent.detail.sectionId);
          if (el) {
            el.classList.add('ring-2', 'ring-forest', 'dark:ring-sage', 'transition-all');
            setTimeout(() => {
              el.classList.remove('ring-2', 'ring-forest', 'dark:ring-sage');
            }, 2500);
          }
        }
      }
    };

    window.addEventListener('expand-collection', handleExpandEvent);
    return () => window.removeEventListener('expand-collection', handleExpandEvent);
  }, []);

  const openModal = (
    item: CollectionGalleryItem,
    collectionTitle: string,
    gallery: CollectionGalleryItem[],
    index: number
  ) => {
    setActiveModalItem({
      item,
      collectionTitle,
      gallery,
      currentIndex: index,
    });
  };

  const handleModalNext = () => {
    if (!activeModalItem) return;
    const nextIdx = (activeModalItem.currentIndex + 1) % activeModalItem.gallery.length;
    setActiveModalItem({
      ...activeModalItem,
      item: activeModalItem.gallery[nextIdx],
      currentIndex: nextIdx,
    });
  };

  const handleModalPrev = () => {
    if (!activeModalItem) return;
    const prevIdx =
      (activeModalItem.currentIndex - 1 + activeModalItem.gallery.length) %
      activeModalItem.gallery.length;
    setActiveModalItem({
      ...activeModalItem,
      item: activeModalItem.gallery[prevIdx],
      currentIndex: prevIdx,
    });
  };

  const filteredCollections =
    selectedCollectionId === 'all'
      ? HERO_COLLECTIONS
      : HERO_COLLECTIONS.filter((c) => c.id === selectedCollectionId);

  return (
    <section id="collections-showcase" className="relative py-16 sm:py-24 lg:py-32 bg-background border-t border-border/60">
      <Container size="wide">
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/5 dark:bg-sage/10 border border-forest/15 dark:border-sage/20 text-forest dark:text-sage font-sans text-xs uppercase tracking-widest font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-sage" />
            <span>Curated Visual Archives • All 7 Collections</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground font-normal tracking-tight text-balance leading-tight">
            Explore Collection Details & Garments
          </h2>

          <p className="mt-3 text-sm sm:text-base lg:text-lg text-muted font-sans leading-relaxed text-balance max-w-2xl font-light">
            Click on any image to inspect high-resolution tailoring details, fabric compositions, and sartorial specifications.
          </p>

          {/* Quick Collection Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-4xl select-none">
            <button
              onClick={() => setSelectedCollectionId('all')}
              className={cn(
                'px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-sans font-medium transition-all cursor-pointer flex items-center gap-1.5',
                selectedCollectionId === 'all'
                  ? 'bg-forest text-white dark:bg-sage dark:text-forest-dark font-bold shadow-soft'
                  : 'bg-surface-muted text-muted hover:text-foreground border border-border/60'
              )}
            >
              <span>All Collections (7)</span>
            </button>

            {HERO_COLLECTIONS.map((c) => {
              const isSelected = selectedCollectionId === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedCollectionId(c.id);
                    const el = document.getElementById(c.sectionId);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={cn(
                    'px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-sans font-medium transition-all cursor-pointer flex items-center gap-1.5',
                    isSelected
                      ? 'bg-forest text-white dark:bg-sage dark:text-forest-dark font-bold shadow-soft'
                      : 'bg-surface-muted text-muted hover:text-foreground border border-border/60'
                  )}
                >
                  <span>{c.title}</span>
                  <span className="text-[10px] opacity-70">({c.gallery.length})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COLLECTION SECTIONS (Each with Anchor ID matching the Hero Expand button) */}
        {/* ========================================================================= */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {filteredCollections.map((collection, colIdx) => (
            <div
              key={collection.id}
              id={collection.sectionId}
              className="scroll-mt-28 p-6 sm:p-10 lg:p-12 rounded-3xl border border-border/80 dark:border-white/10 bg-surface dark:bg-forest-surface shadow-soft transition-all duration-300"
            >
              {/* Collection Heading & Context Bar */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-border/70 dark:border-white/10">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2 mb-2 text-xs font-sans">
                    <span className="px-2.5 py-0.5 rounded-md bg-forest/10 dark:bg-sage/15 text-forest dark:text-sage font-bold uppercase tracking-wider">
                      Collection 0{colIdx + 1}
                    </span>
                    <span className="text-muted">•</span>
                    <span className="text-muted font-medium uppercase tracking-wider">
                      {collection.pill}
                    </span>
                    <span className="text-muted">•</span>
                    <span className="text-muted font-medium">{collection.gallery.length} Archival Images</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-normal tracking-tight">
                    {collection.title}
                  </h3>

                  <p className="mt-2 text-base sm:text-lg text-forest dark:text-sage font-sans font-medium">
                    {collection.subtitle}
                  </p>

                  <p className="mt-2 text-xs sm:text-sm text-muted font-sans leading-relaxed">
                    {collection.description}
                  </p>

                  {/* Highlights Bar */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {collection.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-muted/80 text-[11px] font-sans text-foreground border border-border/60"
                      >
                        <CheckCircle2 className="w-3 h-3 text-forest dark:text-sage shrink-0" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <Link
                    href={collection.exploreRoute}
                    className="inline-flex items-center gap-2 h-10 sm:h-11 px-5 rounded-xl bg-forest hover:bg-forest/90 dark:bg-sage dark:text-forest-dark dark:hover:bg-sage/90 text-white font-sans text-xs uppercase tracking-wider font-bold shadow-soft transition-all active:scale-[0.98]"
                  >
                    <span>View {collection.title} Page</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href={`/contact?collection=${encodeURIComponent(collection.title)}`}
                    className="inline-flex items-center gap-2 h-10 sm:h-11 px-4 rounded-xl border border-border hover:bg-surface-muted text-foreground font-sans text-xs uppercase tracking-wider font-semibold shadow-xs transition-all active:scale-[0.98]"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-forest dark:text-sage" />
                    <span>Enquire</span>
                  </Link>
                </div>
              </div>

              {/* Gallery Grid of Collection Images */}
              <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
                {collection.gallery.map((item, imgIdx) => (
                  <div
                    key={item.id}
                    onClick={() => openModal(item, collection.title, collection.gallery, imgIdx)}
                    className="group relative flex flex-col rounded-2xl border border-border/80 dark:border-white/10 bg-background dark:bg-black/20 overflow-hidden shadow-xs hover:shadow-soft-lg hover:border-forest/50 dark:hover:border-sage/50 transition-all duration-300 cursor-pointer"
                  >
                    {/* Image Area (4:5 Aspect Ratio) */}
                    <div className="relative w-full aspect-[4/5] bg-surface-muted overflow-hidden select-none">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      />

                      {/* Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15 opacity-80 group-hover:opacity-95 transition-opacity pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider bg-black/75 text-white backdrop-blur-md border border-white/20">
                          #{item.imageNumber}
                        </span>
                        {item.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-semibold tracking-wide bg-forest/80 text-white backdrop-blur-md border border-white/20">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Hover Expand & Inspect Indicator Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/35 backdrop-blur-[2px]">
                        <span className="px-4 py-2 rounded-xl bg-white text-forest-dark font-sans text-xs uppercase tracking-wider font-bold shadow-soft flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Details</span>
                        </span>
                      </div>
                    </div>

                    {/* Image Meta Area */}
                    <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 gap-2 bg-surface dark:bg-forest-surface">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider font-sans font-semibold text-forest dark:text-sage block">
                          {item.category}
                        </span>
                        <h4 className="font-serif text-lg sm:text-xl text-foreground font-medium mt-1 leading-snug group-hover:text-forest dark:group-hover:text-sage transition-colors line-clamp-1">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 text-xs text-muted font-sans leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-border/60 dark:border-white/10 flex items-center justify-between text-xs font-sans">
                        <span className="text-muted group-hover:text-foreground transition-colors flex items-center gap-1">
                          <Maximize2 className="w-3 h-3 text-forest dark:text-sage" />
                          <span>Click to expand</span>
                        </span>
                        <span className="font-semibold text-forest dark:text-sage">
                          Inspect &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Detail Modal Lightbox */}
      <ImageDetailModal
        isOpen={!!activeModalItem}
        onClose={() => setActiveModalItem(null)}
        item={activeModalItem?.item || null}
        collectionTitle={activeModalItem?.collectionTitle || ''}
        onNext={handleModalNext}
        onPrev={handleModalPrev}
        hasNext={activeModalItem ? activeModalItem.gallery.length > 1 : false}
        hasPrev={activeModalItem ? activeModalItem.gallery.length > 1 : false}
        currentIndex={activeModalItem?.currentIndex || 0}
        totalCount={activeModalItem?.gallery.length || 0}
      />
    </section>
  );
}
