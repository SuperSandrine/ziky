import type { ImageMetadata } from "astro";

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
  asset?: ImageMetadata;
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

export const contactEmail = "ziky.versari@gmail.com";

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
    slug: "a-cote",
    title: "À côté",
    year: "2025",
    status: "en-tournee",
    type: "duo",
    roles: ["Clown", "Jonglerie antipodiste", "Manipulation d'objets"],
    shortDescription:
      "Elvira, tranquille dans sa petite maison, voit sa vie chamboulée quand Padock débarque juste à côté : entre leurs caractères opposés, la cohabitation promet d'être explosive !",
    externalLink: "https://acoteclown.wixsite.com/acote",
    imagePlaceholder: "Photo de À côté",
  },
  {
    slug: "la-lutte-finale",
    title: "La Lutte Finale",
    year: "2027",
    status: "en-creation",
    type: "collectif",
    roles: ["Clown", "Catch", "Fouet/couteaux"],
    shortDescription: "Dans ce grand show de catch, Musclor, challenger issu du public, va essayer de remporter le combat contre Champion, chouchou évident de la présentatrice Violentine.",
    longDescription: "Dans ce grand show de catch, Musclor, challenger issu du public, va essayer de remporter le combat contre Champion, chouchou évident de la présentatrice Violentine. Champion est tenant du titre depuis 1998 (vainqueur notamment du célèbre combat à main nues contre deux chiens et trois ours) mais Musclor n'a pas peur car il est vraiment très musclé. De plus, il est mu par de nobles sentiments auquel le public sera très certainement sensible. </br>Attention ce spectacle comporte : des prises de catch, des coups bas, des faux semblants, du favoritisme, de la méchanceté, de la passion, des paillettes, de la soif de violence, de la lutte de classe et peut-être des renversements de pouvoir..",
    imagePlaceholder: "Photo de La Lutte Finale",
  },
    {
    slug: "baignoire",
    title: "Baignoire",
    year: "2027",
    status: "en-creation",
    type: "solo",
    roles: ["Clown", "Jonglerie antipodiste", "Marionette"],
    shortDescription:
      "Un solo en cours de création explorant la rencontre entre le corps et les objets du quotidien.",
    imagePlaceholder: "Photo de Baignoire",
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
    slug: "stage-decouverte",
    title: "Stage clown découverte",
    duration: "2 jours",
    maxParticipants: 12,
    audience: "Tous niveaux",
    description:
      "Deux jours pour découvrir le monde du clown et rencontrer sa propre palette de jeu. Expérimentations en groupe à partir des émotions du moment et temps d'impro.",
    imagePlaceholder: "Photo stage découverte",
  },
  {
    slug: "clown-et-objets",
    title: "Le clown et ses objets",
    duration: "4 jours",
    maxParticipants: 12,
    audience: "Tous niveaux",
    description:
      "Jongleureuse de formation, je vous propose à travers ce stage d'exprimer votre propre clown dans une connexion sensible à l'environnement. L'objet est ici vu comme catalyseur d'imaginaire et partenaire de jeu, à partir de ce qui émerge en soi.",
    imagePlaceholder: "Photo stage clown et objets",
  },
  {
    slug: "creation-personnage",
    title: "Création de personnage",
    duration: "4 jours",
    maxParticipants: 12,
    audience: "Tous niveaux",
    description:
      "Ce stage vous propose de rencontrer votre propre clown en tant que créature singulière, en dehors des images stéréotypées visant à rire de la marge. L'expectative du rire se situe ici à partir de ce qui est authentique, convoqué à l'endroit d'une humanité partagée et déclenché par résonance.",
    imagePlaceholder: "Photo stage création de personnage",
  },
  {
    slug: "stage-approfondi",
    title: "Stage clown approfondi",
    duration: "5 jours",
    maxParticipants: 12,
    audience: "Niveau intermédiaire",
    description:
      "5 jours en immersion complète dans l'univers du clown : découverte du monde de la scène et création de personnage, exploration de son univers, sa palette d'émotions et sa relation à l'objet. Travail de la dramaturgie, écriture et mise en place de son propre numéro de clown, transmission d'outils pour devenir son propre metteurice en scène.",
    imagePlaceholder: "Photo stage approfondi",
  },
  {
    slug: "atelier-adultes-enfants",
    title: "Atelier clown adultes-enfants",
    duration: "1 journée (9h30 - 16h30)",
    maxParticipants: 10,
    audience: "5 binômes adulte-enfant, tous niveaux",
    description:
      "Une journée pour jouer ensemble dans un cadre de coopération et de complicité en dehors des rapports de domination, à la rencontre d'une malice commune.",
    program: [
      "Matinée de présentation et jeux découverte : la scène, le personnage, la palette d'émotions",
      "Temps informel et auberge espagnole",
      "Après-midi de jeu autour du costume, du maquillage et de la mise en scène",
      "Temps d'improvisation en binôme",
      "Goûter convivial et cercle de clôture",
    ],
    imagePlaceholder: "Photo atelier adultes-enfants",
  },
];

