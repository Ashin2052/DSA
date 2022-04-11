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
    const leader = this.traverseToINdex(index - 1);
    let holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }

  delete(index) {
    if (index >= this.length) {
      return;
    }
    const leader = this.traverseToINdex(index - 1);

    const unwantedNode = leader.next;

    leader.next = unwantedNode.next;
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
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(33, 99);
myLinkedList.printList();
