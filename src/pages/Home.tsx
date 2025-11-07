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
        title="Samuel Olaonipekun | Web Developer Portfolio | Lagos Nigeria"
        description="Portfolio of Samuel Olaonipekun - Web developer from Lagos, Nigeria. Showcasing projects in Django, React, JavaScript, and Python. Open to freelance work and collaborations."
        keywords="Samuel Olaonipekun, web developer Lagos, Django developer, React developer, Python developer, freelance developer Nigeria"
  // canonical will default to the current runtime URL
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "mainEntity": {
            "@type": "Person",
            "name": "Samuel Olaonipekun",
            "alternateName": "Donsirmuel",
            "description": "Web Developer from Lagos, Nigeria",
            "jobTitle": "Web Developer",
            "url": "/",
            "sameAs": [
              "https://github.com/Donsirmuel",
              "https://linkedin.com/in/samuel-olaonipekun",
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
