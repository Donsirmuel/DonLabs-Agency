import Skills from "@/components/Skills";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ASSETS } from "@/lib/assets";
import { useContent } from '@/lib/ContentProvider';
import Section from '@/components/Section';

// canonical will default to the current runtime URL
const About = () => {
  const navigate = useNavigate();
  const { content } = useContent();

  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO 
        title="About DonLabs — Web Development Agency"
        description="Learn about DonLabs, our approach to building web products and services. We specialize in Django, React, and modern web technologies. Based in Africa and available for remote partnerships."
  // canonical will default to the current runtime URL
  // image will default to the site's ASSETS configuration
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "DonLabs",
            "description": "DonLabs — web development agency",
            "knowsAbout": ["Django", "Python", "React", "JavaScript", "Web Development", "E-commerce"]
          }
        }}
      />

  <Section as="section" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start mb-6">
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <Avatar className="w-40 h-40">
                <AvatarImage src={ASSETS.logoFull} alt="DonLabs Logo" />
                <AvatarFallback>DL</AvatarFallback>
              </Avatar>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold mb-4">{content?.about?.heading ?? 'About DonLabs'}</h1>

              <p className="text-lg text-muted-foreground mb-4">{content?.about?.intro ?? ''}</p>

              <p className="text-md text-muted-foreground mb-6">{content?.about?.details ?? ''}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Core expertise</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Django & Django REST Framework - robust APIs & admin</li>
                <li>React & modern frontend tooling (Vite, TypeScript, Node.js)</li>
                <li>PostgreSQL, caching, background jobs</li>
                <li>Payment gateways (Paystack, Flutterwave, Stripe) & integrations</li>
                <li>Containerized deployments (Docker), CI/CD and monitoring</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">How we work</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Discovery & scope - clear milestones and deliverables</li>
                <li>Design & iterative builds - visibility and feedback every sprint</li>
                <li>Testing, launch & monitoring - smooth deployments and handover</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="hero" onClick={() => window.open('https://wa.me/2349031386928?text=Hi%20DonLabs!%20I%20would%20like%20to%20discuss%20working%20together.', '_blank')}>Let's Work Together</Button>
            <Button onClick={() => navigate('/services')}>View Services</Button>
            <Button variant="outline" onClick={() => navigate('/projects')}>See Projects</Button>
          </div>

        </div>
      </Section>

      <div id="skills">
        <Skills />
      </div>
    </main>
  );
};

export default About;
