import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { BackButton } from '@/components/ui/back-button';
import { Shield, Clock, Ruler } from 'lucide-react';
import { getProductBySlug } from '@/lib/data/products';
import { Product3DViewer } from '@/components/3d/Product3DViewer';

interface Props {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export function generateMetadata({ params }: Props) {
  const product = getProductBySlug(params.slug);

  return {
    title: `${product.name} | Bespoke Garment | Selection Textiles`,
    description: `${product.shortDescription} Handcrafted bespoke silhouette with full floating canvas and tailored cut by Selection Textiles Bengaluru.`,
  };
}

export default function ProductSlugPage({ params, searchParams }: Props) {
  const { slug } = params;
  const product = getProductBySlug(slug);
  const name = product.name;

  return (
    <div className="flex flex-col">
      {/* Garment Studio Showcase */}
      <Section variant="surface" className="pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12">
        <div className="mb-4 sm:mb-6">
          <BackButton href="/collections" ariaLabel="Back to Collections" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left: Garment Visual / Production 3D Viewer */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <Product3DViewer
              modelUrl={product.modelUrl}
              imageUrl={product.heroImage.url}
              imageAlt={product.heroImage.alt || product.name}
              productName={product.name}
              aspectRatioClass="aspect-[3/4] lg:aspect-auto lg:h-[calc(100vh-235px)] lg:max-h-[640px] lg:min-h-[460px]"
              craftsmanshipTag={product.construction}
              category={product.category.replace(/_/g, ' ')}
            />

            <div className="grid grid-cols-3 gap-2.5 text-center text-xs font-sans">
              <div className="p-2.5 rounded-xl border border-border bg-surface shadow-soft">
                <span className="text-muted block text-[10px] uppercase tracking-wider">Construction</span>
                <span className="text-foreground font-serif text-sm mt-0.5 block">{product.construction}</span>
              </div>
              <div className="p-2.5 rounded-xl border border-border bg-surface shadow-soft">
                <span className="text-muted block text-[10px] uppercase tracking-wider">Handwork</span>
                <span className="text-foreground font-serif text-sm mt-0.5 block">{product.handworkHours}+ Hours</span>
              </div>
              <div className="p-2.5 rounded-xl border border-border bg-surface shadow-soft">
                <span className="text-muted block text-[10px] uppercase tracking-wider">Fitting</span>
                <span className="text-foreground font-serif text-sm mt-0.5 block">Custom Fit</span>
              </div>
            </div>
          </div>

          {/* Right: Bespoke Customization & Specification Details */}
          <div className="lg:col-span-5 flex flex-col gap-4 lg:h-[calc(100vh-235px)] lg:max-h-[640px] lg:justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-accent font-sans font-medium block mb-1.5">
                Bespoke Commission
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-3xl text-foreground font-light">
                {name}
              </h1>
              <p className="text-[11px] text-muted mt-1 font-mono">
                REFERENCE: SEL-TEX-{slug.toUpperCase().slice(0, 8)}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border bg-surface-muted shadow-soft">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] uppercase tracking-wider text-accent font-sans font-medium">
                  Selection Textiles Showroom
                </span>
                <span className="text-[10px] uppercase tracking-wider text-muted font-sans">
                  B.V.K. Iyengar Road, Bengaluru
                </span>
              </div>
              <p className="font-serif text-lg sm:text-xl text-foreground font-light">
                Enquiry & Showroom Consultation
              </p>
              <p className="text-xs text-muted mt-1.5 leading-relaxed font-sans line-clamp-3">
                {product.shortDescription} Every garment is individually drafted and crafted to your personal measurements and cloth choice. Please contact us or visit our Bengaluru showroom for fabric selection and custom fitting.
              </p>
            </div>

            {/* Sartorial Details List */}
            <div className="flex flex-col gap-2.5 text-xs font-sans border-y border-border py-3.5">
              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-accent shrink-0" />
                <span className="text-foreground">Individually drafted pattern cut to client measurements</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Ruler className="w-4 h-4 text-accent shrink-0" />
                <span className="text-foreground">Made-to-measure tailoring and refined presentation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span className="text-foreground">Crafted with precision at Selection Textiles Bengaluru</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2.5">
              {(() => {
                const queryParts: string[] = [];
                queryParts.push(`source=${encodeURIComponent((searchParams?.source as string) || 'product')}`);
                queryParts.push(`item=${encodeURIComponent(product.name)}`);
                queryParts.push(`garment=${encodeURIComponent(product.name)}`);
                queryParts.push(`requirement=${encodeURIComponent(String(product.category).includes('sherwani') ? 'sherwanis_occasionwear' : 'tailoring_menswear')}`);
                if (searchParams?.occasion) {
                  queryParts.push(`occasion=${encodeURIComponent(searchParams.occasion as string)}`);
                }
                const fabricVal = (searchParams?.fabric as string) || product.subtitle;
                if (fabricVal) {
                  queryParts.push(`fabric=${encodeURIComponent(fabricVal)}`);
                }
                const tailoringVal = (searchParams?.tailoring as string) || product.construction;
                if (tailoringVal) {
                  queryParts.push(`tailoring=${encodeURIComponent(tailoringVal)}`);
                }
                const contactUrl = `/contact?${queryParts.join('&')}`;

                return (
                  <Link href={contactUrl}>
                    <Button variant="primary" size="md" className="w-full text-xs uppercase tracking-widest-editorial shadow-soft">
                      Enquire About This Garment
                    </Button>
                  </Link>
                );
              })()}
              <Link href="/contact">
                <Button variant="outline" size="sm" className="w-full text-xs uppercase tracking-widest-editorial">
                  Visit Bengaluru Showroom
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
