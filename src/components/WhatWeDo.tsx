import { Briefcase, ShoppingCart, Globe, Zap } from 'lucide-react';

const items = [
  { title: 'Business Websites', desc: 'Fast, responsive sites that help customers trust your brand.', icon: <Globe className="h-6 w-6" /> },
  { title: 'E‑commerce', desc: 'Stores that convert with smooth checkout and admin tools.', icon: <ShoppingCart className="h-6 w-6" /> },
  { title: 'Custom Web Apps', desc: 'Dashboards, booking systems and automation to speed operations.', icon: <Briefcase className="h-6 w-6" /> },
  { title: 'Optimization', desc: 'Performance, SEO and reliability improvements that scale.', icon: <Zap className="h-6 w-6" /> }
];

const WhatWeDo = () => {
  return (
    <section className="py-16 px-4" aria-labelledby="what-we-do">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 id="what-we-do" className="text-3xl font-bold">What I do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-2">I build practical web products that help you sell more and run better.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} className="p-6 bg-card border border-border rounded-lg text-center">
              <div className="mx-auto mb-3 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">{it.icon}</div>
              <h3 className="font-semibold mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
