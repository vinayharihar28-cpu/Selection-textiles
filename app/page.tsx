import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product3DViewer } from '@/components/3d/Product3DViewer';
import { EditorialCollectionCarousel } from '@/components/collections/EditorialCollectionCarousel';
import { FabricBrandsSection } from '@/components/home/FabricBrandsSection';
import { TailoringStorySection } from '@/components/home/TailoringStorySection';
import { getGarmentModelUrl } from '@/config/models';
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
} from 'lucide-react';

export const metadata = {
  title: 'Selection Textiles | Bengaluru Est. 1979 • Premium Fabrics, Tailoring & Uniforms',
  description:
    'Established in 1979 on B.V.K. Iyengar Road, Bengaluru. Selection Textiles specializes in fine textile retail, bespoke and made-to-measure tailoring, ceremonial occasionwear, and corporate uniform supply.',
};

export default function HomePage() {
  const suit3DModelUrl = getGarmentModelUrl('bespoke-suits-model-one');


  return (
    <div className="flex flex-col text-foreground">
      {/* ========================================================================= */}
      {/* 1. EDITORIAL HERO SECTION (Fitted to 100vh Screen on Initial Landing)      */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[100dvh] min-h-[580px] max-h-[1080px] flex items-start sm:items-center overflow-hidden bg-[#071714] text-white pt-[86px] sm:pt-22 lg:pt-24 pb-4 sm:pb-8 font-sans">
        {/* Full 100% Hero Background Image (Responsive Mobile vs Desktop) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
          {/* Mobile Image: hero_mobile.png with model at bottom and clear top space */}
          <div className="block sm:hidden absolute inset-0 w-full h-full">
            <Image
              src="/images/hero/hero_mobile.png"
              alt="Selection Textiles Bespoke Menswear - Bengaluru Atelier Est. 1979"
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-cover object-bottom select-none"
            />
            {/* Atmospheric gradient for crisp mobile text contrast in the upper area */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#071714]/85 via-[#071714]/30 to-transparent" />
          </div>

          {/* Desktop/Tablet Image: hero.png */}
          <div className="hidden sm:block absolute inset-0 w-full h-full">
            <Image
              src="/images/hero/hero.png"
              alt="Selection Textiles Bespoke Menswear - Bengaluru Atelier Est. 1979"
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-cover object-[74%_top] lg:object-[80%_top] select-none"
            />
            {/* Dynamic Editorial Scrims for Desktop */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071714]/92 via-[#071714]/65 to-transparent lg:via-[#071714]/45 lg:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#071714]/80 via-transparent to-[#071714]/85" />
          </div>
        </div>

        <Container size="wide" className="relative z-10 w-full font-sans my-0 sm:my-auto">
          <div className="max-w-2xl lg:max-w-3xl relative">
            {/* Seamless organic gradient vignette behind text (feathered soft fade, zero block or card edges) */}
            <div className="absolute -inset-6 sm:-inset-10 lg:-inset-14 bg-gradient-to-r from-[#071714]/90 via-[#071714]/65 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute -inset-4 sm:-inset-8 bg-[radial-gradient(ellipse_at_center,rgba(7,23,20,0.85)_0%,rgba(7,23,20,0.45)_55%,transparent_100%)] blur-2xl -z-10 pointer-events-none" />

            {/* Top Editorial Eyebrow Tag */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full bg-[#071714]/85 backdrop-blur-md border border-white/25 text-[10px] sm:text-xs font-sans tracking-wider sm:tracking-widest uppercase text-white font-semibold mb-2 sm:mb-4 shadow-soft">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block animate-pulse" />
              <span>Selection Textiles • Bengaluru • Est. 1979</span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="hidden sm:inline text-white font-medium">B.V.K. Iyengar Road</span>
            </div>

            {/* Sub-Eyebrow */}
            <div className="flex items-center gap-2 text-[11px] sm:text-sm uppercase tracking-wider sm:tracking-widest font-sans font-bold text-sage mb-2 sm:mb-3">
              <span>Sartorial Discipline & Textile Heritage</span>
            </div>

            {/* Main Headline — Single Bold Font with Minimized Size on Mobile to Fit Top Space */}
            <h1 className="font-sans text-[24px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] text-white font-extrabold tracking-tight text-balance leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Tailored <br className="hidden sm:inline" />
              for the <br />
              <span className="text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                Modern Man
              </span>
            </h1>

            {/* Paragraph with Crisp Readability & Compact Mobile Framing */}
            <p className="mt-1.5 sm:mt-4 text-xs sm:text-base lg:text-lg text-white font-sans leading-snug sm:leading-relaxed max-w-sm sm:max-w-xl text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] font-normal line-clamp-2 sm:line-clamp-none">
              Premium fabrics, refined menswear tailoring, ceremonial occasionwear, and institutional corporate uniform programs. Established in Bengaluru in 1979.
            </p>

            {/* Action Buttons with Compact Mobile Scale */}
            <div className="mt-2.5 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-4">
              <Link href="/collections">
                <Button
                  size="sm"
                  className="h-8 sm:h-12 px-3 sm:px-7 gap-1.5 sm:gap-2.5 bg-white hover:bg-white/90 text-forest-dark font-sans font-bold shadow-soft-lg hover:scale-[1.02] transition-transform text-[11px] sm:text-xs uppercase tracking-wider"
                >
                  <span>Explore Collections</span>
                  <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 stroke-[2.5]" />
                </Button>
              </Link>

              <Link href="/contact">
                <button
                  type="button"
                  className="h-8 sm:h-12 px-3 sm:px-7 text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest-editorial font-sans font-bold rounded-lg border border-white/40 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md shadow-soft transition-all active:scale-[0.98]"
                >
                  Visit Showroom
                </button>
              </Link>

              <Link href="/products/bespoke-suits-model-one" className="inline-flex">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 sm:h-12 px-2 sm:px-4 gap-1 text-white hover:text-white hover:bg-white/15 backdrop-blur-md font-sans font-semibold text-[11px] sm:text-xs uppercase tracking-wider"
                >
                  <span>Launch 3D</span>
                </Button>
              </Link>
            </div>

            {/* Heritage Pillar Summary */}
            <div className="mt-2.5 sm:mt-8 pt-2 sm:pt-5 border-t border-white/20 max-w-lg grid grid-cols-3 gap-2 sm:gap-5">
              <div>
                <span className="block font-sans text-base sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white drop-shadow-md">
                  45+
                </span>
                <span className="text-[9px] sm:text-xs text-white/90 font-sans uppercase tracking-wider block mt-0.5 font-semibold drop-shadow-sm">
                  Years of Heritage
                </span>
              </div>
              <div>
                <span className="block font-sans text-base sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white drop-shadow-md">
                  10
                </span>
                <span className="text-[9px] sm:text-xs text-white/90 font-sans uppercase tracking-wider block mt-0.5 font-semibold drop-shadow-sm">
                  Curated Categories
                </span>
              </div>
              <div>
                <span className="block font-sans text-base sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white drop-shadow-md">
                  11
                </span>
                <span className="text-[9px] sm:text-xs text-white/90 font-sans uppercase tracking-wider block mt-0.5 font-semibold drop-shadow-sm">
                  Corporate Sectors
                </span>
              </div>
            </div>
          </div>


        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. EDITORIAL COLLECTION CAROUSEL */}
      {/* Horizontal scrolling showcase of Selection Textiles major collections */}
      {/* ========================================================================= */}
      <EditorialCollectionCarousel />

      {/* ========================================================================= */}
      {/* 3. FABRIC BRANDS SECTION                                                  */}
      {/* Clean editorial logo strip representing documented mills                  */}
      {/* ========================================================================= */}
      <FabricBrandsSection />

      {/* ========================================================================= */}
      {/* 4. WHERE FABRIC BECOMES FORM                                               */}
      {/* Editorial tailoring story sequence: Fabric -> Craft -> Tailoring -> Form  */}
      {/* ========================================================================= */}
      <TailoringStorySection />

      {/* ========================================================================= */}
      {/* 6. 3D INTERACTIVE EXPERIENCE (Integrated Static Three.js Viewer Stage) */}
      {/* Product Image First -> Button: View in 3D -> Lazy-Loaded Three.js Canvas */}
      {/* ========================================================================= */}
      <Section
        variant="surface"
        eyebrow="Interactive Spatial Studio"
        title="Inspect Sartorial Proportion in Real-Time 3D"
        description="Experience full-canvas made-to-measure tailoring in interactive 3D. Click 'View in 3D' to rotate 360°, inspect the floating canvas drape, and examine peaked lapel balance."
        hasTopDivider
        hasBottomDivider
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Product 3D Viewer Container */}
          <div className="lg:col-span-7">
            <div className="w-full max-w-xl mx-auto">
              <Product3DViewer
                modelUrl={suit3DModelUrl}
                imageUrl="/images/products/bespoke-suits-model-one.png"
                imageAlt="Savile Double-Breasted 6x2 Suit in Full-Canvas Worsted Wool"
                productName="Savile Double-Breasted 6x2"
                category="Full-Canvas Suiting"
                craftsmanshipTag="Full Floating Canvas • 3D Stage"
                aspectRatioClass="aspect-[4/5]"
              />
            </div>
          </div>

          {/* Right: Technical Tailoring Notes & Controls Guide */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
            <div>
              <span className="text-xs uppercase tracking-widest text-brass font-sans font-medium">
                Bespoke Western Division
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-foreground font-normal mt-1.5 leading-tight">
                Savile Double-Breasted 6x2
              </h3>
              <p className="text-sm text-muted font-sans mt-3 leading-relaxed">
                Handcrafted in Bengaluru with full floating horsehair canvas interlining that gently molds to your torso over time. Features hand-padded 4.25-inch peaked lapels, genuine horn buttons, and functional sleeve surgeon cuffs.
              </p>

              <div className="mt-6 space-y-3.5 border-t border-border/70 pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-forest dark:text-sage shrink-0 mt-0.5" />
                  <span className="text-xs text-foreground font-sans">
                    <strong>Full Floating Horsehair Canvas:</strong> Natural drape without synthetic fusing stiffness.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-forest dark:text-sage shrink-0 mt-0.5" />
                  <span className="text-xs text-foreground font-sans">
                    <strong>Hand-Padded Peak Lapel Roll:</strong> Graceful dimensional curve hand-stitched by master tailors.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-forest dark:text-sage shrink-0 mt-0.5" />
                  <span className="text-xs text-foreground font-sans">
                    <strong>Interactive Controls:</strong> Left-click to rotate, scroll to zoom, reset view anytime.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/70 flex flex-wrap items-center gap-3">
              <Link href="/products/bespoke-suits-model-one">
                <Button
                  variant="primary"
                  size="md"
                  className="gap-2 bg-forest hover:bg-forest/90 text-ivory dark:bg-sage dark:text-forest-dark dark:hover:bg-sage/90"
                >
                  <span>Open Fullscreen Studio</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="md">
                  Book Fitting Session
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>


      {/* ========================================================================= */}
      {/* 9. DOCUMENTED HERITAGE SECTION: "Since 1979" (Light Section) */}
      {/* Authentic documented history: Mr. Nakode S Krishnan (1979), Mr. Nakode K Subramani (2005) */}
      {/* ========================================================================= */}
      <Section
        variant="default"
        eyebrow="Bengaluru Sartorial Heritage"
        title="Crafting Distinction Since 1979"
        description="Four decades of documented textile merchant integrity, bespoke tailoring discipline, and continuous showroom presence on B.V.K. Iyengar Road."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Big Editorial Year */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <span className="font-serif text-[clamp(4.5rem,9vw,9rem)] leading-none text-forest dark:text-sage font-light block pb-3 sm:pb-4">
              1979
            </span>
            <span className="text-xs uppercase tracking-widest-luxury text-brass font-sans font-semibold mt-4 sm:mt-5 block">
              Bengaluru, Karnataka
            </span>
            <p className="text-sm text-muted font-sans mt-3.5 leading-relaxed">
              Founded on the bedrock of genuine mill fabric integrity and exacting customer service.
            </p>
          </div>

          {/* Documented Milestones */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl border border-border bg-surface shadow-soft flex flex-col justify-between">
              <div>
                <Badge variant="subtle" size="sm" className="mb-4">
                  1979 • Inception
                </Badge>
                <h4 className="font-serif text-2xl text-foreground font-normal">
                  Incorporated by Mr. Nakode S Krishnan
                </h4>
                <p className="text-xs sm:text-sm text-muted font-sans mt-3 leading-relaxed">
                  Selection Textiles was established in the historic commerce heart of Bengaluru by Mr. Nakode S Krishnan, creating a trusted destination for fine retail and wholesale suiting and shirting.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-border/70 text-xs font-sans text-forest dark:text-sage font-medium">
                Four Decades of Bangalore Trade
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-border bg-surface shadow-soft flex flex-col justify-between">
              <div>
                <Badge variant="accent" size="sm" className="mb-4 bg-forest text-ivory">
                  2005 • Evolution
                </Badge>
                <h4 className="font-serif text-2xl text-foreground font-normal">
                  New Directions under Mr. Nakode K Subramani
                </h4>
                <p className="text-xs sm:text-sm text-muted font-sans mt-3 leading-relaxed">
                  Mr. Nakode K Subramani expanded the house into contemporary made-to-measure tailoring, ceremonial couture, and institutional workforce uniform programs across 11 industry sectors.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-border/70 flex items-center justify-between text-xs font-sans">
                <Link href="/heritage" className="text-forest dark:text-sage hover:underline flex items-center gap-1 font-medium">
                  <span>Read Heritage Archive</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>


      {/* ========================================================================= */}
      {/* 11. SHOWROOM SECTION (Warm Ivory & Architectural Ambiance) */}
      {/* Documented address, directions, phone, email, book consultation */}
      {/* ========================================================================= */}
      <Section
        variant="default"
        eyebrow="Bengaluru Destination"
        title="Visit Our B.V.K. Iyengar Road Showroom"
        description="Experience fine cloth rolls with your own hands, discuss custom made-to-measure tailoring with master cutters, or schedule a corporate uniform consultation."
      >
        <div className="p-8 sm:p-12 lg:p-16 rounded-[2.5rem] border border-border bg-surface shadow-soft-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <Badge variant="accent" size="sm" className="w-fit bg-forest text-ivory">
              Showroom & Cutting Bench
            </Badge>

            <h3 className="font-serif text-3xl sm:text-4xl text-foreground font-normal leading-tight">
              Selection Textiles Bengaluru
            </h3>

            <div className="space-y-3 pt-2 text-sm text-charcoal/80 dark:text-ivory/80 font-sans">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-forest dark:text-sage shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  #16-17, &ldquo;D.Rangaiah Complex&rdquo;,<br />
                  B.V.K. Iyengar Road, Bengaluru – 560053,<br />
                  Karnataka, India
                </p>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Phone className="w-5 h-5 text-forest dark:text-sage shrink-0" />
                <a href="tel:+919844675222" className="hover:underline">
                  +91-98446 75222 / 080-22258982
                </a>
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
                  className="gap-2 bg-forest hover:bg-forest/90 text-ivory dark:bg-sage dark:text-forest-dark dark:hover:bg-sage/90"
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
              <a href="tel:+919844675222">
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
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface/90 backdrop-blur-md border border-border text-center text-xs font-sans text-foreground">
                B.V.K. Iyengar Road • Bengaluru Landmark Since 1979
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
