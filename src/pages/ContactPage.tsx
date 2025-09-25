import Contact from "@/components/Contact";
import SEO from "@/components/SEO";

const canonical = "https://donsirmuel.github.io/My-Portfolio/contact";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO title="Contact - Hire Samuel Olaonipekun" description="Get in touch with Samuel for web development services in Nigeria and remotely. Contact for quotes and consultations." canonical={canonical} />
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
};

export default ContactPage;
