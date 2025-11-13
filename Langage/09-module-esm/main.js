import greet from "./greet.js";
import { multiply, sum } from "./my-maths.js";

const prenom = 'Romain';

console.log(sum(2, 3)); // 5
console.log(multiply(4, 5)); // 20

console.log(greet(prenom)); // Hello, Romain!
