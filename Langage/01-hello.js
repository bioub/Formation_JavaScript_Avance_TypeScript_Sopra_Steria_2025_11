const names = ['Alice', 'Bob', 'Charlie'];
names.push('Diana');

// names = [...names, 'Eve']; // This will cause an error because 'names' is a constant variable.
// names = ['Eve', 'Frank']; // This will cause an error because 'names' is a constant variable.

function greet(name) {
  console.log(`Hello, ${name}!`);
}

for (const element of names) {
  greet(element);
}
