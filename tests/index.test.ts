import { traverseClock } from '../src';

describe('traverseClock test', () => {
  test('test  ==> empty array', () => {
    expect(traverseClock([])).toStrictEqual([]);
  });
  test('test  ==> empty array 2', () => {
    expect(traverseClock([[]])).toStrictEqual([]);
  });
  test('test  ==> 1*4 array', () => {
    const input = [[1, 2, 3, 4]];
    expect(traverseClock(input)).toStrictEqual([1, 2, 3, 4]);
  });
  test('test  ==> 2*4 array', () => {
    const input = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
    ];
    expect(traverseClock(input)).toStrictEqual([1, 2, 3, 4, 8, 7, 6, 5]);
  });
  test('test  ==> 4*4 array', () => {
    const input = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ];
    expect(traverseClock(input)).toStrictEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
    ]);
  });
  test('test  ==> 4*2 array', () => {
    const input = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ];
    expect(traverseClock(input)).toStrictEqual([1, 2, 4, 6, 8, 7, 5, 3]);
  });
});
