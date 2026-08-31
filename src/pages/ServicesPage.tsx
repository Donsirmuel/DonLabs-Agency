import Services from "../components/Services";
import SEO from "@/components/SEO";

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO 
        title="Web Development Services | DonLabs"
        description="Premium websites, online stores, dashboards, and custom web platforms for businesses that need clearer customer journeys and smoother operations."
        // canonical will default to the current runtime URL
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Web Development Services",
          "itemListElement": [
            {
              "@type": "Service",
              "position": 1,
              "name": "Business Website Design and Development",
              "description": "Clear, fast websites for service brands and growing businesses"
            },
            {
              "@type": "Service",
              "position": 2,
              "name": "E-commerce Website Development",
              "description": "Online stores with polished product pages, reliable checkout, and practical admin tools"
            },
            {
              "@type": "Service",
              "position": 3,
              "name": "Custom Web Platform Development",
              "description": "Dashboards, booking tools, customer portals, and workflow systems"
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
