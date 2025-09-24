import { ASSETS } from "@/lib/assets";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={ASSETS.logo} alt="logo" className="h-10 w-10 rounded-md object-cover" />
          <div>
            <div className="font-bold">Samuel Olaonipekun</div>
            <div className="text-sm text-muted-foreground">Website Developer & Designer — Lagos, Nigeria</div>
          </div>
        </div>

        <nav className="flex items-center gap-4 mt-4 md:mt-0">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link>
          <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link>
          <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">Services</Link>
          <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary">Projects</Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
        </nav>

        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <a href="https://github.com/Donsirmuel" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/samuel-olaonipekun" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://twitter.com/_donsirmuel" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-muted-foreground py-4 border-t border-border">
        © {new Date().getFullYear()} Samuel Olaonipekun. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
