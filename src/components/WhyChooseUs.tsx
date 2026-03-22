import Section from '@/components/Section';
import { ASSETS } from '@/lib/assets';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Built to Last',
      desc: 'We do not ship fragile builds. Every line of code is handled for resilience, security, and long-term maintainability.'
    },
    {
      title: 'Data-Driven Creativity',
      desc: 'Design is rooted in measurable outcomes. Every aesthetic decision is connected to business goals and conversion psychology.'
    },
    {
      title: 'Transparent Partnership',
      desc: 'No black-box process. You get clear communication, practical trade-offs, and steady sprint updates from discovery to launch.'
    }
  ];

  return (
    <Section as="section" className="border-y border-slate-800 bg-slate-900 px-4 py-24" aria-labelledby="why-choose">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 p-3">
            <img
              src={ASSETS.dataVisualization}
              alt="Data visualization dashboard preview"
              className="h-44 w-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl border border-cyan-300/20 bg-cyan-500/10 p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-cyan-200">Average Conversion Lift</p>
            <p className="mt-2 text-4xl font-bold text-cyan-300">2.4x</p>
            <p className="mt-1 text-xs text-slate-300">Measured on optimization-focused engagements.</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 p-3">
            <img
              src={ASSETS.codeScreenshot}
              alt="Code editor screenshot"
              className="h-28 w-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <h2 id="why-choose" className="mb-4 text-4xl font-bold text-slate-100 md:text-5xl">Why Choose DonLabs</h2>
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div key={reason.title} className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                <div className="mb-2 flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/10 text-xs font-semibold text-cyan-200">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-100">{reason.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;
