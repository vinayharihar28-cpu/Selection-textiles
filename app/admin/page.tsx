import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lock, Users, Layers, Scissors, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Staff Portal | Selection Textiles Bengaluru',
  description: 'Selection Textiles internal administration & commission management portal.',
};

export default function AdminPage() {
  const modules = [
    {
      icon: Calendar,
      title: 'Consultations & Salon Schedule',
      status: 'Batch 4 Integration',
      desc: 'Client booking pipeline, fitting appointments at Bengaluru flagship and private residence visits.',
    },
    {
      icon: Users,
      title: 'Anatomical Measurement Vault',
      status: 'Batch 3 Integration',
      desc: 'Client posture analysis, 30+ precision anatomical coordinates, and master cutter notes.',
    },
    {
      icon: Scissors,
      title: 'Workshop Commission Tracker',
      status: 'Batch 4 Integration',
      desc: 'Production lifecycle from kraft paper draft and horsehair canvassing to final baste fitting.',
    },
    {
      icon: Layers,
      title: 'Digital Showroom & 3D Assets',
      status: 'Batch 2 Integration',
      desc: 'GLB model repository, mill fabric swatch maps, and dynamic 360-degree scene configurations.',
    },
  ];

  return (
    <div className="flex flex-col">
      <Section
        variant="muted"
        eyebrow="Internal Atelier Console"
        title="Staff & Atelier Portal."
        description="Restricted management environment for Selection Textiles master tailors, fitting concierges, and enterprise uniform leads."
      >
        <div className="flex items-center gap-2">
          <Badge variant="accent" size="sm">
            <Lock className="w-3 h-3 mr-1" />
            <span>Authorized Personnel Only</span>
          </Badge>
        </div>
      </Section>

      <Section variant="default">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                className="p-8 rounded-2xl border border-border bg-surface shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-muted border border-border flex items-center justify-center text-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant="subtle" size="sm">
                      {m.status}
                    </Badge>
                  </div>
                  <h3 className="font-serif text-2xl text-foreground font-normal mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    {m.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted font-sans">
                  <span>Authentication via Auth.js</span>
                  <span className="text-accent">Scheduled in Roadmap</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/">
            <Button variant="outline" size="sm">
              Return to Public Showroom
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
