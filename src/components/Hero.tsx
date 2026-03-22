import { Button } from "@/components/ui/button";
import { ArrowRight, Gauge, Layers3, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from '@/components/Section';
import { ASSETS } from "@/lib/assets";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Section
      as="section"
      className="relative isolate min-h-screen overflow-hidden bg-slate-950 px-4 pb-14 pt-24 sm:px-8"
      aria-label="Hero section introducing DonLabs"
      aria-labelledby="home-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
        <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[78vh] w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.25fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
            <Sparkles className="h-3.5 w-3.5" />
            Open for New Projects
          </div>

          <h1 id="home-heading" className="mb-6 text-5xl font-extrabold leading-[1.02] text-slate-50 sm:text-6xl lg:text-7xl">
            <span className="block">Websites That</span>
            <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent">Convert</span>
            <span className="block">and Scale</span>
            <span className="block">With You.</span>
          </h1>

          <p className="mb-10 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            We build fast, reliable websites and web apps for modern businesses. Our focus is clean design, strong performance, and measurable growth.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="hero"
              size="lg"
              onClick={() => document.getElementById('process-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Process
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 bg-slate-900/70 text-slate-100 hover:bg-slate-800"
              onClick={() => navigate('/services')}
            >
              Explore Services
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-xs text-slate-300 sm:text-sm">
            <span className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5">Django + React Websites</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5">Conversion-first Systems</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5">Fast Performance</span>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-5 shadow-2xl shadow-cyan-950/20">
          <div className="mb-5 h-72 overflow-hidden rounded-xl border border-slate-800">
            <img
              src={ASSETS.heroPosterDesktop}
              alt="DonLabs hero showcase"
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 rounded-xl border border-slate-800 bg-slate-900/80 p-4">
            <div>
              <p className="mb-1 text-[10px] uppercase tracking-widest text-cyan-200/80">Success Rate</p>
              <p className="text-2xl font-bold text-slate-100">98.4%</p>
            </div>
            <div>
              <p className="mb-1 text-[10px] uppercase tracking-widest text-cyan-200/80">Turnaround Period</p>
              <p className="text-2xl font-bold text-slate-100">2-6 Weeks Avg</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
            <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2">
              <Gauge className="h-4 w-4 text-cyan-300" />
              Core Web Vitals
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2">
              <Layers3 className="h-4 w-4 text-cyan-300" />
              Scalable Systems
            </div>
          </div>
          <Button
            variant="ghost"
            className="mt-5 w-full justify-between rounded-lg border border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-800"
            onClick={() => navigate('/projects')}
          >
            View Recent Projects
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;