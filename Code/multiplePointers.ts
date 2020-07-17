// Complexity O(n) since we use only one loop
const findSumPairs = arr => {
  /**
   * Problem statement: Find the first pair in an array that result in sum 0 and return that sum
   *
   * Assumption: array can be un-sorted
   *
   * Approach:
   * make sure the array is sorted
   * create a pointer i that points to the beginning of the array
   * create another pointer j that points to the end of the array
   * now we pick the value at index 'i' and add it to the value at index 'j' to see if we get sum = 0
   * if sum > 0 move j down the array
   * if sum < 0 move i up the array
   * find the pair
   * return the pair
   */
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = arr.length - 1;
  for (i; i < arr.length; ) {
    if (!(j > i)) {
      return undefined;
    }
    let sum = arr[i] + arr[j];
    if (sum === 0) {
      return [arr[i], arr[j]];
    } else if (sum > 0) {
      --j;
    } else if (sum < 0) {
      i++;
    } else {
      i++;
    }
  }
  return undefined;
};

// Complexity O(n^2) as we have nested loops.
const nestedLoopSol = arr => {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
};

const countUniqueValues = arr => {
  arr.sort((a, b) => a - b);
  /**
   * Make sure array is sorted
   * incase arr.length < 2 the number of unique values = length
   * pointer i sits at index 0 & pointer j sits at index i+1
   * start with the value at index i and compare it to the value at j and set counter = 1
   * if value[i] === value[j] do nothing
   * if value[i] != value[j] add one to the counter
   * set i = j and move j one place ahead
   * reach end of the array and return the count
   */
  let i = 0;
  let j = i + 1;
  if (arr.length < 2) {
    return arr.length;
  }
  let counter = 1;
  while (j <= arr.length - 1 && i < j) {
    if (arr[i] !== arr[j]) {
      ++counter;
    }
    i = j;
    ++j;
  }
  return counter;
};
(() => {
  const { performance } = require("perf_hooks");
  const testArr1 = [
    0,
    22,
    21,
    3,
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
    17,
    18,
    19,
    -19,
    -4,
    -2,
    -3
  ];
  const testArr2 = [0, -2, 1, 4];

  let t1 = performance.now();
  console.log(`O(n) result: ${findSumPairs(testArr1)}`);
  let t2 = performance.now();
  console.log(`elapsed time: ${t2 - t1}`);
  let t3 = performance.now();
  console.log(`O(n^2) result: ${nestedLoopSol(testArr1)}`);
  let t4 = performance.now();
  console.log(`elapsed time: ${t4 - t3}`);
  console.log(countUniqueValues([1, 1, 1, 1, 2]));
  console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 8]));
})();
