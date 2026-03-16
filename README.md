<!-- TODO: control 
1 - faire un index
2 - ajouter un apperçu
2 - ajouter pré-requi
3 - ajouter guide d'installation
4 - ajouter guide d'utilisation
5 - ajouter une roadmap
6 - préciser la lices d'utilisation
7 - ajouter les contributeurs
8 - voir un readme template sur github pour l'adopter
 
-->

# Ziky Versari — Site vitrine

Site web de Ziky Versari, clown-e et jongleureuse antipodiste. Présente ses spectacles, ses stages et ateliers, son calendrier et sa biographie.

## Table des matières

- [Aperçu](#aperçu)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)
- [Contenu et données](#contenu-et-données)
- [Roadmap](#roadmap)
- [Licence](#licence)
- [Contributeurs](#contributeurs)

---

## Aperçu

Pages du site :

| Route | Description |
|---|---|
| `/` | Page d'accueil : hero, aperçu spectacles, agenda, pédagogie, biographie |
| `/spectacles` | Liste des spectacles en tournée, en création et archives |
| `/spectacles/[slug]` | Page détail d'un spectacle |
| `/stages` | Stages et ateliers avec FAQ |
| `/calendrier` | Agenda filtrable des événements à venir |
| `/galerie` | Galerie photos par catégorie |
| `/a-propos` | Biographie complète et parcours |
| `/contact` | Formulaire et informations de contact |
| `/mentions-legales` | Mentions légales |

---

## Prérequis

- [Node.js](https://nodejs.org/) v18 ou supérieur
- npm (inclus avec Node.js)

---

## Installation

```bash
# Cloner le dépôt
git clone <url-du-repo>
cd ziky-vo-key

# Installer les dépendances
npm install
```

---

## Utilisation

```bash
# Lancer le serveur de développement
npm run dev
# → http://localhost:4321

# Compiler pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

---

## Structure du projet

```text
src/
├── data/
│   └── site.ts          # Toutes les données du site
├── layouts/
│   └── BaseLayout.astro # Layout principal (header + footer)
├── pages/
│   ├── index.astro
│   ├── spectacles/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── stages.astro
│   ├── calendrier.astro
│   ├── galerie.astro
│   ├── a-propos.astro
│   ├── contact.astro
│   └── mentions-legales.astro
├── components/          # Composants réutilisables
└── styles/
    └── global.css
```

---

## Contenu et données

Tout le contenu est centralisé dans [src/data/site.ts](src/data/site.ts). Pour modifier le site, éditer ce fichier :

| Export | Description |
|---|---|
| `shows` | Spectacles (en tournée, en création, archives) |
| `workshops` | Stages et ateliers |
| `calendarEvents` | Événements à venir |
| `biography` | Texte biographique et disciplines |
| `pedagogyIntro` | Citation et texte pédagogie |
| `companies` | Compagnies passées |
| `formations` | Formations suivies |
| `faqItems` | Foire aux questions |
| `galleryImages` | Images de la galerie |
| `navigation` | Liens de navigation |
| `contactEmail` | Email de contact |

### Ajouter un spectacle

Dans `shows`, ajouter un objet `Show` :

```ts
{
  slug: "mon-spectacle",          // utilisé dans l'URL /spectacles/mon-spectacle
  title: "Mon Spectacle",
  year: "2025",
  status: "en-tournee",           // "en-tournee" | "en-creation" | "archive"
  type: "solo",                   // "solo" | "duo" | "collectif"
  roles: ["Clown", "Écriture"],
  shortDescription: "...",
  longDescription: "...",         // optionnel
  externalLink: "https://...",    // optionnel
  imagePlaceholder: "Description de la photo",
}
```

### Ajouter un événement au calendrier

Dans `calendarEvents`, ajouter un objet `CalendarEvent` :

```ts
{
  id: "7",
  title: "A côté",
  type: "spectacle",              // "spectacle" | "stage" | "atelier"
  date: "2026-09-12",
  time: "20h30",
  location: "Guéret",
  venue: "Théâtre municipal",
  audience: "Tout public",
  status: "normal",               // "normal" | "complet" | "annule" | "dernieres-places"
  price: "12€",
}
```

### Images

Les images sont déclarées via le champ `src` dans `galleryImages` et dans chaque spectacle/atelier. Placer les fichiers dans `public/` et renseigner le chemin relatif (ex. `/images/spectacles/baignoire.jpg`).

---

## Roadmap

- [ ] Intégrer les vraies photos dans la galerie
- [ ] Ajouter les pages détail des spectacles en création
- [ ] Formulaire de contact fonctionnel
- [ ] Déploiement en production

---

## Licence

Usage privé — tous droits réservés. Contenu © Ziky Versari.

---

## Contributeurs

- **Ziky Versari** — contenu artistique
- **Sandrine** — développement
