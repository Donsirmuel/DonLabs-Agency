import SEO from "@/components/SEO";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ASSETS } from "@/lib/assets";
import { Activity, CloudCog, Code2, CreditCard, Server, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { StaggerItem, StaggerReveal, spring } from "@/components/motion";

const outcomes = [
  {
    value: "35%",
    label: "Conversion-Focused Builds",
    description: "We shape pages around clearer decisions, smoother flows, and fewer points of confusion.",
    accent: "border-primary",
  },
  {
    value: "99.9%",
    label: "Reliable Foundations",
    description: "We build with stability in mind so your site can keep working when people depend on it.",
    accent: "border-foreground/35",
  },
  {
    value: "2.4s",
    label: "Fast User Experience",
    description: "We pay attention to speed because trust drops quickly when a page feels slow.",
    accent: "border-primary/60",
  },
];

const expertiseCards = [
  {
    title: "Business Logic",
    description: "The forms, accounts, payments, dashboards, and rules that make your website useful.",
    icon: <Server className="h-5 w-5" />,
  },
  {
    title: "Payments & Stores",
    description: "Product pages, checkout flows, order handling, and payment setup for online selling.",
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    title: "Interface Design",
    description: "Clean, responsive pages that feel premium and make the next step obvious.",
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: "Launch Support",
    description: "Deployment, testing, monitoring, and practical handoff so the site is not abandoned after launch.",
    icon: <CloudCog className="h-5 w-5" />,
  },
];

const stackChips = ["Websites", "Online stores", "Dashboards", "Payments", "Content editing", "Support"];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Scope",
    description: "We map your business goals and define clear technical milestones.",
  },
  {
    number: "02",
    title: "Design & Build",
    description: "Iterative delivery where UI and code progress in focused timely sprints.",
  },
  {
    number: "03",
    title: "Testing",
    description: "Rigorous QA and security checks before release.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "Smooth launch plus ongoing support and improvements.",
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO
        title="About DonLabs - Web Development Agency"
        description="Learn about DonLabs, our process, and our technical capabilities. We build fast, reliable web products with Django, React, and modern engineering practices."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          mainEntity: {
            "@type": "Organization",
            name: "DonLabs",
            description: "Web development agency focused on high-performance digital products",
            knowsAbout: ["Django", "Python", "React", "PostgreSQL", "Web Performance", "E-commerce"],
          },
        }}
      />

      <Section as="section" className="section-band-dark relative overflow-hidden border-b border-border px-4 py-16 sm:py-20" aria-labelledby="about-heading">
        <motion.div
          animate={{ opacity: [0.06, 0.18, 0.06] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent"
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              <Activity className="h-3.5 w-3.5" />
              Built for Growth
            </div>
            <h1 id="about-heading" className="mb-6 text-4xl font-black uppercase leading-[0.98] text-foreground sm:text-5xl md:text-6xl">
              About <span className="headline-accent">DonLabs</span>
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We build the kind of websites and web systems businesses can actually run on: clear to use, fast to load, easy to update, and strong enough to support sales, enquiries, and daily operations.
            </p>
          </div>

          <motion.div whileHover={{ y: -5 }} transition={spring} className="mx-auto w-full max-w-[260px] rounded-2xl border border-border bg-card p-4">
            <img src={ASSETS.logoFull} alt="DonLabs logo" className="h-40 w-full rounded-xl object-cover" loading="lazy" />
          </motion.div>
        </div>
      </Section>

      <Section as="section" className="section-band-card border-b border-border px-4 py-16 sm:py-20" aria-labelledby="outcomes-heading">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 id="outcomes-heading" className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">Measurable Outcomes</h2>
            <p className="max-w-3xl text-muted-foreground">Good design should make the business easier to understand and easier to work with.</p>
          </div>

          <StaggerReveal className="grid gap-5 md:grid-cols-3">
            {outcomes.map((item) => (
              <StaggerItem key={item.label}>
                <motion.article whileHover={{ y: -5 }} transition={spring} className={`rounded-xl border border-border border-l-2 bg-background p-6 transition-colors hover:border-primary/35 ${item.accent}`}>
                  <p className="mb-2 text-4xl font-bold text-foreground">{item.value}</p>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{item.label}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </Section>

      <Section as="section" className="section-band-dark border-b border-border px-4 py-16 sm:py-20" aria-labelledby="expertise-heading">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 id="expertise-heading" className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">What We Handle</h2>
            <p className="mb-6 text-muted-foreground">
              We keep the experience simple for your customers, while taking care of the technical parts in the background.
            </p>
            <div className="flex flex-wrap gap-2">
              {stackChips.map((chip) => (
                <span key={chip} className="rounded-md border border-border bg-card px-3 py-1 text-xs font-medium text-foreground/75">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <StaggerReveal className="grid gap-4 md:grid-cols-2">
            {expertiseCards.map((card) => (
              <StaggerItem key={card.title}>
                <motion.article whileHover={{ y: -5 }} transition={spring} className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/35">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                    {card.icon}
                  </div>
                  <h3 className="mb-2 text-2xl font-semibold text-foreground">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </Section>

      <Section as="section" className="section-band-dark border-b border-border px-4 py-16 sm:py-20" aria-labelledby="about-process-heading">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 id="about-process-heading" className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">How We Work</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">A steady process that keeps you informed without dragging you into unnecessary complexity.</p>
          </div>

          <StaggerReveal className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <StaggerItem key={step.number}>
                <motion.article whileHover={{ y: -5 }} transition={spring} className="relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/35">
                  <p className="absolute right-4 top-3 text-5xl font-bold leading-none text-primary/20">{step.number}</p>
                  <h3 className="mb-2 mt-7 text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </Section>

      <Section as="section" className="section-band-dark px-4 py-16 sm:py-20" aria-labelledby="about-cta-heading">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border bg-card px-6 py-12 sm:px-10">
          <div className="animate-soft-pulse pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" aria-hidden />
          <h2 id="about-cta-heading" className="mb-4 max-w-3xl text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Ready to launch your next <span className="headline-accent">breakthrough?</span>
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button variant="hero" size="lg" onClick={() => navigate('/contact')}>
              Let&apos;s Work Together
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border bg-background text-foreground hover:bg-foreground/5"
              onClick={() => navigate('/services')}
            >
              View Services
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border bg-background text-foreground hover:bg-foreground/5"
              onClick={() => navigate('/projects')}
            >
              See Projects
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Built for security, speed, and long-term reliability.
          </div>
        </div>
      </Section>
    </main>
  );
};

export default About;
