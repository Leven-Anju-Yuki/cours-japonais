
---

# 🗾 Projet Multimédia - Apprentissage du Japonais

## 📖 Description
Ce projet est une application web interactive conçue pour aider les utilisateurs à apprendre le japonais. Il propose plusieurs fonctionnalités éducatives, notamment :
- 🐾 La découverte des **animaux** et de leurs noms en japonais.
- 🍣 Une liste de **nourritures** japonaises avec leur prononciation et leurs représentations en kanji, katakana, et romaji.
- 🙏 Des **formules de politesse** pour apprendre à s'exprimer dans des situations sociales courantes.
- 🎨 Des ressources sur les **couleurs**, les **membres de la famille**, et les syllabaires japonais (**katakana** et **kanji**).

Le projet inclut également une option pour installer l'application comme **Progressive Web App (PWA)** afin de permettre une utilisation hors ligne.

---

## 📂 Arborescence

```graphql
assets/
├── css/                  # Dossier contenant les fichiers CSS pour le style
│   ├── bootstrap.min.css # Feuille de style Bootstrap minimisée pour une mise en page réactive
│   ├── couleur.css       # Styles spécifiques pour la page des couleurs
│   ├── style.css         # Feuille de style principale personnalisée pour le projet
├── img/                  # Dossier contenant les images utilisées dans le projet
│   ├── animaux/          # Images des animaux pour la page dédiée
│   ├── nourriture/       # Images des plats japonais pour la page de nourriture
│      ├── onigiri/       # Images des onigiri pour la page de nourriture
│      ├── sushi/         # Images des sushi pour la page de nourriture
│      ├── maki/          # Images des maki pour la page de nourriture
│      ├── sashimi/       # Images des sashimi pour la page de nourriture
│      ├── plats/         # Images des plats pour la page de nourriture
│      └── desserts/      # Images des desserts pour la page de nourriture
│   ├── favicon.png       # Favicon pour le projet (petite icône visible dans l'onglet du navigateur)
│   ├── fond pc.avif      # Image de fond pour la version bureau
│   └── fond tel.jiff     # Image de fond pour la version mobile
├── js/                   # Dossier contenant les scripts JavaScript
│   ├── bootstrap.min.js  # Fichier JavaScript Bootstrap minimisé pour des composants dynamiques
│   ├── jquery-3.6.1.min.js # Bibliothèque jQuery minimisée pour simplifier les manipulations DOM
│   └── script.js         # Script principal pour gérer les fonctionnalités interactives du projet
├── animaux.html          # Page HTML dédiée aux animaux et leurs noms en japonais
├── couleur.html          # Page HTML présentant les couleurs en japonais
├── ESSAIE kanji.HTML     # Fichier de test pour les caractères Kanji
├── essaie katakana.html  # Fichier de test pour les caractères Katakana
├── famille.html          # Page HTML dédiée aux membres de la famille en japonais
├── index.html            # Page d'accueil principale du projet
├── nourriture.html       # Page HTML présentant les plats japonais et leur prononciation
├── politesse.html        # Page HTML pour apprendre les formules de politesse en japonais
├── manifest.json         # Fichier de configuration pour la Progressive Web App (PWA)
├── readme.md             # Documentation du projet (ce fichier décrit l'ensemble du projet)
└── sw.js                 # Service Worker pour gérer la mise en cache et le mode hors ligne
```

---

## 🌟 Fonctionnalités Principales

### 1. 🐾 **Pages éducatives :**
Chaque page présente un thème différent pour l'apprentissage du japonais :
- **Animaux :** Images et noms d'animaux en japonais.
- **Nourriture :** Détails des plats japonais avec prononciation et orthographe en kanji, katakana, et romaji.
- **Formules de politesse :** Liste des expressions courantes avec leur traduction et leur prononciation.
- **Couleurs et famille :** Introduction aux couleurs japonaises et aux termes pour désigner les membres de la famille.

### 2. 🔊 **Prononciation interactive :**
Chaque élément dispose d'un bouton permettant d'écouter la prononciation en japonais grâce à l'API `speechSynthesis`.

### 3. 📱 **Progressive Web App (PWA) :**
- Le projet est compatible avec les navigateurs modernes et peut être installé sur un appareil grâce à un **Service Worker**.
- Les utilisateurs peuvent accéder au contenu même sans connexion Internet.

---

## 💻 Technologies Utilisées

### Frontend
- **HTML5**
- **CSS3** (dont Bootstrap pour la mise en page)
- **JavaScript**

### Backend
- Aucun backend (projet statique).

### Autres
- **Service Worker** pour la fonctionnalité PWA.
- **Manifest.json** pour les métadonnées PWA.

---

## 📋 Instructions pour l'utilisation

1. Clonez ce dépôt sur votre machine locale :
   ```bash
   git clone <url_du_dépôt>
   ```
2. Ouvrez le fichier `index.html` dans votre navigateur.

### 🚀 Utilisation comme PWA
1. Ouvrez le projet dans un navigateur compatible PWA (comme Chrome).
2. Cliquez sur "Ajouter à l'écran d'accueil" lorsque l'option est proposée.

---

## 🗂️ À Propos des Fichiers

- **index.html :** Page d'accueil du projet.
- **animaux.html, nourriture.html, etc. :** Pages éducatives pour les différents thèmes.
- **script.js :** Contient les scripts JavaScript principaux, dont la gestion des boutons interactifs et des prononciations.
- **style.css :** Feuille de style principale pour la personnalisation.
- **manifest.json :** Configuration pour la PWA.
- **sw.js :** Service Worker pour le support hors ligne.

---

## ✨ Auteur
Créé par Florie Decitre.  
---