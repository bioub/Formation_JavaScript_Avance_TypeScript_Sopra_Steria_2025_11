import fs from "node:fs";

// Lire un fichier en synchrone
// Puis l'écrire dans un autre fichier en synchrone
try {
  const data = fs.readFileSync("example.txt", "utf-8");
  fs.writeFileSync("example-copy.txt", data);
  console.log("Fichier copié (synchrone)");
} catch (err) {
  console.error("Erreur lors de la lecture ou de l'écriture du fichier :", err);
}

// Lire un fichier en asynchrone
// Puis l'écrire dans un autre fichier en asynchrone
// Le style que prend le code quand on enchaine plusieurs opérations asynchrones
// et qu'on souhaite gérer les erreurs
// devient rapidement illisible et difficile à maintenir
// C'est ce qu'on appelle le "callback hell" / "pyramid of doom"
fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Erreur lors de la lecture du fichier :", err);
    return;
  }
  fs.writeFile("example-copy.txt", data, (err) => {
    if (err) {
      console.error("Erreur lors de l'écriture du fichier :", err);
      return;
    }
    console.log("Fichier copié (asynchrone)");
  });
});
console.log("Lecture du fichier en cours...");

// pile d'appels
// ^
// |
// |                                                                   [writeFile]              [log "Fichier copié (asynchrone)"]
// |[readFile][log "Lecture du fichier en cours..."] ...loop...        [=>       ] ...loop...   [=>       ]
// +----------------------------------------------------------------------------------------------------------> temps
