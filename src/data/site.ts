export interface Show {
  slug: string;
  title: string;
  year: string;
  status: "en-tournee" | "en-creation" | "archive";
  type: "solo" | "duo" | "collectif";
  roles: string[];
  shortDescription: string;
  longDescription?: string;
  externalLink?: string;
  imagePlaceholder: string;
}

export interface Workshop {
  slug: string;
  title: string;
  duration: string;
  maxParticipants: number;
  audience: string;
  description: string;
  program?: string[];
  imagePlaceholder: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  type: "spectacle" | "stage" | "atelier";
  date: string;
  endDate?: string;
  time?: string;
  location: string;
  venue?: string;
  description?: string;
  link?: string;
  audience?: string;
  status?: "normal" | "complet" | "annule" | "dernieres-places";
  price?: string;
}

export interface Company {
  name: string;
  role: string;
  period: string;
  url?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "spectacle" | "atelier" | "portrait" | "coulisses";
  showSlug?: string;
}

export interface BiographyMilestone {
  date: string;
  title: string;
  description: string;
}

export const contactEmail = "bonjour@ziky-versari.fr";

export const navigation = [
  { label: "Spectacles", href: "/spectacles" },
  { label: "Stages & Ateliers", href: "/stages" },
  { label: "Biographie", href: "/biographie" },
  { label: "Galerie", href: "/galerie" },
  { label: "Calendrier", href: "/calendrier" },
  { label: "Contact", href: "/contact" },
];

export const shows: Show[] = [
  {
    slug: "baignoire",
    title: "Baignoire",
    year: "En creation",
    status: "en-creation",
    type: "solo",
    roles: ["Clown", "Ecriture", "Interpretation"],
    shortDescription:
      "Un solo en cours de creation explorant la rencontre entre le corps et les objets du quotidien.",
    imagePlaceholder: "Photo de Baignoire",
  },
  {
    slug: "a-cote",
    title: "A cote",
    year: "En tournee",
    status: "en-tournee",
    type: "duo",
    roles: ["Clown", "Interpretation"],
    shortDescription:
      "Elvira, tranquille dans sa petite maison, voit sa vie chamboule quand Padock debarque juste a cote : entre leurs caracteres opposes, la cohabitation promet d'etre explosif !",
    externalLink: "https://acoteclown.wixsite.com/acote",
    imagePlaceholder: "Photo de A cote",
  },
  {
    slug: "la-lutte-finale",
    title: "La Lutte Finale",
    year: "En creation",
    status: "en-creation",
    type: "collectif",
    roles: ["Clown", "Ecriture"],
    shortDescription: "Projet collectif en cours de creation.",
    imagePlaceholder: "Photo de La Lutte Finale",
  },
  // {
  //   slug: "peau-d-orange",
  //   title: "Peau d'orange",
  //   year: "2018",
  //   status: "archive",
  //   type: "solo",
  //   roles: ["Clown", "Ecriture", "Interpretation"],
  //   shortDescription:
  //     "Un solo explorant les deformations et prolongements crees par la rencontre entre le corps et des objets du quotidien.",
  //   imagePlaceholder: "Photo de Peau d'orange",
  // },
  // {
  //   slug: "mise-en-bouche",
  //   title: "Mise en bouche",
  //   year: "2014",
  //   status: "archive",
  //   type: "solo",
  //   roles: ["Clown", "Ecriture", "Interpretation"],
  //   shortDescription:
  //     "Solo clownesque autour de la relation entre le corps et la nourriture.",
  //   imagePlaceholder: "Photo de Mise en bouche",
  // },
  // {
  //   slug: "ballade-de-rossure",
  //   title: "Ballade de Rossure",
  //   year: "2008",
  //   status: "archive",
  //   type: "solo",
  //   roles: ["Clown", "Ecriture", "Interpretation"],
  //   shortDescription: "Premier solo, premiere rencontre avec le public.",
  //   imagePlaceholder: "Photo de Ballade de Rossure",
  // },
  // {
  //   slug: "les-poneys-rouges",
  //   title: "Les Poneys Rouges",
  //   year: "2012 - 2020",
  //   status: "archive",
  //   type: "collectif",
  //   roles: ["Clown", "Cofondatrice", "Mise en scene"],
  //   shortDescription:
  //     "Collectif de quatre clowns. Spectacles, stages et laboratoires clownesques.",
  //   imagePlaceholder: "Photo des Poneys Rouges",
  // },
];

