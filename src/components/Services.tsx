import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, ShoppingCart, Smartphone, Code, Zap, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Business Websites",
      icon: <Globe className="h-8 w-8" />,
      description: "Professional business websites designed to enhance your online presence and connect with your target audience effectively.",
  price: "From ₦150,000",
      features: [
        "Responsive Design & Mobile Optimization",
        "Search Engine Optimization (SEO)",
        "Content Management System",
        "Contact Forms & Business Integration",
        "Performance Optimization",
        "1-Year Maintenance & Support"
      ],
      popular: false
    },
    {
      title: "E-Commerce Solutions",
      icon: <ShoppingCart className="h-8 w-8" />,
      description: "Complete online store solutions with secure payment processing, inventory management, and customer-friendly shopping experiences.",
  price: "From ₦300,000",
      features: [
        "Product Catalog & Shopping Cart",
        "Payment Gateway Integration",
        "Order Management System",
        "Inventory Tracking",
        "Customer Account Management",
        "Mobile-Responsive Design"
      ],
      popular: true
    },
    {
      title: "Custom Web Applications",
      icon: <Code className="h-8 w-8" />,
      description: "Tailored web applications built to address your specific business requirements and streamline your operations.",
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
          <h2 id="services-heading" className="text-4xl font-bold mb-4">Professional Services</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            I provide comprehensive web development services to help businesses establish a strong digital presence. 
            From custom web applications to e-commerce platforms, I deliver <strong>scalable, secure, and performance-optimized solutions</strong> 
            tailored to your specific business needs and growth objectives.
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
        <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Let's discuss your project requirements and create a digital solution that helps your business grow and succeed online. 
            I'm committed to delivering high-quality work that meets your objectives and exceeds expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-medium"
              onClick={() => window.open('https://wa.me/2349150996465?text=Hi%20Samuel!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.', '_blank')}
            >
              WhatsApp Message
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/5 font-medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;