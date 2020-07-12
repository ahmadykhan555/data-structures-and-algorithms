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
