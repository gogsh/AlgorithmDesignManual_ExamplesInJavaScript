const { optimalScheduling } = require('../OptimalScheduling');

describe('optimalScheduling', () => {
  it('some', () => {
    const intervals = [
      [1, 4],
      [2, 9],
      [11, 15],
      [1, 5],
      [4, 17],
      [3, 7],
      [5, 10],
    ];

    expect(optimalScheduling(intervals)).toEqual([
      [1, 4],
      [5, 10],
      [11, 15],
    ]);
  });

  it('1.6(b) pic', () => {
    const intervals = [
      [1, 3],
      [2, 5],
      [4, 7],
    ];

    expect(optimalScheduling(intervals)).toEqual([
      [1, 3],
      [4, 7],
    ]);
  });

  it('1.6(b) pic. shuffled', () => {
    const intervals = [
      [2, 5],
      [4, 7],
      [1, 3],
    ];

    expect(optimalScheduling(intervals)).toEqual([
      [1, 3],
      [4, 7],
    ]);
  });
});
