const { nearestNeighborHeuristic } = require('../nearestNeighborHeuristic');
const { Point } = require('../../../utils');

describe('nearestNeighborHeuristic', () => {
  const A = new Point(1, 1);
  const B = new Point(2, 4);
  const C = new Point(5, 2);
  const D = new Point(4, 4);

  const dots = [A, B, C, D];

  it('start from A', () => {
    expect(nearestNeighborHeuristic(dots, 0)).toEqual([A, B, D, C]);
  });

  it('start from C', () => {
    expect(nearestNeighborHeuristic(dots, 2)).toEqual([C, D, B, A]);
  });
});
