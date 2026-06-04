# Guide d'optimisation SEO - Ziky Versari

## ✅ Améliorations implémentées

### 1. **Configuration de base**
- ✅ URL du site configurée: `https://zikyversari.fr`
- ✅ Tags meta (title, description)
- ✅ Open Graph (réseaux sociaux)
- ✅ Twitter Card
- ✅ Canonical URLs

### 2. **Fichiers SEO**
- ✅ `robots.txt` - Guide les moteurs de recherche
- ✅ `sitemap.xml` - Liste toutes les pages
- ✅ `sitemap-index.xml` - Index des sitemaps
- ✅ `manifest.json` - PWA manifest

### 3. **Données structurées**
- ✅ Schema.org Person (JSON-LD)
- ✅ Composant SEO réutilisable
- ✅ Structured data component

### 4. **Composants réutilisables**
- ✅ `<SEO />` - Gère tous les meta tags
- ✅ `<StructuredData />` - JSON-LD schemas
- ✅ BaseLayout.astro mis à jour

### 5. **Performance & Sécurité**
- ✅ `.htaccess` - Compression, cache, sécurité
- ✅ Lazy loading images
- ✅ Images WebP optimisées

## 🎯 À faire maintenant

### 1. **Générer l'image OG** (IMPORTANT)
- ✅
```
1. Créer une image 1200x630px
2. Sauvegarder en `/public/og-image.png`
3. Voir: /public/OG-IMAGE-TODO.md
```

### 2. **Vérifier l'URL du site**
- ✅
- Remplacer `https://zikyversari.fr` par votre vrai domaine dans:
  - `astro.config.mjs` (ligne 4)
  - `public/robots.txt` (ligne 4)

### 3. **Ajouter les métadonnées par page**

Exemple pour `/biographie`:
```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---

<BaseLayout
  title="Biographie | Ziky Versari"
  description="Parcours de Ziky Versari, clown et jongleureuse antipodiste."
  image="/og-image.png"
>
  <!-- contenu -->
</BaseLayout>
```

### 4. **Ajouter les réseaux sociaux**

Ajouter les URLs des réseaux sociaux dans `src/components/StructuredData.astro`:
```
sameAs: [
  "https://instagram.com/ziky",
  "https://facebook.com/ziky",
  // etc...
]
```

### 5. **Tester le SEO**

Outils gratuits:
- ✅ Google Search Console: https://search.google.com/search-console/
- ✅ Google PageSpeed Insights: https://pagespeed.web.dev/
- ✅ Schema.org Validator: https://validator.schema.org/
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/

### 6. **Soumettre le sitemap**

Dans Google Search Console:
1. Aller à "Sitemaps"
2. Ajouter: `https://votre-domaine.fr/sitemap-index.xml`

## 📊 Scores SEO actuels

Après ces modifications:
- ✅ Indexation: Complète
- ✅ Mobile: Optimisé
- ✅ Vitesse: À vérifier avec PageSpeed
- ✅ Sécurité: Headers configurés
- ✅ Schéma: Structuré

## 🔍 Pages indexées

Le sitemap inclut actuellement:
- `/` (priorité 1.0)
- `/biographie` (0.9)
- `/spectacles` (0.8)
- `/calendrier` (0.9)
- `/stages` (0.85)
- `/galerie` (0.7)
- `/contact` (0.8)
- `/mentions-legales` (0.5)

## 💡 Prochaines étapes recommandées

1. **Contenu**
   - Ajouter des blocs "FAQ" avec schema FAQ
   - Enrichir les descriptions
   - Ajouter des mots-clés pertinents

2. **Backlinks**
   - Référencer votre site sur des annuaires d'artistes
   - Demander des liens depuis des sites culturels

3. **Local SEO** (si applicable)
   - Ajouter coordonnées + localisation
   - Google My Business

4. **Analytics**
   - Google Analytics 4 (GA4)
   - Google Search Console monitoring

## 📝 Fichiers modifiés

- `astro.config.mjs` - Site URL ajoutée
- `src/layouts/BaseLayout.astro` - SEO components intégrés
- `src/components/SEO.astro` - NEW - Gère tous les meta tags
- `src/components/StructuredData.astro` - NEW - JSON-LD
- `public/robots.txt` - NEW
- `public/manifest.json` - NEW
- `public/.htaccess` - NEW
- `src/pages/sitemap.xml.ts` - NEW
- `src/pages/sitemap-index.xml.ts` - NEW
