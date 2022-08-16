/** Оптимальный алгоритм календарного планирования */
const optimalScheduling = (intervals) => {
  const result = [];

  while (intervals.length) {
    const earliestEnding = foundEarliestEnding(intervals);

    intervals = deleteIntersectingIntervals(earliestEnding, intervals);
    result.push(earliestEnding);
  }

  return result;
};

function foundEarliestEnding(intervals) {
  return intervals.reduce(
    ([_, earliestEnd], interval) =>
      earliestEnd > interval[1] ? interval : [_, earliestEnd],
    [0, Infinity, 0],
  );
}

function deleteIntersectingIntervals(checkingInterval, intervals) {
  [chekingFrom, chekingTo] = checkingInterval;

  return intervals.filter(([from, to]) => {
    if (
      (chekingFrom >= from && chekingFrom <= to) ||
      (chekingTo <= to && chekingTo >= from)
    ) {
      return false;
    }

    return [from, to];
  });
}

module.exports = {
  optimalScheduling,
};
