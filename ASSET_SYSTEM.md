# SELECTION TEXTILES — COLLECTION & VISUAL ASSET SYSTEM

**Official Brand**: Selection Textiles  
**Location**: Bengaluru, Karnataka, India (Est. 1979)  
**Total Collections**: 10 (across 3 Primary Groups)  
**Total Visual Assets**: 42 (across 4 Distinct Visual Families)  
**Core Aspect Ratio**: 4:5 Portrait (`1200 × 1500px`)  

---

## 1. Final Collection Structure

The website catalog is strictly organized into **10 official collections** across 3 primary groups:

### GROUP 1 — TAILORING & MENSWEAR (6 Collections)
| # | Collection Name | Slug | Primary Description |
| :-: | :--- | :--- | :--- |
| **1** | **Suits & Blazers** | `suits-blazers` | Full-canvas western tailoring, two-piece suits, three-piece sets and double-breasted blazers. |
| **2** | **Sherwanis** | `sherwanis` | Traditional occasionwear, regal royal sherwanis, achkans, wedding and festive ceremonial attire. |
| **3** | **Shirts & Trousers** | `shirts-trousers` | Made-to-measure formal shirting and tailored trousers with custom pleats and side adjusters. |
| **4** | **Modi Coats & Jackets** | `modi-coats-jackets` | Classic sleeveless stand-collar Modi jackets and full-sleeve Bandhgala evening coats. |
| **5** | **Waistcoats** | `waistcoats` | Contoured formal and festive waistcoats with back-cinch adjusters and bespoke pocket welts. |
| **6** | **Men's Kurta Pyjama** | `mens-kurta-pyjama` | Traditional cotton, linen and silk kurta pyjama sets with hand-finished plackets. |

### GROUP 2 — FABRICS & CASUALWEAR (3 Collections)
*(Note: Named "Fabrics & Casualwear" rather than "Textiles & Casual")*
| # | Collection Name | Slug | Primary Description |
| :-: | :--- | :--- | :--- |
| **7** | **Fabrics** | `fabrics` | Running fabric rolls and textile archives including Raymond, Siyarams, Linen Club, Mafatlal, Ramraj, Uthayam and Italian collections. |
| **8** | **Polo T-Shirts** | `polo-t-shirts` | Premium combed cotton piqué polo shirts for corporate and casual wear. |
| **9** | **Sports Wear** | `sports-wear` | Performance athletic tracksuits, training jackets and moisture-wicking teamwear. |

### GROUP 3 — CORPORATE (1 Collection with 11 Sectors)
| # | Collection Name | Slug | Primary Description |
| :-: | :--- | :--- | :--- |
| **10** | **Corporate Uniforms** | `corporate-uniforms` | Multi-sector workforce apparel including executive, hospitality, security, culinary, medical and technical uniforms. |

---

## 2. 42 Visual Assets Summary

| Asset Group | Count | Target Ratio | Target Folder | Code Registry |
| :--- | :---: | :---: | :--- | :--- |
| **A. Collection Cover Images** | 10 | 4:5 (`1200×1500`) | `public/images/collections/` | `lib/data/collections.ts` |
| **B. Featured Garment Images** | 13 | 4:5 (`1200×1500`) | `public/images/products/` | `lib/data/products.ts` |
| **C. Corporate Sector Images** | 11 | 4:5 (`1200×1500`) | `public/images/corporate/` | `app/corporate/page.tsx` |
| **D. Fabric Archive Images** | 8 | 4:5 (`1200×1500`) | `public/images/fabrics/` | `app/fabrics/page.tsx` |
| **TOTAL** | **42** | **4:5** | `public/images/` | `lib/data/assets.ts` |

---

## 3. Four Visual Families & Photographic Rules

To prevent repetitive, generic AI fashion catalogue imagery, the 42 assets are distributed across **4 distinct visual families**:

