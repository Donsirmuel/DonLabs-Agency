import { Code2, Compass, Rocket, Workflow } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { spring } from "@/components/motion";

const steps = [
  { title: "Discovery", icon: <Compass className="h-4 w-4" />, desc: "We learn your goals, audience, and what success looks like." },
  { title: "Planning", icon: <Workflow className="h-4 w-4" />, desc: "We map the pages, features, and timeline before coding starts." },
  { title: "Build", icon: <Code2 className="h-4 w-4" />, desc: "We design and develop your product in clear milestone phases." },
  { title: "Launch", icon: <Rocket className="h-4 w-4" />, desc: "We test, launch, and support improvements after release." },
];

const Process = () => {
  const prefersReduced = false;
  const listRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start center", "end center"],
  });

  return (
    <section
      id="process-section"
      className="section-band-card border-y border-border px-4 py-24"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/70">
            <span className="h-px w-8 bg-foreground/60" aria-hidden />
            Our process
          </div>
          <h2 id="process-heading" className="mb-3 text-4xl font-bold text-foreground md:text-5xl">Delivery System</h2>
          <p className="max-w-2xl text-muted-foreground">
            A clear step-by-step process from first call to launch — and support after.
          </p>
        </div>

        <div ref={listRef} className="relative">
          {/* Timeline spine + animated progress rail */}
          <div className="absolute left-6 top-0 bottom-0 hidden w-px bg-border md:block" />
          {!prefersReduced && (
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-6 top-0 bottom-0 hidden w-px origin-top bg-primary md:block"
            />
          )}

          <div className="space-y-8 md:space-y-0">
            {steps.map((s, i) => (
              <StepCard key={s.title} step={s} index={i} total={steps.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function StepCard({ step, index, total }: { step: typeof steps[number]; index: number; total: number }) {
  const prefersReduced = false;
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "center 45%"],
  });

  const active = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], prefersReduced ? [1, 1] : [0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.7], prefersReduced ? [1, 1] : [0.96, 1]);

  return (
    <div ref={ref} className="relative grid items-start gap-6 md:grid-cols-[56px_1fr] md:py-9">
      {/* Active dot on the rail */}
      <div className="relative z-10 hidden pt-1 md:block">
        <motion.div
          style={{ backgroundColor: useTransform(active, [0, 1], ["hsl(30 8% 13%)", "hsl(38 92% 55%)"]) }}
          className="relative mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-foreground/25 text-foreground"
        >
          {!prefersReduced && (
            <motion.span
              animate={{ scale: [1, 1.8], opacity: [0.35, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border border-primary"
              aria-hidden
            />
          )}
          <span className="[&>svg]:text-foreground">{step.icon}</span>
        </motion.div>
      </div>

      <motion.article
        style={{ opacity: textOpacity, scale }}
        whileHover={prefersReduced ? {} : { x: 6 }}
        transition={spring}
        className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/40"
      >
        {!prefersReduced && (
          <motion.span
            style={{ scaleX: active }}
            className="absolute left-0 top-0 h-px w-full origin-left bg-primary"
            aria-hidden
          />
        )}
        <div className="mb-4 flex items-center gap-3 md:hidden">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/30 bg-foreground/[0.06] text-foreground">
            {step.icon}
          </span>
        </div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">Step {index + 1} of {total}</p>
        <h3 className="mb-2 text-xl font-semibold text-foreground">{step.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
      </motion.article>
    </div>
  );
}

export default Process;
