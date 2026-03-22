import { Braces, Gauge, LayoutTemplate, Orbit } from 'lucide-react';
import Section from '@/components/Section';

const items = [
  {
    title: 'Web Development',
    desc: 'Business websites and web apps built to look great, load fast, and support real growth.',
    bullets: ['Online Stores', 'Custom Business Tools'],
    icon: <LayoutTemplate className="h-5 w-5" />
  },
  {
    title: 'UI/UX Design',
    desc: 'Clear, easy-to-use interfaces that guide visitors from first click to final action.',
    bullets: ['Interactive Prototypes', 'Consistent Design System'],
    icon: <Orbit className="h-5 w-5" />
  },
  {
    title: 'Performance Optimization',
    desc: 'Speed and search improvements that help your site rank better and feel faster.',
    bullets: ['SEO Health Checks', 'Faster Load Times'],
    icon: <Gauge className="h-5 w-5" />
  },
  {
    title: 'Business Systems',
    desc: 'Custom systems that organize your data and simplify day-to-day operations.',
    bullets: ['Reliable Integrations', 'Clear Admin Dashboards'],
    icon: <Braces className="h-5 w-5" />
  }
];

const WhatWeDo = () => {
  return (
    <Section as="section" className="relative overflow-hidden border-y border-slate-800 bg-slate-950 px-4 py-24" aria-labelledby="what-we-do">
      <div className="pointer-events-none absolute right-10 top-6 hidden text-[120px] font-black uppercase tracking-tight text-white/5 lg:block">
        Services
      </div>
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <div className="mb-4 inline-block rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-1.5 text-sm font-semibold text-cyan-200">
            What We Build
          </div>
          <h2 id="what-we-do" className="mb-3 text-4xl font-bold text-slate-100 md:text-5xl">What We Build</h2>
          <p className="max-w-3xl text-lg text-slate-300">Practical digital solutions for brands that want results, not generic templates.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((it, i) => (
            <div key={i} className="group rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-400/10 text-cyan-300">
                {it.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-100">{it.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-300">{it.desc}</p>
              <ul className="space-y-2 text-sm text-slate-200">
                {it.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhatWeDo;
