# Hero Section & Landing Page Visual Stats & Specifications

**Project**: Selection Textiles — Heritage Website  
**Focus Area**: Landing Page (`app/page.tsx`) — Hero Collection Slideshow (`components/home/HeroCollectionSlideshow.tsx`)  
**Data Source**: `lib/data/hero-collections.ts`  
**Image Directory**: `public/images/hero/`  
**Last Updated**: October 2026  

---

## 1. Executive Summary & Core Metrics

The Selection Textiles landing page hero section is implemented as an interactive, luxury editorial slideshow showcasing the institution's **7 signature collections**. It features a responsive architecture engineered specifically for distinct desktop and mobile user experiences.

### Key Performance & Behavioral Metrics

| Metric | Specification | Implementation Detail |
| :--- | :--- | :--- |
| **Total Slides** | **7 Collections** | Fabrics, Fine Suits, Ethnics, Indo Western, Weddings, Corporate, Tailorings |
| **Slideshow Speed** | **5,000 ms (5.0s)** | Measured luxury editorial pace per slide |
| **Cycle Modes** | Auto-play + Manual | Includes top-bar Play / Pause toggle button |
| **Desktop Transition** | Cross-dissolve (1,000ms) | CSS `transition-opacity duration-1000 ease-in-out` |
| **Mobile Transition** | Cross-dissolve (700ms) | CSS `transition-opacity duration-700 ease-in-out` |
| **Text Orchestration** | 200ms phase fade | Prevents text flicker during slide transitions |
| **Touch Gesture** | Mobile swipe enabled | 45px swipe delta threshold with `onTouchStart/Move/End` |
| **Image Preloading** | Zero-latency instant decode | All slide images eagerly decoded via `img.decode()` on mount |
| **Image Optimization** | `unoptimized` flag enabled | Bypasses runtime resizing re-renders for buttery-smooth cross-fades |
| **Aspect Ratio (Native)** | **16:9 Widescreen Landscape** | Native dimensions: 1672 × 941 px (1.777:1) |

---

## 2. Complete Inventory of the 7 Hero Slides

Each slide represents one of the 7 pillars of Selection Textiles, complete with specialized editorial content, category metadata, badges, and routing:

```
[01] Fabrics ➔ [02] Fine Suits ➔ [03] Ethnics ➔ [04] Indo Western ➔ [05] Weddings Collections ➔ [06] Corporate Uniforms ➔ [07] Custom Tailorings
```

### Detailed Slide Registry

#### Slide 1: Fabrics
- **Slide Index**: `01`
- **ID & Slug**: `fabrics`
- **Category Pill**: `TEXTILE ARCHIVE`
- **Eyebrow**: `Mill Archives & Fine Textile Retail`
- **Title**: **Fabrics**
- **Subtitle**: *Raymond, Siyarams, Linen Club, Mafatlal, Ramraj, Uthayam & Italian Luxury Wool & Linen Mills*
- **Description**: Four decades of direct mill partnerships. From pure French flax linens and Super 120s–150s Merino wools to authentic South Indian handlooms and imported Italian suitings.
- **Hero Image Path**: `/images/hero/fabrics.png`
- **Explore Route**: `/fabrics`
- **Featured Sartorial Badges**:
  1. `Raymond Super 120s–150s Wool Worsteds`
  2. `Linen Club 100% French Flax Certification`
  3. `Mafatlal Heritage 2-Ply Egyptian Cottons`
- **Additional Highlights**:
  - `Ramraj & Uthayam Authentic South Indian Handlooms`
  - `Imported Italian Suiting & Shirting Rolls`

---

#### Slide 2: Fine Suits
- **Slide Index**: `02`
- **ID & Slug**: `fine-suits`
- **Category Pill**: `BESPOKE TAILORING`
- **Eyebrow**: `Bespoke Western Sartorial Atelier`
- **Title**: **Fine Suits**
- **Subtitle**: *Handcrafted 2-Piece, 3-Piece, Double-Breasted & Tuxedo Ensembles*
- **Description**: Master-tailored in Bengaluru using authentic horsehair floating canvas, hand-padded lapel rolls, functional surgeon cuffs, and Milanese buttonholes.
- **Hero Image Path**: `/images/hero/fine-suits.png`
- **Explore Route**: `/collections/suits-blazers`
- **Featured Sartorial Badges**:
  1. `Full Floating Horsehair Canvas Construction`
  2. `Hand-Padded Peak & Notch Lapel Rolls`
  3. `Functional Working Sleeve Surgeon Cuffs`
- **Additional Highlights**:
  - `Bespoke Cut from Individual Body Patterns`
  - `Interactive 3D Showroom Visualization`

