// En JavaScript on manipule souvent des objets qui sont déjà existants

// Définis par le langage :
console.log(typeof Math); // "object"
console.log(typeof JSON); // "object"
console.log(typeof 'abc'); // "string"
console.log(typeof String); // "function"
console.log(typeof []); // "object"

// Ou par la plateforme (Node.js, navigateur, etc.) :
console.log(typeof process); // "object" (Node.js)
console.log(typeof console); // "object" (Node.js et navigateur)
console.log(typeof document); // "object" (navigateur)

// L'objet en Javascript est une collection de paires clé/valeur
// -> c'est un dictionnaire (on peut ajouter, modifier, supprimer des paires clé/valeur)
// Dans d'autres languages on parlerait de "hashmap", "map", "table de hachage", "associative array", etc.

console.log(Math.sum); // undefined

// Ajouter une nouvelle paire (clé/valeur) à l'objet Math
Math.sum = function (a, b) {
  return a + b;
};
console.log(Math.sum(2, 3)); // 5

// Modifier une paire (clé/valeur) de l'objet Math
Math.sum = function (a, b) {
  return Number(a) + Number(b);
};
console.log(Math.sum('2', '3')); // 5

// Supprimer une paire (clé/valeur) de l'objet Math
delete Math.sum;
console.log(Math.sum); // undefined

// MAUVAISE PRATIQUE : modifier les objets natifs du langage, de la palateforme ou des bibliothèques
// Plus généralement des objets qui ne nous appartiennent pas

// On peut aussi créer nos propres objets
// Il y a plusieurs façons de le faire

// 1/ Avec la syntaxe littérale
// Use cases :
// - pour créer un objet unique (le temps de passer des paramètres à une fonction, un namespace object, app configuration object, etc.)
// - pour des objets créés plusieurs si possible sans méthode (data objects, etc.)
const MyMath = {
  sum: function (a, b) {
    return a + b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

const obj1 = {
  key1: 'value1',
  key2: 42,
  key3: function () {
    console.log("key1 ", this.key1);
  },
};
obj1.key4 = 'new value'; // Ajouter une nouvelle paire clé/valeur

const obj2 = {
  key1: 'value1',
  key2: 42,
  key3: function () {
    console.log("key1 ", this.key1);
  },
};

// Accéder aux propriétés de l'objet
// il y a deux syntaxes possibles : avec le point ou avec les crochets
console.log(obj1.key1); // "value1"
console.log(obj1['key' + 2]); // 42
obj1.key3(); // "Hello from key3"

const method = 'error';
console[method]('Hello using dynamic method name'); // "Hello using dynamic method name"

// 2/ Avec un constructeur d'objet
// Use cases :
// - pour créer plusieurs objets similaires avec des méthodes (instances d'une "classe")
// - pour permettre d'identifier le type d'un objet (avec instanceof)
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// // Pour que la fonction soit déclarée en dehors du constructeur
// // mais accessible par toutes les instances, on peut l'ajouter au prototype
// Person.prototype.greet = function () {
//   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };

class Person {
  constructor(name, age) {
    // if (condition) {
      this.name = name;
      this.age = age;
    // }
  }
  // Pour que la fonction soit déclarée en dehors du constructeur
  // mais accessible par toutes les instances, on peut l'ajouter au prototype
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Person.prototype.greet

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

// delete person1.age;

person1.greet(); // "Hello, my name is Alice and I am 30 years old."
person2.greet(); // "Hello, my name is Bob and I am 25 years old."

console.log(person1.greet === person2.greet); // true (même fonction dans le prototype)

console.log(person1.name); // "Alice"
console.log(person2['age']); // 25
console.log(person1 instanceof Person); // true

// hasOwnProperty est défini dans le prototype de Object
console.log(person1.hasOwnProperty('name')); // true
console.log(person1.hasOwnProperty('greet')); // false (greet est dans le prototype)