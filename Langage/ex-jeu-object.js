// Exercice 1
// Créer un namespace object Random
// qui contient les 4 fonctions de génération de nombres aléatoires
// vues précédemment (getRandom, getRandomArbitrary, getRandomInt, getRandomIntInclusive)
// Remplacer la création de entierAlea par un appel à Random.getRandomIntInclusive(0, 100)

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
      console.log("C'est plus petit !");
      jouer();
    } else if (entierAlea > userNumber) {
      console.log("C'est plus grand !");
      jouer();
    } else {
      console.log('Félicitations, vous avez trouvé le nombre !');
      rl.close();
    }
  });
}

// Exercice 2
// Créer une classe Jeu
// dont le constructeur initialise rl, entierAlea et essais sous forme de propriétés de l'objet
// et qui possède une méthode jouer() qui reprendra le code de la fonction jouer actuelle

// On doit pouvoir créer la partie en faisant : 
// const jeu = new Jeu();
// et lancer la partie en faisant : 
// jeu.jouer();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const entierAlea = getRandomIntInclusive(0, 100);
const essais = [];
jouer();

// Exercice 3
// Modifier le constructeur de la classe Jeu
// pour qu'il accepte un paramètre options de type object
// qui pourra contenir les propriétés min et max
// représentant les bornes entre lesquelles le nombre aléatoire sera généré
// (par défaut min = 0 et max = 100 si non spécifié)
// Utiliser ces valeurs pour générer entierAlea

// Tout ces appels aux constructeurs doivent fonctionner :
// const jeu1 = new Jeu(); // min = 0, max = 100
// const jeu2 = new Jeu({}); // min = 0, max = 100
// const jeu3 = new Jeu({ min: 50 }); // min = 50, max = 100
// const jeu4 = new Jeu({ max: 50 }); // min = 0, max = 50
// const jeu5 = new Jeu({ min: 20, max: 30 }); // min = 20, max = 30
