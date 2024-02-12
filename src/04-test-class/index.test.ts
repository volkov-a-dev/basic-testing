// Uncomment the code below and write your tests
import {
  getBankAccount,
  InsufficientFundsError,
  TransferFailedError,
  SynchronizationFailedError,
} from '.';

describe('BankAccount', () => {
  const initBalance = 1000;
  const initBalanceSecond = 2000;
  const constValue = 100;
  const userAccountFist = getBankAccount(initBalance);
  const userAccountSecond = getBankAccount(initBalanceSecond);

  test('should create account with initial balance', () => {
    // Write your test here
    expect(userAccountFist.getBalance()).toBe(initBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    expect(() =>
      userAccountFist.withdraw(userAccountFist.getBalance() + constValue),
    ).toThrowError(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    expect(() =>
      userAccountFist.transfer(
        userAccountFist.getBalance() + constValue,
        userAccountSecond,
      ),
    ).toThrowError(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    expect(() =>
      userAccountFist.transfer(userAccountFist.getBalance(), userAccountFist),
    ).toThrowError(TransferFailedError);
  });

  test('should deposit money', () => {
    // Write your test here
    const initAccountBalance = userAccountFist.getBalance();
    userAccountFist.deposit(constValue);
    expect(userAccountFist.getBalance()).toBe(initAccountBalance + constValue);
  });

  test('should withdraw money', () => {
    // Write your test here
    const initAccountBalance = userAccountFist.getBalance();
    userAccountFist.withdraw(constValue);
    expect(userAccountFist.getBalance()).toBe(initAccountBalance - constValue);
  });

  test('should transfer money', () => {
    // Write your test here
    userAccountFist.transfer(500, userAccountSecond);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
    userAccountFist.fetchBalance = jest.fn().mockResolvedValue(500);
    const balance = await userAccountFist.fetchBalance();
    expect(typeof balance).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
    userAccountFist.fetchBalance = jest.fn().mockResolvedValue(500);
    await userAccountFist.synchronizeBalance();
    expect(userAccountFist.getBalance()).toBe(500);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here

    jest.spyOn(userAccountFist, 'fetchBalance').mockResolvedValue(null);

    await expect(userAccountFist.synchronizeBalance()).rejects.toThrowError(
      SynchronizationFailedError,
    );
  });
});
