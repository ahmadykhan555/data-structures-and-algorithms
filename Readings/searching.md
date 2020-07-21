# Searching Algorithms

In this chapter we take a look at how searching algorithms are defined and implemented. We will take a look at the naive brute-force approach first and progressively dive into the more efficient performant ways of searching.

### Algorithms:

#### Linear Search

Check every element one at a time until the value is found. This is done in O(n) time hence the name linear search. The best use-case where this is the best solution is if the list/array we are searching has no fixed order (not sorted). Javascript methods like `indexOf`, `includes` etc use linear search for computing result. Since this is a simple and somewhat naive approach doesn't mean that it is bad. It has the time complexity of O(n) and in the case of unsorted arrays this is the most efficient way of doing things. However, if the array has some kind of order it is best use a binary search instead which can get the result in O(log n) time.

#### Binary Search in a sorted array

Binary search is another way of searching an array or list of values. The only important pre-requisite of using this algorithm is to have a sorted list. The algorithm follows a simple [divide and conquer approach](https://github.com/ahmadykhan555/data-structures-and-algorithms/blob/master/Readings/problemSolving.md#divide-and-conquer-approach) to compute results. We simply keep dividing the array in to two pieces at some middle point and compare our value to the middle point of the array. If the value is bigger than the midpoint we move our window up and down in case the value is smaller. We keep dividing and comparing the array till we either find the value or reach the end of the list. This is an extremely fast searching algorithm and has the time complexity of O(log ).

To put things in perspective if an array size 32 is to be searched via linear search, we need 32 comparisons however if we search the same array with binary search we only need 5 (log 32 => log2^5) comparisons to find or conclude a value.

```javascript
const binarySearch = () => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  if (val === arr[middle]) {
    return middle;
  }

  while (start <= end) {
    if (val > arr[middle]) {
      start = middle + 1;
    } else if (val < arr[middle]) {
      end = middle - 1;
    } else if (val === arr[middle]) {
      return middle;
    }
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === val ? middle : -1;
};
```

#### String searching algorithm

#### KMP string searching algorithm
