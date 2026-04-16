import type { GalleryImage } from "./site";

import biographyPortrait from "../assets/images/portrait/contact 1.webp";
import biographyImageOne from "../assets/images/portrait/biographie.webp";
import biographyImageTwo from "../assets/images/portrait/biographie (2).webp";
import biographyImageThree from "../assets/images/portrait/biographie 3.webp";
import homePortrait from "../assets/images/portrait/photo d'acueil.webp";

import workshopAtelier from "../assets/images/stages/clown parent enfant.webp";
import workshopDecouverte from "../assets/images/stages/decouverte du clown.webp";
import workshopObjets from "../assets/images/stages/clown et ces objets.webp";
import workshopPersonnage from "../assets/images/stages/clown et personnage (3).webp";
import workshopApprofondi from "../assets/images/stages/clown approfondissement.webp";

export const editorialGalleryImages: GalleryImage[] = [
  {
    id: "bio-1",
    src: biographyImageOne.src,
    alt: "Ziky Versari en biographie 1",
    category: "portrait",
  },
  {
    id: "bio-2",
    src: biographyImageTwo.src,
    alt: "Ziky Versari en biographie 2",
    category: "portrait",
  },
  {
    id: "bio-3",
    src: biographyImageThree.src,
    alt: "Ziky Versari en biographie 3",
    category: "portrait",
  },
  {
    id: "bio-4",
    src: biographyPortrait.src,
    alt: "Portrait de Ziky Versari",
    category: "portrait",
  },
  {
    id: "bio-5",
    src: homePortrait.src,
    alt: "Photo d'accueil de Ziky Versari",
    category: "portrait",
  },
  {
    id: "workshop-1",
    src: workshopAtelier.src,
    alt: "Atelier clown adultes-enfants",
    category: "atelier",
  },
  {
    id: "workshop-2",
    src: workshopDecouverte.src,
    alt: "Stage clown découverte",
    category: "atelier",
  },
  {
    id: "workshop-3",
    src: workshopObjets.src,
    alt: "Le clown et ses objets",
    category: "atelier",
  },
  {
    id: "workshop-4",
    src: workshopPersonnage.src,
    alt: "Création de personnage",
    category: "atelier",
  },
  {
    id: "workshop-5",
    src: workshopApprofondi.src,
    alt: "Stage clown approfondi",
    category: "atelier",
  },
];

