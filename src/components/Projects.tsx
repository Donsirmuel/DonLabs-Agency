import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database, Image as ImageIcon } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Vendora - E-Commerce Platform",
      description: "Full-featured e-commerce platform built with Django. Features user authentication, product catalog, shopping cart, payment integration, and comprehensive admin dashboard.",
      technologies: ["Django", "PostgreSQL", "JavaScript", "HTML", "CSS"],
      features: ["User Management", "Product Catalog", "Shopping Cart", "Admin Dashboard"],
      githubUrl: "https://github.com/Donsirmuel/vendora",
      liveUrl: "#",
      imageUrl: "/placeholder.svg",
      hasLive: false
    },
    {
      title: "E-Commerce Site",
      description: "Modern e-commerce website with responsive design and user-friendly interface. Built with Django backend and clean frontend implementation.",
      technologies: ["Django", "MySQL", "JavaScript", "HTML", "CSS"],
      features: ["Responsive Design", "Product Management", "User Authentication", "Order Processing"],
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: "/placeholder.svg",
      hasLive: false
    },
    {
      title: "Portfolio Projects",
      description: "Collection of web development projects showcasing Django expertise, API development, and full-stack capabilities. More projects coming soon!",
      technologies: ["Django", "Django REST Framework", "PostgreSQL", "JavaScript"],
      features: ["REST APIs", "Database Design", "Clean Architecture", "Test-Driven Development"],
      githubUrl: "https://github.com/Donsirmuel",
      liveUrl: "#",
      imageUrl: "/placeholder.svg",
      hasLive: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="projects-heading" className="text-4xl font-bold mb-4">Featured Django Projects & Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional Django applications showcasing web development expertise, scalable architecture, and modern backend solutions. View source code on GitHub.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card shadow-card bg-card overflow-hidden group animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              {/* Project Image */}
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={`${project.title} - Django web application developed by Samuel Olaonipekun`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {!project.hasLive && (
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      <ImageIcon className="h-3 w-3 mr-1" />
                      Screenshot
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Database className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2 text-muted-foreground">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline"
                          className="text-xs font-mono border-primary/20 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2 text-muted-foreground">Key Features</h4>
                    <ul className="text-xs space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-muted-foreground">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-primary/20 text-primary hover:bg-primary/5 hover-lift"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                    {project.hasLive ? (
                      <Button 
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground hover-lift"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live
                      </Button>
                    ) : (
                      <Button 
                        variant="outline"
                        size="sm"
                        className="flex-1 border-muted-foreground/20 text-muted-foreground cursor-not-allowed"
                        disabled
                      >
                        <ImageIcon className="h-4 w-4 mr-1" />
                        Preview
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;