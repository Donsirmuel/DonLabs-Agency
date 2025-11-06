import PricingGrid from "@/components/PricingGrid";
import SEO from "@/components/SEO";

const canonical = "https://donsirmuel.github.io/My-Portfolio/pricing";

const Pricing = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
  <SEO 
        title="Web Development Pricing | Samuel Olaonipekun" 
        description="Affordable web development pricing in Naira for business websites, e-commerce stores, and custom web applications. View packages and request a quote." 
        canonical={canonical} 
        image="/My-Portfolio/og/profile-card.svg"
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
