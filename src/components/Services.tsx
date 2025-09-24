import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, ShoppingCart, Smartphone, Code, Zap, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "🚀 Revenue-Generating Business Websites",
      icon: <Globe className="h-8 w-8" />,
      description: "Django-powered websites that convert visitors into paying customers and leave competitors wondering how you did it!",
      price: "From $400 / ₦150k",
      features: [
        "💰 Conversion-Optimized Design (More Sales!)",
        "🎯 SEO That Crushes Competition",
        "⚡ Lightning-Fast Django Backend",
        "📱 Mobile-First Domination",
        "🛡️ Enterprise-Level Security",
        "🔥 1-Year FREE Maintenance & Updates"
      ],
      popular: false
    },
    {
      title: "💰 Money-Making E-Commerce Empires",
      icon: <ShoppingCart className="h-8 w-8" />,
      description: "Django-powered online stores that turn browsers into buyers and generate passive income 24/7!",
      price: "From $800 / ₦300k",
      features: [
        "🎯 Conversion-Optimized Product Pages",
        "💳 Multi-Payment Gateway Integration",
        "📊 Advanced Analytics & Sales Tracking",
        "🤖 Automated Inventory Management",
        "👥 Customer Retention Systems",
        "📱 Mobile Shopping Domination"
      ],
      popular: true
    },
    {
      title: "⚡ Business-Crushing Web Applications",
      icon: <Code className="h-8 w-8" />,
      description: "Custom Django applications that automate your business, eliminate inefficiencies, and multiply your profits!",
      price: "From $1,200 / ₦500k",
      features: [
        "🧠 AI-Powered Business Intelligence",
        "🔐 Military-Grade Security Systems",
        "🚀 Real-Time Performance Monitoring",
        "🔄 Automated Workflow Systems",
        "📈 Advanced Analytics Dashboard",
        "🌐 Unlimited Scalability"
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
          <h2 id="services-heading" className="text-4xl font-bold mb-4">🔥 Business Domination Arsenal</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            <strong>Forget basic WordPress sites!</strong> I build Django-powered business empires that generate revenue while you sleep. 
            These aren't just websites - they're <strong>profit-generating machines, customer-converting systems, and competition-crushing weapons</strong>. 
            Ready to 10x your business? Let's build something that makes your competitors cry! 💪
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

        {/* Competitive Advantage Section */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-lg p-8 mb-8 border-2 border-red-200 dark:border-red-800">
          <h3 className="text-3xl font-bold mb-6 text-center text-red-600 dark:text-red-400">
            🥊 Why I DESTROY WordPress Developers
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-red-700 dark:text-red-300">🔥 Django Power vs WordPress Weakness</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✅</span>
                  <span><strong>Custom Python Logic:</strong> While they drag-and-drop, I code intelligent solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✅</span>
                  <span><strong>Enterprise Security:</strong> My Django fortress vs their plugin vulnerabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✅</span>
                  <span><strong>Lightning Speed:</strong> Optimized Python vs bloated WordPress themes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✅</span>
                  <span><strong>Unlimited Scalability:</strong> Handle millions of users without breaking</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-red-700 dark:text-red-300">💰 Business Results That Crush Competition</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">💎</span>
                  <span><strong>10x Conversion Rates:</strong> Psychology-based design that forces sales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">💎</span>
                  <span><strong>Revenue Automation:</strong> Systems that make money while you sleep</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">💎</span>
                  <span><strong>Data Intelligence:</strong> AI-powered insights that outsmart competitors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">💎</span>
                  <span><strong>Future-Proof Technology:</strong> Built to dominate for decades</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">🚀 Ready to Leave Your Competitors in the Dust?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Stop settling for basic WordPress sites! Let's build a Django-powered business empire that generates revenue, 
            crushes competition, and makes your success inevitable. Your competitors won't know what hit them! 💥
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-bold animate-pulse"
              onClick={() => window.open('https://wa.me/2349150996465?text=I%20want%20to%20crush%20my%20competition%20with%20Django!%20Let%27s%20build%20something%20EPIC!', '_blank')}
            >
              💬 WhatsApp: "Let's Dominate!" 
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/5 font-bold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🔥 Start World Domination
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;