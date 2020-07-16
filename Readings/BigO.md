# BIG O Analysis

In computer science being able to write a solution for an interesting problem is one of the preliminary steps towards becoming an excellent computer scientist. The robustness of a solution that can handle and cover a vast range of cases is one feat of engineering but how do we measure if one solution is more performant as opposed to another solution. In computer science the efficiency of an algorithm is often analyzed in the amount of time & steps the algorithm takes to reach a certain result. BIG O serves this purpose, it gives us a way to analyse and compare the performance of algorithms. Lets take a deeper dive in understanding how this works!

### Some basic rules to simplify the BigO notations

1. Ignore constants O(2n) = O(n)
2. O(500) = O(1)
3. O(13n^2) = O(n^2)
4. O(10n + 2) = O(n)
5. O(10n^2 + 5n +2) = O(n^2)
6. Arithmetic operations are constant time

### Space complexity

The amount of memory an algorithm takes, we care about the space the algorithm takes, not the input size (aka auxillary space complexity)
Some basic rules (for Javascript)

1. Primitive data types (boolean, number, undefined, null) take constant space
2. Strings take space directly proportional to the size of the value stores so roughly O(n)
3. Reference types (arrays, objects) take space directly proportional to the length or number of keys respectively that it holds

An example to analyze space complexity of an algorithm:

```javascript
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
```

Variables:

1. we always create a variable total (primitive type)
2. we always create a variable i (primitive type)

These variable don't depend on the input `arr` size. Thus the space complexity of this algorithm will always be constant or O(1)

Lets look at another algorithm:

```javascript
function double(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(2 * arr[i]);
  }
  return newArray;
}
```

Variables:

1. newArray (reference type)
2. variable i (primitive type)

the newArray variable grows to infinity if the input size reaches infinity which means the space this variable will take is directly proportional to the input size of O(n)

### Analyze Javascript Arrays & Objects Time Complexity

**Objects**

- key value pairs
- Unordered data (order doesn't matter)
- Very fast in most cases O(1)

[Code reference](https://github.com/ahmadykhan555/data-structures-and-algorithms/blob/master/Code/objectMethods.ts)

| Method                       | Complexity | Reason                                                                                                                   |
| ---------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------ |
| `Object.keys(myObj)`         | O(n)       | Since this pushes all keys into a new Array `[key1, key2, ...]`                                                          |
| `Object.values(myObj)`       | O(n)       | Since this pushed all values for each key into a new Array `[value1, value2, ...]`                                       |
| `Object.entries(myObj)`      | O(n)       | Since this pushes all key-value pairs into a new Array `[[key1, value1], [key2, value2], [...]]`                         |
| `Object.hasOwnProperty(key)` | O(1)       | Since this just checks for a particular key in an object and returns a null so its constant time                         |
| Searching                    | O(n)       | Since to search a particular value without knowledge of the key we essentially have to go through all keys in the object |
| Addition                     | O(1)       | Since we don't have to worry about the order so its constant time                                                        |
| Removal                      | O(1)       | Since order isn't important so we can delete any key value pair in constant time provided the key                        |
| Update                       | O(1)       | Since we can update any key value pair provided the key                                                                  |

**Arrays**

- Ordered list (default ordered by indexes)
- Used where need order
- Anything that may require array re-indexing will result in at least linear time complexity ie O(n)

[Code reference](https://github.com/ahmadykhan555/data-structures-and-algorithms/blob/master/Code/arrayMethods.ts)

| Method     | usage                                                                                                              | Complexity   | Reason                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------ | ------------ | ---------------------------------------------------------------- |
| `.push`    | Add something to the end of array                                                                                  | O(1)         | no re-indexing required                                          |
| `.pop`     | Remove the last element of an array                                                                                | O(1)         | no re-indexing required                                          |
| `.unshift` | Add something to the beginning of an array                                                                         | O(n)         | requires re-indexing                                             |
| `.shift`   | Remove the very first element of the array at index 0                                                              | O(n)         | requires re-indexing                                             |
| `.concat`  | Merges to array to make a new one                                                                                  | O(n)         | grows as the size of arrays being merged grows so roughly O(n+m) |
| `.slice`   | returns a sub-array of the original array, we mention the copy/subset size                                         | O(n)         | can copy at-most the full array                                  |
| `.splice`  | multipurpose, can be used to copy sub-array, remove something, add something etc                                   | O(n)         | can copy/operate at-most the full array                          |
| `.sort`    | orders the array, we can customize the ordering logic                                                              | O(n)         | loops each element                                               |
| `.forEach` | loops each element of the array                                                                                    | O(n)         | loops each element                                               |
| `.filter`  | - returns a new array with elements passing a certain condition                                                    | O(n)         | loops each element                                               |
| `.map`     | - can modify the array if we need and returns the modified array in the form of a new array                        | O(n)         | loops each element                                               |
| `.reduce`  | - can perform a function on each, similar to the other array methods with the peculiarity of having an accumulator | O(n)         | loops each element                                               |
| Accessing  | get value at a specified index                                                                                     | O(1)         | can reach any index in constant time                             |
| Searching  | look for a value in the array                                                                                      | O(n)         | potentially needs to check each item in the array                |
| Addition   | add to the array                                                                                                   | O(1) or O(n) | O(1) only if added to the end of array                           |
| Removal    | delete from the array                                                                                              | O(1) or O(n) | O(1) only if removed from the end of array                       |
| Update     | update value at a certain index                                                                                    | O(1)         | can reach any index in constant time                             |
