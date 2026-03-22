import SEO from "@/components/SEO";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ASSETS } from "@/lib/assets";
import { Activity, CloudCog, Code2, CreditCard, Server, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const outcomes = [
  {
    value: "35%",
    label: "Average Conversion Increase",
    description: "Achieved through checkout optimization and reduced payment friction.",
    accent: "border-cyan-300",
  },
  {
    value: "99.9%",
    label: "API Stability",
    description: "Reliable backend setup that stays stable during heavy traffic.",
    accent: "border-amber-300",
  },
  {
    value: "2.4s",
    label: "Average Load Time",
    description: "Performance gains across frontend delivery, assets, and server responses.",
    accent: "border-indigo-300",
  },
];

const expertiseCards = [
  {
    title: "Backend Excellence",
    description: "Robust Django and Python services with PostgreSQL at the core.",
    icon: <Server className="h-5 w-5" />,
  },
  {
    title: "Payments & Commerce",
    description: "Secure integrations for Paystack, Flutterwave, and Stripe checkout flows.",
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    title: "Frontend Precision",
    description: "Fast, responsive React interfaces designed for clarity and conversion.",
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: "DevOps & Scale",
    description: "Reliable deployment and monitoring to keep releases smooth and consistent.",
    icon: <CloudCog className="h-5 w-5" />,
  },
];

const stackChips = ["Django", "React", "PostgreSQL", "Docker", "CI/CD", "APIs"];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Scope",
    description: "We map your business goals and define clear technical milestones.",
  },
  {
    number: "02",
    title: "Design & Build",
    description: "Iterative delivery where UI and code progress in focused weekly sprints.",
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
    <main className="min-h-screen bg-slate-950 pt-20">
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

      <Section as="section" className="border-b border-slate-800 bg-slate-950 px-4 py-16 sm:py-20" aria-labelledby="about-heading">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
              <Activity className="h-3.5 w-3.5" />
              Built for Growth
            </div>
            <h1 id="about-heading" className="mb-6 text-5xl font-extrabold leading-[1.02] text-slate-100 md:text-6xl">
              About <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">DonLabs</span>
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
              We build web products that help businesses sell more and operate better. Based in Africa and available for remote partnerships, we deliver reliable digital systems with Django backends and React frontends.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[260px] rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <img src={ASSETS.logoFull} alt="DonLabs logo" className="h-40 w-full rounded-xl object-cover" loading="lazy" />
          </div>
        </div>
      </Section>

      <Section as="section" className="border-b border-slate-800 bg-slate-900 px-4 py-16 sm:py-20" aria-labelledby="outcomes-heading">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 id="outcomes-heading" className="mb-3 text-4xl font-bold text-slate-100">Measurable Outcomes</h2>
            <p className="max-w-3xl text-slate-300">We focus on metrics that impact your growth, not vanity numbers.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {outcomes.map((item) => (
              <article key={item.label} className={`rounded-xl border border-slate-700 bg-slate-950/60 p-6 border-l-2 ${item.accent}`}>
                <p className="mb-2 text-4xl font-bold text-slate-100">{item.value}</p>
                <h3 className="mb-2 text-lg font-semibold text-slate-100">{item.label}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section as="section" className="border-b border-slate-800 bg-slate-950 px-4 py-16 sm:py-20" aria-labelledby="expertise-heading">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 id="expertise-heading" className="mb-4 text-4xl font-bold text-slate-100">Core Expertise</h2>
            <p className="mb-6 text-slate-300">
              We choose tools that are secure, reliable, and easy to maintain over time.
            </p>
            <div className="flex flex-wrap gap-2">
              {stackChips.map((chip) => (
                <span key={chip} className="rounded-md border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-200">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {expertiseCards.map((card) => (
              <article key={card.title} className="rounded-xl border border-slate-700 bg-gradient-to-b from-slate-900 to-slate-950 p-5">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-cyan-300">
                  {card.icon}
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-slate-100">{card.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section as="section" className="border-b border-slate-800 bg-slate-950 px-4 py-16 sm:py-20" aria-labelledby="about-process-heading">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 id="about-process-heading" className="mb-3 text-4xl font-bold text-slate-100">How We Work</h2>
            <p className="mx-auto max-w-2xl text-slate-300">A clear delivery process that keeps your project moving from idea to launch.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.number} className="relative rounded-xl border border-slate-700 bg-slate-900/70 p-5">
                <p className="absolute right-4 top-3 text-5xl font-bold leading-none text-cyan-300/25">{step.number}</p>
                <h3 className="mb-2 mt-7 text-xl font-semibold text-slate-100">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section as="section" className="bg-slate-950 px-4 py-16 sm:py-20" aria-labelledby="about-cta-heading">
        <div className="mx-auto max-w-6xl rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-slate-950 via-slate-950 to-cyan-950/25 px-6 py-12 sm:px-10">
          <h2 id="about-cta-heading" className="mb-4 max-w-3xl text-5xl font-bold leading-tight text-slate-100">
            Ready to launch your next <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">breakthrough?</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="hero" size="lg" onClick={() => navigate('/contact')}>
              Let&apos;s Work Together
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 bg-slate-900/70 text-slate-100 hover:bg-slate-800"
              onClick={() => navigate('/services')}
            >
              View Services
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 bg-slate-900/70 text-slate-100 hover:bg-slate-800"
              onClick={() => navigate('/projects')}
            >
              See Projects
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-slate-300">
            <ShieldCheck className="h-4 w-4 text-cyan-300" />
            Built for security, speed, and long-term reliability.
          </div>
        </div>
      </Section>
    </main>
  );
};

export default About;
