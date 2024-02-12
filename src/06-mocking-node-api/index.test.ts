// Uncomment the code below and write your tests

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { doStuffByTimeout, doStuffByInterval } from '.';

describe('doStuffByTimeout', () => {
  let callback: typeof jest.fn;
  const timeOut = 2000;

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    // Write your test here
    doStuffByTimeout(callback, timeOut);
    jest.advanceTimersByTime(timeOut);
    expect(callback).toHaveBeenCalled();
  });

  test('should call callback only after timeout', () => {
    // Write your test here
    doStuffByTimeout(callback, timeOut);
    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(timeOut - 1);
    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1);
    expect(callback).toHaveBeenCalled();
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  let callback: typeof jest.fn;
  const timeOut = 1000;
  test('should set interval with provided callback and timeout', () => {
    // Write your test here
    doStuffByInterval(callback, timeOut);
    jest.advanceTimersByTime(timeOut);
    expect(callback).toHaveBeenCalled();
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
    doStuffByInterval(callback, timeOut);
    jest.advanceTimersByTime(timeOut * 2);
    expect(callback).toHaveBeenCalledTimes(2);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
  });

  test('should return file content if file exists', async () => {
    // Write your test here
  });
});
