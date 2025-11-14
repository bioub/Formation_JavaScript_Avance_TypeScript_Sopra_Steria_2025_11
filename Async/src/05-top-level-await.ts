// Depuis ES2020, on peut utiliser le mot-clé `await` dans la portée d'un module (ESM obligatoire).
// Top-level await permet de ne pas avoir à définir une fonction asynchrone

import fs from "node:fs/promises";

try {
  const data = await fs.readFile("example.txt", "utf-8");
  await fs.writeFile("example-copy.txt", data);
  console.log("Fichier copié (asynchrone)");
} catch (err) {
  console.error("Erreur lors de la lecture ou de l'écriture du fichier :", err);
}

// console.log("Lecture du fichier en cours...");
