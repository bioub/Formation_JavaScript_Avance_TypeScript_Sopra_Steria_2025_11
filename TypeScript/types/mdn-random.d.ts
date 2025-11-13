// Declares for the 'mdn-random' module
declare module 'mdn-random' {
  export function getRandom(): number;
  export function getRandomArbitrary(min: number, max: number): number;
  export function getRandomInt(min: number, max: number): number;
  export function getRandomIntInclusive(min: number, max: number): number;
}
