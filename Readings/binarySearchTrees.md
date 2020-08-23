# Tree

A tree is an advanced data structure consisting of nodes classified as parent, child sibling etc, built on top of linked lists and specializes in a variety of use-cases.

### Terminology

- **Root:**
  The top most node which serves as the entry point of a tree. A tree can have only one such entry points. All nodes of the tree point away from this node.
- **Parent:**
  A node which points to zero or n nodes
- **Child:**
  Descendants of a parent node. Usually a node that has a vertex pointing inwards is a child of some node.
- **Sibling:**
  Descendants of the same parent
- **Leaf:**
  A node that has no children
- **Vertex:**
  A line that connects parents to child. Usually the line originates from the parent and an arrow-head points to the child

### Important rules

For a data structure to qualify for a tree some important rules must be followed.

1. A node can only point to its direct children.
2. A child node cannot point to its parent node.
3. Sibling nodes cannot point to each other
4. A tree can have only one root (only one entry point).

### Common Real World Examples

1. **File system:**
   In most operating systems the file systems is represented using a tree
2. **Networking:**
   Trees are heavily used in facilitating data communication over the network
3. **Artificial Intelligence:**
   Decision trees are key to several AI based systems and games
4. **Abstract Syntax Tree:**
   Used by most modern compilers
5. **JSON:**
   Javascript Object Notation is one fairly common example of a tree.
6. **DOM:**
   Document Object Model is another fairly common example where a webpage can be represented as a tree of nodes.

# Binary Tree

A tree is called a binary tree when each node can have at-most two child nodes.

# Binary Search Tree

A binary tree becomes a binary search tree if each child node with value less than the parent node lies on the left while each child node with value greater than the parent lies on the right side of the parent node. This form of data distribution allows for very fast searching times, in most cases searching a binary search tree has time complexity of `O(log n)`
