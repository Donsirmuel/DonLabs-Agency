import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/ui/loading-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, MapPin, MessageCircle, Send } from "lucide-react";
import Section from '@/components/Section';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { trackEvent } from '@/lib/analytics';

const WHATSAPP_NUMBER = '2349031386928'; // no plus sign (updated per user)

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const buildWhatsAppUrl = (to: string, text: string) => {
    const encoded = encodeURIComponent(text);
    return `https://wa.me/${to}?text=${encoded}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    // Basic validation
    if (!name.trim() || !message.trim()) {
      trackEvent('contact_validation_error', {
        missing_name: !name.trim(),
        missing_details: !message.trim(),
      });

      // show toast instead of alert
      toast({
        title: 'Missing information',
        description: 'Please provide your name and a short description of the project.',
      });
      return;
    }

    setSubmitting(true);
    trackEvent('contact_quote_submit', {
      channel: 'whatsapp',
      has_email: Boolean(email.trim()),
      has_subject: Boolean(subject.trim()),
    });

    // Safety backstop: if nothing happens within 10s, notify the user and re-enable the form
    const backstop = window.setTimeout(() => {
      if (submitting) {
        toast({ title: 'Still working', description: 'If this is taking too long, please try again or use email.' });
        setSubmitting(false);
      }
    }, 10000);

    const body = [`Hi DonLabs, I'd like a quote for a project.`, `Name: ${name}`];
    if (email.trim()) body.push(`Email: ${email}`);
    if (subject.trim()) body.push(`Project: ${subject}`);
    body.push(`Details: ${message}`);

    const text = body.join('\n');
    const encoded = encodeURIComponent(text);

    // Prefer the whatsapp:// URL scheme (opens app on mobile if installed), then fallback to wa.me
    const appUrl = `whatsapp://send?text=${encoded}`;
    const webUrl = buildWhatsAppUrl(WHATSAPP_NUMBER, text);

    // Try to open appUrl first (mobile). If that fails or is blocked, open webUrl in a new tab.
    let opened = false;

    try {
      // On some mobile browsers, setting location.href opens the native app
      window.location.href = appUrl;
      opened = true;
    } catch (err) {
      // ignore and try web url
    }

    // If not opened yet (or on desktop), open the web wa.me link in a new tab
    if (!opened) {
      const win = window.open(webUrl, '_blank');
        if (!win) {
          trackEvent('contact_fallback_mailto');

          // fallback: open mailto if popup blocked
          const mailSubject = encodeURIComponent(subject || 'Website project inquiry');
          const mailBody = encodeURIComponent(text);
          window.location.href = `mailto:samuelolaonipekun050@outlook.com?subject=${mailSubject}&body=${mailBody}`;
          toast({ title: 'Opening email', description: 'Could not open WhatsApp — opening your email client instead.' });
        }
    }

    // optional: reset form after a short delay
    setTimeout(() => {
      setSubmitting(false);
      window.clearTimeout(backstop);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 800);
  };

  return (
    <Section as="section" className="section-spacing container-padding bg-gradient-to-b from-background to-accent/20" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              Get In Touch
            </div>
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let's discuss your project and create something amazing together. We work with clients across Africa and globally to build professional web solutions.
            </p>
          </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 bg-gradient-to-br from-card to-accent/5 border-2 border-border rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Let's Build Together</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need a business website, e-commerce store, or custom web application, 
                we're here to help transform your vision into reality.
              </p>
            </div>
            
            <div className="space-y-3">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:shadow-hover hover:-translate-y-1 bg-gradient-to-r from-green-500/10 to-green-600/10 border-2 border-green-500/20 hover:border-green-500/40"
              >
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-muted-foreground">WhatsApp (Fastest)</p>
                  <p className="font-medium">+234 903 138 6928</p>
                </div>
              </a>

              <a 
                href="mailto:samuelolaonipekun050@outlook.com"
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:shadow-hover hover:-translate-y-1 bg-card border-2 border-border hover:border-primary/40"
              >
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-sm">samuelolaonipekun050@outlook.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border-2 border-border">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Africa (Remote)</p>
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
                Tell us about your project and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-5" onSubmit={handleSubmit} aria-busy={submitting}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-semibold">Name</Label>
                    <Input id="name" placeholder="Your name" className="border-2" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-semibold">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="border-2" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-semibold">Project Type</Label>
                  <Input id="subject" placeholder="e.g. Business Website, E-commerce Store" className="border-2" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-semibold">Project Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your business and what kind of website/app you need..."
                    className="min-h-[120px] border-2"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <LoadingButton
                  type="submit"
                  variant="hero"
                  className="w-full"
                  size="lg"
                  isLoading={submitting}
                  loadingText="Opening WhatsApp…"
                >
                  Get My Free Quote
                </LoadingButton>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Contact;