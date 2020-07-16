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
- Analyze the performance of you solution and see if you can improve the time and space complexity. [BIG O Reference](https://github.com/ahmadykhan555/data-structures-and-algorithms/blob/master/BigO.md)
- To be a better programmer always reflect on your solution and try to leave it in the best possible shape (as much as you can)
- Ensure the solution is robust and doesn't have leakages or loopholes. A well tested code always pays off in the longer run
- Remove the technical debt as much as possible, this is what differentiate a good programmer from an average one!

# Problem Solving Patterns

There is no silver bullet or one size fits all approach when it comes to solving programming problems. There are however ways/patterns that we can use to gain a better insight of the problem and address in a better way. These patterns don't always fit the problem a 100% but they do allow a programmer to become more mindful and sharp to address unseen, novice problems.

### Frequency Counter Approach

### Multiple Pointers Approach

### Sliding window Approach

### Divide and Conquer Approach