### Family 1 — Collection / Editorial (10 Assets)
* **Used for**: The 10 primary collection covers (`/collections` page).
* **Characteristics**: Sophisticated composition, warm architectural environments, Indian heritage influence with contemporary luxury, natural human poses, realistic fabric drape, soft directional lighting.
* **Environments**: Varied warm architectural stone, heritage courtyards, modern bespoke salons, colonial verandahs, and premium corporate atriums.

### Family 2 — Tailoring Craftsmanship & Detail (13 Assets)
* **Used for**: The 13 featured garments (`lib/data/products.ts`).
* **Characteristics**: Prioritizes the garment construction itself—lapel roll, Milanese buttonholes, cuff detailing, floating canvas chest drape, waistband construction, pleats, and textile weave.
* **Environments**: Master cutting tables, fitting rooms, tailors' workshops with shears, chalk lines, and natural directional daylight.

### Family 3 — Contextual Professional Workplace (11 Assets)
* **Used for**: The 11 corporate uniform sectors (`app/corporate/page.tsx`).
* **Characteristics**: Authentic workplace contexts—commercial kitchen for chef coats, clinical suite for lab coats, tech campus for hoodies/polos, boardroom for executive suits, and automotive bay for technician boiler suits.
* **Environments**: High-end professional environments avoiding generic stock-photo cutouts.

