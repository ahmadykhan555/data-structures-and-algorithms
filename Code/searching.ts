const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

const binarySearch = () => {};

(() => {
  console.log(linearSearch([1, 2, 3, 4, 5], 6));
})();
