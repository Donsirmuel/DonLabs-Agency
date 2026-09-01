import { ASSETS } from "@/lib/assets";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-10 border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src={ASSETS.logo} alt="DonLabs Logo" className="h-10 w-10 rounded-lg object-cover" />
              <div className="font-brand text-lg font-bold text-foreground">DonLabs</div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              We build high-performance websites and web apps for businesses that want reliable growth online.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a 
                href="https://github.com/Donsirmuel" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="rounded-lg border border-border bg-card p-2.5 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/samuel-olaonipekun" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="rounded-lg border border-border bg-card p-2.5 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/_donsirmuel" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="rounded-lg border border-border bg-card p-2.5 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                aria-label="Twitter Profile"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-foreground">Navigation</h3>
            <nav className="flex flex-col gap-2.5">
              <Link to="/services" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Services
              </Link>
              <Link to="/projects" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Projects
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                About
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-foreground">Support</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a 
                href="https://wa.me/2349031386928" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                WhatsApp Support
              </a>
              <a 
                href="mailto:samuel@donlabs.site" 
                className="break-words text-muted-foreground transition-colors hover:text-primary"
              >
                samuel@donlabs.site
              </a>
              <p className="text-muted-foreground">
                Lagos, Nigeria
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-foreground">Newsletter</h3>
            <p className="mb-3 text-sm text-muted-foreground">Get occasional updates on new work, product releases, and useful web insights.</p>
            <div className="flex items-center gap-2">
              <Input placeholder="Email" className="border-border bg-card text-foreground placeholder:text-muted-foreground" />
              <Button className="flex flex-wrap gap-4">→</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border py-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {currentYear} DonLabs. Built for performance, clarity, and growth.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
