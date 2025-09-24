import { Button } from "@/components/ui/button";
import { Code2, Database, Server, Briefcase } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ASSETS } from "@/lib/assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="min-h-screen flex items-center bg-gradient-to-br from-neutral-900 via-neutral-900/80 to-neutral-800 px-4 relative overflow-hidden"
      aria-label="Hero section introducing Samuel Olaonipekun"
      itemScope
      itemType="https://schema.org/Person"
    >
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <div className="mb-6 inline-flex items-center gap-3 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium">
              <Database className="h-5 w-5" />
              Trusted by Nigerian Businesses & Startups
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-white">
              Building digital products that move businesses forward
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mb-6">
              I'm Samuel — a Lagos-based web developer and solutions architect. I build high-performance websites, e-commerce
              platforms and custom web applications designed to increase conversion, improve operations and scale with your business.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-medium" onClick={() => window.open('https://wa.me/2349150996465?text=Hi%20Samuel!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.', '_blank')}>
                Message on WhatsApp
              </Button>
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground" onClick={() => navigate('/services')}>
                Explore Services
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary" onClick={() => navigate('/projects')}>
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

          {/* Right column: profile / mockup card for visual interest */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-[420px] p-6 rounded-2xl bg-gradient-to-br from-black/40 to-white/5 border border-white/5 shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-16 h-16 border-2 border-primary">
                  <AvatarImage src={ASSETS.profileImage} alt="Samuel profile" />
                  <AvatarFallback>SO</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-lg text-white">Samuel Olaonipekun</div>
                  <div className="text-sm text-muted-foreground">Web Developer • Lagos</div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden bg-gradient-to-tr from-primary/10 to-transparent p-4">
                <div className="bg-border p-4 rounded-lg">
                  <img src={ASSETS.profileImage} alt="project snapshot" className="w-full h-36 object-cover rounded-md" />
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  Recent work: E-commerce platform for local retail — increased transactions by 43%.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;