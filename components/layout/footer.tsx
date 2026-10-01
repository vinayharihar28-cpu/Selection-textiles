import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './container';
import { ArrowUpRight, Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-forest-dark text-ivory/80 relative overflow-hidden pt-16 pb-8 border-t border-forest-muted">
      {/* Main Footer Grid */}
      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-ivory/10">
          {/* Col 1: Brand & Heritage */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <Link href="/" className="flex flex-col items-start gap-1">
              <Image
                src="/images/Logo/Logo.png"
                alt="Selection Textiles"
                width={2172}
                height={724}
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
              />
              <span className="text-[10px] tracking-[0.25em] text-brass uppercase font-sans mt-1">
                Bengaluru • Established 1979
              </span>
            </Link>

            <p className="text-xs text-ivory/70 max-w-sm leading-relaxed font-sans mt-1">
              A heritage textile showroom and made-to-measure tailoring institution established on B.V.K. Iyengar Road, Bengaluru in 1979. Serving bespoke tailoring, wholesale cloth, and corporate uniform clients for over four decades.
            </p>

            <div className="pt-2 text-xs font-sans flex flex-col gap-2.5">
              <div className="flex items-start gap-2.5 text-ivory/80">
                <MapPin className="w-4 h-4 text-brass shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  #16-17, &ldquo;D.Rangaiah Complex&rdquo;,<br />
                  B.V.K. Iyengar Road, Bengaluru – 560053,<br />
                  Karnataka, India
                </p>
              </div>
              <div className="flex items-center gap-2.5 text-ivory/80">
                <Phone className="w-4 h-4 text-brass shrink-0" />
                <a href="tel:+919844675222" className="hover:text-ivory transition-colors">
                  +91-98446 75222 / 080-22258982
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-ivory/80">
                <Mail className="w-4 h-4 text-brass shrink-0" />
                <a href="mailto:selection.textiles@gmail.com" className="hover:text-ivory transition-colors">
                  selection.textiles@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-ivory/60 pt-1 text-[11px]">
                <Clock className="w-3.5 h-3.5 text-brass/80 shrink-0" />
                <span>Mon – Sat: 10:30 AM – 8:30 PM • Sunday by Appointment</span>
              </div>
            </div>
          </div>

          {/* Col 2: Collections */}
          <div className="lg:col-span-3 flex flex-col gap-3.5">
            <span className="text-xs uppercase tracking-widest font-sans font-medium text-ivory">
              10 Collections
            </span>
            <ul className="flex flex-col gap-2 text-xs font-sans text-ivory/70">
              <li>
                <Link href="/collections/suits-blazers" className="hover:text-ivory transition-colors">
                  Suits & Blazers
                </Link>
              </li>
              <li>
                <Link href="/collections/sherwanis" className="hover:text-ivory transition-colors">
                  Sherwanis & Achkans
                </Link>
              </li>
              <li>
                <Link href="/collections/shirts-trousers" className="hover:text-ivory transition-colors">
                  Shirts & Trousers
                </Link>
              </li>
              <li>
                <Link href="/collections/modi-coats-jackets" className="hover:text-ivory transition-colors">
                  Modi Coats & Jackets
                </Link>
              </li>
              <li>
                <Link href="/collections/waistcoats" className="hover:text-ivory transition-colors">
                  Waistcoats
                </Link>
              </li>
              <li>
                <Link href="/collections/mens-kurta-pyjama" className="hover:text-ivory transition-colors">
                  Men&apos;s Kurta Pyjama
                </Link>
              </li>
              <li>
                <Link href="/collections/fabrics" className="hover:text-ivory transition-colors">
                  Fabrics & Mill Archives
                </Link>
              </li>
              <li>
                <Link href="/collections/corporate-uniforms" className="hover:text-ivory transition-colors">
                  Corporate Uniforms (11 Sectors)
                </Link>
              </li>
              <li>
                <Link href="/collections/polo-t-shirts" className="hover:text-ivory transition-colors">
                  Polo T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/collections/sports-wear" className="hover:text-ivory transition-colors">
                  Sports Wear & Tracksuits
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Services */}
          <div className="lg:col-span-2 flex flex-col gap-3.5">
            <span className="text-xs uppercase tracking-widest font-sans font-medium text-ivory">
              Navigation
            </span>
            <ul className="flex flex-col gap-2 text-xs font-sans text-ivory/70">
              <li>
                <Link href="/collections" className="hover:text-ivory transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/tailoring" className="hover:text-ivory transition-colors">
                  Tailoring & Fit
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="hover:text-ivory transition-colors">
                  Corporate Uniforms
                </Link>
              </li>
              <li>
                <Link href="/fabrics" className="hover:text-ivory transition-colors">
                  Fabrics & Mills
                </Link>
              </li>
              <li>
                <Link href="/heritage" className="hover:text-ivory transition-colors">
                  Heritage Since 1979
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ivory transition-colors">
                  Contact & Enquiries
                </Link>
              </li>
              <li>
                <Link href="/showroom" className="hover:text-ivory transition-colors">
                  Digital Showroom
                </Link>
              </li>
              <li>
                <Link href="/products/bespoke-suits-model-one" className="hover:text-ivory transition-colors flex items-center gap-1.5 text-brass">
                  <span>Interactive 3D Studio</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Showroom & Consultation */}
          <div className="lg:col-span-3 flex flex-col gap-3.5">
            <span className="text-xs uppercase tracking-widest font-sans font-medium text-ivory">
              Showroom Consultation
            </span>
            <p className="text-xs text-ivory/70 leading-relaxed font-sans">
              Visit our Bengaluru showroom on B.V.K. Iyengar Road to experience mill fabrics in person, receive custom measurements, or discuss fleet uniform programs.
            </p>

            <div className="flex flex-col gap-2.5 mt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-forest border border-forest-muted text-ivory text-xs font-medium hover:bg-forest/80 transition-all group"
              >
                <span>Book Bespoke Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-brass group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/corporate"
                className="inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-ivory/5 border border-ivory/10 text-ivory/90 text-xs font-medium hover:bg-ivory/10 transition-all group"
              >
                <span>Request Corporate Uniform Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-ivory/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <a
                href="https://maps.google.com/?q=Selection+Textiles+BVK+Iyengar+Road+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-brass hover:text-brass/80 font-medium font-sans w-fit mt-1"
              >
                <span>Get Google Maps Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ivory/60 font-sans">
          <p className="text-center sm:text-left">
            © 1979 – {new Date().getFullYear()} Selection Textiles. Bengaluru, India. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link href="/collections" className="hover:text-ivory transition-colors">
              Collections
            </Link>
            <Link href="/tailoring" className="hover:text-ivory transition-colors">
              Tailoring
            </Link>
            <Link href="/corporate" className="hover:text-ivory transition-colors">
              Corporate
            </Link>
            <Link href="/fabrics" className="hover:text-ivory transition-colors">
              Fabrics
            </Link>
            <Link href="/heritage" className="hover:text-ivory transition-colors">
              Heritage
            </Link>
            <Link href="/contact" className="hover:text-ivory transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
