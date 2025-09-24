import Projects from "@/components/Projects";
import SEO from "@/components/SEO";

const canonical = "https://donsirmuel.github.io/My-Portfolio/projects";

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO title="Portfolio — Projects by Samuel Olaonipekun" description="Selected projects: e-commerce platforms, business websites and web applications built for Nigerian businesses and international clients." canonical={canonical} />
      <div id="projects">
        <Projects />
      </div>
    </main>
  );
};

export default ProjectsPage;
