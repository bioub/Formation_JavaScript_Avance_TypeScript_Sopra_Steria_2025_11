// Exercice 1
// Créer un namespace object Random
// qui contient les 4 fonctions de génération de nombres aléatoires
// vues précédemment (getRandom, getRandomArbitrary, getRandomInt, getRandomIntInclusive)
// Remplacer la création de entierAlea par un appel à Random.getRandomIntInclusive(0, 100)

// A EVITER, privilégier 4 fonctions exportées depuis un module
const Random = {
  getRandom() {
    return Math.random();
  },
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  },
  getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  },
};

const readline = require('readline');

// Exercice 2
// Créer une classe Jeu
// dont le constructeur initialise rl, entierAlea et essais sous forme de propriétés de l'objet
// et qui possède une méthode jouer() qui reprendra le code de la fonction jouer actuelle

// On doit pouvoir créer la partie en faisant :
// const jeu = new Jeu();
// et lancer la partie en faisant :
// jeu.jouer();

class Jeu {
  constructor(options = {}) {
    // const min = options && typeof options.min === 'number' ? options.min : 0;
    // const max = options && typeof options.max === 'number' ? options.max : 100;
    const min = options.min ?? 0;
    const max = options.max ?? 100;

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = Random.getRandomIntInclusive(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log(`Vos essais précédents: ${this.essais.join(', ')}`);
    }

    this.rl.question('Entrez un nombre entre 0 et 100: ', (answer) => {
      const userNumber = Number(answer);
      console.log(`Vous avez entré: ${userNumber}`);

      if (Number.isNaN(userNumber)) {
        console.log('Erreur: Veuillez entrer un nombre valide.');
        return this.jouer();
      }

      this.essais.push(userNumber);

      if (this.entierAlea < userNumber) {
        console.log("C'est plus petit !");
        this.jouer();
      } else if (this.entierAlea > userNumber) {
        console.log("C'est plus grand !");
        this.jouer();
      } else {
        console.log('Félicitations, vous avez trouvé le nombre !');
        this.rl.close();
      }
    });
  }
}

const jeu = new Jeu({
  min: 10,
  max: 20,
});
jeu.jouer();

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
