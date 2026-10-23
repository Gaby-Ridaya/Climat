<p align="center">
  <img src="images/partage_occitan.png" alt="L'Occitan — Regard depuis l'Occitanie" width="800">
</p>

# L'Occitan — Regard depuis l'Occitanie

**Site en ligne :** [gaby-ridaya.github.io/Climat](https://gaby-ridaya.github.io/Climat/)

Depuis Lavaur, je regarde le monde : son histoire, ses spiritualités, ses idées, ses machines,
sa terre et sa musique. L'Occitan est un journal de réflexion, pas de commentaire à chaud.

Conçu et réalisé par **Gabriel Alba**. Rubriques : Histoire & Musique, Pensée & Spiritualité
(philosophie, spiritualité, astrologie), IA & Technologie, Environnement.

---

## Démarche

1. **Partir des sources** — chaque chiffre provient d'une source identifiée, citée en bas de page.
2. **Analyser les données** — les données brutes sont traitées et mises en graphique avec **Python**.
3. **Vulgariser** — chaque étude raconte une idée principale, illustrée par quelques graphiques
   et expliquée en langage simple.
4. **Corriger publiquement** — quand une erreur est identifiée, la page est corrigée et la
   correction est signalée (exemples : *Voiture vs Baleine*, correction de juillet 2026 ;
   *Grande Distribution*, partie betterave mise à jour en octobre 2026 avec la loi d'urgence
   agricole de 2026 et les chiffres FranceAgriMer).

> **Un site en évolution.** Ces analyses ne sont pas figées : je reviens régulièrement sur
> chaque étude pour corriger une erreur ou intégrer des données plus récentes et plus justes
> dès que j'en trouve.

### Choix des sources

- **En priorité, les organismes officiels et institutions scientifiques** : GIEC, FAO, OCDE,
  Eurostat, AIE, NASA, NOAA, Inserm, INRAE-Ifremer, Commission européenne, USDA, FMI.
- **Les études publiées par des chercheurs reconnus**, lorsqu'elles font référence dans leur
  domaine — par exemple les travaux de Joe Roman et James McCarthy sur la
  [« pompe à baleines »](https://doi.org/10.1371/journal.pone.0013255) (PLoS ONE, 2010).
- **Certaines sources indépendantes** (observatoires, ONG, bases de données ouvertes) lorsqu'elles
  sont transparentes sur leur méthode, et en les recoupant avec d'autres sources.
- Les impacts sont exprimés autant que possible en **grandeurs physiques** (tonnes, hectares,
  kg par personne) plutôt qu'en valeurs monétaires, pour mesurer l'impact écologique réel.

---

## Rubrique Histoire & Musique

| Page | Sujet |
|------|-------|
| [Les troubadours](https://gaby-ridaya.github.io/Climat/troubadours.html) | Trois chansons en occitan et en français (éditions Jeanroy 1913, Audiau 1928), et les instruments des jongleurs d'après le *Fadet joglar* (Keller 1905) |
| [Lavaur, 1211 : Dame Guiraude](https://gaby-ridaya.github.io/Climat/lavaur.html) | Dame de Lavaur tuée à la prise de la ville, d'après Guillaume de Tudèle et Pierre des Vaux-de-Cernay (éd. Meyer 1875) |

## Rubrique Environnement : les études

| Étude | Sujet |
|-------|-------|
| [Voiture vs Baleine](https://gaby-ridaya.github.io/Climat/voiture_baleine.html) | Coût écologique d'une voiture face aux services rendus par une baleine |
| [Captivité des Cétacés](https://gaby-ridaya.github.io/Climat/captivite_cetaces.html) | Impact des parcs aquatiques sur les écosystèmes marins |
| [Accord UE-Mercosur](https://gaby-ridaya.github.io/Climat/mercosur.html) | Déforestation amazonienne, exports de soja et de bœuf, scénarios 2026-2050 |
| [Consommation Alimentaire](https://gaby-ridaya.github.io/Climat/consommation.html) | France, Allemagne, USA : viande, poisson, végétarisme |
| [Numérique](https://gaby-ridaya.github.io/Climat/tech_vs_agro.html) | Impacts écologiques du numérique comparés à ceux de l'agriculture |
| [Émissions & Revenu](https://gaby-ridaya.github.io/Climat/emissions_revenu.html) | Le revenu, plus que la population, explique l'empreinte carbone d'un pays |
| [Grande Distribution](https://gaby-ridaya.github.io/Climat/grande_distribution.html) | Gaspillage alimentaire des grandes surfaces ; betterave sucrière : une production stable qui sert à justifier le retour de pesticides interdits |
| [Populations en Déclin](https://gaby-ridaya.github.io/Climat/declin_populations.html) | Espèces indicatrices suivies en Europe, espèce par espèce |
| [Concentration des richesses](https://gaby-ridaya.github.io/Climat/concentration_richesses.html) | Patrimoine des 500 plus grandes fortunes de France comparé au PIB et aux budgets écologiques |

---

## Réalisation technique

- **Analyse et graphiques** : Python
- **Site** : HTML et CSS, sans framework, adapté aux écrans de téléphone
- **Charte graphique L'Occitan** : brun nuit `#2C1A0E`, or doux `#C9A84C`, parchemin `#FDF6E3`,
  titres bordeaux `#6E2233` ; polices Cinzel (titres) et Lora (texte) ; chaque page commence
  par l'en-tête L'Occitan (croix occitane, nom, accroche)
- **Hébergement** : GitHub Pages

```
├── index.html          Page d'accueil
├── *.html              Une page par étude
├── style.css           Feuille de style commune (couleurs L'Occitan en variables)
├── nav.js              Fermeture du menu déroulant
├── favicon.svg         Icône du site (sapin)
├── apple-touch-icon.png  Icône pour l'écran d'accueil des téléphones
├── sitemap.xml
└── images/             Graphiques générés en Python et bannière L'Occitan
```

---

## Contact

Gabriel Alba — [gabriel.ridaya@protonmail.com](mailto:gabriel.ridaya@protonmail.com)

Contenu sous licence [MIT](LICENSE).
