// Сортировка вставками (Insertion sort) On**2

const insertionSort = (arr) => {
  let i, j;

  for (i = 1; i < arr.length; i++) {
    j = i;

    while (j > 0 && arr[j] < arr[j - 1]) {
      const cache = arr[j - 1];

      arr[j - 1] = arr[j];
      arr[j] = cache;

      j--;
    }
  }

  return arr;
};

module.exports = {
  insertionSort,
};
