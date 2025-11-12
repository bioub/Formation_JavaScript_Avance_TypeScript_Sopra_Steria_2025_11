const prenoms: (string | number)[] = ['Alice', 'Bob', 'Charlie'];
prenoms.push(123);

// prenoms = [...prenoms, 'Eve']; // This will cause an error because 'prenoms' is a constant variable.
// prenoms = ['Eve', 'Frank']; // This will cause an error because 'prenoms' is a constant variable.

function saluer(name: string | number): void {
  if (typeof name === "string") { // Type narrowing
    console.log(`Hello, ${name.toUpperCase()}!`);
  } else {
    console.log(`Hello, user #${name}!`);
  }
}

for (const element of prenoms) {
  saluer(element);
}
