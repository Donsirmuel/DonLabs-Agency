import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database, Image as ImageIcon } from "lucide-react";
import { ASSETS } from "@/lib/assets";

const Projects = () => {
  const projects = [
    {
      title: "Vendora - E-Commerce Store",
      description: "Complete online store solution with product catalog, shopping cart, secure checkout, and admin panel. Perfect example of what your business e-commerce site could look like.",
      technologies: ["E-Commerce", "Online Store", "Payment Gateway", "Inventory"],
      features: ["Product Catalog", "Shopping Cart", "Secure Payments", "Order Management"],
      githubUrl: "https://github.com/Donsirmuel/vendora",
      liveUrl: "#",
      imageUrl: ASSETS.placeholder,
      hasLive: false,
      projectType: "E-Commerce Store",
      clientBenefit: "Increase sales with professional online store"
    },
    {
      title: "Business Website Portfolio",
      description: "Professional business websites with modern design, mobile optimization, and SEO. These examples show how your business website could look and perform online.",
      technologies: ["Business Website", "Mobile-Friendly", "SEO Optimized", "Contact Forms"],
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Business Information"],
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: ASSETS.placeholder,
      hasLive: false,
      projectType: "Business Website",
      clientBenefit: "Attract more customers online"
    },
    {
      title: "Custom Web Applications",
      description: "Tailored web applications for specific business needs. From inventory management to customer portals - I build solutions that solve real business problems.",
      technologies: ["Custom Development", "Business Logic", "Database", "User Management"],
      features: ["Custom Features", "User Accounts", "Data Management", "Secure Access"],
      githubUrl: "https://github.com/Donsirmuel",
      liveUrl: "#",
      imageUrl: ASSETS.placeholder,
      hasLive: false,
      projectType: "Web Application",
      clientBenefit: "Streamline your business operations"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="projects-heading" className="text-4xl font-bold mb-4">My Recent Work & Client Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See examples of websites, e-commerce stores, and web applications I've built for businesses. 
            These projects showcase the quality and professionalism you can expect for your own project.
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