---

#### Slide 3: Ethnics
- **Slide Index**: `03`
- **ID & Slug**: `ethnics`
- **Category Pill**: `TRADITIONAL WEAR`
- **Eyebrow**: `Artisanal Indian Heritage Dressing`
- **Title**: **Ethnics**
- **Subtitle**: *Hand-Placket Kurtas, Traditional Pyjamas, Churidar & Silk Sets*
- **Description**: Graceful traditional dressing tailored in breathable pure cottons, Bangalore silks, and textured linens with artisanal hand-finished plackets.
- **Hero Image Path**: `/images/hero/ethnics.png`
- **Explore Route**: `/collections/mens-kurta-pyjama`
- **Featured Sartorial Badges**:
  1. `Concealed & Hand-Stitched Plackets`
  2. `Bangalore Pure Silks & South Handloom Cottons`
  3. `Comfort-Cut Churidars & Dhoti Drape Trousers`
- **Additional Highlights**:
  - `Bespoke Side Pockets with Reinforced Bar Tacks`
  - `Festive Color Palette & Subtle Texture Weaves`

---

#### Slide 4: Indo Western
- **Slide Index**: `04`
- **ID & Slug**: `indo-western`
- **Category Pill**: `FUSION SARTORIAL`
- **Eyebrow**: `Contemporary Fusion & Architectural Layering`
- **Title**: **Indo Western**
- **Subtitle**: *Stand-Collar Modi Coats, Bandhgalas & Contoured Waistcoats*
- **Description**: A seamless blend of Indian regal silhouettes and Western structural precision. Structured Nehru collars, bespoke metal buttons, and modern asymmetrical cuts.
- **Hero Image Path**: `/images/hero/indo-western.png`
- **Explore Route**: `/collections/modi-coats-jackets`
- **Featured Sartorial Badges**:
  1. `Tailored Mandarin & Stand Collar Construction`
  2. `Curved Waistcoat Bottoms with Back-Cinch Buckles`
  3. `Structural Fusion of Indian Collar & Western Canvas`
- **Additional Highlights**:
  - `Statement Metal, Enamel & Wooden Button Details`
  - `Versatile Layering over Shirts, Kurtas & Trousers`

---

#### Slide 5: Weddings Collections
- **Slide Index**: `05`
- **ID & Slug**: `weddings-collections`
- **Category Pill**: `REGAL CEREMONIAL`
- **Eyebrow**: `Regal Ceremonial & Bridal Groom Trousseaus`
- **Title**: **Weddings Collections**
- **Subtitle**: *Royal Sherwanis, Achkans, Embroidered Bandhgalas & Groom Ensembles*
- **Description**: Grand wedding attire crafted for grooms, reception galas, and festive celebrations. Intricate zardozi threadwork, rich brocades, and made-to-measure regal drape.
- **Hero Image Path**: `/images/hero/weddings.png`
- **Explore Route**: `/collections/sherwanis`
- **Featured Sartorial Badges**:
  1. `Royal Hand-Embroidered Zardozi & Resham Threadwork`
  2. `Pure Silk Brocades & Velvet Collar Detailing`
  3. `Flawless Anatomic Tailoring for Grooms`
- **Additional Highlights**:
  - `Coordinated Stoles, Safas & Pocket Squares`
  - `Private Bengaluru Showroom Groom Styling Concierge`

---

#### Slide 6: Corporate Uniforms
- **Slide Index**: `06`
- **ID & Slug**: `corporate-uniforms`
- **Category Pill**: `INSTITUTIONAL UNIFORMS`
- **Eyebrow**: `Institutional & Multi-Sector Workforce Apparel`
- **Title**: **Corporate Uniforms**
- **Subtitle**: *11 Specialized Industry Sectors • Executive, Healthcare, Hospitality, Security & Technical*
- **Description**: Turnkey uniform programs with custom embroidery, durable industrial stitching, high-rub-fastness textiles, and bulk institutional supply across India.
- **Hero Image Path**: `/images/hero/corporate-uniforms.png`
- **Explore Route**: `/corporate`
- **Featured Sartorial Badges**:
  1. `11 Documented Industry Sectors`
  2. `Industrial Twin-Needle Reinforced Stitching`
  3. `Custom Computerized Logo Embroidery & Badging`
- **Additional Highlights**:
  - `Colorfast, Anti-Pilling, High Martindale Rub-Count`
  - `Bulk Wholesale Pan-India Delivery Logistics`

---

