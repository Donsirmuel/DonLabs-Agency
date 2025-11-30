import Projects from "@/components/Projects";
import SEO from "@/components/SEO";

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO 
        title="Projects Portfolio | DonLabs" 
        description="Portfolio of DonLabs projects including e-commerce sites, business websites, and web applications. Built with Django, React, and modern technologies." 
        // canonical will default to the current runtime URL
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Web Development Projects Portfolio",
          "description": "Portfolio showcase of web development projects"
        }}
      />
      <div id="projects">
        <Projects />
      </div>
    </main>
  );
};

export default ProjectsPage;
