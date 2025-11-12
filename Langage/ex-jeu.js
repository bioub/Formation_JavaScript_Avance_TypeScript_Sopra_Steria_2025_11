// Jeu du plus ou moins
// 1/ Ecrire une fonction qui génère un entier aléatoire entre 0 et 100 (API Math sur MDN)
// 2/ Demander et récupérer la saisie (API Readline sur Node.js) puis afficher si le nombre est plus grand, plus petit ou trouvé
// 3/ Pouvoir trouver en plusieurs tentatives (problème d’asynchronisme)
// 4/ Stocker les essais dans un tableau et les réafficher entre chaque tour (API Array sur MDN)
// 5/ Afficher une erreur si la saisie n'est pas un nombre (API Number sur MDN)
// Attention, le callback de question est toujours appelé avec un type String, à convertir si besoin.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function jouer() {
  rl.question('Entrez un nombre entre 0 et 100: ', (answer) => {
    const userNumber = Number(answer);
    console.log(`Vous avez entré: ${userNumber}`);

    // Pour rejouer :
    jouer();

    // Pour quitter le jeu (quand on a trouvé le nombre) :
    rl.close();
  });
}

jouer();

// Explication :
// pile d'appels
// ^
// |
// |
// |                                              [question    ]
// |[question]                                    [jouer       ]                             
// |[jouer   ] ...loop...                         [taskQuestion] ...loop...   
// +--------------------------------------------------------------------------------------------------> temps
// Sortie :                                        
