const { insertionSort } = require('./insertionSort');

describe('insertionSort', () => {
  test('Numbers', () => {
    expect(insertionSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  test('Letters', () => {
    expect(insertionSort(['esdf', '122', 'rt'])).toEqual(['122', 'esdf', 'rt']);
  });
});
