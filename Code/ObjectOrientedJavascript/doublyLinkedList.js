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
    const prev = this.tail.prev;
    const toRemove = this.tail;
    if (prev) {
      prev.next = null;
      this.tail = prev;
      this.length--;
    }
    return toRemove;
  }

  shift() {}

  unshift(val) {}

  get(index) {
    if (index < 0 || index > this.length - 1) {
      return null;
    }
    let node = this.head;
    for (let i = 0; i < this.length; i++) {
      node = node.next;
    }
    return node;
  }

  set(val, index) {}

  insert(val, index) {}

  remove(index) {}

  reverse() {}
}

(() => {
  let list = new DoublyLinkedList();
  DoublyLinkedList.populateList(list, 5);
})();
