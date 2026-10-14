export interface CollectionGalleryItem {
  id: string;
  imageNumber: number;
  title: string;
  category: string;
  image: string;
  badge?: string;
  description: string;
  specs?: { label: string; value: string }[];
}

export interface HeroCollectionSlide {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  pill: string;
  subtitle: string;
  description: string;
  heroImage: string;
  sectionId: string;
  exploreRoute: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  gallery: CollectionGalleryItem[];
  desktopPosition?: string;
  mobilePosition?: string;
}

export const HERO_COLLECTIONS: HeroCollectionSlide[] = [
  // 1. FABRICS
  {
    id: 'fabrics',
    slug: 'fabrics',
    title: 'Fabrics',
    eyebrow: 'Mill Archives & Fine Textile Retail',
    pill: 'TEXTILE ARCHIVE',
    subtitle: 'Raymond, Siyarams, Linen Club, Mafatlal, Ramraj, Uthayam & Italian Luxury Wool & Linen Mills',
    description:
      'Four decades of direct mill partnerships. From pure French flax linens and Super 120s–150s Merino wools to authentic South Indian handlooms and imported Italian suitings.',
    heroImage: '/images/hero/fabrics.png',
    desktopPosition: '72% 52%',
    mobilePosition: '68% 60%',
    sectionId: 'collection-fabrics',
    exploreRoute: '/fabrics',
    highlights: [
      'Raymond Super 120s–150s Wool',
      'Linen Club 100% French Flax',
      'Mafatlal 2-Ply Cottons',
      'South Indian Handlooms',
      'Italian Suiting & Shirting',
    ],
    specs: [
      { label: 'Documented Mills', value: '7 Major Mills + Italian Importers' },
      { label: 'Running Inventory', value: '400+ Bolt Variations' },
      { label: 'Retail & Wholesale', value: 'Custom Cut Meterage Available' },
      { label: 'Heritage', value: 'Est. 1979 in Bengaluru' },
    ],
    gallery: [
      {
        id: 'fabrics-master',
        imageNumber: 7,
        title: 'Fabrics — Master Collection Archive',
        category: 'Textile Archive',
        image: '/collections-images/7.png',
        badge: 'Curated Rolls',
        description: 'Comprehensive running rolls of all suiting, shirting, and trouser fabrics curated directly from India’s top tier textile mills.',
        specs: [
          { label: 'Weave Type', value: 'Twill, Herringbone, Poplin, Plain' },
          { label: 'Available Widths', value: '58" / 60" Suiting, 36" / 58" Shirting' },
        ],
      },
      {
        id: 'fabrics-raymond',
        imageNumber: 35,
        title: 'Raymond Fine Suiting & Worsteds',
        category: 'Indian Luxury Mill',
        image: '/collections-images/35.png',
        badge: 'Super 120s – 150s',
        description: 'India’s legendary woolen mill standard. Exquisite all-wool and poly-wool worsteds designed for all-season corporate and wedding tailoring.',
        specs: [
          { label: 'Composition', value: 'Merino Wool & Wool-Rich Blends' },
          { label: 'Recommended For', value: 'Bespoke Suits, Tuxedos & Blazers' },
        ],
      },
      {
        id: 'fabrics-siyarams',
        imageNumber: 36,
        title: "Siyaram's Royal Suiting",
        category: 'Indian Mill Archive',
        image: '/collections-images/36.png',
        badge: 'Crease Resistant',
        description: 'High-durability poly-viscose and poly-wool blends engineered for daily executive travel, corporate trousers, and formal blazers.',
        specs: [
          { label: 'Composition', value: 'Poly-Viscose & Micro-Poly Blends' },
          { label: 'Finish', value: 'Wrinkle Recovery & Soil Release' },
        ],
      },
      {
        id: 'fabrics-linen-club',
        imageNumber: 37,
        title: 'Linen Club Pure Flax',
        category: 'European Flax Certified',
        image: '/collections-images/37.png',
        badge: '100% French Flax',
        description: 'The global benchmark for pure linen fabrics. Spun from authentic French and Belgian flax, offering unparalleled breathability and organic texture.',
        specs: [
          { label: 'Composition', value: '100% Pure Certified European Flax' },
          { label: 'Ideal For', value: 'Summer Jackets, Modi Coats & Kurtas' },
        ],
      },
      {
        id: 'fabrics-mafatlal',
        imageNumber: 38,
        title: 'Mafatlal Heritage Cottons',
        category: 'Heritage Shirting',
        image: '/collections-images/38.png',
        badge: 'High-Count 2-Ply',
        description: 'Historic Mumbai mill renowned for crisp formal shirting, uniform-grade drill fabrics, and soft-touch daily office wear.',
        specs: [
          { label: 'Composition', value: '100% Combed Compact Cotton' },
          { label: 'Weave', value: 'Broadcloth, Oxford & Pinpoint' },
        ],
      },
      {
        id: 'fabrics-ramraj',
        imageNumber: 39,
        title: 'Ramraj Traditional Dhotis & Silks',
        category: 'Traditional South Indian',
        image: '/collections-images/39.png',
        badge: 'Pattu & Gold Zari',
        description: 'Authentic South Indian festive weaves. Pure cotton dhotis with gold zari borders, matching angavastram, and rich silk ceremonial fabrics.',
        specs: [
          { label: 'Origin', value: 'Tamil Nadu & Karnataka Weaves' },
          { label: 'Border Detailing', value: 'Pure Gold & Copper Zari' },
        ],
      },
      {
        id: 'fabrics-uthayam',
        imageNumber: 40,
        title: 'Uthayam Handloom Weaves',
        category: 'Fine Handloom Cloth',
        image: '/collections-images/40.png',
        badge: 'Handloom Authenticity',
        description: 'Renowned festive handloom cloth engineered with exceptional yarn counts for traditional South Indian weddings and ritual celebrations.',
        specs: [
          { label: 'Yarn Count', value: '100s / 120s Fine Handloom Cotton' },
          { label: 'Occasion', value: 'Traditional Temple & Wedding Rituals' },
        ],
      },
      {
        id: 'fabrics-italian-shirting',
        imageNumber: 41,
        title: 'Italian Shirting & Trouser Cloths',
        category: 'European Imported',
        image: '/collections-images/41.png',
        badge: 'Egyptian Giza Cotton',
        description: 'Imported Italian mill lengths featuring silky Egyptian Giza long-staple cottons with rich silky hand-feel and vibrant color depth.',
        specs: [
          { label: 'Import Provenance', value: 'Northern Italy Mills' },
          { label: 'Yarn Count', value: 'Double Twist 120/2 and 140/2' },
        ],
      },
      {
        id: 'fabrics-italian-suiting',
        imageNumber: 42,
        title: 'Italian Blazer & Suit Cloths',
        category: 'European Luxury Worsteds',
        image: '/collections-images/42.png',
        badge: 'Super 130s Merino',
        description: 'Lustrous, lightweight Italian suiting cloths milled from Australian extra-fine Merino wool. Effortless natural drape for high-end tailoring.',
        specs: [
          { label: 'Weight', value: '240 – 280 GSM (Four Season)' },
          { label: 'Drape Quality', value: 'Supple & Fluid Sartorial Fall' },
        ],
      },
    ],
  },

  // 2. FINE SUITS
  {
    id: 'fine-suits',
    slug: 'fine-suits',
    title: 'Fine Suits',
    eyebrow: 'Bespoke Western Sartorial Atelier',
    pill: 'BESPOKE TAILORING',
    subtitle: 'Handcrafted 2-Piece, 3-Piece, Double-Breasted & Tuxedo Ensembles',
    description:
      'Master-tailored in Bengaluru using authentic horsehair floating canvas, hand-padded lapel rolls, functional surgeon cuffs, and Milanese buttonholes.',
    heroImage: '/images/hero/fine-suits.png',
    desktopPosition: '76% 8%',
    mobilePosition: '74% 10%',
    sectionId: 'collection-fine-suits',
    exploreRoute: '/collections/suits-blazers',
    highlights: [
      'Full Floating Horsehair Canvas Construction',
      'Hand-Padded Peak & Notch Lapel Rolls',
      'Functional Working Sleeve Surgeon Cuffs',
      'Bespoke Cut from Individual Body Patterns',
      'Interactive 3D Showroom Visualization',
    ],
    specs: [
      { label: 'Tailoring Construction', value: 'Full Canvas / Half Canvas' },
      { label: 'Fittings Protocol', value: 'Baste Fitting + Final Fitting' },
      { label: 'Lining Options', value: 'Bemberg Cupro / Silk Satin' },
      { label: 'Buttons', value: 'Natural Horn, Corozo & Mother of Pearl' },
    ],
    gallery: [
      {
        id: 'fine-suits-master',
        imageNumber: 1,
        title: 'Suits & Blazers — Bespoke Collection',
        category: 'Western Tailoring Master',
        image: '/collections-images/1.png',
        badge: 'Master Silhouette',
        description: 'The pinnacle of bespoke gentleman tailoring. Structured shoulders, sculpted chest drape, and architectural suppression at the waist.',
        specs: [
          { label: 'Cut', value: 'Classic Savile Row Drape' },
          { label: 'Lapel Style', value: 'Architectural Peak & Classic Notch' },
        ],
      },
      {
        id: 'fine-suits-double-breasted',
        imageNumber: 11,
        title: 'Savile Double-Breasted 6x2 Suit',
        category: 'Full Canvas Suiting',
        image: '/collections-images/11.png',
        badge: 'Full Floating Canvas',
        description: 'Timeless 6-button, 2-to-button closure with 4.25-inch hand-padded peak lapels and dual back vents. Unlined floating horsehair canvas gently molds to your physique.',
        specs: [
          { label: 'Closure', value: '6x2 Double Breasted' },
          { label: 'Canvas', value: '100% Genuine Horsehair Floating Canvas' },
        ],
      },
      {
        id: 'fine-suits-single-breasted',
        imageNumber: 12,
        title: 'Classic Single-Breasted 2-Button Suit',
        category: 'Bespoke Two-Piece',
        image: '/collections-images/12.png',
        badge: 'Signature Daily Formal',
        description: 'The cornerstone of modern executive elegance. Two-button single-breasted jacket with soft roped sleeveheads, flapped besom pockets, and tailored trousers.',
        specs: [
          { label: 'Closure', value: '2-Button Single Breasted' },
          { label: 'Shoulder', value: 'Soft Tailored Pagoda / Natural Roll' },
        ],
      },
      {
        id: 'fine-suits-italian-cloth',
        imageNumber: 42,
        title: 'Italian Wool Suiting Bolts',
        category: 'Cloth Selection',
        image: '/collections-images/42.png',
        badge: 'Super 130s Worsteds',
        description: 'Premium Italian wool suiting yardage available directly at our cutting tables for bespoke suit commissions.',
        specs: [
          { label: 'Fabric Mill', value: 'Imported Biella Mills' },
          { label: 'Seasonality', value: 'All-Year Breathable Weave' },
        ],
      },
    ],
  },

  // 3. ETHNICS
  {
    id: 'ethnics',
    slug: 'ethnics',
    title: 'Ethnics',
    eyebrow: 'Artisanal Indian Heritage Dressing',
    pill: 'TRADITIONAL WEAR',
    subtitle: 'Hand-Placket Kurtas, Traditional Pyjamas, Churidar & Silk Sets',
    description:
      'Graceful traditional dressing tailored in breathable pure cottons, Bangalore silks, and textured linens with artisanal hand-finished plackets.',
    heroImage: '/images/hero/ethnics.png',
    desktopPosition: '75% 8%',
    mobilePosition: '74% 10%',
    sectionId: 'collection-ethnics',
    exploreRoute: '/collections/mens-kurta-pyjama',
    highlights: [
      'Concealed & Hand-Stitched Plackets',
      'Bangalore Pure Silks & South Handloom Cottons',
      'Comfort-Cut Churidars & Dhoti Drape Trousers',
      'Bespoke Side Pockets with Reinforced Bar Tacks',
      'Festive Color Palette & Subtle Texture Weaves',
    ],
    specs: [
      { label: 'Silhouettes', value: 'Straight Kurta, Pathani, Short Kurta' },
      { label: 'Fabrics', value: 'Mulmul Cotton, Tussar Silk, Slub Linen' },
      { label: 'Occasion', value: 'Festive, Pujas, Traditional Gatherings' },
      { label: 'Cut', value: 'Made-to-Measure Comfort & Grace' },
    ],
    gallery: [
      {
        id: 'ethnics-kurta-master',
        imageNumber: 6,
        title: "Men's Kurta Pyjama — Master Cover",
        category: 'Heritage Ethnic Collection',
        image: '/collections-images/6.png',
        badge: 'Signature Traditional',
        description: 'Refined ethnic tailoring harmonizing royal Indian silhouettes with comfortable contemporary cuts for modern celebrations.',
        specs: [
          { label: 'Collar Style', value: 'Mandarin Stand Collar' },
          { label: 'Length', value: 'Knee Length Traditional Drape' },
        ],
      },
      {
        id: 'ethnics-heritage-ensemble',
        imageNumber: 20,
        title: "Heritage Men's Kurta Pyjama Ensemble",
        category: 'Festive Ceremonial',
        image: '/collections-images/20.png',
        badge: 'Hand-Finished Placket',
        description: 'Handcrafted kurta ensemble cut from fine cotton-silk blend with side slits, deep pockets, and coordinated pyjama bottoms.',
        specs: [
          { label: 'Yarn', value: 'Breathable Cotton-Silk Blend' },
          { label: 'Bottom Silhouette', value: 'Classic Drawstring Pyjama / Churidar' },
        ],
      },
      {
        id: 'ethnics-ramraj-silk',
        imageNumber: 39,
        title: 'Ramraj Traditional Silk Dhotis',
        category: 'Authentic South Indian',
        image: '/collections-images/39.png',
        badge: 'Gold Zari Border',
        description: 'Pure silk ceremonial dhotis with intricate gold border weaving, matching angavastram for South Indian traditional ceremonies.',
        specs: [
          { label: 'Origin', value: 'South Indian Weaving Cluster' },
          { label: 'Border', value: 'Kasavu / Pure Zari Gold Border' },
        ],
      },
      {
        id: 'ethnics-uthayam-handloom',
        imageNumber: 40,
        title: 'Uthayam Festive Handloom Cloth',
        category: 'Handloom Cotton',
        image: '/collections-images/40.png',
        badge: '100% Pure Cotton',
        description: 'Crisp, handwoven ceremonial cottons tailored for pooja ceremonies and family celebrations.',
        specs: [
          { label: 'Finish', value: 'Crisp Mercerized Finish' },
          { label: 'Comfort', value: 'All-Day Tropical Breathability' },
        ],
      },
    ],
  },

  // 4. INDO WESTERN
  {
    id: 'indo-western',
    slug: 'indo-western',
    title: 'Indo Western',
    eyebrow: 'Contemporary Fusion & Architectural Layering',
    pill: 'FUSION SARTORIAL',
    subtitle: 'Stand-Collar Modi Coats, Bandhgalas & Contoured Waistcoats',
    description:
      'A seamless blend of Indian regal silhouettes and Western structural precision. Structured Nehru collars, bespoke metal buttons, and modern asymmetrical cuts.',
    heroImage: '/images/hero/indo-western.png',
    desktopPosition: '75% 8%',
    mobilePosition: '74% 10%',
    sectionId: 'collection-indo-western',
    exploreRoute: '/collections/modi-coats-jackets',
    highlights: [
      'Tailored Mandarin & Stand Collar Construction',
      'Curved Waistcoat Bottoms with Back-Cinch Buckles',
      'Structural Fusion of Indian Collar & Western Canvas',
      'Statement Metal, Enamel & Wooden Button Details',
      'Versatile Layering over Shirts, Kurtas & Trousers',
    ],
    specs: [
      { label: 'Garment Types', value: 'Modi Coats, Bandhgalas, Tuxedo Vests' },
      { label: 'Interlining', value: 'Fused Structured Canvas Chest' },
      { label: 'Collar Style', value: 'Nehru Collar with Throat Latch' },
      { label: 'Styling', value: 'Pairs with Trousers or Jodhpurs' },
    ],
    gallery: [
      {
        id: 'indo-modi-master',
        imageNumber: 4,
        title: 'Modi Coats & Jackets — Master Collection',
        category: 'Stand-Collar Tailoring',
        image: '/collections-images/4.png',
        badge: 'Contemporary Fusion',
        description: 'The quintessential modern Indian formal layer. Clean stand-collar cut with welted chest and waist flap pockets.',
        specs: [
          { label: 'Closure', value: '5-Button Center Front' },
          { label: 'Pockets', value: 'Chest Welt + Dual Flap Hip Pockets' },
        ],
      },
      {
        id: 'indo-classic-modi',
        imageNumber: 17,
        title: 'Classic Modi Coat',
        category: 'Sleeveless Jacket',
        image: '/collections-images/17.png',
        badge: 'Heritage Formal',
        description: 'Impeccably tailored sleeveless stand-collar Modi jacket crafted from textured suiting fabric with satin piped pocket welts.',
        specs: [
          { label: 'Buttons', value: 'Custom Enamel Shank Buttons' },
          { label: 'Lining', value: 'Contrast Silky Viscose Satin' },
        ],
      },
      {
        id: 'indo-bandhgala',
        imageNumber: 18,
        title: 'Tailored Bandhgala Formal Coat',
        category: 'Evening Royal Coat',
        image: '/collections-images/18.png',
        badge: 'Black-Tie Indian Formal',
        description: 'Full-sleeve structured Bandhgala coat combining regal Indian neckline with Savile Row sleeve setting and tailored waist suppression.',
        specs: [
          { label: 'Shoulder', value: 'Lightly Padded British Shoulder' },
          { label: 'Back', value: 'Double Side Vents for Fluid Seating' },
        ],
      },
      {
        id: 'indo-waistcoat-master',
        imageNumber: 5,
        title: 'Waistcoats — Occasionwear Master',
        category: 'Sartorial Waistcoats',
        image: '/collections-images/5.png',
        badge: 'Contoured Fit',
        description: 'Master collection of contoured vests crafted for formal layer styling, wedding receptions, and black-tie cocktails.',
        specs: [
          { label: 'Front Cut', value: 'Angled Peak Bottom / Straight Hem' },
          { label: 'Pocket Styling', value: 'Double Jet Welts' },
        ],
      },
      {
        id: 'indo-classic-waistcoat',
        imageNumber: 19,
        title: 'Classic Tailored Waistcoat',
        category: 'Formal Vest',
        image: '/collections-images/19.png',
        badge: 'Back-Cinch Adjustment',
        description: 'Fitted waistcoat with functional back-cinch adjuster strap, deep armhole curve for shirts, and handcrafted buttonholes.',
        specs: [
          { label: 'Hardware', value: 'Vintage Brass Cinch Slider' },
          { label: 'Back Fabric', value: 'Heavyweight Satin / Match Cloth' },
        ],
      },
    ],
  },

  // 5. WEDDING COLLECTIONS
  {
    id: 'weddings-collections',
    slug: 'wedding-collections',
    title: 'Weddings Collections',
    eyebrow: 'Regal Ceremonial & Bridal Groom Trousseaus',
    pill: 'REGAL CEREMONIAL',
    subtitle: 'Royal Sherwanis, Achkans, Embroidered Bandhgalas & Groom Ensembles',
    description:
      'Grand wedding attire crafted for grooms, reception galas, and festive celebrations. Intricate zardozi threadwork, rich brocades, and made-to-measure regal drape.',
    heroImage: '/images/hero/weddings.png',
    desktopPosition: '74% 8%',
    mobilePosition: '73% 10%',
    sectionId: 'collection-weddings-collections',
    exploreRoute: '/collections/sherwanis',
    highlights: [
      'Royal Hand-Embroidered Zardozi & Resham Threadwork',
      'Pure Silk Brocades & Velvet Collar Detailing',
      'Flawless Anatomic Tailoring for Grooms',
      'Coordinated Stoles, Safas & Pocket Squares',
      'Private Bengaluru Showroom Groom Styling Concierge',
    ],
    specs: [
      { label: 'Occasions', value: 'Barat, Wedding Ceremony, Sangeet & Reception' },
      { label: 'Garment Length', value: 'Below Knee Regal Achkan Drape' },
      { label: 'Accents', value: 'Handmade Metal Shank Buttons & Epaulettes' },
      { label: 'Delivery Time', value: 'Made-to-Measure Bespoke Schedule' },
    ],
    gallery: [
      {
        id: 'wedding-sherwani-master',
        imageNumber: 2,
        title: 'Sherwanis — Royal Occasionwear Master',
        category: 'Ceremonial Master',
        image: '/collections-images/2.png',
        badge: 'Imperial Lineage',
        description: 'The definitive royal groom silhouette. Sculpted chest, high mandarin collar, and regal flare crafted for wedding magnificence.',
        specs: [
          { label: 'Embroidery', value: 'Tone-on-tone Resham & Antique Zari' },
          { label: 'Cut', value: 'Imperial Flared Hem with Front Slit' },
        ],
      },
      {
        id: 'wedding-royal-sherwani',
        imageNumber: 13,
        title: 'Royal Sherwani Model I',
        category: 'Bespoke Groom Sherwani',
        image: '/collections-images/13.png',
        badge: 'Zari Accents',
        description: 'Majestic ivory and gold groom sherwani with rich textured brocade and hand-finished placket. Engineered for comfortable movement during ceremony rituals.',
        specs: [
          { label: 'Base Cloth', value: 'Handloom Raw Silk & Jacquard' },
          { label: 'Buttons', value: 'Antique Gold Filigree Shank Buttons' },
        ],
      },
      {
        id: 'wedding-classic-achkan',
        imageNumber: 14,
        title: 'Classic Achkan Sherwani',
        category: 'Aristocratic Achkan',
        image: '/collections-images/14.png',
        badge: 'Minimal Regal Line',
        description: 'Clean, understated aristocratic achkan featuring architectural front closure, tailored waistline, and discreet welt pocket detailing.',
        specs: [
          { label: 'Silhouette', value: 'Slim Contoured Achkan' },
          { label: 'Styling', value: 'Pairs with Churidar & Velvet Stole' },
        ],
      },
      {
        id: 'wedding-reception-bandhgala',
        imageNumber: 18,
        title: 'Bespoke Reception Bandhgala',
        category: 'Evening Reception Coat',
        image: '/collections-images/18.png',
        badge: 'Black-Tie Sangeet',
        description: 'Impeccable dark formal Bandhgala coat tailored for cocktail evenings and wedding receptions with rich silk pocket square.',
        specs: [
          { label: 'Fabric', value: 'Italian Black Wool-Silk Blend' },
          { label: 'Lining', value: 'Burgundy Cupro Jacquard Lining' },
        ],
      },
    ],
  },

  // 6. CORPORATE UNIFORMS
  {
    id: 'corporate-uniforms',
    slug: 'corporate-uniforms',
    title: 'Corporate Uniforms',
    eyebrow: 'Institutional Workforce Apparel',
    pill: 'WORKFORCE APPAREL',
    subtitle: 'Executive suiting, hospitality, healthcare & technical uniforms for 11 industry sectors.',
    description:
      'Turnkey uniform programs with custom embroidery, durable industrial stitching, high-rub-fastness textiles, and bulk institutional supply across India.',
    heroImage: '/images/hero/corporate-uniforms.png',
    desktopPosition: '75% 8%',
    mobilePosition: '74% 10%',
    sectionId: 'collection-corporate-uniforms',
    exploreRoute: '/corporate',
    highlights: [
      '11 Industry Sectors',
      'Reinforced Stitching',
      'Custom Logo Embroidery',
      'High Durability Cloth',
      'Pan-India Bulk Supply',
    ],
    specs: [
      { label: 'Sectors Supported', value: '11 Distinct Industry Verticals' },
      { label: 'Sizing System', value: 'Standard XS–5XL + Made-to-Measure' },
      { label: 'Embroidery', value: 'Tajima Computerized Multi-Head' },
      { label: 'Order Capacity', value: '50 to 10,000+ Units per Batch' },
    ],
    gallery: [
      {
        id: 'corp-master',
        imageNumber: 10,
        title: 'Corporate Uniforms — Master Division',
        category: 'Institutional Master',
        image: '/collections-images/10.png',
        badge: '11 Sectors',
        description: 'Comprehensive workforce apparel programs engineered for corporate identity, team cohesion, and daily physical performance.',
        specs: [
          { label: 'Sectors', value: 'Executive, Healthcare, Security, Hospitality' },
          { label: 'Supply Model', value: 'B2B Enterprise Contracts' },
        ],
      },
      {
        id: 'corp-exec-suit',
        imageNumber: 23,
        title: 'Corporate Executive Two-Piece Suit',
        category: 'Corporate Executive',
        image: '/collections-images/23.png',
        badge: 'Boardroom Grade',
        description: 'Refined corporate executive suit crafted from wrinkle-recovery wool-rich blends for leadership teams, consultants, and front office managers.',
        specs: [
          { label: 'Fabric', value: 'Poly-Wool Wrinkle-Resistant Blend' },
          { label: 'Wash Care', value: 'Dry Clean / Machine Gentle' },
        ],
      },
      {
        id: 'corp-blazers',
        imageNumber: 24,
        title: 'Corporate Blazers & Suiting',
        category: 'Institutional Suiting',
        image: '/collections-images/24.png',
        badge: 'Embroidered Crest',
        description: 'Standardized institutional blazers tailored with institutional breast crest embroidery for banks, schools, and flight crews.',
        specs: [
          { label: 'Crest', value: 'Gold / Silver Bullion Wire or Machine Thread' },
          { label: 'Buttons', value: 'Engraved Metal Corporate Crest Buttons' },
        ],
      },
      {
        id: 'corp-shirts-trousers',
        imageNumber: 25,
        title: 'Formal Workforce Shirts & Trousers',
        category: 'Daily Office Uniforms',
        image: '/collections-images/25.png',
        badge: 'Easy Iron Finish',
        description: 'Durable daily office uniform shirts and coordinated trousers featuring high color fastness and sweat-absorbent weave.',
        specs: [
          { label: 'Blend', value: '65% Cotton, 35% Polyester Fine Twill' },
          { label: 'Stitch Quality', value: '18–20 Stitches per Inch' },
        ],
      },
      {
        id: 'corp-polos',
        imageNumber: 26,
        title: 'Polo Neck Team T-Shirts',
        category: 'Casual Corporate',
        image: '/collections-images/26.png',
        badge: '240 GSM Piqué',
        description: 'Heavyweight combed cotton piqué polo shirts with reinforced collar ribs, double-stitched hem, and custom logo chest embroidery.',
        specs: [
          { label: 'Knit', value: 'Honey-Comb Piqué 100% Combed Cotton' },
          { label: 'Collar', value: 'Anti-Curl Jacquard Rib Collar' },
        ],
      },
      {
        id: 'corp-hoodies',
        imageNumber: 27,
        title: 'Tech Campus & Winter Hoodies',
        category: 'Tech Enterprise Apparel',
        image: '/collections-images/27.png',
        badge: '320 GSM Brushed Fleece',
        description: 'Premium brushed cotton fleece hoodies with kangaroo pockets, thumbholes, and screen-printed or embroidered tech enterprise branding.',
        specs: [
          { label: 'Material', value: 'Super-Soft Ring-Spun Cotton Fleece' },
          { label: 'Hood', value: 'Double-Layered Hood with Flat Drawstrings' },
        ],
      },
      {
        id: 'corp-round-neck',
        imageNumber: 28,
        title: 'Round Neck Cotton T-Shirts',
        category: 'Promotional & Staff Tees',
        image: '/collections-images/28.png',
        badge: '180 GSM Bio-Washed',
        description: 'Bio-washed 100% combed cotton crewneck t-shirts ideal for campus events, field technicians, and company hackathons.',
        specs: [
          { label: 'Treatment', value: 'Bio-Enzyme Washed & Silicone Softened' },
          { label: 'Dye', value: 'Reactive Dye with 4.5+ Wash Fastness' },
        ],
      },
      {
        id: 'corp-tracksuits',
        imageNumber: 29,
        title: 'Sportswear & Active Tracksuits',
        category: 'Institutional Sports',
        image: '/collections-images/29.png',
        badge: 'Micro-Poly Mesh',
        description: 'Breathable team tracksuits and athletic wear with moisture-wicking technology and reflective safety piping.',
        specs: [
          { label: 'Fabric', value: 'Quick-Dry Breathable Micro-Poly' },
          { label: 'Pockets', value: 'Zipped Secure Hand Pockets' },
        ],
      },
      {
        id: 'corp-chef-coats',
        imageNumber: 30,
        title: 'Executive Chef Coats & Culinary Wear',
        category: 'Hospitality & Culinary',
        image: '/collections-images/30.png',
        badge: 'Heat & Stain Resistant',
        description: 'Double-breasted professional chef jackets engineered with heat-deflecting heavy cotton twill, underarm ventilation eyelets, and thermometer pockets.',
        specs: [
          { label: 'Buttons', value: 'Removable Mushroom Cloth Knots' },
          { label: 'Ventilation', value: 'Underarm Mesh Cooling Vents' },
        ],
      },
      {
        id: 'corp-housekeeping',
        imageNumber: 31,
        title: 'Housekeeping & Facility Uniforms',
        category: 'Hospitality & FM',
        image: '/collections-images/31.png',
        badge: 'Durable Poly-Cotton Twill',
        description: 'Comfortable tunic and trouser sets built with chlorine-resistant dyes and reinforced stress points for hotel housekeeping teams.',
        specs: [
          { label: 'Fabric', value: 'Heavyweight Durable Twill' },
          { label: 'Fasteners', value: 'Heavy-Duty Concealed Snap Buttons' },
        ],
      },
      {
        id: 'corp-security',
        imageNumber: 32,
        title: 'Security Guard Uniforms & Epaulettes',
        category: 'Security & Guarding',
        image: '/collections-images/32.png',
        badge: 'Epaulette Shoulders',
        description: 'Authoritative crisp security officer shirts with box-pleated breast pockets, button-down shoulder epaulettes, and reinforced collar.',
        specs: [
          { label: 'Pockets', value: 'Dual Flapped Pockets with Pen Slot' },
          { label: 'Shoulder', value: 'Reinforced Epaulettes for Lanyards/Whistle' },
        ],
      },
      {
        id: 'corp-lab-coats',
        imageNumber: 33,
        title: 'Doctor & Medical Lab Coats',
        category: 'Healthcare & Pharma',
        image: '/collections-images/33.png',
        badge: 'Antimicrobial Treated',
        description: 'Sterile white knee-length doctor and lab coats woven from medical-grade cotton drill with fluid-repellent and anti-static treatment.',
        specs: [
          { label: 'Fabric', value: '100% Medical Grade Cotton Drill' },
          { label: 'Finish', value: 'Antimicrobial & Autoclave Resistant' },
        ],
      },
      {
        id: 'corp-boiler-suits',
        imageNumber: 34,
        title: 'Technician & Boiler Suits',
        category: 'Industrial & Technical',
        image: '/collections-images/34.png',
        badge: '3M Reflective Tapes',
        description: 'Heavy-duty industrial boiler suits and coveralls equipped with high-visibility 3M reflective bands, action backs, and brass two-way zippers.',
        specs: [
          { label: 'Safety', value: '3M Scotchlite 2-Inch Reflective Striping' },
          { label: 'Zippers', value: 'Heavy-Duty YKK Brass 2-Way Zip' },
        ],
      },
    ],
  },

  // 7. CUSTOM TAILORINGS
  {
    id: 'custom-tailorings',
    slug: 'custom-tailorings',
    title: 'Custom Tailorings',
    eyebrow: 'Bespoke Made-to-Measure Sartorial Discipline',
    pill: 'MADE TO MEASURE',
    subtitle: 'Precision Cut Dress Shirts, Pleated Trousers, Cinch Waistcoats & Fitted Blazers',
    description:
      'Over 35 individual anatomical measurements taken in our Bengaluru salon. Crafted with split-yoke shirting, side waist adjusters, and bespoke hand-finishing.',
    heroImage: '/images/hero/custom-tailoring.png',
    desktopPosition: '76% 8%',
    mobilePosition: '75% 10%',
    sectionId: 'collection-custom-tailorings',
    exploreRoute: '/tailoring',
    highlights: [
      '35+ Precise Anatomical Measurements',
      'Split-Yoke Handcrafted Shirting with Removable Collar Stays',
      'English Pleated Trousers with Brass Side Waist Adjusters',
      'Curtain Waistband & Hand-Tacked Pocket Welts',
      'Direct Cloth-to-Garment Consultation on B.V.K. Iyengar Road',
    ],
    specs: [
      { label: 'Craftsmanship Tradition', value: 'Bengaluru Atelier Est. 1979' },
      { label: 'Pattern Creation', value: 'Individual Hand-Drafted Paper Pattern' },
      { label: 'Custom Details', value: 'Monogramming, Contrast Thread, Horn Buttons' },
      { label: 'Turnaround Time', value: 'Standard 7–10 Days / Express Available' },
    ],
    gallery: [
      {
        id: 'tailor-master',
        imageNumber: 3,
        title: 'Shirts & Trousers — Custom Tailoring Master',
        category: 'Made-to-Measure Master',
        image: '/collections-images/3.png',
        badge: 'Individual Pattern',
        description: 'Complete sartorial shirting and trousering system. Built around your unique shoulder slope, posture, and waistline comfort.',
        specs: [
          { label: 'Patterning', value: 'Bespoke Cut Pattern for Every Client' },
          { label: 'Fabric Choice', value: 'Raymond, Linen Club, Italian Giza Cotton' },
        ],
      },
      {
        id: 'tailor-dress-shirt',
        imageNumber: 15,
        title: 'Made-to-Measure Formal Shirt',
        category: 'Bespoke Shirting',
        image: '/collections-images/15.png',
        badge: 'Split Yoke & Mother-of-Pearl',
        description: 'Cut from high-count 2-ply cotton with split shoulder yoke, single-needle French side seams, reinforced side gussets, and removable brass collar stays.',
        specs: [
          { label: 'Seam Technique', value: 'Single-Needle French Seams' },
          { label: 'Collar Options', value: 'Cutaway, Semi-Spread, Button-Down' },
        ],
      },
      {
        id: 'tailor-trouser',
        imageNumber: 16,
        title: 'Tailored Formal Trouser',
        category: 'Custom Trousering',
        image: '/collections-images/16.png',
        badge: 'Side Adjusters & Pleats',
        description: 'Classic bespoke trouser featuring brass side adjusters (eliminating belt bulk), English forward pleats, after-dinner split waistband, and heel guard tape.',
        specs: [
          { label: 'Waistband', value: 'Extended Tab with Internal Curtain Grip' },
          { label: 'Hardware', value: 'Solid Brass Buckle Side Adjusters' },
        ],
      },
      {
        id: 'tailor-waistcoat',
        imageNumber: 19,
        title: 'Classic Tailored Waistcoat',
        category: 'Custom Vest',
        image: '/collections-images/19.png',
        badge: 'Back Cinch Buckle',
        description: 'Contoured formal vest tailored to complement suit trousers and shirts with precise chest drape and custom pocket welts.',
        specs: [
          { label: 'Back Adjuster', value: 'Functional Cinch Strap with Buckle' },
          { label: 'Pockets', value: 'Lower Watch Welts & Breast Welts' },
        ],
      },
      {
        id: 'tailor-suit-cut',
        imageNumber: 11,
        title: 'Savile Double-Breasted 6x2 Suit',
        category: 'Full Canvas Suiting',
        image: '/collections-images/11.png',
        badge: 'Floating Horsehair Canvas',
        description: 'The crowning achievement of bespoke suiting, crafted from hand-selected wool worsteds to client specifications.',
        specs: [
          { label: 'Canvas', value: 'Natural Horsehair Chest Piece' },
          { label: 'Buttonholes', value: 'Hand-Cut & Hand-Stitched Milanese' },
        ],
      },
      {
        id: 'tailor-modi-vest',
        imageNumber: 17,
        title: 'Custom Modi Coat',
        category: 'Bespoke Stand-Collar',
        image: '/collections-images/17.png',
        badge: 'Mandarin Collar Tailoring',
        description: 'Individually drafted stand-collar jacket fitted cleanly over formal shirting with hand-set chest pockets.',
        specs: [
          { label: 'Collar Setting', value: 'Ergonomic Curved Stand Collar' },
          { label: 'Finishing', value: 'Hand-Finished Blind Hem' },
        ],
      },
    ],
  },
];

export function getHeroCollectionById(id: string): HeroCollectionSlide | undefined {
  return HERO_COLLECTIONS.find((c) => c.id === id || c.slug === id);
}

export function getAllGalleryItems(): CollectionGalleryItem[] {
  const all: CollectionGalleryItem[] = [];
  HERO_COLLECTIONS.forEach((col) => {
    col.gallery.forEach((item) => {
      if (!all.some((existing) => existing.imageNumber === item.imageNumber && existing.title === item.title)) {
        all.push(item);
      }
    });
  });
  return all;
}
