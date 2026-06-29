import { ASSETS } from "@/lib/assets";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-10 border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src={ASSETS.logo} alt="DonLabs Logo" className="h-10 w-10 rounded-lg object-cover" />
              <div className="font-brand text-lg font-bold text-slate-100">DonLabs</div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              We build high-performance websites and web apps for businesses that want reliable growth online.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a 
                href="https://github.com/Donsirmuel" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="rounded-lg border border-slate-700 bg-slate-900 p-2.5 text-slate-300 transition-all hover:border-cyan-300/50 hover:text-cyan-300"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/samuel-olaonipekun" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="rounded-lg border border-slate-700 bg-slate-900 p-2.5 text-slate-300 transition-all hover:border-cyan-300/50 hover:text-cyan-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/_donsirmuel" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="rounded-lg border border-slate-700 bg-slate-900 p-2.5 text-slate-300 transition-all hover:border-cyan-300/50 hover:text-cyan-300"
                aria-label="Twitter Profile"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-slate-100">Navigation</h3>
            <nav className="flex flex-col gap-2.5">
              <Link to="/services" className="text-sm text-slate-400 transition-colors hover:text-cyan-300">
                Services
              </Link>
              <Link to="/projects" className="text-sm text-slate-400 transition-colors hover:text-cyan-300">
                Projects
              </Link>
              <Link to="/about" className="text-sm text-slate-400 transition-colors hover:text-cyan-300">
                About
              </Link>
              <Link to="/contact" className="text-sm text-slate-400 transition-colors hover:text-cyan-300">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-slate-100">Support</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a 
                href="https://wa.me/2349031386928" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-cyan-300"
              >
                WhatsApp Support
              </a>
              <a 
                href="mailto:samuelolaonipekun050@outlook.com" 
                className="break-words text-slate-400 transition-colors hover:text-cyan-300"
              >
                samuelolaonipekun050@outlook.com
              </a>
              <p className="text-slate-400">
                Lagos, Nigeria
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-slate-100">Newsletter</h3>
            <p className="mb-3 text-sm text-slate-400">Get occasional updates on new work, product releases, and useful web insights.</p>
            <div className="flex items-center gap-2">
              <Input placeholder="Email" className="border-slate-700 bg-slate-900 text-slate-100 placeholder:text-slate-500" />
              <Button className="flex flex-wrap gap-4">→</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-slate-800 py-6 text-sm text-slate-500 sm:flex-row sm:items-center">
          <p>© {currentYear} DonLabs. Built for performance, clarity, and growth.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
