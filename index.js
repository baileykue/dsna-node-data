class LinkedListNode {
  #data = '';
  #next = null; // another instance of LinkedListNode

  constructor(data) {
    this.#data = data;
  }

  add(node) {
    if (!this.next) {
      this.next = node;
    } else {
      this.next.add(node);
    }
  }

  getList() {
    if (!this.next) return this.value;
    return ` ${this.value} ${this.next.getList()}`;
  }
}

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (node.value === this.value) {
      return;
    }
    if (node.value < this.value) {
      if (!this.left) this.left = node;
      else this.left.add(node);
    } else {
      if (!this.right) this.right = node;
      else this.right.add(node);
    }
  }
}

const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');

B.add(A);
B.add(D);
B.add(C);

class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (node.value === this.value) return;
    const dir = node.value < this.value ? 'left' : 'right';

    if (!this[dir]) this[dir] = node;
    else this[dir].add(node);
  }

  findPerson(name) {
    if (this.value === name) return this.person;

    const dir = node.value < this.value ? 'left' : 'right';
    if (!this[dir]) return null;
    return this[dir].findPerson(name);
  }
}
