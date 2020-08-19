// Follows First In First Out (FIFO)
/**
 * Searching O(n)
 * Accessing O(n)
 * Dequeue O(1)
 * Enqueue O(1)
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    //   remove from the head
    if (!this.size) {
      return null;
    }
    const toRemove = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return toRemove.val;
  }
}
