import { Button } from "@/components/ui/button";
import { Code2, Database, Server, Briefcase } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ASSETS } from "@/lib/assets";
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Section from '@/components/Section';

const Hero = () => {
  const navigate = useNavigate();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(!!mq.matches);
    update();
    try {
      mq.addEventListener ? mq.addEventListener('change', update) : mq.addListener(update);
    } catch (e) {
      // ignore
    }
    return () => {
      try {
        mq.removeEventListener ? mq.removeEventListener('change', update) : mq.removeListener(update);
      } catch (e) {
        // ignore
      }
    };
  }, []);

  // Try to programmatically start the video on desktop when allowed.
  useEffect(() => {
    if (prefersReducedMotion) return;
    try {
      const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 720;
      if (isDesktop && videoRef.current) {
        // muted videos are allowed to autoplay in most browsers; attempt play as a fallback
        const p = videoRef.current.play();
        if (p && typeof p.then === 'function') {
          p.catch(() => {
            // ignore errors — browser may block autoplay despite muted setting
          });
        }
      }
    } catch (e) {
      // ignore
    }
  }, [prefersReducedMotion]);

  

  return (
    <section
      className="min-h-screen w-screen flex items-center px-4 relative overflow-hidden"
      aria-label="Hero section introducing DonLabs"
        itemScope
        itemType="https://schema.org/Organization"
    >
      <Section
        as="section"
        className="relative overflow-hidden bg-gradient-to-tr from-primary/10 via-transparent to-transparent min-h-screen w-screen flex items-center"
        aria-labelledby="home-heading"
      >
        {/* Background: desktop uses an autoplaying, muted video when allowed; mobile shows an <img> for better performance or respects reduced-motion */}
        {!prefersReducedMotion ? (
          <video
            ref={videoRef}
            className="absolute left-0 top-0 w-screen h-screen object-cover hidden lg:block"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={ASSETS.heroPosterDesktop}
            aria-hidden
            onCanPlay={() => {
              try { videoRef.current?.play().catch(()=>{}); } catch (e) {}
            }}
            onLoadedData={() => {
              try { videoRef.current?.load(); videoRef.current?.play().catch(()=>{}); } catch (e) {}
            }}
            onError={() => { /* ignore media errors for now */ }}
            onWaiting={() => { /* placeholder for buffering UI if needed */ }}
          >
            {ASSETS.heroVideoWebm && <source src={ASSETS.heroVideoWebm} type="video/webm" />}
            {ASSETS.heroVideo && <source src={ASSETS.heroVideo} type="video/mp4" />}
          </video>
        ) : (
          <img src={ASSETS.heroPosterDesktop} alt="Hero background" className="absolute inset-0 w-full h-full object-cover hidden lg:block" aria-hidden />
        )}
        <img src={ASSETS.heroPosterMobile} alt="Hero background" className="absolute inset-0 w-full h-full object-cover object-top sm:object-center lg:hidden" aria-hidden />
        {/* Dark overlay to improve text contrast against busy images */}
        <div className="absolute inset-0 bg-black/50 lg:bg-black/40" aria-hidden />
        {/* Decorative SVG removed to avoid right-side tint/gap on desktop */}

        

      <div className="max-w-6xl mx-auto w-full relative z-10 py-20 lg:py-0 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
              <div className="mb-8 inline-flex items-center gap-3 text-sm font-semibold px-5 py-2.5 rounded-full bg-primary/10 backdrop-blur-sm text-primary border border-primary/20 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              Available for Projects • Africa & Remote
            </div>

            <h1 id="home-heading" className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] mb-6 text-white hero-text-shadow">
              <span className="block mb-2">Build Websites That</span>
              <span className="block bg-gradient-to-r from-primary via-primary-glow to-cyan-400 bg-clip-text text-transparent animate-slide-up">Convert & Scale</span>
            </h1>

            <p className="text-xl text-white/90 max-w-2xl mb-10 leading-relaxed hero-text-shadow">
              DonLabs — a web development agency crafting <strong className="text-white font-semibold">high-performance digital experiences</strong> for businesses. From landing pages to complex e-commerce systems.
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