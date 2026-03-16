<!-- TODO: 
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

# Ziky Versari Portfolio

Site vitrine realise avec Astro pour presenter l'univers de Ziky Versari : spectacles, stages et ateliers, calendrier, galerie, biographie et contact.

## Stack

- Astro 5
- Tailwind CSS 4
- TypeScript

## Pages principales

- `/` : accueil
- `/spectacles` : liste et detail des spectacles
- `/stages` : stages et ateliers
- `/calendrier` : agenda des evenements
- `/galerie` : galerie visuelle
- `/a-propos` : biographie et parcours
- `/contact` : informations de contact
- `/mentions-legales` : mentions legales

## Installation

```bash
npm install
```

## Demarrage en local

```bash
npm run dev
```

Le site est ensuite accessible sur `http://localhost:4321`.

## Scripts disponibles

- `npm run dev` : lance le serveur de developpement
- `npm run build` : genere la version de production
- `npm run preview` : previsualise le build en local

## Structure du projet

```text
src/
  components/   Composants reutilisables
  data/         Donnees du site
  layouts/      Layouts Astro
  pages/        Pages du site
  styles/       Styles globaux
```

## Contenu

Les contenus principaux du site sont centralises dans `src/data/site.ts`.
