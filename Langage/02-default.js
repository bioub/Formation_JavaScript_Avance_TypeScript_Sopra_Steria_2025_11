function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 3)); // Outputs: 6
console.log(add(1, 2)); // Outputs: NaN

// BONNE PRATIQUE : Utiliser des valeurs par défaut
function addWithDefaults(a, b = 0, c = 0) {
  return a + b + c;
}

console.log(addWithDefaults(1, 2, 3)); // Outputs: 6
console.log(addWithDefaults(1, 2)); // Outputs: 3
console.log(addWithDefaults(1)); // Outputs: 1
console.log(addWithDefaults(1, undefined, 3)); // Outputs: 4

function addWithIfDefault(a, b, c) {
  if (b === undefined) {
    b = 0;
  }
  if (c === undefined) {
    c = 0;
  }
  return a + b + c;
}

console.log(addWithIfDefault(1, 2, 3)); // Outputs: 6
console.log(addWithIfDefault(1, 2)); // Outputs: 3
console.log(addWithIfDefault(1)); // Outputs: 1
console.log(addWithIfDefault(1, undefined, 3)); // Outputs: 4 

function addWithShortCircuit(a, b, c) {
  b = b || 0;
  c = c || 0;
  return a + b + c;
}

console.log(addWithShortCircuit(1, 2, 3)); // Outputs: 6
console.log(addWithShortCircuit(1, 2)); // Outputs: 3
console.log(addWithShortCircuit(1)); // Outputs: 1
console.log(addWithShortCircuit(1, undefined, 3)); // Outputs: 4

function multiplyWithShortCircuit(a, b, c) {
  b = b || 1; // ATTENTION: Ne pas utiliser cette technique si 0 (ou une autre valeur falsy) est une valeur valide
  c = c || 1;
  return a * b * c;
}
console.log(multiplyWithShortCircuit(2, 3, 4)); // Outputs: 24
console.log(multiplyWithShortCircuit(2, 3)); // Outputs: 6
console.log(multiplyWithShortCircuit(2)); // Outputs: 2
console.log(multiplyWithShortCircuit(2, undefined, 4)); // Outputs: 8
console.log(multiplyWithShortCircuit(2, 0)); // Outputs: 2 (incorrect result)

// BONNE PRATIQUE alternative : Utiliser l'opérateur de coalescence nulle (??)
function multiplyWithNullishCoalescing(a, b, c) {
  b = b ?? 1; // n'affecte 1 que si b est null ou undefined
  c = c ?? 1;
  return a * b * c;
}
console.log(multiplyWithNullishCoalescing(2, 3, 4)); // Outputs: 24
console.log(multiplyWithNullishCoalescing(2, 3)); // Outputs: 6
console.log(multiplyWithNullishCoalescing(2)); // Outputs: 2
console.log(multiplyWithNullishCoalescing(2, undefined, 4)); // Outputs: 8
console.log(multiplyWithNullishCoalescing(2, 0)); // Outputs: 0

const letters = ['a', 'b', 'c'];
const e = letters[4] ?? 'e'; // Utilise 'e' si letters[4] est undefined