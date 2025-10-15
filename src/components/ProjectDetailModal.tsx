import React, { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Image as ImageIcon } from 'lucide-react';

type Project = {
  title: string;
  description?: string;
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  pages?: string[];
  techStack?: string[];
  gallery?: string[];
  year?: string | number;
  role?: string;
  additionalNotes?: string;
};

const Thumb = ({ src, alt, onOpen }: { src: string; alt?: string; onOpen: (s: string) => void }) => (
  <button onClick={() => onOpen(src)} className="w-24 h-16 overflow-hidden rounded-md bg-muted/20">
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </button>
);

export default function ProjectDetailModal({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openImage = (src: string) => setActiveImage(src);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-full">View details</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            {project.pages && project.pages.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Pages</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {project.pages.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            )}

            {project.techStack && project.techStack.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Tech stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((t, i) => (
                    <Badge key={i} className="bg-muted/20">{t}</Badge>
                  ))}
                </div>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold mb-2">Highlights</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {project.features.slice(0, 6).map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </div>
            )}

            {project.additionalNotes && (
              <p className="text-sm text-muted-foreground mt-3">{project.additionalNotes}</p>
            )}
          </div>

          <div>
            {project.gallery && project.gallery.length > 0 ? (
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {project.gallery.map((g, i) => (
                    <Thumb key={i} src={g} alt={`${project.title} gallery ${i+1}`} onOpen={openImage} />
                  ))}
                </div>
                {activeImage && (
                  <div className="mt-2">
                    <img src={activeImage} alt="active" className="w-full rounded" />
                  </div>
                )}
              </div>
            ) : (
              project.imageUrl && (
                <div className="rounded overflow-hidden">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                </div>
              )
            )}

            <div className="flex gap-2 mt-4">
              {project.githubUrl && project.githubUrl !== '#' ? (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">
                    <Github className="h-4 w-4 mr-1" />
                    View code
                  </Button>
                </a>
              ) : (
                <Button variant="outline" size="sm" className="w-full" disabled>
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </Button>
              )}

              {project.liveUrl && project.liveUrl !== '#' ? (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="sm" className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Open live
                  </Button>
                </a>
              ) : (
                <Button size="sm" className="w-full" disabled>
                  <ImageIcon className="h-4 w-4 mr-1" />
                  Preview
                </Button>
              )}
            </div>

          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
