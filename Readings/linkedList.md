# Linked Lists

Array like structures but non-indexed. Efficient at a few things while a bit slow at the other. In this sub-section we explore how to create and interact with Linked List. Linked Lists are important to learn as they are the foundations of advanced/complex data structures like Queues and Stacks.
All a linked list is an abstract data structure where each node is linked to the next or previous using some pointers. There are mainly three types of linked lists

1. Singly Linked List
2. Doubly Linked List
3. Circular Linked List (can be singly or doubly)

In this section we explore each of these in detail. We will write a bunch of methods to interact with the linked lists. We will use Javascript Classes to implement our linked lists.

#### Note

Javascript class syntax is just a syntactic sugar to provide a class-like way of writing things in Javascript. Under the hood it uses prototype inheritance to achieve this. [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

### Singly Linked List

A singly linked list is uni-directional, ie each node points to either the next or previous note but not both.
| Method | usage | Complexity | Detail |
| ---------- | -------- | ----- | ----|
| Push | Adds a new node to the tail | O(1) | We have a direct pointer to the tail and we just add a new node and call it the tail
