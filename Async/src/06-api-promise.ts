// import { setTimeout } from "node:timers/promises";

function timeout(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

console.log('Waiting for 2 seconds...');
await timeout(2000);
console.log('Done waiting!');

Promise.all([
  timeout(1000).then(() => console.log('First timeout done')),
  timeout(2000).then(() => console.log('Second timeout done')),
  timeout(1500).then(() => console.log('Third timeout done')),
]).then(() => {
  console.log('All timeouts done!');
});
