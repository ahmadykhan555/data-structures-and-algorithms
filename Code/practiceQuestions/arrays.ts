/** Strings in Javascript are iterable which means that most problems on arrays are applicable to strings.  */

/**
 * Q1. Is Unique: Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 * Example strings:  'data structures', 'cold'
 */
// complexity O(n)
const isUnique = str => {
  /**
   * considering the string is represented in ASCII
   * the number of unique characters cannot be more than 128 (0-127) since ASCII is 7 bit 2^7  = 128 (or 2^8 = 256 for extended ASCII) chars
   */

  if (str.length > 128) {
    return false;
  }
  // convert into lowercase
  str = str.toLowerCase();
  // init a map to keep track of char counts
  const charCountMap = {};
  // loop string, if char not in map increment, else break and return false
  for (let char of str) {
    if (!charCountMap[char]) {
      charCountMap[char] = 1;
    } else {
      return false;
    }
  }
  return true;
};

/**
 * Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
 */
const checkPermutation = (str1, str2) => {
  // if lengths don't match return false
  if (str1.trim().length !== str2.trim().length) {
    return false;
  }

  //convert both strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // make a map for each str and store counts of each character
  const charMap1 = createCountMap(str1);
  const charMap2 = createCountMap(str2);

  // check if number of keys are equal else return false
  if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
    return false;
  }

  // loop either of the maps and see if each key has the same value else return false;
  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }
  return true;
};

// helper
const createCountMap = str => {
  const charMap = {};
  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char] = ++charMap[char];
    }
  }
  return charMap;
};

(() => {
  //   console.log(isUnique("data structures"));
  //   console.log(isUnique("cold"));
  console.log(checkPermutation("dogg", "gogd"));
})();
