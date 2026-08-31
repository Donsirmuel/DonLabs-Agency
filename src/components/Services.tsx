import { Button } from "@/components/ui/button";
import { ArrowRight, Gauge, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "@/components/Section";
import { ASSETS } from "@/lib/assets";
import { motion } from "framer-motion";
import { StaggerItem, StaggerReveal, spring } from "@/components/motion";

const capabilities = [
  {
    title: "Business Websites",
    description:
      "Polished websites that explain your offer clearly, build trust quickly, and make it easy for visitors to take the next step.",
    points: [
      "Clean page layouts",
      "Fast loading pages",
      "Easy content updates",
    ],
  },
  {
    title: "E-commerce",
    description:
      "Online stores with clean product pages, smooth checkout, and simple order management behind the scenes.",
    points: ["Smooth checkout", "Fast product browsing", "Sales tracking", "Store integrations"],
  },
  {
    title: "Custom Web Apps",
    description:
      "Tailored web tools that reduce manual work, organise your operations, and give customers a smoother experience.",
    points: ["Dashboards", "Booking flows", "Customer portals", "Team workflows"],
  },
];

const specialistCards = [
  {
    title: "Speed & Clarity Review",
    description: "We review your current site and show what is slowing people down, visually and technically.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: "Search Foundation",
    description: "We set up the basics that help customers find, understand, and trust your business online.",
    icon: <Gauge className="h-5 w-5" />,
  },
  {
    title: "Safe Launch Setup",
    description: "Practical checks for forms, payments, access, backups, and the important details people rarely see.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <Section as="section" className="section-band-dark relative overflow-hidden border-y border-border px-4 py-16 sm:py-20" id="services" aria-labelledby="services-heading">
      <motion.div
        animate={{ opacity: [0.06, 0.18, 0.06] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent"
        aria-hidden
      />
      <motion.div
        animate={{ opacity: [0.04, 0.14, 0.04] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl">
        <header className="mb-14 max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            What We Offer
          </div>
          <h1 id="services-heading" className="mb-6 text-4xl font-black uppercase leading-[0.98] text-foreground sm:text-5xl md:text-6xl">
            Web Solutions for
            <span className="headline-accent block">Growing Businesses.</span>
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We help businesses turn their website into a clearer, faster, more useful part of their sales and operations.
          </p>
        </header>

        <StaggerReveal className="space-y-6">
          <StaggerItem>
          <motion.article whileHover={{ y: -4 }} transition={spring} className="overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/35">
            <div className="grid lg:grid-cols-2">
              <div className="p-8">
                <h2 className="mb-4 text-3xl font-semibold text-foreground">{capabilities[0].title}</h2>
                <p className="mb-6 text-muted-foreground">{capabilities[0].description}</p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  {capabilities[0].points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Button variant="hero" className="mt-8" onClick={() => navigate('/contact')}>
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="border-t border-border bg-background p-3 lg:border-l lg:border-t-0">
                <img
                  src={ASSETS.businessWebsite}
                  alt="Business website project preview"
                  className="h-full min-h-[300px] w-full rounded-xl object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.article>
          </StaggerItem>

          <StaggerItem>
          <motion.article whileHover={{ y: -4 }} transition={spring} className="overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/35">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 order-2 lg:order-1">
                <h2 className="mb-4 text-3xl font-semibold text-foreground">{capabilities[1].title}</h2>
                <p className="mb-6 text-muted-foreground">{capabilities[1].description}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {capabilities[1].points.map((point) => (
                    <div key={point} className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground/80">
                      {point}
                    </div>
                  ))}
                </div>
                <Button variant="hero" className="mt-8" onClick={() => navigate('/contact')}>
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="order-1 border-b border-border bg-background p-3 lg:order-2 lg:border-b-0 lg:border-l">
                <img
                  src={ASSETS.glitglam}
                  alt="Glitglam e-commerce website preview"
                  className="h-full min-h-[300px] w-full rounded-xl object-cover object-left"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.article>
          </StaggerItem>

          <StaggerItem>
          <motion.article whileHover={{ y: -4 }} transition={spring} className="rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/35">
            <h2 className="mb-4 text-3xl font-semibold text-foreground">{capabilities[2].title}</h2>
            <p className="mb-6 max-w-3xl text-muted-foreground">{capabilities[2].description}</p>
            <div className="mb-8 flex flex-wrap gap-3">
              {capabilities[2].points.map((point) => (
                <span key={point} className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/75">
                  {point}
                </span>
              ))}
            </div>
            <Button variant="hero" onClick={() => navigate('/contact')}>
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.article>
          </StaggerItem>
        </StaggerReveal>

        <section className="mt-14 grid gap-5 md:grid-cols-3">
          {specialistCards.map((card) => (
            <motion.article key={card.title} whileHover={{ y: -5 }} transition={spring} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/35">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                {card.icon}
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-foreground">{card.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
            </motion.article>
          ))}
        </section>

        <section className="relative mt-16 overflow-hidden rounded-2xl border border-border bg-card px-6 py-12 text-center sm:px-10">
          <div className="animate-soft-pulse pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" aria-hidden />
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Let&apos;s Shape the Right Build</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Our team is currently accepting new projects. Let&apos;s discuss your goals and map the best way forward.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button variant="hero" size="lg" onClick={() => navigate('/contact')}>
              Book a Strategy Session
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border bg-background text-foreground hover:bg-foreground/5"
              onClick={() => navigate('/')}
            >
              View Our Process
            </Button>
          </div>
        </section>
      </div>
    </Section>
  );
};

export default Services;
