import Skills from "@/components/Skills";
import SEO from "@/components/SEO";

const canonical = "https://donsirmuel.github.io/My-Portfolio/about";

const About = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO title="About — Samuel Olaonipekun" description="About Samuel Olaonipekun, a web developer and business-focused solutions architect based in Lagos, Nigeria." canonical={canonical} />
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground mb-6">
            I'm Samuel, a professional website developer and designer based in Lagos, Nigeria. I build modern,
            secure and performant websites and web applications tailored for businesses both locally and internationally.
          </p>
        </div>
      </section>

      <div id="skills">
        <Skills />
      </div>
    </main>
  );
};

export default About;