#### Slide 7: Custom Tailorings
- **Slide Index**: `07`
- **ID & Slug**: `custom-tailorings`
- **Category Pill**: `MADE TO MEASURE`
- **Eyebrow**: `Bespoke Made-to-Measure Sartorial Discipline`
- **Title**: **Custom Tailorings**
- **Subtitle**: *Precision Cut Dress Shirts, Pleated Trousers, Cinch Waistcoats & Fitted Blazers*
- **Description**: Over 35 individual anatomical measurements taken in our Bengaluru salon. Crafted with split-yoke shirting, side waist adjusters, and bespoke hand-finishing.
- **Hero Image Path**: `/images/hero/custom-tailoring.png`
- **Explore Route**: `/tailoring`
- **Featured Sartorial Badges**:
  1. `35+ Precise Anatomical Measurements`
  2. `Split-Yoke Handcrafted Shirting with Removable Collar Stays`
  3. `English Pleated Trousers with Brass Side Waist Adjusters`
- **Additional Highlights**:
  - `Curtain Waistband & Hand-Tacked Pocket Welts`
  - `Direct Cloth-to-Garment Consultation on B.V.K. Iyengar Road`

---

## 3. Hero Images Audit & Technical Stats

All active hero images are stored in `public/images/hero/` and delivered via Next.js static asset routing.

### Active Slideshow Images Table

| Slide # | Collection Title | Referenced File Path | Width × Height | Aspect Ratio | File Size | Format / Color | Visual Subject & Mood |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **01** | **Fabrics** | `/images/hero/fabrics.png` | `1675 × 939 px` | `1.784:1 (~16:9)` | 1.95 MB | PNG (RGBA 32-bit) | Cascading bolts of fine woolen, linen, and silk suiting lengths with gold selvedges on a dark green cutting table. |
| **02** | **Fine Suits** | `/images/hero/fine-suits.png` | `1672 × 941 px` | `1.777:1 (16:9)` | 1.75 MB | PNG (RGBA 32-bit) | Poised gentleman in charcoal full-canvas bespoke suit standing in a sunlit warm architectural studio. |
| **03** | **Ethnics** | `/images/hero/ethnics.png` | `1672 × 941 px` | `1.777:1 (16:9)` | 1.86 MB | PNG (RGBA 32-bit) | Traditional ivory & gold ethnic kurta ensemble with artisanal hand-finished placket and ceremonial drape. |
| **04** | **Indo Western** | `/images/hero/indo-western.png` | `1672 × 941 px` | `1.777:1 (16:9)` | 1.81 MB | PNG (RGBA 32-bit) | Model in a midnight navy structured Bandhgala coat and stand-collar Modi layer against heritage brass architecture. |
| **05** | **Weddings** | `/images/hero/weddings.png` | `1672 × 941 px` | `1.777:1 (16:9)` | 1.98 MB | PNG (RGBA 32-bit) | Regal bridal groom wearing royal zardozi-embroidered raw silk sherwani in a warm courtyard setting. |
| **06** | **Corporate** | `/images/hero/corporate-uniforms.png` | `1672 × 941 px` | `1.777:1 (16:9)` | 1.75 MB | PNG (RGBA 32-bit) | Two corporate professionals in tailored executive poly-wool blazer and crisp embroidered corporate uniform shirt. |
| **07** | **Tailorings** | `/images/hero/custom-tailoring.png` | `1672 × 941 px` | `1.777:1 (16:9)` | 2.02 MB | PNG (RGBA 32-bit) | Sartorial cutting bench scene with split-yoke formal shirt, pleated trousers, measuring tape, and tailoring shears. |
| — | **Total Assets** | **7 Active Slides** | **~1672 × 941 px avg** | **16:9 Widescreen** | **13.12 MB Total** | **Lossless PNG** | **High-Fidelity Editorial Photography** |

### File Naming Equivalents in `public/images/hero/`
In the directory, files exist with both hyphenated and title-cased naming conventions for cross-platform compatibility:
- `fabrics.png` ↔ `Fabrics.png` (1.95 MB)
- `fine-suits.png` ↔ `Fine Suits.png` (1.75 MB)
- `ethnics.png` ↔ `Ethenic wear.png` (1.86 MB)
- `indo-western.png` ↔ `Indo western.png` (1.81 MB)
- `weddings.png` ↔ `Wedding collections.png` (1.98 MB)
- `corporate-uniforms.png` ↔ `Corpoorate Uniforms.png` (1.75 MB)
- `custom-tailoring.png` ↔ `Custom tailoring.png` (2.02 MB)
- *Legacy/Unreferenced files*: `hero.png` and `hero_mobile.png` (1.75 MB copies of `fine-suits.png`).

---

## 4. Desktop vs. Mobile Screen Layout Comparison

