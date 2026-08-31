import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Database, Image as ImageIcon, ArrowRight } from "lucide-react";
import { useContent } from '@/lib/ContentProvider';
import { useState } from 'react';
import Section from '@/components/Section';
import ImageLightbox from '@/components/ImageLightbox';
import { Link } from "react-router-dom";
import { getProjectPath } from "@/lib/projects";
import { motion } from "framer-motion";
import { StaggerItem, StaggerReveal, spring } from "@/components/motion";

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
      <button onClick={open} className="block h-full w-full cursor-zoom-in p-0 m-0" aria-label={`Expand screenshot for ${title}`}>
        <img
          src={imageUrl}
          srcSet={`${src640 ? src640 + ' 640w,' : ''}${src1024 ? src1024 + ' 1024w,' : ''}${src1920 ? src1920 + ' 1920w' : ''}`}
          sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
          alt={`${title} - project screenshot`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="eager"
        />
      </button>

      <div className="absolute top-3 right-3">
        <Badge variant="secondary" className="border border-border bg-background/80 text-foreground backdrop-blur-sm">
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
  liveUrl?: string;
  imageUrl?: string;
  hasLive?: boolean;
  projectType?: string;
  clientBenefit?: string;
};

const hasValidUrl = (url?: string) => !!url && url !== '#';

const ProjectActions = ({ project }: { project: Project }) => {
  const canView = (project.hasLive ?? true) && hasValidUrl(project.liveUrl);
  const projectPath = getProjectPath(project);

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button
        asChild
        size="sm"
        className="w-full text-primary-foreground shadow-md shadow-primary/20 hover:translate-y-[-1px] hover:shadow-hover sm:w-auto"
      >
        <Link to={projectPath}>
          <ArrowRight className="h-4 w-4 mr-1" />
          View details
        </Link>
      </Button>

      {canView ? (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer nofollow">
          <Button
            size="sm"
            variant="outline"
            className="w-full border-border bg-background text-foreground hover:border-primary/40 hover:bg-foreground/5 sm:w-auto"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            Visit
          </Button>
        </a>
      ) : (
        null
      )}
    </div>
  );
};

const FeatureList = ({ features }: { features?: string[] }) => {
  if (!Array.isArray(features) || features.length === 0) {
    return null;
  }

  return (
    <ul className="space-y-2 text-sm text-muted-foreground">
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
    <p className="rounded-xl border border-border bg-background p-4 text-sm leading-relaxed text-muted-foreground">
      <strong className="text-foreground">Outcome:</strong> {value}
    </p>
  );
};

const FeatureSlate = ({ project }: { project: Project }) => (
  <motion.article whileHover={{ y: -5 }} transition={spring} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-colors hover:border-primary/35">
    <div className="grid lg:grid-cols-2">
      <div className="group relative min-h-[220px] bg-background sm:min-h-[260px]">
        <ProjectMedia
          title={project.title}
          liveUrl={project.liveUrl}
          hasLive={project.hasLive}
          imageUrl={project.imageUrl}
        />
      </div>

      <div className="space-y-5 p-5 sm:p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2">
          {project.projectType && (
            <Badge variant="outline" className="border-primary/20 bg-primary/10 text-primary">{project.projectType}</Badge>
          )}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground md:text-3xl">{project.title}</h3>
          {project.description && (
            <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>
          )}
        </div>

        <FeatureList features={project.features} />
        <ValueBlock value={project.clientBenefit} />
        <ProjectActions project={project} />
      </div>
    </div>
  </motion.article>
);

const SplitSlate = ({ project }: { project: Project }) => (
  <motion.article whileHover={{ y: -5 }} transition={spring} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-colors hover:border-primary/35">
    <div className="grid gap-0 lg:grid-cols-5">
      <div className="order-2 space-y-4 p-5 sm:p-6 md:p-7 lg:order-1 lg:col-span-3">
        <div className="flex items-center gap-2">
          <Database className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-semibold text-foreground md:text-2xl">{project.title}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.projectType && (
          <Badge variant="outline" className="border-primary/20 bg-primary/10 text-primary">{project.projectType}</Badge>
          )}
        </div>

        {project.description && (
          <p className="leading-relaxed text-muted-foreground">{project.description}</p>
        )}

        <FeatureList features={project.features} />
        <ValueBlock value={project.clientBenefit} />
        <ProjectActions project={project} />
      </div>

      <div className="group relative order-1 min-h-[220px] bg-background lg:order-2 lg:col-span-2 lg:min-h-full">
        <ProjectMedia
          title={project.title}
          liveUrl={project.liveUrl}
          hasLive={project.hasLive}
          imageUrl={project.imageUrl}
        />
      </div>
    </div>
  </motion.article>
);

const CompactSlate = ({ project }: { project: Project }) => (
  <motion.article whileHover={{ y: -5 }} transition={spring} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-colors hover:border-primary/35">
    <div className="border-b border-border p-5 sm:p-6 md:p-7">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {project.projectType && (
          <Badge variant="outline" className="border-primary/20 bg-primary/10 text-primary">{project.projectType}</Badge>
        )}
      </div>

      <h3 className="text-xl font-semibold text-foreground md:text-2xl">{project.title}</h3>
      {project.description && (
        <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>
      )}
    </div>

    <div className="grid md:grid-cols-3">
      <div className="group relative min-h-[220px] bg-background md:col-span-1">
        <ProjectMedia
          title={project.title}
          liveUrl={project.liveUrl}
          hasLive={project.hasLive}
          imageUrl={project.imageUrl}
        />
      </div>

      <div className="space-y-4 p-5 sm:p-6 md:col-span-2 md:p-7">
        <FeatureList features={project.features} />
        <ValueBlock value={project.clientBenefit} />
        <ProjectActions project={project} />
      </div>
    </div>
  </motion.article>
);

const Projects = () => {
  const { content } = useContent();

  const projects = Array.isArray(content?.projects) ? (content.projects as Project[]) : [];

  const renderProject = (project: Project, index: number) => {
    const variant = index % 3;

    if (variant === 0) return <StaggerItem key={index}><FeatureSlate project={project} /></StaggerItem>;
    if (variant === 1) return <StaggerItem key={index}><SplitSlate project={project} /></StaggerItem>;
    return <StaggerItem key={index}><CompactSlate project={project} /></StaggerItem>;
  };

  return (
    <Section as="section" className="section-band-dark relative overflow-hidden px-4 py-16 sm:py-20 lg:py-24" aria-labelledby="projects-heading">
      <motion.div
        animate={{ opacity: [0.06, 0.18, 0.06] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Portfolio
          </div>
          <h2 id="projects-heading" className="mb-6 text-4xl font-black uppercase leading-[0.98] text-foreground sm:text-5xl md:text-6xl">Selected Work</h2>
          <p className="mx-auto max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A closer look at websites, stores, and web platforms we have shaped for clearer presentation, smoother customer journeys, and stronger business operations.
          </p>
        </div>

        <StaggerReveal className="space-y-6 md:space-y-8">
          {projects.map((project, index) => renderProject(project, index))}
        </StaggerReveal>
      </div>
    </Section>
  );
};

export default Projects;
