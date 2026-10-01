'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ArrowUpRight,
  Navigation,
  Layers,
  Shirt,
  Calendar,
  Ruler,
  RotateCcw,
} from 'lucide-react';

function ContactFormInner() {
  const searchParams = useSearchParams();

  // Read search parameters passed from pages, collections, or 3D Garment Studio
  const sourceParam = searchParams.get('source');
  const occasionParam = searchParams.get('occasion') || '';
  const garmentParam = searchParams.get('garment') || '';
  const itemParam = searchParams.get('item') || '';
  const collectionParam = searchParams.get('collection') || '';
  const fabricParam = searchParams.get('fabric') || '';
  const tailoringParam = searchParams.get('tailoring') || '';
  const requirementParam = searchParams.get('requirement') || '';
  const serviceParam = searchParams.get('service') || '';

  const activeItem = itemParam || garmentParam || collectionParam;
  const hasItemSelection = Boolean(
    activeItem || occasionParam || fabricParam || tailoringParam || requirementParam || serviceParam
  );

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    requirementType: 'tailoring_menswear',
    notes: '',
  });

  // Pre-fill state when search parameters are present
  useEffect(() => {
    if (hasItemSelection) {
      const combined = `${activeItem} ${garmentParam} ${collectionParam} ${fabricParam} ${tailoringParam} ${requirementParam} ${serviceParam}`.toLowerCase();
      let derivedReqType = 'tailoring_menswear';

      if (
        requirementParam === 'sherwanis_occasionwear' ||
        combined.includes('sherwani') ||
        combined.includes('occasion') ||
        combined.includes('wedding') ||
        combined.includes('kurta') ||
        combined.includes('bandhgala') ||
        combined.includes('indo-western') ||
        combined.includes('ceremonial')
      ) {
        derivedReqType = 'sherwanis_occasionwear';
      } else if (
        requirementParam === 'corporate_uniforms' ||
        combined.includes('uniform') ||
        combined.includes('corporate') ||
        combined.includes('workplace') ||
        combined.includes('fleet')
      ) {
        derivedReqType = 'corporate_uniforms';
      } else if (
        requirementParam === 'fabrics_wholesale_retail' ||
        combined.includes('fabric') ||
        combined.includes('cloth') ||
        combined.includes('textile') ||
        combined.includes('scabal') ||
        combined.includes('loro piana') ||
        combined.includes('wool') ||
        combined.includes('silk') ||
        combined.includes('linen') ||
        combined.includes('wholesale') ||
        combined.includes('retail')
      ) {
        derivedReqType = 'fabrics_wholesale_retail';
      } else if (
        requirementParam === 'showroom_visit' ||
        combined.includes('showroom') ||
        combined.includes('visit') ||
        combined.includes('consultation')
      ) {
        derivedReqType = 'showroom_visit';
      } else {
        derivedReqType = 'tailoring_menswear';
      }

      const notesLines: string[] = [];
      if (activeItem) {
        notesLines.push(`Enquiry for: ${activeItem}`);
      }
      if (garmentParam && garmentParam !== activeItem) {
        notesLines.push(`• Garment: ${garmentParam}`);
      }
      if (collectionParam && collectionParam !== activeItem) {
        notesLines.push(`• Collection: ${collectionParam}`);
      }
      if (fabricParam) {
        notesLines.push(`• Fabric / Cloth: ${fabricParam}`);
      }
      if (tailoringParam) {
        notesLines.push(`• Tailoring & Craftsmanship: ${tailoringParam}`);
      }
      if (occasionParam) {
        notesLines.push(`• Occasion / Event: ${occasionParam}`);
      }
      if (serviceParam) {
        notesLines.push(`• Service Requested: ${serviceParam}`);
      }
      notesLines.push('\nPlease share fabric swatch availability, bespoke pricing, and consultation scheduling.');

      setFormData((prev) => ({
        ...prev,
        requirementType: derivedReqType,
        notes: notesLines.join('\n'),
      }));
    }
  }, [
    hasItemSelection,
    activeItem,
    garmentParam,
    collectionParam,
    occasionParam,
    fabricParam,
    tailoringParam,
    requirementParam,
    serviceParam,
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClearPreFill = () => {
    setFormData((prev) => ({
      ...prev,
      requirementType: 'tailoring_menswear',
      notes: '',
    }));
  };

  return (
    <div className="bg-surface border border-border rounded-2xl p-7 sm:p-9 shadow-soft">
      {submitted ? (
        <div className="py-12 text-center flex flex-col items-center animate-in fade-in duration-300">
          <div className="w-14 h-14 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent mb-5">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-normal mb-2">
            Enquiry Received
          </h3>
          <p className="text-xs sm:text-sm text-muted font-sans max-w-md mb-4 leading-relaxed">
            Thank you, {formData.fullName}. Selection Textiles will respond to your requirement via phone or email promptly.
          </p>

          {hasItemSelection && (
            <div className="p-4 rounded-xl border border-accent/30 bg-surface-muted max-w-md text-left text-xs font-sans mb-6">
              <span className="text-[10px] uppercase tracking-wider text-accent font-medium block mb-2">
                Captured Requirement Details
              </span>
              {activeItem && <p className="text-foreground"><strong>Item / Collection:</strong> {activeItem}</p>}
              {occasionParam && <p className="text-foreground"><strong>Occasion:</strong> {occasionParam}</p>}
              {fabricParam && <p className="text-foreground"><strong>Fabric:</strong> {fabricParam}</p>}
              {tailoringParam && <p className="text-foreground"><strong>Tailoring:</strong> {tailoringParam}</p>}
            </div>
          )}

          <Button
            variant="outline"
            size="sm"
            onClick={() => setSubmitted(false)}
          >
            Submit Another Enquiry
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <span className="text-xs uppercase tracking-wider text-accent font-sans font-medium block mb-1">
                Direct Showroom Enquiry
              </span>
              <h3 className="font-serif text-2xl text-foreground font-normal">
                Send an Enquiry
              </h3>
            </div>
            {hasItemSelection && (
              <Badge variant="accent" size="sm" className="shadow-sm">
                <span>Enquiry Pre-Filled</span>
              </Badge>
            )}
          </div>

          {/* Dedicated Pre-Fill Highlight Card from selection */}
          {hasItemSelection && (
            <div className="p-4 rounded-xl border border-accent/40 bg-surface-muted/90 flex flex-col gap-2.5 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-sans uppercase tracking-wider text-accent font-medium flex items-center">
                  Selected Item & Requirement Details
                </span>
                <button
                  type="button"
                  onClick={handleClearPreFill}
                  className="text-[10px] text-muted hover:text-foreground font-sans inline-flex items-center gap-1 transition-colors"
                >
                  <RotateCcw className="w-2.5 h-2.5" />
                  <span>Clear Selection</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-sans">
                {activeItem && (
                  <div className="p-2 rounded-lg bg-surface border border-border">
                    <span className="text-[9px] uppercase tracking-wider text-muted block flex items-center gap-1">
                      <Shirt className="w-3 h-3 text-accent" />
                      Item / Collection
                    </span>
                    <span className="font-medium text-foreground text-[11px] mt-0.5 block truncate" title={activeItem}>
                      {activeItem}
                    </span>
                  </div>
                )}
                {occasionParam && (
                  <div className="p-2 rounded-lg bg-surface border border-border">
                    <span className="text-[9px] uppercase tracking-wider text-muted block flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-accent" />
                      Occasion
                    </span>
                    <span className="font-medium text-foreground text-[11px] mt-0.5 block truncate" title={occasionParam}>
                      {occasionParam}
                    </span>
                  </div>
                )}
                {fabricParam && (
                  <div className="p-2 rounded-lg bg-surface border border-border">
                    <span className="text-[9px] uppercase tracking-wider text-muted block flex items-center gap-1">
                      <Layers className="w-3 h-3 text-accent" />
                      Fabric
                    </span>
                    <span className="font-medium text-foreground text-[11px] mt-0.5 block truncate" title={fabricParam}>
                      {fabricParam}
                    </span>
                  </div>
                )}
                {tailoringParam && (
                  <div className="p-2 rounded-lg bg-surface border border-border">
                    <span className="text-[9px] uppercase tracking-wider text-muted block flex items-center gap-1">
                      <Ruler className="w-3 h-3 text-accent" />
                      Tailoring
                    </span>
                    <span className="font-medium text-foreground text-[11px] mt-0.5 block truncate" title={tailoringParam}>
                      {tailoringParam}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between text-[11px] text-muted pt-1">
                <span>The details below have been pre-filled for your enquiry.</span>
                <Link href="/collections" className="text-accent hover:underline inline-flex items-center gap-0.5">
                  <span>Explore Collections</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-full-name" className="text-xs text-foreground font-sans font-medium">
                Full Name *
              </label>
              <input
                id="contact-full-name"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Ramesh Kumar"
                className="h-11 px-4 text-xs bg-surface-muted border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-phone" className="text-xs text-foreground font-sans font-medium">
                Phone Number *
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91-98446 75222"
                className="h-11 px-4 text-xs bg-surface-muted border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="text-xs text-foreground font-sans font-medium">
                Email Address *
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="yourname@domain.com"
                className="h-11 px-4 text-xs bg-surface-muted border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-req-type" className="text-xs text-foreground font-sans font-medium">
                Primary Area of Requirement
              </label>
              <select
                id="contact-req-type"
                value={formData.requirementType}
                onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })}
                className="h-11 px-3 text-xs bg-surface-muted border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
              >
                <option value="tailoring_menswear">Made-to-Measure Tailoring & Menswear</option>
                <option value="sherwanis_occasionwear">Sherwanis & Traditional Occasionwear</option>
                <option value="fabrics_wholesale_retail">Fabric Curation (Wholesale / Retail)</option>
                <option value="corporate_uniforms">Corporate Uniforms / Workplace Fleet</option>
                <option value="showroom_visit">Showroom Visit / Consultation</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-notes" className="text-xs text-foreground font-sans font-medium flex items-center justify-between">
              <span>Requirement Details</span>
              {hasItemSelection && (
                <span className="text-[10px] text-accent font-normal">Pre-filled with your selections</span>
              )}
            </label>
            <textarea
              id="contact-notes"
              rows={4}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Provide details about your tailoring requirement, fabric preference, or corporate uniform inquiry..."
              className="p-4 text-xs bg-surface-muted border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none font-sans"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full text-xs uppercase tracking-widest-editorial py-4 mt-2"
          >
            {hasItemSelection ? 'Submit Bespoke Enquiry' : 'Submit Enquiry'}
          </Button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section
        variant="muted"
        eyebrow="Bengaluru Showroom & Office"
        title="Contact Selection Textiles."
        description="Connect with Selection Textiles for textile retail, wholesale cloth enquiries, made-to-measure tailoring consultations, or corporate uniform requirements. Visit our showroom or get in touch below."
      />

      {/* Main Grid: Details + Contact Form */}
      <Section variant="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <Badge variant="accent" size="sm" className="mb-3">
                Established 1979
              </Badge>
              <h3 className="font-serif text-3xl text-foreground font-normal">
                Selection Textiles
              </h3>
              <p className="text-xs sm:text-sm text-muted font-sans mt-3 leading-relaxed">
                Textile retailer, wholesaler, and uniform supplier located in the heart of Bengaluru&apos;s historic commercial district.
              </p>
            </div>

            <div className="flex flex-col gap-5 pt-5 border-t border-border text-xs font-sans">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Showroom & Registered Address</p>
                  <p className="text-muted leading-relaxed mt-0.5">
                    #16-17, &ldquo;D.Rangaiah Complex&rdquo;,<br />
                    B.V.K. Iyengar Road,<br />
                    Bengaluru – 560053, Karnataka, India
                  </p>
                  <a
                    href="https://maps.google.com/?q=B.V.K.+Iyengar+Road+Bengaluru+560053"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent hover:underline text-[11px] font-medium mt-2"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Phone & Landline */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Telephone Contact</p>
                  <p className="text-muted mt-0.5">Mobile: +91-98446 75222</p>
                  <p className="text-muted">Landline: +91-080-22258982</p>
                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href="tel:+919844675222"
                      className="inline-flex items-center gap-1 text-accent text-[11px] font-medium hover:underline"
                    >
                      <span>Call Mobile</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <a
                      href="tel:+9108022258982"
                      className="inline-flex items-center gap-1 text-accent text-[11px] font-medium hover:underline"
                    >
                      <span>Call Landline</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Email Addresses</p>
                  <p className="text-muted mt-0.5">selection.textiles@gmail.com</p>
                  <p className="text-muted">info@selectiontextiles.com</p>
                  <a
                    href="mailto:selection.textiles@gmail.com"
                    className="inline-flex items-center gap-1 text-accent text-[11px] font-medium hover:underline mt-2"
                  >
                    <span>Send Email</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="p-5 rounded-xl border border-border bg-surface-muted flex flex-col gap-3">
              <span className="text-[11px] font-sans uppercase tracking-wider text-accent font-medium">
                Direct Actions
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href="tel:+919844675222"
                  className="p-2.5 rounded-lg border border-border bg-surface text-center font-medium hover:border-accent transition-colors"
                >
                  Call Now
                </a>
                <a
                  href="mailto:selection.textiles@gmail.com"
                  className="p-2.5 rounded-lg border border-border bg-surface text-center font-medium hover:border-accent transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Column with Suspense */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="bg-surface border border-border rounded-2xl p-8 shadow-soft text-center py-16">
                  <div className="w-8 h-8 rounded-full border-2 border-border border-t-accent animate-spin mx-auto mb-3" />
                  <p className="text-xs text-muted font-sans">Loading enquiry form...</p>
                </div>
              }
            >
              <ContactFormInner />
            </Suspense>
          </div>
        </div>
      </Section>

      {/* Big Google Maps Location Embed */}
      <Section
        id="showroom-map"
        variant="surface"
        hasTopDivider
        containerSize="wide"
        eyebrow="Bengaluru Showroom • Physical Coordinates"
        title="Find Selection Textiles on Google Maps."
        description="Visit our landmark showroom on B.V.K. Iyengar Road in Bengaluru. Experience the suiting, shirting, and bespoke cuts in person."
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 rounded-xl border border-border bg-background">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div className="text-xs font-sans">
                <p className="font-medium text-foreground">Selection Textiles Showroom</p>
                <p className="text-muted">#16-17, &ldquo;D.Rangaiah Complex&rdquo;, B.V.K. Iyengar Road, Bengaluru – 560053</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://maps.google.com/?q=Selection+Textiles+B.V.K.+Iyengar+Road+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-xs font-sans font-medium hover:bg-accent/90 transition-colors shadow-soft"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5" />
              </a>
              <a
                href="tel:+919844675222"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border bg-surface text-xs font-sans font-medium text-foreground hover:bg-surface-muted transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>Call Showroom</span>
              </a>
            </div>
          </div>

          {/* Big Map Container */}
          <div className="w-full h-[450px] sm:h-[520px] md:h-[580px] rounded-2xl overflow-hidden border border-border shadow-soft bg-surface-muted relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0209278979396!2d77.57363947934569!3d12.97051260000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16091ff8a12b%3A0xa583cf6f3e4bf80d!2sSelection%20Textiles!5e0!3m2!1sen!2sin!4v1790444284127!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Selection Textiles Bengaluru Showroom Map"
              className="w-full h-full"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
