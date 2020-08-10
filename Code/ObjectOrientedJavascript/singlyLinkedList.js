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
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  static populateList(list, count) {
    for (let i = 0; i < count; i++) {
      list.push(Math.ceil(1000 * Math.random() + 1));
    }
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
    let count = 0;
    let current = this.head;
    while (current) {
      console.log(count, ", ", current.val);
      current = current.next;
      count++;
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
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  get(index) {
    if (index > this.length - 1 || index < 0) {
      return null;
    }
    let val;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  set(val, index) {
    const node = this.get(index);
    if (node) {
      node.val = val;
    }
  }

  insert(val, index) {
    //   inserts new node at the specified index
    if (index > this.length) {
      return false;
    } else if (this.length === index) {
      this.push(val);
    } else if (index === 0) {
      this.unshift(val);
    } else {
      const prev = this.get(index - 1);
      const current = prev.next;
      const newNode = new Node(val);
      newNode.next = current;
      prev.next = newNode;
    }
    this.length++;
  }
}

(() => {
  const list = new SinglyLinkedList();
  SinglyLinkedList.populateList(list, 10);
  list.traverse();
  console.log("Inserted");
  list.insert("inserted", 11);
  list.traverse();
})();
