import Contact from "@/components/Contact";
import SEO from "@/components/SEO";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO 
        title="Contact DonLabs | Web Development Agency" 
        description="Get in touch with DonLabs for web development projects, e-commerce, or web application work. We're available for partnerships and remote engagements." 
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
