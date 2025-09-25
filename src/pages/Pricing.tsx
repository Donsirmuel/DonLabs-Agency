import PricingGrid from "@/components/PricingGrid";
import SEO from "@/components/SEO";

const canonical = "https://donsirmuel.github.io/My-Portfolio/pricing";

const Pricing = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
  <SEO title="Pricing - NGN Plans | Samuel Olaonipekun" description="Transparent Naira pricing for business websites, e-commerce, and custom web apps. Choose a plan or request a custom quote." canonical={canonical} image="/My-Portfolio/og/profile-card.svg" />
      <div id="pricing">
        <PricingGrid />
      </div>
    </main>
  );
};

export default Pricing;