The Hero slideshow uses a specialized dual-presentation architecture. Rather than relying on a single generic responsive layout that compromises mobile readability, the component renders dedicated layouts optimized for viewports:

```
┌─────────────────────────────────────────────────────────────┐
│                      VIEWPORT DETECTOR                      │
│                                                             │
│   lg: (≥ 1024px) Desktop Screen   │  < lg: (< 1024px) Mobile Screen  │
│   Cinematic Full-Bleed 100dvh     │  Card-Split Contained Viewport   │
└─────────────────────────────────────────────────────────────┘
```

### 1. Desktop Experience (`hidden lg:flex`, ≥ 1024px)

```
┌──────────────────────────────────────────────────────────────────────────┐
│ [● Bengaluru Est. 1979]                                   [|| Pause]     │
│                                                                          │
│ ┌────────────────────────────────────┐                                   │
│ │ [✦ TEXTILE ARCHIVE]                │         [FULL-BLEED BACKGROUND    │
│ │                                    │          16:9 CINEMATIC IMAGE     │
│ │ Fabrics                            │          W/ 3 INTEGRATED SCRIMS]  │
│ │                                    │                                   │
│ │ Raymond, Siyarams, Linen Club...   │                                   │
│ │                                    │                                   │
│ │ [Badge 1] [Badge 2] [Badge 3]      │                                   │
│ │                                    │                                   │
│ │ [EXPLORE FABRICS ↗] [BOOK FITTING] │    (<) (>)                        │
│ └────────────────────────────────────┘                                   │
│                                                                          │
│ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐    │
│ │ 01    │ │ 02    │ │ 03    │ │ 04    │ │ 05    │ │ 06    │ │ 07    │    │
│ │Fabrics│ │Suits  │ │Ethnics│ │Indo W.│ │Wedding│ │Corp.  │ │Tailor │    │
│ └───────┘ └───────┘ └───────┘ └───────┘ └───────┘ └───────┘ └───────┘    │
└──────────────────────────────────────────────────────────────────────────┘
```

#### Key Desktop Design Attributes:
1. **Full-Bleed Viewport Canvas**:
   - Covers `h-screen min-h-[660px] lg:h-[100dvh]`.
   - Uses `object-cover object-[center_30%]` to keep garment necklines and model faces positioned above the lower third.
2. **Three-Tier Lighting & Scrim Hierarchy (z-30)**:
   - **Left Vignette Scrim**: `bg-gradient-to-r from-black/55 via-black/25 to-transparent` ensures maximum text contrast on the editorial card.
   - **Bottom Horizon Scrim**: `bg-gradient-to-t from-black/65 via-transparent to-transparent` anchors the bottom preview cards.
   - **Top Navbar Scrim**: `h-28 sm:h-32 bg-gradient-to-b from-black/50 via-black/15 to-transparent` maintains transparent header readability.
3. **Floating Glassmorphism Editorial Card**:
   - Backdrop blur with `backdrop-blur-2xl bg-white/15 dark:bg-black/25 border-white/40 ring-1 ring-white/20`.
   - Huge serif headline (`text-3xl sm:text-5xl md:text-6xl text-white font-normal drop-shadow-md`).
   - Key sartorial badges (`bg-black/25 backdrop-blur-md border-white/25 text-white/90`).
   - Dual action CTAs: High-visibility Primary button (`bg-forest dark:bg-sage text-white uppercase font-bold`) and Secondary "Book Fitting" button.
4. **Bottom 7-Card Interactive Navigation Strip**:
   - Desktop 7-column layout (`grid lg:grid-cols-7 gap-2.5`).
   - Each slot displays a square 48px image thumbnail, collection sequence index (`01`–`07`), title, and active slide progress bar.
   - Allows users to jump directly to any collection with an instantaneous animated transition.

---

### 2. Mobile & Tablet Experience (`block lg:hidden`, < 1024px)

```
┌───────────────────────────────────────┐
│ [● Bengaluru Est. 1979]  01/07 [|| P] │
│                                       │
│ ┌───────────────────────────────────┐ │
│ │ [✦ TEXTILE ARCHIVE]               │ │
│ │                                   │ │
│ │  (<)     LANDSCAPE IMAGE     (>)  │ │
│ │          VIEWPORT (45vh)          │ │
│ │                                   │ │
│ │ [════════ PROGRESS BAR ═════════] │ │
│ └───────────────────────────────────┘ │
│                                       │
│ ┌───────────────────────────────────┐ │
│ │ Fabrics                      [01] │ │
│ │ Raymond, Siyarams, Linen Club...  │ │
│ │                                   │ │
│ │ [Badge 1] [Badge 2] [Badge 3]     │ │
│ │ ───────────────────────────────── │ │
│ │ [EXPLORE ↗]  [ENQUIRE]   [📞]     │ │
│ └───────────────────────────────────┘ │
│                                       │
│ (01 Fabrics) (02 Suits) (03 Ethnics)  │
└───────────────────────────────────────┘
```

