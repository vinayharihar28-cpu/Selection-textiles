import { Product } from '@/types/product';
import { getGarmentModelUrl, DEFAULT_MODEL_URL } from '@/config/models';
import { VISUAL_ASSETS } from './assets';

/** Additional Sherwani designs supplied outside the original 42-image catalogue. */
function createSherwaniLookbookProducts(): Record<string, Product> {
  const designs = [
    ['sherwani-embroidered', 'Embroidered Sherwani', 'Embroidered ceremonial detailing', 'sherwani-embroidered.png'],
    ['midnight-blue-beaded-tuxedo', 'Midnight Blue Beaded Tuxedo', 'Evening tuxedo with beaded detailing', 'midnight-blue-beaded-tuxedo.png'],
    ['navy-gold-sherwani', 'Navy Gold Sherwani', 'Navy sherwani with gold detailing', 'navy-gold-sherwani.png'],
    ['red-brocade-sherwani', 'Red Brocade Sherwani', 'Rich red brocade ceremonial sherwani', 'red-brocade-sherwani.png'],
    ['elegant-sherwani-lobby', 'Elegant Sherwani', 'Refined sherwani for grand occasions', 'elegant-sherwani-lobby.png'],
    ['princely-ivory-sherwani', 'Princely Ivory Sherwani', 'Ivory sherwani with regal finishing', 'princely-ivory-sherwani.png'],
  ] as const;

  return Object.fromEntries(
    designs.map(([slug, name, subtitle, fileName], index) => [
      slug,
      {
        id: `prod-sherwani-lookbook-${index + 3}`,
        slug,
        sku: `SEL-TEX-SHR-${String(index + 3).padStart(3, '0')}`,
        name,
        editorialTitle: 'Sherwani Lookbook',
        subtitle,
        division: 'ceremonial_heritage',
        category: 'regal_sherwani',
        price: { formattedDisplay: 'Price on Request / In-Store Visit', isCustomQuoteOnly: true },
        shortDescription: 'Made-to-measure ceremonial tailoring with personalized fabric, finish, and fit selections.',
        editorialStory: 'Available for wedding, reception, and formal occasion commissions at our Bengaluru showroom.',
        craftsmanshipNotes: [{ title: 'Custom Ceremonial Fit', description: 'Individually fitted for comfort, structure, and an elegant occasionwear silhouette.' }],
        construction: 'Structured Ceremonial Canvas',
        handworkHours: 56,
        leadTimeWeeks: 4,
        availableFabricsCount: 28,
        heroImage: { id: `img-${slug}`, url: `/images/products/${fileName}`, alt: name, isPrimary: true, aspectRatio: 'portrait' },
        galleryImages: [],
        tags: ['Sherwanis', 'Traditional Occasionwear', 'Made-to-Measure', 'Custom Fitting'],
        isFeatured: true,
        isSignatureHeritage: true,
        inDigitalShowroom: false,
      } satisfies Product,
    ])
  );
}