export const workshops: Workshop[] = [
  {
    slug: "atelier-adultes-enfants",
    title: "Atelier clown adultes-enfants",
    duration: "1 journee (9h30 - 16h30)",
    maxParticipants: 10,
    audience: "5 binomes adulte-enfant, tous niveaux",
    description:
      "Une journee pour jouer ensemble dans un cadre de cooperation et de complicite en dehors des rapports de domination, a la rencontre d'une malice commune.",
    program: [
      "Matinee de presentation et jeux decouverte : la scene, le personnage, la palette d'emotions",
      "Temps informel et auberge espagnole",
      "Apres-midi de jeu autour du costume, du maquillage et de la mise en scene",
      "Temps d'improvisation en binome",
      "Gouter convivial et cercle de cloture",
    ],
    imagePlaceholder: "Photo atelier adultes-enfants",
  },
  {
    slug: "stage-decouverte",
    title: "Stage clown decouverte",
    duration: "2 jours",
    maxParticipants: 12,
    audience: "Tous niveaux",
    description:
      "Deux jours pour decouvrir le monde du clown et rencontrer sa propre palette de jeu. Experimentations en groupe a partir des emotions du moment et temps d'impro.",
    imagePlaceholder: "Photo stage decouverte",
  },
  {
    slug: "clown-et-objets",
    title: "Le clown et ses objets",
    duration: "4 jours",
    maxParticipants: 12,
    audience: "Tous niveaux",
    description:
      "Jongleureuse de formation, je vous propose a travers ce stage d'exprimer votre propre clown dans une connexion sensible a l'environnement. L'objet est ici vu comme catalyseur d'imaginaire et partenaire de jeu, a partir de ce qui emerge en soi.",
    imagePlaceholder: "Photo stage clown et objets",
  },
  {
    slug: "creation-personnage",
    title: "Creation de personnage",
    duration: "4 jours",
    maxParticipants: 12,
    audience: "Tous niveaux",
    description:
      "Ce stage vous propose de rencontrer votre propre clown en tant que creature singuliere, en dehors des images stereotypees visant a rire de la marge. L'expectative du rire se situe ici a partir de ce qui est authentique, convoque a l'endroit d'une humanite partagee et declenche par resonnance.",
    imagePlaceholder: "Photo stage creation de personnage",
  },
  {
    slug: "stage-approfondi",
    title: "Stage clown approfondi",
    duration: "5 jours",
    maxParticipants: 12,
    audience: "Niveau intermediaire",
    description:
      "5 jours en immersion complete dans l'univers du clown : decouverte du monde de la scene et creation de personnage, exploration de son univers, sa palette d'emotions et sa relation a l'objet. Travail de la dramaturgie, ecriture et mise en place de son propre numero de clown, transmission d'outils pour devenir son propre metteurice en scene.",
    imagePlaceholder: "Photo stage approfondi",
  },
];

