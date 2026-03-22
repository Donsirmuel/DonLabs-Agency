import Services from "../components/Services";
import SEO from "@/components/SEO";

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO 
        title="Web Development Services | DonLabs"
        description="Web development services by DonLabs: Django web apps, React frontends, REST APIs, and full-stack solutions for businesses."
        // canonical will default to the current runtime URL
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Web Development Services",
          "itemListElement": [
            {
              "@type": "Service",
              "position": 1,
              "name": "Django Web Development",
              "description": "Building web applications with Django framework"
            },
            {
              "@type": "Service",
              "position": 2,
              "name": "React Development",
              "description": "Creating interactive user interfaces with React"
            },
            {
              "@type": "Service",
              "position": 3,
              "name": "Full Stack Development",
              "description": "End-to-end web application development"
            }
          ]
        }}
      />
      <div id="services">
        <Services />
      </div>
    </main>
  );
};

export default ServicesPage;
