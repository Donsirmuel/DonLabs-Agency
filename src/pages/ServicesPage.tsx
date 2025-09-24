import Services from "@/components/Services";
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
        "itemOffered": {"@type":"Service","name":"Business Websites"},
        "price": "150000",
        "priceCurrency": "NGN"
      },
      {
        "@type": "Offer",
        "itemOffered": {"@type":"Service","name":"E-commerce Solutions"},
        "price": "300000",
        "priceCurrency": "NGN"
      },
      {
        "@type": "Offer",
        "itemOffered": {"@type":"Service","name":"Custom Web Applications"},
        "price": "500000",
        "priceCurrency": "NGN"
      }
    ]
  }
};

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO title="Services — Web Development (NGN) | Samuel Olaonipekun" description="Professional web development services (Naira pricing) for businesses in Nigeria and beyond. Business websites, e-commerce, and custom web apps." canonical={canonical} structuredData={servicesStructuredData} />
      <div id="services">
        <Services />
      </div>
    </main>
  );
};

export default ServicesPage;
