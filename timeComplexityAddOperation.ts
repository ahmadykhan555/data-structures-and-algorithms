/**
 * BIG O notation
 * Helps understand which solution is better in terms of
 * 1. Speed
 * 2. Space
 * 3. Readability
 * So when we speak of Time complexity, measuring in terms of the ms needed to get a thing done isn't really the best way to figure out which one is better or worse
 * since the amount of time a code takes to run varies even on the same machine, so we need a better, more precise way to doing this
 * So we can simple count the number of operations the computer executes to get a thing done.
 * 
 * BIG O is the worst case scenarios ie it is describing the upper bound.
 
 
 */

const addUpToUsingFor = n => {
  let total = 0; // one operation +1
  for (let i = 0; i <= n; i++) {
    //   let i => one operation +1
    // i<= => n comparisons so n operations +n
    //  i++ => n operations +2n
    total += i; // total += i => n operations +2n
    // thus it is safe to say that this solution grows roughly in proportion to n
    //  overall complexity/operations is 5n + 2 or simply Order of n or O(n)
  }
  console.log(total);
  return total;
};
const addUpToUsingFormula = n => {
  /**
   * Here we have 3 operations irrespective of the value of n
   * 1. Multiplication
   * 2. Addition
   * 3. Division
   * So it doesn't depend on n and we can safely say it runs in a constant time or Order of 1 ie constant
   */
  return (n * (n + 1)) / 2;
};

(() => {
  const demoNumber = 10000000;
  console.time("demo1");
  addUpToUsingFormula(demoNumber);
  console.timeEnd("demo1");
  console.time("demo2");
  addUpToUsingFor(demoNumber);
  console.timeEnd("demo2");
})();
