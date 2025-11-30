import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { ASSETS } from "@/lib/assets";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navigate = useNavigate();

  const goto = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={ASSETS.logo} 
              alt="DonLabs Logo" 
              className="h-10 w-10 rounded-lg object-cover"
            />
            <span className="font-bold text-lg">DonLabs</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
            <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="hidden lg:flex items-center space-x-2">
              {/* ThemeToggle is hidden but still functional */}
              <div className="hidden">
                <ThemeToggle />
              </div>
              <Button 
                onClick={() => goto('/contact')}
                className="bg-primary hover:bg-primary-hover text-primary-foreground hover-lift"
              >
                Get a Quote
              </Button>
            </div>
            
            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* ThemeToggle is hidden but still functional */}
              <div className="hidden">
                <ThemeToggle />
              </div>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-4 mt-8">
                    <button onClick={() => goto('/')} className="text-left text-lg text-muted-foreground hover:text-primary transition-colors py-3 border-b border-border">Home</button>
                    <button onClick={() => goto('/about')} className="text-left text-lg text-muted-foreground hover:text-primary transition-colors py-3 border-b border-border">About</button>
                    <button onClick={() => goto('/services')} className="text-left text-lg text-muted-foreground hover:text-primary transition-colors py-3 border-b border-border">Services</button>
                    <button onClick={() => goto('/pricing')} className="text-left text-lg text-muted-foreground hover:text-primary transition-colors py-3 border-b border-border">Pricing</button>
                    <button onClick={() => goto('/projects')} className="text-left text-lg text-muted-foreground hover:text-primary transition-colors py-3 border-b border-border">Projects</button>
                    <button onClick={() => goto('/contact')} className="text-left text-lg text-muted-foreground hover:text-primary transition-colors py-3 border-b border-border">Contact</button>
                    <Button 
                      onClick={() => goto('/contact')}
                      className="bg-primary hover:bg-primary-hover text-primary-foreground hover-lift mt-4 w-full"
                    >
                      Get a Quote
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;