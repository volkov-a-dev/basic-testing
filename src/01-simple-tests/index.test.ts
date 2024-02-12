// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const input = {
  a: 2,
  b: 2,
};
describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ ...input, action: Action.Add });
    expect(result).toBe(4);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ ...input, action: Action.Subtract });
    expect(result).toBe(0);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ ...input, action: Action.Multiply });
    expect(result).toBe(4);
  });

  test('should divide two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ ...input, action: Action.Divide });
    expect(result).toBe(1);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ ...input, action: Action.Exponentiate });
    expect(result).toBe(4);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const result = simpleCalculator({ ...input, action: 'invalid' });
    expect(result).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 'invalid',
      b: 'invalid',
      action: Action.Add,
    });
    expect(result).toBe(null);
  });
});
