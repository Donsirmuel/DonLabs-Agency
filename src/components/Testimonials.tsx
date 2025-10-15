import { Quote } from "lucide-react";
import Section from '@/components/Section';

const testimonials = [
  {
    name: "Aisha Bello",
    role: "Founder, RetailCo",
    quote: "Samuel built our e-commerce site on time and increased conversions by 35%. Clear communication and strong delivery."
  },
  {
    name: "Chukwu Emeka",
    role: "Operations Manager, AgroFresh",
    quote: "The web app Samuel delivered reduced manual work and improved reporting. Support has been excellent."
  },
  {
    name: "Ngozi Okonkwo",
    role: "CEO, FinServe",
    quote: "Professional, fast, and pragmatic. Our customers love the new site and engagement is up across channels."
  }
];

const Testimonials = () => {
  return (
    <Section as="section" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What clients say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-2">Trusted by businesses in Nigeria - results and relationships that last.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure key={i} className="p-6 bg-card border border-border rounded-lg">
              <blockquote className="text-sm text-muted-foreground mb-4">“{t.quote}”</blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">{t.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
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
