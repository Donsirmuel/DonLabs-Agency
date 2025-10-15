import { Button } from "@/components/ui/button";
import { Code2, Database, Server, Briefcase } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ASSETS } from "@/lib/assets";
import { useNavigate } from "react-router-dom";
import Section from '@/components/Section';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="min-h-screen flex items-center px-4 relative overflow-hidden"
      aria-label="Hero section introducing Samuel Olaonipekun"
      itemScope
      itemType="https://schema.org/Person"
    >
      <Section
        as="section"
        className="relative overflow-hidden bg-gradient-to-tr from-primary/10 via-transparent to-transparent"
        aria-labelledby="home-heading"
      >
        {/* Background: desktop uses CSS background image, mobile shows an <img> for better performance */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden lg:block"
          style={{ backgroundImage: `url('${ASSETS.hero}')` }}
          aria-hidden
        />
        <img src={ASSETS.heroMobile} alt="Hero background" className="absolute inset-0 w-full h-full object-cover lg:hidden" aria-hidden />
        {/* Dark overlay to improve text contrast against busy images */}
        <div className="absolute inset-0 bg-black/50 lg:bg-black/40" aria-hidden />
      {/* Decorative large SVG background for visual depth */}
      <svg className="absolute right-0 top-0 h-full w-1/2 hidden lg:block opacity-20" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="800" height="800" fill="url(#g)" rx="80" />
      </svg>

      <div className="max-w-6xl mx-auto w-full relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <div className="mb-6 inline-flex items-center gap-3 hero-badge text-sm font-medium px-4 py-2 rounded-full bg-primary/8 text-primary">
              <Database className="h-5 w-5" />
              Trusted by Nigerian Businesses & SMEs
            </div>

            <h1 id="home-heading" className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-white hero-text-shadow">
              <span className="block">We build</span>
              <span className="block headline-accent underline-animate">high-converting digital experiences</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mb-6 hero-text-shadow">
              I'm Samuel — a Lagos-based web developer and solutions architect. I design resilient web platforms and e-commerce
              experiences that increase revenue, reduce friction, and scale with your business.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium shadow-md" onClick={() => window.open('https://wa.me/2349150996465?text=Hi%20Samuel!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.', '_blank')}>
                Message on WhatsApp
              </Button>
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground" onClick={() => navigate('/services')}>
                Explore Services
              </Button>
              <Button variant="ghost" size="lg" className="border border-white/10 text-white" onClick={() => navigate('/projects')}>
                View Portfolio
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <span>Available for hire • Lagos & Remote</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                <span>Specialist: Django, Python, React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
        </Section>
    </section>
  );
};

export default Hero;