# 侍 Lorenzo Bellier — Portfolio

> Portfolio interactif full React · Thèmes Japon · Corée · Chine · Manga · K-Pop · Drama  
> **Expérience immersive optimisée pour Desktop & Version fluide dédiée pour Mobile**

[![React](https://img.shields.io/badge/React-18-61dafb?logo=react)](https://reactjs.org)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## ✨ Fonctionnalités

### 🖥️ Version Bureau (Desktop)
L'expérience bureau est conçue comme un voyage visuel à travers différents pans de la culture asiatique :

| Section | Concept Visuel |
|---|---|
| 🏠 **Accueil** | Effet typewriter + glitch sur le nom avec Kanji en arrière-plan. |
| 👤 **À propos** | Portrait chinois interactif basé sur l'esthétique Xianxia. |
| 📚 **Diplômes** | Étagère de Mangas — chaque tome est un diplôme avec son synopsis. |
| 📜 **Compétences** | Bibliothèque de parchemins japonais anciens classés par étages. |
| 💿 **Projets** | Discothèque K-Pop — les dépôts GitHub sont présentés comme des albums. |
| 🎬 **Contact** | Interface inspirée des plateformes de streaming K-Drama. |

### 📱 Version Mobile
- **Interface Native** : Développée spécifiquement dans `portfolio-mobile.jsx` pour une ergonomie optimale.
- **Tab Bar Intuitive** : Navigation basse pour une utilisation facile à une main.
- **Performance** : Styles allégés et animations fluides pour tous les écrans.

---

## 🎨 6 Thèmes Dynamiques
Le portfolio change instantanément d'ambiance via le **ThemeSwitcher**. Chaque thème impacte les couleurs, les particules (Sakura, Dragons, Musique), les dégradés et les Kanji :
- **日本 (Japon)** · **한국 (Corée)** · **中国 (Chine)** · **MANGA** · **K-POP** · **DRAMA**

---

## 🚀 Installation locale

### Prérequis
- [Node.js](https://nodejs.org) version 18+
- npm

### Procédure

```bash
# 1. Cloner le projet
git clone [https://github.com/LorenzoBellier/lorenzo-bellier-portfolio.git](https://github.com/LorenzoBellier/lorenzo-bellier-portfolio.git)
cd lorenzo-bellier-portfolio

# 2. Installer les modules
npm install

# 3. Lancer le serveur local
npm run dev
Accès : http://localhost:5173. 🎌

📁 Structure du Projet
Plaintext
portfolio/
├── src/
│   ├── assets/           # Images (Portrait, icônes)
│   ├── components/       # Composants complexes pour la version PC
│   ├── data/             # SOURCE DE VÉRITÉ (Fichiers JS partagés)
│   │   ├── themes.js     # Définition des 6 styles
│   │   ├── diplomas.js   # Données des diplômes
│   │   ├── projects.js   # Liste des projets GitHub
│   │   └── skills.js     # Compétences et niveaux
│   ├── App.jsx           # Détecteur de taille d'écran & Router
│   ├── portfolio-mobile.jsx # Version Mobile complète
│   └── index.css         # Reset CSS & Fonts globales
├── vite.config.js
└── package.json
🌐 Déploiement
Le projet est configuré pour être déployé sur GitHub Pages.

Vérifiez la base dans vite.config.js.

Exécutez :

Bash
npm run deploy
✏️ Personnalisation
Le projet est conçu pour être mis à jour sans toucher au code visuel :

Modifier les textes : Editez simplement les fichiers dans src/data/.

Changer de thème : Ajoutez ou modifiez des couleurs dans src/data/themes.js.

Contact : Les liens sont modifiables directement dans les composants de contact (PC et Mobile).

🛠️ Stack Technique
React 18 : Logique de composants et gestion d'état (useState, useEffect).

Vite 5 : Environnement de développement ultra-rapide.

CSS-in-JS : Styles dynamiques calculés selon le thème actif.

Google Fonts : Utilisation de Noto Serif JP pour l'élégance typographique.

📄 Licence
MIT — Utilisation libre pour vos projets personnels.

Fait avec ❤️ par Lorenzo Bellier · 🎌