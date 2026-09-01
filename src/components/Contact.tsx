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
import { motion } from "framer-motion";
import { StaggerItem, StaggerReveal, spring } from "@/components/motion";

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
          window.location.href = `mailto:samuel@donlabs.site?subject=${mailSubject}&body=${mailBody}`;
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
    <Section as="section" className="section-band-dark relative overflow-hidden px-4 py-16 sm:py-20 lg:py-24" aria-labelledby="contact-heading">
      <motion.div
        animate={{ opacity: [0.06, 0.18, 0.06] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Get In Touch
            </div>
            <h2 id="contact-heading" className="mb-6 text-4xl font-black uppercase leading-[0.98] text-foreground sm:text-5xl md:text-6xl">Tell Us What You Want to Build</h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Share the business goal, the kind of website or platform you need, and what is not working today. We will help you shape the next practical step.
            </p>
          </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div whileHover={{ y: -4 }} transition={spring} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3 className="mb-4 text-2xl font-bold">A Good Project Starts With Clarity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need a business website, online store, dashboard, or booking flow, we will help turn the idea into a clear scope before anyone starts building.
              </p>
            </motion.div>
            
            <StaggerReveal className="space-y-3">
              <StaggerItem>
              <motion.a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                transition={spring}
                className="flex items-center gap-4 rounded-xl border border-primary/25 bg-primary/10 p-4 transition-colors hover:border-primary/45 hover:shadow-hover"
              >
                <div className="rounded-xl bg-primary/15 p-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-muted-foreground">WhatsApp (Fastest)</p>
                  <p className="font-medium">+234 903 138 6928</p>
                </div>
              </motion.a>
              </StaggerItem>

              <StaggerItem>
              <motion.a 
                href="mailto:samuel@donlabs.site"
                whileHover={{ y: -4 }}
                transition={spring}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:shadow-hover"
              >
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-muted-foreground">Email</p>
                  <p className="break-all text-sm font-medium">samuel@donlabs.site</p>
                </div>
              </motion.a>
              </StaggerItem>
              
              <StaggerItem>
              <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Remote</p>
                </div>
              </div>
              </StaggerItem>

              <div className="flex gap-3 pt-4">
                <a href="https://github.com/Donsirmuel" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-border bg-card p-3 transition-all hover:scale-110 hover:border-primary/40">
                  <Github className="h-5 w-5 text-foreground" />
                </a>
                <a href="https://linkedin.com/in/samuel-olaonipekun" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-border bg-card p-3 transition-all hover:scale-110 hover:border-primary/40">
                  <Linkedin className="h-5 w-5 text-foreground" />
                </a>
                <a href="https://twitter.com/_donsirmuel" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-border bg-card p-3 transition-all hover:scale-110 hover:border-primary/40">
                  <Send className="h-5 w-5 text-foreground" />
                </a>
              </div>
            </StaggerReveal>
          </div>
          
          {/* Contact Form */}
          <Card className="border-border bg-card shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Get Your Free Quote</CardTitle>
              <CardDescription className="text-base">
                Tell us what you are trying to improve. We will reply with next steps, questions, or a simple recommendation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-5" onSubmit={handleSubmit} aria-busy={submitting}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-semibold">Name</Label>
                    <Input id="name" placeholder="Your name" className="border-border bg-background" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-semibold">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="border-border bg-background" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-semibold">What do you need?</Label>
                  <Input id="subject" placeholder="e.g. Website, online store, dashboard" className="border-border bg-background" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-semibold">Project Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your business, what you want visitors to do, and any deadline or budget range..."
                    className="min-h-[120px] border-border bg-background"
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
                  Send Project Details
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
