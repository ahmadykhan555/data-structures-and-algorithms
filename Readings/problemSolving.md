# Problem Solving Techniques and Patterns

Diving into coding the moment we lay our eyes on a problem statement can be very tempting at times but one can run into a dead end if one dives in without giving a considerable thought to what he is looking to solve. This chapter touches upon this problem that many programmer often find themselves stumbling across.

### Understand the problem

- Step 1: Understand the problem
  Try to restate the problem in your own words just to be clear you understand the problem well enough to dive in. If unable to do so you may ask the interviewer to rephrase the problem just so you get a better picture of what you are expected to deal with before you jump in and try to solve something you've not fully understood

- Step 2: What are the inputs
  This step may get overlooked at times because it may sound a bit silly, however this is an important one to understand the scope of the problem. Say for instance the interviewer asks you to write a program to multiply numbers. A couple of things to be mindful of are

  1. what type of inputs to expect?
  2. What if the user doesn't provide an input? Do we return null, 0 or error?
  3. What if the user enters a number too big for javascript to handle?
  4. How many numbers of inputs can be expected?

- Step 3: What are the outputs
  Similarly questions that may be important for a simple algorithm like multiplying numbers may be:

  1. Do we need the answer in floating point or integers? If floating point, what accuracy do we want?

- Step 4: Is the information enough to figure out/link outputs to inputs
  Important to understand the shape of an output with reference to the passed input

- Step 5: What are the most important parts of the problem to address
  So important things in our multiplication algorithm can be

  1. The inputs `num1`, `num2`
  2. The output `product`
  3. The format `integer`, `float` `string`...

### Explore concrete examples

- This step is simply a continuation of understanding the problem, once you've grasped the crux of the problem now back you understand up with concrete examples
- By examples it simply means to figure out sample input and output with your solution behaving as a black box
- Start off with simpler examples like `2 + 4 = 6` and move on to handling more complex cases
- This will also help in coming up with a basic road map of what the solution should look and behave like
- Don't forget to unit test your solution, this helps make the solution more robust and allows for edge case handling
- A good programmer always thinks ahead of time and tests the solution with edge cases and unexpected inputs!

### Break it down

- Try to break the bigger problem in to small pieces and address each piece one at a time
- Understand what parts of the problem are easier to address and prioritize on the complex parts
- Once a basic solution is in place revisit the tricky parts and incorporate those into the solution
- Many a times breaking and addressing smaller chunks will give you an insight of how to approach the more complex pieces
- Divide and conquer!

### Solve/simplify

- Now we get to the actual coding part, start writing some code down with what you've understood in the steps above
- Start off small and build on top
- Write a basic code, doesn't have to be super efficient and clean just yet
- The idea here is to make sure the solution works
- Address simpler parts and incorporate complex parts as you go
- Unit test!

### Refactor/Improve

- With a basic solution in place, always spare some time to improve it.
- Make the solution readable from the get-go (make it a habit to write clean code)
- Analyze the performance of you solution and see if you can improve the time and space complexity. [BIG O Reference](https://github.com/ahmadykhan555/data-structures-and-algorithms/blob/master/Readings/BigO.md)
- To be a better programmer always reflect on your solution and try to leave it in the best possible shape (as much as you can)
- Ensure the solution is robust and doesn't have leakages or loopholes. A well tested code always pays off in the longer run
- Remove the technical debt as much as possible, this is what differentiate a good programmer from an average one!

# Problem Solving Patterns

There is no silver bullet or one size fits all approach when it comes to solving programming problems. There are however ways/patterns that we can use to gain a better insight of the problem and address in a better way. These patterns don't always fit the problem a 100% but they do allow a programmer to become more mindful and sharp to address unseen, novice problems.

### Frequency Counter Approach

They way this approach works is that we make use of objects and somehow manipulate them to figure out patterns between a number of inputs and use this methodology (fine tune it) to solve the problem at hand.

#### Anagram:

Lets see how we can apply this approach to solve a common `Anagram` problem [Code Reference](https://github.com/ahmadykhan555/data-structures-and-algorithms/blob/master/Code/frequencyCounter.ts)

```javascript
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
```

### Multiple Pointers Approach

Uses the idea of having some kind of pointers pointing to some index values (to be tailored for each case) and somehow using them to reach a solution. The reason why this approach is very popular in problem solving is that it has drastically improve the time complexity of an algorithm and has very little space complexity. Mostly used when we need to compare some arrays or when we need to find pairs satisfying a certain condition within the same array.

#### Sum pairs

Lets use this approach to find the first pair in an array that gives us a sum of 0, otherwise returns `undefined` [Code Reference](https://github.com/ahmadykhan555/data-structures-and-algorithms/blob/master/Code/multiplePointers.ts#L2-L37)

```javascript
const findSumPairs = arr => {
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = arr.length - 1;
  for (i; i < arr.length; ) {
    if (!(j > i)) {
      return undefined;
    }
    let sum = arr[i] + arr[j];
    if (sum === 0) {
      return [arr[i], arr[j]];
    } else if (sum > 0) {
      --j;
    } else if (sum < 0) {
      i++;
    } else {
      i++;
    }
  }
  return undefined;
};
```

#### Unique Value Counter Problem

Counts the number of unique value found in a sorted array. [Code Reference](https://github.com/ahmadykhan555/data-structures-and-algorithms/blob/ca0a0ed11864dd51edecaa30c6c98d5928dee008/Code/multiplePointers.ts#L52-L78)

```typescript
const uniqueValuesCounter = (arr: number[]): number => {
  let i = 0;
  let j = i + 1;
  if (arr.length < 2) {
    return arr.length;
  }
  let counter = 1;
  while (j <= arr.length - 1 && i < j) {
    if (arr[i] !== arr[j]) {
      ++counter;
    }
    i = j;
    ++j;
  }
  return counter;
};
```

### Sliding window Approach

Useful when dealing with a problem that involves some kind of subset of the original data and we need to figure out something in that manner.
Lets take a look at an example

#### Find Max Sum

We make use of the sliding window pattern to find max sum of consecutive numbers in an unsorted array. This patterns helps us solve an otherwise O(n^2) problem in O(n) [Code Reference](https://github.com/ahmadykhan555/data-structures-and-algorithms/blob/master/Code/slidingWindow.ts)

```javascript
const maxSum = (arr, window) => {
  if (!arr.length || (arr.length && arr.length < window)) {
    return null;
  }
  if (window === 1) {
    let temp = [...arr].sort((a, b) => a - b);
    return temp[temp.length - 1];
  }

  let maxSum = 0;
  for (let i = 0; i < window; i++) {
    maxSum += arr[i];
  }
  for (let i = 1; i <= arr.length - window; i++) {
    let temp = maxSum - arr[i - 1] + arr[window + i - 1];
    if (temp >= maxSum) {
      maxSum = temp;
    }
  }
  return maxSum;
};
```

### Divide and Conquer Approach
