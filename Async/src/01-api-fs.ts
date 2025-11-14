import fs from "node:fs";

// Lire un fichier en synchrone
// Avantage : plus simple à écrire et à comprendre
// les lignes s'éxécutent dans l'ordre
// Inconvénient : bloque l'exécution du programme
const data = fs.readFileSync("example.txt", "utf-8");
console.log("Contenu du fichier (synchrone) :", data);

// pile d'appels
// ^
// |
// |
// |[readFile XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX][log "Contenu du fichier (synchrone) : ..."]
// +---------------------------------------------------------------------------------------> temps


// Lire un fichier en asynchrone
// Avantage : ne bloque pas l'exécution du programme
// le programme peut faire d'autres choses en attendant
// Inconvénient : plus complexe à écrire et à comprendre
// les lignes ne s'éxécutent pas dans l'ordre
fs.readFile("example.txt", "utf-8", (err, data) => {
  console.log("Contenu du fichier (asynchrone) :", data);
});
console.log("Lecture du fichier en cours...");

// pile d'appels
// ^
// |
// |
// |[readFile][log "Lecture du fichier en cours..."] ...loop...                      [=>     ]
// +---------------------------------------------------------------------------------------> temps
