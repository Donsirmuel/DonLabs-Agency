import Hero from "@/components/Hero";
import SEO from "@/components/SEO";

const canonical = "https://donsirmuel.github.io/My-Portfolio/";

const Home = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO title="Home — Samuel Olaonipekun | Web Developer Lagos" description="Professional web developer based in Lagos, Nigeria. Building websites, e-commerce stores and web apps for local and international clients." canonical={canonical} />
      <div id="home">
        <Hero />
      </div>
    </main>
  );
};

export default Home;
