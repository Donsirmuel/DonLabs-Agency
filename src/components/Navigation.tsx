import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Code2, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Code2 className="h-5 w-5 text-primary" />
            </div>
            <span className="font-bold text-lg">Samuel Olaonipekun</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="hidden lg:flex items-center space-x-2">
              <ThemeToggle />
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary-hover text-primary-foreground hover-lift"
              >
                Hire Me
              </Button>
            </div>
            
            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-4 mt-8">
                    <button 
                      onClick={() => scrollToSection('home')}
                      className="text-left text-lg text-muted-foreground hover:text-primary transition-colors py-3 border-b border-border"
                    >
                      Home
                    </button>
                    <button 
                      onClick={() => scrollToSection('skills')}
                      className="text-left text-lg text-muted-foreground hover:text-primary transition-colors py-3 border-b border-border"
                    >
                      Skills
                    </button>
                    <button 
                      onClick={() => scrollToSection('projects')}
                      className="text-left text-lg text-muted-foreground hover:text-primary transition-colors py-3 border-b border-border"
                    >
                      Projects
                    </button>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="text-left text-lg text-muted-foreground hover:text-primary transition-colors py-3 border-b border-border"
                    >
                      Contact
                    </button>
                    <Button 
                      onClick={() => scrollToSection('contact')}
                      className="bg-primary hover:bg-primary-hover text-primary-foreground hover-lift mt-4 w-full"
                    >
                      Hire Me
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