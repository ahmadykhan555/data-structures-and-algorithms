# Sorting

Sorting is simply reordering the data in some shape according to some condition. We may a list to be sorted in ascending order/decending order or some custom order. This is a great problem to put one's algorithm design skills to the test. It is an interesting place to sharpen your problem solving skills as well. In this section we will take a look at how to construct a sorting algorithm and step by step optimize it for best performance.

## Algorithms:

There are a ton of algorithms for sorting out there, each has its own use-case and conditions when it outperforms others. In this chapter we will take a look at the implementation and time complexity analysis of several popular algorithms and discuss why one may outperform the other

### Basic Sorting Algorithms

Poor performance but easy to understand and essential for more advanced algorithm designs as we move forward. Time Complexity: O(n^2) :o

#### Bubble Sort:

This is the most basic solution to get us going. The simple idea here is we scan the list and on every iteration the biggest value found "bubbles" to the top. Since we have to loop through the entire array and compare one item to the rest of the array over and over we have to use nested loops. Thus in the worst case scenarios the bubble sort has a complexity O(n^2). We do however have some optimizations in place for some edge cases or nearly sorted array as shown below but the time complexity for the worst case will still be O(n^2). [Code Reference](https://github.com/ahmadykhan555/data-structures-and-algorithms/blob/master/Code/sorting.ts)

```typescript
const bubbleSortOptimized = arr => {
  let counter = 0;
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      counter++;
      if (arr[j] > arr[j + 1]) {
        //   swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) {
      break;
    }
  }
  console.log("Bubble sort optimized, total comparisons: ", counter);
  return arr;
};
```

#### Selection Sort

Detail to be added shortly

#### Insertion Sort

Detail to be added shortly

### Intermediate Sorting Algorithms

Slightly more challenging but significantly faster however less intuitive at first to understand and the logic gets slightly more complex. That said these algorithms are better than the Basic ones and have a time complexity better that O(n^2)
