import type { Project } from '@/lib/contentStore';

const normalizeSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const getProjectSlug = (project: Pick<Project, 'title' | 'slug'>) => {
  if (project.slug && project.slug.trim()) {
    return normalizeSlug(project.slug);
  }

  return normalizeSlug(project.title);
};

export const getProjectPath = (project: Pick<Project, 'title' | 'slug'>) =>
  `/projects/${getProjectSlug(project)}`;

export const findProjectBySlug = (projects: Project[], slug: string) => {
  const target = normalizeSlug(slug);

  return projects.find((project) => getProjectSlug(project) === target);
};

