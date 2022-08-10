const { distanceBetweenCoords } = require('../utils');

// Эвристический алгоритм ближайшего соседа (nearest-neighbor heuristic)
const nearestNeighborHeuristic = (dots, startIndex) => {
  const result = new Set();
  const distances = calculateDistance(dots);

  result.add(dots[startIndex]);

  let i = startIndex;

  while (result.size !== dots.length) {
    const [_, minimumIndex] = Object.entries(distances[i]).reduce(
      ([minValue, minIndex], [key, value]) => {
        if (minValue > value && !result.has(dots[key])) {
          return [value, key];
        }

        return [minValue, minIndex];
      },
      [Infinity, startIndex],
    );

    result.add(dots[minimumIndex]);
    i = minimumIndex;
  }

  return Array.from(result);
};

function calculateDistance(dots) {
  const result = {};

  for (let i = 0; i < dots.length; i++) {
    result[i] = {};

    for (let j = 0; j < dots.length; j++) {
      if (i === j) {
        continue;
      }

      result[i][j] = distanceBetweenCoords(dots[i], dots[j]);
    }
  }

  return result;
}

module.exports = {
  nearestNeighborHeuristic,
};
