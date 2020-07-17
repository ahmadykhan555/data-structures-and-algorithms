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
})();