export const calendarEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "A cote",
    type: "spectacle",
    date: "2026-03-22",
    time: "20h30",
    location: "Gueret",
    venue: "Theatre municipal",
    description: "Representation du duo clownesque",
    audience: "Tout public",
  },
  {
    id: "2",
    title: "A cote",
    type: "spectacle",
    date: "2026-04-15",
    time: "19h00",
    location: "Limoges",
    venue: "Salle communale",
    description: "Representation du duo clownesque",
    audience: "Tout public",
    status: "dernieres-places",
  },
  {
    id: "3",
    title: "Stage clown decouverte",
    type: "stage",
    date: "2026-05-10",
    endDate: "2026-05-11",
    time: "10h-17h",
    location: "La Creuse",
    description:
      "2 jours pour decouvrir le monde du clown et rencontrer sa propre palette de jeu.",
    audience: "Adultes, tous niveaux",
    price: "Tarif : nous contacter",
  },
  {
    id: "4",
    title: "Atelier adultes-enfants",
    type: "atelier",
    date: "2026-06-07",
    time: "9h30-16h30",
    location: "La Creuse",
    description:
      "Une journee pour jouer ensemble dans un cadre de cooperation et de complicite.",
    audience: "Binomes adulte-enfant",
    price: "Tarif : nous contacter",
  },
  {
    id: "5",
    title: "Le clown et ses objets",
    type: "stage",
    date: "2026-07-06",
    endDate: "2026-07-09",
    time: "10h-17h",
    location: "A confirmer",
    description:
      "4 jours pour exprimer son propre clown dans une connexion sensible a l'environnement.",
    audience: "Adultes, tous niveaux",
    price: "Tarif : nous contacter",
  },
  {
    id: "6",
    title: "Stage clown approfondi",
    type: "stage",
    date: "2026-08-24",
    endDate: "2026-08-28",
    time: "10h-17h",
    location: "La Creuse",
    description: "5 jours en immersion complete dans l'univers du clown.",
    audience: "Niveau intermediaire",
    price: "Tarif : nous contacter",
  },
];

export const companies: Company[] = [
  {
    name: "Les Poneys Rouges",
    role: "Cofondatrice, clown, mise en scene",
    period: "2012 - 2020",
  },
];

export const biography = {
  intro:
    "Ziky Versari est clown-e et jongleureuse antipodiste. Son travail élabore des univers plaçant le corps au centre de l'action, débordant, matière de contact et de relation au monde.",
  full: `Artiste et pedagogue dans les domaines du clown, du cirque, j'accorde beaucoup d'importance au processus de creation et au fait de reflechir a nos manieres de cooperer et de produire un spectacle a plusieurs.

Ma recherche en tant que clown me permet d'experimenter des comportements hors-normes et de tenter de les rendre acceptables. Je peux ainsi amener le public, le temps d'une representation a depasser des croyances limitantes au sujet de certains tabous ce qui est pour moi une maniere de rendre legitimes des existences marginales.

Jongleuse antipodiste, je me suis d'abord formee aupres de differentes ecoles de cirque comme le Theatre Cirqule a Geneve, l'Ecole de Cirque de Lille, celle de Bordeaux ainsi qu'au Lido a Toulouse.

Je me suis par la suite dediee a la pratique du clown au travers de differentes methodes.

Toutes ces annees d'apprentissages et de recherches ont donne lieu a differents spectacles joues en salle comme dans la rue pour finalement donner naissance a la cie Les Poneys Rouges (2015-2020). Cofonde avec trois autres clowns, ce collectif a permis l'emergence de spectacles clownesques mais aussi de stages et de laboratoires.

Ces dernieres annees je me suis plus particulierement dediee a l'apprentissage d'outils d'intelligence collective.

Basee depuis peu dans la Creuse, je propose aujourd'hui des spectacles, des ateliers et des stages en lien avec la pratique du clown et le cirque.`,
  disciplines: [
    "Clown",
    "Jonglage antipodiste",
    "Ecriture",
    "Mise en scene",
    "Pedagogie",
  ],
};

export const biographyTimeline: BiographyMilestone[] = [
  {
    date: "2008",
    title: "Ballade de Rossure",
    description: "Premier solo et premiere rencontre avec le public.",
  },
  {
    date: "2012 - 2020",
    title: "Les Poneys Rouges",
    description:
      "Cofondation du collectif, creation de spectacles, stages et laboratoires clownesques.",
  },
  {
    date: "2014",
    title: "Mise en bouche",
    description:
      "Creation d'un solo clownesque autour de la relation entre le corps et la nourriture.",
  },
  {
    date: "2018",
    title: "Peau d'orange",
    description:
      "Creation d'un solo explorant les deformations et prolongements nes de la rencontre entre le corps et des objets du quotidien.",
  },
  {
    date: "Aujourd'hui",
    title: "Spectacles, ateliers et stages",
    description:
      "Installation en Creuse et poursuite d'un travail entre clown, cirque, transmission et intelligence collective.",
  },
];

