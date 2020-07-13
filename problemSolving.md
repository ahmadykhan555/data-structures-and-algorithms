# Problem Solving Techniques and Patterns

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
