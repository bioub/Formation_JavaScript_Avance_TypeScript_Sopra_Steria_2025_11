const names = ['Alice', 'Bob', 'Charlie', 'Eve'];
names.push(123);

// names = [...names, 'Eve']; // This will cause an error because 'names' is a constant variable.
// names = ['Eve', 'Frank']; // This will cause an error because 'names' is a constant variable.

function greet(name) {
  if (name.length === 3) {
    if (typeof name === 'string') {
      name.toUpperCase(); // No error, name is narrowed to string      console.log(`Hello, ${name.toUpperCase()}!`);
    } else {
      console.log(`Hello, user #${name}!`);
    }
  }
}

for (const element of names) {
  greet(element);
}
