const countDown = num => {
  // base condition
  console.log(num);
  if (num === 0) {
    console.log("All done");
    return;
  }
  //   recursive call
  countDown(--num);
};

const calcFactorial = num => {
  // base condition
  if (num < 2) {
    return 1;
  }
  //   recursive call
  return num * calcFactorial(--num);
};

// helper method recursion
const collectOddValues = arr => {
  const oddValues = [];

  const filterOdd = subset => {
    if (subset.length === 0) {
      return;
    }
    if (subset[0] % 2 !== 0) {
      console.log(subset[0]);
      oddValues.push(subset[0]);
    }
    filterOdd(subset.slice(1));
  };
  return filterOdd(arr);
};

const collectOddValuesPure = (arr, res) => {
  if (arr.length === 0) {
    return res;
  }
  if (arr[0] % 2 !== 0) {
    res.push(arr[0]);
  }
  return collectOddValuesPure(arr.slice(1), res);
};

(() => {
  // countDown(149);
  // console.log(calcFactorial(5));
  console.log(collectOddValuesPure([1, 2, 3, 4, 5, 6, 7, 8, 9], []));
})();
