import Skills from "@/components/Skills";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ASSETS } from "@/lib/assets";

const canonical = "https://donsirmuel.github.io/My-Portfolio/about";

const About = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background pt-20">
  <SEO title="About — Samuel Olaonipekun | Django & React Developer" description="Samuel Olaonipekun — Lagos-based web developer specialising in Django, React and PostgreSQL. I build high-converting websites and e-commerce platforms for Nigerian businesses and international clients." canonical={canonical} image="/My-Portfolio/og/profile-card.svg" />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start mb-6">
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <Avatar className="w-40 h-40">
                <AvatarImage src={ASSETS.profileImage} alt="Samuel Olaonipekun" />
                <AvatarFallback>SO</AvatarFallback>
              </Avatar>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold mb-4">About Samuel</h1>

              <p className="text-lg text-muted-foreground mb-4">
                I build web products that help businesses sell more and operate better. Based in Lagos, I specialise in
                Django backends and React frontends, with production deployments on PostgreSQL and container platforms.
              </p>

              <p className="text-md text-muted-foreground mb-6">
                My work focuses on measurable outcomes: faster page loads, reliable payment flows, and admin tools that
                save time. Recent projects include an e-commerce rebuild that increased transactions by 43% and a
                marketplace API that handled a 3x traffic spike without downtime.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Core expertise</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Django & Django REST Framework - robust APIs & admin</li>
                <li>React & modern frontend tooling (Vite, TypeScript)</li>
                <li>PostgreSQL, caching, background jobs</li>
                <li>Payment gateways (Paystack, Flutterwave, Stripe) & integrations</li>
                <li>Containerized deployments (Docker), CI/CD and monitoring</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">How I work</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Discovery & scope - clear milestones and deliverables</li>
                <li>Design & iterative builds - visibility and feedback every sprint</li>
                <li>Testing, launch & monitoring - smooth deployments and handover</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <Button onClick={() => navigate('/services')} className="bg-primary hover:bg-primary-hover text-primary-foreground">View Services</Button>
            <Button variant="outline" onClick={() => navigate('/projects')}>See Projects</Button>
            <Button onClick={() => window.open('https://wa.me/2349150996465?text=Hi%20Samuel!%20I%20would%20like%20to%20discuss%20working%20together.', '_blank')} className="bg-green-600 hover:bg-green-700 text-white">Contact</Button>
          </div>

        </div>
      </section>

      <div id="skills">
        <Skills />
      </div>
    </main>
  );
};

export default About;
