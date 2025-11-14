import { multiply, sum } from "./my-maths.js";
import config from "./config.json" with { type: "json" };
import greet from "./greet.js";

console.log(import.meta.dirname); // Affiche le répertoire courant

console.log("Database URL:", config.DATABASE_URL);
const prenom = 'Romain';

console.log(sum(2, 3)); // 5
console.log(multiply(4, 5)); // 20

console.log(greet(prenom)); // Hello, Romain!
