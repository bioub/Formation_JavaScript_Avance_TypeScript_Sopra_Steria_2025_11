import fs from "node:fs/promises";

fs.readFile("example.txt", "utf-8")
  .then((data) => {
    return fs.writeFile("example-copy.txt", data);
  })
  .then(() => {
    console.log("Fichier copié (asynchrone)");
  })
  .catch((err) => {
    console.error("Erreur lors de la lecture ou de l'écriture du fichier :", err);
  });

console.log("Lecture du fichier en cours...");
