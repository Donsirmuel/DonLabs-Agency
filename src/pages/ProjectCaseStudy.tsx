import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Smartphone, Monitor } from "lucide-react";
import { useState } from "react";
import SEO from "@/components/SEO";
import { useContent } from "@/lib/ContentProvider";
import { findProjectBySlug, getProjectPath } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NotFound from "@/pages/NotFound";

const hasValidUrl = (url?: string) => !!url && url !== "#";

const PreviewPlaceholder = ({ label }: { label: string }) => (
  <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-white/15 bg-slate-950/70 p-8 text-center">
    <p className="max-w-xs text-sm leading-relaxed text-slate-400">
      Add the {label} showcase image to publish this preview.
    </p>
  </div>
);

const PreviewImage = ({ src, alt, className }: { src?: string; alt: string; className?: string }) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return null;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="eager"
      onError={() => setHasError(true)}
    />
  );
};

const ProjectPreview = ({
  title,
  desktopImageUrl,
  mobileImageUrl,
}: {
  title: string;
  desktopImageUrl?: string;
  mobileImageUrl?: string;
}) => {
  const hasMobilePreview = Boolean(mobileImageUrl);

  if (!desktopImageUrl && !mobileImageUrl) {
    return (
      <div className="rounded-3xl border border-white/10 bg-slate-900 p-8 text-sm text-slate-400">
        No case-study preview image has been added for this project yet.
      </div>
    );
  }

  return (
    <div className={`grid gap-6 ${hasMobilePreview ? "lg:grid-cols-[1.4fr_0.8fr]" : ""}`}>
      <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-3 shadow-2xl shadow-black/30">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-xs text-slate-400">
          <span className="h-3 w-3 rounded-full bg-red-400/90" />
          <span className="h-3 w-3 rounded-full bg-amber-300/90" />
          <span className="h-3 w-3 rounded-full bg-emerald-300/90" />
          <span className="ml-2 truncate">{title}</span>
        </div>
        <div className="overflow-hidden rounded-b-2xl">
          <PreviewImage
            src={desktopImageUrl}
            alt={`${title} desktop preview`}
            className="h-full w-full object-cover"
          />
          {!desktopImageUrl && <PreviewPlaceholder label="desktop" />}
        </div>

      </div>

      {hasMobilePreview && (
        <div className="flex items-center justify-center rounded-3xl border border-white/10 bg-slate-900/70 p-4">
          <div className="w-full max-w-[280px]">
            <div className="mx-auto rounded-[2.25rem] border-[10px] border-slate-950 bg-slate-950 shadow-2xl shadow-black/30">
              <div className="aspect-[9/19] overflow-hidden rounded-[1.5rem] bg-slate-900">
                <PreviewImage
                  src={mobileImageUrl}
                  alt={`${title} mobile preview`}
                  className="h-full w-full object-cover"
                />
                {!mobileImageUrl && <PreviewPlaceholder label="mobile" />}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1">
                <Smartphone className="h-3.5 w-3.5" />
                Mobile
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectCaseStudy = () => {
  const { slug } = useParams();
  const { content } = useContent();

  const projects = Array.isArray(content?.projects) ? content.projects : [];
  const project = slug ? findProjectBySlug(projects, slug) : undefined;

  if (!slug) {
    return <Navigate to="/projects" replace />;
  }

  if (!project) {
    return <NotFound />;
  }

  const projectPath = getProjectPath(project);
  const liveUrl = hasValidUrl(project.liveUrl) ? project.liveUrl : undefined;
  const description = project.description;
  const headline = `${project.title} | DonLabs Case Study`;

  return (
    <main className="min-h-screen bg-slate-950 pt-20 text-slate-100">
      <SEO
        title={headline}
        description={description}
        url={typeof window !== "undefined" ? `${window.location.origin}${projectPath}` : projectPath}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: project.title,
          description,
          url: projectPath,
          mainEntity: {
            "@type": "CreativeWork",
            name: project.title,
            description,
          },
        }}
      />

      <section className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
            <Button asChild variant="ghost" size="sm" className="pl-0 text-slate-300 hover:text-white">
              <Link to="/projects">
                <ArrowLeft className="h-4 w-4" />
                Back to projects
              </Link>
            </Button>
            {project.projectType && <Badge variant="outline" className="border-primary/20 bg-primary/10 text-primary">{project.projectType}</Badge>}
            {project.clientBenefit && <Badge variant="secondary" className="bg-white/5 text-slate-200">{project.clientBenefit}</Badge>}
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Project spotlight
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                  {description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  Mobile responsive
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  SEO-ready structure
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  Simplified enquiries
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {liveUrl ? (
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground shadow-md shadow-primary/20 hover:shadow-hover hover:translate-y-[-1px]">
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer nofollow">
                      <ExternalLink className="h-4 w-4" />
                      View Live Website
                    </a>
                  </Button>
                ) : (
                  <Button size="lg" disabled className="bg-slate-800 text-slate-400">
                    <ExternalLink className="h-4 w-4" />
                    Live website unavailable
                  </Button>
                )}

                <Button asChild size="lg" variant="outline" className="border-primary/30 bg-slate-900/80 text-primary hover:bg-slate-900/80 hover:text-primary-hover">
                  <Link to="/contact">
                    <ArrowRight className="h-4 w-4" />
                    Need something similar?
                  </Link>
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">What this gives your business</p>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                  <p className="text-sm font-medium text-white">A stronger first impression</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">
                    Visitors see a polished brand, clear services, and a site that feels trustworthy from the first glance.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                  <p className="text-sm font-medium text-white">Less friction for enquiries</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">
                    People can quickly understand what you offer, then move straight to booking or contacting you.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                  <p className="text-sm font-medium text-white">A page you can share anywhere</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">
                    Use this link in messages, proposals, or social posts when you want to show a similar result.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ProjectPreview
          title={project.title}
          desktopImageUrl={project.caseStudyDesktopImageUrl}
          mobileImageUrl={project.caseStudyMobileImageUrl}
        />
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-400">What the website includes</p>
          <ul className="mt-5 space-y-3">
            {(Array.isArray(project.features) ? project.features : []).map((feature) => (
              <li key={feature} className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-slate-200">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-300" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Why it works</p>
            <p className="mt-4 text-lg leading-relaxed text-slate-200">
              {project.clientBenefit || "This project is designed to make the business look credible, get found more easily, and turn visitors into enquiries."}
            </p>
          </div>

          <div className="rounded-3xl border border-primary/15 bg-primary/5 p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-primary/80">Need something similar?</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Book a free consultation.</h2>
            <p className="mt-3 text-slate-300">
              We can turn a salon, studio, or service business into a clear, polished online presence that makes enquiries easier.
            </p>
            <div className="mt-5">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground shadow-md shadow-primary/20 hover:shadow-hover hover:translate-y-[-1px]">
                <Link to="/contact">
                  Book a free consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectCaseStudy;
