import { expect, test } from "vitest";
import { dejaSaisis } from "./dejaSaisis.js";

test("dejaSaisis test", () => {
  expect(dejaSaisis([1, 2, 3])).toBe("Vous avez déjà saisi : 1 | 2 | 3");
});

test("dejaSaisis throws error on empty array", () => {
  expect(() => dejaSaisis([])).toThrow("Aucune saisie");
});
