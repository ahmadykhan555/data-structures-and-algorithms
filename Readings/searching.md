# Searching Algorithms

In this chapter we take a look at how searching algorithms are defined and implemented. We will take a look at the naive brute-force approach first and progressively dive into the more efficient performant ways of searching.

### Algorithms:

#### Linear Search

Check every element one at a time until the value is found. This is done in O(n) time hence the name linear search. The best use-case where this is the best solution is if the list/array we are searching has no fixed order (not sorted). Javascript methods like `indexOf`, `includes` etc use linear search for computing result. Since this is a simple and somewhat naive approach doesn't mean that it is bad. It has the time complexity of O(n) and in the case of unsorted arrays this is the most efficient way of doing things. However, if the array has some kind of order it is best use a binary search instead which can get the result in O(log n) time.

#### Binary Search in a sorted array

#### String searching algorithm

#### KMP string searching algorithm