### Family 4 — Textile Archive & Macro Weave (8 Assets)
* **Used for**: The 8 fabric lines (`app/fabrics/page.tsx`).
* **Characteristics**: **Strictly no human models**. Focuses exclusively on fabric rolls, draped selvedges with gold lettering, folded bolts, macro yarn weave, and tailoring materials (shears, measuring tape, tailor's chalk).

---

## 4. Brand Color Palette & Visual Hierarchy

| Role | Color Name | Hex Token | Visual Purpose & Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | Deep Textile Green | `#1F5F3A` | Primary CTA buttons, navigation highlights, active states |
| **Secondary** | Logo Green | `#44A162` | Secondary accents, tags, brand seals |
| **Heritage Accent** | Heritage Red | `#D62828` | Limited indicators, heritage badges, subtle stitch details |
| **Luxury Accent** | Antique Gold | `#B18A52` | Serif accents, borders, 3D studio tags, thread accents |
| **Warm Accent** | Terracotta | `#A85D3A` | Subtle supporting architectural tones and pottery accents |
| **Main Canvas** | Warm Ivory | `#F7F4EC` | Dominant page background, clean editorial canvas |
| **Secondary Canvas**| Warm Sand | `#EDE4D5` | Card surfaces, stone pillars, warm architectural plinths |
| **Text** | Deep Charcoal | `#20251F` | High-contrast typography and headlines |

---

## 5. Master Asset Registry & Generation Prompts (All 42 Assets)

### A. 10 Collection Cover Images (`public/images/collections/`)

#### 1. Suits & Blazers
* **File**: `public/images/collections/suits-blazers.jpg`
* **Prompt**: `Editorial fashion photography of a full-canvas bespoke tailored suit in deep charcoal worsted wool. A poised Indian gentleman in an architecturally warm atelier in Bengaluru with natural light falling across sculpted shoulders. High-end bespoke tailoring, hand-padded peak lapel roll, genuine horn buttons. Background has warm sandstone masonry, rich dark teak cutting table, and muted ivory walls (#F7F4EC). Shot on Hasselblad H6D-100c, 85mm lens, f/4, editorial luxury menswear, realistic fabric texture, natural skin tones, no plastic skin, no streetwear, 4:5 portrait aspect ratio.`

#### 2. Sherwanis
* **File**: `public/images/collections/sherwanis.jpg`
* **Prompt**: `Editorial luxury Indian occasionwear photography. A stately Indian man wearing an understated raw-silk ivory sherwani with antique gold (#B18A52) thread accents and hand-carved enamel buttons. Standing in a sunlit stone courtyard with heritage architectural arches and soft warm shadows. Crisp stand collar, structured chest canvas, natural drape of raw silk. Warm sandstone and ivory stone environment (#EDE4D5). Hasselblad medium format, natural skin, authentic Indian luxury, no neon, no glittery excess, restrained regal elegance, 4:5 portrait aspect ratio.`

#### 3. Shirts & Trousers
* **File**: `public/images/collections/shirts-trousers.jpg`
* **Prompt**: `High-fashion menswear photography of made-to-measure crisp 120s two-ply cotton shirt in soft cream paired with tailored charcoal-olive trousers. Clean hand-turned cutaway collar, mother-of-pearl buttons, curved waistband with brass side adjusters. Modern bespoke salon environment with warm beige plaster walls and subtle dark teakwood furnishings. Natural diffused daylight, realistic cotton poplin texture and woolen trouser fall, relaxed confident posture, 4:5 portrait aspect ratio.`

#### 4. Modi Coats & Jackets
* **File**: `public/images/collections/modi-coats-jackets.jpg`
* **Prompt**: `Editorial portrait of a distinguished Indian gentleman wearing a tailored sleeveless Modi coat in deep textile green (#1F5F3A) structured matka silk layered over an ivory linen kurta. Stiffened stand collar with precision seam, welted breast pocket with subtle folded terracotta pocket square, hand-turned metallic buttons. Setting is a heritage corridor with warm terracotta (#A85D3A) accents and ivory stone pillars. High-end editorial lighting, crisp fabric grain, 4:5 portrait aspect ratio.`

#### 5. Waistcoats
* **File**: `public/images/collections/waistcoats.jpg`
* **Prompt**: `Editorial tailoring photograph featuring a contoured five-button waistcoat in fine herringbone worsted wool with antique brass cinch buckle visible at the tapered flank. Worn over a tailored pale ecru shirt with rolled sleeves. Warm walnut study background, soft directional tungsten-warm daylight, clean welt pockets, sharp V-neckline. Elegant formal posture, natural textile weave, 4:5 portrait aspect ratio.`

#### 6. Men's Kurta Pyjama
* **File**: `public/images/collections/mens-kurta-pyjama.jpg`
* **Prompt**: `Editorial menswear photography of a tailored men’s kurta pyjama ensemble in raw ecru slub linen with hand-worked loop buttons. Draped with effortless dignity in a serene heritage verandah overlooking green courtyard foliage. Natural fabric slub, handloom cotton-linen drape, clean band collar, side pocket vent detail. Soft warm morning glow (#F7F4EC background), authentic Indian craftsmanship, 4:5 portrait aspect ratio.`

#### 7. Fabrics
* **File**: `public/images/collections/fabrics.jpg`
* **Prompt**: `Editorial still-life and master tailor curation photograph of premium suiting bolts, folded linen lengths, and Italian wool rolls arranged on an oiled teak cutting table. Visible woven selvedges with gold lettering, chalk tailor markings, tailor shears, and bone measuring ruler. Warm ivory and sand background palette (#EDE4D5). Focus on tactile weave contrast: fine Super 130s worsted, crisp Irish linen, and raw silk. Mastercraft lighting, crisp macro depth of field, 4:5 portrait aspect ratio.`

#### 8. Polo T-Shirts
* **File**: `public/images/collections/polo-t-shirts.jpg`
* **Prompt**: `Commercial fashion editorial of a premium combed cotton piqué polo t-shirt in deep forest textile green (#1F5F3A). Fitted athletic drape on a modern Indian professional standing in a sun-dappled modern open-air terrace. Close-up on the anti-roll ribbed collar, two-button mother-of-pearl placket, and fine honeycomb piqué knit. Warm sand architectural surroundings, natural commercial photography lighting, 4:5 portrait aspect ratio.`

#### 9. Sports Wear
* **File**: `public/images/collections/sports-wear.jpg`
* **Prompt**: `High-performance sportswear commercial editorial featuring a coordinated athletic tracksuit in matte obsidian and deep green. Athletic model in a modern training pavilion with warm wooden accents and architectural concrete. Premium matte technical fabric, flatlock athletic seams, articulated ergonomic elbow and knee panels. Crisp directional rim lighting, confident athletic stance, 4:5 portrait aspect ratio.`

#### 10. Corporate Uniforms
* **File**: `public/images/collections/corporate-uniforms.jpg`
* **Prompt**: `Executive corporate outfitting editorial photograph. Two corporate professionals—an executive in a tailored navy poly-wool corporate blazer and an associate in a precision-embroidered formal corporate shirt—standing in a modern corporate atrium with travertine stone (#EDE4D5) and warm brass finishes. Crisp collar architecture, custom logo embroidery on chest pocket, durable crease-resistant weave. Professional corporate leadership demeanor, 4:5 portrait aspect ratio.`

---

### B. 13 Featured Garment Images (`public/images/products/`)

| # | Product Name | Slug / Filename | Construction & Details |
| :-: | :--- | :--- | :--- |
| **1** | **Savile Double-Breasted 6x2 Suit** | `bespoke-suits-model-one.jpg` | Full floating horsehair canvas, wide peak lapel roll, roped shoulder sleevehead, horn buttons. |
| **2** | **Classic Single-Breasted 2-Button Suit** | `classic-two-piece-suit.jpg` | Navy worsted wool, precision notch lapel, pick stitching, natural shoulder contour. |
| **3** | **Royal Sherwani Model I** | `regal-sherwanis-model-one.jpg` | Champagne raw tussar silk, hand-carved gold buttons, curved stand collar, custom ceremonial fit. |
| **4** | **Classic Achkan Sherwani** | `ceremonial-achkan-sherwani.jpg` | Deep forest green wool-silk, concealed placket, waist suppression, made-to-measure churidar. |
| **5** | **Made-to-Measure Formal Shirt** | `made-to-measure-formal-shirt.jpg` | 140s Giza cotton twill, single-needle French seams (21 spi), semi-spread collar, mitered cuff. |
| **6** | **Tailored Formal Trouser** | `tailored-dress-trouser.jpg` | Extended 3-inch tab waistband, double closure, brass side adjusters, forward pleat, razor crease. |
| **7** | **Classic Modi Coat** | `modi-coat-heritage.jpg` | Ochre-gold handloom matka silk, structured stand collar, double-jetted pockets, bone buttons. |
| **8** | **Tailored Bandhgala Formal Coat** | `tailored-bandhgala-coat.jpg` | Midnight black tropical wool, sculpted waist suppression, mandarin collar, engraved brass buttons. |
| **9** | **Classic Tailored Waistcoat** | `formal-tailored-waistcoat.jpg` | Emerald green wool barathea, five-button front, double-welt watch pocket, rear cinch buckle. |
| **10** | **Heritage Men's Kurta Pyjama** | `heritage-kurta-pyjama.jpg` | Unbleached Irish linen, hand-stitched placket with thread loops, straight-leg tailored pyjama. |
| **11** | **Classic Piqué Polo T-Shirt** | `classic-pique-polo.jpg` | Two-ply combed cotton piqué, anti-curl ribbed collar stand, tennis tail with herringbone tape. |
| **12** | **Performance Tracksuit Set** | `active-tracksuit-set.jpg` | Matte charcoal/green poly-spandex, reverse-coil waterproof zipper, articulated raglan sleeves. |
| **13** | **Corporate Executive Suit** | `corporate-executive-suit.jpg` | Charcoal poly-wool performance cloth, anti-crease drape, boardroom fleet durability. |

---

### C. 11 Corporate Sector Images (`public/images/corporate/`)

| Code | Sector Name | Filename | Contextual Workplace Environment |
| :-: | :--- | :--- | :--- |
| **A** | **Corporate Suits & Blazers** | `corporate-suits-blazers.jpg` | Modern corporate boardroom with glass table and timber accents. |
| **B** | **Formal Shirts & Trousers** | `formal-shirts-trousers.jpg` | Contemporary open-plan office; high-density chest logo embroidery. |
| **C** | **Polo Neck T-Shirts (Piqué)** | `polo-neck-tshirts.jpg` | Modern enterprise tech campus atrium with cedar wood and greenery. |
| **D** | **Tech & Winter Hoodies** | `tech-winter-hoodies.jpg` | Startup software engineering lab with exposed brick and warm light. |
| **E** | **Round Neck Cotton T-Shirts** | `round-neck-cotton-tshirts.jpg` | Corporate hackathon / innovation hub; bio-washed cotton. |
| **F** | **Sportswear & Tracksuits** | `sportswear-tracksuits.jpg` | Corporate wellness pavilion and athletic stadium track. |
| **G** | **Chef Coats** | `chef-coats.jpg` | 5-star commercial hotel kitchen with stainless steel and copper cookware. |
| **H** | **Housekeeping Uniforms** | `housekeeping-uniforms.jpg` | Boutique luxury hotel suite corridor with warm wood paneling. |
| **I** | **Security Guard Uniforms** | `security-guard-uniforms.jpg` | Authoritative corporate entrance foyer with granite pillars and turnstiles. |
| **J** | **Doctor & Lab Coats** | `doctor-lab-coats.jpg` | Clinical healthcare consultation room with instrument pockets and monogram. |
| **K** | **Technician / Boiler Suits** | `technician-boiler-suits.jpg` | High-tech automotive diagnostic center with reflective safety bands. |

---

### D. 8 Fabric & Mill Archive Images (`public/images/fabrics/`)
*(Strictly Macro Textile Swatches, Selvedges & Rolls — No Human Models)*

| # | Brand / Line | Filename | Key Visual Subject |
| :-: | :--- | :--- | :--- |
| **1** | **Raymond** | `raymond.jpg` | Super 120s worsted wool cascade, woven gold selvedge reading "RAYMOND - ALL WOOL SUITING", shears. |
| **2** | **Siyarams** | `siyarams.jpg` | Poly-viscose micro-herringbone suiting lengths, crease-recovery drape, selvedge script. |
| **3** | **Linen Club** | `linen-club.jpg` | 100% pure European flax linen in oat, terracotta, and sage; visible organic slub yarn texture. |
| **4** | **Mafatlal** | `mafatlal.jpg` | Folded high-density cotton poplin and oxford shirting in pinstripes and solids with wooden swatches. |
| **5** | **Ramraj** | `ramraj.jpg` | Pure combed white cotton dhoti lengths with woven gold metallic zari border and raw cotton bolls. |
| **6** | **Uthayam** | `uthayam.jpg` | Traditional temple zari border veshti cloth on dark rosewood plank with intricate gold/silver weave. |
| **7** | **Italian Shirting & Trousers**| `italian-shirting-trouser.jpg` | Double-mercerized Egyptian cotton twills, micro-jacquards, Italian mill crest selvedge stamp. |
| **8** | **Italian Blazer & Suit Cloths** | `italian-blazer-suit.jpg` | Wool-silk-linen blend Glenurquhart checks on tailor's pressing cushion, fluid fall. |

---

## 6. How to Add Your Generated Images to the Site

When you generate an image, simply place the `.jpg` or `.webp` file into its designated folder:

1. **Collection Cover**: Save to `public/images/collections/[slug].jpg` (e.g., `public/images/collections/suits-blazers.jpg`)
2. **Featured Garment**: Save to `public/images/products/[slug].jpg` (e.g., `public/images/products/bespoke-suits-model-one.jpg`)
3. **Corporate Sector**: Save to `public/images/corporate/[slug].jpg` (e.g., `public/images/corporate/chef-coats.jpg`)
4. **Fabric Swatch**: Save to `public/images/fabrics/[slug].jpg` (e.g., `public/images/fabrics/raymond.jpg`)

Next.js automatically serves files from `public/` at the root path (e.g. `/images/collections/suits-blazers.jpg`), and all components (`CollectionCard`, `ProductCard`, Corporate and Fabrics views) are pre-wired to load these assets seamlessly with responsive sizing and aspect-ratio preservation.
