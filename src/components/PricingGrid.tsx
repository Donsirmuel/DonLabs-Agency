import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const packages = [
  {
    id: 'corporate',
    name: 'Corporate / Business Website',
    price: '₦180,000 - ₦350,000',
    desc: 'For professionals, agencies, corporate teams and service providers who need a polished web presence or company site.',
    includes: [
      '5–10 content pages (About, Services, Team, Blog, Contact)',
      'SEO-friendly React frontend, optional Django headless CMS',
      'Blog setup with structured content and RSS',
      'Contact forms, lead capture & newsletter integration',
      'Basic analytics, accessibility checks & 1 month support'
    ]
  },
  {
    id: 'small-ecom',
    name: 'Small e‑commerce',
    price: '₦350,000 - ₦600,000',
    desc: 'Small online stores with product catalogs and simple checkout - ideal for boutiques and SMB sellers.',
    includes: [
      'Product catalog, product pages and category browsing',
      'Cart, checkout and order confirmation flows',
      'Payment gateway integration (Paystack / Flutterwave / Stripe)',
      'Django backend or Django + DRF APIs with PostgreSQL',
      'Admin order/product management, basic reporting & 3 months support'
    ],
    popular: true
  },
  {
    id: 'medium-ecom',
    name: 'Medium e‑commerce',
    price: '₦600,000 - ₦1,200,000',
    desc: 'Growing stores that need inventory, user accounts, discounts and integrations.',
    includes: [
      'Everything in Small e‑commerce',
      'User accounts, order history and customer dashboards',
      'Inventory management, discounts & coupon systems',
      'Integrated email/SMS notifications and analytics',
      'Performance tuning, staging environment & 4 months support'
    ]
  },
  {
    id: 'premium-ecom',
    name: 'Premium e‑commerce / Enterprise',
    price: 'Custom pricing (₦1,200,000+)',
    desc: 'Full custom e‑commerce platforms with integrations, automation and scaling support.',
    includes: [
      'Custom API design (Django + DRF) and React storefront',
      'PostgreSQL schema design, caching & background workers',
      'Third‑party integrations (ERP/CRM, logistics, payment providers)',
      'Containerized deployments (Docker), CI/CD, monitoring & 6 months support'
    ]
  }
];

const PricingGrid = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Pricing - corporate & e‑commerce packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-2">Packages are organised by business type and scale so you can pick a plan that fits your company size and complexity. All prices are shown in Naira; custom enterprise quotes are available.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <Card key={p.id} className={`p-0 ${p.popular ? 'ring-2 ring-primary/20' : ''}`}>
              <CardHeader className="p-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{p.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{p.price}</div>
                </div>
                <div className="text-sm text-muted-foreground mt-2">{p.desc}</div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="mb-6 space-y-2 text-sm">
                  {p.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="w-full bg-primary hover:bg-primary-hover text-primary-foreground" onClick={() => window.open('https://wa.me/2349150996465?text=Hi%20Samuel!%20I%20am%20interested%20in%20the%20' + encodeURIComponent(p.name) + '%20package.', '_blank')}>
                  Get Quote - {p.price}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-sm text-muted-foreground">
          <p><strong>Note:</strong> Hosting, domain registration, paid third‑party services (payment provider fees, premium plugins), content writing and platform transaction fees are not included. For Premium packages we recommend containerized hosting (DigitalOcean, AWS, Render) and can manage deployments for an additional fee.</p>
        </div>
        <div className="mt-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold">Pricing FAQs</h3>
            <p className="text-muted-foreground">Common questions about packages and what they include.</p>
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
    </section>
  );
};

export default PricingGrid;


