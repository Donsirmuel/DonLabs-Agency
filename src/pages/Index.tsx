import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />
      
      <div id="home">
        <Hero />
      </div>
      
      <div id="services">
        <Services />
      </div>
      
      <div id="skills">
        <Skills />
      </div>
      
      <div id="projects">
        <Projects />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
