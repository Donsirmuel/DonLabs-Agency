import { Button } from "@/components/ui/button";
import Section from '@/components/Section';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

import { useContent } from '@/lib/ContentProvider';

// pull packages from content provider so admin can update them (inside component)

const PricingGrid = () => {
  const { content } = useContent();
  const packages = Array.isArray(content?.pricing) ? content.pricing : [];

  return (
    <Section as="section" className="section-spacing container-padding bg-background">
      <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              Transparent Pricing
            </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Corporate & E-commerce Packages</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Packages organized by business type and scale. Choose a plan that fits your company size and complexity. 
            All prices in Naira • Custom enterprise quotes available.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger-children">
          {packages.map((p, index) => (
            <Card 
              key={p.id} 
              className={`flex flex-col hover-lift ${p.popular ? 'ring-2 ring-primary shadow-premium' : 'shadow-card'}`}
            >
              <CardHeader className="p-6 pb-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-2xl flex-1">{p.name}</CardTitle>
                    {p.popular && (
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full whitespace-nowrap">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-bold text-primary">{p.price}</span>
                    <span className="text-sm text-muted-foreground">one-time</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-1 flex flex-col">
                <div className="mb-6 flex-1">
                  <h4 className="text-sm font-semibold mb-3 text-foreground">What's Included:</h4>
                  <ul className="space-y-2.5">
                    {p.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        <span className="leading-relaxed">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  size="lg" 
                  variant={p.popular ? "hero" : "default"}
                  className="w-full" 
                  onClick={() => window.open('https://wa.me/2349150996465?text=Hi%20Samuel!%20I%20am%20interested%20in%20the%20' + encodeURIComponent(p.name) + '%20package.', '_blank')}
                >
                  Get Quote • {p.price}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 p-6 bg-muted/30 border border-border rounded-xl">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Important Note:</strong> Hosting, domain registration, paid third-party services 
            (payment provider fees, premium plugins), content writing, and platform transaction fees are not included. 
            For Premium packages we recommend containerized hosting (DigitalOcean, AWS, Render) and can manage deployments for an additional fee.
          </p>
        </div>
        
        <div className="mt-16 animate-fade-in-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">Pricing FAQs</h3>
            <p className="text-lg text-muted-foreground">Common questions about packages and what they include</p>
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="corporate">
              <AccordionTrigger>Corporate - what does this cover?</AccordionTrigger>
              <AccordionContent>
                Corporate sites include multi-page content, a blog/newsroom, and lead capture. We focus on accessibility, SEO basics and a fast React frontend. Optional Django CMS for easy content updates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="small-ecom">
              <AccordionTrigger>Small e‑commerce - what about payments?</AccordionTrigger>
              <AccordionContent>
                We integrate popular payment gateways (Paystack, Flutterwave, Stripe). Transaction fees are charged by the provider. We build secure checkout flows and basic order management in Django or via APIs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="medium-ecom">
              <AccordionTrigger>Medium e‑commerce - inventory and customers?</AccordionTrigger>
              <AccordionContent>
                Medium stores include inventory sync, customer accounts, discounting and reporting. We recommend PostgreSQL for reliability and can add background jobs for email/SMS and heavy tasks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="premium-ecom">
              <AccordionTrigger>Premium - timelines and support?</AccordionTrigger>
              <AccordionContent>
                Premium projects are scoped during discovery. Typical timelines are 8–20 weeks depending on integrations. We offer deployment support, monitoring and a longer support contract (6+ months) for enterprise needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Section>
  );
};

export default PricingGrid;


