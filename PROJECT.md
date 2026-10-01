# SELECTION TEXTILES — Master Project Documentation

**Official Brand Name**: **Selection Textiles**  
**Location**: Bengaluru, Karnataka, India  
**Heritage**: Established 1979  
**Core Product Vision**: Modern premium digital fashion and textile showroom combining contemporary fashion ecommerce, textile archives, made-to-measure tailoring, 3D garment visualization, and corporate uniform studio.  
**Sartorial Journey**: `DISCOVER → EXPLORE → CUSTOMIZE → VISUALIZE → ENQUIRE`

---

## 1. Brand Rules & Integrity

- The company and website brand must **always** remain: **SELECTION TEXTILES**.
- Never rename the company to "Selection Atelier".
- "Atelier" is reserved exclusively for specific features or experiences (e.g., *The Atelier*, *Digital Atelier*, *Build Your Look*, *The Atelier Experience*).

---

## 2. Design Language & Visual Aesthetics

- **Primary Direction**: Light mode with a warm neutral palette.
- **Visual Character**: Clean, warm, minimal, elegant, spacious, image-led, sophisticated, contemporary.
- **Prohibited Aesthetics**:
  - No generic SaaS UI
  - No generic ecommerce template
  - No streetwear aesthetic
  - No stark black-and-gold aesthetic
  - No cold sterile white
  - No excessive glassmorphism or bright neon gradients
- **Component Language**:
  - Cards: Rounded corners (`rounded-2xl`, `rounded-xl`), soft borders, subtle shadows (`shadow-soft`), large imagery.
  - Buttons: Rounded but not excessively pill-shaped (`rounded-lg`, `rounded-md`), strong contrast, smooth hover states.
  - Images: Large, high quality, rounded containers, subtle hover zoom (`scale-105`).
  - Navigation: Clean, spacious, minimal.

---

## 3. Dual Theme System (Light, Dark, System)

The theme engine is implemented via `next-themes` and semantic CSS variables.

### Semantic Tokens
| Token | Light Mode (Primary) | Dark Mode (Warm Charcoal) | Purpose |
| :--- | :--- | :--- | :--- |
| `--background` | `hsl(43 24% 95%)` (`#F7F4EF`) | `hsl(60 5% 8%)` (`#161614`) | Main page canvas |
| `--foreground` | `hsl(60 5% 11%)` (`#1C1C1A`) | `hsl(43 24% 95%)` (`#F7F4EF`) | High-contrast body & headlines |
| `--surface` | `hsl(0 0% 100%)` (`#FFFFFF`) | `hsl(60 4% 12%)` (`#1F1F1C`) | Cards, modals, drawers |
| `--surface-muted` | `hsl(37 24% 91%)` (`#EEE8DF`) | `hsl(60 6% 15%)` (`#292925`) | Inputs, tags, alternate sections |
| `--border` | `hsl(37 16% 84%)` (`#DED8CF`) | `hsl(45 5% 21%)` (`#383733`) | Fine 1px architectural lines |
| `--muted` | `hsl(39 5% 42%)` (`#6F6B64`) | `hsl(40 8% 63%)` (`#A8A39A`) | Secondary text, captions |
| `--accent` | `hsl(33 26% 53%)` (`#A68B68`) | `hsl(34 35% 65%)` (`#C4AA87`) | Warm bronze/taupe focus & CTAs |
| `--accent-foreground` | `hsl(0 0% 100%)` (`#FFFFFF`) | `hsl(60 5% 8%)` (`#161614`) | Text on accent buttons |

### Theme Selector
- Accessible from global navigation bar (`ThemeToggle`).
- Supports **Light**, **Dark**, and **System** preference auto-detection.
- Prevents FOUC (Flash of Unstyled Content) during page load.

---

## 4. Typography System

- **Headings & Editorial Statements**: `Cormorant Garamond` (Google Fonts, variable `--font-serif`).
- **Navigation, Buttons, Forms & Body**: `Plus Jakarta Sans` (Google Fonts, variable `--font-sans`).
- **Responsive Typography Scale**: `hero`, `display`, `section`, `title`, `subtitle`, `body`, `small`, `muted`, `caption`.

---

## 5. Reusable UI & Layout Component Catalog

