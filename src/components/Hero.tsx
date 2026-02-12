import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Code2, Database, Server } from "lucide-react";
import { ASSETS } from "@/lib/assets";
import { useNavigate } from "react-router-dom";
import Section from '@/components/Section';

const Hero = () => {
  const navigate = useNavigate();

  const typewriterText = useMemo(() => {
    const line1Prefix = "DonLabs is a web and software development agency building ";
    const line1Bold = "fast, secure and scalable";
    const line1Suffix = " digital solutions for modern businesses.";
    const line2 = "From high-converting landing pages to complex e-commerce systems, We help brands grow online with confidence.";
    return { line1Prefix, line1Bold, line1Suffix, line2 };
  }, []);

  const totalTypeLength = useMemo(() => {
    return (
      typewriterText.line1Prefix.length +
      typewriterText.line1Bold.length +
      typewriterText.line1Suffix.length +
      typewriterText.line2.length
    );
  }, [typewriterText]);

  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setTypedCount(0);
    const speed = 28; // ms per character
    const interval = window.setInterval(() => {
      setTypedCount((prev) => {
        if (prev >= totalTypeLength) {
          window.clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, speed);

    return () => window.clearInterval(interval);
  }, [totalTypeLength]);

  const getVisibleText = (text: string, count: number) => {
    if (count <= 0) return "";
    return text.slice(0, Math.min(text.length, count));
  };
  return (
    <section
      className="min-h-screen w-full flex items-center relative overflow-hidden"
      aria-label="Hero section introducing DonLabs"
        itemScope
        itemType="https://schema.org/Organization"
    >
      <Section
        as="section"
        className="relative overflow-hidden min-h-screen w-full flex items-center"
        aria-labelledby="home-heading"
      >
        {/* Background: responsive imagery optimized for LCP */}
        <picture className="absolute inset-0 w-full h-full">
          <source media="(min-width: 1024px)" srcSet={`${ASSETS.heroPosterDesktop}?w=1920 1920w, ${ASSETS.heroPosterDesktop}?w=1024 1024w`} sizes="100vw" />
          <source media="(max-width: 1023px)" srcSet={`${ASSETS.heroPosterMobile}?w=640 640w`} sizes="100vw" />
          <img 
            src={ASSETS.heroPosterDesktop} 
            alt="Hero background" 
            className="absolute inset-0 w-full h-full object-cover object-center" 
            fetchPriority="high"
            loading="eager"
            aria-hidden 
          />
        </picture>
        {/* Dark overlay to improve text contrast against busy images */}
        <div className="absolute inset-0 bg-black/65 lg:bg-black/55" aria-hidden />
        {/* Decorative SVG removed to avoid right-side tint/gap on desktop */}



          <div className="max-w-6xl mx-auto w-full relative z-10 py-20 lg:py-0 min-h-screen flex items-center px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
              <div className="mb-8 inline-flex items-center gap-3 text-sm font-semibold px-5 py-2.5 rounded-full bg-primary/10 backdrop-blur-sm text-primary border border-primary/20 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              Available for Projects • Africa & Remote
            </div>

            <h1 id="home-heading" className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] mb-6 text-white hero-text-shadow">
              <span className="block mb-2">Websites That Convert</span>
              <span className="block bg-gradient-to-r from-white/95 via-white/80 to-blue-300 bg-clip-text text-transparent animate-slide-up">and Scale With You</span>
            </h1>

            <p className="text-xl text-white/90 max-w-2xl mb-10 leading-relaxed hero-text-shadow">
              <span className="hero-typewriter" aria-label={`${typewriterText.line1Prefix}${typewriterText.line1Bold}${typewriterText.line1Suffix} ${typewriterText.line2}`} role="text">
                {(() => {
                  let remaining = typedCount;
                  const line1PrefixVisible = getVisibleText(typewriterText.line1Prefix, remaining);
                  remaining -= typewriterText.line1Prefix.length;
                  const line1BoldVisible = getVisibleText(typewriterText.line1Bold, remaining);
                  remaining -= typewriterText.line1Bold.length;
                  const line1SuffixVisible = getVisibleText(typewriterText.line1Suffix, remaining);
                  remaining -= typewriterText.line1Suffix.length;
                  const line2Visible = getVisibleText(typewriterText.line2, remaining);

                  return (
                    <>
                      {line1PrefixVisible}
                      <strong className="text-white font-semibold">{line1BoldVisible}</strong>
                      {line1SuffixVisible}
                      <span className="block mt-2">{line2Visible}</span>
                    </>
                  );
                })()}
              </span>
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button variant="hero" size="lg" onClick={() => window.open('https://wa.me/2349031386928?text=Hi%20DonLabs!%20I%20would%20like%20to%20discuss%20a%20project.', '_blank')}>
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