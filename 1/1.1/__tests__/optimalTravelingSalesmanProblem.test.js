const { Point } = require('../../../utils');
const {
  optimalTravelingSalesmanProblem,
} = require('../optimalTravalingSalesmanProblem');

describe('optimalTravelingSalesmanProblem', () => {
  const A = new Point(1, 1);
  const B = new Point(2, 4);
  const C = new Point(5, 2);
  const D = new Point(4, 4);

  const dots = [A, B, C, D];

  it('from A to A', () => {
    expect(optimalTravelingSalesmanProblem(dots, 2)).toEqual([
      C,
      A,
      B,
      D,
      new Point(5, 2), // circular Fix
    ]);
  });
});
