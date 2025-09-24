import { Button } from "@/components/ui/button";
import { Code2, Database, Server, Download, Briefcase } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ASSETS } from "@/lib/assets";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted px-4 relative overflow-hidden"
      aria-label="Hero section introducing Samuel Olaonipekun"
      itemScope 
      itemType="https://schema.org/Person"
    >
      {/* Background animation elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full"></div>
        <div className="animate-float absolute top-40 right-20 w-6 h-6 bg-primary/10 rounded-full" style={{animationDelay: '2s'}}></div>
        <div className="animate-float absolute bottom-40 left-20 w-3 h-3 bg-primary/30 rounded-full" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Avatar */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <Avatar className="w-32 h-32 border-4 border-primary/20 shadow-xl animate-glow">
            <AvatarImage 
              src={ASSETS.profileImage} 
              alt="Samuel Olaonipekun - Professional Django Web Developer from Lagos, Nigeria" 
              itemProp="image"
            />
            <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">SO</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="flex justify-center space-x-4 mb-8 animate-slide-up">
          <div className="p-3 bg-primary/10 rounded-lg animate-float hover-lift">
            <Database className="h-8 w-8 text-primary" />
          </div>
          <div className="p-3 bg-primary/10 rounded-lg animate-float hover-lift" style={{animationDelay: '1s'}}>
            <Server className="h-8 w-8 text-primary" />
          </div>
          <div className="p-3 bg-primary/10 rounded-lg animate-float hover-lift" style={{animationDelay: '2s'}}>
            <Code2 className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground animate-fade-in-up" itemProp="name">
          Samuel Olaonipekun
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary animate-fade-in-up" itemProp="jobTitle">
          Professional Website Developer & Designer
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up">
          Based in Lagos, Nigeria • Serving Clients Worldwide
        </p>
        
        <div className="flex items-center justify-center gap-2 mb-6 text-lg text-muted-foreground animate-fade-in-up">
          <Briefcase className="h-5 w-5 text-primary" />
          <span>Open for Business • Lagos, Nigeria • Remote Services Available</span>
        </div>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up">
          I specialize in creating modern, professional websites and web applications for businesses worldwide. 
          Based in Lagos, Nigeria, I work with clients locally and internationally to deliver high-quality web solutions. 
          From simple business websites to complex e-commerce platforms - I bring your digital vision to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium hover-lift"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            My Services
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary/5 hover-lift"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Quote
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary/5 hover-lift"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Work
          </Button>
        </div>
        
        <div className="mt-12 flex justify-center flex-wrap gap-4 text-sm animate-fade-in-up">
          <div className="tech-badge">Business Websites</div>
          <div className="tech-badge">E-commerce Stores</div>
          <div className="tech-badge">Web Applications</div>
          <div className="tech-badge">Mobile Apps (PWA)</div>
          <div className="tech-badge">Custom Solutions</div>
          <div className="tech-badge">Fast & Secure</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;