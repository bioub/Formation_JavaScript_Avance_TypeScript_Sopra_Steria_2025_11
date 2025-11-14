import { expect, test } from "vitest";
import { comparer } from "./comparer.js";

test('comparer function returns Trop petit', () => {
  // Arrange / Given
  const nb1 = 5;
  const nb2 = 10;

  // Act / When
  const result = comparer(nb1, nb2);

  // Assert / Then
  expect(result).toBe('Trop petit');
});

test('comparer function returns Trop grand', () => {
  // Arrange / Given
  const nb1 = 10;
  const nb2 = 5;

  // Act / When
  const result = comparer(nb1, nb2);

  // Assert / Then
  expect(result).toBe('Trop grand');
});


test('comparer function returns Gagné', () => {
  // Arrange / Given
  const nb1 = 5;
  const nb2 = 5;

  // Act / When
  const result = comparer(nb1, nb2);

  // Assert / Then
  expect(result).toBe('Gagné');
});