export const calendarEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Laboratoire sur les écritures post-binaires",
    type: "atelier",
    date: "2026-01-19",
    endDate: "2026-01-23",
    location: "La Métive",
    description: "Laboratoire sur les écritures post-binaires à La Métive.",
  },
  {
    id: "2",
    title: "Laboratoire sur les écritures post-binaires",
    type: "atelier",
    date: "2026-02-02",
    endDate: "2026-02-08",
    location: "La Métive",
    description: "Laboratoire sur les écritures post-binaires à La Métive.",
    audience: "Tout public",

  },
  {
    id: "3",
    title: "Sortie de résidence - La Lutte Finale",
    type: "spectacle",
    date: "2026-05-01",
    location: "Bourganeuf",
    venue: "Salle Confluence",
    description: "Sortie de résidence de 'La Lutte Finale' à la Salle Confluence.",
    audience: "Tout public",
  },
  {
    id: "4",
    title: "À côté",
    type: "spectacle",
    date: "2026-05-22",
    location: "Felletin",
    venue: "Festival La Birbante",
    description: "Représentation de 'À côté' au Festival La Birbante.",
    audience: "Tout public",
  },
  {
    id: "5",
    title: "À côté",
    type: "spectacle",
    date: "2026-08-08",
    endDate: "2026-08-11",
    location: "Creuse",
    venue: "Festival Précaire",
    description: "Représentations de 'À côté' au Festival Précaire.",
    audience: "Tout public",
  },
];

export const companies: Company[] = [
  {
    name: "Les Poneys Rouges",
    role: "Cofondatrice, clown, mise en scène",
    period: "2012 - 2020",
  },
];

export const biography = {
  intro:`Ziky Versari développe des univers artistiques plaçant le corps au centre de l’action : un corps malléable, hors norme et queer. À travers le clown et la matière, iel explore des comportements non normés afin d’interroger les tabous et d’inviter le public à dépasser certaines croyances limitantes, dans une démarche de légitimation des existences marginales.`,
  intro2:
    `Ziky Versari est clown-e et jongleureuse antipodiste. Son travail élabore des univers plaçant le corps au centre de l'action, débordant, matière de contact et de relation au monde.`,
  full:`Ziky Versari est clown·e et jongleureuse antipodiste. Formé·e dans différentes écoles de cirque — du Théâtre Cirqule à Genève à l’École de Cirque de Bordeaux, en passant par Lomme et le Lido à Toulouse — iel développe une pratique à la croisée de la jonglerie et du clown.

  Son travail place le corps au centre de l’action : un corps malléable, hors norme et queer, envisagé comme matière de transformation et de relation au monde. À travers la rencontre avec des objets et des matières du quotidien, iel explore les déformations et les prolongements du geste, ouvrant des espaces où l’étrange et l’impossible prennent forme.

  Sa recherche en jonglerie se construit autour de la contrainte et des figures dites impossibles : iel y explore la manière dont le jonglage et l’antipodisme transforment à la fois le mouvement, les états du corps et les émotions. En parallèle, son travail de clown lui permet d’expérimenter des comportements hors normes, de jouer avec les tabous et de les rendre perceptibles, voire acceptables.

  Ses solos — Ballade de Rossure (2008), Mise en bouche (2014), Peau d’orange (2018) et Projet Baignoire (en cours de création) — témoignent de cette recherche autour du corps et de la matière.

  En collectif, notamment avec la compagnie Les Poneys Rouges (2015–2020), iel a co-créé des spectacles en salle et dans l’espace public, ainsi que des stages et des laboratoires.

  Aujourd’hui installé·e en Creuse, Ziky Versari propose des spectacles, des ateliers et des stages autour du clown et du cirque, en intégrant des outils d’intelligence collective dans sa démarche artistique et pédagogique.

  Son travail invite à déplacer les regards, à interroger les normes et à ouvrir des espaces de légitimité pour des formes d’existence marginales.`,
  full2: `Artiste et pedagogue dans les domaines du clown, du cirque, j'accorde beaucoup d'importance au processus de creation et au fait de reflechir a nos manieres de cooperer et de produire un spectacle a plusieurs.

  Ma recherche en tant que clown me permet d'experimenter des comportements hors-normes et de tenter de les rendre acceptables. Je peux ainsi amener le public, le temps d'une representation a depasser des croyances limitantes au sujet de certains tabous ce qui est pour moi une maniere de rendre legitimes des existences marginales.

  Jongleuse antipodiste, je me suis d'abord formee aupres de differentes ecoles de cirque comme le Theatre Cirqule a Geneve, l'Ecole de Cirque de Lille, celle de Bordeaux ainsi qu'au Lido a Toulouse.

  Je me suis par la suite dediee a la pratique du clown au travers de differentes methodes.

  Toutes ces annees d'apprentissages et de recherches ont donne lieu a differents spectacles joues en salle comme dans la rue pour finalement donner naissance a la cie Les Poneys Rouges (2015-2020). Cofonde avec trois autres clowns, ce collectif a permis l'emergence de spectacles clownesques mais aussi de stages et de laboratoires.

  Ces dernieres annees je me suis plus particulierement dediee a l'apprentissage d'outils d'intelligence collective.

  Basee depuis peu dans la Creuse, je propose aujourd'hui des spectacles, des ateliers et des stages en lien avec la pratique du clown et le cirque.`,
  disciplines: [
    "Clown",
    "Jonglage antipodiste",
    "Fouet artistique",
    "Lancer de couteaux",
    "Regard extérieur",
    "Pédagogie",
  ],
};

