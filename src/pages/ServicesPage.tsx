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
      <SEO title="Services - Web Development (NGN) | Samuel Olaonipekun" description="Professional web development services (Naira pricing) for businesses in Nigeria and beyond. Corporate sites and multiple e-commerce packages (Small, Medium, Premium) built with Django, React and PostgreSQL." canonical={canonical} structuredData={servicesStructuredData} />
      <div id="services">
        <Services />
        <PricingGrid />
      </div>
    </main>
  );
};

export default ServicesPage;
