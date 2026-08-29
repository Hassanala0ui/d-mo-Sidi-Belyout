# CLAUDE.md — Démo Portail Numérique de Proximité, Sidi Belyout

---

## 1. Ce qu'est ce projet

Ce dépôt contient une **démo commerciale**, pas le portail de production.

Objectif unique : **remporter le projet**. La cliente consulte plusieurs
développeurs full stack. Là où les autres enverront un PDF et des écrans
Figma statiques, nous envoyons un lien qu'elle ouvre et manipule.

**Ce que nous livrons :**
1. Une démo déployée — accueil interactif, sélecteur d'annexe, carte,
   fiche service, bascule FR/AR
2. Des maquettes bilingues et l'arborescence complète
3. Un document de proposition (cahier des charges, planning, budget)

**Ce que nous ne livrons PAS à ce stade :** back-office, base de données, API,
authentification.
dans un fichier de seed. C'est assumé et normal — nous vendons une vision,
pas un produit fini.

**Règle de portée :** si une tâche ne sert pas directement à convaincre
la cliente, elle n'a pas sa place ici. 

---

## 2. Contexte client

- **Commanditaire final :** arrondissement de Sidi Belyout, Casablanca
  (préfecture Casablanca-Anfa, ~180 000 habitants)
- **Interlocutrice :** contact intermédiaire, en relation directe
  avec l'arrondissement
- **Benchmark fonctionnel cité par la cliente :** ville de Neuilly-sur-Seine — neuillysurseine.fr , dans le dossier references regarde tres tres bien ![alt text](../references/neuilly-.png) ![alt text](../references/neuilly-2026-08-26-14_45_47.png) ![alt text](../references/neuilly-footer.png) ![alt text](../references/neuilly-page-urgence-et-gardes-2026-08-26-14_48_32.png) ![alt text](../references/neuilly-ref.png) ![alt text](../references/neuilly-reference.png) ![alt text](../references/neuilly-website-reference-fr-2026-08-26-14_47_06.png)
 car la client m'as demandé de faire comme le site mais avec touche marocain et je trouve qu'on peut prendre la meme structure des données par exemple la section agenda comment les information présenté et aussi comment tous est fait je veux faire pareil, richesse de contenu, clarté de l'arborescence
- **Attente exprimée :** « je préfère quand même que ce soit concret » —
  elle rejette d'utiliser des noms qui sort de n'importe ou comme lorem... du contenu concret avec les bons noms des quartier...

**Parcours utilisateur cible, à démontrer visuellement :**

> Je choisis mon annexe → je cherche un service → je trouve le plus proche
> → je consulte ses informations → j'appelle ou je lance l'itinéraire

**Les 6 annexes administratives** (fournies par la cliente) :

| # | Annexe | Coordonnées provisoires |
|---|---|---|
| 1 | Bousmara | 33.5905, -7.6180 |
| 2 | Lalla Yacout | 33.5905, -7.6220 |
| 3 | Ben Jdia | 33.5975, -7.6180 |
| 4 | Moussa Bnou Noussair | 33.5890, -7.6300 |
| 5 | Moulay Youssef | 33.5960, -7.6320 |
| 6 | Sour Jdid | 33.6047, -7.6215 |

⚠️ Coordonnées approximatives, en attente des adresses exactes.
Marquer visiblement « position provisoire » dans la démo.

Vocabulaire : ce sont des **annexes administratives**, main on peut aussi prendre comme des quartiers.
Dire « Mon secteur »,  « Mon quartier ».

---

## 3. Stack
- t'es libre de choisir les technologie qu'il faut pour une proposition acroyable les technologie mentionné en dessous c'est que des suggesion 
- **Démo actuelle :** HTML/CSS/JS autonome, — déployable
  par simple dépôt de dossier
- **Portail de production (après signature) :** Next.js App Router,
  Tailwind, next-intl
- **Carte :** Leaflet + fond OpenStreetMap — pas de clé API, pas de coût,
  argument à mentionner à la cliente
- **Assets d'ambiance :** Higgsfield via MCP

Mapbox reste une option à présenter à la cliente si un style cartographique
entièrement personnalisé est souhaité — au prix d'une licence et
d'une dépendance externe. Ne pas trancher à sa place : lui exposer
les deux options.

