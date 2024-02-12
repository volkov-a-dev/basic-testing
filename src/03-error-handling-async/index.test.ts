// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    // Write your test here
    const result = await resolveValue('value');
    expect(result).toBe(result);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    // Write your test here
    expect(() => throwError('Error message')).toThrow('Error message');
  });

  test('should throw error with default message if message is not provided', () => {
    // Write your test here
    expect(() => throwError()).toThrowError('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    // Write your test here
    expect(() => throwCustomError()).toThrowError(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    // Write your test here
    try {
      await rejectCustomError();
    } catch (error) {
      if (error instanceof MyAwesomeError) {
        expect(error).toBeInstanceOf(MyAwesomeError);
        expect(error.message).toBe('This is my awesome custom error!');
      }
    }
  });
});
