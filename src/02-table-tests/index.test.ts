// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 20, action: Action.Add, expected: 21 },
  { a: 2, b: 19, action: Action.Add, expected: 21 },
  { a: 3, b: 18, action: Action.Add, expected: 21 },
  { a: 4, b: 17, action: Action.Subtract, expected: -13 },
  { a: 5, b: 16, action: Action.Subtract, expected: -11 },
  { a: 6, b: 15, action: Action.Subtract, expected: -9 },
  { a: 7, b: 14, action: Action.Subtract, expected: -7 },
  { a: 8, b: 13, action: Action.Subtract, expected: -5 },
  { a: 9, b: 12, action: 'invalid', expected: null },
  { a: 10, b: 11, action: 'invalid', expected: null },
  { a: 11, b: 10, action: 'invalid', expected: null },
  { a: 12, b: 9, action: Action.Multiply, expected: 108 },
  { a: 13, b: 8, action: Action.Multiply, expected: 104 },
  { a: 14, b: 7, action: Action.Multiply, expected: 98 },
  { a: 15, b: 6, action: Action.Divide, expected: 2.5 },
  { a: 16, b: 5, action: Action.Divide, expected: 3.2 },
  { a: 17, b: 4, action: Action.Divide, expected: 4.25 },
  { a: 18, b: 3, action: Action.Divide, expected: 6 },
  { a: 19, b: 2, action: Action.Exponentiate, expected: 361 },
  { a: 20, b: 2, action: Action.Exponentiate, expected: 400 },
];

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  test.each(testCases.map(Object.values))(
    'a: %i, b: %i, action: %s',
    (a, b, action, expected) => {
      const input = { a, b, action };
      const result = simpleCalculator(input);
      expect(result).toBe(expected);
    },
  );
  // Consider to use Jest table tests API to test all cases above
});