**Contraintes :**
- TypeScript strict en production, pas de `any`
- Nommage anglais dans le code, français dans l'interface
- Aucune clé ni URL en dur : variables d'environnement
- Leaflet ne fonctionne pas en rendu serveur — import dynamique
  avec `ssr: false` en Next.js

---

## 5. Données de démonstration

Fichier unique `seed.js`. Aucune donnée codée en dur dans un composant.

**Lieux réels de l'arrondissement** (sources publiques, à faire valider) :

| Service | Catégorie | Adresse | Téléphone | Coordonnées |
|---|---|---|---|---|
| Arrondissement de Sidi Belyout | Administration | 150 Bd d'Anfa | — | 33.5949, -7.6265 |
| Complexe Culturel Sidi Belyout | Culture | Rue Sidi Belyout | 05 22 31 67 58 | 33.5957, -7.6111 |
| Siège de la Protection Civile | Secours | Centre-ville | — | 33.5912, -7.6167 |
| Commissariat Sour Jdid | Police | Bd Sour Jdid | — | 33.6047, -7.6215 |
| Hôpital Moulay Youssef | Santé | 112 Bd Moulay Youssef | 05 22 26 54 53 | 33.6028, -7.6323 |
| Centre de Santé My Youssef | Santé | Bd Moulay Youssef | 05 22 27 92 34 | 33.5972, -7.6311 |
| Parc de la Ligue Arabe | Jardin | Bd Moulay Youssef | — | 33.5892, -7.6237 |
| Gare Casa-Port | Transport | Bd Zayid Ou Hmad | — | 33.5992, -7.6126 |
| Complexe Sportif Larbi Ben Mbarek | Sport | Rue Sidi Belyout | — | 33.5956, -7.6088 |
| École Augustin Sourzac | Éducation | Centre-ville | — | 33.5951, -7.6070 |
| Parking Borj Al Yassamin | Parking | 27 Rue Ouled Ziane | 06 38 87 01 37 | 33.5926, -7.6098 |
| Annexe administrative 4 | Administration | Casablanca-Anfa | — | 33.5877, -7.6302 |

**Numéros d'urgence** — Police secours 19, Protection civile 15,
Gendarmerie royale 177.
 À vérifier auprès de l'arrondissement avant toute mise en ligne.
Une erreur sur un numéro de secours n'est pas un bug, c'est une faute.

**Règle absolue :** aucune donnée inventée présentée comme réelle.
Tout élément non confirmé porte une mention « à valider par l'arrondissement ».
Cette mention est un argument commercial, pas un aveu de faiblesse :
elle prouve la rigueur.mais tu peux chercher sur internet trouver des choses qu'on peut mettre des evenements le plus important est d'avoir resultat bon

---

## 6. Modèle de données

Structure à respecter, y compris dans la démo :

| Entité | Champs |
|---|---|
| `Annexe` | id, numéro, nom (fr/ar), description (fr/ar), accent, coordonnées, statut provisoire |
| `Categorie` | id, nom (fr/ar), icône |
| `Service` | id, nom (fr/ar), catégorie, annexe, adresse (fr/ar), téléphone, horaires (fr/ar), note (fr/ar), coordonnées, statut vérifié |
| `Actualite` | id, titre (fr/ar), contenu (fr/ar), date, catégorie |
| `Evenement` | id, titre (fr/ar), description (fr/ar), date, lieu, annexe |
| `Demarche` | id, titre (fr/ar), thématique, pièces, service compétent |
| `Contact` | id, libellé (fr/ar), numéro, indicateur urgence |

Un service peut être rattaché à une annexe ou marqué « transversal ».

---

## 7. Bilinguisme FR / AR et RTL

**Exigence explicite de la cliente. À traiter dès le premier composant,
jamais en rattrapage** — le RTL repris en fin de projet impose une réécriture
complète du CSS.

- Deux locales : `fr` (LTR, défaut) et `ar` (RTL)
- Attribut `dir` piloté par la locale sur `<html>`
- La bascule de langue conserve la page courante
- Aucun texte en dur dans un composant : tout passe par le dictionnaire

