import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, MapPin, MessageCircle, Send } from "lucide-react";
import Section from '@/components/Section';

const Contact = () => {
  return (
    <Section as="section" className="section-spacing container-padding bg-gradient-to-b from-background to-accent/20" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              Get In Touch
            </div>
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let's discuss your project and create something amazing together. I work with clients in Lagos, across Nigeria, and globally to build professional web solutions.
            </p>
          </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 bg-gradient-to-br from-card to-accent/5 border-2 border-border rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Let's Build Together</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need a business website, e-commerce store, or custom web application, 
                I'm here to help transform your vision into reality.
              </p>
            </div>
            
            <div className="space-y-3">
              <a 
                href="https://wa.me/2349150996465"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:shadow-hover hover:-translate-y-1 bg-gradient-to-r from-green-500/10 to-green-600/10 border-2 border-green-500/20 hover:border-green-500/40"
              >
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-muted-foreground">WhatsApp (Fastest)</p>
                  <p className="font-medium">+234 915 099 6465</p>
                </div>
              </a>

              <a 
                href="mailto:Samuelolaonipekun050@Outlook.com"
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:shadow-hover hover:-translate-y-1 bg-card border-2 border-border hover:border-primary/40"
              >
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-sm">Samuelolaonipekun050@Outlook.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border-2 border-border">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <a href="https://github.com/Donsirmuel" target="_blank" rel="noopener noreferrer" className="p-3 bg-card border-2 border-border rounded-xl hover:border-primary/40 transition-all hover:scale-110">
                  <Github className="h-5 w-5 text-foreground" />
                </a>
                <a href="https://linkedin.com/in/samuel-olaonipekun" target="_blank" rel="noopener noreferrer" className="p-3 bg-card border-2 border-border rounded-xl hover:border-primary/40 transition-all hover:scale-110">
                  <Linkedin className="h-5 w-5 text-foreground" />
                </a>
                <a href="https://twitter.com/_donsirmuel" target="_blank" rel="noopener noreferrer" className="p-3 bg-card border-2 border-border rounded-xl hover:border-primary/40 transition-all hover:scale-110">
                  <Send className="h-5 w-5 text-foreground" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="shadow-hover border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Get Your Free Quote</CardTitle>
              <CardDescription className="text-base">
                Tell me about your project and I'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-semibold">Name</Label>
                    <Input id="name" placeholder="Your name" className="border-2" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-semibold">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="border-2" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-semibold">Project Type</Label>
                  <Input id="subject" placeholder="e.g. Business Website, E-commerce Store" className="border-2" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-semibold">Project Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your business and what kind of website/app you need..."
                    className="min-h-[120px] border-2"
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="hero"
                  className="w-full"
                  size="lg"
                >
                  Get My Free Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Contact;