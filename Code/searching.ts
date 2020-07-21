const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

const binarySearch = (arr, val) => {
  /**
   * Approach:
   * Accepts a sorted array
   * find a midpoint and compare the value at that index to the value we are looking for
   * if the value is greater than middle search the array above the mid point
   * if value is less search the area lower than middle
   * keep doing this until either value is found or array end if reached
   * this is a very fast searching algorithm and return the results in O(log n) time
   */
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  if (val === arr[middle]) {
    return middle;
  }

  while (start <= end) {
    if (val > arr[middle]) {
      start = middle + 1;
    } else if (val < arr[middle]) {
      end = middle - 1;
    } else if (val === arr[middle]) {
      return middle;
    }
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === val ? middle : -1;
};

(() => {
  console.log(
    "linear search: ",
    linearSearch([1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16], 7),
    "Binary Search: ",
    binarySearch([1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16], 7)
  );
})();
