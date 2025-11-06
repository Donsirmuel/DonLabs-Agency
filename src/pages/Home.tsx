import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import WhatWeDo from "@/components/WhatWeDo";
import AboutSnippet from "@/components/AboutSnippet";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";

const canonical = "https://donsirmuel.github.io/My-Portfolio/";

const Home = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO 
        title="Samuel Olaonipekun | Web Developer Portfolio | Lagos Nigeria"
        description="Portfolio of Samuel Olaonipekun - Web developer from Lagos, Nigeria. Showcasing projects in Django, React, JavaScript, and Python. Open to freelance work and collaborations."
        keywords="Samuel Olaonipekun, web developer Lagos, Django developer, React developer, Python developer, freelance developer Nigeria"
        canonical={canonical}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "mainEntity": {
            "@type": "Person",
            "name": "Samuel Olaonipekun",
            "alternateName": "Donsirmuel",
            "description": "Web Developer from Lagos, Nigeria",
            "jobTitle": "Web Developer",
            "url": "https://donsirmuel.github.io/My-Portfolio/",
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
        <WhatWeDo />
        <AboutSnippet />
        <WhyChooseUs />
        <Process />
        <FAQ />
        <Testimonials />
      </div>
    </main>
  );
};

export default Home;
