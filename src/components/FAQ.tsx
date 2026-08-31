import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { useContent } from "@/lib/ContentProvider";
import { StaggerReveal, StaggerItem } from "@/components/motion";

type FaqItem = {
  q: string;
  a: string;
};

const defaultFaq = [
  { q: "How long does a project take?", a: "Small sites: 3-7 days. Simple stores: 7-14 days. Custom apps: timelines depend on scope - we provide clear estimates during discovery." },
  { q: "How much will it cost?", a: "We provide clear price ranges and a fixed quote in the proposal so there are no surprises." },
  { q: "Do you offer support?", a: "Yes — maintenance packages and hourly support are available after launch." },
];

const FAQ = () => {
  const { content } = useContent();
  const faq = (content?.servicesInfo?.faq ?? defaultFaq) as FaqItem[];

  return (
    <section className="section-band-card relative overflow-hidden border-y border-border px-4 py-24" aria-labelledby="faq-heading">
      <div className="animate-soft-pulse pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent" aria-hidden />
      <div className="animate-soft-pulse pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" aria-hidden />
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/70">
            <span className="h-px w-8 bg-foreground/60" aria-hidden />
            FAQ
          </div>
          <h2 id="faq-heading" className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Frequently Asked Questions</h2>
          <p className="max-w-2xl text-muted-foreground">Clear answers on delivery, ownership, and long-term support.</p>
        </div>

        <StaggerReveal className="space-y-4">
          {faq.map((qa: FaqItem, i: number) => (
            <StaggerItem key={i}>
              <Collapsible>
                <div className="rounded-xl border border-border bg-background p-5 transition-colors hover:border-foreground/40">
                  <CollapsibleTrigger asChild>
                    <button className="group flex w-full items-center justify-between text-left text-base font-semibold text-foreground sm:text-lg">
                      <span>{qa.q}</span>
                      <span className="text-foreground transition-transform group-hover:scale-110">+</span>
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{qa.a}</div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default FAQ;
