let list = {
  head: {
    value: 22,
    next: {
      value: 4,
      next: {
        value: 12,
        next: {
          value: 23,
          next: {
            value: 24,
            next: null,
          },
        },
      },
    },
  },
};

class NOde {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new NOde(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new NOde(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];

    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      return;
    }

    const newNode = new NOde(value);
    let leader = this.traverseToINdex(index - 1);
    let holdingPointer = leader.next;

    leader.next = newNode;
    newNode.next = holdingPointer;

    this.length++;
  }

  delete(index) {
    if (index >= this.length) {
      return;
    }

    let leader = this.traverseToINdex(index - 1);

    let holdingPointer = leader.next;

    leader.next = holdingPointer.next;

    this.length--;
  }
  traverseToINdex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  // [1,2,3,4,5,6,7,8,9,10]
  reverse() {
    if (this.length === 0) return;

    let first = this.head;
    this.tail = first;
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(33, 99);
myLinkedList.insert(33, 44);
myLinkedList.delete(1);

myLinkedList.printList();
myLinkedList.reverse();
// myLinkedList.printList();
