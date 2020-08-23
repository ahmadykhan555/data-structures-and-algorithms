/**
 * Time complexity
 * In most cases both insertion and searching takes O(log n)
 * In very minor cases it can be O(n) if the tress is a one sided tree.
 * With every increase in level we have to compare only once more.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  insert(val) {
    // anything less than the current node goes to the left otherwise right; if equal ignore
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        return this;
      }
    }
  }

  search(val) {
    if (!this.root) return false;
    let current = this.root;
    while (true) {
      if (val < current.val) {
        // search left tree
        if (!current.left) {
          return false;
        }
        current = current.left;
        if (current.val === val) {
          return true;
        }
      } else if (val > current.val) {
        // search right tree
        if (!current.right) {
          return false;
        }
        current = current.right;
        if (current.val === val) {
          return true;
        }
      } else {
        return true;
      }
    }
  }

  breadthFirstSearch() {
    if (!this.root) return [];
    const queue = [this.root];
    const visited = [];
    while (queue.length) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      visited.push(node);
    }
  }
}
