/**
 * This file shows a couple examples where the frequency counter approach can dramatically improve the BIG O of an algorithm
 */

const isAnagramCrude = (str1 = "", str2 = "") => {
  if (str1.length !== str2.length) {
    return false;
  }

  let str2Array = str2.split("");
  for (let char of str1) {
    if (str2Array.indexOf(char) > -1) {
      const index = str2Array.indexOf(char);
      str2Array.splice(index, 1);
    } else {
      return false;
    }
  }
  return true;
};

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
  const { performance } = require("perf_hooks");
  const st1 =
    "ahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmadahmad";
  const st2 =
    "madhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadha";
  let t1 = performance.now();
  console.log("eff ", isAnagram(st1, st2));
  let t2 = performance.now();
  console.log(`${t2 - t1}ms`);

  let t3 = performance.now();
  console.log("cru ", isAnagramCrude(st1, st2));
  let t4 = performance.now();
  console.log(`${t4 - t3}ms`);
})();