export const STATIC_PRODUCTS: Record<string, Product> = {
  // 1. Suits & Blazers with 3D model
  'bespoke-suits-model-one': {
    id: 'prod-savile-6x2',
    slug: 'bespoke-suits-model-one',
    sku: 'SEL-TEX-SAV-001',
    name: 'Savile Double-Breasted 6x2',
    editorialTitle: 'The Full-Canvas Western Lounge Suit',
    subtitle: 'Sculpted double-breasted silhouette in fine worsted suiting wool.',
    division: 'bespoke_western',
    category: 'two_piece_suit',
    price: {
      formattedDisplay: 'Price on Request / In-Store Visit',
      isCustomQuoteOnly: true,
    },
    shortDescription:
      'A masterpiece of tailoring proportion adapted for tropical ease. Handcrafted in Bengaluru with full floating horsehair canvas and hand-padded peak lapels.',
    editorialStory:
      'Drafted individually upon your paper pattern, the Savile 6x2 combines a commanding structured shoulder with a soft chest drape, engineered from premium worsted wool.',
    craftsmanshipNotes: [
      {
        title: 'Full Floating Horsehair Canvas',
        description: 'Floating canvas interlining molds naturally to the wearer’s physique over time without fusing or stiffness.',
      },
      {
        title: 'Hand-Padded Peaked Lapels',
        description: 'Micro-stitches along the lapel roll create an unmistakable rolled curve.',
      },
      {
        title: 'Genuine Horn Buttons & Milanese Boutonnière',
        description: 'Finished with hand-carved horn buttons and hand-worked lapel buttonhole.',
      },
    ],
    construction: 'Full Floating Canvas',
    handworkHours: 52,
    leadTimeWeeks: 4,
    availableFabricsCount: 42,
    heroImage: {
      id: 'img-savile-hero',
      url: VISUAL_ASSETS['prod-savile-6x2'].url,
      alt: 'Savile Double-Breasted 6x2 bespoke suit',
      isPrimary: true,
      aspectRatio: 'portrait',
    },
    galleryImages: [
      {
        id: 'img-savile-1',
        url: '/images/products/classic-two-piece-suit.png',
        alt: 'Fabric texture and lapel close-up',
      },
      {
        id: 'img-savile-2',
        url: '/images/collections/suits-blazers.png',
        alt: 'Tailoring drape profile',
      },
    ],
    tags: ['Suits & Blazers', 'Full Canvas', 'Double Breasted'],
    isFeatured: true,
    isSignatureHeritage: true,
    inDigitalShowroom: true,
    modelUrl: getGarmentModelUrl('bespoke-suits-model-one'),
    model3DPath: getGarmentModelUrl('bespoke-suits-model-one'),
  },

  'classic-two-piece-suit': {
    id: 'prod-suit-002',
    slug: 'classic-two-piece-suit',
    sku: 'SEL-TEX-SUT-002',
    name: 'Classic Single-Breasted 2-Button Suit',
    editorialTitle: 'The Perennial Business Suit',
    subtitle: 'Classic notch lapel two-piece suit cut from premium worsted wool.',
    division: 'bespoke_western',
    category: 'two_piece_suit',
    price: {
      formattedDisplay: 'Price on Request / In-Store Visit',
      isCustomQuoteOnly: true,
    },
    shortDescription:
      'The foundation of the modern formal wardrobe. Cut with balanced proportions, roped sleevehead, and natural shoulder contour.',
    editorialStory:
      'Designed for executive presence and comfortable all-day wear. Each suit is cut from individually drafted paper patterns.',
    craftsmanshipNotes: [
      {
        title: 'Floating Chest Canvas',
        description: 'Ensures natural breathability and drape across temperature variations.',
      },
      {
        title: 'Precision Notch Lapel',
        description: 'Proportioned to enhance stance balance and neckline symmetry.',
      },
    ],
    construction: 'Full Floating Canvas',
    handworkHours: 46,
    leadTimeWeeks: 3,
    availableFabricsCount: 38,
    heroImage: {
      id: 'img-suit-hero',
      url: VISUAL_ASSETS['prod-classic-two-piece-suit'].url,
      alt: 'Classic Single-Breasted Suit',
      isPrimary: true,
      aspectRatio: 'portrait',
    },
    galleryImages: [],
    tags: ['Suits & Blazers', 'Single Breasted', 'Business Formal'],
    isFeatured: true,
    isSignatureHeritage: true,
    inDigitalShowroom: false,
  },

  // 2. Sherwanis (First-Class Category)
  'regal-sherwanis-model-one': {
    id: 'prod-sherwani-001',
    slug: 'regal-sherwanis-model-one',
    sku: 'SEL-TEX-SHR-001',
    name: 'Royal Sherwani Model I',
    editorialTitle: 'The Ceremonial Occasionwear Suite',
    subtitle: 'Traditional occasionwear with made-to-measure tailoring and refined presentation.',
    division: 'ceremonial_heritage',
    category: 'regal_sherwani',
    price: {
      formattedDisplay: 'Price on Request / In-Store Visit',
      isCustomQuoteOnly: true,
    },
    shortDescription:
      'Traditional occasionwear crafted with made-to-measure tailoring and refined presentation. Individually fitted to ensure pristine comfort and celebratory grandeur.',
    editorialStory:
      'Every Sherwani is constructed through our custom fitting process, honoring traditional occasionwear aesthetics with structured chest canvassing and refined finishing touches.',
    craftsmanshipNotes: [
      {
        title: 'Made-to-Measure Custom Fitting',
        description: 'Cut specifically to your shoulder slope, posture, and height for an upright ceremonial silhouette.',
      },
      {
        title: 'Structured Ceremonial Canvas',
        description: 'Engineered inner framework ensuring a clean drape throughout celebrations without creasing.',
      },
      {
        title: 'Refined Presentation',
        description: 'Clean button stances, tailored pocket welts, and rich fabric textures.',
      },
    ],
    construction: 'Structured Ceremonial Canvas',
    handworkHours: 64,
    leadTimeWeeks: 4,
    availableFabricsCount: 28,
    heroImage: {
      id: 'img-sherwani-hero',
      url: VISUAL_ASSETS['prod-regal-sherwanis-model-one'].url,
      alt: 'Royal Sherwani Model I - Traditional Occasionwear',
      isPrimary: true,
      aspectRatio: 'portrait',
    },
    galleryImages: [],
    tags: ['Sherwanis', 'Traditional Occasionwear', 'Made-to-Measure', 'Custom Fitting'],
    isFeatured: true,
    isSignatureHeritage: true,
    inDigitalShowroom: false,
  },

  'ceremonial-achkan-sherwani': {
    id: 'prod-sherwani-002',
    slug: 'ceremonial-achkan-sherwani',
    sku: 'SEL-TEX-SHR-002',
    name: 'Classic Achkan Sherwani',
    editorialTitle: 'Traditional Made-to-Measure Achkan',
    subtitle: 'Refined formal silhouette with tailored stand collar and concealed placket.',
    division: 'ceremonial_heritage',
    category: 'regal_sherwani',
    price: {
      formattedDisplay: 'Price on Request / In-Store Visit',
      isCustomQuoteOnly: true,
    },
    shortDescription:
      'Understated ceremonial attire cut with sharp waist suppression, knee-length drape, and minimalist hand detailing.',
    editorialStory:
      'A refined take on traditional occasionwear, tailored for weddings, receptions, and state dinners with custom made-to-measure fitting.',
    craftsmanshipNotes: [
      {
        title: 'Stand Collar Precision',
        description: 'Individually curved collar canvas designed to rest flush without pinching.',
      },
    ],
    construction: 'Structured Ceremonial Canvas',
    handworkHours: 54,
    leadTimeWeeks: 4,
    availableFabricsCount: 24,
    heroImage: {
      id: 'img-achkan-hero',
      url: VISUAL_ASSETS['prod-ceremonial-achkan-sherwani'].url,
      alt: 'Classic Achkan Sherwani',
      isPrimary: true,
      aspectRatio: 'portrait',
    },
    galleryImages: [],
    tags: ['Sherwanis', 'Achkan', 'Ceremonial', 'Custom Fitting'],
    isFeatured: false,
    isSignatureHeritage: true,
    inDigitalShowroom: false,
  },

  // 3. Shirts & Trousers
  'made-to-measure-formal-shirt': {
    id: 'prod-shrt-001',
    slug: 'made-to-measure-formal-shirt',
    sku: 'SEL-TEX-SHR-101',
    name: 'Made-to-Measure Formal Shirt',
    editorialTitle: 'Precision Cut Cotton Shirting',
    subtitle: 'Formal menswear tailored to your collar, yoke, and sleeve measurements.',
    division: 'bespoke_western',
    category: 'dress_shirt',
    price: {
      formattedDisplay: 'Price on Request / In-Store Visit',
      isCustomQuoteOnly: true,
    },
    shortDescription:
      'Part of our signature tailoring offering. Fine cotton shirting tailored with custom collar spread, cuff style, and precise torso tapering.',
    editorialStory:
      'Crafted from high-grade cotton fabrics. Fabric-led selection ensures breathability and all-day crispness for executive and formal occasions.',
    craftsmanshipNotes: [
      {
        title: 'Single-Needle French Seams',
        description: 'Clean inner seams that lie flat against the skin for superior longevity and comfort.',
      },
      {
        title: 'Hand-Turned Collar & Cuffs',
        description: 'Fused or unfused interlining tailored to client stiffness preference.',
      },
    ],
    construction: 'Unstructured Soft Tailoring',
    handworkHours: 12,
    leadTimeWeeks: 2,
    availableFabricsCount: 65,
    heroImage: {
      id: 'img-shirt-hero',
      url: VISUAL_ASSETS['prod-made-to-measure-formal-shirt'].url,
      alt: 'Made-to-Measure Formal Shirt',
      isPrimary: true,
      aspectRatio: 'portrait',
    },
    galleryImages: [],
    tags: ['Shirts & Trousers', 'Formal Menswear', 'Made-to-Measure', 'Cotton Shirting'],
    isFeatured: true,
    isSignatureHeritage: false,
    inDigitalShowroom: false,
  },

  'tailored-dress-trouser': {
    id: 'prod-trouser-001',
    slug: 'tailored-dress-trouser',
    sku: 'SEL-TEX-TRS-001',
    name: 'Tailored Formal Trouser',
    editorialTitle: 'Custom Waistband & Balanced Drape Trouser',
    subtitle: 'Precision-tailored trousers with fabric-led selection and coordinated styling.',
    division: 'bespoke_western',
    category: 'bespoke_trouser',
    price: {
      formattedDisplay: 'Price on Request / In-Store Visit',
      isCustomQuoteOnly: true,
    },
    shortDescription:
      'Custom cut trousers designed for a clean break or no-break hem. Available with side adjusters, belt loops, flat front, or single pleat.',
    editorialStory:
      'Tailored with a curved waistband that stays anchored to the natural waist without sliding or bunching.',
    craftsmanshipNotes: [
      {
        title: 'Curved Waistband Construction',
        description: 'Contoured to the pelvic crest for comfortable movement when seated.',
      },
    ],
    construction: 'Unstructured Soft Tailoring',
    handworkHours: 14,
    leadTimeWeeks: 2,
    availableFabricsCount: 50,
    heroImage: {
      id: 'img-trouser-hero',
      url: VISUAL_ASSETS['prod-tailored-dress-trouser'].url,
      alt: 'Tailored Formal Trouser',
      isPrimary: true,
      aspectRatio: 'portrait',
    },
    galleryImages: [],
    tags: ['Shirts & Trousers', 'Formal Menswear', 'Made-to-Measure', 'Trousers'],
    isFeatured: false,
    isSignatureHeritage: false,
    inDigitalShowroom: false,
  },

  // 4. Modi Coats & Jackets
  'modi-coat-heritage': {
    id: 'prod-modi-001',
    slug: 'modi-coat-heritage',
    sku: 'SEL-TEX-MDI-001',
    name: 'Classic Modi Coat',
    editorialTitle: 'The Bespoke Sleeveless Stand-Collar Jacket',
    subtitle: 'Part of our made-to-measure menswear collection.',
    division: 'ceremonial_heritage',
    category: 'modi_coat',
    price: {
      formattedDisplay: 'Price on Request / In-Store Visit',
      isCustomQuoteOnly: true,
    },
    shortDescription:
      'Part of our made-to-measure menswear collection. Classic sleeveless jacket with tailored stand collar, jetted pockets, and structured chest canvas.',
    editorialStory:
      'An iconic silhouette of Indian formalwear, impeccably tailored to be layered over kurta pyjamas or formal shirts for celebratory and institutional events.',
    craftsmanshipNotes: [
      {
        title: 'Molded Stand Collar',
        description: 'Structured to hold its crisp vertical line without drooping.',
      },
      {
        title: 'Chest Canvas Support',
        description: 'Lightweight canvas interlining gives the jacket architectural presence.',
      },
    ],
    construction: 'Half Canvas',
    handworkHours: 24,
    leadTimeWeeks: 3,
    availableFabricsCount: 32,
    heroImage: {
      id: 'img-modi-hero',
      url: VISUAL_ASSETS['prod-modi-coat-heritage'].url,
      alt: 'Classic Modi Coat',
      isPrimary: true,
      aspectRatio: 'portrait',
    },
    galleryImages: [],
    tags: ['Modi Coats & Jackets', 'Coats', 'Made-to-Measure', 'Stand Collar', 'Menswear'],
    isFeatured: true,
    isSignatureHeritage: true,
    inDigitalShowroom: false,
  },

  'tailored-bandhgala-coat': {
    id: 'prod-modi-002',
    slug: 'tailored-bandhgala-coat',
    sku: 'SEL-TEX-BDH-001',
    name: 'Tailored Bandhgala Formal Coat',
    editorialTitle: 'The Regal Closed-Neck Evening Coat',
    subtitle: 'Classic closed-neck coat tailored with structured shoulder and precision chest canvas.',
    division: 'ceremonial_heritage',
    category: 'modi_coat',
    price: {
      formattedDisplay: 'Price on Request / In-Store Visit',
      isCustomQuoteOnly: true,
    },
    shortDescription:
      'Part of our made-to-measure coats & jackets tailoring. Full-length sleeves, sculpted waist suppression, and hand-embroidered or horn buttons.',
    editorialStory:
      'The quintessential Indian evening coat, hand-drafted in Bengaluru. Cut from structured wool or textured raw silk with custom collar height and bespoke lining.',
    craftsmanshipNotes: [
      {
        title: 'Precision Mandarian Collar',
        description: 'Padded and shaped to sit with aristocratic poise around the neck.',
      },
      {
        title: 'Structured Floating Canvas',
        description: 'Full chest framework gives the jacket a smooth, unyielding front drape.',
      },
    ],
    construction: 'Full Floating Canvas',
    handworkHours: 42,
    leadTimeWeeks: 3,
    availableFabricsCount: 36,
    heroImage: {
      id: 'img-bandhgala-hero',
      url: VISUAL_ASSETS['prod-tailored-bandhgala-coat'].url,
      alt: 'Tailored Bandhgala Formal Coat',
      isPrimary: true,
      aspectRatio: 'portrait',
    },
    galleryImages: [],
    tags: ['Modi Coats & Jackets', 'Coats', 'Bandhgala', 'Made-to-Measure'],
    isFeatured: true,
    isSignatureHeritage: true,
    inDigitalShowroom: false,
  },

  // 5. Waistcoats
  'formal-tailored-waistcoat': {
    id: 'prod-wst-001',
    slug: 'formal-tailored-waistcoat',
    sku: 'SEL-TEX-WST-001',
    name: 'Classic Tailored Waistcoat',
    editorialTitle: 'Formal & Occasionwear Tailoring',
    subtitle: 'Positioned as part of formal and occasionwear tailoring.',
    division: 'bespoke_western',
    category: 'waistcoat',
    price: {
      formattedDisplay: 'Price on Request / In-Store Visit',
      isCustomQuoteOnly: true,
    },
    shortDescription:
      'Positioned as an essential part of formal and occasionwear tailoring. Five-button front with welt pockets, rear cinch adjuster, and silk-blend lining.',
    editorialStory:
      'Tailored with high armholes and close torso suppression to sit smoothly beneath a suit jacket or as a sharp standalone formal statement.',
    craftsmanshipNotes: [
      {
        title: 'Contoured Waist Suppression',
        description: 'Drafted to eliminate gaping and provide an athletic silhouette.',
      },
    ],
    construction: 'Half Canvas',
    handworkHours: 18,
    leadTimeWeeks: 2,
    availableFabricsCount: 40,
    heroImage: {
      id: 'img-waistcoat-hero',
      url: VISUAL_ASSETS['prod-formal-tailored-waistcoat'].url,
      alt: 'Classic Tailored Waistcoat',
      isPrimary: true,
      aspectRatio: 'portrait',
    },
    galleryImages: [],
    tags: ['Waistcoats', 'Formal', 'Occasionwear', 'Made-to-Measure'],
    isFeatured: true,
    isSignatureHeritage: false,
    inDigitalShowroom: false,
  },

  // 6. Men's Kurta Pyjama
  'heritage-kurta-pyjama': {
    id: 'prod-krta-001',
    slug: 'heritage-kurta-pyjama',
    sku: 'SEL-TEX-KRT-001',
    name: "Men's Kurta Pyjama",
    editorialTitle: 'Traditional & Occasionwear Tailoring Collection',
    subtitle: 'Presenting traditional occasionwear tailoring cut for comfort and grace.',
    division: 'ceremonial_heritage',
    category: 'kurta_pyjama',
    price: {
      formattedDisplay: 'Price on Request / In-Store Visit',
      isCustomQuoteOnly: true,
    },
    shortDescription:
      'Part of our traditional and occasionwear tailoring collection. Handcrafted in pure cotton, linen, and silk blends with custom tailored dimensions.',
    editorialStory:
      'Cut with generous movement ease through the body, side vents with concealed pockets, and custom-length churidar or straight-leg pyjama.',
    craftsmanshipNotes: [
      {
        title: 'Hand-Finished Placket',
        description: 'Clean button or loop detailing with reinforced stress points.',
      },
    ],
    construction: 'Unstructured Soft Tailoring',
    handworkHours: 16,
    leadTimeWeeks: 2,
    availableFabricsCount: 30,
    heroImage: {
      id: 'img-kurta-hero',
      url: VISUAL_ASSETS['prod-heritage-kurta-pyjama'].url,
      alt: "Men's Kurta Pyjama Ensemble",
      isPrimary: true,
      aspectRatio: 'portrait',
    },
    galleryImages: [],
    tags: ["Men's Kurta Pyjama", 'Traditional Occasionwear', 'Made-to-Measure'],
    isFeatured: true,
    isSignatureHeritage: true,
    inDigitalShowroom: false,
  },

  // 7. Polo T-Shirts
  'classic-pique-polo': {
    id: 'prod-polo-001',
    slug: 'classic-pique-polo',
    sku: 'SEL-TEX-PLO-001',
    name: 'Classic Piqué Polo T-Shirt',
    editorialTitle: 'Premium Combed Cotton Piqué Polo',
    subtitle: 'Breathable knit polo for casual and workplace uniform applications.',
    division: 'corporate_uniform_studio',
    category: 'polo_tshirts',
    price: {
      formattedDisplay: 'Wholesale & Retail Quotations Available',
      isCustomQuoteOnly: true,
    },
    shortDescription:
      'Constructed with two-ply combed cotton piqué, anti-roll rib collar, and two-button pearlized placket. Suitable for individual wear and corporate branding.',
    editorialStory:
      'Colorfast and pre-shrunk for commercial wash resistance. Ready for customized corporate logo embroidery.',
    craftsmanshipNotes: [
      {
        title: 'Anti-Curl Ribbed Collar',
        description: 'Reinforced collar points maintain a clean shape through repeated laundering.',
      },
    ],
    construction: 'Unstructured Soft Tailoring',
    handworkHours: 4,
    leadTimeWeeks: 1,
    availableFabricsCount: 18,
    heroImage: {
      id: 'img-polo-hero',
      url: VISUAL_ASSETS['prod-classic-pique-polo'].url,
      alt: 'Classic Piqué Polo T-Shirt',
      isPrimary: true,
      aspectRatio: 'portrait',
    },
    galleryImages: [],
    tags: ['Polo T-Shirts', 'Corporate Uniforms', 'Casual'],
    isFeatured: true,
    isSignatureHeritage: false,
    inDigitalShowroom: false,
  },

  // 8. Sports Wear
  'active-tracksuit-set': {
    id: 'prod-spt-001',
    slug: 'active-tracksuit-set',
    sku: 'SEL-TEX-SPT-001',
    name: 'Performance Sportswear & Tracksuit',
    editorialTitle: 'Athletic Teamwear & Active Apparel',
    subtitle: 'Engineered for sports academies, workplace fitness, and athletic squads.',
    division: 'corporate_uniform_studio',
    category: 'sports_wear',
    price: {
      formattedDisplay: 'Custom Quotation on Requirement',
      isCustomQuoteOnly: true,
    },
    shortDescription:
      'Lightweight, moisture-wicking track jacket and pant set. Reinforced stitching and flexible rib cuffs for active performance.',
    editorialStory:
      'Supplied for institutional sports teams, company athletics, and physical training departments across Bengaluru and beyond.',
    craftsmanshipNotes: [
      {
        title: 'Moisture Management Weave',
        description: 'Quick-drying polyester-spandex blend that breathes during high exertion.',
      },
    ],
    construction: 'Unstructured Soft Tailoring',
    handworkHours: 6,
    leadTimeWeeks: 2,
    availableFabricsCount: 14,
    heroImage: {
      id: 'img-sport-hero',
      url: VISUAL_ASSETS['prod-active-tracksuit-set'].url,
      alt: 'Performance Sportswear & Tracksuit',
      isPrimary: true,
      aspectRatio: 'portrait',
    },
    galleryImages: [],
    tags: ['Sports Wear', 'Tracksuits', 'Athletic Uniforms'],
    isFeatured: true,
    isSignatureHeritage: false,
    inDigitalShowroom: false,
  },

  // 9. Corporate Uniforms (Highlighting documented uniform categories)
  'corporate-executive-suit': {
    id: 'prod-corp-001',
    slug: 'corporate-executive-suit',
    sku: 'SEL-TEX-CRP-001',
    name: 'Corporate Suits & Blazers',
    editorialTitle: 'Executive Fleet & Boardroom Suiting',
    subtitle: 'Documented corporate uniform category A: Corporate Suits & Blazers.',
    division: 'corporate_uniform_studio',
    category: 'corporate_uniforms',
    price: {
      formattedDisplay: 'Corporate Quote on Request',
      isCustomQuoteOnly: true,
    },
    shortDescription:
      'Part of our documented corporate uniform collection. Standardized executive suiting and blazers engineered for daily boardroom resilience and cohesive corporate presence.',
    editorialStory:
      'Supplied in bulk or made-to-measure for corporate leadership teams, financial establishments, and front-line corporate ambassadors.',
    craftsmanshipNotes: [
      {
        title: 'Wrinkle-Resistant Performance Cloth',
        description: 'Engineered poly-wool blends that hold sharp creases through daily travel and meetings.',
      },
    ],
    construction: 'Half Canvas',
    handworkHours: 28,
    leadTimeWeeks: 3,
    availableFabricsCount: 30,
    heroImage: {
      id: 'img-corp-suit-hero',
      url: VISUAL_ASSETS['prod-corporate-executive-suit'].url,
      alt: 'Corporate Suits & Blazers',
      isPrimary: true,
      aspectRatio: 'portrait',
    },
    galleryImages: [],
    tags: ['Corporate Uniforms', 'Suits & Blazers', 'Enterprise Supply'],
    isFeatured: true,
    isSignatureHeritage: false,
    inDigitalShowroom: false,
  },
  ...createSherwaniLookbookProducts(),
};

