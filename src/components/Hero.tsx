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

      <div className="max-w-6xl mx-auto w-full relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="mb-8 inline-flex items-center gap-3 text-sm font-semibold px-5 py-2.5 rounded-full bg-primary/10 backdrop-blur-sm text-primary border border-primary/20 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              Available for Projects • Lagos & Remote
            </div>

            <h1 id="home-heading" className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] mb-6 text-white hero-text-shadow">
              <span className="block mb-2">Build Websites That</span>
              <span className="block bg-gradient-to-r from-primary via-primary-glow to-cyan-400 bg-clip-text text-transparent animate-slide-up">Convert & Scale</span>
            </h1>

            <p className="text-xl text-white/90 max-w-2xl mb-10 leading-relaxed hero-text-shadow">
              Full-stack web developer crafting <strong className="text-white font-semibold">high-performance platforms</strong> for Nigerian businesses. From sleek landing pages to complex e-commerce systems.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button variant="hero" size="lg" onClick={() => window.open('https://wa.me/2349150996465?text=Hi%20Samuel!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.', '_blank')}>
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" onClick={() => navigate('/services')}>
                View Services
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/10" onClick={() => navigate('/projects')}>
                See Portfolio →
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <Server className="h-4 w-4 text-primary" />
                <span className="text-white/80 font-medium">Django + React</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <Database className="h-4 w-4 text-primary" />
                <span className="text-white/80 font-medium">PostgreSQL + APIs</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <Code2 className="h-4 w-4 text-primary" />
                <span className="text-white/80 font-medium">E-commerce Expert</span>
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