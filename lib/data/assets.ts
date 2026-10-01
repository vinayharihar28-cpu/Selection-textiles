/**
 * SELECTION TEXTILES — Master Visual Asset System
 * 
 * 42 Total Visual Assets structured into 4 Visual Families:
 * A. 10 Collection Cover Images (Family 1: Collection / Editorial)
 * B. 13 Featured Garment Images (Family 2: Tailoring Craftsmanship & Detail)
 * C. 11 Corporate Sector Images (Family 3: Contextual Professional Workplace)
 * D.  8 Fabric Archive Images (Family 4: Textile Archive & Macro Weave)
 *
 * Color Palette:
 * - Primary: Deep Textile Green (#1F5F3A)
 * - Secondary: Logo Green (#44A162)
 * - Heritage Accent: Heritage Red (#D62828)
 * - Luxury Accent: Antique Gold (#B18A52)
 * - Warm Accent: Terracotta (#A85D3A)
 * - Main Background: Warm Ivory (#F7F4EC)
 * - Secondary Background: Warm Sand (#EDE4D5)
 * - Text: Deep Charcoal (#20251F)
 */

export type VisualFamily =
  | 'collection-editorial'
  | 'tailoring-detail'
  | 'corporate-context'
  | 'textile-archive';

export interface VisualAsset {
  id: string;
  slug: string;
  title: string;
  group: 'Tailoring & Menswear' | 'Fabrics & Casualwear' | 'Corporate';
  category: 'collection' | 'product' | 'corporate' | 'fabric';
  visualFamily: VisualFamily;
  localPath: string;
  url: string;
  aspectRatio: '4:5' | '16:9';
  alt: string;
  editorialEnvironment: string;
  prompt: string;
}

