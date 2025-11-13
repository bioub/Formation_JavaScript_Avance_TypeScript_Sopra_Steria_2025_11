// Importer Jeu
// ATTENTION à utilise une version récente de Node (v22.21)
// SINON vous pouvez aussi utiliser l'extension .mjs au lieu de .js pour forcer le mode module ES

import Jeu from "./jeu.js";

const jeu = new Jeu({
  min: 10,
  max: 20,
});
jeu.jouer();
