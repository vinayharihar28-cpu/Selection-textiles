import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Building2, CheckCircle2, Clock, MapPin, Phone, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';

export const metadata = {
  title: 'About Selection Textiles | Bengaluru Est. 1979',
  description: 'Selection Textiles is a family-led Bengaluru textile house for authentic cloth, bespoke menswear, and corporate uniforms.',
};

const milestones = [
  ['1979', 'A trusted textile house', 'Nakode S. Krishnan founded Selection Textiles on B.V.K. Iyengar Road, with a clear promise of genuine fabrics, fair dealing, and personal service.'],
  ['2002', 'The next chapter', 'Nakode K. Subramani joined the business and broadened its offering from cloth retail into made-to-measure menswear and corporate uniforms.'],
  ['Today', 'A Bengaluru institution', 'The same family values now serve individual patrons, wedding parties, and organisations across Karnataka.'],
];

function FounderCard({ src, alt, name, role, copy }: { src: string; alt: string; name: string; role: string; copy: string }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-surface shadow-soft-lg">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-muted">
        <Image src={src} alt={alt} fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
      </div>
      <div className="border-t border-border p-6 sm:p-7">
        <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-accent">{role}</span>
        <h2 className="mt-2 font-serif text-3xl text-foreground">{name}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">{copy}</p>
      </div>
    </article>
  );
}

export default function AboutPage() {
  return (
    <div className="flex flex-col text-foreground">
      <section className="border-b border-border bg-surface-muted pt-28 sm:pt-36 pb-16 sm:pb-20">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Badge variant="accent" size="sm">Bengaluru · Since 1979</Badge>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Selection Textiles</p>
              <h1 className="mt-3 max-w-4xl font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">A heritage of honest cloth and considered tailoring.</h1>
            </div>
            <div className="border-l border-border pl-6 lg:col-span-4">
              <p className="text-sm leading-relaxed text-muted">For more than four decades, Selection Textiles has brought together authentic fabrics, personal guidance, and made-to-measure craftsmanship from its home on B.V.K. Iyengar Road.</p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/collections"><Button variant="primary" size="md">Explore collections <ArrowUpRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/contact"><Button variant="outline" size="md">Visit the showroom</Button></Link>
          </div>
        </Container>
      </section>

      <Section variant="default" className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">The people behind the name</span>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Two generations. One standard of care.</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">Selection Textiles is led by the same family that founded it—preserving the trust customers expect while evolving the service around modern wardrobes and business needs.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl gap-5 sm:grid-cols-2">
          <FounderCard src="/images/founders/founder_krishnan.jpg" alt="Mr. Nakode S. Krishnan, founder of Selection Textiles" name="Nakode S. Krishnan" role="Founder · 1979" copy="The founder whose knowledge of cloth and commitment to straightforward service gave Selection Textiles its enduring reputation." />
          <FounderCard src="/images/founders/successor_subramani.jpg" alt="Mr. Nakode K. Subramani, managing partner of Selection Textiles" name="Nakode K. Subramani" role="Managing Partner" copy="Leading the next chapter with a focus on bespoke menswear, modern client service, and dependable corporate uniform programs." />
        </div>
      </Section>

      <Section variant="muted" className="py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Our story</span><h2 className="mt-3 font-serif text-4xl leading-tight">From fabric counter to complete wardrobe partner.</h2></div>
          <div className="space-y-5 text-sm leading-relaxed text-muted lg:col-span-8 sm:text-base"><p>Selection Textiles began with a simple conviction: customers deserve genuine cloth, clear information, and a trusted person to guide their choices. That principle built loyal relationships with families across Bengaluru for suiting, shirting, wedding cloth, and traditional textiles.</p><p>As the business evolved, it expanded from the fabric counter into tailored garments and uniform supply. Every service still begins with the same foundation—understanding how a fabric will wear, fit, and perform for the person or team who depends on it.</p></div>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">{milestones.map(([year, title, description], index) => <article key={year} className="relative border-t-2 border-accent pt-5"><span className="font-serif text-4xl text-accent">{year}</span><span className="absolute right-0 top-5 text-[10px] font-semibold tracking-widest text-muted">0{index + 1}</span><h3 className="mt-4 font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{description}</p></article>)}</div>
      </Section>

      <Section variant="default" className="py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">What guides us</span><h2 className="mt-3 font-serif text-4xl leading-tight">A practical promise, kept every day.</h2></div>
          <div className="grid gap-4 lg:col-span-8 sm:grid-cols-3">
            {[['Authentic fabric', 'We curate recognised mill collections and help customers make informed selections.'], ['Measured with care', 'From first consultation to final fitting, every commission is guided by detail.'], ['Reliable delivery', 'We work to clear timelines for individual garments and institutional orders.']].map(([title, copy]) => <div key={title} className="rounded-2xl border border-border bg-surface p-6 shadow-soft"><CheckCircle2 className="h-5 w-5 text-accent" /><h3 className="mt-5 font-serif text-xl">{title}</h3><p className="mt-2 text-xs leading-relaxed text-muted">{copy}</p></div>)}
          </div>
        </div>
      </Section>

      <Section variant="forest" className="py-16 sm:py-24">
        <div className="mb-8 max-w-2xl"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Two specialisms</span><h2 className="mt-3 font-serif text-4xl leading-tight">Tailoring for people. Uniforms for teams.</h2></div>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/15 bg-white/5 p-8 sm:p-10"><Scissors className="h-7 w-7 text-sage" /><h3 className="mt-6 font-serif text-3xl">Bespoke menswear</h3><p className="mt-3 text-sm leading-relaxed text-ivory/75">Personal tailoring for suits, blazers, sherwanis, kurtas, and occasionwear—chosen with you and cut for you.</p><Link href="/collections" className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sage">Explore menswear <ArrowUpRight className="h-4 w-4" /></Link></article>
          <article className="rounded-3xl border border-white/15 bg-white/5 p-8 sm:p-10"><Building2 className="h-7 w-7 text-sage" /><h3 className="mt-6 font-serif text-3xl">Corporate uniforms</h3><p className="mt-3 text-sm leading-relaxed text-ivory/75">Uniform programs for offices, hospitality, healthcare, security, and industrial teams, with practical fabric and branding support.</p><Link href="/corporate" className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sage">Explore corporate <ArrowUpRight className="h-4 w-4" /></Link></article>
        </div>
      </Section>

      <Section variant="sand" className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-surface p-8 shadow-soft-lg sm:p-12"><Badge variant="accent" size="sm">Visit Selection Textiles</Badge><h2 className="mt-4 font-serif text-4xl">Meet us on B.V.K. Iyengar Road.</h2><div className="mt-7 grid gap-4 text-sm text-muted sm:grid-cols-3"><p className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-accent" />#16–17, D. Rangaiah Complex, Bengaluru – 560053</p><p className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-accent" />+91 86604 51300<br />080 2225 8982</p><p className="flex gap-3"><Clock className="h-4 w-4 shrink-0 text-accent" />Mon–Sat<br />10:30 AM–8:30 PM</p></div><Link href="/contact" className="mt-8 inline-block"><Button variant="primary" size="md">Book a consultation <ArrowUpRight className="ml-2 h-4 w-4" /></Button></Link></div>
      </Section>
    </div>
  );
}
