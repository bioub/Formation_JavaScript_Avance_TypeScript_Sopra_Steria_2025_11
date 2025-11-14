import { expect, test } from "vitest";
import { pairs } from "./pairs.js";

test('pairs function', () => {
  // toEqual test que les 2 tableaux ont les mêmes valeurs
  // toBe test que les 2 tableaux sont les mêmes références (est-ce que c'est le même objet en mémoire)
  expect(pairs([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
});
