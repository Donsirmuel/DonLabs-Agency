import { ASSETS } from "@/lib/assets";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={ASSETS.logo} alt="DonLabs Logo" className="h-12 w-12 rounded-lg object-cover shadow-sm" />
              <div>
                <div className="font-brand font-bold text-lg">DonLabs</div>
                <div className="text-sm text-muted-foreground">Web Development Agency</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mb-6">
              Building high-performance web solutions for businesses in Lagos and beyond. 
              Specializing in Django, React, and modern full-stack development.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/Donsirmuel" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/samuel-olaonipekun" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/_donsirmuel" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all hover:scale-110"
                aria-label="Twitter Profile"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2.5">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-base mb-4">Get In Touch</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a 
                href="https://wa.me/2349031386928" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                WhatsApp: +234 903 138 6928
              </a>
              <a 
                href="mailto:samuelolaonipekun050@outlook.com" 
                className="text-muted-foreground hover:text-primary transition-colors break-words"
              >
                samuelolaonipekun050@outlook.com
              </a>
              <p className="text-muted-foreground">
                Lagos, Nigeria
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium mt-2"
              >
                Contact →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} DonLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
