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
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  pop() {
    if (!this.length) {
      return null;
    }
    let current = this.head;
    let prev = this.head;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
    this.tail = prev;
    this.length -= 1;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current.val;
  }

  shift() {
    // remove the head and reassign a new head
    if (!this.length) {
      return null;
    }
    const currentHead = this.head;
    const returnValue = this.head.val;
    const nextHead = currentHead.next;
    currentHead.next = null;
    this.head = nextHead;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    return returnValue;
  }

  unshift(val) {
    //adds something at the head
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }
}

(() => {
  const list = new SinglyLinkedList();
  list.push("hi");
  list.push("hello");
  list.push("wassup");
  list.push("YO!!");

  list.unshift(10);
  list.traverse();
  console.log("unshift again");
  list.unshift("AYK");
  list.traverse();
})();