export const VISUAL_ASSETS: Record<string, VisualAsset> = {
  // =========================================================================
  // A. 10 COLLECTION COVER IMAGES (Family 1: Collection / Editorial)
  // Aspect Ratio: 4:5 portrait
  // =========================================================================

  'col-suits-blazers': {
    id: 'col-suits-blazers',
    slug: 'suits-blazers',
    title: 'Suits & Blazers',
    group: 'Tailoring & Menswear',
    category: 'collection',
    visualFamily: 'collection-editorial',
    localPath: '/images/collections/suits-blazers.png',
    url: '/images/collections/suits-blazers.png',
    aspectRatio: '4:5',
    alt: 'Selection Textiles Suits & Blazers Collection — Bespoke Tailoring in Warm Architectural Atelier',
    editorialEnvironment: 'Modern architectural tailoring showroom with soft morning light, muted sandstone accents, and bespoke cutting table',
    prompt:
      'Editorial fashion photography of a full-canvas bespoke tailored suit in deep charcoal worsted wool. A poised Indian gentleman in an architecturally warm atelier in Bengaluru with natural light falling across sculpted shoulders. High-end bespoke tailoring, hand-padded peak lapel roll, genuine horn buttons. Background has warm sandstone masonry, rich dark teak cutting table, and muted ivory walls (#F7F4EC). Shot on Hasselblad H6D-100c, 85mm lens, f/4, editorial luxury menswear, realistic fabric texture, natural skin tones, no plastic skin, no streetwear, 4:5 portrait aspect ratio.',
  },

  'col-sherwanis': {
    id: 'col-sherwanis',
    slug: 'sherwanis',
    title: 'Sherwanis',
    group: 'Tailoring & Menswear',
    category: 'collection',
    visualFamily: 'collection-editorial',
    localPath: '/images/collections/sherwanis.png',
    url: '/images/collections/sherwanis.png',
    aspectRatio: '4:5',
    alt: 'Selection Textiles Sherwanis Collection — Regal Ceremonial Occasionwear in Heritage Courtyard',
    editorialEnvironment: 'Heritage South Indian stone courtyard with carved monolithic pillars, filtered natural courtyard shade, and brass urn accents',
    prompt:
      'Editorial luxury Indian occasionwear photography. A stately Indian man wearing an understated raw-silk ivory sherwani with antique gold (#B18A52) thread accents and hand-carved enamel buttons. Standing in a sunlit stone courtyard with heritage architectural arches and soft warm shadows. Crisp stand collar, structured chest canvas, natural drape of raw silk. Warm sandstone and ivory stone environment (#EDE4D5). Hasselblad medium format, natural skin, authentic Indian luxury, no neon, no glittery excess, restrained regal elegance, 4:5 portrait aspect ratio.',
  },

  'col-shirts-trousers': {
    id: 'col-shirts-trousers',
    slug: 'shirts-trousers',
    title: 'Shirts & Trousers',
    group: 'Tailoring & Menswear',
    category: 'collection',
    visualFamily: 'collection-editorial',
    localPath: '/images/collections/shirts-trousers.png',
    url: '/images/collections/shirts-trousers.png',
    aspectRatio: '4:5',
    alt: 'Selection Textiles Shirts & Trousers Collection — Made-to-Measure Formal Menswear',
    editorialEnvironment: 'Contemporary tailoring salon with warm plaster finish, bespoke tailor measuring tape drape, and soft morning sunlight',
    prompt:
      'High-fashion menswear photography of made-to-measure crisp 120s two-ply cotton shirt in soft cream paired with tailored charcoal-olive trousers. Clean hand-turned cutaway collar, mother-of-pearl buttons, curved waistband with brass side adjusters. Modern bespoke salon environment with warm beige plaster walls and subtle dark teakwood furnishings. Natural diffused daylight, realistic cotton poplin texture and woolen trouser fall, relaxed confident posture, 4:5 portrait aspect ratio.',
  },

  'col-modi-coats-jackets': {
    id: 'col-modi-coats-jackets',
    slug: 'modi-coats-jackets',
    title: 'Modi Coats & Jackets',
    group: 'Tailoring & Menswear',
    category: 'collection',
    visualFamily: 'collection-editorial',
    localPath: '/images/collections/modi-coats-jackets.png',
    url: '/images/collections/modi-coats-jackets.png',
    aspectRatio: '4:5',
    alt: 'Selection Textiles Modi Coats & Jackets — Stand-Collar Heritage Tailoring',
    editorialEnvironment: 'Colonial-era heritage library with high arched wooden doorways and warm terracotta-hued tile flooring',
    prompt:
      'Editorial portrait of a distinguished Indian gentleman wearing a tailored sleeveless Modi coat in deep textile green (#1F5F3A) structured matka silk layered over an ivory linen kurta. Stiffened stand collar with precision seam, welted breast pocket with subtle folded terracotta pocket square, hand-turned metallic buttons. Setting is a heritage corridor with warm terracotta (#A85D3A) accents and ivory stone pillars. High-end editorial lighting, crisp fabric grain, 4:5 portrait aspect ratio.',
  },

  'col-waistcoats': {
    id: 'col-waistcoats',
    slug: 'waistcoats',
    title: 'Waistcoats',
    group: 'Tailoring & Menswear',
    category: 'collection',
    visualFamily: 'collection-editorial',
    localPath: '/images/collections/waistcoats.png',
    url: '/images/collections/waistcoats.png',
    aspectRatio: '4:5',
    alt: 'Selection Textiles Waistcoats — Contoured Formal & Festive Waistcoat Tailoring',
    editorialEnvironment: 'Gentleman’s club sitting room with warm walnut wood paneling, brass reading lamp glow, and warm ivory upholstery',
    prompt:
      'Editorial tailoring photograph featuring a contoured five-button waistcoat in fine herringbone worsted wool with antique brass cinch buckle visible at the tapered flank. Worn over a tailored pale ecru shirt with rolled sleeves. Warm walnut study background, soft directional tungsten-warm daylight, clean welt pockets, sharp V-neckline. Elegant formal posture, natural textile weave, 4:5 portrait aspect ratio.',
  },

  'col-mens-kurta-pyjama': {
    id: 'col-mens-kurta-pyjama',
    slug: 'mens-kurta-pyjama',
    title: "Men's Kurta Pyjama",
    group: 'Tailoring & Menswear',
    category: 'collection',
    visualFamily: 'collection-editorial',
    localPath: '/images/collections/mens-kurta-pyjama.png',
    url: '/images/collections/mens-kurta-pyjama.png',
    aspectRatio: '4:5',
    alt: "Selection Textiles Men's Kurta Pyjama — Traditional Occasionwear & Pure Handloom Fabrics",
    editorialEnvironment: 'Lush verandah of a heritage South Indian courtyard with carved Chettinad wooden pillars and warm terracotta pottery',
    prompt:
      'Editorial menswear photography of a tailored men’s kurta pyjama ensemble in raw ecru slub linen with hand-worked loop buttons. Draped with effortless dignity in a serene heritage verandah overlooking green courtyard foliage. Natural fabric slub, handloom cotton-linen drape, clean band collar, side pocket vent detail. Soft warm morning glow (#F7F4EC background), authentic Indian craftsmanship, 4:5 portrait aspect ratio.',
  },

  'col-fabrics': {
    id: 'col-fabrics',
    slug: 'fabrics',
    title: 'Fabrics',
    group: 'Fabrics & Casualwear',
    category: 'collection',
    visualFamily: 'collection-editorial',
    localPath: '/images/collections/fabrics.png',
    url: '/images/collections/fabrics.png',
    aspectRatio: '4:5',
    alt: 'Selection Textiles Fabric Archives — Mill Bolts, Pure Wool & Italian Suiting Cloths',
    editorialEnvironment: 'Bengaluru textile archive cutting room with bolts of Raymond, Linen Club, and Italian suiting stacked in orderly rows',
    prompt:
      'Editorial still-life and master tailor curation photograph of premium suiting bolts, folded linen lengths, and Italian wool rolls arranged on an oiled teak cutting table. Visible woven selvedges with gold lettering, chalk tailor markings, tailor shears, and bone measuring ruler. Warm ivory and sand background palette (#EDE4D5). Focus on tactile weave contrast: fine Super 130s worsted, crisp Irish linen, and raw silk. Mastercraft lighting, crisp macro depth of field, 4:5 portrait aspect ratio.',
  },

  'col-polo-t-shirts': {
    id: 'col-polo-t-shirts',
    slug: 'polo-t-shirts',
    title: 'Polo T-Shirts',
    group: 'Fabrics & Casualwear',
    category: 'collection',
    visualFamily: 'collection-editorial',
    localPath: '/images/collections/polo-t-shirts.png',
    url: '/images/collections/polo-t-shirts.png',
    aspectRatio: '4:5',
    alt: 'Selection Textiles Polo T-Shirts — Premium Combed Cotton Piqué',
    editorialEnvironment: 'Modern contemporary terrace lounge with sandstone masonry, natural tropical plants, and warm clean daylight',
    prompt:
      'Commercial fashion editorial of a premium combed cotton piqué polo t-shirt in deep forest textile green (#1F5F3A). Fitted athletic drape on a modern Indian professional standing in a sun-dappled modern open-air terrace. Close-up on the anti-roll ribbed collar, two-button mother-of-pearl placket, and fine honeycomb piqué knit. Warm sand architectural surroundings, natural commercial photography lighting, 4:5 portrait aspect ratio.',
  },

  'col-sports-wear': {
    id: 'col-sports-wear',
    slug: 'sports-wear',
    title: 'Sports Wear',
    group: 'Fabrics & Casualwear',
    category: 'collection',
    visualFamily: 'collection-editorial',
    localPath: '/images/collections/sports-wear.png',
    url: '/images/collections/sports-wear.png',
    aspectRatio: '4:5',
    alt: 'Selection Textiles Sports Wear — Athletic Performance Tracksuits & Training Apparel',
    editorialEnvironment: 'Architectural athletic training pavilion with clean geometric concrete, timber bleachers, and morning sunlight',
    prompt:
      'High-performance sportswear commercial editorial featuring a coordinated athletic tracksuit in matte obsidian and deep green. Athletic model in a modern training pavilion with warm wooden accents and architectural concrete. Premium matte technical fabric, flatlock athletic seams, articulated ergonomic elbow and knee panels. Crisp directional rim lighting, confident athletic stance, 4:5 portrait aspect ratio.',
  },

  'col-corporate-uniforms': {
    id: 'col-corporate-uniforms',
    slug: 'corporate-uniforms',
    title: 'Corporate Uniforms',
    group: 'Corporate',
    category: 'collection',
    visualFamily: 'collection-editorial',
    localPath: '/images/collections/corporate-uniforms.png',
    url: '/images/collections/corporate-uniforms.png',
    aspectRatio: '4:5',
    alt: 'Selection Textiles Corporate Uniform Programs — 11 Industry Sectors',
    editorialEnvironment: 'Prestige corporate headquarters lobby with travertine stone walls, warm brass architectural details, and natural atrium light',
    prompt:
      'Executive corporate outfitting editorial photograph. Two corporate professionals—an executive in a tailored navy poly-wool corporate blazer and an associate in a precision-embroidered formal corporate shirt—standing in a modern corporate atrium with travertine stone (#EDE4D5) and warm brass finishes. Crisp collar architecture, custom logo embroidery on chest pocket, durable crease-resistant weave. Professional corporate leadership demeanor, 4:5 portrait aspect ratio.',
  },

  // =========================================================================
  // B. 13 FEATURED GARMENT IMAGES (Family 2: Tailoring Craftsmanship & Detail)
  // Aspect Ratio: 4:5 portrait
  // =========================================================================

  'prod-savile-6x2': {
    id: 'prod-savile-6x2',
    slug: 'bespoke-suits-model-one',
    title: 'Savile Double-Breasted 6x2 Suit',
    group: 'Tailoring & Menswear',
    category: 'product',
    visualFamily: 'tailoring-detail',
    localPath: '/images/products/bespoke-suits-model-one.png',
    url: '/images/products/bespoke-suits-model-one.png',
    aspectRatio: '4:5',
    alt: 'Savile Double-Breasted 6x2 Suit — Full Floating Horsehair Canvas & Peaked Lapel Roll',
    editorialEnvironment: 'Master bespoke cutting room with tailored mannequin, cloth shears, and draft chalk lines',
    prompt:
      'Sartorial close-up and full torso view of a bespoke double-breasted 6x2 lounge suit in charcoal birdseye worsted wool. Emphasize the hand-padded wide peak lapel roll, structured roped shoulder sleevehead, and hand-stitched Milanese boutonnière. Floating horsehair canvas visible through natural chest drape. Neutral warm ivory background (#F7F4EC). Editorial commercial fashion photography, tactile wool texture, horn buttons, 4:5 portrait aspect ratio.',
  },

  'prod-classic-two-piece-suit': {
    id: 'prod-classic-two-piece-suit',
    slug: 'classic-two-piece-suit',
    title: 'Classic Single-Breasted 2-Button Suit',
    group: 'Tailoring & Menswear',
    category: 'product',
    visualFamily: 'tailoring-detail',
    localPath: '/images/products/classic-two-piece-suit.png',
    url: '/images/products/classic-two-piece-suit.png',
    aspectRatio: '4:5',
    alt: 'Classic Single-Breasted 2-Button Suit — Notch Lapel & Floating Canvas Construction',
    editorialEnvironment: 'Modern boardroom boardroom suite with warm timber paneling and diffused architectural sidelight',
    prompt:
      'Tailoring studio portrait of a classic single-breasted two-button executive suit in midnight navy wool. Medium close-up showing the notch lapel balance, pick stitching along collar edges, kissing sleeve cuff buttons, and cleanly pressed trouser crease. Natural shoulder silhouette with subtle padding. Architectural warm stone backdrop, soft shadow gradients, realistic tailoring detail, 4:5 portrait aspect ratio.',
  },

  'prod-regal-sherwanis-model-one': {
    id: 'prod-regal-sherwanis-model-one',
    slug: 'regal-sherwanis-model-one',
    title: 'Royal Sherwani Model I',
    group: 'Tailoring & Menswear',
    category: 'product',
    visualFamily: 'tailoring-detail',
    localPath: '/images/products/regal-sherwanis-model-one.png',
    url: '/images/products/regal-sherwanis-model-one.png',
    aspectRatio: '4:5',
    alt: 'Royal Sherwani Model I — Ceremonial Occasionwear with Hand-Turned Buttons',
    editorialEnvironment: 'Carved teakwood ancestral doorway with warm bronze lanterns and sandstone plinths',
    prompt:
      'Detailed craftsmanship photograph of a bespoke royal sherwani in textured raw tussar silk in antique champagne hue. Structured stand collar fitted flush to neck, hand-carved antique gold buttons along the centered placket, structured chest interlining. Clean symmetrical chest cut and made-to-measure posture. Warm sandstone architectural background, rich silk slub detail, no excess embroidery, understated luxury, 4:5 portrait aspect ratio.',
  },

  'prod-ceremonial-achkan-sherwani': {
    id: 'prod-ceremonial-achkan-sherwani',
    slug: 'ceremonial-achkan-sherwani',
    title: 'Classic Achkan Sherwani',
    group: 'Tailoring & Menswear',
    category: 'product',
    visualFamily: 'tailoring-detail',
    localPath: '/images/products/ceremonial-achkan-sherwani.png',
    url: '/images/products/ceremonial-achkan-sherwani.png',
    aspectRatio: '4:5',
    alt: 'Classic Achkan Sherwani — Traditional Made-to-Measure Occasionwear',
    editorialEnvironment: 'Minimalist warm heritage gallery with limewash ivory walls and antique brass vessels',
    prompt:
      'Full-length tailoring photograph of an achkan sherwani in deep forest green wool-silk blend. Knee-length clean fall with subtle waist suppression, concealed placket with single top gold loop, tailored churidar trousers gathering naturally at ankle. Warm limewashed ivory wall (#F7F4EC) with soft daylight from side. Sophisticated poise, crisp tailoring lines, 4:5 portrait aspect ratio.',
  },

  'prod-made-to-measure-formal-shirt': {
    id: 'prod-made-to-measure-formal-shirt',
    slug: 'made-to-measure-formal-shirt',
    title: 'Made-to-Measure Formal Shirt',
    group: 'Tailoring & Menswear',
    category: 'product',
    visualFamily: 'tailoring-detail',
    localPath: '/images/products/made-to-measure-formal-shirt.png',
    url: '/images/products/made-to-measure-formal-shirt.png',
    aspectRatio: '4:5',
    alt: 'Made-to-Measure Formal Shirt — Single-Needle French Seams & Hand-Turned Collar',
    editorialEnvironment: 'Tailor workshop bench with mother-of-pearl button bowls, wooden collar stays, and linen tape',
    prompt:
      'Macro craftsmanship photograph of a made-to-measure dress shirt in 140s Egyptian giza cotton twill. Focus on the semi-spread collar points with removable mother-of-pearl stays, single-needle stitching at 21 stitches per inch, split yoke back seam, and curved mitered cuff. Clean warm stone background, crisp white cotton luster, 4:5 portrait aspect ratio.',
  },

  'prod-tailored-dress-trouser': {
    id: 'prod-tailored-dress-trouser',
    slug: 'tailored-dress-trouser',
    title: 'Tailored Formal Trouser',
    group: 'Tailoring & Menswear',
    category: 'product',
    visualFamily: 'tailoring-detail',
    localPath: '/images/products/tailored-dress-trouser.png',
    url: '/images/products/tailored-dress-trouser.png',
    aspectRatio: '4:5',
    alt: 'Tailored Formal Trouser — Extended Waistband, Side Adjusters & Crisp Crease',
    editorialEnvironment: 'Tailor studio cutting counter with tailor chalk lines, measuring tape, and folded wool cloths',
    prompt:
      'Editorial focus on tailored wool formal trousers in warm taupe-charcoal. Showing the extended 3-inch tab waistband with double button closure, brass side cinch adjusters, single forward pleat, and pristine razor-sharp trouser crease falling cleanly over leather dress shoes with a slight break. Warm sand background (#EDE4D5), tactile worsted wool texture, 4:5 portrait aspect ratio.',
  },

  'prod-modi-coat-heritage': {
    id: 'prod-modi-coat-heritage',
    slug: 'modi-coat-heritage',
    title: 'Classic Modi Coat',
    group: 'Tailoring & Menswear',
    category: 'product',
    visualFamily: 'tailoring-detail',
    localPath: '/images/products/modi-coat-heritage.png',
    url: '/images/products/modi-coat-heritage.png',
    aspectRatio: '4:5',
    alt: 'Classic Modi Coat — Sleeveless Stand Collar Tailoring with Chest Canvas',
    editorialEnvironment: 'Artisanal tailoring studio with natural sunlight catching textured woven raw silk',
    prompt:
      'Close-up garment portrait of a sleeveless Modi coat in rich ochre-gold textured handloom silk. High stand collar perfectly curved with interlining structure, double-jetted waist pockets, bone buttons, and curved front hem. Layered over a fine ivory cotton kurta. Warm terracotta and ivory architectural studio background, distinct slub texture of silk, 4:5 portrait aspect ratio.',
  },

  'prod-tailored-bandhgala-coat': {
    id: 'prod-tailored-bandhgala-coat',
    slug: 'tailored-bandhgala-coat',
    title: 'Tailored Bandhgala Formal Coat',
    group: 'Tailoring & Menswear',
    category: 'product',
    visualFamily: 'tailoring-detail',
    localPath: '/images/products/tailored-bandhgala-coat.png',
    url: '/images/products/tailored-bandhgala-coat.png',
    aspectRatio: '4:5',
    alt: 'Tailored Bandhgala Formal Coat — Closed-Neck Evening Coat in Fine Wool',
    editorialEnvironment: 'Sleek luxury dressing suite with polished brass coat stand and dark walnut finishes',
    prompt:
      'Tailoring studio editorial of a full-sleeve Bandhgala evening coat in rich midnight black tropical wool. Sculpted chest canvas, hand-basted mandarin collar meeting cleanly at the throat, five engraved brass buttons, structured roped shoulder heads. Soft directional rim light highlighting waist contouring. Warm sand background (#EDE4D5), 4:5 portrait aspect ratio.',
  },

  'prod-formal-tailored-waistcoat': {
    id: 'prod-formal-tailored-waistcoat',
    slug: 'formal-tailored-waistcoat',
    title: 'Classic Tailored Waistcoat',
    group: 'Tailoring & Menswear',
    category: 'product',
    visualFamily: 'tailoring-detail',
    localPath: '/images/products/formal-tailored-waistcoat.png',
    url: '/images/products/formal-tailored-waistcoat.png',
    aspectRatio: '4:5',
    alt: 'Classic Tailored Waistcoat — Five-Button Front with Rear Cinch Adjuster',
    editorialEnvironment: 'Bespoke fitting room with brass wall sconces and warm ivory walls',
    prompt:
      'Craftsmanship detail photograph of a five-button bespoke waistcoat in deep emerald green wool barathea. Close-up on the angled bottom points, double-welt watch pocket, horn buttons, and high armhole suppression. Worn cleanly over a tailored white poplin shirt. Soft ambient lighting, rich wool texture, clean tailoring lines, 4:5 portrait aspect ratio.',
  },

  'prod-heritage-kurta-pyjama': {
    id: 'prod-heritage-kurta-pyjama',
    slug: 'heritage-kurta-pyjama',
    title: "Heritage Men's Kurta Pyjama Ensemble",
    group: 'Tailoring & Menswear',
    category: 'product',
    visualFamily: 'tailoring-detail',
    localPath: '/images/products/heritage-kurta-pyjama.png',
    url: '/images/products/heritage-kurta-pyjama.png',
    aspectRatio: '4:5',
    alt: "Heritage Men's Kurta Pyjama — Pure Linen Occasionwear with Tailored Pyjamas",
    editorialEnvironment: 'Heritage verandah with polished red oxide flooring and warm sunlight through wooden louvers',
    prompt:
      'Editorial garment photograph of a handcrafted men’s kurta in natural unbleached Irish linen with tailored straight-leg cotton pyjama. Intricate detail on the hand-stitched placket with thread eyelets, deep side pockets, and relaxed tailored shoulder. Warm terracotta red-oxide background with filtered afternoon sunshine, authentic drape of natural flax, 4:5 portrait aspect ratio.',
  },

  'prod-classic-pique-polo': {
    id: 'prod-classic-pique-polo',
    slug: 'classic-pique-polo',
    title: 'Classic Piqué Polo T-Shirt',
    group: 'Fabrics & Casualwear',
    category: 'product',
    visualFamily: 'tailoring-detail',
    localPath: '/images/products/classic-pique-polo.png',
    url: '/images/products/classic-pique-polo.png',
    aspectRatio: '4:5',
    alt: 'Classic Piqué Polo T-Shirt — Combed Cotton Knit with Anti-Curl Rib Collar',
    editorialEnvironment: 'Clean studio tabletop with folded polo shirts in curated colors: olive, ivory, navy, and terracotta',
    prompt:
      'Commercial product photography of a premium combed cotton piqué polo shirt. Flat lay and torso display showing the reinforced collar stand, two-button cross-stitched placket, tennis tail hem vents with herringbone tape reinforcement, and subtle embroidered monogram on chest. Crisp honeycomb knit texture visible in high resolution, warm ivory background (#F7F4EC), 4:5 portrait aspect ratio.',
  },

  'prod-active-tracksuit-set': {
    id: 'prod-active-tracksuit-set',
    slug: 'active-tracksuit-set',
    title: 'Performance Sportswear & Tracksuit',
    group: 'Fabrics & Casualwear',
    category: 'product',
    visualFamily: 'tailoring-detail',
    localPath: '/images/products/active-tracksuit-set.png',
    url: '/images/products/active-tracksuit-set.png',
    aspectRatio: '4:5',
    alt: 'Performance Sportswear & Tracksuit — Moisture-Wicking Technical Poly-Spandex',
    editorialEnvironment: 'Modern athletics design studio with technical fabric swatches and clean geometric surfaces',
    prompt:
      'Performance apparel photography of an athletic tracksuit jacket and tapered track pant set in matte charcoal and deep forest green. Focus on moisture-wicking stretch fabric texture, reverse-coil waterproof zipper with chin guard, zippered hand pockets, and articulated raglan sleeve construction. Clean studio lighting with soft highlights, 4:5 portrait aspect ratio.',
  },

  'prod-corporate-executive-suit': {
    id: 'prod-corporate-executive-suit',
    slug: 'corporate-executive-suit',
    title: 'Corporate Executive Suit',
    group: 'Corporate',
    category: 'product',
    visualFamily: 'tailoring-detail',
    localPath: '/images/products/corporate-executive-suit.png',
    url: '/images/products/corporate-executive-suit.png',
    aspectRatio: '4:5',
    alt: 'Corporate Executive Suit — Wrinkle-Resistant Poly-Wool Fleet Uniform',
    editorialEnvironment: 'Executive corporate wardrobe suite with warm lighting and subtle architectural lines',
    prompt:
      'Executive corporate fleet uniform photograph of a two-piece single-breasted corporate suit in charcoal poly-wool blend. Clean durable construction designed for daily boardroom resilience, interior passport pocket, anti-crease fabric fall, and understated matching buttons. Warm neutral studio backdrop, professional corporate luxury demeanor, 4:5 portrait aspect ratio.',
  },

  // =========================================================================
  // C. 11 CORPORATE SECTOR IMAGES (Family 3: Contextual Professional Workplace)
  // Aspect Ratio: 4:5 portrait
  // =========================================================================

  'corp-suits-blazers': {
    id: 'corp-suits-blazers',
    slug: 'corporate-suits-blazers',
    title: 'Corporate Suits & Blazers',
    group: 'Corporate',
    category: 'corporate',
    visualFamily: 'corporate-context',
    localPath: '/images/corporate/corporate-suits-blazers.png',
    url: '/images/corporate/corporate-suits-blazers.png',
    aspectRatio: '4:5',
    alt: 'Corporate Suits & Blazers — Executive Leadership & Front-Line Ambassadorship',
    editorialEnvironment: 'Modern boardroom with glass conference table, warm wood accents, and city skyline view',
    prompt:
      'Professional corporate uniform commercial photography. Executive team members in tailored navy corporate blazers with discreet embroidered corporate lapel pins, meeting in a modern glass conference room with warm wood and travertine architecture. Crisp tailored silhouette, durable poly-wool fabric, poised corporate leadership demeanor, 4:5 portrait aspect ratio.',
  },

  'corp-formal-shirts-trousers': {
    id: 'corp-formal-shirts-trousers',
    slug: 'formal-shirts-trousers',
    title: 'Formal Shirts & Trousers',
    group: 'Corporate',
    category: 'corporate',
    visualFamily: 'corporate-context',
    localPath: '/images/corporate/formal-shirts-trousers.png',
    url: '/images/corporate/formal-shirts-trousers.png',
    aspectRatio: '4:5',
    alt: 'Formal Shirts & Trousers — Precision In-House Computerized Logo Embroidery',
    editorialEnvironment: 'Modern corporate open-plan office with warm ambient lighting and contemporary timber desks',
    prompt:
      'Commercial workplace photography. A corporate professional wearing a tailored light-blue easy-care cotton uniform shirt with crisp high-density embroidered company logo on the chest pocket, paired with flat-front charcoal uniform trousers. Standing in a sunlit contemporary office with warm ivory and wood interiors, 4:5 portrait aspect ratio.',
  },

  'corp-polo-neck-tshirts': {
    id: 'corp-polo-neck-tshirts',
    slug: 'polo-neck-tshirts',
    title: 'Polo Neck T-Shirts (Piqué)',
    group: 'Corporate',
    category: 'corporate',
    visualFamily: 'corporate-context',
    localPath: '/images/corporate/polo-neck-tshirts.png',
    url: '/images/corporate/polo-neck-tshirts.png',
    aspectRatio: '4:5',
    alt: 'Polo Neck T-Shirts — Heavyweight 2-Ply Combed Cotton Piqué for Enterprises',
    editorialEnvironment: 'Tech campus outdoor cafeteria with warm cedar decking and architectural greenery',
    prompt:
      'Corporate workplace casualwear commercial editorial. Tech company team members wearing coordinated forest-green and black piqué polo t-shirts with embroidered sleeve emblems. Standing in a modern tech campus atrium with warm cedar timber and living green walls. Clean honeycomb knit texture, crisp collar lines, 4:5 portrait aspect ratio.',
  },

  'corp-tech-winter-hoodies': {
    id: 'corp-tech-winter-hoodies',
    slug: 'tech-winter-hoodies',
    title: 'Tech & Winter Hoodies',
    group: 'Corporate',
    category: 'corporate',
    visualFamily: 'corporate-context',
    localPath: '/images/corporate/tech-winter-hoodies.png',
    url: '/images/corporate/tech-winter-hoodies.png',
    aspectRatio: '4:5',
    alt: 'Tech & Winter Hoodies — Brushed Fleece Layering with Corporate Monogram',
    editorialEnvironment: 'Contemporary startup engineering lab with timber workstations and warm industrial brickwork',
    prompt:
      'Commercial apparel photography of high-density 360gsm brushed fleece zip hoodies in deep heather charcoal. Clean corporate chest embroidery, metal-tipped drawstrings, reinforced kangaroo pocket. Worn by software engineers in a warm modern design studio with exposed brick and warm incandescent lighting, 4:5 portrait aspect ratio.',
  },

  'corp-round-neck-cotton-tshirts': {
    id: 'corp-round-neck-cotton-tshirts',
    slug: 'round-neck-cotton-tshirts',
    title: 'Round Neck Cotton T-Shirts',
    group: 'Corporate',
    category: 'corporate',
    visualFamily: 'corporate-context',
    localPath: '/images/corporate/round-neck-cotton-tshirts.png',
    url: '/images/corporate/round-neck-cotton-tshirts.png',
    aspectRatio: '4:5',
    alt: 'Round Neck Cotton T-Shirts — 100% Super-Combed Bio-Washed Cotton',
    editorialEnvironment: 'Corporate hackathon and innovation hub with energetic collaboration spaces and warm wood accents',
    prompt:
      'Commercial uniform photography featuring bio-washed 100% combed cotton round-neck t-shirts in deep textile green and off-white. Event team collaborating enthusiastically around a timber table. Close-up on the durable ribbed neckband, double-needle stitched sleeves, and vibrant screen-printed corporate brand logo, 4:5 portrait aspect ratio.',
  },

  'corp-sportswear-tracksuits': {
    id: 'corp-sportswear-tracksuits',
    slug: 'sportswear-tracksuits',
    title: 'Sportswear & Tracksuits',
    group: 'Corporate',
    category: 'corporate',
    visualFamily: 'corporate-context',
    localPath: '/images/corporate/sportswear-tracksuits.png',
    url: '/images/corporate/sportswear-tracksuits.png',
    aspectRatio: '4:5',
    alt: 'Corporate Sportswear & Tracksuits — Athletic Teamwear for Institutional Squads',
    editorialEnvironment: 'Corporate wellness center and athletics track with morning sunshine and architectural pavilion',
    prompt:
      'Commercial athletic teamwear photograph. Corporate sports team wearing matching technical active tracksuits with contrast raglan sleeve piping and moisture-wicking breathable fabric. Posed on an architectural sports stadium track in morning light. Sharp dynamic photography, authentic corporate fitness identity, 4:5 portrait aspect ratio.',
  },

  'corp-chef-coats': {
    id: 'corp-chef-coats',
    slug: 'chef-coats',
    title: 'Chef Coats',
    group: 'Corporate',
    category: 'corporate',
    visualFamily: 'corporate-context',
    localPath: '/images/corporate/chef-coats.png',
    url: '/images/corporate/chef-coats.png',
    aspectRatio: '4:5',
    alt: 'Chef Coats — Double-Breasted Heavy Cotton Drill for Commercial Culinary Kitchens',
    editorialEnvironment: 'Prestige luxury hotel kitchen with stainless steel workstations, copper cookware, and warm ambient warmth',
    prompt:
      'Culinary uniform commercial photography. Executive head chef in a double-breasted white cotton drill chef coat with black hand-rolled knot buttons, mandarin collar, and thermometer arm pocket. Standing proudly in a gleaming 5-star hotel kitchen with warm copper pots and soft steam in the background. Pristine white drill fabric, 4:5 portrait aspect ratio.',
  },

  'corp-housekeeping-uniforms': {
    id: 'corp-housekeeping-uniforms',
    slug: 'housekeeping-uniforms',
    title: 'Housekeeping Uniforms',
    group: 'Corporate',
    category: 'corporate',
    visualFamily: 'corporate-context',
    localPath: '/images/corporate/housekeeping-uniforms.png',
    url: '/images/corporate/housekeeping-uniforms.png',
    aspectRatio: '4:5',
    alt: 'Housekeeping Uniforms — Stain-Resistant Hospitality Tunics & Apron Sets',
    editorialEnvironment: 'Luxury boutique hotel corridor with warm wood paneling, brass light fixtures, and plush neutral carpeting',
    prompt:
      'Hospitality uniform commercial editorial. Housekeeping supervisor wearing a tailored tea-green and terracotta contrast tunic uniform with concealed buttons and stain-resistant poly-cotton stretch trousers. Standing poised in an elegant boutique hotel suite corridor with warm architectural lighting. Dignified, clean, professional presentation, 4:5 portrait aspect ratio.',
  },

  'corp-security-guard-uniforms': {
    id: 'corp-security-guard-uniforms',
    slug: 'security-guard-uniforms',
    title: 'Security Guard Uniforms',
    group: 'Corporate',
    category: 'corporate',
    visualFamily: 'corporate-context',
    localPath: '/images/corporate/security-guard-uniforms.png',
    url: '/images/corporate/security-guard-uniforms.png',
    aspectRatio: '4:5',
    alt: 'Security Guard Uniforms — Heavy-Duty Poly-Viscose Regalia with Epaulettes',
    editorialEnvironment: 'Corporate tech park glass entrance foyer with turnstiles and architectural granite pillars',
    prompt:
      'Authoritative security uniform commercial photography. A security officer standing tall in a crisp navy blue collared uniform shirt with button-down shoulder epaulettes, dual pleated chest pockets with badge holder, and reinforced poly-viscose heavy-duty trousers. Standing at the entrance of a prestigious corporate campus with granite masonry, 4:5 portrait aspect ratio.',
  },

  'corp-doctor-lab-coats': {
    id: 'corp-doctor-lab-coats',
    slug: 'doctor-lab-coats',
    title: 'Doctor & Lab Coats',
    group: 'Corporate',
    category: 'corporate',
    visualFamily: 'corporate-context',
    localPath: '/images/corporate/doctor-lab-coats.png',
    url: '/images/corporate/doctor-lab-coats.png',
    aspectRatio: '4:5',
    alt: 'Doctor & Lab Coats — Antimicrobial, Autoclave-Tolerant Clinical White Coats',
    editorialEnvironment: 'High-end medical diagnostic suite with warm diffused light and architectural glass partitions',
    prompt:
      'Medical uniform commercial photography. Senior medical doctor wearing a tailored 100% long-staple cotton consultation lab coat with notched lapel, reinforced side instrument pockets, and chest pen holder with embroidered hospital monogram. Standing in a clean modern clinical consultation room with warm wood credenzas, professional healthcare excellence, 4:5 portrait aspect ratio.',
  },

  'corp-technician-boiler-suits': {
    id: 'corp-technician-boiler-suits',
    slug: 'technician-boiler-suits',
    title: 'Technician / Boiler Suits',
    group: 'Corporate',
    category: 'corporate',
    visualFamily: 'corporate-context',
    localPath: '/images/corporate/technician-boiler-suits.png',
    url: '/images/corporate/technician-boiler-suits.png',
    aspectRatio: '4:5',
    alt: 'Technician & Boiler Suits — Heavy Drill Cloth with Bar-Tacked Reinforcement',
    editorialEnvironment: 'High-tech automotive service center with polished epoxy floors and clean engineering bays',
    prompt:
      'Industrial service uniform commercial photography. Automotive service technician wearing a heavy-duty navy boiler suit with high-visibility silver reflective bands across chest and arms, multi-cargo tool pockets, and reinforced double-knee panels. Standing in a state-of-the-art diagnostic service facility. Tough industrial drill cloth, professional workwear, 4:5 portrait aspect ratio.',
  },

  // =========================================================================
  // D. 8 FABRIC & MILL ARCHIVE IMAGES (Family 4: Textile Archive & Macro Weave)
  // Aspect Ratio: 4:5 portrait
  // STRICTLY NO HUMAN MODELS — FOCUS ON WEAVES, SELVEDGES, SWATCHES, BOLTS
  // =========================================================================

  'fab-raymond': {
    id: 'fab-raymond',
    slug: 'raymond',
    title: 'Raymond — Fine Suiting & Shirting',
    group: 'Fabrics & Casualwear',
    category: 'fabric',
    visualFamily: 'textile-archive',
    localPath: '/images/fabrics/raymond.png',
    url: '/images/fabrics/raymond.png',
    aspectRatio: '4:5',
    alt: 'Raymond Fine Suiting & Pure Wool Fabric Archive — Gold Selvedge Detail',
    editorialEnvironment: 'Master textile cutting bench with wooden cloth rolls and brass measuring tape',
    prompt:
      'Textile still life photography of premium Raymond Super 120s worsted wool suiting fabric. Folded cascade of fine charcoal birdseye and glen plaid fabrics on an oiled dark teakwood surface. Macro close-up on the woven woven gold selvedge reading "RAYMOND - ALL WOOL SUITING". Brass tailor shears and tailor chalk rests beside the roll. Warm ivory background (#F7F4EC), soft directional natural light highlighting weave twill texture, no human models, 4:5 portrait aspect ratio.',
  },

  'fab-siyarams': {
    id: 'fab-siyarams',
    slug: 'siyarams',
    title: 'Siyarams — Suiting & Formal Wear Fabrics',
    group: 'Fabrics & Casualwear',
    category: 'fabric',
    visualFamily: 'textile-archive',
    localPath: '/images/fabrics/siyarams.png',
    url: '/images/fabrics/siyarams.png',
    aspectRatio: '4:5',
    alt: 'Siyarams Suiting Fabrics — Poly-Viscose & Poly-Wool Coordinated Trouser Cloths',
    editorialEnvironment: 'Textile showroom display plinth in warm sandstone with stacked bolts',
    prompt:
      'Commercial textile archive photograph of Siyarams poly-viscose suiting fabrics. Multiple draped bolts in steel grey, midnight blue, and deep taupe layered in cascading folds. Extreme macro shot revealing the crisp micro-herringbone weave and crease-recovery springiness of the cloth. Natural side raking light, warm sand masonry backdrop (#EDE4D5), selvedge script visible, no models, 4:5 portrait aspect ratio.',
  },

  'fab-linen-club': {
    id: 'fab-linen-club',
    slug: 'linen-club',
    title: 'Linen Club — Pure Flax Linen Fabrics',
    group: 'Fabrics & Casualwear',
    category: 'fabric',
    visualFamily: 'textile-archive',
    localPath: '/images/fabrics/linen-club.png',
    url: '/images/fabrics/linen-club.png',
    aspectRatio: '4:5',
    alt: 'Linen Club Pure Flax Linen — Natural Slub Texture & European Flax Certification',
    editorialEnvironment: 'Artisan textile atelier with natural sunlight and raw unbleached flax fibers',
    prompt:
      'Sensory textile photography of 100% pure European flax linen by Linen Club. Rolls of pure linen cloth in natural unbleached oat, terracotta (#A85D3A), and sage green arranged in soft billowy folds. Extreme close-up showing organic slub yarn texture, natural textile drape, and authentic selvedge stamping. Warm airy sunbeam across the linen weave, no models, pure tactile beauty, 4:5 portrait aspect ratio.',
  },

  'fab-mafatlal': {
    id: 'fab-mafatlal',
    slug: 'mafatlal',
    title: 'Mafatlal — Heritage Shirting & Uniform Fabrics',
    group: 'Fabrics & Casualwear',
    category: 'fabric',
    visualFamily: 'textile-archive',
    localPath: '/images/fabrics/mafatlal.png',
    url: '/images/fabrics/mafatlal.png',
    aspectRatio: '4:5',
    alt: 'Mafatlal Heritage Shirting — High-Density Woven Cottons & Uniform Swatches',
    editorialEnvironment: 'Historic mill archive chest with vintage swatches and modern woven cotton bolts',
    prompt:
      'Archival textile still life of Mafatlal fine cotton shirting fabrics. Stack of neatly folded high-density poplin and oxford cloth in classic corporate pinstripes, windowpanes, and solid white. Woven selvedge ribbon and wooden sample swatches fan out across a warm oak cutting table. Crisp weave sharpness, authentic cotton luster, warm ivory studio lighting (#F7F4EC), no models, 4:5 portrait aspect ratio.',
  },

  'fab-ramraj': {
    id: 'fab-ramraj',
    slug: 'ramraj',
    title: 'Ramraj — Traditional Cottons & Dhoties',
    group: 'Fabrics & Casualwear',
    category: 'fabric',
    visualFamily: 'textile-archive',
    localPath: '/images/fabrics/ramraj.png',
    url: '/images/fabrics/ramraj.png',
    aspectRatio: '4:5',
    alt: 'Ramraj Traditional White Cottons — Handloom Dhoties & Gold Zari Borders',
    editorialEnvironment: 'Traditional South Indian handloom presentation table with brass vessels and jasmine petals',
    prompt:
      'Textile still life of Ramraj pristine white cotton dhoti cloths. Crisp folds of pure combed cotton fabric featuring shimmering woven gold zari borders along the edge. Subtle brass bell and raw cotton bolls rest beside the fabric bolt. High-key warm natural lighting emphasizing the purity of white cotton and intricate metallic zari warp threads, no models, 4:5 portrait aspect ratio.',
  },

  'fab-uthayam': {
    id: 'fab-uthayam',
    slug: 'uthayam',
    title: 'Uthayam — Traditional Dhoties & Veshtis',
    group: 'Fabrics & Casualwear',
    category: 'fabric',
    visualFamily: 'textile-archive',
    localPath: '/images/fabrics/uthayam.png',
    url: '/images/fabrics/uthayam.png',
    aspectRatio: '4:5',
    alt: 'Uthayam Traditional Dhoties — Ceremonial Zari Border Veshti Cloths',
    editorialEnvironment: 'Traditional textile counter with ceremonial sandalwood blocks and folded fine vesti bolts',
    prompt:
      'Macro textile photograph of Uthayam traditional South Indian dhoties. Detailed close-up on folded pure cotton veshti cloth featuring an intricate double-border gold and silver temple zari motif. Rich tactile cotton ribbing, luminous golden threads reflecting warm light, resting on a polished dark rosewood plank. Cultural elegance, authentic Indian textile legacy, no models, 4:5 portrait aspect ratio.',
  },

  'fab-italian-shirting-trouser': {
    id: 'fab-italian-shirting-trouser',
    slug: 'italian-shirting-trouser',
    title: 'Italian Contemporary Shirting & Trouser Cloths',
    group: 'Fabrics & Casualwear',
    category: 'fabric',
    visualFamily: 'textile-archive',
    localPath: '/images/fabrics/italian-shirting-trouser.png',
    url: '/images/fabrics/italian-shirting-trouser.png',
    aspectRatio: '4:5',
    alt: 'Italian Contemporary Shirting & Trouser Weaves — European Cotton & Drape',
    editorialEnvironment: 'Contemporary European textile design studio with fabric swatch fan and architectural paper',
    prompt:
      'High-end textile editorial of curated Italian contemporary shirting and trouser fabrics. Luxurious fan of double-mercerized Egyptian cotton twills, micro-geometric jacquard weaves, and soft stretch-cotton trouser fabrics in olive, sand, and taupe. Selvedge stamped with Italian mill crest in gold. Warm sandstone background, razor-sharp optical clarity of weave intersection, no models, 4:5 portrait aspect ratio.',
  },

  'fab-italian-blazer-suit': {
    id: 'fab-italian-blazer-suit',
    slug: 'italian-blazer-suit',
    title: 'Italian Blazer & Suit Fabrics',
    group: 'Fabrics & Casualwear',
    category: 'fabric',
    visualFamily: 'textile-archive',
    localPath: '/images/fabrics/italian-blazer-suit.png',
    url: '/images/fabrics/italian-blazer-suit.png',
    aspectRatio: '4:5',
    alt: 'Italian Wear Collections for Blazer & Suit Fabrics — Fluid Worsted & Silk Blends',
    editorialEnvironment: 'Sartorial tailoring counter with Italian mill swatches, buffalo horn buttons, and chalk',
    prompt:
      'Luxury textile still life of Italian sartorial blazer and suiting cloth in rich wool-silk-linen blend. Deep emerald green and warm caramel Glenurquhart check fabric draped over a tailor’s curved pressing cushion. Close-up on the natural fluid drape, brushed soft hand, and woven selvedge. Warm ivory and dark teakwood surroundings (#F7F4EC), soft editorial sidelight, masterwork textile capture, no models, 4:5 portrait aspect ratio.',
  },
};

/**
 * Helper to get asset by ID or slug
 */
export function getVisualAsset(idOrSlug: string): VisualAsset | undefined {
  if (VISUAL_ASSETS[idOrSlug]) {
    return VISUAL_ASSETS[idOrSlug];
  }
  return Object.values(VISUAL_ASSETS).find((a) => a.slug === idOrSlug || a.id === idOrSlug);
}

/**
 * Filter assets by category
 */
export function getAssetsByCategory(category: VisualAsset['category']): VisualAsset[] {
  return Object.values(VISUAL_ASSETS).filter((a) => a.category === category);
}

/**
 * Filter assets by visual family
 */
export function getAssetsByFamily(family: VisualFamily): VisualAsset[] {
  return Object.values(VISUAL_ASSETS).filter((a) => a.visualFamily === family);
}
