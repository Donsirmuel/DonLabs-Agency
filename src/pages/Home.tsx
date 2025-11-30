import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import WhatWeDo from "@/components/WhatWeDo";
import AboutSnippet from "@/components/AboutSnippet";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import AnimatedSection from "@/components/AnimatedSection";

// canonical left to default runtime URL

const Home = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO 
        title="DonLabs — Innovate your Digital Experience"
        description="DonLabs is a web development agency building modern websites and web apps. We focus on design, performance, and measurable results for businesses."
        keywords="DonLabs, web agency, web development, Django, React, e-commerce, digital agency"
  // canonical will default to the current runtime URL
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "DonLabs",
            "description": "DonLabs — web development agency",
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
        <AnimatedSection animation="slide-in-left" delay={100}>
          <AboutSnippet />
        </AnimatedSection>
        <AnimatedSection animation="slide-in-right" delay={100}>
          <WhyChooseUs />
        </AnimatedSection>
        <AnimatedSection animation="fade-in-up" delay={100}>
          <Process />
        </AnimatedSection>
        <AnimatedSection animation="scale-in" delay={100}>
          <FAQ />
        </AnimatedSection>
        <AnimatedSection animation="fade-in-up" delay={100}>
          <Testimonials />
        </AnimatedSection>
      </div>
    </main>
  );
};

export default Home;