export const biographyTimeline: BiographyMilestone[] = [
  {
    date: "2008",
    title: "Ballade de Rossure",
    description: "Premier solo et première rencontre avec le public.",
  },
  {
    date: "2012 - 2020",
    title: "Les Poneys Rouges",
    description:
      "Cofondation du collectif, création de spectacles, stages et laboratoires clownesques.",
  },
  {
    date: "2014",
    title: "Mise en bouche",
    description:
      "Création d'un solo clownesque autour de la relation entre le corps et la nourriture.",
  },
  {
    date: "2018",
    title: "Peau d'orange",
    description:
      "Création d'un solo explorant les déformations et prolongements nés de la rencontre entre le corps et des objets du quotidien.",
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
    question: "Faut-il avoir de l'expérience pour participer ?",
    answer:
      "Non, la plupart des ateliers et stages sont ouverts à tous les niveaux.",
  },
  {
    question: "Faut-il réserver ?",
    answer:
      "Oui, les places sont limitées. Contactez-moi par email ou par téléphone pour réserver votre place.",
  },
  {
    question: "Quel matériel apporter ?",
    answer:
      "Venez avec des vêtements confortables dans lesquels vous pouvez bouger (sans valeur), une gourde et un petit plaid.",
  },
  {
    question: "Quel est le tarif des stages ?",
    answer:
      "Les tarifs varient selon la durée et le format de l’atelier. N’hésitez pas à me contacter pour obtenir des informations détaillées. Le tarif ne doit pas être un frein: des tarifs solidaires sont possibles.",
  },
  // {
  //   question: "Où se déroulent les stages ?",
  //   answer:
  //     "Les stages ont lieu dans la Creuse ou dans d'autres lieux en France selon les demandes et partenariats.",
  // },
];

export const galleryImages: GalleryImage[] = [
  { id: "1", src: "", alt: "Ziky en scène - Peau d'orange", category: "spectacle", showSlug: "peau-d-orange" },
  { id: "2", src: "", alt: "Atelier clown adultes-enfants", category: "atelier" },
  { id: "3", src: "", alt: "Portrait de Ziky Versari", category: "portrait" },
  { id: "4", src: "", alt: "Les Poneys Rouges en répétition", category: "coulisses", showSlug: "les-poneys-rouges" },
  { id: "5", src: "", alt: "Ziky - Mise en bouche", category: "spectacle", showSlug: "mise-en-bouche" },
  { id: "6", src: "", alt: "Stage clown découverte", category: "atelier" },
];
