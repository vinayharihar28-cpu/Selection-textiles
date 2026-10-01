/**
 * ==============================================================================
 * SELECTION TEXTILES — 3D MODEL BUCKET REGISTRY
 * ==============================================================================
 *
 * Put all your 3D GLB bucket URLs in this file.
 *
 * NO Vercel environment variables required.
 * NO database or API keys required.
 * Everything is bundled directly with your website code.
 */

// 1. PRIMARY / DEFAULT 3D MODEL (Paste your main GLB bucket link here)
export const DEFAULT_MODEL_URL =
  process.env.NEXT_PUBLIC_DEFAULT_MODEL_URL ||
  'https://selection-textile-3d-models.s3.us-east-1.amazonaws.com/Meshy_AI_handsome_male_formal__0924135608_image-to-3d-texture.glb';

/**
 * 2. PRODUCT-SPECIFIC 3D MODELS
 *
 * Map any product slug to its corresponding GLB bucket link.
 * Example:
 *   'product-slug': 'https://your-bucket-url.glb',
 */
export const GARMENT_MODELS: Record<string, string> = {
  // Savile Double-Breasted 6x2 suit (/products/bespoke-suits-model-one)
  'bespoke-suits-model-one': DEFAULT_MODEL_URL,
  'classic-two-piece-suit': DEFAULT_MODEL_URL,

  // Modi Coats & Tailored Jackets (/products/modi-coat-heritage)
  'modi-coat-heritage': DEFAULT_MODEL_URL,
  'tailored-bandhgala-coat': DEFAULT_MODEL_URL,

  // Sherwanis
  'regal-sherwanis-model-one': DEFAULT_MODEL_URL,
  'ceremonial-achkan-sherwani': DEFAULT_MODEL_URL,
};

/**
 * Helper to get the 3D model for any product slug.
 */
export function getGarmentModelUrl(slug: string): string | undefined {
  if (GARMENT_MODELS[slug]) {
    return GARMENT_MODELS[slug];
  }

  // Fallback: connect suits, coats, blazers, jackets, and sherwanis to the 3D model
  const s = slug.toLowerCase();
  if (
    s.includes('suit') ||
    s.includes('coat') ||
    s.includes('modi') ||
    s.includes('blazer') ||
    s.includes('jacket') ||
    s.includes('savile') ||
    s.includes('sherwani') ||
    s === '3d-garment'
  ) {
    return DEFAULT_MODEL_URL;
  }

  return undefined;
}
