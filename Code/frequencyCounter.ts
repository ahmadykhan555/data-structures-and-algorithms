/**
 * This file shows a couple examples where the frequency counter approach can dramatically improve the BIG O of an algorithm
 */

const isAnagram = (str1 = "", str2 = "") => {
  const frequency1 = {};
  const frequency2 = {};
  if (str1.length !== str2.length) {
    return false;
  }

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let char of str1) {
    frequency1[char] = ++frequency1[char] || 1;
  }
  for (let char of str2) {
    frequency2[char] = ++frequency2[char] || 1;
  }
  for (let char of str1) {
    if (frequency1[char] !== frequency2[char]) {
      return false;
    }
  }
  return true;
};

(() => {
  console.log(isAnagram("iceman", "cinema")); // true
  console.log(isAnagram("", "")); // true
  console.log(isAnagram("ahmad", "dhamm")); // false
  console.log(isAnagram("rat", "cat")); // false
})();
