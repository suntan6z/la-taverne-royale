# La Taverne Royale - Site vitrine

Projet de création de site web réalisé dans le cadre de la **Mise en situation professionnelle**
du **Passe Numérique Pro 2026** (CNAM Paris / Le Garage Numérique / Thargo)
Période : 19 juin - 13 juillet 2026

**Groupe :** Lorenzo Loconsole, Moussa Bathily, Rafael Cohen
**Formateur :** Brice Laguerodie

---

## C'est quoi ce projet ?

On doit inventer un concept de restaurant et créer son site web vitrine complet.
Le restaurant s'appelle **La Taverne Royale**, une taverne française traditionnelle implantée dans le quartier Saint-François du Havre.

Le site est réalisé en **HTML/CSS avec Bootstrap**, le framework CSS utilisé tout au long de notre formation.

---

## Ce qu'il faut livrer

| Livrable | Outil | Responsable |
|---|---|---|
| Planche Identité (logo, couleurs, typo) | Figma / Canva | Moussa |
| Moodboard | Milanote | Rafael |
| Maquette Figma (Accueil + A la carte) | Figma | Lorenzo |
| **Site web HTML/CSS Bootstrap (4-5 pages)** | VS Code | Groupe |
| 2 posts Instagram fictifs | Canva / Figma | Moussa |
| Retro-planning | Word / Excel | Lorenzo |
| Rapport de projet individuel (PDF) | Word | Chacun |
| Diaporama de soutenance | PowerPoint | Groupe |

### Pages du site et répartition

| Fichier | Page | Responsable |
|---|---|---|
| `index.html` | Accueil | Rafael |
| `concept.html` | Concept | Lorenzo |
| `contact.html` | Contact | Moussa |
| `carte.html` | A la carte (section interactive) | Les trois |

> La page `carte.html` contient une section avec des boutons pour filtrer les entrées, plats et desserts. Les trois membres du groupe travaillent dessus, donc faites attention aux conflits sur ce fichier (voir règles plus bas).

---

## Organisation des dossiers

```
la-taverne-royale/
│
├── index.html          <- Page Accueil (Rafael)
├── concept.html        <- Page Concept (Lorenzo)
├── carte.html          <- Page A la carte (tous les trois)
├── contact.html        <- Page Contact (Moussa)
│
├── css/
│   ├── bootstrap.min.css    <- Bootstrap en local
│   └── style.css            <- Styles personnalisés (par-dessus Bootstrap)
│
├── js/
│   └── bootstrap.bundle.min.js  <- Bootstrap JS en local
│
├── images/             <- Toutes les images du site
│
└── assets/             <- Logo, polices, icônes...
```

**Bootstrap est inclus en local** dans le dossier du projet. Les fichiers sont déjà dans le repo, tu les récupères automatiquement au `git clone`.

Dans le `<head>` de chaque page HTML :

```html
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/style.css">
```

Et juste avant la fermeture de `</body>` :

```html
<script src="js/bootstrap.bundle.min.js"></script>
```

---

## Installer les outils (a faire une seule fois)

### 1. Installer Git

Git est le logiciel qui permet de synchroniser votre travail entre vous.

**Windows**
1. Va sur [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Télécharge et installe (laisse toutes les options par défaut, clique juste "Next")
3. Une fois installé, ouvre **Git Bash** (cherche-le dans le menu Démarrer)

**macOS**
1. Ouvre le **Terminal** (cherche "Terminal" dans Spotlight avec `Cmd + Espace`)
2. Tape cette commande et appuie sur Entree :
```
git --version
```
3. Si Git n'est pas installé, macOS te propose automatiquement de l'installer, accepte

**Linux (Ubuntu/Debian)**
1. Ouvre le **Terminal**
2. Tape :
```
sudo apt install git
```

---

### 2. Installer VS Code

L'éditeur de code recommandé pour ce projet.
[https://code.visualstudio.com](https://code.visualstudio.com)

Télécharge la version pour ton système et installe normalement.

---

### 3. Configurer Git avec ton identité (a faire une seule fois)

Ouvre Git Bash (Windows) ou Terminal (Mac/Linux) et tape ces deux commandes
en remplaçant par ton prénom/nom et ton email GitHub :

```bash
git config --global user.name "Ton Prénom Nom"
git config --global user.email "ton@email.com"
```

---

## Récupérer le projet sur ton ordinateur

Cette étape s'appelle **cloner** le dépôt. Tu n'as à le faire **qu'une seule fois**.

1. Ouvre Git Bash (Windows) ou Terminal (Mac/Linux)
2. Va dans le dossier où tu veux mettre le projet, par exemple sur le Bureau :
```bash
cd Desktop
```
3. Clone le projet :
```bash
git clone https://github.com/suntan6z/la-taverne-royale.git
```
4. Entre dans le dossier créé :
```bash
cd la-taverne-royale
```

Tu peux maintenant ouvrir ce dossier dans VS Code.

---

## Travailler au quotidien - les 3 commandes a retenir

A chaque fois que tu t'installes pour travailler, suis ces étapes dans l'ordre.

### Etape 1 - Récupérer le travail des autres (TOUJOURS en premier !)
```bash
git pull
```
> Ne jamais oublier cette commande avant de commencer a coder. Sinon tu risques des conflits.

### Etape 2 - Tu travailles, tu modifies tes fichiers...

### Etape 3 - Envoyer ton travail (quand tu as fini ta session)
```bash
git add .
git commit -m "Description de ce que tu as fait"
git push
```

**Exemples de messages de commit clairs :**
- `"Ajout de la structure HTML de la page contact"`
- `"Mise en page du menu dans carte.html"`
- `"Correction des couleurs du header"`

---

## Règle d'or pour éviter les conflits

**Chacun travaille sur ses propres fichiers.**
Si deux personnes modifient le même fichier en même temps, Git ne sait plus quelle version garder.

Pour `carte.html` qui est partagée entre les trois, communiquez avant de vous y mettre : décidez qui travaille dessus a quel moment, et prévenez les autres sur Matrix quand vous avez fini et pushé.

---

## En cas de problème

**"J'ai un message d'erreur quand je fais `git push`"**
Tu as peut-être oublié le `git pull` avant. Fais-le maintenant et recommence.

**"Je ne sais pas si mon push a marché"**
Va sur [github.com/suntan6z/la-taverne-royale](https://github.com/suntan6z/la-taverne-royale) et vérifie si tes fichiers sont bien là.

**"J'ai cassé quelque chose"**
Pas de panique, Git garde tout l'historique. Contacte Lorenzo ou demande a Brice.

---

## Dates importantes

| Date | Echeance |
|---|---|
| 10/07/2026 | Rendu du rapport individuel (PDF par mail) |
| 13/07/2026 | Soutenance orale |

---

*Projet réalisé dans le cadre du Passe Numérique Pro 2026 - CNAM Paris*