/**
 * Retrieves a product by slug, or dynamically creates a tailored product
 * based on the slug pattern.
 */
export function getProductBySlug(slug: string): Product {
  if (STATIC_PRODUCTS[slug]) {
    return STATIC_PRODUCTS[slug];
  }

  // Derive sensible product data for any unrecognized slug
  const formattedName = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const isSuitOr3D =
    slug.includes('suit') ||
    slug.includes('savile') ||
    slug.includes('model-one') ||
    slug === '3d-garment';

  return {
    id: `prod-${slug}`,
    slug,
    sku: `SEL-TEX-${slug.toUpperCase().slice(0, 8)}`,
    name: formattedName,
    editorialTitle: `${formattedName} — Selection Textiles`,
    subtitle: 'Made-to-measure tailoring from Selection Textiles Bengaluru, established 1979.',
    division: slug.includes('sherwani') || slug.includes('modi') || slug.includes('kurta')
      ? 'ceremonial_heritage'
      : slug.includes('corp') || slug.includes('uniform')
      ? 'corporate_uniform_studio'
      : 'bespoke_western',
    category: 'two_piece_suit',
    price: {
      formattedDisplay: 'Price on Request / In-Store Visit',
      isCustomQuoteOnly: true,
    },
    shortDescription:
      'Crafted with made-to-measure precision at Selection Textiles Bengaluru. Tailored individually to your personal measurements and cloth choice.',
    editorialStory:
      'Serving retail, wholesale, tailoring, and corporate uniform clients since 1979 from our showroom in Bengaluru.',
    craftsmanshipNotes: [
      {
        title: 'Made-to-Measure Cut',
        description: 'Drafted to client measurements for optimal balance and drape.',
      },
    ],
    construction: 'Full Floating Canvas',
    handworkHours: 32,
    leadTimeWeeks: 3,
    availableFabricsCount: 30,
    heroImage: {
      id: `img-${slug}-hero`,
      url: slug.includes('sherwani')
        ? '/images/collections/sherwanis.png'
        : slug.includes('polo')
        ? '/images/collections/polo-t-shirts.png'
        : slug.includes('shirt')
        ? '/images/collections/shirts-trousers.png'
        : '/images/collections/suits-blazers.png',
      alt: formattedName,
      isPrimary: true,
      aspectRatio: 'portrait',
    },
    galleryImages: [],
    tags: ['Selection Textiles', 'Bespoke', 'Bengaluru'],
    isFeatured: true,
    isSignatureHeritage: true,
    inDigitalShowroom: slug === 'bespoke-suits-model-one',
    modelUrl: slug === 'bespoke-suits-model-one' ? getGarmentModelUrl('bespoke-suits-model-one') : undefined,
    model3DPath: slug === 'bespoke-suits-model-one' ? getGarmentModelUrl('bespoke-suits-model-one') : undefined,
  };
}
