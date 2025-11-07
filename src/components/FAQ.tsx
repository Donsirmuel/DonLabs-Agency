import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { useContent } from '@/lib/ContentProvider';
import Section from '@/components/Section';

const defaultFaq = [
  { q: 'How long does a project take?', a: 'Small sites: 2–4 weeks. Simple stores: 4–8 weeks. Custom apps: it depends on scope.' },
  { q: 'How much will it cost?', a: 'I provide clear price ranges and a fixed quote in the proposal so there are no surprises.' },
  { q: 'Do you offer support?', a: 'Yes — maintenance packages and hourly support are available after launch.' }
];

const FAQ = () => {
  const { content } = useContent();
  const faq = content?.servicesInfo?.faq ?? defaultFaq;

  return (
    <Section as="section" className="py-24 px-4" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            FAQ
          </div>
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold mb-4">Common Questions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Everything you need to know before starting your project</p>
        </div>

        <div className="space-y-4">
          {faq.map((qa: any, i: number) => (
            <Collapsible key={i}>
              <div className="border-2 border-border rounded-2xl p-6 bg-card transition-all duration-300 hover:shadow-hover hover:border-primary/40">
                <CollapsibleTrigger asChild>
                  <button className="w-full text-left font-semibold text-lg flex justify-between items-center group">
                    {qa.q}
                    <span className="text-primary group-hover:scale-110 transition-transform">+</span>
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="mt-4 text-muted-foreground leading-relaxed border-t border-border pt-4">{qa.a}</div>
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
