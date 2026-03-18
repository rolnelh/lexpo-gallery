# Chariow Marketplace — Prototype

Prototype fonctionnel de la marketplace publique `/explorer` pour Chariow.

## Structure

```
src/
├── data/
│   └── products.json        # 8 produits fictifs réalistes
├── components/
│   └── ProductCard.jsx      # Card réutilisable
├── pages/
│   ├── LandingPage.jsx      # Page / (présentation du pitch)
│   ├── ExplorerPage.jsx     # Page /explorer (marketplace)
│   └── ProductPage.jsx      # Page /produit/:slug (SEO dynamique)
└── App.jsx                  # Routes
```

## Pages

| Route | Description |
|---|---|
| `/` | Landing de présentation pour l'équipe Chariow |
| `/explorer` | Marketplace publique avec recherche et filtres |
| `/produit/:slug` | Page produit avec balises SEO dynamiques |

## Installation

```bash
npm install
npm start
```

## Déploiement sur Vercel

1. Créer un compte sur [vercel.com](https://vercel.com)
2. `npm install -g vercel`
3. `vercel` dans le dossier du projet
4. Suivre les instructions

Le fichier `vercel.json` gère déjà les redirections SPA.

## Ce que ce prototype démontre

- Marketplace publique filtrée par catégorie, prix, popularité
- Barre de recherche avec tags populaires
- Balises meta SEO dynamiques par page produit (`react-helmet-async`)
- JSON-LD structured data (Schema.org Product) pour Google
- Paiements Mobile Money affichés (Orange, MTN, Wave, Moov)
- Design calqué sur l'identité Chariow (jaune #EF9F27)
- Routing SPA avec URLs propres (`/produit/slug`)
