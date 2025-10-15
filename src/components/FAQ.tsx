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
    <Section as="section" className="py-16 px-4 bg-muted/10" aria-labelledby="faq-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 id="faq-heading" className="text-3xl font-bold">Frequently asked questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-2">Common questions clients ask before starting a project.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-2">
          {faq.map((qa: any, i: number) => (
            <Collapsible key={i}>
              <div className="border rounded-md p-3">
                <CollapsibleTrigger asChild>
                  <button className="w-full text-left font-medium">{qa.q}</button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="mt-2 text-sm text-muted-foreground">{qa.a}</div>
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
