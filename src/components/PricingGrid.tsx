import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { BadgeCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContent } from "@/lib/ContentProvider";

const pricingFaqs = [
  {
    q: "What does each package include?",
    a: "Each package includes design, development, testing, and launch support. Higher tiers add advanced capabilities such as integrations, scalability improvements, and longer support windows.",
  },
  {
    q: "Which payment gateways do you support?",
    a: "We support Paystack, Flutterwave, and Stripe depending on your business location and checkout requirements.",
  },
  {
    q: "How is inventory managed?",
    a: "For e-commerce packages we provide inventory controls, product management, and order workflows inside your admin dashboard.",
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
    <Section as="section" className="border-y border-slate-800 bg-slate-950 px-4 py-16 sm:py-20" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
            Clear Website Packages
          </div>
          <h1 id="pricing-heading" className="mb-6 text-5xl font-extrabold leading-[1.02] text-slate-100 md:text-6xl">
            Corporate &
            <span className="block bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">E-commerce Packages</span>
          </h1>
          <p className="text-lg leading-relaxed text-slate-300">
            Choose a package that fits your current stage, with clear pricing in Naira and practical support options.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className={`flex min-h-[420px] flex-col rounded-xl border bg-slate-900/80 p-5 transition-all duration-300 ${
                pkg.popular
                  ? "border-cyan-300/60 shadow-[0_0_0_1px_rgba(45,212,191,0.2),0_18px_40px_-18px_rgba(45,212,191,0.45)]"
                  : "border-slate-700"
              }`}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-100">{pkg.name}</h3>
                {pkg.popular && (
                  <span className="rounded-md border border-cyan-300/50 bg-cyan-300/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-200">
                    Recommended
                  </span>
                )}
              </div>

              <div className="mb-4">
                <p className="text-4xl font-bold text-slate-100">{pkg.price}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{pkg.desc}</p>
              </div>

              <ul className="mb-6 space-y-3 text-sm text-slate-200">
                {pkg.includes.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button
                  className={`w-full ${pkg.popular ? "flex flex-wrap gap-4" : "bg-slate-950 text-slate-100 hover:bg-slate-800"}`}
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
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-slate-700 bg-slate-900/60 p-5 text-sm leading-relaxed text-slate-300">
          <strong className="text-slate-100">Important note:</strong> Hosting, domain registration, paid plugins, and third-party transaction fees are separate from package cost. We can help you choose and set up the right infrastructure.
        </div>

        <section className="mt-16" aria-labelledby="pricing-faqs">
          <h2 id="pricing-faqs" className="mb-8 text-center text-4xl font-bold text-slate-100">
            Frequently Asked <span className="text-cyan-300">Pricing Questions</span>
          </h2>

          <div className="mx-auto max-w-4xl space-y-4">
            {pricingFaqs.map((qa, i) => (
              <Collapsible key={i}>
                <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-5 transition-all duration-300 hover:border-cyan-300/40">
                  <CollapsibleTrigger asChild>
                    <button className="group flex w-full items-center justify-between text-left text-base font-semibold text-slate-100 sm:text-lg">
                      <span>{qa.q}</span>
                      <span className="text-cyan-300 transition-transform group-hover:scale-110">+</span>
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-4 border-t border-slate-700 pt-4 text-sm leading-relaxed text-slate-300 sm:text-base">{qa.a}</div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-slate-700 bg-gradient-to-r from-slate-900 via-slate-800/70 to-slate-900 p-8 text-center sm:p-12">
          <h2 className="mb-4 text-4xl font-bold text-slate-100">Ready to Start Your Project?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-slate-300">
            Let&apos;s scope your requirements and recommend the right package for your business goals.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="hero" size="lg" onClick={() => navigate('/contact')}>
              Start a Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 bg-slate-900/70 text-slate-100 hover:bg-slate-800"
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
