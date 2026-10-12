# Portfolio — Ahmed Chihab

Portfolio multi-pages statique en HTML5, CSS3 et JavaScript vanilla. Aucun framework, aucun npm et aucun processus de build. Le site peut être ouvert directement via `index.html`.

## Ouvrir le site
1. Décompressez le dossier ZIP.
2. Ouvrez `index.html` dans un navigateur moderne.
3. Utilisez le menu pour passer d'une page HTML indépendante à l'autre.

Google Fonts est chargé depuis le web ; le site reste fonctionnel sans cette connexion, avec les polices de secours du système.

## Personnaliser
- **Photo** : ajoutez votre photo à `assets/images/profile.jpg`. L'avatar actuel « AC » est un placeholder graphique. Pour utiliser la photo, remplacez le bloc `.profile-avatar` dans `a-propos.html` par une balise `<img src="assets/images/profile.jpg" alt="Portrait d'Ahmed Chihab">` et adaptez le CSS pour recadrer l'image en cercle.
- **CV PDF** : placez votre fichier à `assets/cv/cv-ahmed-chihab.pdf`. Le bouton de téléchargement de la page d'accueil pointe déjà vers ce chemin.
- **Citation** : la citation « Je transforme des données brutes en reportings fiables et en indicateurs clairs pour éclairer les décisions. » est une proposition éditoriale à valider ou modifier dans `a-propos.html`.
- **Coordonnées / contenu** : modifiez les fichiers HTML concernés. Le header et le footer sont reproduits de façon identique sur chaque page.
- **Couleurs, espacements, responsive** : modifiez `assets/css/style.css`.
- **Langue** : `assets/js/main.js` contient un dictionnaire FR/EN partiel et le mécanisme de bascule. Le français est la langue complète par défaut ; pour une traduction anglaise complète, ajoutez les traductions aux éléments nécessaires dans le dictionnaire.

## Formulaire de contact
Le formulaire utilise la validation HTML5 et JavaScript, puis ouvre un lien `mailto:` prérempli vers `ahmadog333@gmail.com`. Le navigateur ne peut pas envoyer l'e-mail silencieusement : le visiteur doit confirmer l'envoi dans son application de messagerie.

Pour un formulaire hébergé :
- **Formspree** : créez un formulaire sur Formspree, récupérez l'endpoint fourni et remplacez le traitement `submit` dans `assets/js/main.js` par un `fetch()` vers cet endpoint.
- **Netlify Forms** : ajoutez les attributs `data-netlify="true"` et `name` adaptés à la balise `<form>`, ajoutez un champ caché `form-name`, puis déployez le site sur Netlify. Testez le formulaire après déploiement.

## Déploiement
### GitHub Pages
1. Créez un dépôt GitHub et ajoutez tous les fichiers du dossier.
2. Dans **Settings → Pages**, sélectionnez la branche de publication et le dossier racine.
3. Attendez la publication puis ouvrez l'URL fournie par GitHub Pages.

### Netlify
Importez le dossier ou connectez le dépôt GitHub dans Netlify. Aucun build command ni dossier de publication spécifique n'est nécessaire ; la racine du projet est le dossier de publication.

### Vercel
Importez le dépôt dans Vercel, choisissez un projet statique sans framework et laissez la commande de build vide. Vérifiez que la racine de sortie correspond à la racine du projet.

## Arborescence
```text
portfolio-ahmed-chihab/
├── index.html
├── competences.html
├── experience.html
├── projets.html
├── a-propos.html
├── contact.html
├── README.md
└── assets/
    ├── css/style.css
    ├── js/main.js
    ├── images/
    │   ├── favicon.svg
    │   └── README.txt
    └── cv/README.txt
```

## À ajouter / valider avant publication
1. Votre photo `assets/images/profile.jpg` (facultative mais recommandée).
2. Votre CV PDF `assets/cv/cv-ahmed-chihab.pdf`.
3. La citation de la page À Propos.
4. Vérifiez les coordonnées et le lien LinkedIn avant publication.
5. Pour une traduction EN complète, compléter le dictionnaire de `assets/js/main.js`.
