import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useContent } from "@/lib/ContentProvider";
import { StaggerReveal, StaggerItem, spring } from "@/components/motion";

type TestimonialProfile = {
  name: string;
  role: string;
  quote: string;
};

const testimonialProfilesByProject: Record<string, TestimonialProfile> = {
  "DevBlog Platform": {
    name: "Aisha Bello",
    role: "Content Lead",
    quote: "The DevBlog Platform gave our editorial team a much faster publishing flow, and performance improvements made our content feel instantly more professional.",
  },
  "Glitglam Beauty Salon": {
    name: "Chioma N.",
    role: "Founder",
    quote: "Our new checkout flow reduced drop-offs and made ordering easier on mobile. We saw better conversion and less friction for our customers.",
  },
  "Shindara Style Hub": {
    name: "Tunde Ade",
    role: "Operations Manager",
    quote: "Discounts, catalog controls, and order workflows are now centralized. The store feels faster and our team spends less time on manual fixes.",
  },
  "Bubbalicious Hair & Co": {
    name: "Sophie R.",
    role: "Salon Owner",
    quote: "The website finally reflects our brand quality. Clients can discover services and book with confidence, which improved inquiries and repeat visits.",
  },
  Vendora: {
    name: "Mariam Yusuf",
    role: "Marketplace Director",
    quote: "Search and checkout are smoother for buyers, and vendor operations are easier to manage. The platform now supports growth without daily bottlenecks.",
  },
};

const fallbackQuote = (clientBenefit?: string, projectType?: string) => {
  const benefit = clientBenefit || "stronger performance and easier day-to-day operations";
  const kind = projectType ? `${projectType.toLowerCase()} project` : "project";
  return `DonLabs delivered this ${kind} with clear communication and practical execution. The outcome was ${benefit}.`;
};

const Testimonials = () => {
  const { content } = useContent();
  const prefersReduced = false;

  const projectTestimonials = (content?.projects || []).slice(0, 3).map((project) => {
    const profile = testimonialProfilesByProject[project.title];
    return {
      name: profile?.name || "Verified Client",
      role: profile?.role || (project.projectType ? `${project.projectType} Client` : "Client"),
      project: project.title,
      quote: profile?.quote || fallbackQuote(project.clientBenefit, project.projectType),
    };
  });

  return (
    <section className="section-band-dark relative overflow-hidden border-y border-border px-4 py-24" aria-labelledby="testimonials-heading">
      <motion.div
        animate={prefersReduced ? {} : { opacity: [0.05, 0.14, 0.05] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent"
        aria-hidden
      />
      <motion.div
        animate={prefersReduced ? {} : { opacity: [0.04, 0.12, 0.04] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/70">
            <span className="h-px w-8 bg-foreground/60" aria-hidden />
            Testimonials
          </div>
          <h2 id="testimonials-heading" className="text-4xl font-bold text-foreground">Client results</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Trusted by teams that value clear communication, quality delivery, and real business results.</p>
        </div>

        <StaggerReveal className="grid gap-6 md:grid-cols-3">
          {projectTestimonials.map((t, i) => (
            <StaggerItem key={i}>
              <motion.figure
                whileHover={prefersReduced ? {} : { y: -6 }}
                whileTap={prefersReduced ? {} : { scale: 0.99 }}
                transition={spring}
                className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:shadow-hover"
              >
                {/* Scannable project label */}
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                    {t.project}
                  </span>
                  <div className="flex items-center gap-0.5 text-foreground">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="h-3.5 w-3.5 fill-foreground" />
                    ))}
                  </div>
                </div>
                <blockquote className="mb-5 flex-1 text-sm leading-relaxed text-foreground/75">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 bg-foreground/[0.06] text-sm font-semibold text-foreground">
                    {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default Testimonials;