export const pedagogyIntro = {
  quote:
    '"Se connecter a la petite racine dans le ventre, cette humanite reliee au clown qui est dans le coeur, l\'acteurice dans la tete et le metteurice en scene qui nous regarde"',
  text: `Clown proteiforme ayant traverse differentes ecoles et forme a differents courants, j'ai a coeur d'offrir a chacaine la possibilite de trouver son propre endroit de jeu et de se rencontrer en tant que clown-creature singulier, en dehors des traditionnels concepts stereotypes de l'imaginaire collectifs, stigmatisant et discriminants.

Ma pratique s'inscrit dans le mouvement de l'education populaire, qui place la pedagogie a un endroit de transmission et porte une attention particuliere au cadre, au temps de repos, a l'accueil et a l'expression des emotions.

Chaque type d'atelier propose des experimentations autour de diverses methodologie de clown, dans un cadre toujours ludique et participatif de la culture de la joie et du consentement.

A travers une succession de petits jeux, les matinees sont consacrees a la rencontre : avec le cadre, avec le groupe et avec soi meme. Une pause consequente est ensuite proposee, avec possibilite d'echanges informels, de point ecoute, d'integration en solo. Les temps d'improvisation de l'apres-midi se font a partir des experiences vecues le matin : toujours dans des cadres de jeu definis et factuels, chacaine est invite a se reapproprier les outils a l'envie, selon ce qui sonne juste pour iel.`,
};

export const formations = [
  { name: "Theatre Cirqule", location: "Geneve" },
  { name: "Ecole de Cirque de Lille", location: "Lille" },
  { name: "Ecole de Cirque de Bordeaux", location: "Bordeaux" },
  { name: "Le Lido", location: "Toulouse" },
];

export const faqItems = [
  {
    question: "Faut-il avoir de l'experience pour participer ?",
    answer:
      "Non, la plupart des ateliers et stages sont ouverts a tous les niveaux. Seul le stage approfondi requiert un niveau intermediaire. L'approche est toujours bienveillante et progressive.",
  },
  {
    question: "Faut-il reserver ?",
    answer:
      "Oui, les places sont limitees. Contactez-moi par email pour reserver votre place.",
  },
  {
    question: "Quel materiel apporter ?",
    answer:
      "Venez avec des vetements confortables dans lesquels vous pouvez bouger. Pour les stages incluant costume ou maquillage, une liste complementaire peut etre transmise en amont.",
  },
  {
    question: "Quel est le tarif des stages ?",
    answer:
      "Les tarifs varient selon la duree et le format de l'atelier. Contactez-moi pour obtenir les informations detaillees.",
  },
  {
    question: "Ou se deroulent les stages ?",
    answer:
      "Les stages ont lieu dans la Creuse ou dans d'autres lieux en France selon les demandes et partenariats.",
  },
];

export const galleryImages: GalleryImage[] = [
  { id: "1", src: "", alt: "Ziky en scene - Peau d'orange", category: "spectacle", showSlug: "peau-d-orange" },
  { id: "2", src: "", alt: "Atelier clown adultes-enfants", category: "atelier" },
  { id: "3", src: "", alt: "Portrait de Ziky Versari", category: "portrait" },
  { id: "4", src: "", alt: "Les Poneys Rouges en repetition", category: "coulisses", showSlug: "les-poneys-rouges" },
  { id: "5", src: "", alt: "Ziky - Mise en bouche", category: "spectacle", showSlug: "mise-en-bouche" },
  { id: "6", src: "", alt: "Stage clown decouverte", category: "atelier" },
];
