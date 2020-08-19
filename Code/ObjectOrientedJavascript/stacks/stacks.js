class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Stack must follow FILO (First In Last Out)

  push(val) {
    //   Constant time O(1)
    const newNode = new Node(val);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  pop() {
    //   Constant time O(1)

    //   remove the current head
    if (!this.size) {
      return null;
    }
    var toRemove = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      toRemove.next = null;
    }
    this.size--;
    return toRemove;
  }
}
