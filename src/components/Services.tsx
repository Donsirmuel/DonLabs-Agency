import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, ShoppingCart, Smartphone, Code, Zap, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Business Websites",
      icon: <Globe className="h-8 w-8" />,
      description: "Professional websites that grow your business online",
      price: "From ₦150,000",
      features: [
        "Responsive Design (Mobile-Friendly)",
        "Search Engine Optimization (SEO)",
        "Contact Forms & Business Info",
        "Social Media Integration",
        "Fast Loading & Secure",
        "1-Year Free Maintenance"
      ],
      popular: false
    },
    {
      title: "E-Commerce Stores",
      icon: <ShoppingCart className="h-8 w-8" />,
      description: "Sell your products online with a professional store",
      price: "From ₦300,000",
      features: [
        "Product Catalog & Shopping Cart",
        "Payment Integration (Paystack, Flutterwave)",
        "Inventory Management",
        "Order Tracking System",
        "Customer Accounts",
        "Mobile-Optimized Shopping"
      ],
      popular: true
    },
    {
      title: "Web Applications",
      icon: <Code className="h-8 w-8" />,
      description: "Custom web apps tailored to your business needs",
      price: "From ₦500,000",
      features: [
        "Custom Business Logic",
        "User Authentication & Roles",
        "Database Management",
        "API Integration",
        "Real-time Features",
        "Scalable Architecture"
      ],
      popular: false
    },
    {
      title: "Mobile Apps (PWA)",
      icon: <Smartphone className="h-8 w-8" />,
      description: "App-like experience that works on all devices",
      price: "From ₦250,000",
      features: [
        "Works Like Native App",
        "Offline Functionality",
        "Push Notifications",
        "App Store Ready",
        "Fast & Lightweight",
        "Cross-Platform Compatible"
      ],
      popular: false
    }
  ];

  const whyChooseMe = [
    {
      title: "Nigerian Market Focus",
      icon: <Zap className="h-6 w-6" />,
      description: "I understand the Nigerian business landscape and build solutions that work for local market needs."
    },
    {
      title: "Reliable & Professional",
      icon: <Shield className="h-6 w-6" />,
      description: "Clear communication, timely delivery, and ongoing support. Your project is in safe hands."
    },
    {
      title: "Modern Technology",
      icon: <Code className="h-6 w-6" />,
      description: "Using latest web technologies to ensure your website is fast, secure, and future-proof."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background" id="services" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-4xl font-bold mb-4">Services for Nigerian Businesses</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional web development services to help your business succeed online. 
            From simple business websites to complex web applications - I deliver quality solutions at affordable rates.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className={`relative shadow-card hover:shadow-hover transition-all duration-300 ${service.popular ? 'border-primary ring-2 ring-primary/20' : ''}`}>
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <div className="text-2xl font-bold text-primary mt-1">{service.price}</div>
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
                
                <Button 
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Quote for {service.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Me Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">Why Nigerian Businesses Choose Me</h3>
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
        <div className="bg-muted/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Grow Your Business Online?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Let's discuss your project and create a website that brings you more customers and grows your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/5"
            >
              Call: +234 915 099 6465
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;