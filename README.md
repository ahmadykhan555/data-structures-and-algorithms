# Data Structures and Algorithms Learnings

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

[Code reference](https://github.com/ahmadykhan555/data-structures-and-algorithms/blob/master/objectMethods.ts)

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
