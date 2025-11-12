// Jeu du plus ou moins
// 1/ Ecrire une fonction qui génère un entier aléatoire entre 0 et 100 (API Math sur MDN)
// 2/ Demander et récupérer la saisie (API Readline sur Node.js) puis afficher si le nombre est plus grand, plus petit ou trouvé
// 3/ Pouvoir trouver en plusieurs tentatives (problème d’asynchronisme)
// 4/ Stocker les essais dans un tableau et les réafficher entre chaque tour (API Array sur MDN)
// 5/ Afficher une erreur si la saisie n'est pas un nombre (API Number sur MDN)
// Attention, le callback de question est toujours appelé avec un type String, à convertir si besoin.
function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  if (essais.length) {
    console.log(`Vos essais précédents: ${essais.join(', ')}`);
  }

  rl.question('Entrez un nombre entre 0 et 100: ', (answer) => {
    const userNumber = Number(answer);
    console.log(`Vous avez entré: ${userNumber}`);

    if (Number.isNaN(userNumber)) {
      console.log('Erreur: Veuillez entrer un nombre valide.');
      return jouer();
    }

    essais.push(userNumber);

    if (entierAlea < userNumber) {
      console.log('C\'est plus petit !');
      jouer();
    } else if (entierAlea > userNumber) {
      console.log('C\'est plus grand !');
      jouer();
    } else {
      console.log('Félicitations, vous avez trouvé le nombre !');
      rl.close();
    }
  });
}

const entierAlea = getRandomIntInclusive(0, 100);
const essais = [];
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
