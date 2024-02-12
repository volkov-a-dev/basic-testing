// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    // Write your test here
    expect(generateLinkedList([1, 1, 1])).toStrictEqual(
      generateLinkedList([1, 1, 1]),
    );
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    // Write your test here
    expect(generateLinkedList([2, 2, 2])).toMatchSnapshot();
  });
});
