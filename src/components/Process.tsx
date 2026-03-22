import { Code2, Compass, Rocket, Workflow } from "lucide-react";
import Section from '@/components/Section';

const steps = [
  { title: 'Discovery', icon: <Compass className="h-5 w-5" />, desc: 'We learn your goals, audience, and what success looks like.' },
  { title: 'Planning', icon: <Workflow className="h-5 w-5" />, desc: 'We map the pages, features, and timeline before coding starts.' },
  { title: 'Build', icon: <Code2 className="h-5 w-5" />, desc: 'We design and develop your product in clear milestone phases.' },
  { title: 'Launch', icon: <Rocket className="h-5 w-5" />, desc: 'We test, launch, and support improvements after release.' }
];

const Process = () => {
  return (
    <Section as="section" id="process-section" className="border-y border-slate-800 bg-slate-950 px-4 py-24" aria-labelledby="process-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-1.5 text-sm font-semibold text-cyan-200">
            Our Process
          </div>
          <h2 id="process-heading" className="mb-3 text-4xl font-bold text-slate-100 md:text-5xl">Our Process</h2>
          <p className="mx-auto max-w-2xl text-slate-300">A clear step-by-step process from first call to launch.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <article key={s.title} className="rounded-xl border border-slate-700 bg-gradient-to-b from-slate-900 to-slate-950 p-5 transition-all duration-300 hover:border-cyan-300/40">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200/80">Step {i + 1}</p>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-cyan-300">
                  {s.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-100">{s.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{s.desc}</p>
              </article>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Process;
