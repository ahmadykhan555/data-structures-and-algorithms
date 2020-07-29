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

const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  const newArray = [];
  while (i < arr1.length - 1 && j < arr2.length - 1) {
    if (arr1[i] < arr2[j]) {
      console.log(`Pushing i ${arr1[i]}`);
      newArray.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      console.log(`Pushing j ${arr2[j]}`);
      newArray.push(arr2[j]);
      j++;
    } else if (arr1[i] === arr2[j]) {
      console.log(`Pushing = ${arr2[j]}`);
      newArray.push(arr1[i]);
      newArray.push(arr1[i]);
      i++;
      j++;
    }
  }

  while (i < arr1.length - 1) {
    newArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length - 1) {
    newArray.push(arr2[j]);
    j++;
  }

  return newArray;
};

(() => {
  // console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
  // console.log(bubbleSortOptimized([8, 1, 2, 3, 4, 5, 6, 7]));
  console.log(merge([1, 3, 4, 5, 7], [2, 4, 5, 6, 7]));
})();
