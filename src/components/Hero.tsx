import { Button } from "@/components/ui/button";
import { Code2, Database, Server } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-8">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Database className="h-8 w-8 text-primary" />
          </div>
          <div className="p-3 bg-primary/10 rounded-lg">
            <Server className="h-8 w-8 text-primary" />
          </div>
          <div className="p-3 bg-primary/10 rounded-lg">
            <Code2 className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
          Django Developer
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Full-Stack Developer with Backend Expertise
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Specialized in building robust, scalable web applications with Django. 
          Strong backend foundation with practical frontend skills.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium"
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary/5"
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="mt-12 flex justify-center space-x-8 text-sm text-muted-foreground">
          <div className="tech-badge">Python</div>
          <div className="tech-badge">Django</div>
          <div className="tech-badge">PostgreSQL</div>
          <div className="tech-badge">REST APIs</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;