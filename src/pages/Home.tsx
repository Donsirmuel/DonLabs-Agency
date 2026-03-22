import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
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
        <AnimatedSection animation="fade-in-up">
          <WhatWeDo />
        </AnimatedSection>
        <AnimatedSection animation="slide-in-right" delay={100}>
          <WhyChooseUs />
        </AnimatedSection>
        <AnimatedSection animation="fade-in-up" delay={100}>
          <Process />
        </AnimatedSection>
        <AnimatedSection animation="fade-in-up" delay={100}>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection animation="scale-in" delay={100}>
          <FAQ />
        </AnimatedSection>
        <section className="px-4 pb-10">
          <div className="mx-auto max-w-6xl rounded-3xl border border-primary/20 bg-gradient-to-br from-slate-950 via-slate-950 to-cyan-950/20 px-6 py-14 text-center sm:px-10">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">Ready to Grow Online?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-base text-slate-300 md:text-lg">
              Work with DonLabs to build a fast, reliable web presence that supports your business today and scales with you over time.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" size="lg" onClick={() => navigate('/contact')}>
                Let&apos;s Talk Strategy
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-cyan-300/40 bg-slate-900/80 text-slate-100 hover:bg-slate-800"
                onClick={() => navigate('/services')}
              >
                Explore Services
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
