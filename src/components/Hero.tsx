import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { spring, springBounce } from "@/components/motion";
import { ASSETS } from "@/lib/assets";
import GlowField from "@/components/GlowField";

const capabilities = ["React builds", "Django backends", "Commerce systems", "Dashboards", "Launch support", "SaaS solutions", "API development", "SEO & analytics", "UI/UX design", "Web3 integrations"];

const Hero = () => {
  const navigate = useNavigate();
  const prefersReduced = false;

  const lines = [
    "Websites that",
    <span key="accent" className="headline-accent">convert</span>,
    "& scale with you",
  ];

  return (
    <section
      className="relative isolate overflow-hidden bg-background pb-20 pt-28 lg:pt-36"
      aria-label="Hero section introducing DonLabs"
      aria-labelledby="home-heading"
    >
      <div className="vignette pointer-events-none absolute inset-0" aria-hidden />
      <GlowField className="opacity-60" />

      {/* Kinetic interface layer: lively motion without flooding the palette. */}
      <motion.div
        animate={prefersReduced ? {} : { opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"
        aria-hidden
      />
      <motion.div
        animate={prefersReduced ? {} : { opacity: [0.04, 0.14, 0.04] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="pointer-events-none absolute inset-x-0 bottom-20 h-px bg-gradient-to-r from-transparent via-primary/18 to-transparent"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-70" aria-hidden>
        <motion.div
          animate={prefersReduced ? {} : { x: ["-20%", "120%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
          className="absolute top-[26%] h-px w-1/3 bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
        />
        <motion.div
          animate={prefersReduced ? {} : { x: ["110%", "-30%"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear", repeatDelay: 2, delay: 1.5 }}
          className="absolute top-[58%] h-px w-1/4 bg-gradient-to-r from-transparent via-primary/18 to-transparent"
        />
        <motion.div
          animate={prefersReduced ? {} : { opacity: [0.18, 0.34, 0.18] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-foreground/15 to-transparent"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1.1fr]">
          {/* Left — editorial headline */}
          <div className="relative z-10 max-w-2xl">
            <motion.p
              initial={prefersReduced ? {} : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.05 }}
              className="mb-7 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/70 sm:text-xs sm:tracking-[0.24em]"
            >
              <motion.span
                animate={{ scaleX: prefersReduced ? 1 : [0, 1] }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="block h-px w-8 origin-left bg-foreground/60"
                aria-hidden
              />
              Open for new projects
            </motion.p>

            <h1
              id="home-heading"
              className="mb-8 text-4xl font-black uppercase leading-[0.95] tracking-tight text-foreground min-[380px]:text-5xl sm:mb-9 sm:text-6xl xl:text-7xl"
            >
              {lines.map((line, i) => (
                <motion.span
                  key={i}
                  className="block"
                  initial={prefersReduced ? {} : { opacity: 0, y: 40, scale: 1.04 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ ...springBounce, delay: 0.22 + i * 0.14 }}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.6 }}
              className="mb-9 max-w-xl text-base leading-relaxed text-foreground/65 sm:mb-10 sm:text-lg"
            >
              We design and build fast, reliable websites and web apps for modern businesses — 
              focused on clean design, strong performance, and measurable growth.
            </motion.p>

            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.72 }}
              className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => document.getElementById("process-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                See our process
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full text-foreground sm:w-auto"
                onClick={() => navigate("/projects")}
              >
                View projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>

            {/* Proof / stack row */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.85 }}
              className="mt-9 max-w-xl sm:mt-10"
            >
              <span className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs sm:tracking-[0.2em]">
                <Check className="h-3.5 w-3.5" />
                What we ship
              </span>
              <div className="flex flex-wrap gap-2">
                {capabilities.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={prefersReduced ? {} : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...spring, delay: 0.9 + i * 0.06 }}
                    className="rounded-full border border-border bg-card/70 px-2.5 py-1.5 font-mono text-[10px] leading-none text-foreground/70 backdrop-blur-sm sm:px-3 sm:text-xs"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — large browser-framed showcase, bleeds off right edge */}
          <div className="relative lg:-mr-8">
            {/* Neutral depth behind frame */}
            <div className="absolute -inset-6 rounded-3xl bg-foreground/[0.045] blur-2xl" aria-hidden />
            <div className="pointer-events-none absolute -inset-x-8 -inset-y-10 overflow-hidden rounded-3xl" aria-hidden>
              <motion.span
                animate={prefersReduced ? {} : { x: ["-18%", "18%", "-18%"], opacity: [0.12, 0.42, 0.12] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-foreground/45 to-transparent"
              />
              <motion.span
                animate={prefersReduced ? {} : { x: ["16%", "-16%", "16%"], opacity: [0.08, 0.28, 0.08] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
                className="absolute left-0 top-2/3 h-px w-full bg-gradient-to-r from-transparent via-primary/18 to-transparent"
              />
              <motion.span
                animate={prefersReduced ? {} : { y: ["-10%", "10%", "-10%"], opacity: [0.06, 0.22, 0.06] }}
                transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-foreground/35 to-transparent"
              />
              <motion.span
                animate={prefersReduced ? {} : { y: ["12%", "-12%", "12%"], opacity: [0.06, 0.2, 0.06] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.7 }}
                className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/16 to-transparent"
              />
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-foreground/15 bg-card shadow-2xl shadow-black/70">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-foreground/10 bg-card px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/25" />
                <span className="ml-3 flex-1 truncate rounded-md bg-foreground/[0.06] px-3 py-1 text-[11px] text-foreground/50">
                  donlabs.agency
                </span>
                <span className="relative rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  <motion.span
                    animate={prefersReduced ? {} : { opacity: [0.35, 0.9, 0.35], scale: [1, 1.25, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-primary"
                    aria-hidden
                  />
                  Live
                </span>
              </div>
              {/* Poster */}
              <div className="relative">
                <img
                  src={ASSETS.heroPosterDesktop}
                  alt="DonLabs web project showcase"
                  className="h-auto w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden />
              </div>
            </div>

            {/* Product credibility card */}
            <div className="absolute -left-5 bottom-8 hidden rounded-xl border border-foreground/15 bg-background/90 px-5 py-4 shadow-xl shadow-black/60 backdrop-blur-md md:block">
              <p className="text-[11px] uppercase tracking-[0.18em] text-primary">Shipped with</p>
              <p className="mt-1 text-lg font-bold text-foreground">React + Django</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
