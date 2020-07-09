const countUpAndDown = n => {
  console.log("Going up: ");
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
  console.log("Going Down: ");
  for (let i = n; i >= 0; i--) {
    console.log(i);
  }

  // executes in 2n time or roughly Order of n or O(n)
};

(() => {
  console.time("demo");
  countUpAndDown(100);
  console.timeEnd("demo");
})();
