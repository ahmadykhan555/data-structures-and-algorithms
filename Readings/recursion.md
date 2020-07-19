# Recursion

Recursion is an alternative of an iterative (looping) approach. This is a slightly confusing topic at first but once we get the hang of it, its really simple and efficient to use. Recursion is a pattern where a function calls itself (as opposed to some other function) until it gets to a solution.

There are only two things that a recursive function must have

1. A base condition: a stopping condition that tells the function when to stop and return result.
2. A call to itself (recursive call) with some different input

#### Count Down example:

Lets use recursion to countdown [Code Reference]()

```javascript
const countDown = num => {
  // base condition
  console.log(num);
  if (num === 0) {
    console.log("All done");
    return;
  }
  //   recursive call
  countDown(--num);
};
```

#### Factorial Example:

Another common use-case of recursion is to compute factorial [Code Reference]()

```javascript
const calcFactorial = num => {
  // base condition
  if (num < 2) {
    return 1;
  }
  //   recursive call
  return num * calcFactorial(--num);
};
```
