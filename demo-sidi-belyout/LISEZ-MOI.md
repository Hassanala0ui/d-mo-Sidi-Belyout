# Démo — Portail Numérique de Proximité, Sidi Belyout

## Mettre en ligne en 2 minutes

1. Aller sur **app.netlify.com/drop**
2. Glisser le dossier `demo` entier dans la zone
3. Copier l'URL générée et l'envoyer

Aucun compte n'est nécessaire pour un premier dépôt. Créer un compte gratuit
ensuite permet de garder l'URL et de renommer le site
(par exemple `sidi-belyout-demo.netlify.app`).

Vercel fonctionne aussi : **vercel.com/new** → glisser le dossier.

## Ajouter le timelapse

Déposer deux fichiers dans `assets/` :

| Fichier | Contenu | Poids visé |
|---|---|---|
| `timelapse.mp4` | La vidéo jour → nuit, accélérée 2-3× | < 2 Mo |
| `hero-poster.jpg` | La première image (vue de jour) | < 300 Ko |

Sans ces fichiers, la page affiche un ciel animé jour → nuit en CSS.
La démo reste présentable — mais l'effet est bien meilleur avec la vidéo.

