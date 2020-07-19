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

(() => {
  countDown(149);
  console.log(calcFactorial(5));
})();
