// Importe la fonction getRandomIntInclusive depuis random.js
// Exporte la classe Jeu avec le mot clé default
import readline from 'node:readline';


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
    this.entierAlea = getRandomIntInclusive(min, max);
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