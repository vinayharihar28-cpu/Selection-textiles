'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, MessageSquare, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { CollectionGalleryItem } from '@/lib/data/hero-collections';

interface ImageDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: CollectionGalleryItem | null;
  collectionTitle: string;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
  currentIndex?: number;
  totalCount?: number;
}

export function ImageDetailModal({
  isOpen,
  onClose,
  item,
  collectionTitle,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
  currentIndex = 0,
  totalCount = 0,
}: ImageDetailModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext && hasNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev && hasPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onNext, onPrev, hasNext, hasPrev]);

  if (!isOpen || !item) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Selection Textiles! I am inquiring about "${item.title}" (Image #${item.imageNumber}) from the "${collectionTitle}" collection. Could you please share more details and fabric/tailoring consultation options?`
  );
  const whatsappUrl = `https://wa.me/919845012345?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 animate-in fade-in duration-200">
      {/* Backdrop with rich blur */}
      <div
        className="fixed inset-0 bg-[#071714]/85 dark:bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-2xl sm:rounded-3xl bg-surface dark:bg-[#131b18] border border-border/80 dark:border-white/10 shadow-2xl flex flex-col lg:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Full-Scale Image Presentation */}
        <div className="relative w-full lg:w-[52%] h-[42vh] sm:h-[50vh] lg:h-auto min-h-[300px] lg:min-h-[580px] bg-black flex items-center justify-center overflow-hidden select-none">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-contain p-2 sm:p-4"
            priority
          />

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Image Tag / Number Pill */}
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-wider uppercase bg-black/75 text-white backdrop-blur-md border border-white/20">
              Image #{item.imageNumber}
            </span>
            {item.badge && (
              <span className="px-3 py-1 rounded-full text-[11px] font-sans font-medium tracking-wide bg-forest/80 text-white backdrop-blur-md border border-white/20">
                {item.badge}
              </span>
            )}
          </div>

          {/* Slide Navigation Arrows on Image */}
          {hasPrev && onPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border border-white/20 shadow-md cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {hasNext && onNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border border-white/20 shadow-md cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Right Side: Rich Specifications, Craftsmanship & Actions */}
        <div className="w-full lg:w-[48%] flex flex-col justify-between p-6 sm:p-8 overflow-y-auto max-h-[50vh] lg:max-h-[92vh] bg-surface dark:bg-[#131b18]">
          <div>
            {/* Top Breadcrumb & Counter */}
            <div className="flex items-center justify-between gap-2 mb-3 text-xs font-sans text-muted">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-forest dark:text-sage uppercase tracking-wider">
                  {collectionTitle}
                </span>
                <span>•</span>
                <span className="text-muted">{item.category}</span>
              </div>
              {totalCount > 0 && (
                <span className="text-xs font-mono font-medium text-muted bg-surface-muted px-2.5 py-0.5 rounded-full">
                  {currentIndex + 1} / {totalCount}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-medium leading-snug tracking-tight">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm text-muted font-sans leading-relaxed">
              {item.description}
            </p>

            {/* Specifications Card */}
            {item.specs && item.specs.length > 0 && (
              <div className="mt-6 p-4 rounded-xl sm:rounded-2xl bg-surface-muted/60 dark:bg-white/5 border border-border/70 dark:border-white/10 space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-forest dark:text-sage mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Sartorial Specifications</span>
                </div>
                {item.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-baseline justify-between gap-4 text-xs font-sans">
                    <span className="text-muted shrink-0">{spec.label}</span>
                    <span className="text-foreground font-semibold text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Heritage Trust Callout */}
            <div className="mt-5 flex items-start gap-2.5 text-xs font-sans text-muted">
              <CheckCircle2 className="w-4 h-4 text-forest dark:text-sage shrink-0 mt-0.5" />
              <span>
                Available for private bespoke consultation and cut meterage at our B.V.K. Iyengar Road showroom in Bengaluru.
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 pt-5 border-t border-border/70 dark:border-white/10 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 rounded-xl bg-forest hover:bg-forest/90 dark:bg-sage dark:text-forest-dark dark:hover:bg-sage/90 text-white font-sans text-xs uppercase tracking-wider font-bold shadow-soft transition-all active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire for Tailoring</span>
            </a>

            <Link
              href="/contact"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 rounded-xl border border-border hover:bg-surface-muted text-foreground font-sans text-xs uppercase tracking-wider font-semibold shadow-xs transition-all active:scale-[0.98]"
            >
              <MapPin className="w-4 h-4 text-forest dark:text-sage" />
              <span>Visit Showroom</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
