import { Star } from "lucide-react";
import Section from '@/components/Section';
import { useContent } from '@/lib/ContentProvider';

type TestimonialProfile = {
  name: string;
  role: string;
  quote: string;
};

const testimonialProfilesByProject: Record<string, TestimonialProfile> = {
  "DevBlog Platform": {
    name: "Aisha Bello",
    role: "Content Lead",
    quote: "The DevBlog Platform gave our editorial team a much faster publishing flow, and performance improvements made our content feel instantly more professional."
  },
  "Glitglam Beauty Salon": {
    name: "Chioma N.",
    role: "Founder",
    quote: "Our new checkout flow reduced drop-offs and made ordering easier on mobile. We saw better conversion and less friction for our customers."
  },
  "Shindara Style Hub": {
    name: "Tunde Ade",
    role: "Operations Manager",
    quote: "Discounts, catalog controls, and order workflows are now centralized. The store feels faster and our team spends less time on manual fixes."
  },
  "Bubbalicious Hair & Co": {
    name: "Sophie R.",
    role: "Salon Owner",
    quote: "The website finally reflects our brand quality. Clients can discover services and book with confidence, which improved inquiries and repeat visits."
  },
  "Vendora": {
    name: "Mariam Yusuf",
    role: "Marketplace Director",
    quote: "Search and checkout are smoother for buyers, and vendor operations are easier to manage. The platform now supports growth without daily bottlenecks."
  }
};

const fallbackQuote = (clientBenefit?: string, projectType?: string) => {
  const benefit = clientBenefit || "stronger performance and easier day-to-day operations";
  const kind = projectType ? `${projectType.toLowerCase()} project` : "project";

  return `DonLabs delivered this ${kind} with clear communication and practical execution. The outcome was ${benefit}.`;
};

const Testimonials = () => {
  const { content } = useContent();

  const projectTestimonials = (content?.projects || []).slice(0, 3).map((project) => {
    const profile = testimonialProfilesByProject[project.title];

    return {
      name: profile?.name || "Verified Client",
      role: profile?.role || (project.projectType ? `${project.projectType} Client` : "Client"),
      project: project.title,
      quote: profile?.quote || fallbackQuote(project.clientBenefit, project.projectType)
    };
  });

  return (
    <Section as="section" className="border-y border-slate-800 bg-slate-900 px-4 py-24" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 id="testimonials-heading" className="text-4xl font-bold text-slate-100">What clients say</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">Trusted by teams that value clear communication, quality delivery, and real business results.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projectTestimonials.map((t, i) => (
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
