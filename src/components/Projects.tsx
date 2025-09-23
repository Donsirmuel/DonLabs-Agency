import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform built with Django. Includes user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
      technologies: ["Django", "PostgreSQL", "Stripe API", "Celery", "Redis"],
      features: ["User Management", "Payment Processing", "Inventory Management", "Order Tracking"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Task Management API",
      description: "RESTful API for task management with advanced features like team collaboration, file attachments, and real-time notifications.",
      technologies: ["Django REST Framework", "WebSockets", "PostgreSQL", "Docker"],
      features: ["REST API", "Real-time Updates", "File Upload", "Team Collaboration"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Content Management System",
      description: "Custom CMS built for content creators with drag-and-drop interface, SEO optimization, and multi-language support.",
      technologies: ["Django", "MySQL", "JavaScript", "AWS S3"],
      features: ["Content Editor", "SEO Tools", "Multi-language", "Media Management"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Django applications showcasing backend expertise and full-stack capabilities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 bg-card">
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
                      className="flex-1 border-primary/20 text-primary hover:bg-primary/5"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live
                    </Button>
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