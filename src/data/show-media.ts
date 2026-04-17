import type { ImageMetadata } from "astro";
import type { GalleryImage } from "./site";

import aCotePrimary from "../assets/images/spectacles/principal de Acote.webp";
import baignoirePrimary from "../assets/images/spectacles/projet baignoire principal.webp";
import laLutteFinalePrimary from "../assets/images/spectacles/principal la lutte final.webp";
import aCoteMiniatureOne from "../assets/images/spectacles/miniature acote.webp";
import aCoteMiniatureTwo from "../assets/images/spectacles/miniature acote (2).webp";
import aCoteMiniatureThree from "../assets/images/spectacles/miniature acote 3.webp";
import laLutteFinaleMiniatureOne from "../assets/images/spectacles/miniature la lutte final.webp";
import laLutteFinaleMiniatureTwo from "../assets/images/spectacles/miniature la lutte final (2).webp";
import laLutteFinaleMiniatureThree from "../assets/images/spectacles/miniature la lutte final (3).webp";

export interface ShowMediaImage {
  asset: ImageMetadata;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ShowMediaEntry {
  cover: ShowMediaImage;
  gallery: ShowMediaImage[];
}

const toShowMediaImage = (asset: ImageMetadata, alt: string): ShowMediaImage => ({
  asset,
  src: asset.src,
  alt,
  width: asset.width,
  height: asset.height,
});

export const showMedia: Record<string, ShowMediaEntry> = {
  "a-cote": {
    cover: toShowMediaImage(aCotePrimary, "À côté"),
    gallery: [
      toShowMediaImage(aCoteMiniatureOne, "À côté - miniature 1"),
      toShowMediaImage(aCoteMiniatureTwo, "À côté - miniature 2"),
      toShowMediaImage(aCoteMiniatureThree, "À côté - miniature 3"),
    ],
  },
  baignoire: {
    cover: toShowMediaImage(baignoirePrimary, "Baignoire"),
    gallery: [],
  },
  "la-lutte-finale": {
    cover: toShowMediaImage(laLutteFinalePrimary, "La Lutte Finale"),
    gallery: [
      toShowMediaImage(laLutteFinaleMiniatureOne, "La Lutte Finale - miniature 1"),
      toShowMediaImage(laLutteFinaleMiniatureTwo, "La Lutte Finale - miniature 2"),
      toShowMediaImage(laLutteFinaleMiniatureThree, "La Lutte Finale - miniature 3"),
    ],
  },
};

export const showGalleryImages: GalleryImage[] = Object.entries(showMedia).flatMap(
  ([showSlug, media], showIndex) =>
    media.gallery.map((image, imageIndex) => ({
      id: `show-${showIndex + 1}-${imageIndex + 1}`,
      asset: image.asset,
      src: image.src,
      alt: image.alt,
      category: "spectacle",
      showSlug,
    })),
);
