import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Smartphone } from "lucide-react";
import { useState } from "react";
import SEO from "@/components/SEO";
import { useContent } from "@/lib/ContentProvider";
import { findProjectBySlug, getProjectPath } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NotFound from "@/pages/NotFound";
import { motion } from "framer-motion";
import { StaggerItem, StaggerReveal, spring } from "@/components/motion";

const hasValidUrl = (url?: string) => !!url && url !== "#";

const PreviewPlaceholder = ({ label }: { label: string }) => (
  <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-border bg-background p-8 text-center">
    <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
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
      <div className="rounded-3xl border border-border bg-card p-8 text-sm text-muted-foreground">
        No case-study preview image has been added for this project yet.
      </div>
    );
  }

  return (
    <div className={`grid gap-6 ${hasMobilePreview ? "lg:grid-cols-[1.4fr_0.8fr]" : ""}`}>
      <motion.div whileHover={{ y: -4 }} transition={spring} className="rounded-3xl border border-border bg-card p-3 shadow-2xl shadow-black/30">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3 text-xs text-muted-foreground">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
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

      </motion.div>

      {hasMobilePreview && (
        <motion.div whileHover={{ y: -4 }} transition={spring} className="flex items-center justify-center rounded-3xl border border-border bg-card p-4">
          <div className="w-full max-w-[280px]">
            <div className="mx-auto rounded-[2.25rem] border-[10px] border-background bg-background shadow-2xl shadow-black/30">
              <div className="aspect-[9/19] overflow-hidden rounded-[1.5rem] bg-card">
                <PreviewImage
                  src={mobileImageUrl}
                  alt={`${title} mobile preview`}
                  className="h-full w-full object-cover"
                />
                {!mobileImageUrl && <PreviewPlaceholder label="mobile" />}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Smartphone className="h-3.5 w-3.5" />
                Mobile
              </span>
            </div>
          </div>
        </motion.div>
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
  const projectType = project.projectType || "Web platform";
  const projectFeatures = Array.isArray(project.features) ? project.features : [];
  const projectTypeLower = projectType.toLowerCase();
  const isCommerceProject = projectTypeLower.includes("commerce") || projectTypeLower.includes("store") || projectTypeLower.includes("marketplace");
  const isContentProject = projectTypeLower.includes("content") || projectTypeLower.includes("portfolio");
  const isSaasProject = projectTypeLower.includes("saas");
  const changedText = isCommerceProject
    ? "We shaped the store around easier product browsing, clearer buying decisions, reliable checkout, and simpler order management."
    : isContentProject
      ? "We shaped the experience around clearer storytelling, organised content, faster browsing, and easier updates for the team."
      : isSaasProject
        ? "We shaped the product around a clearer user flow, useful dashboards, safer request handling, and a launch-ready interface."
        : "We shaped the website around a clearer offer, stronger first impression, smoother user journey, and practical tools behind the scenes.";
  const outcomeText = isCommerceProject
    ? "The business gets a storefront that feels more trustworthy to shoppers and easier to operate after launch."
    : isContentProject
      ? "The brand gets a sharper digital presence that is easier to share, update, and understand at a glance."
      : isSaasProject
        ? "Users get a more useful product experience, while the business gets a stronger foundation for onboarding and growth."
        : "Visitors understand the business faster, and the team gets a web presence that is easier to maintain and improve.";
  const impactCards = [
    {
      title: "The challenge",
      text: project.clientBenefit || "The project needed a sharper digital experience that made the offer easier to understand and the next step easier to take.",
    },
    {
      title: "What changed",
      text: changedText,
    },
    {
      title: "Why it matters",
      text: outcomeText,
    },
  ];
  const proofPoints = [
    `${projectType} delivery`,
    "Mobile-first experience",
    "Conversion-focused structure",
  ];

  return (
    <main className="min-h-screen bg-background pt-20 text-foreground">
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

      <section className="relative overflow-hidden border-b border-border bg-background">
        <motion.div
          animate={{ opacity: [0.06, 0.18, 0.06] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent"
          aria-hidden
        />
        <motion.div
          animate={{ opacity: [0.04, 0.13, 0.04] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
          aria-hidden
        />
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
            <Button asChild variant="ghost" size="sm" className="pl-0 text-muted-foreground hover:text-foreground">
              <Link to="/projects">
                <ArrowLeft className="h-4 w-4" />
                Back to projects
              </Link>
            </Button>
            {project.projectType && <Badge variant="outline" className="border-primary/20 bg-primary/10 text-primary">{project.projectType}</Badge>}
            {project.clientBenefit && <Badge variant="secondary" className="border border-border bg-card text-foreground">Case study</Badge>}
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Project spotlight
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-black uppercase leading-[0.98] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 text-sm text-muted-foreground">
                {proofPoints.map((point) => (
                  <span key={point} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 sm:px-4">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {point}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {liveUrl ? (
                  <Button asChild size="lg" className="w-full text-primary-foreground shadow-md shadow-primary/20 hover:translate-y-[-1px] hover:shadow-hover sm:w-auto">
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer nofollow">
                      <ExternalLink className="h-4 w-4" />
                      View Live Website
                    </a>
                  </Button>
                ) : (
                  <Button size="lg" disabled className="w-full bg-card text-muted-foreground sm:w-auto">
                    <ExternalLink className="h-4 w-4" />
                    Live website unavailable
                  </Button>
                )}

                <Button asChild size="lg" variant="outline" className="w-full border-border bg-card text-foreground hover:border-primary/40 hover:bg-foreground/5 sm:w-auto">
                  <Link to="/contact">
                    <ArrowRight className="h-4 w-4" />
                    Need something similar?
                  </Link>
                </Button>
              </div>
            </div>

            <motion.div whileHover={{ y: -4 }} transition={spring} className="rounded-3xl border border-border bg-card p-5 text-sm text-muted-foreground sm:p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Project impact</p>
              <div className="mt-5 space-y-4">
                {impactCards.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border bg-background px-4 py-3">
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <ProjectPreview
          title={project.title}
          desktopImageUrl={project.caseStudyDesktopImageUrl}
          mobileImageUrl={project.caseStudyMobileImageUrl}
        />
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div whileHover={{ y: -4 }} transition={spring} className="rounded-3xl border border-border bg-card p-5 sm:p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">What the website includes</p>
          <StaggerReveal className="mt-5 space-y-3">
            {projectFeatures.map((feature) => (
              <StaggerItem key={feature}>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-background px-4 py-3 text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                  <span>{feature}</span>
                </div>
              </StaggerItem>
            ))}
            {projectFeatures.length === 0 && (
              <StaggerItem>
                <div className="rounded-2xl border border-border bg-background px-4 py-4 text-muted-foreground">
                  Feature details are being prepared for this case study.
                </div>
              </StaggerItem>
            )}
          </StaggerReveal>
        </motion.div>

        <div className="space-y-6">
          <motion.div whileHover={{ y: -4 }} transition={spring} className="rounded-3xl border border-border bg-card p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Outcome</p>
            <p className="mt-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
              {project.clientBenefit || "This project solved a real business problem by making the brand look more credible, the experience easier to use, and the next step clearer for visitors."}
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} transition={spring} className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card p-5 sm:p-6">
            <div className="animate-soft-pulse pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" aria-hidden />
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Want something similar?</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">Book a free consultation.</h2>
            <p className="mt-3 text-muted-foreground">
              If you want a site that feels polished, explains your offer clearly, and makes it easier for people to reach out, let’s build it together.
            </p>
            <div className="mt-5">
              <Button asChild size="lg" className="w-full text-primary-foreground shadow-md shadow-primary/20 hover:translate-y-[-1px] hover:shadow-hover sm:w-auto">
                <Link to="/contact">
                  Book a free consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ProjectCaseStudy;
