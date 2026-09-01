import { Braces, Gauge, LayoutTemplate, Orbit } from "lucide-react";
import { StaggerReveal, StaggerItem } from "@/components/motion";
import { motion } from "framer-motion";
import { spring } from "@/components/motion";
import { ASSETS } from "@/lib/assets";

const items = [
  {
    title: "Web Platforms",
    desc: "High-performance business websites and web apps that look great, load fast, and support real growth.",
    bullets: ["Marketing sites", "Custom web apps"],
    icon: <LayoutTemplate className="h-5 w-5" />,
    span: "md:col-span-2 md:row-span-1",
    image: ASSETS.showcaseVendoraDesktop,
    imgAlt: "Vendora e-commerce platform showcase",
  },
  {
    title: "SEO Optimization",
    desc: "Speed and search improvements that help you rank better and feel faster to every visitor.",
    bullets: ["SEO health checks", "Faster load times"],
    icon: <Braces className="h-5 w-5" />,
    span: "md:col-span-2 md:row-span-1",
    image: ASSETS.showcaseNorthlineDesktop,
    imgAlt: "Northline Wears commerce platform showcase",
  },
  {
    title: "Custom Solutions & Saas Platforms",
    desc: "Tailored software solutions that address your unique business challenges.",
    bullets: ["Custom development", "Unique features", "Scalable architecture"],
    icon: <LayoutTemplate className="h-5 w-5" />,
    span: "",
    image: ASSETS.showcaseVendoraDesktop,
    imgAlt: "Vendora e-commerce platform showcase",
  },
  {
    title: "UI/UX Design",
    desc: "Intuitive and engaging designs that enhance user experience and drive conversions.",
    bullets: ["User research", "Wireframing & prototyping"],
    icon: <Orbit className="h-5 w-5" />,
    span: "",
    image: ASSETS.showcaseShobsDesktop,
    imgAlt: "Shobs e-commerce platform showcase",
  },
  {
    title: "Commerce Systems",
    desc: "Shopping experiences that reduce friction and turn browsers into buyers.",
    bullets: ["Online stores", "Checkout flow"],
    icon: <Orbit className="h-5 w-5" />,
    span: "",
    image: null,
    imgAlt: "",
  },
];

const WhatWeDo = () => {
  const prefersReduced = false;

  return (
    <section className="section-band-card relative overflow-hidden border-y border-border px-4 py-24" aria-labelledby="what-we-do">
      <motion.div
        animate={prefersReduced ? {} : { opacity: [0.06, 0.18, 0.06] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"
        aria-hidden
      />
      <motion.div
        animate={prefersReduced ? {} : { opacity: [0.04, 0.14, 0.04] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
        aria-hidden
      />
      <div className="pointer-events-none absolute right-10 top-6 hidden text-[120px] font-black uppercase tracking-tight text-foreground/[0.04] lg:block">
        Services
      </div>
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/70">
              <span className="h-px w-8 bg-foreground/60" aria-hidden />
              What we build
            </div>
            <h2 id="what-we-do" className="mb-3 text-4xl font-bold text-foreground md:text-5xl">Capabilities</h2>
            <p className="max-w-3xl text-lg text-foreground/65">
              Full-stack platforms for brands that want results and not generic templates.
            </p>
          </div>
        </div>

        <StaggerReveal className="grid gap-5 md:grid-cols-2" margin="-40px">
          {items.map((it, i) => (
            <StaggerItem key={i} className={it.span}>
              <motion.div
                whileHover={prefersReduced ? {} : { y: -6 }}
                transition={spring}
                whileTap={prefersReduced ? {} : { scale: 0.99 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background p-6 transition-colors duration-300 hover:border-primary/40 hover:shadow-hover"
              >
                {!prefersReduced && (
                  <motion.span
                    initial={{ x: "-110%" }}
                    whileInView={{ x: "110%" }}
                    viewport={{ once: false, margin: "-20%" }}
                    transition={{ duration: 1.2, delay: i * 0.12, repeat: Infinity, repeatDelay: 5.5, ease: "easeInOut" }}
                    className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                    aria-hidden
                  />
                )}
                {it.image ? (
                  <div className="mb-6 -mx-2 overflow-hidden rounded-lg border border-border bg-card">
                    <div className="relative mx-auto w-full max-w-[420px]">
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden />
                      <img
                        src={it.image}
                        alt={it.imgAlt}
                        loading="lazy"
                        className="block max-h-72 w-full object-contain object-top transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-95 group-hover:grayscale-0 sm:max-h-80"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-foreground/25 bg-foreground/[0.06] text-foreground transition-colors duration-300 group-hover:border-primary/40 group-hover:text-primary">
                    {it.icon}
                  </div>
                )}
                <h3 className="mb-3 text-xl font-semibold text-foreground">{it.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-foreground/65">{it.desc}</p>
                <ul className="mt-auto space-y-2 text-sm text-foreground/80">
                  {it.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-foreground transition-colors duration-300 group-hover:bg-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default WhatWeDo;
