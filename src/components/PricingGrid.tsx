import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { BadgeCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContent } from "@/lib/ContentProvider";
import { motion } from "framer-motion";
import { StaggerItem, StaggerReveal, spring } from "@/components/motion";

const pricingFaqs = [
  {
    q: "What does each package include?",
    a: "Each package includes planning, design, build, testing, and launch support. Larger projects add deeper workflows, integrations, and longer support windows.",
  },
  {
    q: "Which payment gateways do you support?",
    a: "We commonly support Paystack, Flutterwave, and Stripe. We will recommend the best option based on your customers, location, and checkout needs.",
  },
  {
    q: "How is inventory managed?",
    a: "For online stores, we provide a simple admin area for products, stock, orders, and basic reporting so daily management stays practical.",
  },
  {
    q: "What support do I get after launch?",
    a: "Every package includes post-launch support. If you need extended maintenance, we provide monthly support plans and on-demand updates.",
  },
];

const PricingGrid = () => {
  const { content } = useContent();
  const navigate = useNavigate();
  const packages = Array.isArray(content?.pricing) ? content.pricing : [];

  return (
    <Section as="section" className="section-band-dark relative overflow-hidden border-y border-border px-4 py-16 sm:py-20" aria-labelledby="pricing-heading">
      <motion.div
        animate={{ opacity: [0.06, 0.18, 0.06] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Clear Website Packages
          </div>
          <h1 id="pricing-heading" className="mb-6 text-4xl font-black uppercase leading-[0.98] text-foreground sm:text-5xl md:text-6xl">
            Corporate &
            <span className="headline-accent block">E-commerce Packages</span>
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Starting prices for common project types. After a short discovery call, we confirm the exact scope, timeline, and support your business needs.
          </p>
        </header>

        <StaggerReveal className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg) => (
            <StaggerItem key={pkg.id}>
              <motion.article
                whileHover={{ y: -5 }}
                transition={spring}
                className={`relative flex min-h-[420px] flex-col overflow-hidden rounded-xl border bg-card p-5 transition-colors ${
                  pkg.popular ? "border-primary/55 shadow-hover" : "border-border hover:border-primary/35"
                }`}
              >
                {pkg.popular && (
                  <div className="animate-soft-pulse pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" aria-hidden />
                )}
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-xl font-semibold text-foreground">{pkg.name}</h3>
                  {pkg.popular && (
                    <span className="w-fit rounded-md border border-primary/35 bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                      Recommended
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <p className="text-4xl font-bold text-foreground">{pkg.price}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pkg.desc}</p>
                </div>

                <ul className="mb-6 space-y-3 text-sm text-foreground/80">
                  {pkg.includes.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button
                    variant={pkg.popular ? "hero" : "outline"}
                    className="w-full"
                    onClick={() =>
                      window.open(
                        "https://wa.me/2349031386928?text=" +
                          encodeURIComponent(`Hi DonLabs, I am interested in your ${pkg.name} package. Please share the next steps.`),
                        "_blank",
                      )
                    }
                  >
                    Select Plan
                  </Button>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <div className="mt-8 rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Important note:</strong> These are starting prices. Hosting, domain registration, paid tools, and transaction fees are separate, but we can guide setup so there are no awkward surprises.
        </div>

        <section className="mt-16" aria-labelledby="pricing-faqs">
          <h2 id="pricing-faqs" className="mb-8 text-center text-3xl font-bold text-foreground sm:text-4xl">
            Frequently Asked <span className="text-primary">Pricing Questions</span>
          </h2>

          <div className="mx-auto max-w-4xl space-y-4">
            {pricingFaqs.map((qa, i) => (
              <Collapsible key={i}>
                <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40">
                  <CollapsibleTrigger asChild>
                    <button className="group flex w-full items-center justify-between gap-4 text-left text-base font-semibold text-foreground sm:text-lg">
                      <span>{qa.q}</span>
                      <span className="text-primary transition-transform group-hover:scale-110">+</span>
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{qa.a}</div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}
          </div>
        </section>

        <section className="relative mt-16 overflow-hidden rounded-2xl border border-border bg-card p-6 text-center sm:p-12">
          <div className="animate-soft-pulse pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" aria-hidden />
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Need Help Choosing?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Tell us what you are trying to build, and we will recommend the simplest package or phased plan that fits.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button variant="hero" size="lg" onClick={() => navigate('/contact')}>
              Start a Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border bg-background text-foreground hover:bg-foreground/5"
              onClick={() =>
                window.open(
                  "https://wa.me/2349031386928?text=" +
                    encodeURIComponent("Hi DonLabs, I would like to book a strategy session for my project."),
                  "_blank",
                )
              }
            >
              Book Strategy Session
            </Button>
          </div>
        </section>
      </div>
    </Section>
  );
};

export default PricingGrid;