**CSS — propriétés logiques uniquement :**
- `margin-inline-start` / `padding-inline-end`, jamais `margin-left` / `padding-right`
- `inset-inline`, `border-inline-start`
- `text-align: start` / `end`, jamais `left` / `right`
- En Tailwind : `ms-` / `me-` / `ps-` / `pe-`, jamais `ml-` / `mr-` / `pl-` / `pr-`
- Attention : `linear-gradient(to inline-end, …)` n'existe pas.
  Utiliser un fond uni ou un dégradé symétrique.
- Icônes directionnelles (flèches, chevrons, retour) : inversées en RTL
- Icônes non directionnelles (téléphone, horloge, épingle) : jamais inversées
- Numéros, heures et chiffres : restent en latin et en LTR même en arabe
  (`direction: ltr; unicode-bidi: embed`)
- Locale `ar` : hauteur de ligne majorée d'environ 15 %

**Vérification :** aucun écran n'est terminé sans avoir été contrôlé
dans les deux directions.

Atout à exploiter : le développeur est arabophone natif. La qualité de la
version arabe est un différenciateur direct face aux concurrents — la soigner
autant que la version française, pas la traiter comme une variante secondaire.

---

## 8. Identité visuelle
 **logo** : utilise : ![alt text](../references/logo-royaume2.png) et pour le favicon on peut utiliser :![alt text](../references/Coat_of_arms_of_Moroccco.svg)
**Palette**   
 je veux faire comme /home/hassan/Téléchargements/sidiBelyout/references/watiqa-accueil.png & le site :/home/hassan/Téléchargements/sidiBelyout/references/rsu-parcours-numerote.png en terme de couleurs car le maroc le vert et le rouge c'est l'identité mais avec des couleur Or / sable (accent, prestige), on va faire une proposition et c"est a la cliente de choisir la palette ideal

**Accents par annexe** — le sélecteur change la couleur d'accent du site.
Six teintes, chacune avec une variante foncée pour le texte sur fond clair.
Définies en variables CSS, jamais en dur dans un composant.

| # | Annexe | Accent | Variante texte |
|---|---|---|---|
| 1 | Bousmara | `#C9A227` | `#8A6D10` |
| 2 | Lalla Yacout | `#D98E3B` | `#95571A` |
| 3 | Ben Jdia | `#4FA3A5` | `#2A6D6F` |
| 4 | Moussa Bnou Noussair | `#A8654A` | `#7A4229` |
| 5 | Moulay Youssef | `#7A8FBF` | `#43598C` |
| 6 | Sour Jdid | `#9C7BA8` | `#6B4A78` |


**Typographie**

| Rôle | Latin | Arabe |
|---|---|---|
| Titres | Playfair Display 600 | Noto Naskh Arabic 600 |
| Corps | Inter 400/500 | IBM Plex Sans Arabic 400/500 |
| Intitulés de section | Inter 700, 11 px, interlettrage 0,18em, capitales | IBM Plex Sans Arabic 600, 13 px, sans capitales ni interlettrage |

Playfair et Inter ne couvrent pas l'arabe : le basculement de famille
est piloté par la locale.

Échelle typographique resserrée : 12 / 13,5 / 15 / 17 / 21 / 27 / 34 / 44.
Ne pas introduire de tailles intermédiaires.
Le corps de texte ne dépasse jamais 68 caractères par ligne.
tu peux aussi voir /home/hassan/Téléchargements/sidiBelyout/references/Cairo-Regular.woff2 si ça couvre l'arabe pourquoi pas 
---

## 9. Direction artistique

### 9.1 Référence visuelle

La référence **fonctionnelle** est Neuilly-sur-Seine — richesse de contenu,
clarté de l'arborescence.

La référence **visuelle** est le registre institutionnel marocain, tel qu'il
s'exprime sur watiqa.ma et rsu.ma : ancrage patrimonial discret, générosité
des blancs, hiérarchie nette, aucune ostentation.

Des captures de référence sont dans references/, commentées dans references/NOTES.md. Les consulter avant toute modification de la direction artistique.

### 9.2 Les six codes à reprendre

**1. Le zellige en filigrane, en mode clair aussi**

