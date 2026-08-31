import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/motion";
import { useNavigate } from "react-router-dom";

// canonical left to default runtime URL

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO 
        title="DonLabs - Custom Web Development & Digital Solutions"
        description="DonLabs is a web development agency building modern websites and web apps. We focus on design, performance, and measurable results for businesses."
        keywords="DonLabs, web agency, web development, Django, React, e-commerce, digital agency"
  // canonical will default to the current runtime URL
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "DonLabs",
            "description": "DonLabs - web development agency",
            "url": "/",
            "sameAs": [
              "https://github.com/Donsirmuel",
              "https://linkedin.com/company/donlabs",
              "https://twitter.com/_donsirmuel"
            ]
          }
        }}
      />
      <div id="home">
        <Hero />
      </div>
      <div>
        <WhatWeDo />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <FAQ />
        <SectionReveal className="px-4 pb-24 pt-4">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-10 md:py-20">
            <div className="animate-soft-pulse pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent" aria-hidden />
            <div className="animate-soft-pulse pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" aria-hidden />
            <div className="animate-soft-pulse pointer-events-none absolute inset-y-8 left-1/2 hidden w-px bg-gradient-to-b from-transparent via-foreground/15 to-transparent md:block" aria-hidden />
            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/70">
                <span className="h-px w-8 bg-foreground/60" aria-hidden />
                Get started
                <span className="h-px w-8 bg-foreground/60" aria-hidden />
              </div>
              <h2 className="mb-5 text-4xl font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-6xl">
                Build the site your
                <br />
                <span className="headline-accent">business can run on</span>
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-base text-muted-foreground md:text-lg">
                Launch a web platform that works as hard as you do — fast, reliable, and built to grow with your business.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="hero" size="lg" onClick={() => navigate('/contact')}>
                  Let&apos;s talk strategy
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border bg-background text-foreground hover:bg-foreground/5"
                  onClick={() => navigate('/services')}
                >
                  Explore services
                </Button>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </main>
  );
};

export default Home;
