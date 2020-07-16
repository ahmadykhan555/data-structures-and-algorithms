const demoArray = [10, 2, 1, 5, 4, 6, 0, 7, 8];

const demoForEach = () => demoArray.forEach(v => console.log(v));
const demoFilter = () => {
  const newArray = demoArray.filter(v => v > 5);
  console.log("values > 5", newArray);
};
const demoSort = () => {
  console.log(demoArray.sort((a, b) => a - b));
};
const demoReduce = () => {
  const sum = demoArray.reduce((acc, val) => (acc += val), 0);
  console.log(`sum using reduce is: ${sum}`);
};

(() => {
  demoForEach();
  demoFilter();
  demoSort();
  demoReduce();
})();
