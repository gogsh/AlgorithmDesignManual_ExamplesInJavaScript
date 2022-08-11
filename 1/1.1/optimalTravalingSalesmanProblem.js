const { calculateDistance } = require('./nearestNeighborHeuristic');
const { Point } = require('../../utils');

const optimalTravelingSalesmanProblem = (dots, startIndex) => {
  const distances = calculateDistance(dots);
  const paths = [];

  function continuePath(path) {
    const { visitedDots, distance, currentIndex } = path;

    if (visitedDots.size === dots.length) {
      const arr = Array.from(visitedDots);
      arr.push(new Point(dots[startIndex].x, dots[startIndex].y));

      paths.push({
        visitedDots: arr,
        distance: distance + distances[currentIndex][startIndex],
      });
      return;
    }

    for (let i = 0; i < dots.length; i++) {
      if (visitedDots.has(dots[i])) {
        continue;
      }

      const set = new Set(visitedDots);
      set.add(dots[i]);

      continuePath({
        visitedDots: set,
        distance: distance + distances[currentIndex][i],
        currentIndex: i,
      });
    }
  }

  continuePath({
    visitedDots: new Set([dots[startIndex]]),
    distance: 0,
    currentIndex: startIndex,
  });

  const shortestPath = paths.reduce(
    (lessPath, path) => {
      if (path.distance < lessPath.distance) {
        return path;
      }
      return lessPath;
    },
    { visitedDots: [], distance: Infinity },
  );

  return Array.from(shortestPath.visitedDots);
};

module.exports = {
  optimalTravelingSalesmanProblem,
};
