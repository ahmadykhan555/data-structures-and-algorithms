/**
 * Write a solution that finds a window that results in max sum
 * Approach:
 * get the sum of first three and store it somewhere
 * start at index window + 1
 * add index window + 1 to the temp sum and subtract index window - 1 and add window +1
 * see if this results in a sum greater than the previous
 * if so, update max sum and continue until we reach index == arr.length - window -1
 * since there is only one loop the complexity is O(n)
 */
const maxSum = (arr, window) => {
  if (!arr.length || (arr.length && arr.length < window)) {
    return null;
  }
  if (window === 1) {
    let temp = [...arr].sort((a, b) => a - b);
    return temp[temp.length - 1];
  }

  let maxSum = 0;
  for (let i = 0; i < window; i++) {
    maxSum += arr[i];
  }
  for (let i = 1; i <= arr.length - window; i++) {
    let temp = maxSum - arr[i - 1] + arr[window + i - 1];
    if (temp >= maxSum) {
      maxSum = temp;
    }
  }
  return maxSum;
};
(() => {
  console.log(maxSum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
  console.log(maxSum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
  console.log(maxSum([4, 2, 1, 6, 2], 4)); // 13
  console.log(maxSum([4, 2, 1, 6], 1)); // 6
  console.log(maxSum([], 4)); // null
})();