Le code le plus caractéristique, et celui qui manque le plus dans la démo
actuelle. Sur les portails marocains, le motif apparaît en filigrane derrière
certaines sections, en mode clair comme en mode sombre.

- Motif géométrique on peut utiliser ce qu'on a dans le dossier reference principalement ce background: ![alt text](image.png), et aussi les autres : ![alt text](../references/bgAvantageMng-ar.png) ![alt text](../references/bgBlocTop-ar.png) ![alt text](../references/bgBlocTop.png) ![alt text](../references/bgContacterSupport.png) ![alt text](../references/bgContent1-left.21b761aebb803b33.png) ![alt text](../references/bgContent2-right.3873048225997c31.png) ![alt text](../references/bgDemarcheBottom.png) ![alt text](../references/bgFooterVague.5439432b5f643c36.jpg) ![alt text](../references/bgFooterVague.jpg) ![alt text](../references/bgHeader.png) ![alt text](../references/bgTopCarousel.png)
- Appliqué sur **une section sur deux ou trois**
- Test : si le motif attire l'œil avant le texte, baisser l'opacité

**3. La hiérarchie de section institutionnelle**

Convention à tenir sur toutes les sections :
- regarde l'inspiration de site de neuilly sur sein leurs sections est bons on peut faire pareil

En arabe : ni capitales ni interlettrage — la casse n'existe pas
et l'interlettrage casse les liaisons.


**6. La générosité des blancs**

Les portails marocains respirent bien plus que notre démo actuelle.
Espacement vertical entre sections : 96 px minimum en desktop, 64 px en mobile.
Les titres de section sont séparés de leur contenu par 40 px au moins.


---

## 10. Timelapse Higgsfield — le « secret weapon »

**Concept :** pas un timelapse de chantier (trop technique, trop froid)
mais un timelapse de **vie de quartier**.

**Méthode validée :**
1. Partir d'une photo réelle libre de droits (licence Unsplash vérifiée),
   d'un lieu du centre-ville de Casablanca, en 16:9
2. Générer la version nuit avec Nano Banana Pro, en verrouillant
   explicitement l'architecture : « identical buildings, identical palm trees,
   only light and sky change »
3. Faire varier ce qui doit bouger entre les deux frames — un objet identique
   dans les deux images restera figé quel que soit le prompt.
   Exemple retenu : tram présent le jour, absent le soir (le service est
   terminé), ce qui produit un déplacement réel et crédible
4. Générer la vidéo avec Kling 3.0, jour en frame de départ, nuit en frame
   d'arrivée, 10 secondes
5. Vocabulaire anti-morphing obligatoire : « architecture stays perfectly
   rigid and identical », « only light, sky and moving traffic change »



**Préparation des fichiers :**

```bash
# accélérer 2,5× et compresser
ffmpeg -i source.mp4 -filter:v "setpts=0.4*PTS,scale=1600:-2" \
  -an -c:v libx264 -crf 28 -preset slow -movflags +faststart \
  assets/timelapse.mp4

# extraire l'image poster
ffmpeg -i assets/timelapse.mp4 -vframes 1 -q:v 3 assets/hero-poster.jpg
```

Cible : moins de 2 Mo pour la vidéo, moins de 300 Ko pour le poster.

**Intégration technique :**
- Poster statique affiché immédiatement, vidéo chargée après le contenu
- La page reste pleinement utilisable si la vidéo ne charge jamais
- Repli en ciel animé CSS si aucun fichier n'est présent
- Respecter `prefers-reduced-motion` : poster seul si les animations
  sont désactivées

**Argument commercial associé, à placer dans la proposition :**

> Nous ne faisons pas qu'un site, nous donnons vie à votre patrimoine.
> Chaque futur aménagement — nouveau parc, réfection d'une rue — pourra être
> présenté aux habitants sous cette forme avant même la fin des travaux.

**Encadrement des visuels IA :**
- **Autorisé** — ambiance et valorisation du territoire : hero, transitions,
  en-têtes de rubriques

---

## 11. Qualité — définition du « terminé »

Un écran est terminé quand :

