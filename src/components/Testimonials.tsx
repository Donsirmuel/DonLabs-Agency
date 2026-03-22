import { Star } from "lucide-react";
import Section from '@/components/Section';

const testimonials = [
  {
    name: "Marcus Chen",
    role: "CTO, NexSpan",
    project: "Platform Rebuild",
    quote: "DonLabs transformed our outdated portal into a high-speed engine. Conversion rate jumped by over 40% in the first month."
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, Bloom",
    project: "E-commerce Migration",
    quote: "The level of technical depth they brought to the build was refreshing. They did not just build what we asked, they built what we needed."
  },
  {
    name: "David Rossi",
    role: "Director, Studio V",
    project: "Editorial Platform",
    quote: "DonLabs gave us a fast, polished platform that finally matches our brand. The experience is smoother for customers and easier for our team to manage."
  }
];

const Testimonials = () => {
  return (
    <Section as="section" className="border-y border-slate-800 bg-slate-900 px-4 py-24" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 id="testimonials-heading" className="text-4xl font-bold text-slate-100">What clients say</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">Trusted by teams that value clear communication, quality delivery, and real business results.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-xl border border-slate-700 bg-slate-950/70 p-6">
              <div className="mb-4 flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-amber-300" />
                ))}
              </div>
              <blockquote className="mb-5 text-sm leading-relaxed text-slate-300">“{t.quote}”</blockquote>
              <figcaption className="flex items-center gap-3 border-t border-slate-800 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                  {t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <div className="font-semibold text-slate-100">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}{t.project ? ` • ${t.project}` : ''}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
