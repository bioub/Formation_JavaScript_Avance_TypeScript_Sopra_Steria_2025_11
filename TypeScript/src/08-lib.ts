import chalk from 'chalk';
import _ from 'lodash';
import process from 'node:process'; // npm i @types/node@22 -D for types
import { getRandomIntInclusive } from 'mdn-random';

console.log(`Random integer between 1 and 100: ${getRandomIntInclusive(1, 100)}`);
console.log(chalk.blue('This is a message in blue color'));
console.log(_.kebabCase('Bonjour à tous')); // Outputs: bonjour-a-tous
console.log(process.version); // Outputs the Node.js version
