import Services from "@/components/Services";
import PricingGrid from "@/components/PricingGrid";
import SEO from "@/components/SEO";

const canonical = "https://donsirmuel.github.io/My-Portfolio/services";

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web Development Services",
  "provider": {
    "@type": "Person",
    "name": "Samuel Olaonipekun"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Service Offerings",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {"@type":"Service","name":"Corporate / Business Website"},
        "price": "180000",
        "priceCurrency": "NGN"
      },
      {
        "@type": "Offer",
        "itemOffered": {"@type":"Service","name":"Small e-commerce"},
        "price": "350000",
        "priceCurrency": "NGN"
      },
      {
        "@type": "Offer",
        "itemOffered": {"@type":"Service","name":"Medium e-commerce"},
        "price": "600000",
        "priceCurrency": "NGN"
      },
      {
        "@type": "Offer",
        "itemOffered": {"@type":"Service","name":"Premium e-commerce / Enterprise"},
        "price": "1200000",
        "priceCurrency": "NGN"
      }
    ]
  }
};

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO 
        title="Web Development Services | Samuel Olaonipekun Portfolio"
        description="Web development services offered by Samuel Olaonipekun: Django web apps, React frontends, REST APIs, and full-stack solutions. View skills and technologies I work with."
        canonical={canonical}
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
        <PricingGrid />
      </div>
    </main>
  );
};

export default ServicesPage;
