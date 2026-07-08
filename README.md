# La Taverne Royale - Site vitrine

Site vitrine pour **La Taverne Royale**, un concept fictif de taverne française traditionnelle
implantée dans le quartier Saint-François du Havre.

Projet réalisé en **HTML/CSS avec Bootstrap 5**, dans le cadre de la Mise en situation
professionnelle du Passe Numérique Pro 2026 (CNAM Paris / Le Garage Numérique / Thargo).

**Groupe :** Lorenzo Loconsole, Moussa Bathily, Rafael Cohen

---

## Pages du site

| Fichier | Page |
|---|---|
| `index.html` | Accueil |
| `concept.html` | Concept |
| `carte.html` | À la carte (menu avec filtres entrées / plats / desserts) |
| `contact.html` | Contact |
| `reservation.html` | Réservation (calendrier de disponibilités) |
| `reservation-confirme.html` | Confirmation de réservation |
| `disclaimer.html` | Disclaimer (site fictif, projet pédagogique) |

---

## Organisation des dossiers

```
la-taverne-royale/
│
├── index.html
├── concept.html
├── carte.html
├── contact.html
├── reservation.html
├── reservation-confirme.html
├── disclaimer.html
│
├── css/
│   ├── bootstrap.min.css   <- Bootstrap en local
│   ├── style.css           <- Styles communs (variables, navbar, footer, classes maison)
│   └── index.css           <- Styles spécifiques à la page d'accueil
│
├── js/
│   ├── bootstrap.bundle.min.js
│   ├── index.js            <- Logique du carrousel / accueil
│   └── reservation.js      <- Logique du calendrier de réservation
│
├── images/             <- Images du site
│
├── assets/
│   └── fonts/           <- Polices en local (Pirata One, Roboto Condensed)
│
└── docs/                <- Fiche identité, moodboard, maquette, planning, brief
```

Chaque page HTML charge `css/bootstrap.min.css` puis `css/style.css`, et `js/bootstrap.bundle.min.js`
avant `</body>`.

---

## Charte graphique

Toutes les couleurs et polices sont définies une seule fois dans `css/style.css` et réutilisées
partout via des variables CSS et des classes. Pas de couleur "en dur" dans les pages.

### Couleurs

Le bordeaux est la couleur principale ; le bleu est un accent, employé avec parcimonie (navbar,
footer, liens, éléments interactifs).

| Nom | Code | Variable CSS | Usage |
|---|---|---|---|
| Bordeaux (Stiletto) | `#8C2F39` | `--tr-bordeaux` | Couleur principale : en-têtes, titres, boutons |
| Noir | `#000000` | `--tr-noir` | Texte courant, contrastes |
| Gris clair (Gray Nurse) | `#E1E6E1` | `--tr-gris-clair` | Fonds clairs, surfaces |
| Bleu (Matisse) | `#2176AE` | `--tr-bleu` | Accent : navbar, footer, liens |

### Polices

- **Pirata One** (police "taverne médiévale") pour tous les titres -> classe `font-titre`
- **Roboto Condensed** pour le texte courant -> appliquée par défaut sur `<body>`

### Classes "maison" (définies dans `style.css`)

| Classe | Usage |
|---|---|
| `.bandeau-deco` | Bandeau rayé bordeaux en haut de chaque page |
| `.navbar-taverne` | Navbar bleue (accent) |
| `.btn-reserver` | Bouton bordeaux "Réserver" |
| `.hero-page` / `.hero-overlay` | Grande image en haut de page avec overlay et titre |
| `.section-claire` | Section avec fond gris clair |
| `.titre-section` | Titre `h2` bordeaux en Pirata One |
| `.banniere-image` / `.banniere-overlay` | Bandeau image pleine largeur avec overlay |
| `.footer-taverne` | Footer bleu (accent) |

`concept.html` sert de référence : navbar, footer et usage des classes maison y sont tous présents.

---

## Documents de référence

Le dossier [`docs/`](docs/) contient la fiche identité, le moodboard, la maquette initiale, le
planning et le brief du projet — également référencés depuis la page [Disclaimer](disclaimer.html)
du site.

---

*Projet réalisé dans le cadre du Passe Numérique Pro 2026 - CNAM Paris*
