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

const merge = (arr1 = [], arr2 = []) => {
  /**
   * pointers for each array to see if the whole array is parsed
   * compare each index to the other array and push to the new array in correct order
   * once an array is fully parsed break the loop and copy contents if any of the other array into the final array
   * edge case: handle repetitions
   */
  let i = 0;
  let j = 0;
  const sortedArray = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArray.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      sortedArray.push(arr2[j]);
      j++;
    } else if (arr1[i] && arr2[i] && arr1[i] !== 0) {
      sortedArray.push(arr1[i]);
      i++;
      sortedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    sortedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    sortedArray.push(arr2[j]);
    j++;
  }
  return sortedArray;
};

(() => {
  const arr1 = [1, 3, 2, 5];
  const arr2 = [1, 3, 2];
  console.log(merge(arr1, arr2));
})();
