const bubbleSort = arr => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      counter++;
      if (arr[j] > arr[j + 1]) {
        //   swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log("Bubble sort basic, total comparisons: ", counter);
  return arr;
};

const bubbleSortOptimized = arr => {
  /**
   * We can optimize a basic bubble sort algorithm by making a few tweaks
   * We know that at the end of each iteration the biggest value gets cemented in its place at the end of the array
   * So as we keep iterating we dont have to check the values we've already sorted
   */
  let counter = 0;
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      counter++;
      if (arr[j] > arr[j + 1]) {
        //   swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) {
      break;
    }
  }
  console.log("Bubble sort optimized, total comparisons: ", counter);

  return arr;
};

(() => {
  console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
  console.log(bubbleSortOptimized([8, 1, 2, 3, 4, 5, 6, 7]));
})();
