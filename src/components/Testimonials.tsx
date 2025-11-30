import { Quote } from "lucide-react";
import Section from '@/components/Section';

const testimonials = [
  {
    name: "Aisha Bello",
    role: "Founder, GlitGlam Ltd",
    project: "Glitglam Beauty Salon",
    quote: "DonLabs rebuilt our Glitglam online store and improved checkout flows — conversions rose 35% within two months. Clear communication and measurable results."
  },
  {
    name: "Chukwu Emeka",
    role: "Head of Operations, Shindara Fashion",
    project: "Shindara Style Hub",
    quote: "The Shindara project automated order management and improved reliability. We reduced manual processing by 70% and customer complaints dropped significantly."
  },
  {
    name: "Ngozi Okonkwo",
    role: "Product Lead, MediaWave",
    project: "DevBlog Platform",
    quote: "DonLabs delivered a clean, SEO-friendly CMS for our editorial team. Engagement and time-on-page improved, and our publishing workflow is much faster."
  }
];

const Testimonials = () => {
  return (
    <Section as="section" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What clients say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-2">Trusted by businesses across Africa and remote clients — measurable results and long-term partnerships.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure key={i} className="p-6 bg-card border border-border rounded-lg">
              <blockquote className="text-sm text-muted-foreground mb-4">“{t.quote}”</blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">{t.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}{t.project ? ` — ${t.project}` : ''}</div>
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
