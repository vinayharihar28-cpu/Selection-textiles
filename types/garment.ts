export type GarmentDivision =
  | 'bespoke_western'
  | 'ceremonial_heritage'
  | 'corporate_uniform_studio';

export type GarmentCategory =
  // Bespoke Western & Tailoring
  | 'two_piece_suit'
  | 'three_piece_suit'
  | 'tuxedo'
  | 'tailored_blazer'
  | 'suits_blazers'
  | 'dress_shirt'
  | 'bespoke_trouser'
  | 'shirts_trousers'
  | 'waistcoat'
  | 'overcoat'
  // Ceremonial & Indian Heritage
  | 'regal_sherwani'
  | 'sherwanis'
  | 'royal_bandhgala'
  | 'modi_coat'
  | 'modi_coats_jackets'
  | 'kurta_pyjama'
  | 'mens_kurta_pyjama'
  | 'achkan'
  | 'indo_western'
  // Corporate, Casual & Fabrics
  | 'polo_tshirts'
  | 'sports_wear'
  | 'corporate_uniforms'
  | 'fabrics'
  | 'executive_suit'
  | 'corporate_blazer'
  | 'corporate_shirt'
  | 'front_of_house_uniform'
  | 'institutional_regalia'
  | 'custom_sportswear';

export type CanvassingConstruction =
  | 'Full Floating Canvas'
  | 'Half Canvas'
  | 'Unstructured Soft Tailoring'
  | 'Structured Ceremonial Canvas';

export type LapelStyle =
  | 'Notch Lapel (Standard)'
  | 'Peak Lapel (Bespoke Wide)'
  | 'Shawl Collar'
  | 'Bandhgala Mandarin Collar'
  | 'Nehru Stand Collar'
  | 'Club Collar';

export type VentStyle =
  | 'Double Side Vents'
  | 'Single Center Vent'
  | 'Ventless (Evening Formal)';

export type ButtonStance =
  | 'Single Breasted 1-Button'
  | 'Single Breasted 2-Button'
  | 'Single Breasted 3-Button'
  | 'Double Breasted 6x2'
  | 'Double Breasted 4x2'
  | 'Five-Button Stand Collar'
  | 'Hidden Placket Ceremonial';

export type PocketStyle =
  | 'Flap Pockets'
  | 'Jetted Pockets'
  | 'Ticket Pocket'
  | 'Patch Pockets'
  | 'Concealed Side Pockets';

export interface GarmentCustomizationOption {
  id: string;
  category: 'construction' | 'lapel' | 'vents' | 'buttons' | 'lining' | 'embroidery' | 'monogram';
  name: string;
  description: string;
  additionalCost?: number;
  availableValues: {
    id: string;
    label: string;
    description?: string;
    imageUrl?: string;
  }[];
}

export interface GarmentSpecification {
  category: GarmentCategory;
  division: GarmentDivision;
  defaultConstruction: CanvassingConstruction;
  supportedLapels: LapelStyle[];
  supportedVents: VentStyle[];
  supportedButtonStances: ButtonStance[];
  supportedPockets: PocketStyle[];
  customizationOptions: GarmentCustomizationOption[];
  fittingsRecommended: number; // typically 2-3 for bespoke
  standardCraftsmanshipHours: number;
}