#### Key Mobile Design Attributes:
1. **Card-Split Layout (Eliminates Face/Text Collisions)**:
   - On small screens, overlaying text directly on models obscures facial expressions and fabric details.
   - The mobile architecture separates the section into **Image Box (Top)** and **Editorial Content Card (Bottom)**.
2. **Dedicated Landscape Image Box**:
   - Compact 45vh viewport height: `h-[45vh] min-h-[280px] max-h-[380px] sm:h-[48vh] rounded-2xl sm:rounded-3xl`.
   - Subtle vertical contrast gradients `from-black/55 to-black/25`.
   - Centered circular chevron buttons (`w-9 h-9 backdrop-blur-md bg-black/45`) positioned on the lateral edges for one-handed thumb navigation.
   - Pinned top category chip (`Sparkles` + Category pill) inside the image viewport.
   - Active progress indicator bar along the bottom edge of the image container.
3. **Touch Swipe Detection Engine**:
   - Full touch listener registration: `onTouchStart`, `onTouchMove`, and `onTouchEnd`.
   - Dynamic threshold: A horizontal finger travel distance exceeding `45px` triggers previous/next slide navigation with momentum.
4. **Dedicated Information & Action Card**:
   - Rendered in `bg-surface border border-border shadow-soft`.
   - Title, collection counter pill (`01`), line-clamped subtitle, and top 3 badges.
   - **Trio of Mobile CTAs**:
     - **Primary Action**: Full-width "Explore [Collection]" button with bold contrast.
     - **Secondary Action**: "Enquire" booking button (`/contact`).
     - **Direct Dialer Action**: Dedicated phone button trigger (`tel:+918660451300`) for instant showroom phone calls with zero friction.
5. **Horizontal Swipeable Collection Chips Rail**:
   - Pinned scrollable pill rail below the card (`overflow-x-auto no-scrollbar -mx-3.5 px-3.5`).
   - Displays numbered chips (`01 Fabrics`, `02 Fine Suits`, `03 Ethnics`...) allowing instant fingertip jumping between collections.

---

## 5. Technical Comparison Summary Matrix

| Attribute | Desktop Implementation | Mobile / Tablet Implementation |
| :--- | :--- | :--- |
| **Breakpoint Trigger** | `hidden lg:flex` ($\ge 1024\text{px}$) | `block lg:hidden` ($< 1024\text{px}$) |
| **Section Height** | `h-screen min-h-[660px] lg:h-[100dvh]` | Dynamic flow (`pt-[82px] pb-6`) |
| **Image Presentation** | Full-bleed background viewport | Contained landscape box (`45vh`, 280–380px) |
| **Text Positioning** | Floating left frosted glass card | Dedicated surface card below the image |
| **Navigation Modality** | 7 bottom preview thumbnails + chevrons | Touch swipe + Chevrons + Pill rail |
| **Quick Slide Jump** | 7-card grid with 48px square thumbs | Horizontal scrollable chip rail |
| **Top Status Bar** | Top-left Est. 1979 pill, Top-right Pause | Est. 1979 pill, `01/07` counter, Pause button |
| **Call-To-Actions** | "Explore [Name]" + "Book Fitting" | "Explore [Name]" + "Enquire" + Phone Call button |
| **Image Focal Alignment** | `object-cover object-[center_30%]` | `object-cover object-[center_28%]` |
| **Scanned Contrast Scrims** | 3 multi-directional gradients | 1 subtle vertical vignette |
| **Hardware Acceleration** | `will-change-[opacity]` on stack | `will-change-[opacity]` on stack |

---

## 6. Verification & File Locations

- **Page Entry Point**: [app/page.tsx](file:///d:/Education/Freelancing/SSK/Selection%20textiles/Website/app/page.tsx)
- **Slideshow Component**: [components/home/HeroCollectionSlideshow.tsx](file:///d:/Education/Freelancing/SSK/Selection%20textiles/Website/components/home/HeroCollectionSlideshow.tsx)
- **Collection Data Registry**: [lib/data/hero-collections.ts](file:///d:/Education/Freelancing/SSK/Selection%20textiles/Website/lib/data/hero-collections.ts)
- **Hero Image Assets**: `public/images/hero/`
- **Official Documentation**: `docs/HERO_SECTION_STATS.md`
