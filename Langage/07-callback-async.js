setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);

// Bloque le thread principal pendant 2 secondes
// const debut = Date.now();
// while (Date.now() - debut < 2000) {};

setTimeout(() => console.log('D'), 500);
console.log('E');

// Dans quel ordre vont s'afficher les lettres ?
// Réponse : E B A D C

// Explication :
// pile d'appels
// ^
// |
// |
// |
// |                                                                    [log  ]                     [log  ][log  ]                     [log  ]
// |[setTimeout][setTimeout][setTimeout][setTimeout][log] ...loop...    [taskB] ...loop...          [taskA][taskD] ...loop...          [taskC]
// +------------0-------------------------------------------------------10ms-------------------------------------------------------------------> temps
// Sortie :                                         E                   B                           A      D                           C

// File d'attente des tâches (task queue) :
// 0ms : [taskB]
// 500ms : [taskA, taskD]
// 1000ms : [taskC]

// Côté C++ (dans le browser ou Node.js...)
// le code JavaScript est exécuté dans un seul thread (par défaut)
// le code JavaScript s'éxecute dans une boucle appelée boucle d'événements (event loop)
// En gros elle ressemble à ça :
// do {
//   // Traite les tâches asynchrones en attente (file des tâches)
//   ...
//   // Exécute le code JS jusqu'à ce qu'il n'y ait plus rien à exécuter
//   // (pile d'appels vide)
//   ...
// } while (true);

