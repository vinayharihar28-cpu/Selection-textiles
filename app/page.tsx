import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HeroCollectionSlideshow } from '@/components/home/HeroCollectionSlideshow';
import { HeritageFoundersSection } from '@/components/home/HeritageFoundersSection';
import { TwoDivisionsSection } from '@/components/home/TwoDivisionsSection';
import { CraftsmanshipSection } from '@/components/home/CraftsmanshipSection';
import { HomeCollectionsSection } from '@/components/home/HomeCollectionsSection';
import { CorporateExpertiseSection } from '@/components/home/CorporateExpertiseSection';
import { FabricBrandsSection } from '@/components/home/FabricBrandsSection';
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
} from 'lucide-react';

export const metadata = {
  title: 'Selection Textiles | Bengaluru Est. 1979 • Men\'s Clothing, Tailoring & Corporate Uniforms',
  description:
    'Established in 1979 on B.V.K. Iyengar Road, Bengaluru. Selection Textiles specializes in fine fabrics, bespoke menswear tailoring, wedding occasionwear, and institutional corporate uniforms across 11 sectors.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col text-foreground">
      {/* ========================================================================= */}
      {/* 1. HERO COLLECTION SLIDESHOW                                              */}
      {/* 7 collections, face-safe per-slide focal points, touch swipe, 5s pace      */}
      {/* ========================================================================= */}
      <HeroCollectionSlideshow />

      {/* ========================================================================= */}
      {/* 2. ABOUT SELECTION TEXTILES & FOUNDER HERITAGE                            */}
      {/* Nakode S. Krishnan (Founder, 1979) & Nakode K. Subramani (Joined 2002)    */}
      {/* ========================================================================= */}
      <HeritageFoundersSection />

      {/* ========================================================================= */}
      {/* 3. TWO SIDES OF SELECTION TEXTILES                                        */}
      {/* Distinct compositions: Men's Wear & Bespoke Tailoring vs Corporate Fleets*/}
      {/* ========================================================================= */}
      <TwoDivisionsSection />

      {/* ========================================================================= */}
      {/* 4. CRAFTSMANSHIP, FABRICS, AND SERVICE                                    */}
      {/* Verified practical strengths: Sourcing, drafting, durability, branding    */}
      {/* ========================================================================= */}
      <CraftsmanshipSection />

      {/* ========================================================================= */}
      {/* 5. FEATURED COLLECTIONS                                                   */}
      {/* Curated menswear lookbook: Suits, Sherwanis, Kurtas, Shirts & Trousers    */}
      {/* ========================================================================= */}
      <HomeCollectionsSection />

      {/* ========================================================================= */}
      {/* 6. CORPORATE UNIFORM EXPERTISE                                            */}
      {/* 11 Outfitted Industry Sectors & Institutional Procurement Benefits       */}
      {/* ========================================================================= */}
      <CorporateExpertiseSection />

      {/* ========================================================================= */}
      {/* 7. DOCUMENTED FABRIC BRANDS                                               */}
      {/* Raymond, Siyarams, Linen Club, Mafatlal, Ramraj, Uthayam                   */}
      {/* ========================================================================= */}
      <FabricBrandsSection />

      {/* ========================================================================= */}
      {/* 8. SHOWROOM & CLOSING CONTACT SECTION                                     */}
      {/* B.V.K. Iyengar Road destination, verified contacts & consultation booking */}
      {/* ========================================================================= */}
      <Section
        variant="default"
        eyebrow="Bengaluru Destination"
        title="Visit Our B.V.K. Iyengar Road Showroom"
        description="Experience running cloth bolts with your own hands, discuss custom made-to-measure tailoring with master cutters, or schedule a corporate uniform consultation."
      >
        <div className="p-8 sm:p-12 lg:p-16 rounded-[2.5rem] border border-border bg-surface dark:bg-[#16221D] shadow-soft-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <Badge variant="accent" size="sm" className="w-fit bg-forest text-ivory">
              Showroom & Cutting Bench
            </Badge>

            <h3 className="font-serif text-3xl sm:text-4xl text-foreground font-normal leading-tight">
              Selection Textiles Bengaluru
            </h3>

            <div className="space-y-3 pt-2 text-sm text-foreground/80 font-sans">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-forest dark:text-sage shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  #16-17, &ldquo;D.Rangaiah Complex&rdquo;,<br />
                  B.V.K. Iyengar Road, Bengaluru – 560053,<br />
                  Karnataka, India
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pt-1">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-forest dark:text-sage shrink-0" />
                  <a href="tel:+918660451300" className="hover:underline">
                    +91-86604 51300
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-forest dark:text-sage shrink-0" />
                  <a href="tel:+9108022258982" className="hover:underline">
                    080-22258982
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-forest dark:text-sage shrink-0" />
                  <a href="tel:+9108041264992" className="hover:underline">
                    080-41264992
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-forest dark:text-sage shrink-0" />
                <a href="mailto:selection.textiles@gmail.com" className="hover:underline">
                  selection.textiles@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs text-muted pt-1">
                <Clock className="w-4 h-4 text-forest dark:text-sage shrink-0" />
                <span>Mon – Sat: 10:30 AM – 8:30 PM • Sunday by Appointment</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Link href="/contact">
                <Button
                  variant="primary"
                  size="md"
                  className="gap-2 bg-forest hover:bg-forest/90 text-ivory dark:bg-sage dark:text-forest-dark dark:hover:bg-sage/90 shadow-soft"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
              <a
                href="https://maps.google.com/?q=Selection+Textiles+BVK+Iyengar+Road+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="md">
                  Get Directions
                </Button>
              </a>
              <a href="tel:+918660451300">
                <Button variant="ghost" size="md">
                  Call Showroom
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/3] sm:aspect-[1/1] rounded-3xl overflow-hidden shadow-soft border border-border bg-surface-muted">
              <Image
                src="/images/collections/fabrics.png"
                alt="Selection Textiles Showroom Fabrics and Cutting Counter"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface/90 dark:bg-black/80 backdrop-blur-md border border-border text-center text-xs font-sans text-foreground">
                B.V.K. Iyengar Road • Bengaluru Landmark Since 1979
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
