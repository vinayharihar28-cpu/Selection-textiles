import { VISUAL_ASSETS } from './assets';

export interface CollectionCategory {
  slug: string;
  aliases?: string[];
  title: string;
  group: 'Bespoke Tailoring' | 'Wedding Collections' | 'Indo-Western' | 'Fabrics & Casualwear' | 'Corporate';
  subtitle: string;
  season: string;
  itemsCount: number;
  category: string;
  imageUrl: string;
  localImagePath?: string;
  description: string;
  highlights: string[];
}

export const COLLECTIONS_DATA: CollectionCategory[] = [
  // =========================================================================
  // GROUP 1 — TAILORING & MENSWEAR (6 Collections)
  // =========================================================================

  // 1. Suits & Blazers
  {
    slug: 'suits-blazers',
    aliases: ['bespoke-suits', 'tailored-blazers', 'suits', 'blazers'],
    title: 'Suits & Blazers',
    group: 'Bespoke Tailoring',
    subtitle: 'Full-canvas western tailoring, two-piece suits, three-piece sets, and double-breasted blazers',
    season: 'All-Season Sartorial',
    itemsCount: 16,
    category: 'Bespoke Tailoring',
    imageUrl: VISUAL_ASSETS['col-suits-blazers'].url,
    localImagePath: VISUAL_ASSETS['col-suits-blazers'].localPath,
    description:
      'Full-canvas western tailoring, two-piece suits, three-piece sets and double-breasted blazers.',
    highlights: ['Full Floating Canvas', 'Hand-padded lapel roll', 'Interactive 3D Studio Ready'],
  },

  // 2. Sherwanis
  {
    slug: 'sherwanis',
    aliases: ['regal-sherwanis'],
    title: 'Sherwanis',
    group: 'Wedding Collections',
    subtitle: 'Traditional occasionwear and made-to-measure ceremonial attire',
    season: 'Ceremonial & Occasionwear',
    itemsCount: 12,
    category: 'Wedding & Occasionwear',
    imageUrl: VISUAL_ASSETS['col-sherwanis'].url,
    localImagePath: VISUAL_ASSETS['col-sherwanis'].localPath,
    description:
      'Traditional occasionwear, regal royal sherwanis, achkans, wedding and festive ceremonial attire.',
    highlights: ['Traditional Occasionwear', 'Made-to-Measure Tailoring', 'Custom Fitting', 'Bengaluru Showroom Consultation'],
  },

  // 3. Shirts & Trousers
  {
    slug: 'shirts-trousers',
    aliases: ['formal-shirts-trousers'],
    title: 'Shirts & Trousers',
    group: 'Bespoke Tailoring',
    subtitle: 'Formal menswear, made-to-measure fitting, and coordinated shirt & trouser styling',
    season: 'Permanent Formal Wardrobe',
    itemsCount: 20,
    category: 'Bespoke Tailoring',
    imageUrl: VISUAL_ASSETS['col-shirts-trousers'].url,
    localImagePath: VISUAL_ASSETS['col-shirts-trousers'].localPath,
    description:
      'Made-to-measure formal shirting and tailored trousers with custom pleats and side adjusters.',
    highlights: ['Formal Menswear', 'Made-to-Measure Fitting', 'Fabric-Led Selection', 'Coordinated Styling'],
  },

  // 4. Modi Coats & Jackets
  {
    slug: 'modi-coats-jackets',
    aliases: ['modi-coats', 'coats', 'jackets', 'coats-jackets'],
    title: 'Modi Coats & Jackets',
    group: 'Indo-Western',
    subtitle: 'Modi coats, Bandhgala jackets, and heritage layers with a contemporary silhouette',
    season: 'Indo-Western Edit',
    itemsCount: 14,
    category: 'Indo-Western',
    imageUrl: VISUAL_ASSETS['col-modi-coats-jackets'].url,
    localImagePath: VISUAL_ASSETS['col-modi-coats-jackets'].localPath,
    description:
      'Classic sleeveless stand-collar Modi jackets and full-sleeve Bandhgala evening coats.',
    highlights: ['Stand Collar Tailoring', 'Made-to-Measure Fit', 'Versatile Layering', 'Bengaluru Showroom Consultation'],
  },

  // 5. Waistcoats
  {
    slug: 'waistcoats',
    aliases: ['tailored-waistcoats'],
    title: 'Waistcoats',
    group: 'Wedding Collections',
    subtitle: 'Wedding and occasion waistcoats cut for a crisp, contoured silhouette',
    season: 'Wedding & Occasionwear',
    itemsCount: 10,
    category: 'Wedding & Occasionwear',
    imageUrl: VISUAL_ASSETS['col-waistcoats'].url,
    localImagePath: VISUAL_ASSETS['col-waistcoats'].localPath,
    description:
      'Contoured formal and festive waistcoats with back-cinch adjusters and bespoke pocket welts.',
    highlights: ['Formal & Occasionwear Tailoring', 'Back-Cinch Adjustment', 'Bespoke Pocket Welts', 'Custom Buttons'],
  },

  // 6. Men's Kurta Pyjama
  {
    slug: 'mens-kurta-pyjama',
    aliases: ['kurta-pyjama'],
    title: "Men's Kurta Pyjama",
    group: 'Wedding Collections',
    subtitle: 'Traditional kurta pyjama ensembles for weddings, festivities, and celebrations',
    season: 'Wedding & Festive',
    itemsCount: 12,
    category: 'Wedding & Occasionwear',
    imageUrl: VISUAL_ASSETS['col-mens-kurta-pyjama'].url,
    localImagePath: VISUAL_ASSETS['col-mens-kurta-pyjama'].localPath,
    description:
      'Traditional cotton, linen and silk kurta pyjama sets with hand-finished plackets.',
    highlights: ['Traditional Tailoring', 'Made-to-Measure Comfort', 'Fine Handloom Cottons & Silks', 'Occasionwear Elegance'],
  },

  // =========================================================================
  // GROUP 2 — FABRICS & CASUALWEAR (3 Collections)
  // =========================================================================

  // 7. Fabrics
  {
    slug: 'fabrics',
    aliases: ['textile-archives', 'mill-fabrics'],
    title: 'Fabrics',
    group: 'Fabrics & Casualwear',
    subtitle: 'Raymond, Siyarams, Linen Club, Mafatlal, Ramraj, Uthayam, and Italian collections',
    season: 'Extensive Running Stock',
    itemsCount: 40,
    category: 'Textiles & Cloth',
    imageUrl: VISUAL_ASSETS['col-fabrics'].url,
    localImagePath: VISUAL_ASSETS['col-fabrics'].localPath,
    description:
      'Running fabric rolls and textile archives including Raymond, Siyarams, Linen Club, Mafatlal, Ramraj, Uthayam and Italian collections.',
    highlights: ['Documented Brands', 'Italian Contemporary Collections', 'Retail & Wholesale', 'Suiting & Shirting'],
  },

  // 8. Polo T-Shirts
  {
    slug: 'polo-t-shirts',
    aliases: ['polo-tshirts'],
    title: 'Polo T-Shirts',
    group: 'Fabrics & Casualwear',
    subtitle: 'Classic piqué cotton polos for casual wear and corporate workplace uniforms',
    season: 'Casual & Corporate',
    itemsCount: 15,
    category: 'Casual & Corporate',
    imageUrl: VISUAL_ASSETS['col-polo-t-shirts'].url,
    localImagePath: VISUAL_ASSETS['col-polo-t-shirts'].localPath,
    description:
      'Premium combed cotton piqué polo shirts for corporate and casual wear.',
    highlights: ['Premium Piqué Knit', 'Embroidered Logo Support', 'Colorfast Palette', 'Corporate & Casual'],
  },

  // 9. Sports Wear
  {
    slug: 'sports-wear',
    aliases: ['sportswear'],
    title: 'Sports Wear',
    group: 'Fabrics & Casualwear',
    subtitle: 'Performance athletic wear, tracksuits, and active workplace apparel',
    season: 'Performance Active',
    itemsCount: 12,
    category: 'Performance & Athletics',
    imageUrl: VISUAL_ASSETS['col-sports-wear'].url,
    localImagePath: VISUAL_ASSETS['col-sports-wear'].localPath,
    description:
      'Performance athletic tracksuits, training jackets and moisture-wicking teamwear.',
    highlights: ['Breathable Fabrics', 'Durable Construction', 'Tracksuits & Active Tees', 'Institutional Supply'],
  },

  // =========================================================================
  // GROUP 3 — CORPORATE (1 Collection with 11 Documented Sectors)
  // =========================================================================

  // 10. Corporate Uniforms
  {
    slug: 'corporate-uniforms',
    aliases: ['corporate', 'workplace-uniforms'],
    title: 'Corporate Uniforms',
    group: 'Corporate',
    subtitle: 'Comprehensive workplace uniform programs across 11 industry sectors',
    season: 'Corporate & Institutional Supply',
    itemsCount: 11,
    category: 'Corporate & Institutional',
    imageUrl: VISUAL_ASSETS['col-corporate-uniforms'].url,
    localImagePath: VISUAL_ASSETS['col-corporate-uniforms'].localPath,
    description:
      'Multi-sector workforce apparel including executive, hospitality, security, culinary, medical and technical uniforms.',
    highlights: ['11 Documented Categories', 'Embroidered Company Logos', 'Bulk Wholesale Supply', 'Custom Quotations'],
  },
];

export function getCollectionBySlug(slug: string): CollectionCategory | undefined {
  return COLLECTIONS_DATA.find(
    (c) => c.slug === slug || (c.aliases && c.aliases.includes(slug))
  );
}
