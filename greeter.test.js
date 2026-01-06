/**
 * Unit tests for the greeter application
 */

const { greet, greetWithTime } = require('./greeter');

describe('Greeter', () => {
  test('greets a person by name', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });

  test('greets guest when no name provided', () => {
    expect(greet()).toBe('Hello, Guest!');
  });

  test('greets with empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });

  test('greetWithTime includes greeting and time of day', () => {
    const result = greetWithTime('Bob');
    expect(result).toContain('Hello, Bob!');
    expect(result).toMatch(/Good (morning|afternoon|evening)!/);
  });
});

