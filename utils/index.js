const distanceBetweenCoords = (a, b) =>
  Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);

class Point {
  constructor(a, b) {
    this.x = a;
    this.y = b;
  }
}

module.exports = { distanceBetweenCoords, Point };
