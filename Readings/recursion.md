# Recursion

Recursion is an alternative of an iterative (looping) approach. This is a slightly confusing topic at first but once we get the hang of it, its really simple and efficient to use. Recursion is a pattern where a function calls itself (as opposed to some other function) until it gets to a solution.

There are only two things that a recursive function must have

1. A base condition: a stopping condition that tells the function when to stop and return result.
2. A call to itself (recursive call) with some different input

#### Count Down example:

Lets use recursion to countdown [Code Reference](https://github.com/ahmadykhan555/data-structures-and-algorithms/blob/b06880b0f256dafa0f558614fcb4b4f60f7d1488/Code/recursion.ts#L1-L10)

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

Another common use-case of recursion is to compute factorial [Code Reference](https://github.com/ahmadykhan555/data-structures-and-algorithms/blob/b06880b0f256dafa0f558614fcb4b4f60f7d1488/Code/recursion.ts#L12-L19)

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

### Common Pitfalls:

Recursion is a tricky topic to master, even experience developers sometimes struggle with it. One of the most common reasons a recursive function may spiral out of control is if the algorithm is not designed properly. In the introductory paragraph we looked at the two must have pieces in a recursive function and missing either of those can lead to stack overflow. Since recursion like any other chain of functions pushing things on to the call-stack, if a base condition or a function is called with the same input, it keeps getting pushed on the stack until the max limit is reached. So make sure to have a solid base condition that is logically correct along with a correct recursive call!
