import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database, Image as ImageIcon } from "lucide-react";
import { useContent } from '@/lib/ContentProvider';
import { useState } from 'react';
import Section from '@/components/Section';
import ImageLightbox from '@/components/ImageLightbox';

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
      <button onClick={open} className="block w-full h-full p-0 m-0 cursor-zoom-in" aria-label={`Expand screenshot for ${title}`}>
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

      <ImageLightbox
        open={isOpen}
        onClose={() => setIsOpen(false)}
        imageSrc={src1920 || src1024 || src640 || imageUrl}
        imageAlt={`${title} - full preview`}
      />
    </>
  );
};

type Project = {
  title: string;
  description?: string;
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  hasLive?: boolean;
  projectType?: string;
  clientBenefit?: string;
};

const hasValidUrl = (url?: string) => !!url && url !== '#';

const ProjectActions = ({ project }: { project: Project }) => {
  const canView = (project.hasLive ?? true) && hasValidUrl(project.liveUrl);
  const canCode = hasValidUrl(project.githubUrl);

  return (
    <div className="flex flex-wrap gap-3">
      {canView ? (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer nofollow">
          <Button size="sm" className="bg-primary hover:bg-primary-hover text-primary-foreground">
            <ExternalLink className="h-4 w-4 mr-1" />
            View Project
          </Button>
        </a>
      ) : (
        <Button size="sm" variant="outline" disabled className="border-slate-700 text-slate-500">
          <ExternalLink className="h-4 w-4 mr-1" />
          View Project
        </Button>
      )}

      {canCode && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer nofollow">
          <Button size="sm" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
            <Github className="h-4 w-4 mr-1" />
            Code
          </Button>
        </a>
      )}
    </div>
  );
};

const FeatureList = ({ features }: { features?: string[] }) => {
  if (!Array.isArray(features) || features.length === 0) {
    return null;
  }

  return (
    <ul className="space-y-2 text-sm text-slate-300">
      {features.slice(0, 4).map((feature, index) => (
        <li key={index} className="flex items-start gap-2">
          <span className="text-primary mt-1">•</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};

const ValueBlock = ({ value }: { value?: string }) => {
  if (!value) return null;

  return (
    <p className="text-sm text-slate-300 bg-slate-900/70 border border-slate-800 rounded-lg p-3 leading-relaxed">
      <strong className="text-slate-100">Value:</strong> {value}
    </p>
  );
};

const FeatureSlate = ({ project }: { project: Project }) => (
  <article className="rounded-2xl border border-slate-800 bg-slate-950/90 overflow-hidden">
    <div className="grid lg:grid-cols-2">
      <div className="relative min-h-[260px] bg-slate-900/70 group">
        <ProjectMedia
          title={project.title}
          liveUrl={project.liveUrl}
          hasLive={project.hasLive}
          imageUrl={project.imageUrl}
        />
      </div>

      <div className="p-6 md:p-8 space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="bg-primary/20 text-primary border border-primary/30">Feature Slate</Badge>
          {project.projectType && (
            <Badge variant="outline" className="border-slate-700 text-slate-300">{project.projectType}</Badge>
          )}
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-100">{project.title}</h3>
          {project.description && (
            <p className="text-slate-300 leading-relaxed mt-3">{project.description}</p>
          )}
        </div>

        <FeatureList features={project.features} />
        <ValueBlock value={project.clientBenefit} />
        <ProjectActions project={project} />
      </div>
    </div>
  </article>
);

const SplitSlate = ({ project }: { project: Project }) => (
  <article className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden">
    <div className="grid lg:grid-cols-5 gap-0">
      <div className="p-6 md:p-7 lg:col-span-3 space-y-4 order-2 lg:order-1">
        <div className="flex items-center gap-2">
          <Database className="h-5 w-5 text-primary" />
          <h3 className="text-xl md:text-2xl font-semibold text-slate-100">{project.title}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge className="bg-primary/15 text-primary border border-primary/30">Split Slate</Badge>
          {project.projectType && (
            <Badge variant="outline" className="border-slate-700 text-slate-300">{project.projectType}</Badge>
          )}
        </div>

        {project.description && (
          <p className="text-slate-300 leading-relaxed">{project.description}</p>
        )}

        <FeatureList features={project.features} />
        <ValueBlock value={project.clientBenefit} />
        <ProjectActions project={project} />
      </div>

      <div className="relative min-h-[230px] lg:min-h-full bg-slate-950 group lg:col-span-2 order-1 lg:order-2">
        <ProjectMedia
          title={project.title}
          liveUrl={project.liveUrl}
          hasLive={project.hasLive}
          imageUrl={project.imageUrl}
        />
      </div>
    </div>
  </article>
);

const CompactSlate = ({ project }: { project: Project }) => (
  <article className="rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden">
    <div className="p-6 md:p-7 border-b border-slate-800">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <Badge className="bg-primary/15 text-primary border border-primary/30">Compact Slate</Badge>
        {project.projectType && (
          <Badge variant="outline" className="border-slate-700 text-slate-300">{project.projectType}</Badge>
        )}
      </div>

      <h3 className="text-xl md:text-2xl font-semibold text-slate-100">{project.title}</h3>
      {project.description && (
        <p className="text-slate-300 leading-relaxed mt-3">{project.description}</p>
      )}
    </div>

    <div className="grid md:grid-cols-3">
      <div className="relative md:col-span-1 min-h-[220px] bg-slate-900 group">
        <ProjectMedia
          title={project.title}
          liveUrl={project.liveUrl}
          hasLive={project.hasLive}
          imageUrl={project.imageUrl}
        />
      </div>

      <div className="md:col-span-2 p-6 md:p-7 space-y-4">
        <FeatureList features={project.features} />
        <ValueBlock value={project.clientBenefit} />
        <ProjectActions project={project} />
      </div>
    </div>
  </article>
);

const Projects = () => {
  const { content } = useContent();

  const projects = Array.isArray(content?.projects) ? (content.projects as Project[]) : [];

  const renderProject = (project: Project, index: number) => {
    const variant = index % 3;

    if (variant === 0) return <FeatureSlate key={index} project={project} />;
    if (variant === 1) return <SplitSlate key={index} project={project} />;
    return <CompactSlate key={index} project={project} />;
  };

  return (
    <Section as="section" className="section-spacing container-padding bg-slate-950" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold border border-primary/30">
            Portfolio
          </div>
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">Portfolio Projects</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Explore DonLabs' portfolio of real projects delivered for clients. Each entry describes the business problem, what we built (stack and features), and the measurable results or value delivered.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8 stagger-children">
          {projects.map((project, index) => renderProject(project, index))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;