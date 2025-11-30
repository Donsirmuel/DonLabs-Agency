import { Briefcase, ShoppingCart, Globe, Zap } from 'lucide-react';
import Section from '@/components/Section';

const items = [
  { title: 'Business Websites', desc: 'Fast, responsive sites that help customers trust your brand.', icon: <Globe className="h-6 w-6" /> },
  { title: 'E‑commerce', desc: 'Stores that convert with smooth checkout and admin tools.', icon: <ShoppingCart className="h-6 w-6" /> },
  { title: 'Custom Web Apps', desc: 'Dashboards, booking systems and automation to speed operations.', icon: <Briefcase className="h-6 w-6" /> },
  { title: 'Optimization', desc: 'Performance, SEO and reliability improvements that scale.', icon: <Zap className="h-6 w-6" /> }
];

const WhatWeDo = () => {
  return (
    <Section as="section" className="py-24 px-4 bg-gradient-to-b from-background to-accent/20" aria-labelledby="what-we-do">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Services
          </div>
          <h2 id="what-we-do" className="text-4xl md:text-5xl font-bold mb-4">What We Build</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Practical web solutions that drive revenue and streamline operations</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} className="group p-8 bg-card border-2 border-border rounded-2xl text-center transition-all duration-300 hover:shadow-hover hover:-translate-y-2 hover:border-primary/50">
              <div className="mx-auto mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:scale-110 transition-transform duration-300">{it.icon}</div>
              <h3 className="font-bold text-lg mb-3">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhatWeDo;
