import PricingGrid from "@/components/PricingGrid";
import SEO from "@/components/SEO";

const Pricing = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
  <SEO 
    title="Web Development Pricing | DonLabs" 
    description="DonLabs pricing for business websites, e-commerce stores, and custom web applications. View packages and request a quote." 
    // canonical will default to the current runtime URL
    // image uses ASSETS by default; override only when necessary
        structuredData={{
          "@context": "https://schema.org",
          "@type": "PriceSpecification",
          "name": "Web Development Services Pricing",
          "priceCurrency": "NGN"
        }}
      />
      <div id="pricing">
        <PricingGrid />
      </div>
    </main>
  );
};

export default Pricing;
