const names = ['Alice', 'Bob', 'Charlie'];

function greet(name: string): void {
   console.log(`Hello, ${name.toUpperCase()}!`);
}

for (const element of names) {
  greet(element);
}

// Si on veut exécuter ce fichier directement avec node
// depuis Node 22, node va faire du type stripping
// En gros il va retirer du code ce qui est du TypeScript
