import fs from 'node:fs/promises';

// Meilleur façon d'écrire du code asynchrone en JavaScript
// Simple à lire et à comprendre comme le code synchrone
// Tout en restant non-bloquant comme le code asynchrone
async function copyFile() {
  try {
    const data = await fs.readFile('example.txt', 'utf-8');
    await fs.writeFile('example-copy.txt', data);
    console.log('Fichier copié (asynchrone)');
  } catch (err) {
    console.error('Erreur lors de la lecture ou de l\'écriture du fichier :', err);
  }
}

copyFile();

console.log('Lecture du fichier en cours...');

// pile d'appels
// ^
// |
// |                                                                   [writeFile]              [log "Fichier copié (asynchrone)"]
// |[readFile][log "Lecture du fichier en cours..."] ...loop...        [=>       ] ...loop...   [=>       ]
// +----------------------------------------------------------------------------------------------------------> temps
