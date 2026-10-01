import { GarmentCategory, GarmentDivision, CanvassingConstruction } from './garment';
import { Fabric } from './fabric';

export interface ProductPriceRange {
  startingAt?: number;
  currency?: 'INR' | 'USD';
  formattedDisplay: string;
  isCustomQuoteOnly?: boolean;
}

export interface ProductCraftsmanshipDetail {
  title: string;
  description: string;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isPrimary?: boolean;
  aspectRatio?: 'portrait' | 'square' | 'wide';
}

export interface Product {
  id: string;
  slug: string;
  sku: string;
  name: string;
  editorialTitle: string;
  subtitle: string;
  division: GarmentDivision;
  category: GarmentCategory;
  price: ProductPriceRange;
  shortDescription: string;
  editorialStory: string;
  craftsmanshipNotes: ProductCraftsmanshipDetail[];
  construction: CanvassingConstruction;
  handworkHours: number;
  leadTimeWeeks: number;
  featuredFabric?: Fabric;
  availableFabricsCount: number;
  heroImage: ProductImage;
  galleryImages: ProductImage[];
  tags: string[];
  isFeatured: boolean;
  isSignatureHeritage: boolean;
  inDigitalShowroom: boolean;
  model3DPath?: string; // Optional path for lazy-loaded GLB in future batches
  modelUrl?: string; // Production storage bucket GLB URL
}
