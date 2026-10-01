export type FabricMill =
  | 'Scabal'
  | 'Loro Piana'
  | 'Vitale Barberis Canonico'
  | 'Huddersfield Fine Worsteds'
  | 'Dormeuil'
  | 'Thomas Mason'
  | 'Söktas'
  | 'Raymond Fine Fabrics'
  | 'Selection Heritage Archive';

export type FabricComposition =
  | '100% Super 150s Merino Wool'
  | '100% Super 130s Merino Wool'
  | '100% Super 120s Tasmanian Wool'
  | 'Wool & Cashmere Blend'
  | 'Pure Mulberry Silk'
  | 'Raw Silk & Matka Silk'
  | 'Silk & Wool Blend'
  | '100% Egyptian Giza Cotton'
  | 'Pure Irish Linen'
  | 'Wool & Linen Blend'
  | 'Performance Wool Stretch'
  | 'High-Tenacity Poly-Wool Blend';

export type FabricWeave =
  | 'Twill'
  | 'Herringbone'
  | 'Birdseye'
  | 'Houndstooth'
  | 'Sharkskin'
  | 'Plain Weave'
  | 'Satin / Barathea'
  | 'Jacquard / Brocade'
  | 'Oxford'
  | 'Poplin'
  | 'Panama';

export type FabricWeightCategory =
  | 'Tropical (200-240 GSM)'
  | 'All Season (250-290 GSM)'
  | 'Mid Weight (300-340 GSM)'
  | 'Heavy Overcoating (360+ GSM)';

export type FabricSeason =
  | 'All Season'
  | 'Spring / Summer'
  | 'Autumn / Winter'
  | 'Ceremonial / Evening';

export interface Fabric {
  id: string;
  code: string;
  name: string;
  mill: FabricMill;
  millOrigin: string; // e.g., 'Biella, Italy', 'Yorkshire, England', 'Bengaluru Archive'
  composition: FabricComposition;
  weave: FabricWeave;
  weightGsm: number;
  weightCategory: FabricWeightCategory;
  season: FabricSeason;
  colorName: string;
  colorHex: string;
  pattern: 'Solid' | 'Pinstripe' | 'Chalk Stripe' | 'Windowpane' | 'Glen Check' | 'Brocade' | 'Textured Micro';
  textureDescription: string;
  drapeScore: number; // 1 to 5 (Structured to Fluid)
  sheen: 'Matte' | 'Subtle Luster' | 'Silken Sheen' | 'Ceremonial Radiance';
  imageUrl: string;
  swatchImageUrl: string;
  recommendedGarments: string[];
  tags: string[];
  inStock: boolean;
}
