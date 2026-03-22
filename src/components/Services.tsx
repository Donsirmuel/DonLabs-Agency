import { Button } from "@/components/ui/button";
import { ArrowRight, Gauge, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "@/components/Section";
import { ASSETS } from "@/lib/assets";

const capabilities = [
  {
    title: "Business Websites",
    description:
      "Professional websites built to help people trust your brand quickly and contact you with confidence.",
    points: [
      "Clean page layouts",
      "Fast loading pages",
      "Easy content updates",
    ],
  },
  {
    title: "E-commerce",
    description:
      "Online stores designed to sell more with clear product pages, smooth checkout, and reliable order flow.",
    points: ["Smooth checkout", "Fast product browsing", "Sales tracking", "Store integrations"],
  },
  {
    title: "Custom Web Apps",
    description:
      "Custom tools for your team and customers, built to simplify daily work and support growth over time.",
    points: ["Modern frontend", "Reliable backend", "Cloud hosting", "Live updates"],
  },
];

const specialistCards = [
  {
    title: "Speed Review",
    description: "We review your current site and show exactly where speed can be improved.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: "SEO Setup",
    description: "We set up search visibility basics so customers can find your business online.",
    icon: <Gauge className="h-5 w-5" />,
  },
  {
    title: "Hardened Security",
    description: "Practical security setup to protect your data and keep customer trust.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <Section as="section" className="border-y border-slate-800 bg-slate-950 px-4 py-16 sm:py-20" id="services" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl">
        <header className="mb-14 max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
            <Sparkles className="h-3.5 w-3.5" />
            What We Offer
          </div>
          <h1 id="services-heading" className="mb-6 text-5xl font-extrabold leading-[1.04] text-slate-100 md:text-6xl">
            Web Solutions for
            <span className="block bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">Growing Businesses.</span>
          </h1>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            From business websites to custom web applications, we build practical digital products that are fast, scalable, and aligned with your goals.
          </p>
        </header>

        <div className="space-y-6">
          <article className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
            <div className="grid lg:grid-cols-2">
              <div className="p-8">
                <h2 className="mb-4 text-3xl font-semibold text-slate-100">{capabilities[0].title}</h2>
                <p className="mb-6 text-slate-300">{capabilities[0].description}</p>
                <ul className="space-y-3 text-sm text-slate-200">
                  {capabilities[0].points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-300" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Button variant="hero" className="mt-8" onClick={() => navigate('/contact')}>
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="border-t border-slate-700 p-3 lg:border-l lg:border-t-0 bg-gradient-to-br from-slate-900 to-slate-950">
                <img
                  src={ASSETS.businessWebsite}
                  alt="Business website project preview"
                  className="h-full min-h-[300px] w-full rounded-xl object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 order-2 lg:order-1">
                <h2 className="mb-4 text-3xl font-semibold text-slate-100">{capabilities[1].title}</h2>
                <p className="mb-6 text-slate-300">{capabilities[1].description}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {capabilities[1].points.map((point) => (
                    <div key={point} className="rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-200">
                      {point}
                    </div>
                  ))}
                </div>
                <Button variant="hero" className="mt-8" onClick={() => navigate('/contact')}>
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="order-1 lg:order-2 border-b border-slate-700 p-3 lg:border-b-0 lg:border-l bg-gradient-to-br from-slate-900 to-slate-950">
                <img
                  src={ASSETS.glitglam}
                  alt="Glitglam e-commerce website preview"
                  className="h-full min-h-[300px] w-full rounded-xl object-cover object-left"
                  loading="lazy"
                />
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-700 bg-slate-900 p-8">
            <h2 className="mb-4 text-3xl font-semibold text-slate-100">{capabilities[2].title}</h2>
            <p className="mb-6 max-w-3xl text-slate-300">{capabilities[2].description}</p>
            <div className="mb-8 flex flex-wrap gap-3">
              {capabilities[2].points.map((point) => (
                <span key={point} className="rounded-md border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-200">
                  {point}
                </span>
              ))}
            </div>
            <Button variant="hero" onClick={() => navigate('/contact')}>
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Button>
          </article>
        </div>

        <section className="mt-14 grid gap-5 md:grid-cols-3">
          {specialistCards.map((card) => (
            <article key={card.title} className="rounded-xl border border-slate-700 bg-slate-900/80 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-cyan-300">
                {card.icon}
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-slate-100">{card.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{card.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-16 rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-slate-950 to-cyan-950/20 px-6 py-12 text-center sm:px-10">
          <h2 className="mb-4 text-4xl font-bold text-slate-100">Ready to Start Your Project?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-slate-300">
            Our team is currently accepting new projects. Let&apos;s discuss your goals and map the best way forward.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="hero" size="lg" onClick={() => navigate('/contact')}>
              Book a Strategy Session
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 bg-slate-900/70 text-slate-100 hover:bg-slate-800"
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
