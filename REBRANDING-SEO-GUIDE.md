# Guide de Rebranding SEO : Vicky Versari → Ziky Versari

## 🎭 Contexte
Transition du nom d'artiste de **Vicky Versari** à **Ziky Versari**. Objectif : consolider l'identité en ligne et rediriger le SEO des anciennes mentions.

## ✅ Changements implémentés

### 1. **Schema.org (JSON-LD)**
- ✅ Ajout de `alternativeName: "Vicky Versari"` dans le structured data
- ✅ Description met à jour pour inclure "(anciennement Vicky Versari)"
- 📍 Localisation : `src/components/StructuredData.astro`

### 2. **Meta Tags SEO**
- ✅ Keywords liés : "Ziky Versari, Vicky Versari, clown..."
- ✅ Author meta tag ajouté
- 📍 Localisation : `src/components/SEO.astro`

### 3. **Contenu Visible**
- ✅ Mention dans la page biographie : "Anciennement connue sous le nom de Vicky Versari"
- 📍 Localisation : `src/pages/biographie.astro`

## 🔧 Comment renforcer le lien

### Option 1 : Ajouter une page "À propos" détaillée
Créer `src/pages/a-propos.astro` avec :
```markdown
# À propos - Ziky Versari

Ziky Versari, anciennement connue sous le nom de **Vicky Versari**, 
est une clown-e et jongleureuse antipodiste française...

[Vous pouvez nous connaître sous les deux noms : Ziky Versari ou Vicky Versari]
```

### Option 2 : Mentions dans les réseaux sociaux
- Bio Instagram/Facebook : "Anciennement @vicky.versari"
- Lier les comptes avec Meta Business Suite

### Option 3 : Redirections depuis annuaires
Si vous êtes référencée sous "Vicky Versari" sur :
- Annuaires d'artistes de cirque
- Sites de réservation d'événements
- Annuaires professionnels

→ Demander aux plateformes de mettre à jour vers "Ziky Versari" en conservant les liens anciens

### Option 4 : Backlinks
- Créer du contenu mentionnant la transition
- Partager un communiqué de presse : "Vicky Versari devient Ziky Versari"
- Lier depuis les anciens contenus vers les nouveaux

## 📊 Comment vérifier l'efficacité

### Outil : Google Search Console
1. Ajouter votre site
2. Aller à "Apparence dans les résultats de recherche" → "Améliorations"
3. Chercher "Vicky Versari" :
   - Avant : ❌ Peu ou pas de résultats
   - Après : ✅ Redirection vers "Ziky Versari"

### Outil : Google Analytics
- Tracker les termes de recherche incluant "vicky" ou "vicky versari"
- Voir si le trafic se canalise vers Ziky Versari

## 🌐 Impact SEO local vs global

**Local (référencement google.com/maps) :**
- Mettre à jour Google My Business
- Ajouter "Anciennement Vicky Versari" dans la description

**Global :**
- Les tags alternativeName et keywords aident Google
- Les backlinks renforcent l'association des deux noms
- Le contenu mentionnant les deux noms améliore le classement

## 💡 Prochaines étapes

- [ ] Vérifier et mettre à jour les annuaires d'artistes
- [ ] Ajouter des mentions dans les biographies LinkedIn/Vimeo/etc
- [ ] Tracker dans Google Search Console les recherches "Vicky"
- [ ] Créer du contenu/PR parlant de la transition
- [ ] Mettre à jour les anciens portfolios/sites

## 📝 Fichiers modifiés

- `src/components/StructuredData.astro` - alternativeName ajoutée
- `src/components/SEO.astro` - Keywords et author meta tags
- `src/pages/biographie.astro` - Mention visuelle de la transition