1. **Header** (`components/layout/header.tsx`): Selection Textiles branding, 8 nav links, search modal, theme switcher, enquiry button.
2. **MobileNavigation** (`components/layout/mobile-navigation.tsx`): Polished mobile drawer with search, segmented theme switch, and links.
3. **Footer** (`components/layout/footer.tsx`): Semantic footer with showroom address, tailoring links, mill archives, and legal notices.
4. **Button** (`components/ui/button.tsx`): Variants: `primary`, `secondary`, `outline`, `ghost`, `editorial`. Sizes: `sm`, `md`, `lg`, `icon`.
5. **IconButton** (`components/ui/icon-button.tsx`): Accessible button for icons (`ghost`, `outline`, `surface`).
6. **Container** (`components/layout/container.tsx`): Responsive gutters across 8 breakpoints (320px to 1920px+).
7. **Section** (`components/layout/section.tsx`): Standard section wrapper with `default`, `surface`, and `muted` backgrounds.
8. **SectionHeading** (`components/ui/section-heading.tsx`): Eyebrow, serif heading, lead description, and action button.
9. **ProductCard** (`components/ui/product-card.tsx`): Rounded container, zoom on hover, craftsmanship tag, price, and specs.
10. **CollectionCard** (`components/ui/collection-card.tsx`): Large editorial visual card with season badge and silhouette count.
11. **ImageCard** (`components/ui/image-card.tsx`): Reusable image container with subtle hover zoom and text overlay.
12. **Badge** (`components/ui/badge.tsx`): Variants: `default`, `accent`, `outline`, `subtle`.
13. **ThemeToggle** (`components/ui/theme-toggle.tsx`): Compact cycle and segmented selectors for Light/Dark/System.
14. **Modal** (`components/ui/modal.tsx`): Accessible dialog with backdrop blur and ESC handling.
15. **Drawer** (`components/ui/drawer.tsx`): Slide-out drawer with right, left, or bottom slide variants.
16. **LoadingState** (`components/ui/loading-state.tsx`): `Spinner`, `Skeleton`, and `LoadingCard` primitives.
17. **EmptyState** (`components/ui/empty-state.tsx`): Editorial empty state with icon, message, and action CTA.

---

## 6. Architecture Route Structure

```
Selection textiles/Website/
├── app/
│   ├── layout.tsx                # ThemeProvider, Google Fonts, Header, Footer
│   ├── page.tsx                  # Foundation & Design System showcase (Homepage deferred)
│   ├── collections/              # Bespoke Collections catalog
│   │   └── [slug]/               # Dynamic collection lookbook view
│   ├── products/
│   │   └── [slug]/               # Garment studio & specification view
│   ├── fabrics/                  # Global mill archives & cloth curation
│   ├── tailoring/                # Made-to-measure tailoring methodology
│   ├── atelier/                  # The Atelier experience
│   ├── corporate/                # Corporate uniform studio & institutional regalia
│   ├── heritage/                 # Selection Textiles history & mill partners
│   ├── showroom/                 # Digital showroom & 3D stage placeholder
│   ├── contact/                  # Private consultation & appointment concierge
│   └── admin/                    # Internal staff & management console placeholder
```

---

## 7. Responsive Breakpoint Specification

Tailwind configuration includes mobile-first breakpoints:
- `xs`: 320px (Compact Mobile)
- `sm-mobile`: 375px (Standard iPhone/Android)
- `mobile-lg`: 430px (Large Mobile)
- `sm`: 640px (Small Tablet)
- `md`: 768px (Tablet Portrait)
- `lg`: 1024px (Tablet Landscape / Laptop)
- `xl`: 1280px (Standard Desktop)
- `2xl`: 1440px (High-Res Desktop)
- `3xl`: 1920px+ (Ultra-wide Showroom Display)

---

## 8. Incremental Roadmap

- [x] **Batch 0 (Foundation)**:
  - Official brand rule (**Selection Textiles**)
  - Light-first warm neutral theme + warm charcoal dark mode
  - Complete Light/Dark/System theme switcher with `next-themes`
  - 17 reusable UI and layout components
  - 12 route placeholders (including `/fabrics`, `/tailoring`, `/atelier`)
  - Typography & responsive breakpoint system
  - Comprehensive `PROJECT.md`
- [ ] **Batch 1 (Editorial Homepage & Catalog)**: Full editorial homepage, interactive lookbook, and filterable fabric archive.
- [ ] **Batch 2 (3D Garment Studio & Digital Showroom)**: Lazy-loaded React Three Fiber stage, 360° model rotation, dynamic cloth swap.
- [ ] **Batch 3 (AI Stylist & Measurement Experience)**: Conversational stylist and digital measurement guide.
- [ ] **Batch 4 (Corporate Fleet Configurator & Admin CMS)**: Corporate uniform quotation engine, Auth.js, and Neon PostgreSQL database.
