import type { GalleryImage } from "./site";

import aCotePrimary from "../assets/images/spectacles/principal de Acote.webp";
import baignoirePrimary from "../assets/images/spectacles/projet baignoire principal.webp";
import laLutteFinalePrimary from "../assets/images/spectacles/principal la lutte final.webp";

export interface ShowMediaImage {
  src: string;
  alt: string;
}

export interface ShowMediaEntry {
  cover: ShowMediaImage;
  gallery: ShowMediaImage[];
}

export const showMedia: Record<string, ShowMediaEntry> = {
  "a-cote": {
    cover: {
      src: aCotePrimary.src,
      alt: "À côté",
    },
    gallery: [
      {
        src: aCotePrimary.src,
        alt: "À côté - visuel principal",
      },
    ],
  },
  baignoire: {
    cover: {
      src: baignoirePrimary.src,
      alt: "Baignoire",
    },
    gallery: [
      {
        src: baignoirePrimary.src,
        alt: "Baignoire - visuel principal",
      },
    ],
  },
  "la-lutte-finale": {
    cover: {
      src: laLutteFinalePrimary.src,
      alt: "La Lutte Finale",
    },
    gallery: [
      {
        src: laLutteFinalePrimary.src,
        alt: "La Lutte Finale - visuel principal",
      },
    ],
  },
};

export const showGalleryImages: GalleryImage[] = Object.entries(showMedia).flatMap(
  ([showSlug, media], showIndex) =>
    media.gallery.map((image, imageIndex) => ({
      id: `show-${showIndex + 1}-${imageIndex + 1}`,
      src: image.src,
      alt: image.alt,
      category: "spectacle",
      showSlug,
    })),
);

