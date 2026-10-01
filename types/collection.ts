import { Product } from './product';

export interface LookbookSlide {
  id: string;
  image: string;
  caption: string;
  garmentName: string;
  fabricCode: string;
  productSlug?: string;
}

export interface Collection {
  id: string;
  slug: string;
  title: string;
  editorialSubtitle: string;
  season: 'Spring / Summer' | 'Autumn / Winter' | 'Royal Wedding & Ceremonial' | 'Executive Bespoke';
  year: string;
  description: string;
  curatorNote: string;
  coverImage: string;
  paletteColors: string[]; // Hex codes representing collection swatch story
  lookbook: LookbookSlide[];
  featuredProductSlugs: string[];
  isCurrentSeason: boolean;
  publishedAt: string;
}
