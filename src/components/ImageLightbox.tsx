import * as React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

type LightboxSlide = {
  src: string;
  alt?: string;
};

type ImageLightboxProps = {
  open: boolean;
  imageSrc?: string | null;
  imageAlt: string;
  slides?: LightboxSlide[];
  index?: number;
  onClose: () => void;
  zIndex?: number;
};

export default function ImageLightbox({
  open,
  imageSrc,
  imageAlt,
  slides,
  index = 0,
  onClose,
  zIndex = 50,
}: ImageLightboxProps) {
  const resolvedSlides =
    slides && slides.length > 0 ? slides : imageSrc ? [{ src: imageSrc, alt: imageAlt }] : [];
  const resolvedIndex = Math.min(Math.max(index, 0), Math.max(resolvedSlides.length - 1, 0));

  return (
    <Lightbox
      open={open && resolvedSlides.length > 0}
      close={onClose}
      slides={resolvedSlides}
      index={resolvedIndex}
      plugins={[Zoom, Thumbnails]}
      carousel={{ finite: true }}
      controller={{ closeOnBackdropClick: true }}
      thumbnails={{
        position: 'bottom',
        width: 96,
        height: 64,
        borderRadius: 8,
        gap: 8,
      }}
      zoom={{
        maxZoomPixelRatio: 4,
        scrollToZoom: true,
      }}
      styles={{ container: { backgroundColor: 'rgba(0,0,0,0.9)', zIndex } }}
    />
  );
}
