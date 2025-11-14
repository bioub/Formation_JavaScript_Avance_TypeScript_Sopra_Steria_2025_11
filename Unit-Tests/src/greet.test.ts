import { expect, test } from 'vitest';
import greet from './greet.js';

test('greet function', () => {
  // Arrange / Given
  const name = 'World';

  // Act / When
  const greeting = greet(name);

  // Assert / Then
  expect(greeting).toBe('Hello, World!');
});

test('greet function', () => {
  expect(greet('World')).toBe('Hello, World!');
});
