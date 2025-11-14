import { describe, expect, test } from "vitest";
import { multiply, sum } from "./my-maths.js";

describe("my-maths module", () => {
  test("sum function", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("multiply function", () => {
    expect(multiply(3, 4)).toBe(12);
  });
});
