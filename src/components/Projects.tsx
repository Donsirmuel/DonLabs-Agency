import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database, Image as ImageIcon } from "lucide-react";
import { ASSETS } from "@/lib/assets";
import { useContent } from '@/lib/ContentProvider';
import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import Section from '@/components/Section';

type ProjectMediaProps = {
  title: string;
  liveUrl?: string;
  hasLive?: boolean;
  imageUrl?: string;
};
const ProjectMedia = ({ title, liveUrl, hasLive, imageUrl }: ProjectMediaProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Derive responsive sources by naming convention: name-640.png, name-1024.png, name-1920.png
  const src640 = imageUrl ? imageUrl.replace(/(\.png|\.jpg|\.jpeg)$/, '-640$1') : undefined;
  const src1024 = imageUrl ? imageUrl.replace(/(\.png|\.jpg|\.jpeg)$/, '-1024$1') : undefined;
  const src1920 = imageUrl ? imageUrl.replace(/(\.png|\.jpg|\.jpeg)$/, '-1920$1') : undefined;

  const open = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <>
      <button onClick={open} className="block w-full h-full p-0 m-0">
        <img
          src={imageUrl}
          srcSet={`${src640 ? src640 + ' 640w,' : ''}${src1024 ? src1024 + ' 1024w,' : ''}${src1920 ? src1920 + ' 1920w' : ''}`}
          sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
          alt={`${title} - project screenshot`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </button>

      <div className="absolute top-3 right-3">
        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
          <ImageIcon className="h-3 w-3 mr-1" />
          Screenshot
        </Badge>
      </div>

      {/* Lightbox modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" role="dialog" aria-modal="true">
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/60 text-white"
            onClick={() => setIsOpen(false)}
            aria-label="Close preview"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-[90vw] max-h-[90vh] overflow-auto p-4">
            <img
              src={src1920 || src1024 || src640 || imageUrl}
              alt={`${title} - full preview`}
              className="max-w-full max-h-[80vh] rounded shadow-lg"
            />
            <div className="mt-2 text-center">
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded">
                  Open live site
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Projects = () => {
  const { content } = useContent();

  const projects = Array.isArray(content?.projects) ? content.projects : [];

  return (
    <Section as="section" className="py-20 px-4 bg-muted/30" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="projects-heading" className="text-4xl font-bold mb-4">Recent Projects</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Explore some of the web applications and business solutions I've developed for clients. 
            Each project showcases different aspects of modern web development, from e-commerce platforms 
            to custom business applications, demonstrating <strong>scalable architecture, user-focused design, and robust functionality</strong>.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card shadow-card bg-card overflow-hidden group animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              {/* Project Image / Live Preview with fallback */}
              <div className="aspect-video bg-muted relative overflow-hidden">
                <ProjectMedia
                  title={project.title}
                  liveUrl={project.liveUrl}
                  hasLive={!!project.hasLive}
                  imageUrl={project.imageUrl}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                    <h4 className="text-sm font-medium mb-2 text-muted-foreground">Key Features</h4>
                    <ul className="text-xs space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-muted-foreground">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground bg-muted/30 p-2 rounded">
                      <strong>Client Benefit:</strong> {project.clientBenefit}
                    </p>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    {project.githubUrl && project.githubUrl !== '#' ? (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full border-primary/20 text-primary hover:bg-primary/5 hover-lift"
                        >
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </Button>
                      </a>
                    ) : (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 border-primary/20 text-primary/50 cursor-not-allowed"
                        disabled
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    )}

                    {project.hasLive && project.liveUrl && project.liveUrl !== '#' ? (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button 
                          size="sm"
                          className="w-full bg-primary hover:bg-primary-hover text-primary-foreground hover-lift"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live
                        </Button>
                      </a>
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

                    {/* Project details modal trigger */}
                    <div className="flex-1">
                      <ProjectDetailModal project={project} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;