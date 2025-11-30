import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, ShoppingCart, Smartphone, Code, Zap, Shield } from "lucide-react";
import CustomQuoteModal from "@/components/CustomQuoteModal";
import Section from '@/components/Section';
import { useContent } from '@/lib/ContentProvider';
import { defaultContent } from '@/lib/contentStore';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';

const Services = () => {
  // pull services from content provider so admin can update them
  const { content } = useContent();
  const services = Array.isArray(content?.services) ? content.services : [];

  const whyChooseMe = [
    {
      title: "Business-first Approach",
      icon: <Zap className="h-6 w-6" />,
      description: "Partner with a development agency that prioritizes business outcomes and customer experience."
    },
    {
      title: "Reliable & Professional",
      icon: <Shield className="h-6 w-6" />,
      description: "Clear communication, timely delivery, and ongoing support. Your project is in safe hands."
    },
    {
      title: "Modern Technology",
      icon: <Code className="h-6 w-6" />,
      description: "Django (DRF) backends, React frontends, Node.js tooling, PostgreSQL databases and containerized deployments - built for reliability and scale."
    }
  ];

  const getServiceIcon = (title: string) => {
    const t = (title || '').toLowerCase();
    if (t.includes('e‑commerce') || t.includes('e-commerce') || t.includes('commerce') || t.includes('store')) return <ShoppingCart className="h-6 w-6" />;
    if (t.includes('business') || t.includes('website') || t.includes('websites')) return <Globe className="h-6 w-6" />;
    if (t.includes('custom') || t.includes('app') || t.includes('application')) return <Code className="h-6 w-6" />;
    if (t.includes('pwa') || t.includes('progressive') || t.includes('mobile') || t.includes('app-like')) return <Smartphone className="h-6 w-6" />;
    return <Globe className="h-6 w-6" />;
  };

  return (
    <Section as="section" className="py-20 px-4 bg-background" id="services" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-4xl font-bold mb-4">Professional Services</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                We provide comprehensive web development services to help businesses establish a strong digital presence. 
                From custom web applications to e-commerce platforms, we deliver <strong>scalable, secure, and performance-optimized solutions</strong> 
                tailored to your specific business needs and growth objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service: any, index: number) => (
            <Card key={index} className={`relative shadow-card hover:shadow-hover transition-all duration-300 ${service.popular ? 'border-primary ring-2 ring-primary/20' : ''}`}>
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {getServiceIcon(service.title)}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    {service.recommendedPackage && (
                      <div className="text-sm text-muted-foreground mt-1">Recommended package: <strong>{service.recommendedPackage}</strong></div>
                    )}
                  </div>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
                    onClick={() => {
                      const pkg = service.recommendedPackage ? `Recommended package: ${service.recommendedPackage}. ` : '';
                      const msg = `Hi DonLabs, I'm interested in your ${service.title} service. ${pkg}Please send pricing and next steps.`;
                      window.open('https://wa.me/2349031386928?text=' + encodeURIComponent(msg), '_blank');
                    }}
                  >
                    Get Quote
                  </Button>

                  <Button 
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary/5"
                    onClick={() => {
                      // Scroll to How it works / FAQ section
                      document.getElementById('how-we-work')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Learn more
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Me Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">Why Businesses Choose DonLabs</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseMe.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <div className="text-primary">{item.icon}</div>
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-lg text-muted-foreground mb-6">
              Let's discuss your project requirements and create a digital solution that helps your business grow and succeed online. 
              We're committed to delivering high-quality work that meets your objectives and exceeds expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-medium"
                    onClick={() => window.open('https://wa.me/2349031386928?text=Hi%20DonLabs!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.', '_blank')}
            >
              Message on WhatsApp
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/5 font-medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
            <CustomQuoteModal />
          </div>
          <p className="text-sm text-muted-foreground mt-4">Note: Pricing, hosting, content creation, and third-party service fees (domain, paid plugins, payment gateway charges) are not included. We can advise and help procure these where needed.</p>
        </div>

        {/* How it works & FAQ */}
        <div id="how-we-work" className="max-w-4xl mx-auto mt-12">
          <h3 className="text-2xl font-semibold text-center mb-4">How we work</h3>
          <div className="space-y-3 text-sm text-muted-foreground mb-8">
            {((content?.servicesInfo?.howItWorks && content.servicesInfo.howItWorks.length > 0) ? content.servicesInfo.howItWorks : (defaultContent.servicesInfo?.howItWorks ?? [])).map((step: string, i: number) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-1">{i+1}</div>
                <div>{step}</div>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-semibold mb-3">Frequently asked questions</h4>
          <div className="space-y-2">
            {((content?.servicesInfo?.faq && content.servicesInfo.faq.length > 0) ? content.servicesInfo.faq : (defaultContent.servicesInfo?.faq ?? [])).map((qa: any, idx: number) => (
              <Collapsible key={idx}>
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
      </div>
    </Section>
  );
};

export default Services;