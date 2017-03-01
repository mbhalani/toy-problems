/*
Linked List
Implement a linked-list
*/

var LinkedList = function (initialValue) {
  if (initialValue) {
    this.head = new Node(initialValue);
    this.tail = this.head;
  }
};

LinkedList.prototype.addToTail = function(value) {
  let node = new Node(value);

  if (!this.head) {
    this.head = node;
  }

  if (this.tail) {
    this.tail.next = node;
  }
  this.tail = node;
};

LinkedList.prototype.removeHead = function() {
  if (this.head === null) {
    return null;
  }
  let currentHead = this.head;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
  }

  return currentHead.value;
};

LinkedList.prototype.contains = function(target) {
  let currentHead = this.head;

  while (currentHead) {
    if (currentHead.value === target) {
      return true;
    }
    currentHead = currentHead.next;
  }

  return false;
};

var Node = function(value) {
  this.value = value;
  this.next = null;
};

var list = new LinkedList(4);
console.log(list);
console.log(list.head.value);
console.log(list.tail.value);
list.removeHead();
console.log(list);
console.log(list.contains(4));
