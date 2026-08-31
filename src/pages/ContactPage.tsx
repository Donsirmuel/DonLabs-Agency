import Contact from "@/components/Contact";
import SEO from "@/components/SEO";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO 
        title="Contact DonLabs | Web Development Agency" 
        description="Contact DonLabs to discuss a business website, online store, dashboard, booking flow, or custom web platform. Share your goals and get practical next steps." 
        // canonical will default to the current runtime URL
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact DonLabs"
        }}
      />
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
};

export default ContactPage;
