'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, ArrowUpRight, Phone, Mail, Building2 } from 'lucide-react';

export function CorporateEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    organisationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: 'Corporate & Sales',
    estimatedQuantity: '25 – 100 sets',
    requirements: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-surface dark:bg-[#16221D] border border-border/80 dark:border-white/10 shadow-soft-lg">
      <div className="mb-6 pb-4 border-b border-border/60">
        <Badge variant="accent" size="sm" className="mb-2 bg-forest text-ivory dark:bg-sage dark:text-forest-dark">
          Institutional Concierge
        </Badge>
        <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-normal">
          Request Corporate Uniform Quotation
        </h3>
        <p className="text-xs sm:text-sm text-muted font-sans mt-1">
          Share your fleet requirements below. Our Bengaluru corporate team will prepare customized fabric swatches and bulk pricing.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 rounded-2xl bg-forest/5 dark:bg-sage/10 border border-forest/20 dark:border-sage/20 text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-forest text-white dark:bg-sage dark:text-forest-dark flex items-center justify-center mb-3">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="font-serif text-2xl text-foreground font-medium">
            Enquiry Received
          </h4>
          <p className="text-xs sm:text-sm text-muted font-sans mt-2 max-w-md leading-relaxed">
            Thank you, {formData.contactPerson}. Our corporate uniform specialist will review your requirement for {formData.organisationName} and contact you within one business day with fabric options and quotation details.
          </p>
          <div className="mt-4 pt-4 border-t border-border/60 text-xs font-sans text-muted">
            <span>Direct helpline: +91-86604 51300 / 080-22258982 / 080-41264992</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="corp-org-name" className="text-xs font-sans font-medium text-foreground">
                Organisation / Company Name *
              </label>
              <input
                id="corp-org-name"
                type="text"
                required
                value={formData.organisationName}
                onChange={(e) => setFormData({ ...formData, organisationName: e.target.value })}
                placeholder="e.g. Prestige Enterprises Ltd."
                className="h-11 px-4 text-xs bg-surface-muted border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-forest/40 font-sans"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="corp-contact-person" className="text-xs font-sans font-medium text-foreground">
                Contact Person Name *
              </label>
              <input
                id="corp-contact-person"
                type="text"
                required
                value={formData.contactPerson}
                onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                placeholder="e.g. Rajesh Sharma (HR / Procurement)"
                className="h-11 px-4 text-xs bg-surface-muted border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-forest/40 font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="corp-phone" className="text-xs font-sans font-medium text-foreground">
                Phone Number *
              </label>
              <input
                id="corp-phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91-98765 43210"
                className="h-11 px-4 text-xs bg-surface-muted border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-forest/40 font-sans"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="corp-email" className="text-xs font-sans font-medium text-foreground">
                Official Email Address *
              </label>
              <input
                id="corp-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="procurement@company.com"
                className="h-11 px-4 text-xs bg-surface-muted border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-forest/40 font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="corp-industry" className="text-xs font-sans font-medium text-foreground">
                Industry Sector
              </label>
              <select
                id="corp-industry"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="h-11 px-4 text-xs bg-surface-muted border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-forest/40 font-sans"
              >
                <option value="Corporate & Sales">Corporate Offices & Sales Teams</option>
                <option value="Security Forces">Security & Facility Protection</option>
                <option value="Hospitality & Culinary">Hotels, Resorts & Kitchens</option>
                <option value="Healthcare & Clinical">Hospitals, Clinics & Labs</option>
                <option value="Technical & Industrial">Automotive, Mechanical & Industrial</option>
                <option value="Facility Management">Facility Management & Housekeeping</option>
                <option value="Events & Sports">Corporate Events, Sports & Teams</option>
                <option value="Educational Institutions">Educational Institutions</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="corp-qty" className="text-xs font-sans font-medium text-foreground">
                Approximate Uniform Quantity
              </label>
              <select
                id="corp-qty"
                value={formData.estimatedQuantity}
                onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                className="h-11 px-4 text-xs bg-surface-muted border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-forest/40 font-sans"
              >
                <option value="Under 25 sets">Under 25 sets (Small Team)</option>
                <option value="25 – 100 sets">25 – 100 sets (Department Fleet)</option>
                <option value="100 – 500 sets">100 – 500 sets (Enterprise Scale)</option>
                <option value="500+ sets">500+ sets (Institutional Deployment)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="corp-requirements" className="text-xs font-sans font-medium text-foreground">
              Garment Types & Customization Notes
            </label>
            <textarea
              id="corp-requirements"
              rows={3}
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              placeholder="e.g. Formal embroidered shirts with trousers for 50 sales staff, and 20 boiler suits for workshop technicians..."
              className="p-3.5 text-xs bg-surface-muted border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-forest/40 resize-none font-sans"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full text-xs uppercase tracking-wider py-4 mt-2 bg-forest hover:bg-forest/90 text-ivory dark:bg-sage dark:text-forest-dark font-semibold shadow-soft"
          >
            Submit Corporate Quotation Request
          </Button>

          <p className="text-[11px] text-muted text-center font-sans">
            Need urgent assistance? Call our corporate desk at <a href="tel:+918660451300" className="text-forest dark:text-sage font-medium hover:underline">+91-86604 51300</a>, <a href="tel:+9108022258982" className="text-forest dark:text-sage font-medium hover:underline">080-22258982</a>, or <a href="tel:+9108041264992" className="text-forest dark:text-sage font-medium hover:underline">080-41264992</a>.
          </p>
        </form>
      )}
    </div>
  );
}
