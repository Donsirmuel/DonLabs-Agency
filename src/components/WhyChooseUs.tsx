import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ASSETS } from "@/lib/assets";
import { StaggerReveal, StaggerItem, spring } from "@/components/motion";

function AnimatedNumber({ to, decimals = 1, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setValue(to);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1200;
        const startTime = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(eased * to);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, prefersReduced]);

  return (
    <div ref={ref} className="tabular-nums">
      {value.toFixed(decimals)}{suffix}
    </div>
  );
}

const collage = [
  {
    src: ASSETS.showcaseShindaraDesktop,
    alt: "Shindara Style Hub showcase",
    w: "w-[70%]",
    rest: { x: 0, y: 0, rotate: -3, z: 10 },
  },
  {
    src: ASSETS.showcaseBubbaliciousDesktop,
    alt: "Bubbalicious Hair & Co showcase",
    w: "w-[62%]",
    rest: { x: 30, y: -10, rotate: 3, z: 20 },
  },
  {
    src: ASSETS.showcaseShobsDesktop,
    alt: "Shobs graphic design portfolio showcase",
    w: "w-[58%]",
    rest: { x: 8, y: -18, rotate: -1, z: 30 },
  },
];

const WhyChooseUs = () => {
  const prefersReduced = false;
  const collageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: collageRef, offset: ["start end", "end start"] });
  const driftY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const reasons = [
    {
      title: "Maintainable code you own",
      desc: "Clean, readable builds with clear structure — so your platform stays healthy and easy to extend long after launch.",
    },
    {
      title: "Measurable conversion thinking",
      desc: "Every design decision ties to a business goal and conversion psychology, not just aesthetics.",
    },
    {
      title: "Clean handoff & support",
      desc: "No black-box delivery. Clear communication, practical trade-offs, and support after you go live.",
    },
  ];

  return (
    <section className="section-band-dark relative overflow-hidden border-y border-border px-4 py-24" aria-labelledby="why-choose">
      <motion.div
        animate={prefersReduced ? {} : { opacity: [0.05, 0.16, 0.05] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent"
        aria-hidden
      />
      <motion.div
        animate={prefersReduced ? {} : { opacity: [0.05, 0.14, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent lg:block"
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        {/* Layered collage + stack-in-one-by-one entrance + parallax drift */}
        <div ref={collageRef} className="relative h-[420px] sm:h-[480px]">
          <motion.div
            animate={prefersReduced ? {} : { x: ["-8%", "8%", "-8%"], opacity: [0.12, 0.28, 0.12] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-0 top-16 h-px w-full bg-gradient-to-r from-transparent via-foreground/35 to-transparent"
            aria-hidden
          />
          <motion.div
            animate={prefersReduced ? {} : { x: ["6%", "-6%", "6%"], opacity: [0.08, 0.22, 0.08] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="pointer-events-none absolute bottom-24 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            aria-hidden
          />
          <motion.div style={{ y: prefersReduced ? 0 : driftY }} className="absolute inset-0">
            {collage.map((c, i) => {
              const baseX = c.rest.x;
              const baseY = c.rest.y;
              const baseR = c.rest.rotate;
              const float = prefersReduced
                ? {}
                : {
                    x: [`${baseX}%`, `${baseX + (i % 2 === 0 ? 3 : -3)}%`, `${baseX}%`],
                    y: [`${baseY}%`, `${baseY - (i % 2 === 0 ? 4 : 3)}%`, `${baseY}%`],
                    rotate: [baseR, baseR + (i % 2 === 0 ? 1.5 : -1.5), baseR],
                  };
              return (
                <motion.div
                  key={i}
                  initial={prefersReduced ? false : { opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, ...float }}
                  transition={{
                    opacity: { duration: 0.4, delay: 0.15 + i * 0.2 },
                    scale: { duration: 0.4, delay: 0.15 + i * 0.2 },
                    x: { duration: 5 + i * 0.8, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 5 + i * 0.8, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 5 + i * 0.8, repeat: Infinity, ease: "easeInOut" },
                  }}
                  whileHover={prefersReduced ? {} : { scale: 1.06, zIndex: 40 }}
                  style={{
                    zIndex: c.rest.z,
                    x: prefersReduced ? `${baseX}%` : undefined,
                    y: prefersReduced ? `${baseY}%` : undefined,
                    rotate: prefersReduced ? baseR : undefined,
                  }}
                  className={`absolute left-0 top-0 ${c.w} overflow-hidden rounded-xl border border-foreground/15 bg-card shadow-2xl shadow-black/60`}
                >
                  <img
                    src={c.src}
                    alt={c.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-top grayscale"
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Floating stat with count-up */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.3 }}
            className="absolute bottom-2 right-0 z-40 rounded-xl border border-primary/25 bg-background/90 px-5 py-4 shadow-xl shadow-black/60 backdrop-blur-md"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-primary">Avg. conversion lift</p>
            <p className="mt-1 text-3xl font-bold text-foreground">
              <AnimatedNumber to={2.4} suffix="×" />
            </p>
          </motion.div>
        </div>

        {/* Reasons */}
        <div>
          <div className="mb-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/70">
            <span className="h-px w-8 bg-foreground/60" aria-hidden />
            Why choose DonLabs
          </div>
          <h2 id="why-choose" className="mb-8 text-4xl font-bold text-foreground md:text-5xl">Why Choose DonLabs</h2>
          <StaggerReveal className="space-y-7">
            {reasons.map((reason, index) => (
              <StaggerItem key={reason.title}>
                <motion.div
                  whileHover={prefersReduced ? {} : { x: 6 }}
                  transition={spring}
                  className="border-b border-border pb-6"
                >
                  <div className="mb-2 flex items-baseline gap-4">
                    <span className="text-sm font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">{reason.title}</h3>
                  </div>
                  <p className="pl-10 text-sm leading-relaxed text-foreground/65">{reason.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
