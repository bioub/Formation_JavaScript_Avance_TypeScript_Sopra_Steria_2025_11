const names = ['Alice', 'Bob', 'Charlie', 'Eve'];

// Un callback est une fonction passé à un autre API (fonction, propriété, méthode)
// pour être appelée indirectement par cet API.

// Ce callback peut être appelé 
// immédiatement (synchrones -> dans la même pile d'appel (ici appelé par forEach))
// ou plus tard (asynchrones -> dans une pile d'appel future).

function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Programmation fonctionnelle avec des callbacks synchrones
// Remplace les boucles/ifs impératifs
// par des appels de fonctions de haut niveau 
// Donne de la lisibilité et facilite la maintenance
// Ici on comprend facilement le traitement appliqué aux noms
// - filtre les noms de longueur 3
// - transforme les noms en majuscules
// - pour chaque nom, on boucle sur le résultat pour l'afficher
names
  .filter((name) => name.length === 3) // Filtre les noms de longueur 3
  .map((name) => name.toUpperCase()) // Transforme les noms en majuscules
  .forEach(greet);

// pile d'appels
// ^
// |
// |       [log  ][log  ][log  ]
// |[for { [greet][greet][greet] } ]
// |[forEach                       ]
// +--------------------------------------------> temps