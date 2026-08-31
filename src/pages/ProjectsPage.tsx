import Projects from "@/components/Projects";
import SEO from "@/components/SEO";

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO 
        title="Selected Website and Web Platform Projects | DonLabs" 
        description="Selected DonLabs projects across business websites, online stores, portfolios, SaaS tools, and web platforms built for clarity, speed, and business outcomes." 
        // canonical will default to the current runtime URL
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "DonLabs Selected Work",
          "description": "Case-study style showcase of websites, online stores, and web platforms"
        }}
      />
      <div id="projects">
        <Projects />
      </div>
    </main>
  );
};

export default ProjectsPage;
