import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, MapPin, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-background" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 id="contact-heading" className="text-4xl font-bold mb-4">Get Professional Website Development Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Need a website developer near you? Looking for professional website designers in Lagos, Abuja or anywhere in Nigeria? 
              Ready to hire experienced web developers for your business website, e-commerce store, or web application? 
              Contact the best website development company in Nigeria today for a free consultation and quote!
            </p>
          </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Start Your Project Today</h3>
              <p className="text-muted-foreground mb-8">
                Whether you need a simple business website, an e-commerce store, or a custom web application, 
                I'm here to help. Based in Lagos, Nigeria, I work with businesses across the country to build 
                professional web solutions that drive results.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 hover-lift rounded-lg p-2 -m-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">Samuelolaonipekun050@Outlook.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 hover-lift rounded-lg p-2 -m-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-muted-foreground">github.com/Donsirmuel</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 hover-lift rounded-lg p-2 -m-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-muted-foreground">linkedin.com/in/samuel-olaonipekun</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 hover-lift rounded-lg p-2 -m-2">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-muted-foreground">+234 915 099 6465</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 hover-lift rounded-lg p-2 -m-2">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Send className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="font-medium">Twitter</p>
                  <p className="text-muted-foreground">@_donsirmuel</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 hover-lift rounded-lg p-2 -m-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Get Your Free Quote</CardTitle>
              <CardDescription>
                Tell me about your project and I'll get back to you with a customized quote within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Project Type</Label>
                  <Input id="subject" placeholder="e.g. Business Website, E-commerce Store, Web App" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your business and what kind of website/app you need. Include your budget range if possible."
                    className="min-h-[120px]"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                >
                  Get My Free Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;