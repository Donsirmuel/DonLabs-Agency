import Contact from "@/components/Contact";
import SEO from "@/components/SEO";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO 
        title="Contact Samuel Olaonipekun | Web Developer Lagos" 
        description="Get in touch with Samuel Olaonipekun for web development opportunities, collaborations, or freelance projects. Available for remote work across Nigeria and internationally." 
        // canonical will default to the current runtime URL
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Samuel Olaonipekun"
        }}
      />
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
};

export default ContactPage;
