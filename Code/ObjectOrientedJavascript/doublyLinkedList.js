/**
 * Linked list is just another data structure
 * Linked list consists of nodes where each node carries a reference to the next node
 * It has no concept of indices like an array thus random access is not possible here
 * to search for a value we must traverse from Head or Tail till we find the value checking one node at a time and finding the next node by the reference it has stored in it.
 * A linked list where each node points to the other in one direction is a singlyLinkedList
 * A linked list where each node point to the other bi-directionally is a doubly linked list
 * A linked list where the tails points to the head is a circular linked list
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  static populateList(list, count) {
    for (let i = 0; i < count; i++) {
      list.push(Math.ceil(1000 * Math.random() + 1));
    }
  }

  push(val) {
    const node = new Node(val);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  traverse() {
    let count = 0;
    let current = this.head;
    const items = [];
    while (current) {
      items.push(current.val);
      current = current.next;
      count++;
    }
    return items;
  }

  pop() {
    //   remove from the end of a list
    if (!this.head) {
      return null;
    }
    const toRemove = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const prev = this.tail.prev;
      if (prev) {
        this.tail = toRemove.prev;
        this.tail.next = null;
        toRemove.prev = null;
      }
    }
    this.length--;
    return toRemove;
  }

  shift() {
    //   remove from the head
    const toRemove = this.head;
    if (!this.length) {
      return null;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const nextNode = this.head.next;
      nextNode.prev = null;
      this.head.next = null;
      this.head = nextNode;
    }
    this.length--;
    return toRemove;
  }

  unshift(val) {
    //   put a value at the start of the list;
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let useHead = index <= this.length / 2;
    let count = useHead ? 0 : this.length - 1;
    let current = useHead ? this.head : this.tail;
    let factor = useHead ? 1 : -1;
    let direction = useHead ? "next" : "prev";

    while (count != index) {
      current = current[direction];
      count += factor;
    }

    return current;
  }

  set(val, index) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return node;
    }
    return false;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    if (index === 0) {
      return this.unshift(val);
    }

    if (index === this.length) {
      return this.push(val);
    }

    const node = new Node(val);
    const nodeAtIndex = this.get(index);
    node.next = nodeAtIndex;
    node.prev = nodeAtIndex.prev;
    nodeAtIndex.prev.next = node;
    nodeAtIndex.prev = node;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= length) {
      return null;
    }
    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const nodeToRemove = this.get(index);
    const prev = nodeToRemove.prev;
    const next = nodeToRemove.next;

    prev.next = next;
    next.prev = prev;
    nodeToRemove.next = null;
    nodeToRemove.prev = null;
    this.length--;
    return nodeToRemove;
  }

  reverse() {}
}

(() => {
  let list = new DoublyLinkedList();
  DoublyLinkedList.populateList(list, 5);
})();