1. Il fonctionne en français et en arabe, RTL vérifié
2. Il ne casse pas en petit écran — la cliente ouvrira le lien sur son téléphone
3. Il est navigable au clavier, focus visible
4. Il ne consomme aucune donnée codée en dur hors de `seed.js`
5. Il gère l'état vide et l'état de chargement
6. Contraste minimum 4,5:1, zones tactiles d'au moins 44 × 44 px
7. Les numéros de téléphone sont des liens `tel:` fonctionnels

**Accès à l'information :** aucune animation ne retarde l'accès aux numéros
d'urgence. Ils sont atteignables sur toutes les pages sans scroll.

---

## 12. Méthode d'itération front end

Le rendu se juge à l'écran, pas dans le code.

1. Auditer la page contre les règles de design
   (skill `web-design-guidelines` de vercel-labs)
2. Ouvrir la page dans le navigateur, capturer, comparer (Playwright MCP)
4. Vérifier après chaque passe : mode clair, mode sombre, français, arabe,
   petit écran

Ordre de traitement : hiérarchie et espacement d'abord, texture ensuite,
détails en dernier. Une page bien espacée sans motif vaut mieux qu'une page
richement texturée mais mal rythmée.

Avant d'installer un skill tiers, lire son `SKILL.md` — ce sont des
instructions que l'agent suivra ensuite sans relecture.

---

## 13. Cadre institutionnel

- Le logo et la charte de l'arrondissement, une fois fournis, priment
  sur nos choix graphiques
- Aucune mention nominative d'élu sans validation écrite
- Conformité loi marocaine 09-08 (CNDP) sur les données personnelles :
  consentement explicite pour la géolocalisation, aucune collecte
  au-delà du nécessaire
- Mentions légales et politique de confidentialité en FR et AR
- Code source et contenus deviennent propriété de l'arrondissement
  à la livraison finale
- Aucune dépendance propriétaire empêchant la reprise par un autre prestataire

---

## 14. Points ouverts côté client

À maintenir à jour et à présenter comme preuve de méthode :

- [ ] Adresses et coordonnées exactes des 6 annexes
- [ ] Logo et charte graphique de l'arrondissement
- [ ] Périmètres géographiques de chaque annexe
- [ ] Fichier des services et équipements (modèle Excel à fournir)
- [ ] Qui produit les traductions arabes
- [ ] Qui saisit les données initiales
- [ ] Hébergement et propriété du nom de domaine
- [ ] Interlocuteur unique pour les validations
- [ ] Validation de l'usage de visuels générés par IA
- [ ] Vérification des numéros d'urgence
- [ ] Arbitrage carte : Leaflet (gratuit) ou Mapbox (style personnalisé, licence)

---

## 15. Arbitrages

En cas de conflit entre deux exigences, l'ordre est :

1. **Exactitude de l'information** — un numéro d'urgence juste avant tout
2. **Accès rapide à l'information** — le portail sert d'abord à trouver
3. **Complétude bilingue FR/AR** — exigence explicite de la cliente
4. **Esthétique et effet visuel** — ce qui emporte la décision

L'esthétique arrive en dernier sans être négligeable : c'est elle qui fait
gagner l'appel d'offres. Mais elle ne se paie jamais au prix
des trois premiers points.

---

## 16. Rôle de Claude sur ce projet

- Générer le code en respectant strictement les règles RTL de la section 7
  et la direction artistique de la section 9
- Piloter Higgsfield via MCP pour produire les assets d'ambiance
- Rédiger les textes du site et de la proposition — ton institutionnel,
  phrases courtes, verbes actifs, jamais de jargon technique côté habitant
- Assurer la cohérence entre la proposition écrite et la démo livrée
- Signaler tout écart entre ce qui est promis dans la proposition
  et ce qui est réellement démontré
- Rester dans le périmètre de la section 1 : ne pas dériver vers
  l'architecture de production

**Copie :** noms des choses tels que l'habitant les reconnaît, jamais tels que
le système les nomme. Un bouton dit ce qui se passe quand on l'active.
« Appeler », pas « Contacter ». « Voir l'itinéraire », pas « Naviguer ».

**Typographie — tiret cadratin interdit :** ne jamais utiliser le tiret
cadratin (—) dans les textes du site, les titres, ni les commentaires de
code. Utiliser un tiret simple (-) entouré d'espaces, ou reformuler
la phrase (virgule, parenthèses, point).
