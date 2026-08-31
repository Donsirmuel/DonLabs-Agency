import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { useContent } from '@/lib/ContentProvider';
import Section from '@/components/Section';

type FaqItem = {
  q: string;
  a: string;
};

const defaultFaq = [
  { q: 'How long does a project take?', a: 'Small sites: 3-7 days. Simple stores: 7-14 days. Custom apps: timelines depend on scope - we provide clear estimates during discovery.' },
  { q: 'How much will it cost?', a: 'We provide clear price ranges and a fixed quote in the proposal so there are no surprises.' },
  { q: 'Do you offer support?', a: 'Yes — maintenance packages and hourly support are available after launch.' }
];

const FAQ = () => {
  const { content } = useContent();
  const faq = (content?.servicesInfo?.faq ?? defaultFaq) as FaqItem[];

  return (
    <Section as="section" className="border-y border-slate-800 bg-slate-950 px-4 py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-1.5 text-sm font-semibold text-cyan-200">
            Frequently Asked Questions
          </div>
          <h2 id="faq-heading" className="mb-4 text-4xl font-bold text-slate-100 md:text-5xl">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-2xl text-slate-300">Clear answers on delivery, ownership, and long-term support.</p>
        </div>

        <div className="space-y-4">
          {faq.map((qa: FaqItem, i: number) => (
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
      </div>
    </Section>
  );
};

export default FAQ;
