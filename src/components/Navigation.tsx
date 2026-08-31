import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ASSETS } from "@/lib/assets";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About', path: '/about' },
  ];

  const goto = (path: string) => {
    setIsOpen(false);

    if (path === '/#process-section') {
      if (location.pathname === '/') {
        document.getElementById('process-section')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          document.getElementById('process-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 250);
      }
      return;
    }

    navigate(path);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between">
          <button onClick={() => goto('/')} className="flex items-center gap-3" aria-label="Go to home page">
            <img 
              src={ASSETS.logo} 
              alt="DonLabs Logo" 
              className="h-9 w-9 rounded-lg object-cover"
            />
            <span className="font-brand text-lg font-bold text-foreground">DonLabs</span>
          </button>
          
          <div className="hidden items-center space-x-8 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => goto(item.path)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="hidden items-center space-x-2 lg:flex">
              <Button 
                onClick={() => goto('/contact')}
                className="flex flex-wrap gap-4"
              >
                Start a Project
              </Button>
            </div>
            
            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center space-x-2">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-accent">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[90vw] max-w-sm border-border bg-background text-foreground sm:max-w-md">
                  <div className="flex flex-col space-y-4 mt-8">
                    <button onClick={() => goto('/')} className="border-b border-border py-3 text-left text-lg text-muted-foreground transition-colors hover:text-primary">Home</button>
                    <button onClick={() => goto('/services')} className="border-b border-border py-3 text-left text-lg text-muted-foreground transition-colors hover:text-primary">Services</button>
                    <button onClick={() => goto('/projects')} className="border-b border-border py-3 text-left text-lg text-muted-foreground transition-colors hover:text-primary">Projects</button>
                    <button onClick={() => goto('/pricing')} className="border-b border-border py-3 text-left text-lg text-muted-foreground transition-colors hover:text-primary">Pricing</button>
                    <button onClick={() => goto('/about')} className="border-b border-border py-3 text-left text-lg text-muted-foreground transition-colors hover:text-primary">About</button>
                    <button onClick={() => goto('/contact')} className="border-b border-border py-3 text-left text-lg text-muted-foreground transition-colors hover:text-primary">Contact</button>
                    <Button 
                      onClick={() => goto('/contact')}
                      className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary-hover"
                    >
                      Start a Project
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
